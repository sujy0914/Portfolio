function Skills() {
  const skillGroups = [
    { title: "Backend", list: [{ name: "Java", level: 5 }, { name: "Python", level: 3 }, { name: "C", level: 3 }, { name: "C#", level: 2 }] },
    { title: "Frontend", list: [{ name: "JavaScript", level: 4 }, { name: "HTML", level: 3 }, { name: "CSS", level: 3 }, { name: "React", level: 2 }] },
    { title: "Tools", list: [{ name: "Spring Boot", level: 4 }, { name: "Android Studio", level: 2 }, { name: "Git", level: 3 }] },
  ];

  const renderLevel = (level) => {
    const circles = [];
    const full = Math.floor(level);
    const hasHalf = level % 1 !== 0;
    const opacity = [0.6, 0.75, 0.85, 0.95, 1.0];
    
    for (let i = 0; i < full; i++) {
      circles.push(
        <div 
          key={i} 
          className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 bg-primary rounded-full" 
          style={{ opacity: opacity[Math.min(i, opacity.length - 1)] }}
        />
      );
    }
    
    if (hasHalf) {
      circles.push(
        <div 
          key="half" 
          className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 bg-primary rounded-full" 
          style={{ opacity: opacity[Math.min(full, opacity.length - 1)] * 0.5 }}
        />
      );
    }
    
    for (let i = 0; i < 5 - Math.ceil(level); i++) {
      circles.push(
        <div key={`empty-${i}`} className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 bg-neutral-200 rounded-full" />
      );
    }
    
    return circles;
  };

  const getMaxWidth = (list) => {
    const maxLen = Math.max(...list.map(s => s.name.length));
    return `${maxLen}ch`;
  };

  const allSkills = skillGroups.flatMap(g => g.list);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 mt-8 sm:mt-10 lg:mt-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-4 sm:mb-5 lg:mb-6 text-neutral-800">Skills</h2>
      
      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 lg:gap-2.5 mb-4 sm:mb-5 lg:mb-6">
        {allSkills.map(skill => (
          <div key={skill.name} className="bg-gradient-to-r from-primary/20 to-primary/10 px-2 sm:px-2.5 lg:px-3 py-0.5 sm:py-1 lg:py-1.5 rounded border border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="text-xs font-medium text-primary">{skill.name}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
        {skillGroups.map(group => (
          <div
            key={group.title}
            className="bg-bg-card rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 w-full lg:flex-1"
          >
            <h3 className="font-semibold text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-5 lg:mb-6 text-primary text-center">{group.title}</h3>
            <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3">
              {group.list.map(skill => (
                <li key={skill.name} className="flex flex-col sm:flex-row items-start sm:items-center w-full gap-2 sm:gap-0">
                  <span className="text-sm sm:text-base lg:text-lg font-medium text-neutral-700" style={{ minWidth: getMaxWidth(group.list) }}>
                    {skill.name}
                  </span>
                  <div className="flex gap-1.5 sm:gap-2 lg:gap-2.5 sm:ml-4">
                    {renderLevel(skill.level)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
