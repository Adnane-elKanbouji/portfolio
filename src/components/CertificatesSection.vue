<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
    <section id="certificates" class="certificates">
        <div class="container">
            <div class="section-header">
                <span class="section-label">{{ t.certificates.label }}</span>
                <h2 class="section-title">{{ t.certificates.title }}</h2>
                <p class="section-subtitle">
                    {{ t.certificates.subtitle }}
                </p>
            </div>

            <div class="certificates-grid">
                <div v-for="(cert, index) in t.certificates.items" :key="index" class="certificate-card"
                    :style="{ animationDelay: `${index * 0.1}s` }">
                    <div class="certificate-icon">
                        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path
                                d="M12 15l3.5 2-1-4 3-2.5-4-.5L12 6l-1.5 4-4 .5 3 2.5-1 4L12 15zM12 2l2.5 5 5.5.5-4 4 1.5 6-5-3-5 3 1.5-6-4-4 5.5-.5L12 2z" />
                        </svg>
                    </div>

                    <div class="certificate-content">
                        <h3 class="certificate-name">{{ cert.name }}</h3>
                        <div class="certificate-issuer">{{ cert.issuer }}</div>
                        <div class="certificate-date">{{ cert.date }}</div>

                        <p class="certificate-description">{{ cert.description }}</p>

                        <a v-if="cert.credentialUrl" :href="cert.credentialUrl" target="_blank" class="credential-link">
                            <svg viewBox="0 0 24 24" width="16" height="16">
                                <path fill="currentColor"
                                    d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                            </svg>
                            {{ t.certificates.viewCredential }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.certificates {
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

.certificates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.certificate-card {
    background: var(--bg-darker);
    border: 1px solid var(--border);
    border-radius: 1.5rem;
    padding: 2rem;
    transition: all 0.3s ease;
    animation: fadeInUp 0.8s ease backwards;
    display: flex;
    flex-direction: column;
}

.certificate-card:hover {
    border-color: var(--accent);
    transform: translateY(-5px);
    box-shadow: 0 10px 40px rgba(236, 72, 153, 0.15);
}

.certificate-icon {
    width: 4rem;
    height: 4rem;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-bottom: 1.5rem;
}

.certificate-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.certificate-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.75rem;
}

.certificate-issuer {
    color: var(--accent);
    font-weight: 600;
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
}

.certificate-date {
    color: var(--text-muted);
    font-size: 0.875rem;
    margin-bottom: 1rem;
}

.certificate-description {
    color: var(--text-muted);
    line-height: 1.7;
    margin-bottom: 1.5rem;
    flex: 1;
}

.credential-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary);
    font-weight: 600;
    font-size: 0.875rem;
    text-decoration: none;
    padding: 0.75rem 1.25rem;
    background: rgba(99, 102, 241, 0.1);
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    align-self: flex-start;
}

.credential-link:hover {
    background: rgba(99, 102, 241, 0.2);
    transform: translateX(3px);
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
    .certificates {
        padding: 4rem 1.5rem;
    }

    .section-title {
        font-size: 2.5rem;
    }

    .certificates-grid {
        grid-template-columns: 1fr;
    }
}
</style>
