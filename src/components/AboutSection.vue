<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
    <section id="about" class="about">
        <div class="container">
            <div class="section-header">
                <span class="section-label">{{ t.about.label }}</span>
                <h2 class="section-title">{{ t.about.title }}</h2>
            </div>

            <div class="about-content">
                <div class="about-text">
                    <p class="lead" v-html="t.about.lead">
                    </p>

                    <p>
                        {{ t.about.paragraph1 }}
                    </p>

                    <p>
                        {{ t.about.paragraph2 }}
                        Whether it's a complex web application or a simple landing page, I approach every project with
                        the same
                        level of dedication and attention to detail.
                    </p>

                    <div class="highlights">
                        <div class="highlight-item">
                            <div class="highlight-icon">🎓</div>
                            <div>
                                <div class="highlight-title">{{ t.about.highlights.licensed.title }}</div>
                                <div class="highlight-text">{{ t.about.highlights.licensed.text }}</div>
                            </div>
                        </div>

                        <div class="highlight-item">
                            <div class="highlight-icon">💼</div>
                            <div>
                                <div class="highlight-title">{{ t.about.highlights.experience.title }}</div>
                                <div class="highlight-text">{{ t.about.highlights.experience.text }}</div>
                            </div>
                        </div>

                        <div class="highlight-item">
                            <div class="highlight-icon">🇲🇦</div>
                            <div>
                                <div class="highlight-title">{{ t.about.highlights.location.title }}</div>
                                <div class="highlight-text">{{ t.about.highlights.location.text }}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="about-stats">
                    <div class="stat-card">
                        <div class="stat-number">1.5+</div>
                        <div class="stat-label">{{ t.about.stats.experience }}</div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-number">15+</div>
                        <div class="stat-label">{{ t.about.stats.projects }}</div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-number">10+</div>
                        <div class="stat-label">{{ t.about.stats.technologies }}</div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-number">100%</div>
                        <div class="stat-label">{{ t.about.stats.satisfaction }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about {
    padding: 6rem 2rem;
    background: var(--bg-darker);
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
}

.about-content {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4rem;
    align-items: start;
}

.about-text {
    animation: fadeInUp 0.8s ease;
}

.lead {
    font-size: 1.25rem;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    line-height: 1.8;
}

.about-text p {
    color: var(--text-muted);
    margin-bottom: 1.5rem;
    line-height: 1.8;
}

strong {
    color: var(--primary);
    font-weight: 600;
}

.highlights {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2.5rem;
}

.highlight-item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;
    background: var(--bg-dark);
    border-radius: 1rem;
    border: 1px solid var(--border);
    transition: all 0.3s ease;
}

.highlight-item:hover {
    border-color: var(--primary);
    transform: translateX(10px);
}

.highlight-icon {
    font-size: 2.5rem;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(99, 102, 241, 0.1);
    border-radius: 1rem;
}

.highlight-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
}

.highlight-text {
    color: var(--text-muted);
    font-size: 0.9rem;
}

.about-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    animation: fadeInUp 0.8s ease 0.2s backwards;
}

.stat-card {
    padding: 2rem;
    background: var(--bg-dark);
    border-radius: 1rem;
    border: 1px solid var(--border);
    text-align: center;
    transition: all 0.3s ease;
}

.stat-card:hover {
    border-color: var(--primary);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
}

.stat-label {
    color: var(--text-muted);
    font-size: 0.9rem;
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
    .about {
        padding: 4rem 2rem;
    }

    .section-title {
        font-size: 2.5rem;
    }

    .about-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .about-stats {
        grid-template-columns: 1fr;
    }
}
</style>
