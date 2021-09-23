import React, { useEffect, useState } from "react";
import { BlogCard } from "../components";

export const Blogs = () => {
  const [blogsList, setBlogsList] = useState([]);
  useEffect(() => {
    fetchBlogs(setBlogsList);
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 justify-items-center">
      {blogsList.map((blog) => {
        return (
          <BlogCard
            key={blog.id}
            heading={blog.title}
            imgURL={blog.cover_image}
            blogUrl={blog.url}
            website={blog.website}
          />
        );
      })}
    </div>
  );
};

async function fetchBlogs(setBlogsList) {
  const blogsList1 = await fetchDevToBlogs();
  const blogsList2 = await fetchHashnodeBlogs();
  setBlogsList(blogsList1.concat(blogsList2));
}

async function fetchHashnodeBlogs() {
  try {
    const query = `{
      user(username: "shivaansh") { 
        publication {
          posts {
            _id
            title
            slug
            coverImage
          }
        }
      }
    }`;
    const response = await fetch("https://api.hashnode.com", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query }),
    });
    console.log(response);
    const blogs = await response.json();
    const blogsList = blogs.data.user.publication.posts;
    const filteredBlogsContent = blogsList.map((blog) => {
      return {
        id: blog._id,
        title: blog.title,
        cover_image: blog.coverImage,
        url: `https://shivaansh.hashnode.dev/${blog.slug}`,
        website: "Hashnode",
      };
    });
    return filteredBlogsContent;
  } catch (e) {
    // TODO: Raise a Toast Message
    console.error(e);
  }
}

async function fetchDevToBlogs() {
  try {
    const response = await fetch(
      "https://dev.to/api/articles?username=shiv1998"
    );
    const blogs = await response.json();
    const filteredBlogsContent = blogs.map((blog) => {
      return {
        id: blog.id,
        title: blog.title,
        cover_image: blog.cover_image,
        url: blog.url,
        website: "DevTo",
      };
    });
    return filteredBlogsContent;
  } catch (e) {
    // TODO: Raise a Toast Message
    console.error(e);
  }
}
