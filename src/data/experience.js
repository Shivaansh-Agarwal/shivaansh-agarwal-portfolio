const present = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  date: new Date().getDate(),
};

const experienceData = [
  {
    id: 2,
    companyName: "Temenos",
    companyLogo:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQGsfCa1_DBYlw/company-logo_100_100/0/1625127760758?e=1640217600&v=beta&t=K8M1k61QPMGXADsVJiusuHqDKsSLy07qJZRuCL-ZagQ",
    startDate: { year: 2019, month: 6, date: 19 },
    endDate: present,
    location: "Hyderabad, India",
    designations: [
      {
        designation: "Senior Software Engineer",
        employmentType: "Full Time",
        startDate: { year: 2021, month: 7, date: 1 },
        endDate: present,
        description:
          "• Responsible for converting monolithic Authentication Module for Mobile and Online Banking Application to Microapp",
      },
      {
        designation: "Software Development Engineer",
        employmentType: "Full Time",
        startDate: { year: 2020, month: 8, date: 1 },
        endDate: { year: 2021, month: 6, date: 31 },
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil enim doloremque, assumenda voluptatibus commodi repellat! Quasi excepturiaperiam commodi. Laudantium dolore eligendi iusto expedita veniam etsuscipit sed pariatur optio veritatis error sit doloremque quastotam aut eius sapiente nihil delectus accusamus porro magnam,adipisci dignissimos similique? Iusto, at repellat!",
      },
      {
        designation: "Associate Software Development Engineer",
        employmentType: "Internship",
        startDate: { year: 2019, month: 7, date: 1 },
        endDate: { year: 2020, month: 7, date: 31 },
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil enim doloremque, assumenda voluptatibus commodi repellat! Quasi excepturiaperiam commodi. Laudantium dolore eligendi iusto expedita veniam etsuscipit sed pariatur optio veritatis error sit doloremque quastotam aut eius sapiente nihil delectus accusamus porro magnam,adipisci dignissimos similique? Iusto, at repellat!",
      },
    ],
  },
  {
    id: 1,
    companyName: "Webhelp India",
    companyLogo:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQHqs-rgTQhZPw/company-logo_100_100/0/1625165478063?e=1640217600&v=beta&t=mt1d3Rxs4UVUpuLQ8VXBfOaaEPjQQonJOMmo6YuqbQg",
    startDate: { year: 2018, month: 6, date: 1 },
    endDate: { year: 2018, month: 7, date: 31 },
    location: "Gurgaon, India",
    designations: [
      {
        designation: "Data Science Intern",
        employmentType: "Internship",
        startDate: { year: 2018, month: 6, date: 1 },
        endDate: { year: 2018, month: 7, date: 31 },
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil enim doloremque, assumenda voluptatibus commodi repellat! Quasi excepturiaperiam commodi. Laudantium dolore eligendi iusto expedita veniam etsuscipit sed pariatur optio veritatis error sit doloremque quastotam aut eius sapiente nihil delectus accusamus porro magnam,adipisci dignissimos similique? Iusto, at repellat!",
      },
    ],
  },
];

export default experienceData;
