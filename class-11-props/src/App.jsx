import React from "react";
import User from "./component/User";

const App = () => {
  const users = [
    {
      fullName: "John Smith",
      image: "https://plus.unsplash.com/premium_photo-1727942419945-1908baae3c8e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      age: 24,
      role: "Frontend Developer",
      isFollow: true,
      description: "Passionate about building modern web experiences.",
    },
    {
      fullName: "Emma Johnson",
      image: "https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fG1vZGVsfGVufDB8fDB8fHww",
      age: 26,
      role: "UI/UX Designer",
      isFollow: false,
      description: "Creative designer who loves simple and clean interfaces.",
    },
    {
      fullName: "Michael Brown",
      image: "https://images.unsplash.com/photo-1619785292559-a15caa28bde6?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      age: 28,
      role: "Backend Developer",
      isFollow: true,
      description: "Enjoys building scalable APIs and backend systems.",
    },
    {
      fullName: "Sophia Davis",
      image: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://randomuser.me/api/portraits/women/4.jpg",
      age: 23,
      role: "React Developer",
      isFollow: false,
      description: "React enthusiast who loves creating interactive apps.",
    },
    {
      fullName: "Daniel Wilson",
      image: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      age: 30,
      role: "Full Stack Developer",
      isFollow: true,
      description: "Building full-stack applications and learning new tech.",
    },
    {
      fullName: "Olivia Martinez",
      image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://randomuser.me/api/portraits/women/6.jpg",
      age: 25,
      role: "Product Designer",
      isFollow: false,
      description: "Designing products that are useful and easy to use.",
    },
    {
      fullName: "James Anderson",
      image: "https://plus.unsplash.com/premium_photo-1669703777695-f8052a432411?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      age: 27,
      role: "Software Engineer",
      isFollow: true,
      description:
        "Software engineer interested in web and cloud technologies.",
    },
    {
      fullName: "Ava Taylor",
      image: "https://images.unsplash.com/photo-1611042553484-d61f84d22784?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://randomuser.me/api/portraits/women/8.jpg",
      age: 22,
      role: "Frontend Developer",
      isFollow: false,
      description: "Loves coding beautiful and responsive websites.",
    },
    {
      fullName: "William Thomas",
      image: "https://images.unsplash.com/photo-1622519407650-3df9883f76a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1vZGVsfGVufDB8fDB8fHww://randomuser.me/api/portraits/men/9.jpg",
      age: 29,
      role: "DevOps Engineer",
      isFollow: true,
      description:
        "Automating deployments and improving development workflows.",
    },
    {
      fullName: "Isabella Moore",
      image: "https://images.unsplash.com/photo-1694062045776-f48d9b6de57e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      age: 24,
      role: "JavaScript Developer",
      isFollow: false,
      description: "JavaScript lover who enjoys solving coding problems.",
    },
  ];
  return (
    <div className=" flex flex-wrap p-5 min-h-screen w-full  bg-black -100  gap-6">
      {users.map((elem, idx) => {
        return <User key={idx} users={elem} />;
      })}
    </div>
  );
};

export default App;
