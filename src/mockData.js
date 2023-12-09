const resumeData = {
  firstName: "John",
  lastName: "Smith",
  designation: "Software Engineer",
  email: "johnsmith@example.com",
  website: "example.com",
  mobile: "012xxxxxx9",
  address: "Bangalore",
  objective:
    "Voluptate Lorem ea ullamco dolor in dolor non labore. Cupidatat ipsum ad cillum labore nostrud veniam. Quis ea sint eiusmod voluptate minim occaecat quis ex dolore. Esse eiusmod Lorem magna cillum qui culpa tempor. Culpa cillum duis voluptate irure deserunt ad tempor ad velit magna labore. Aute nostrud cupidatat eiusmod et officia adipisicing velit deserunt consequat.",
  experience: [
    {
      name: "Alpha Beta Company",
      description: "Sales Manager",
      technologies: ["Nodejs", "Javascript", "MongoDB", "Express"],
      to: "2019",
      from: "2020",
      companyLogo: "",
    },
  ],
  projects: [
    {
      name: "Easy Resume Builder",
      description: "Web App to create awesome resume builder",
    },
    {
      name: "Meme Creator",
      description: "Web App to create Memes with awesome web editor",
    },
  ],
  skills: [],
};

export default resumeData;

export const tabs = [
  "Genral",
  "Objective",
  "Experience",
  "Projects",
  "Skills",
  "Education",
];
