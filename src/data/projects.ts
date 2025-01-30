type Project = {
    id: number;
    title: string;
    description: string;
    img: string;
    tools: string[];
};

export const projects: Project[] = [
    {
        id: 1,
        title: "KHDA",
        description:
            "The Knowledge and Human Development Authority (KHDA) in Dubai regulates and ensures the quality of private education. I developed an appointment booking system for KHDA, allowing customers to generate tokens for their appointments using tablets available at the KHDA office. Once a token is generated, customers wait for their turn, during which they can order refreshments through the app on the tablet at their table. A staff member is automatically assigned to the token, and upon the customer's turn, the staff member initiates the session via the KHDA app. After the session concludes, a feedback form is presented for the customer to leave a review, enhancing the overall experience and service quality.",
        img: "/assets/projects/khda.png",
        tools: ["Next.js", "Tailwind CSS", "Shadcn-UI", "AWS", "Node.js", "TypeScript"],
    },
    {
        id: 2,
        title: "Hedgehog",
        description:
            "Hedgehog is a crypto-focused web application that I developed, featuring a robust front-end built with React.js and Ant Design. The platform offers a comprehensive set of features, including detailed information displayed across various tables such as All Pools, Lending Pools, Baskets, and Hedged Farming. Users can leverage multiple filtering options to refine data and gain insights through interactive charts for coin analysis and comparison. The application also supports backtesting and farming functionalities, enhancing its utility for users. Additionally, Hedgehog includes a dark mode and light mode, providing a flexible user experience tailored to individual preferences.",
        img: "/assets/projects/hedgehog.png",
        tools: ["React.js", "Ant Dsign", "CSS", "Chart.js", "React Router", "TypeScript"],
    },
    {
        id: 3,
        title: "Callmi",
        description:
            "Callmi.co is a platform that enables users to sign in and schedule meetings with industry experts, who are listed on the platform with specific rates. As a Frontend Developer, I contributed to the development of Callmi by creating a comprehensive Dashboard for users and experts. I integrated Cloudinary and AWS for seamless profile picture updates, allowing experts to manage their accounts efficiently. Additionally, I implemented advanced filtering logic to enhance user experience by enabling precise searches and connections with experts.",
        img: "/assets/projects/callmi.png",
        tools: ["Next.js", "Shadcn-UI", "Tailwind CSS", "Cloudinary", "TypeScript", "Server Actions"],
    },
    {
        id: 4,
        title: "CaseCobra",
        description:
            "At CaseCobra, users can create custom phone cases by selecting their iPhone model and uploading their own images. Once the image is uploaded, users can personalize their design by choosing colors and making adjustments to create a unique phone case. After customizing, they can place an order, and the custom phone case will be delivered to them. I developed this platform using Next.js v14, Prisma, NeonDB, Shadcn, and other modern technologies to ensure a seamless and efficient user experience.",
        img: "/assets/projects/casecobra.png",
        tools: ["Next.js", "Shadcn-UI", "TypeScript", "Prisma", "NeonDB", "Tailwind CSS"],
    },
    {
        id: 5,
        title: "Bakery App",
        description:
            "Sweets Maven is a hobby project that utilizes the Airtable API to fetch and display data on nearby bakery shops. Users can browse a comprehensive list of local bakeries, explore details about each shop, and cast their votes. The project is built with Next.js v12 and React 17, ensuring a modern and responsive web experience. Additionally, Unsplash JS is integrated to enhance the visual presentation of the bakery listings with high-quality images.",
        img: "/assets/projects/bakery.png",
        tools: ["Next.js", "React", "Airtable", "SWR"],
    },
];
