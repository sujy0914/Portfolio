function Projects() {
  const projects = [
    { 
      name: "일기&음악 사이트", 
      img: "/projects/project1.png",
      url: "https://github.com/sujy0914/MuD",
      desc: "개인 일기 작성 및 음악 감상 플랫폼",
      role: "Full Stack",
      tech: ["Java", "Node.js"]
    },
    { 
      name: "정기 구독 서비스 관리", 
      img: "/projects/project2.png",
      url: "https://github.com/sujy0914/subcheck",
      desc: "구독 서비스 통합 관리",
      role: "Mobile",
      tech: ["Android", "Flutter"]
    },
    { 
      name: "도서대여 프로그램", 
      img: "/projects/project3.png",
      url: "https://github.com/sujy0914/QuadBooki",
      desc: "도서 대여 시스템",
      role: "Backend",
      tech: ["Java", "MySQL"]
    },
    { 
      name: "법정교육 관리 프로그램", 
      url: "https://github.com/sujy0914/Edura",
      desc: "사내 법정교육 관리",
      role: "Backend",
      tech: ["Java", "Server"]
    },
  ];

  const ProjectCard = ({ project }) => (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-bg-card rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 aspect-[4/3] flex flex-col h-full">
        <div className="flex-1 min-h-0">
          {project.img ? (
            <img 
              src={project.img} 
              alt={project.name} 
              className="w-full h-full object-cover" 
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
              <span className="text-xs sm:text-sm text-primary font-bold text-center px-2">{project.name}</span>
            </div>
          )}
        </div>
        <div className="p-1 sm:p-1.5 lg:p-2 text-center bg-gradient-to-r from-primary/10 to-primary/5 flex-shrink-0">
          <h3 className="font-bold text-[8px] sm:text-[9px] lg:text-[10px] text-neutral-800 mb-0.5">{project.name}</h3>
          <p className="text-[7px] sm:text-[8px] text-neutral-600 mb-0.5 sm:mb-1">{project.desc}</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0.5 text-[7px] sm:text-[8px]">
            <div className="flex items-center gap-0.5">
              <span className="text-neutral-800 font-bold">Role:</span>
              <span className="px-1 sm:px-1.5 py-0.5 bg-neutral-100 text-neutral-700 font-semibold rounded-full text-[7px] sm:text-[8px]">{project.role}</span>
            </div>
            <span className="hidden sm:inline text-neutral-400 text-[7px]">|</span>
            <div className="flex items-center gap-0.5 flex-wrap justify-center">
              <span className="text-neutral-800 font-bold">Tech:</span>
              {project.tech.map((t, i) => (
                <span key={i} className="px-1 sm:px-1.5 py-0.5 bg-primary/20 text-primary-dark font-semibold rounded-full text-[7px] sm:text-[8px]">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <div className="w-full px-4 sm:px-4 lg:px-10 -mt-4 sm:-mt-6 lg:-mt-8">

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-5 lg:mb-6 text-neutral-800">Projects</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 max-w-2xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>

      <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10">
        <a
          href="https://github.com/sujy0914" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 sm:px-2.5 lg:px-3 py-1 sm:py-1.5 lg:py-2 bg-primary text-white rounded-lg text-xs sm:text-sm lg:text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-primary-dark"
        >
          More
        </a>
      </div>
      
      <div className="text-center mt-3 sm:mt-4 lg:mt-5">
        <p className="text-[10px] sm:text-xs lg:text-sm text-neutral-600">
          프로젝트 클릭 시 관련 링크로 이동합니다
        </p>
      </div>
    </div>
  );
}

export default Projects;
