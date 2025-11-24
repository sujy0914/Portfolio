function About() {
  const person = [
    { label: "Name", value: "김태이", icon: "user" },
    { label: "Phone", value: "010-2498-1104", icon: "phone" },
    { label: "Birth Date", value: "2004.11.16", icon: "calendar" },
    { label: "Location", value: "인천광역시 미추홀구", icon: "location" },
  ];

  const edu = [
    { main: "영화국제관광고등학교 호텔경영학과 졸업", sub: "Younghwa International Tourism High School" },
    { main: "인하공업전문대학 컴퓨터정보공학과 졸업예정", sub: "Inha Technical College" },
  ];

  const cer = ["운전면허 2종보통", "워드프로세스", "구름톤 수료", "해커톤 참가"];

  const icons = {
    user: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
    phone: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z",
    calendar: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
    location: "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.429 3.058 11.026 11.026 0 01-2.947.757z",
    education: "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.429 3.058 11.026 11.026 0 01-2.947.757z",
    cert: "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-6 sm:mb-8 lg:mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-1.5 sm:mb-2">About Me</h2>
        <div className="w-12 sm:w-16 lg:w-20 h-0.5 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="bg-gradient-to-br from-white to-bg-card rounded-lg sm:rounded-xl p-2.5 sm:p-3 lg:p-3.5 shadow-xl border border-neutral-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 items-center">
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1.5 sm:-inset-2 lg:-inset-2.5 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-full blur-xl"></div>
              <img
                src="/profile.jpg"
                alt="Profile"
                className="relative w-40 h-[200px] sm:w-48 sm:h-[240px] lg:w-56 lg:h-[280px] object-cover rounded-lg sm:rounded-xl shadow-2xl border-2 border-white"
              />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-2 sm:space-y-2.5 lg:space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 sm:gap-2 lg:gap-2.5">
              {person.map((item) => (
                <div key={item.label} className="bg-white rounded-lg p-2 sm:p-2.5 lg:p-3 shadow-md border border-neutral-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center shadow-md">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        {item.icon === "user" && <path fillRule="evenodd" d={icons[item.icon]} clipRule="evenodd" />}
                        {item.icon === "phone" && <path d={icons[item.icon]} />}
                        {item.icon === "calendar" && <path fillRule="evenodd" d={icons[item.icon]} clipRule="evenodd" />}
                        {item.icon === "location" && <path d={icons[item.icon]} />}
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-neutral-500 font-medium">{item.label}</p>
                      <p className="text-xs sm:text-sm lg:text-base text-neutral-800 font-semibold">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-2.5 sm:p-3 lg:p-3.5 shadow-md border border-neutral-100">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d={icons.education} />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg text-neutral-800 font-bold">Education</h3>
              </div>
              <div className="space-y-1 sm:space-y-1.5">
                {edu.map((item, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <p className="text-[10px] sm:text-xs lg:text-sm text-neutral-700 font-medium">{item.main}</p>
                      <p className="text-[10px] text-neutral-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-2.5 sm:p-3 lg:p-3.5 shadow-md border border-neutral-100">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d={icons.cert} clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg text-neutral-800 font-bold">Certifications & Activities</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5">
                {cer.map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 p-1 sm:p-1.5 bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-lg">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <span className="text-[10px] sm:text-xs lg:text-sm text-neutral-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-2.5 sm:p-3 lg:p-3.5 shadow-md border border-neutral-100">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg text-neutral-800 font-bold">Motto</h3>
              </div>
              <p className="text-[10px] sm:text-xs lg:text-sm text-neutral-700 font-medium leading-relaxed">
                "아이디어를 빠르게 서비스로 구현하는 개발자입니다."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
