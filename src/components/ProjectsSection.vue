<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const projectImages = [
    'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
    'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80'
]

const projectTechnologies = [
    ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    ['Vue.js', 'TypeScript', 'Firebase', 'Tailwind'],
    ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
    ['Vue.js', 'Chart.js', 'REST API', 'Vuex'],
    ['Vue.js', 'OpenWeather API', 'Geolocation', 'PWA'],
    ['Vue.js', 'Node.js', 'MongoDB', 'AWS S3']
]

const selectedFilter = ref('all')
const filters = ['all', 'web', 'mobile', 'design']
</script>

<template>
    <section id="projects" class="projects">
        <div class="container">
            <div class="section-header">
                <span class="section-label">{{ t.projects.label }}</span>
                <h2 class="section-title">{{ t.projects.title }}</h2>
                <p class="section-subtitle">
                    {{ t.projects.subtitle }}
                </p>
            </div>

            <div class="projects-grid">
                <div v-for="(project, index) in t.projects.items" :key="index" class="project-card"
                    :style="{ animationDelay: `${index * 0.1}s` }">
                    <div class="project-image">
                        <img :src="projectImages[index]" :alt="project.title" />
                        <div class="project-overlay">
                            <a href="#" class="overlay-btn" target="_blank">
                                <svg viewBox="0 0 24 24" width="20" height="20">
                                    <path fill="currentColor"
                                        d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                                </svg>
                            </a>
                            <a href="#" class="overlay-btn" target="_blank">
                                <svg viewBox="0 0 24 24" width="20" height="20">
                                    <path fill="currentColor"
                                        d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="project-content">
                        <h3 class="project-title">{{ project.title }}</h3>
                        <p class="project-description">{{ project.description }}</p>

                        <div class="project-technologies">
                            <span v-for="tech in projectTechnologies[index]" :key="tech" class="tech-badge">
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.projects {
    padding: 6rem 2rem;
    background: var(--bg-dark);
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
    background: rgba(99, 102, 241, 0.1);
    color: var(--primary);
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

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
}

.project-card {
    background: var(--bg-darker);
    border: 1px solid var(--border);
    border-radius: 1rem;
    overflow: hidden;
    transition: all 0.3s ease;
    animation: fadeInUp 0.8s ease backwards;
}

.project-card:hover {
    border-color: var(--primary);
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(99, 102, 241, 0.2);
}

.project-image {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
    transform: scale(1.1);
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
    opacity: 1;
}

.overlay-btn {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: var(--primary);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    cursor: pointer;
}

.overlay-btn:hover {
    background: var(--secondary);
    transform: scale(1.1);
}

.project-content {
    padding: 1.5rem;
}

.project-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.75rem;
}

.project-description {
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.project-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tech-badge {
    padding: 0.375rem 0.75rem;
    background: rgba(99, 102, 241, 0.1);
    color: var(--primary);
    border-radius: 0.375rem;
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid rgba(99, 102, 241, 0.2);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .projects {
        padding: 4rem 1.5rem;
    }

    .section-title {
        font-size: 2.5rem;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }
}
</style>
