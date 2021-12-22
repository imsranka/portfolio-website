export const projects = [
  {
    id: 3,
    name: "Covid DSS",
    description: "Lorem ipsum dolor simet",
    role: "Frontend Developer",
    org: "Sapio Analytics",
    color: "pink",
    content: [
      `With surge of COVID in 2020, it was necessary to track details on the trends in surge of cases, facilities available and measures to control its spread. A solution was to create a dashboard which catered to this.`,
      `Initial involvement was to develop basic page layout & handle its aesthetics. Later, I worked on the development the MIS & Recommendation layers in the dashboard.
      In parallel, I aided the development of GeoJSON files.`,
    ],
    credits: ["Poonam Dhoot", "Yash", "Kritika"],
    images: [
      {
        path: "/covid dss/login covid dss.png",
        alt: "Login",
        caption: "Login Page",
      },
      {
        path: "/covid dss/mis1.png",
        alt: "MIS Page",
        caption: "MIS Page for Spread related Information",
      },
      {
        path: "/covid dss/Screenshot (465).png",
        alt: "Login",
        caption: "MIS Page for Hospital related Information",
      },
      {
        path: "/covid dss/eco1.png",
        alt: "Login",
        caption: "Economic Page for Red Lockdown Plan",
      },
    ],
  },
  {
    id: 4,
    name: "UP Census",
    description: "Lorem ipsum dolor simet",
    role: "Frontend Developer",
    org: "Sapio Analytics",
    color: "violet",
    content: [
      `One of the new-age technology based census enumeration. This project aimed at transforming the pen-paper based enumeration into digital census format. The ‘pen-paper’ were replaced by mobile app for data collection &, to manage & monitor census related activities, an admin dashboard was created. 
      This involved a hierarchy of users for ease of management & tracking.`,
      `Involvement included visualizing the team hierarchy in a nested table format & enable supervisors to keep a track of their enumerators (volunteers). Diverse features were available based on user types like creating new supervisors & volunteers, editing details of users, checking the survey count of enumerators.
      `,
    ],
    credits: ["Aman Rai", "Arpit", "Tarang", "Kritika"],
  },
  {
    id: 1,
    name: "Saksham",
    description: "Lorem ipsum dolor simet",
    role: "Frontend Developer",
    org: "Sapio Analytics",
    color: "salmon",
    content: [
      `At one end, we have shramiks or blue-collared workers who have relevant skills but are not able to get the desired work and on the other end, we have industries who require shramiks (workers) to get their work done. To mitigate this gap, Saksham was born. This project aimed at providing a platform for Shramiks to come and register themselves, and find a job fitting their skillset.`,
      `A second phase to this was to enable industries to hire these Shramiks based on their requirement. My Involvement include creating a dashboard, where the industries can register themselves, understand the availability of workers based on States & Districts & creating an Admin dashboard to get analytical insights. In this project, I got to thoroughly explore & experiment with Mapbox maps, as a better part of interaction was controlled via Maps.`,
    ],
    credits: ["Arpit", "Anil Sahoo", "Nishant", "Disha", "Riya"],
    images: [
      {
        path: "/Admin Login.png",
        alt: "Login",
        caption: "Login Page for Admin",
      },
      {
        path: "/saksham landing.png",
        alt: "Saksham Landing",
        caption: "Saksham Landing Page",
      },
      {
        path: "/industry 2.png",
        alt: "Industry Dashboard",
        caption: "Shramik Page of Industry Dashboard",
      },
      {
        path: "/admin 1.png",
        alt: "Admin Dashboard",
        caption: "Shramik Page of Admin Dashboard",
      },
    ],
  },
  {
    id: 2,
    name: "Data Uploading Portal",
    description: "Lorem ipsum dolor simet",
    role: "Frontend Developer",
    org: "Sapio Analytics",
    color: "cyan",
    content: [
      `This portal was strategized out of a requirement to collect data from the client. Aim here was to create a simple-to-use portal which provided departmental categorization, for uploading the data. Custom features were then added, based on client requirement to provide excel upload feature and updating the existing data.`,
      `Interesting aspect of this portal is in its dynamism. Developers were stuck with the question ‘Do we have to code all of the forms owing to the number of departments?’ 
      Answer to which was creating a logic which can cater to all such forms. To support this idea, all forms were formatted into a JSON file with relevant metadata added and thus, with the help of this logic, the forms were rendered dynamically & with ease.
      `,
    ],
    credits: ["Akash", "Anil"],
  },
];
