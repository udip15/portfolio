
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactTyped } from "react-typed";

const App = () => {
    const skills = {
        frontend: [
            { name: 'React.js', level: 95 },
            { name: 'HTML5', level: 95 },
            { name: 'CSS3', level: 90 },
            { name: 'JavaScript (ES6+)', level: 95 },
            { name: 'Responsive Design', level: 98 },
        ],
        backend: [
            { name: 'Node.js', level: 90 },
            { name: 'Express.js', level: 90 },
            { name: 'RESTful APIs', level: 95 },
            { name: 'Secure Authentication (JWT)', level: 85 },
        ],
        databases: [
            { name: 'MongoDB', level: 85 },
            { name: 'MySQL', level: 85 },
        ],
        tools: [
            { name: 'Git', level: 95 },
            { name: 'GitHub', level: 95 },
            { name: 'VS Code', level: 98 },
            { name: 'CI/CD Principles', level: 80 },
        ]
    };

    const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href')?.substring(1);
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    };

    const handleDownloadCV = () => {
        // Open the specified GitHub repository link in a new tab.
        window.open('https://github.com/udip15/RESUME', '_blank', 'noopener,noreferrer');
    };
    
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Here you would typically handle form submission, e.g., send data to a backend.
        // For this example, we'll just log it.
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("Form submitted:", data);
        alert("Message sent successfully!");
        event.currentTarget.reset();
    };


    return (
        <div className="bg-gray-900 text-white min-h-screen font-sans">
            {/* Header */}
            <header className="px-6 py-4 flex justify-between items-center sticky top-0 bg-gray-900 bg-opacity-80 backdrop-blur-md z-50">
                <h2 className="text-xl md:text-2xl font-bold tracking-wider">PORTFOLIO</h2>
                <nav className="hidden md:flex space-x-6">
                    <a href="#home" onClick={handleNavClick} className="hover:text-cyan-400 transition-colors duration-300">Home</a>
                    <a href="#about" onClick={handleNavClick} className="hover:text-cyan-400 transition-colors duration-300">About</a>
                    <a href="#experience" onClick={handleNavClick} className="hover:text-cyan-400 transition-colors duration-300">Experience</a>
                    <a href="#projects" onClick={handleNavClick} className="hover:text-cyan-400 transition-colors duration-300">Projects</a>
                    <a href="#skills" onClick={handleNavClick} className="hover:text-cyan-400 transition-colors duration-300">Skills</a>
                    <a href="#contact" onClick={handleNavClick} className="hover:text-cyan-400 transition-colors duration-300">Contact</a>
                </nav>
            </header>

            {/* Main Content */}
            <main>
                {/* Hero Section */}
                <section 
                    id="home" 
                    className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2070&auto=format&fit=crop')" }}
                >
                    <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
                    
                    {/* Content container */}
                    <div className="relative z-10">
                        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 pb-2">Udip Sharma</h1>
                        <p className="mt-4 text-xl md:text-2xl text-gray-300">
                            I'm a <ReactTyped
                                strings={['Freelancer', 'Full Stack Developer', 'Ai Enthusiast', 'Graphics Designer', 'DevOps Engineer', 'MERN Developer']}
                                typeSpeed={100}
                                backSpeed={50}
                                loop
                                className="text-cyan-400 font-semibold"
                            />
                        </p>
                        <a href="mailto:sharmaudip15@gmail.com" className="mt-8 inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-600 transition-transform transform hover:scale-105">
                            Hire Me
                        </a>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="container mx-auto px-6 py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">About Me</h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Hi, I’m Udip Sharma , an aspiring AI Engineer with a strong passion for artificial intelligence, the MERN stack, full-stack development, and DevOps practices. I am currently pursuing Computer Engineering at United Technical College, affiliated with Pokhara University, where I actively explore new technologies and build practical projects to deepen my skills. As a full-stack developer, I’ve delivered several user-focused applications that strengthened my problem-solving abilities, system design sense, and end-to-end implementation experience. Outside of work and study, I enjoy watching series and movies, trekking, and playing games — activities that keep me curious, creative, and energized to learn more about how technology shapes the world.
                        </p>
                        <button onClick={handleDownloadCV} className="mt-4 inline-block bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-cyan-600 transition-transform transform hover:scale-105">
                            Download CV
                        </button>
                    </div>
                </section>

                {/* Experience & Education Section */}
                <section id="experience" className="bg-gray-800 py-24 px-6">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Experience & Education</h2>
                        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">With over 3 years of hands-on experience as a Full Stack Developer, I have developed a strong command over designing, building, and deploying complete web applications from scratch. I specialize in the MERN Stack (MongoDB, Express, React, Node.js), along with experience in REST APIs, authentication systems, database design, cloud deployment, and DevOps workflows. I’ve built and delivered multiple impactful and production-level projects, focusing on clean UI/UX, scalable architecture, and real-world problem-solving. I take pride in my ability to break down complex requirements into smooth, user-friendly interfaces and efficient backend logic. My development approach emphasizes best practices, adaptability, continuous improvement, and writing clean, maintainable code. I am confident in collaborating within teams, leading myself independently, and learning new tools quickly — all while staying motivated to push boundaries and deliver work that feels both meaningful and technically impressive.</p>
                        <div className="relative border-l-2 border-cyan-500 pl-8 space-y-12">
                            {/* Experience Item 1 */}
                            <div className="relative">
                                <div className="absolute -left-[42px] top-1.5 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-800"></div>
                                <p className="text-sm text-gray-400">Jan 2024 - Aug 2025</p>
                                <h3 className="text-xl font-bold text-cyan-300 mt-1">Full Stack Web Developer | Nep Multi Store</h3>
                                <ul className="list-disc list-inside mt-2 text-gray-400 space-y-1">
                                    <li>Designed and developed dynamic, responsive websites with fast performance and cross-browser compatibility.</li>
                                    <li>Built and optimized an online ordering system with secure MySQL database integration.</li>
                                    <li>Created user-friendly admin dashboards for order tracking, product management, and analytics.</li>
                                    <li>Collaborated with clients to gather requirements and deliver customized web solutions.</li>
                                    <li>Maintained and updated client websites, ensuring reliability and continuous improvement.</li>
                                </ul>
                            </div>
                            {/* Experience Item 2 */}
                             <div className="relative">
                                <div className="absolute -left-[42px] top-1.5 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-800"></div>
                                <p className="text-sm text-gray-400">May 2022 - Dec 2023</p>
                                <h3 className="text-xl font-bold text-cyan-300 mt-1">Full Stack Web Developer Intern | Madhya Nepal Security and workers Pvt. Ltd.</h3>
                                <ul className="list-disc list-inside mt-2 text-gray-400 space-y-1">
                                    <li>Developed and maintained the company website and client dashboard using React and Node.js.</li>
                                    <li>Built secure, database-driven systems for scheduling, client requests, and employee records.</li>
                                    <li>Implemented responsive UI/UX for seamless use across devices.</li>
                                    <li>Integrated REST APIs to ensure smooth front- and back-end communication.</li>
                                    <li>Automated internal processes, boosting efficiency and data accuracy.</li>
                                </ul>
                            </div>
                            {/* Education Item */}
                             <div className="relative">
                                <div className="absolute -left-[42px] top-1.5 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-800"></div>
                                <p className="text-sm text-gray-400">2023 - Expected 2027</p>
                                <h3 className="text-xl font-bold text-cyan-300 mt-1">Bachelor in Computer Engineering</h3>
                                <p className="text-gray-400">United Technical College</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-24 px-6">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <a href="https://github.com/udip15/Twitterclone" target="_blank" rel="noopener noreferrer">
                                <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                                    <h3 className="text-2xl font-bold mb-4 text-cyan-400">Twitter Clone | Real-Time Social Media Platform</h3>
                                    <p className="text-gray-400 flex-grow">Developed a feature-rich social media clone focusing on core functionalities like post creation, real-time feed updates, and secure user sessions using the MERN stack. Demonstrates expertise in complex routing and scalable UI/UX design.</p>
                                </div>
                            </a>
                            <a href="https://github.com/udip15/Projects" target="_blank" rel="noopener noreferrer">
                                <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                                    <h3 className="text-2xl font-bold mb-4 text-cyan-400">NepMulti Store Enterprise Website</h3>
                                    <p className="text-gray-400 flex-grow">Built a comprehensive e-commerce platform including product listing, shopping cart, and secure checkout. Integrated a dedicated admin panel for efficient product and inventory management using a Node.js/Express backend and MySQL database.</p>
                                </div>
                            </a>
                            <a href="https://github.com/udip15/Projects" target="_blank" rel="noopener noreferrer">
                                <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                                    <h3 className="text-2xl font-bold mb-4 text-cyan-400">End-to-End Chat App | Secure Messaging</h3>
                                    <p className="text-gray-400 flex-grow">Designed and deployed a secure messaging application featuring direct and group chats. Utilized WebSockets (e.g., Socket.io) for instant message delivery and ensured secure data transmission and user authentication.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="bg-gray-800 container mx-auto px-6 py-24 rounded-lg">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Technical Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-cyan-400 text-center">Frontend</h3>
                            {skills.frontend.map(skill => (
                                <div key={skill.name} className="mb-4">
                                    <div className="flex justify-between mb-1"><span className="text-base font-medium text-gray-300">{skill.name}</span><span className="text-sm font-medium text-gray-400">{skill.level}%</span></div>
                                    <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div></div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-cyan-400 text-center">Backend/API</h3>
                            {skills.backend.map(skill => (
                                <div key={skill.name} className="mb-4">
                                    <div className="flex justify-between mb-1"><span className="text-base font-medium text-gray-300">{skill.name}</span><span className="text-sm font-medium text-gray-400">{skill.level}%</span></div>
                                    <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div></div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-cyan-400 text-center">Databases</h3>
                            {skills.databases.map(skill => (
                                <div key={skill.name} className="mb-4">
                                    <div className="flex justify-between mb-1"><span className="text-base font-medium text-gray-300">{skill.name}</span><span className="text-sm font-medium text-gray-400">{skill.level}%</span></div>
                                    <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-purple-500 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div></div>
                                </div>
                            ))}
                        </div>
                         <div>
                            <h3 className="text-2xl font-semibold mb-6 text-cyan-400 text-center">Tools & DevOps</h3>
                            {skills.tools.map(skill => (
                                <div key={skill.name} className="mb-4">
                                    <div className="flex justify-between mb-1"><span className="text-base font-medium text-gray-300">{skill.name}</span><span className="text-sm font-medium text-gray-400">{skill.level}%</span></div>
                                    <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-24 px-6">
                    <div className="container mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Get In Touch</h2>
                        <p className="text-gray-400 mb-8">If you are interested in collaborating, working together on projects, or hiring me for full stack development or AI-related work, feel free to reach out.</p>
                        
                        <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                                    <input type="text" name="first-name" id="first-name" required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-cyan-500 focus:border-cyan-500" />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                                    <input type="text" name="last-name" id="last-name" required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-cyan-500 focus:border-cyan-500" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                <input type="email" name="email" id="email" required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-cyan-500 focus:border-cyan-500" />
                            </div>
                             <div>
                                <label htmlFor="contact-number" className="block text-sm font-medium text-gray-300 mb-2">Contact Number</label>
                                <input type="tel" name="contact-number" id="contact-number" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-cyan-500 focus:border-cyan-500" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea name="message" id="message" rows={4} required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-cyan-500 focus:border-cyan-500"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-600 transition-transform transform hover:scale-105">
                                    Send Message
                                </button>
                            </div>
                        </form>

                        <p className="text-gray-400 my-8">Or, if you prefer, you can reach out via my social profiles.</p>

                        <div className="mt-8 flex justify-center space-x-6">
                            <a href="https://www.linkedin.com/in/udip-sharma-095289367/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" title="LinkedIn">
                                <svg className="w-8 h-8 text-gray-400 hover:text-cyan-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="https://github.com/udip15" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" title="GitHub">
                                <svg className="w-8 h-8 text-gray-400 hover:text-cyan-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="mailto:sharmaudip15@gmail.com" aria-label="Email" title="Email">
                                <svg className="w-8 h-8 text-gray-400 hover:text-cyan-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 py-6 px-6">
                <div className="container mx-auto text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Udip Sharma. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
