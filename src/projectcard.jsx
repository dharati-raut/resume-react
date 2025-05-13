const ProjectCard = () => {
  return (
    <div>
      {/* Amazon Clone Card */}
      <div className="p-4 border rounded-lg shadow-md mb-4">
        <h3 className="text-xl font-bold">
          Amazon Clone
          <a
            href="https://dharati-raut.github.io/amazon-clone/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-sm ml-2 underline"
          >
            (Live)
          </a>
        </h3>
        <p className="mt-2">
          A responsive e-commerce front-end clone of Amazon built using HTML,
          CSS, and JavaScript.
        </p>
      </div>

      {/* React Resume Card */}
      <div className="p-4 border rounded-lg shadow-md mb-4">
        <h3 className="text-xl font-bold">
          React Resume Website
          <a
            href="https://dharati-raut.github.io/react-resume/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-sm ml-2 underline"
          >
            (Live)
          </a>
        </h3>
        <p className="mt-2">
          A personal resume website built using React.js, hosted on GitHub
          Pages. It highlights my skills, projects, and career goals.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
