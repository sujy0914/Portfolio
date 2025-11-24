import { useState } from "react";

function Projects() {
  const projects = [
    { 
      name: "일기&음악 사이트", 
      img: "/projects/project1.png",
      url: "https://github.com/sujy0914/MuD",
      desc: "일기를 작성하고 감정에 어울리는 음악을 추천받는 서비스",
      role: "Full Stack",
      tech: ["Java", "Spring Boot", "Node.js", "MySQL"],
      duration: "2025.03 ~ 2025.06 / 개인 프로젝트",
      motivation: "감정, 날씨, 시간대를 고려하여 음악을 추천하는 서비스를 만들고자 했습니다.",
      features: [
        "옵션 설정 기반 음악 추천",
        "일기 작성/수정/삭제 기능",
        "구글 연동 로그인",
        "음악 스트리밍 API 연동"
      ]
    },
    { 
      name: "정기 구독 서비스 관리", 
      img: "/projects/project2.png",
      url: "https://github.com/sujy0914/subcheck",
      desc: "여러 구독 서비스를 한 곳에서 관리하는 모바일 앱",
      role: "Full Stack",
      tech: ["Flutter", "Dart","Java", "MySQL"],
      duration: "2024.08 ~ 2025.12 / 개인 프로젝트",
      motivation: "구독 서비스가 많아 결제일을 잊는 불편함을 해결하기 위해 만들었습니다.",
      features: [
        "구독 일정 자동 알림",
        "월별 구독 데이터 통계",
        "구독 서비스 추가/수정/삭제 기능"
      ]
    },
    { 
      name: "도서대여 프로그램", 
      img: "/projects/project3.png",
      url: "https://github.com/sujy0914/QuadBooki",
      desc: "도서 대여 및 반납을 효율적으로 관리할 수 있는 시스템",
      role: "Backend",
      tech: ["Java", "Spring Boot", "MySQL"],
      duration: "2024.08 ~ 2024.12 / 4인 팀 프로젝트",
      motivation: "소규모 도서관의 수기 대여 방식을 자동화하기 위해 개발했습니다.",
      features: [
        "도서 등록 / 대여 / 반납 / 연장 기능",
        "회원 등록 및 대여 이력 관리",
        "관리자 페이지 기능"
      ]
    },
    { 
      name: "법정교육 관리 프로그램", 
      url: "https://github.com/sujy0914/Edura",
      desc: "사내 법정교육 이수 관리 시스템",
      role: "Backend",
      tech: ["Java", "Ant", "MySQL", "NetBeans"],
      duration: "2024.08.27 ~ 2024.12.02 / 4인 팀 프로젝트",
      motivation: "직원의 법정교육 이수를 체계적으로 관리하기 위해 개발했습니다.",
      features: [
        "교육 등록 및 수강 관리",
        "문제 풀이 및 점수 계산",
        "관리자 통계 페이지",
        "자동 이수 기록 저장"
      ]
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const ProjectCard = ({ project }) => (
    <div
      onClick={() => setSelectedProject(project)}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 aspect-[5/4] flex flex-col h-full cursor-pointer max-w-[280px] sm:max-w-[320px]"
    >
      <div className="flex-1 min-h-0">
        {project.img ? (
          <img 
            src={project.img} 
            alt={project.name} 
            className="w-full h-full object-cover" 
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
            <span className="text-xs text-primary font-bold text-center px-2">{project.name}</span>
          </div>
        )}
      </div>
      <div className="p-2 text-center bg-gradient-to-r from-primary/10 to-primary/5 flex-shrink-0">
        <h3 className="font-bold text-xs sm:text-sm text-neutral-800 mb-0.5">{project.name}</h3>
        <p className="text-[10px] sm:text-xs text-neutral-600">{project.desc}</p>
      </div>
    </div>
  );

  const ProjectDetailModal = ({ project, onClose }) => (
    <div 
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-3 right-4 text-neutral-400 hover:text-neutral-800 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-xl sm:text-2xl font-bold text-[#8B6C42] mb-2">{project.name}</h2>
        <p className="text-neutral-600 mb-4 text-sm sm:text-base">{project.desc}</p>

        <p className="text-xs sm:text-sm text-neutral-700 mb-2"><strong>기간 / 인원:</strong> {project.duration}</p>
        <p className="text-xs sm:text-sm text-neutral-700 mb-2"><strong>역할:</strong> {project.role}</p>
        <p className="text-xs sm:text-sm text-neutral-700 mb-4"><strong>동기:</strong> {project.motivation}</p>

        <div className="mb-4">
          <strong className="text-[#8B6C42]">기술 스택:</strong>
          <div className="flex flex-wrap justify-center gap-1 mt-2">
            {project.tech.map((t, i) => (
              <span key={i} className="px-2 py-1 bg-[#f4eadd] text-[#8B6C42] rounded-full text-[10px] sm:text-xs font-semibold">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="text-left mt-4">
          <strong className="text-[#8B6C42] block mb-2 text-center">주요 기능</strong>
          <ul className="text-xs sm:text-sm text-neutral-700 list-disc list-inside space-y-1">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <a 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-[#8B6C42] text-white font-semibold rounded-lg shadow-md hover:bg-[#C39B6A] transition"
          >
            GitHub 바로가기
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-12 relative">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-neutral-800">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center max-w-3xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>

      {selectedProject && (
        <ProjectDetailModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}

export default Projects;
