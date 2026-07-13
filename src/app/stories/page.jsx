import Title from "@/component/Title";
import Link from "next/link";
import React from "react";

const Stories = () => {
    const developerStories = [
        {
        id: 1,
        name: "Arafat Hossain",
        designation: "Frontend Developer",
        company: "Brain Station 23",
        experience: "2 Years",
        skill: "React.js, Next.js, Tailwind CSS",
        story:
            "My journey into web development started during my diploma studies. I built small HTML and CSS projects before discovering JavaScript. Learning React completely changed my perspective because it made building user interfaces enjoyable. I practiced every day, participated in coding challenges, and created portfolio projects. After months of dedication, I secured my first frontend developer position. Today, I continue learning Next.js, performance optimization, and UI design while mentoring beginners and contributing to open-source projects whenever possible.",
        about:
            "Arafat Hossain is a passionate frontend developer specializing in modern JavaScript frameworks. His expertise includes React, Next.js, TypeScript, and Tailwind CSS. Throughout his career, he has worked on responsive dashboards, e-commerce platforms, and business applications with a focus on accessibility and user experience. He believes consistency is the key to becoming a successful developer and regularly practices problem-solving to improve logical thinking. Besides programming, he enjoys writing technical blogs, helping new developers, and exploring the latest frontend technologies. His long-term goal is to become a full-stack architect capable of designing scalable applications for millions of users.",
        },
        {
        id: 2,
        name: "Nusrat Jahan",
        designation: "Backend Developer",
        company: "TigerIT Bangladesh",
        experience: "3 Years",
        skill: "Node.js, Express.js, MongoDB",
        story:
            "I initially wanted to become a network engineer but discovered backend development during university. Building REST APIs and connecting databases fascinated me. I spent countless nights learning Node.js and MongoDB while building small applications. Eventually, I joined a software company where I developed secure APIs and authentication systems. Every challenge taught me something valuable, making backend engineering both exciting and rewarding.",
        about:
            "Nusrat Jahan works as a backend developer with strong expertise in Node.js, Express.js, MongoDB, and PostgreSQL. She enjoys designing scalable APIs, optimizing database queries, and improving application performance. She strongly believes clean architecture and testing are essential for reliable software. Outside work, she contributes to developer communities, mentors junior programmers, and frequently participates in hackathons. Her ambition is to specialize in distributed systems and cloud-native application development.",
        },
        {
        id: 3,
        name: "Tanvir Ahmed",
        designation: "Full Stack Developer",
        company: "Enosis Solutions",
        experience: "4 Years",
        skill: "MERN Stack",
        story:
            "I started coding because I wanted to build websites for local businesses. Over time I learned React, Node.js, Express, and MongoDB. Freelancing helped me understand real client requirements and improve communication skills. Eventually I transitioned into full-time software development where I work on enterprise applications while continuously learning modern technologies.",
        about:
            "Tanvir Ahmed is a MERN Stack developer experienced in developing enterprise web applications from scratch. His strengths include API design, frontend optimization, authentication systems, and cloud deployment. He enjoys collaborating with cross-functional teams and solving complex business problems through software engineering. In his free time, he studies system design and DevOps practices to broaden his technical expertise.",
        },
        {
        id: 4,
        name: "Mahin Rahman",
        designation: "Software Engineer",
        company: "DataSoft Systems",
        experience: "5 Years",
        skill: "Java, Spring Boot",
        story:
            "Learning Java was difficult at first, but persistence made everything easier. I built inventory systems, banking applications, and backend services before joining my current company. Continuous practice and curiosity helped me become a confident software engineer.",
        about:
            "Mahin Rahman specializes in Java, Spring Boot, and microservice architecture. He has worked on large-scale enterprise systems requiring scalability and security. He enjoys mentoring junior developers, reviewing code, and improving engineering practices across teams. His future goal is to become a software architect focused on cloud-native solutions.",
        },
        {
        id: 5,
        name: "Sadia Islam",
        designation: "UI/UX Engineer",
        company: "TechCare",
        experience: "3 Years",
        skill: "Figma, React",
        story:
            "I always loved design more than programming. Combining UI design with frontend development allowed me to create beautiful and functional products. Every project taught me how users think and interact with digital experiences.",
        about:
            "Sadia Islam combines design thinking with frontend engineering to build intuitive user experiences. She creates design systems, prototypes, and responsive interfaces while collaborating closely with developers and product managers. She believes great software begins with understanding user needs.",
        },
        {
        id: 6,
        name: "Rakib Hasan",
        designation: "DevOps Engineer",
        company: "BJIT",
        experience: "4 Years",
        skill: "Docker, Kubernetes, AWS",
        story:
            "Infrastructure automation fascinated me more than application development. Learning Docker and Kubernetes transformed my career and allowed me to automate deployments efficiently. Today I manage cloud infrastructure for production systems.",
        about:
            "Rakib Hasan specializes in cloud infrastructure, CI/CD pipelines, Docker, Kubernetes, and AWS. He focuses on automation, monitoring, scalability, and security while helping development teams deliver software faster and more reliably.",
        },
        {
        id: 7,
        name: "Fahim Chowdhury",
        designation: "Mobile App Developer",
        company: "REVE Systems",
        experience: "3 Years",
        skill: "Flutter",
        story:
            "Building mobile applications gave me the opportunity to solve real-life problems. Flutter allowed me to create Android and iOS applications from a single codebase, making development faster and more enjoyable.",
        about:
            "Fahim Chowdhury develops cross-platform mobile applications using Flutter and Firebase. He enjoys creating clean interfaces, integrating APIs, and optimizing application performance. He continually explores new mobile technologies and contributes to Flutter communities.",
        },
        {
        id: 8,
        name: "Mehedi Hasan",
        designation: "Machine Learning Engineer",
        company: "Brain Station AI",
        experience: "2 Years",
        skill: "Python, TensorFlow",
        story:
            "Artificial intelligence inspired me to pursue machine learning. I began with Python and mathematics before exploring deep learning frameworks. Building image classification projects strengthened my understanding of AI systems.",
        about:
            "Mehedi Hasan develops machine learning models using Python, TensorFlow, and PyTorch. He enjoys solving data-driven problems, training predictive models, and deploying AI applications. His long-term objective is to build intelligent products that positively impact society.",
        },
        {
        id: 9,
        name: "Rifat Karim",
        designation: "Cyber Security Engineer",
        company: "Spectrum Engineering",
        experience: "5 Years",
        skill: "Ethical Hacking, Linux",
        story:
            "Cybersecurity became my passion after participating in Capture The Flag competitions. Every challenge improved my understanding of vulnerabilities and secure software development. Today I help organizations protect their systems.",
        about:
            "Rifat Karim specializes in penetration testing, vulnerability assessment, network security, and Linux administration. He conducts security audits, trains developers on secure coding practices, and researches emerging cybersecurity threats.",
        },
        {
        id: 10,
        name: "Jannatul Ferdous",
        designation: "Cloud Engineer",
        company: "Orbitax Bangladesh",
        experience: "4 Years",
        skill: "Azure, Terraform",
        story:
            "Cloud computing opened endless opportunities for automation and scalability. I started learning Azure while working as a system administrator and gradually transitioned into cloud engineering. Every certification strengthened my confidence.",
        about:
            "Jannatul Ferdous designs cloud infrastructure using Azure, Terraform, and Infrastructure as Code principles. She focuses on secure deployments, automation, monitoring, and cost optimization. She actively learns new cloud technologies and shares knowledge through technical workshops.",
        },
    ];

  return (
    <div>
      {/* Header & Title  */}
      <div className="mb-6 text-center">
        <h1 className="text-5xl font-extrabold text-slate-800">
          Developer Stories
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Explore inspiring journeys of talented developers who transformed
          their passion for coding into successful careers.
        </p>
      </div>

      {/* Developer Stories Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {developerStories.map((story) => (
          <div
            key={story.id}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl font-bold text-indigo-600 shadow-lg">
                  {story.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-xl font-bold">{story.name}</h3>
                  <p className="text-sm text-indigo-100">{story.designation}</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  💼 {story.company}
                </span>

                <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
                  {story.experience}
                </span>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700">Skills</h4>

                <p className="mt-1 text-sm text-gray-600">{story.skill}</p>
              </div>

              <p className="line-clamp-4 leading-7 text-gray-600">
                {story.story}
              </p>

              <Link href={`/stories/${story.id}`}>
                <button className="mt-3 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition duration-300 hover:bg-indigo-700">
                  Read Full Story →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
