<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
    <section id="experience" class="experience">
        <div class="container">
            <div class="section-header">
                <span class="section-label">{{ t.experience.label }}</span>
                <h2 class="section-title">{{ t.experience.title }}</h2>
            </div>

            <div class="timeline">
                <div v-for="(exp, index) in t.experience.experiences" :key="index" class="timeline-item"
                    :class="{ 'animate-in': true }" :style="{ animationDelay: `${index * 0.2}s` }">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="experience-header">
                            <div>
                                <h3 class="role">{{ exp.role }}</h3>
                                <div class="company">{{ exp.company }}</div>
                            </div>
                            <div class="period">{{ exp.period }}</div>
                        </div>

                        <p class="description">{{ exp.description }}</p>

                        <div class="achievements">
                            <div class="achievements-title">{{ t.experience.achievements }}</div>
                            <ul>
                                <li v-for="(achievement, i) in exp.achievements" :key="i">
                                    {{ achievement }}
                                </li>
                            </ul>
                        </div>

                        <div class="technologies">
                            <span
                                v-for="tech in ('technologies' in exp ? exp.technologies : ['Vue.js', 'TypeScript', 'Node.js', 'MongoDB'])"
                                :key="tech" class="tech-tag">
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
.experience {
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
    background: rgba(139, 92, 246, 0.1);
    color: var(--secondary);
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
}

.timeline {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
    padding-left: 2rem;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, var(--primary), var(--secondary));
}

.timeline-item {
    position: relative;
    margin-bottom: 3rem;
    opacity: 0;
}

.timeline-item.animate-in {
    animation: fadeInLeft 0.8s ease forwards;
}

.timeline-marker {
    position: absolute;
    left: -2.5rem;
    top: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}

.timeline-content {
    background: var(--bg-darker);
    border: 1px solid var(--border);
    border-radius: 1rem;
    padding: 2rem;
    margin-left: 1.5rem;
    transition: all 0.3s ease;
}

.timeline-content:hover {
    border-color: var(--primary);
    transform: translateX(5px);
    box-shadow: 0 10px 40px rgba(59, 130, 246, 0.15);
}

.experience-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
    gap: 2rem;
}

.role {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.company {
    color: var(--primary);
    font-weight: 600;
}

.period {
    padding: 0.5rem 1rem;
    background: rgba(59, 130, 246, 0.1);
    border-radius: 0.5rem;
    color: var(--primary);
    font-size: 0.875rem;
    font-weight: 600;
    white-space: nowrap;
}

.description {
    color: var(--text-muted);
    line-height: 1.8;
    margin-bottom: 1.5rem;
}

.achievements {
    margin-bottom: 1.5rem;
}

.achievements-title {
    color: var(--text-secondary);
    font-weight: 600;
    margin-bottom: 0.75rem;
}

.achievements ul {
    list-style: none;
    padding: 0;
}

.achievements li {
    color: var(--text-muted);
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    position: relative;
}

.achievements li::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--primary);
    font-size: 1.2rem;
}

.technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tech-tag {
    padding: 0.375rem 0.875rem;
    background: rgba(59, 130, 246, 0.1);
    color: var(--primary);
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    border: 1px solid rgba(59, 130, 246, 0.2);
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@media (max-width: 768px) {
    .experience {
        padding: 4rem 1.5rem;
    }

    .section-title {
        font-size: 2.5rem;
    }

    .timeline {
        padding-left: 1.5rem;
    }

    .timeline-marker {
        left: -2rem;
    }

    .timeline-content {
        margin-left: 1rem;
    }

    .experience-header {
        flex-direction: column;
        gap: 1rem;
    }

    .period {
        align-self: flex-start;
    }
}
</style>
