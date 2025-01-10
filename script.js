document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});


document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('mouseenter', () => {
        document.querySelector('.cursor').style.transform = 'scale(1.5)';
    });
    
    element.addEventListener('mouseleave', () => {
        document.querySelector('.cursor').style.transform = 'scale(1)';
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});


const addScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.querySelector('.scroll-progress-bar').style.width = scrolled + '%';
    });
};


const terminalTyping = () => {
    const commands = [
        'contact --info',
        'help',
        'whoami',
        'clear'
    ];
    let currentCommand = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typingLine = document.querySelector('.typing-line .command');

    if (!typingLine) return;

    const type = () => {
        const command = commands[currentCommand];
        
        if (isDeleting) {
            typingLine.textContent = command.substring(0, currentChar - 1);
            currentChar--;
        } else {
            typingLine.textContent = command.substring(0, currentChar + 1);
            currentChar++;
        }

        if (!isDeleting && currentChar === command.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentCommand = (currentCommand + 1) % commands.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 100 : 200);
        }
    };

    type();
};


const createParticleBackground = () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    document.body.prepend(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = Math.random() * 0.2 - 0.1;
            this.vy = Math.random() * 0.2 - 0.1;
            this.size = Math.random() * 2;
        }
        
        move() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    const createParticles = () => {
        particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle());
        }
    };
    
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.move();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    };
    
    createParticles();
    animate();
};


const add3DTiltEffect = () => {
    const cards = document.querySelectorAll('.project-card, .skill-category, .terminal-card, .blog-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) 
                                  rotateX(${Math.min(Math.max(rotateX, -1), 1)}deg) 
                                  rotateY(${Math.min(Math.max(rotateY, -1), 1)}deg) 
                                  translateZ(5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
};


const addGlitchEffect = () => {
    const glitchTexts = document.querySelectorAll('.glitch-text');
    
    glitchTexts.forEach(text => {
        setInterval(() => {
            text.classList.add('glitch-active');
            setTimeout(() => text.classList.remove('glitch-active'), 200);
        }, 3000);
    });
};


const createGridEffect = () => {
    const grid = document.createElement('div');
    grid.className = 'cyber-grid';
    document.body.appendChild(grid);

    for (let i = 0; i < 50; i++) {
        const line = document.createElement('div');
        line.className = 'grid-line';
        grid.appendChild(line);
    }

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        grid.style.setProperty('--mouse-x', mouseX);
        grid.style.setProperty('--mouse-y', mouseY);
    });
};


const createCursorTrail = () => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);

    let trailPos = { x: 0, y: 0 };
    let cursorPos = { x: 0, y: 0 };

    document.addEventListener('mousemove', (e) => {
        cursorPos.x = e.clientX;
        cursorPos.y = e.clientY;
    });

    function updateTrail() {
        trailPos.x += (cursorPos.x - trailPos.x) * 0.1;
        trailPos.y += (cursorPos.y - trailPos.y) * 0.1;
        
        trail.style.left = `${trailPos.x}px`;
        trail.style.top = `${trailPos.y}px`;
        
        requestAnimationFrame(updateTrail);
    }
    updateTrail();
};


const addScannerEffect = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const scanner = document.createElement('div');
        scanner.className = 'cyber-scanner';
        section.appendChild(scanner);
    });
};


class TypeWriter {
    constructor(element) {
        this.element = element;
        this.words = JSON.parse(element.dataset.text);
        this.wait = 2000; 
        this.currentWordIndex = 0;
        this.txt = '';
        this.isDeleting = false;
        this.type();
    }

    type() {
        const currentWord = this.words[this.currentWordIndex];
        
        
        let typeSpeed = 100;
        
        if (this.isDeleting) {
            
            typeSpeed = 50;
            this.txt = currentWord.substring(0, this.txt.length - 1);
        } else {
            
            this.txt = currentWord.substring(0, this.txt.length + 1);
        }

        this.element.textContent = this.txt;

        
        if (!this.isDeleting && this.txt === currentWord) {
            typeSpeed = this.wait; 
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.querySelector('.typewriter-text');
    if (typewriterElement) {
        new TypeWriter(typewriterElement);
    }
});


document.addEventListener('DOMContentLoaded', () => {
    
    setTimeout(() => {
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease';
        
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            
            createGridEffect();
            createCursorTrail();
            addScannerEffect();
        }, 500);
    }, 2000);

    createParticleBackground();
    add3DTiltEffect();
    addGlitchEffect();
    addScrollProgress();
    terminalTyping();
});


document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
}); 