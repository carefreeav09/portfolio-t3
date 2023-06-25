import React from "react";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sem ac neque convallis aliquam at vitae leo.",
    techStack: ["React", "Tailwind CSS", "Node.js"],
    type: "web",
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sem ac neque convallis aliquam at vitae leo.",
    techStack: ["Vue.js", "SCSS", "Firebase"],
    type: "web",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sem ac neque convallis aliquam at vitae leo.",
    techStack: ["Angular", "Bootstrap", "MongoDB"],
    type: "mobile",
  },
];

const ProjectList = () => {
  const [projectType, setProjectType] = React.useState("all");
  return (
    <div className="item-content min-h-screen bg-[#121212] py-8">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-center gap-6">
          <h1 className="text-center text-4xl font-bold text-white">
            Projects
          </h1>

          <div className="flex items-center justify-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="h-6 w-6 cursor-pointer"
              onClick={() => {
                setProjectType("all");
              }}
            >
              <path
                fill="currentColor"
                d="M13 21v-8h8v8h-8Zm0-10V3h8v8h-8ZM3 11V3h8v8H3Zm0 10v-8h8v8H3Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="h-6 w-6 cursor-pointer"
              onClick={() => {
                setProjectType("web");
              }}
            >
              <path
                fill="currentColor"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 9h10.5v3.5H4V9zm0 5.5h10.5V18H4v-3.5zM20 18h-3.5V9H20v9z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="h-6 w-6 cursor-pointer"
              onClick={() => {
                setProjectType("mobile");
              }}
            >
              <path
                fill="currentColor"
                d="M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7.01 13.47l-2.55-2.55l-1.27 1.27L7 16l7.19-7.19l-1.27-1.27l-5.91 5.93z"
              />
            </svg>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-6">
            {projects
              .filter((project) => {
                if (projectType === "all") return true;
                return project.type === projectType;
              })
              .map((project, index) => (
                <div
                  key={project.id}
                  className={`flex ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-1/2">
                    <div className="rounded-lg p-6 ">
                      <h2 className="mb-4 text-xl font-semibold text-white">
                        {project.title}
                      </h2>
                      <p className="mb-4 text-gray-300">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="mr-2 mb-2 rounded-full bg-blue-500 py-1 px-2 text-xs text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
