<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const skillsVisible = ref(false)

const observeSkills = () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    skillsVisible.value = true
                }
            })
        },
        { threshold: 0.1 }
    )

    const skillSection = document.querySelector('#skills')
    if (skillSection) {
        observer.observe(skillSection)
    }

    return observer
}

let observer: IntersectionObserver | null = null

onMounted(() => {
    observer = observeSkills()
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})

const skillLogos: { [key: string]: string } = {
    'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'HTML/CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
}

const skillCategories = [
    {
        titleKey: 'frontend',
        icon: '🎨',
        skills: [
            { name: 'Vue.js', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'JavaScript', level: 90 },
            { name: 'HTML/CSS', level: 95 },
            { name: 'Tailwind CSS', level: 88 },
            { name: 'React', level: 75 }
        ]
    },
    {
        titleKey: 'backend',
        icon: '⚙️',
        skills: [
            { name: 'Node.js', level: 82 },
            { name: 'Express', level: 80 },
            { name: 'MongoDB', level: 78 },
            { name: 'REST APIs', level: 85 },
            { name: 'PostgreSQL', level: 75 }
        ]
    },
    {
        titleKey: 'tools',
        icon: '🛠️',
        skills: [
            { name: 'Git', level: 90 },
            { name: 'Docker', level: 70 },
            { name: 'UI/UX Design', level: 85 },
            { name: 'Figma', level: 80 },
            { name: 'CI/CD', level: 75 }
        ]
    }
]
</script>

<template>
    <section id="skills" class="skills">
        <div class="container">
            <div class="section-header">
                <span class="section-label">{{ t.skills.label }}</span>
                <h2 class="section-title">{{ t.skills.title }}</h2>
                <p class="section-subtitle">
                    {{ t.skills.subtitle }}
                </p>
            </div>

            <div class="skills-grid">
                <div v-for="(category, index) in skillCategories" :key="category.titleKey"
                    class="skill-category scroll-reveal" :class="{ 'revealed': skillsVisible }"
                    :style="{ transitionDelay: `${index * 0.15}s` }">
                    <div class="category-header">
                        <div class="category-icon">{{ category.icon }}</div>
                        <h3 class="category-title">{{ t.skills.categories[category.titleKey as keyof typeof
                            t.skills.categories] }}</h3>
                    </div>

                    <div class="skills-list">
                        <div v-for="(skill, skillIndex) in category.skills" :key="skill.name" class="skill-item"
                            :class="{ 'visible': skillsVisible }"
                            :style="{ animationDelay: `${0.1 + skillIndex * 0.1}s` }">
                            <div class="skill-info">
                                <span class="skill-name">
                                    <img v-if="skillLogos[skill.name]" :src="skillLogos[skill.name]" :alt="skill.name"
                                        class="skill-logo" />
                                    <span v-else class="skill-icon">{{ skill.name.charAt(0) }}</span>
                                    {{ skill.name }}
                                </span>
                                <span class="skill-percentage">{{ skill.level }}%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" :class="{ 'animate': skillsVisible }"
                                    :style="{ width: skillsVisible ? `${skill.level}%` : '0%' }"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.skills {
    padding: 6rem 2rem;
    background: var(--bg-darker);
}

.container {
    max-width: 1400px;
    margin: 0 auto;
}

.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-label {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(236, 72, 153, 0.1);
    color: var(--accent);
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.section-title {
    font-size: 3rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
}

.section-subtitle {
    color: var(--text-muted);
    font-size: 1.1rem;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.skill-category {
    background: var(--bg-dark);
    border: 1px solid var(--border);
    border-radius: 1.5rem;
    padding: 2rem;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.skill-category::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
    transition: left 0.6s ease;
}

.skill-category:hover::before {
    left: 100%;
}

.skill-category:hover {
    border-color: var(--primary);
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 60px rgba(59, 130, 246, 0.25),
        0 0 0 1px rgba(59, 130, 246, 0.1);
}

.scroll-reveal {
    opacity: 0;
    transform: translateY(50px);
}

.scroll-reveal.revealed {
    opacity: 1;
    transform: translateY(0);
}

.category-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border);
}

.category-icon {
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(6, 182, 212, 0.15));
    border-radius: 1rem;
    transition: all 0.3s ease;
}

.skill-category:hover .category-icon {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

.category-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
}

.skills-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.skill-item {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
}

.skill-item.visible {
    opacity: 1;
    transform: translateY(0);
}

.skill-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}

.skill-name {
    color: var(--text-secondary);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.skill-logo {
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
}

.skill-icon {
    font-size: 1.1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    background: rgba(99, 102, 241, 0.1);
    border-radius: 0.25rem;
    font-weight: 700;
    color: var(--primary);
}

.skill-percentage {
    color: var(--primary);
    font-weight: 700;
    font-size: 0.875rem;
}

.skill-bar {
    height: 0.5rem;
    background: var(--border);
    border-radius: 0.25rem;
    overflow: hidden;
    position: relative;
}

.skill-progress {
    height: 100%;
    background: linear-gradient(90deg, var(--primary), var(--primary-light), var(--accent));
    background-size: 200% 100%;
    border-radius: 0.25rem;
    transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    animation: gradientSlide 3s ease infinite;
}

.skill-progress::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent);
    animation: shimmer 2s infinite;
}

@keyframes gradientSlide {

    0%,
    100% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }
}

@keyframes shimmer {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(100%);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .skills {
        padding: 4rem 1.5rem;
    }

    .section-title {
        font-size: 2.5rem;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }
}
</style>
