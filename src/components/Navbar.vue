<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

onMounted(() => {
    window.addEventListener('scroll', () => {
        isScrolled.value = window.scrollY > 50
    })
})

const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId)
    section?.scrollIntoView({ behavior: 'smooth' })
    isMobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
    <nav class="navbar" :class="{ scrolled: isScrolled }">
        <div class="navbar-container">
            <a href="#" class="logo" @click.prevent="scrollToSection('#hero')">
                <span class="logo-bracket">&lt;</span>
                <span class="logo-text">Adnane</span>
                <span class="logo-bracket">/&gt;</span>
            </a>

            <div class="nav-links" :class="{ open: isMobileMenuOpen }">
                <a href="#hero" @click.prevent="scrollToSection('#hero')" class="nav-link">
                    <span class="link-number">01.</span>
                    <span class="link-text">{{ t.nav.home }}</span>
                </a>
                <a href="#about" @click.prevent="scrollToSection('#about')" class="nav-link">
                    <span class="link-number">02.</span>
                    <span class="link-text">{{ t.nav.about }}</span>
                </a>
                <a href="#education" @click.prevent="scrollToSection('#education')" class="nav-link">
                    <span class="link-number">03.</span>
                    <span class="link-text">{{ t.nav.education }}</span>
                </a>
                <a href="#experience" @click.prevent="scrollToSection('#experience')" class="nav-link">
                    <span class="link-number">04.</span>
                    <span class="link-text">{{ t.nav.experience }}</span>
                </a>
                <a href="#skills" @click.prevent="scrollToSection('#skills')" class="nav-link">
                    <span class="link-number">05.</span>
                    <span class="link-text">{{ t.nav.skills }}</span>
                </a>
                <a href="#projects" @click.prevent="scrollToSection('#projects')" class="nav-link">
                    <span class="link-number">06.</span>
                    <span class="link-text">{{ t.nav.projects }}</span>
                </a>
                <a href="#contact" @click.prevent="scrollToSection('#contact')" class="nav-link nav-link-cta">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path
                            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <span>{{ t.nav.contact }}</span>
                </a>
            </div>

            <button class="mobile-menu-btn" @click="toggleMobileMenu"
                :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'">
                <span class="menu-icon" :class="{ open: isMobileMenuOpen }">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 1rem 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    background: transparent;
}

.navbar.scrolled {
    backdrop-filter: blur(20px);
    padding: 0.75rem 0;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2),
        0 1px 0 rgba(59, 130, 246, 0.1);
    border-bottom: 1px solid rgba(59, 130, 246, 0.1);
}

.navbar-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    transition: all 0.3s ease;
    font-family: 'Courier New', monospace;
}

.logo:hover {
    transform: translateY(-2px);
}

.logo-bracket {
    color: var(--primary);
    font-weight: 400;
    font-size: 1.75rem;
}

.logo-text {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 2.5rem;
}

.nav-link {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0;
}

.link-number {
    color: var(--primary);
    font-family: 'Courier New', monospace;
    font-size: 0.8rem;
    font-weight: 600;
}

.link-text {
    position: relative;
}

.nav-link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary), var(--primary-light));
    transition: width 0.3s ease;
}

.nav-link:hover {
    color: var(--primary);
    transform: translateY(-2px);
}

.nav-link:hover::before {
    width: 100%;
}

.nav-link-cta {
    padding: 0.75rem 1.75rem;
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    color: white;
    border-radius: 0.5rem;
    gap: 0.5rem;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    position: relative;
    overflow: hidden;
}

.nav-link-cta::before {
    display: none;
}

.nav-link-cta::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
}

.nav-link-cta:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
    color: white;
}

.nav-link-cta:hover::after {
    left: 100%;
}

.mobile-menu-btn {
    display: none;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 1001;
}

.menu-icon {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 28px;
    height: 24px;
    position: relative;
}

.menu-icon span {
    display: block;
    height: 3px;
    width: 100%;
    background: var(--primary);
    border-radius: 3px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
}

.menu-icon span:nth-child(1) {
    top: 0;
}

.menu-icon span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
}

.menu-icon span:nth-child(3) {
    bottom: 0;
}

.menu-icon.open span:nth-child(1) {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
}

.menu-icon.open span:nth-child(2) {
    opacity: 0;
}

.menu-icon.open span:nth-child(3) {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
}

@media (max-width: 968px) {
    .navbar-container {
        padding: 0 1.5rem;
    }

    .mobile-menu-btn {
        display: block;
    }

    .nav-links {
        position: fixed;
        top: 70px;
        right: -100%;
        width: 320px;
        height: calc(100vh - 70px);
        background: var(--bg-darker);
        backdrop-filter: blur(20px);
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
        padding: 2rem;
        transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        border-left: 1px solid rgba(59, 130, 246, 0.2);
        box-shadow: -10px 0 40px rgba(0, 0, 0, 0.5);
    }

    .nav-links.open {
        right: 0;
    }

    .nav-link {
        color: var(--text-primary);
        width: 100%;
        padding: 1.25rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        font-size: 1rem;
    }

    .nav-link::before {
        display: none;
    }

    .nav-link:hover {
        padding-left: 1rem;
    }

    .nav-link-cta {
        margin-top: 1.5rem;
        justify-content: center;
        width: 100%;
    }
}
</style>
