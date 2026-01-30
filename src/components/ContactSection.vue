<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

const handleSubmit = async () => {
    isSubmitting.value = true

    // Simulate form submission
    setTimeout(() => {
        isSubmitting.value = false
        submitStatus.value = 'success'

        // Reset form
        form.value = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }

        // Reset status after 3 seconds
        setTimeout(() => {
            submitStatus.value = 'idle'
        }, 3000)
    }, 1500)
}

const contactInfo = [
    {
        icon: '📧',
        title: 'Email',
        value: 'adnane@example.com',
        link: 'mailto:adnane@example.com'
    },
    {
        icon: '📱',
        title: 'Phone',
        value: '+212 XXX XXX XXX',
        link: 'tel:+212XXXXXXXXX'
    },
    {
        icon: '📍',
        title: 'Location',
        value: 'Morocco',
        link: '#'
    }
]

const socialLinks = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/adnane-el-kanbougi-a06922282/',
        icon: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z'
    },
    {
        name: 'GitHub',
        url: 'https://github.com/adnane',
        icon: 'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z'
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/adnane',
        icon: 'M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.70,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z'
    }
]
</script>

<template>
    <section id="contact" class="contact">
        <div class="container">
            <div class="section-header">
                <span class="section-label">{{ t.contact.label }}</span>
                <h2 class="section-title">{{ t.contact.title }}</h2>
                <p class="section-subtitle">
                    {{ t.contact.subtitle }}
                </p>
            </div>

            <div class="contact-content">
                <div class="contact-info">
                    <div class="info-card">
                        <h3 class="info-title">{{ t.contact.letsTalk }}</h3>
                        <p class="info-text">
                            {{ t.contact.description }}
                        </p>

                        <div class="contact-details">
                            <a href="mailto:adnane@example.com" class="contact-detail">
                                <div class="detail-icon">📧</div>
                                <div class="detail-content">
                                    <div class="detail-title">{{ t.contact.info.email }}</div>
                                    <div class="detail-value">adnane@example.com</div>
                                </div>
                            </a>
                            <a href="tel:+212XXXXXXXXX" class="contact-detail">
                                <div class="detail-icon">📱</div>
                                <div class="detail-content">
                                    <div class="detail-title">{{ t.contact.info.phone }}</div>
                                    <div class="detail-value">+212 XXX XXX XXX</div>
                                </div>
                            </a>
                            <a href="#" class="contact-detail">
                                <div class="detail-icon">📍</div>
                                <div class="detail-content">
                                    <div class="detail-title">{{ t.contact.info.location }}</div>
                                    <div class="detail-value">Morocco</div>
                                </div>
                            </a>
                        </div>

                        <div class="social-links">
                            <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank"
                                :aria-label="social.name" class="social-link">
                                <svg viewBox="0 0 24 24" width="20" height="20">
                                    <path fill="currentColor" :d="social.icon" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="contact-form-wrapper">
                    <form @submit.prevent="handleSubmit" class="contact-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">{{ t.contact.form.name }}</label>
                                <input v-model="form.name" type="text" id="name" required
                                    :placeholder="t.contact.form.namePlaceholder" />
                            </div>

                            <div class="form-group">
                                <label for="email">{{ t.contact.form.email }}</label>
                                <input v-model="form.email" type="email" id="email" required
                                    :placeholder="t.contact.form.emailPlaceholder" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="subject">{{ t.contact.form.subject }}</label>
                            <input v-model="form.subject" type="text" id="subject" required
                                :placeholder="t.contact.form.subjectPlaceholder" />
                        </div>

                        <div class="form-group">
                            <label for="message">{{ t.contact.form.message }}</label>
                            <textarea v-model="form.message" id="message" rows="6" required
                                :placeholder="t.contact.form.messagePlaceholder"></textarea>
                        </div>

                        <button type="submit" class="submit-btn" :disabled="isSubmitting">
                            <span v-if="!isSubmitting">{{ t.contact.form.send }}</span>
                            <span v-else>{{ t.contact.form.sending }}</span>
                        </button>

                        <div v-if="submitStatus === 'success'" class="status-message success">
                            {{ t.contact.form.success }}
                        </div>
                        <div v-if="submitStatus === 'error'" class="status-message error">
                            {{ t.contact.form.error }}
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <footer class="footer">
            <div class="footer-content">
                <p>{{ t.contact.footer.copyright }}</p>
                <p class="footer-subtitle">{{ t.contact.footer.builtWith }}</p>
            </div>
        </footer>
    </section>
</template>

<style scoped>
.contact {
    padding: 6rem 2rem 0;
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
    margin-bottom: 1rem;
}

.section-subtitle {
    color: var(--text-muted);
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 3rem;
    margin-bottom: 6rem;
}

.info-card {
    background: var(--bg-dark);
    border: 1px solid var(--border);
    border-radius: 1.5rem;
    padding: 2.5rem;
    height: fit-content;
    position: sticky;
    top: 2rem;
}

.info-title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
}

.info-text {
    color: var(--text-muted);
    line-height: 1.8;
    margin-bottom: 2.5rem;
}

.contact-details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
}

.contact-detail {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: var(--bg-darker);
    border-radius: 0.75rem;
    transition: all 0.3s ease;
    text-decoration: none;
}

.contact-detail:hover {
    transform: translateX(5px);
    background: rgba(99, 102, 241, 0.1);
}

.detail-icon {
    font-size: 1.75rem;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(99, 102, 241, 0.1);
    border-radius: 0.75rem;
}

.detail-title {
    font-size: 0.875rem;
    color: var(--text-muted);
    margin-bottom: 0.25rem;
}

.detail-value {
    color: var(--text-primary);
    font-weight: 600;
}

.social-links {
    display: flex;
    gap: 1rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
}

.social-link {
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    background: var(--bg-darker);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    transition: all 0.3s ease;
    border: 1px solid var(--border);
}

.social-link:hover {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
    transform: translateY(-3px);
}

.contact-form-wrapper {
    animation: fadeInUp 0.8s ease;
}

.contact-form {
    background: var(--bg-dark);
    border: 1px solid var(--border);
    border-radius: 1.5rem;
    padding: 2.5rem;
}

.form-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    color: var(--text-secondary);
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.875rem 1.25rem;
    background: var(--bg-darker);
    border: 1px solid var(--border);
    border-radius: 0.75rem;
    color: var(--text-primary);
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-group textarea {
    resize: vertical;
    min-height: 150px;
}

.submit-btn {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    border: none;
    border-radius: 0.75rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
}

.submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 30px rgba(99, 102, 241, 0.6);
}

.submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.status-message {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 0.75rem;
    text-align: center;
    font-weight: 600;
}

.status-message.success {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.2);
}

.status-message.error {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.2);
}

.footer {
    border-top: 1px solid var(--border);
    padding: 3rem 2rem;
    text-align: center;
}

.footer-content p {
    color: var(--text-muted);
    margin-bottom: 0.5rem;
}

.footer-subtitle {
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
    .contact {
        padding: 4rem 1.5rem 0;
    }

    .section-title {
        font-size: 2.5rem;
    }

    .contact-content {
        grid-template-columns: 1fr;
    }

    .info-card {
        position: static;
    }

    .form-row {
        grid-template-columns: 1fr;
    }
}
</style>
