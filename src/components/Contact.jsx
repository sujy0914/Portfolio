function Contact() {
  const contacts = [
    { type: "이메일", value: "sujy0914@naver.com", icon: "email", link: null },
    { type: "전화", value: "010-2498-1104", icon: "phone", link: null },
    { type: "깃허브", value: "https://github.com/sujy0914", icon: "github", link: "https://github.com/sujy0914" },
  ];

  const icons = {
    email: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z",
    phone: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z",
    github: "M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.724-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.235-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.044.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.807 5.628-5.479 5.921.43.372.814 1.102.814 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z",
  };

  const ContactItem = ({ contact }) => {
    const content = (
      <div className="flex items-center justify-start gap-2 sm:gap-3 lg:gap-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-neutral-800 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox={contact.icon === "github" ? "0 0 24 24" : "0 0 20 20"}>
            <path d={icons[contact.icon]} />
          </svg>
        </div>
        <span className={`text-left ${contact.value.includes('http') ? 'break-all sm:break-normal' : ''}`}>
          {contact.value}
        </span>
      </div>
    );

    return contact.link ? (
      <a href={contact.link} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    ) : (
      <div>{content}</div>
    );
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-4 sm:mb-5 lg:mb-6 text-neutral-800">Contact</h2>
      <div className="bg-bg-card rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-2xl mx-auto">
        <div className="text-center">
          <div className="mb-4 sm:mb-5 lg:mb-6">
            <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-gradient-to-r from-[#6B4226] to-[#6B4226]/70 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2 lg:mb-2.5">
              <svg className="w-5 h-5 sm:w-[22px] sm:h-[22px] lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d={icons.email} />
              </svg>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-neutral-600 font-medium px-4">
              연락을 원하시면 언제든지 메시지를 보내주세요!
            </p>
          </div>
          <div className="space-y-2 sm:space-y-2.5 lg:space-y-3 text-xs sm:text-sm lg:text-base text-neutral-700 max-w-md ml-[25%]">
            {contacts.map((contact, i) => (
              <ContactItem key={i} contact={contact} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
