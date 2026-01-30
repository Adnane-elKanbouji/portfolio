<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
    <section id="education" class="education">
        <div class="container">
            <div class="section-header">
                <span class="section-label">{{ t.education.label }}</span>
                <h2 class="section-title">{{ t.education.title }}</h2>
                <p class="section-subtitle">
                    {{ t.education.subtitle }}
                </p>
            </div>

            <div class="education-grid">
                <div v-for="(edu, index) in t.education.items" :key="index" class="education-card"
                    :style="{ animationDelay: `${index * 0.2}s` }">
                    <div class="card-icon">{{ index === 0 ? '🎓' : '📜' }}</div>

                    <div class="card-header">
                        <div class="degree-info">
                            <h3 class="degree">{{ edu.degree }}</h3>
                            <div class="field">{{ edu.field }}</div>
                        </div>
                        <div class="period">{{ edu.period }}</div>
                    </div>

                    <div class="institution-info">
                        <div class="institution">
                            <svg viewBox="0 0 24 24" width="16" height="16">
                                <path fill="currentColor"
                                    d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
                            </svg>
                            {{ edu.institution }}
                        </div>
                        <div class="location">
                            <svg viewBox="0 0 24 24" width="16" height="16">
                                <path fill="currentColor"
                                    d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                            </svg>
                            {{ edu.location }}
                        </div>
                    </div>

                    <p class="description">{{ edu.description }}</p>

                    <div class="achievements">
                        <div class="achievements-title">{{ t.education.highlights }}</div>
                        <ul class="achievements-list">
                            <li v-for="(achievement, i) in edu.achievements" :key="i">
                                {{ achievement }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.education {
    padding: 6rem 2rem;
    background: var(--bg-dark);
    position: relative;
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

.education-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 2rem;
    max-width: 1100px;
    margin: 0 auto;
}

.education-card {
    background: var(--bg-darker);
    border: 1px solid var(--border);
    border-radius: 1.5rem;
    padding: 2.5rem;
    position: relative;
    transition: all 0.3s ease;
    animation: fadeInUp 0.8s ease backwards;
    overflow: hidden;
}

.education-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
}

.education-card:hover {
    border-color: var(--primary);
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(99, 102, 241, 0.2);
}

.card-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    display: inline-block;
    animation: float 3s ease-in-out infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
    gap: 2rem;
}

.degree {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.field {
    color: var(--primary);
    font-weight: 600;
    font-size: 1rem;
}

.period {
    padding: 0.5rem 1rem;
    background: rgba(99, 102, 241, 0.1);
    border-radius: 0.5rem;
    color: var(--primary);
    font-size: 0.875rem;
    font-weight: 600;
    white-space: nowrap;
    border: 1px solid rgba(99, 102, 241, 0.2);
}

.institution-info {
    display: flex;
    gap: 2rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
}

.institution,
.location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.95rem;
}

.institution svg,
.location svg {
    color: var(--primary);
}

.description {
    color: var(--text-muted);
    line-height: 1.8;
    margin-bottom: 1.5rem;
}

.achievements {
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
}

.achievements-title {
    color: var(--text-secondary);
    font-weight: 600;
    margin-bottom: 1rem;
    font-size: 0.95rem;
}

.achievements-list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.75rem;
}

.achievements-list li {
    color: var(--text-muted);
    padding-left: 1.5rem;
    position: relative;
    font-size: 0.95rem;
}

.achievements-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--primary);
    font-weight: bold;
    font-size: 1rem;
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

@media (max-width: 968px) {
    .education {
        padding: 4rem 1.5rem;
    }

    .section-title {
        font-size: 2.5rem;
    }

    .education-grid {
        grid-template-columns: 1fr;
    }

    .card-header {
        flex-direction: column;
        gap: 1rem;
    }

    .period {
        align-self: flex-start;
    }

    .achievements-list {
        grid-template-columns: 1fr;
    }
}
</style>
