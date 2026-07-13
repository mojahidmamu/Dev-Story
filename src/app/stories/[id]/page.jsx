import Link from "next/link";
import React from "react";

const ShowDetails = async ({ params }) => {
  const { id } = await params;

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

  const singleStory = developerStories.find(
    (story) => story.id === parseInt(id),
  );
  
  if (!singleStory) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-red-500">Story Not Found!</h1>
      </div>
    );
  }

  const {
    name,
    designation,
    company,
    experience,
    skill,
    story: developerStory,
    about,
  } = singleStory;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-indigo-50 py-14">
      <div className="mx-auto max-w-6xl px-5">
        {/* Back Button */}
        <Link
          href="/stories"
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 font-medium shadow transition hover:bg-indigo-600 hover:text-white"
        >
          ← Back to Stories
        </Link>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
          {/* Hero */}
          <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 p-10 text-white">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              {/* Avatar */}
              <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-white bg-white text-6xl font-bold text-indigo-600 shadow-xl">
                {singleStory.name.charAt(0)}
              </div>

              {/* Info */}
              <div>
                <h1 className="text-4xl font-bold md:text-5xl">{singleStory.name}</h1>

                <p className="mt-2 text-xl text-indigo-100">
                  {singleStory.designation}
                </p>

                <p className="text-lg text-indigo-200">{singleStory.company}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-white/20 px-4 py-2">
                    💼 {singleStory.experience}
                  </span>

                  <span className="rounded-full bg-white/20 px-4 py-2">
                    🚀 {singleStory.skill}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-10 p-10">
            {/* Journey */}
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-8">
              <h2 className="mb-5 text-3xl font-bold text-indigo-700">
                🚀 Developer Journey
              </h2>

              <p className="leading-8 text-gray-700">{singleStory.story}</p>
            </div>

            {/* About */}
            <div className="rounded-2xl border border-green-100 bg-green-50 p-8">
              <h2 className="mb-5 text-3xl font-bold text-green-700">
                👨‍💻 About Developer
              </h2>

              <p className="leading-8 text-gray-700">{singleStory.about}</p>
            </div>

            {/* Quick Info */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-slate-100 p-6 text-center shadow">
                <h3 className="text-lg font-semibold text-gray-600">Company</h3>

                <p className="mt-3 text-xl font-bold text-indigo-700">
                  {singleStory.company}
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 p-6 text-center shadow">
                <h3 className="text-lg font-semibold text-gray-600">
                  Experience
                </h3>

                <p className="mt-3 text-xl font-bold text-indigo-700">
                  {singleStory.experience}
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 p-6 text-center shadow">
                <h3 className="text-lg font-semibold text-gray-600">Skills</h3>

                <p className="mt-3 text-lg font-bold text-indigo-700">
                  {singleStory.skill}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
              <Link href="/stories">
                <button className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700">
                  ← All Developer Stories
                </button>
              </Link>

              <Link href="/">
                <button className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700">
                  🏠 Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowDetails;
