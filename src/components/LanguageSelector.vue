<script setup lang="ts">
import { ref } from 'vue'
import { useI18n, type Language } from '../composables/useI18n'

const { currentLanguage, setLanguage } = useI18n()
const isOpen = ref(false)

const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
    { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
    { code: 'ar' as Language, name: 'العربية', flag: '🇲🇦' }
]

const currentLang = () => languages.find(l => l.code === currentLanguage.value)

const selectLanguage = (lang: Language) => {
    setLanguage(lang)
    isOpen.value = false
}

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (!target.closest('.language-selector')) {
        isOpen.value = false
    }
}

if (typeof window !== 'undefined') {
    document.addEventListener('click', handleClickOutside)
}
</script>

<template>
    <div class="language-selector">
        <button @click="isOpen = !isOpen" class="language-button" :aria-label="'Select language'">
            <span class="flag">{{ currentLang()?.flag }}</span>
            <span class="code">{{ currentLang()?.code.toUpperCase() }}</span>
            <svg viewBox="0 0 24 24" width="16" height="16" class="chevron" :class="{ open: isOpen }">
                <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
        </button>

        <transition name="dropdown">
            <div v-if="isOpen" class="dropdown">
                <button v-for="lang in languages" :key="lang.code" @click="selectLanguage(lang.code)"
                    class="dropdown-item" :class="{ active: currentLanguage === lang.code }">
                    <span class="flag">{{ lang.flag }}</span>
                    <span class="name">{{ lang.name }}</span>
                    <svg v-if="currentLanguage === lang.code" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                </button>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.language-selector {
    position: fixed;
    top: 5rem;
    left: 2rem;
    z-index: 1001;
}

.language-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1rem;
    background: var(--bg-darker);
    border: 2px solid var(--border);
    border-radius: 2rem;
    color: var(--text-primary);
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.language-button:hover {
    border-color: var(--primary);
    box-shadow: 0 6px 30px rgba(59, 130, 246, 0.3);
    transform: translateY(-2px);
}

.flag {
    font-size: 1.25rem;
    line-height: 1;
}

.code {
    font-family: 'Monaco', monospace;
    letter-spacing: 0.5px;
}

.chevron {
    transition: transform 0.3s ease;
    color: var(--text-muted);
}

.chevron.open {
    transform: rotate(180deg);
}

.dropdown {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    min-width: 180px;
    background: var(--bg-darker);
    border: 2px solid var(--border);
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.dropdown-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.875rem 1rem;
    background: transparent;
    border: none;
    color: var(--text-primary);
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.2s ease;
    text-align: left;
}

.dropdown-item:hover {
    background: rgba(59, 130, 246, 0.1);
}

.dropdown-item.active {
    background: rgba(59, 130, 246, 0.15);
    color: var(--primary);
}

.dropdown-item .name {
    flex: 1;
    font-weight: 500;
}

.dropdown-item svg {
    color: var(--primary);
}

.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

@media (max-width: 768px) {
    .language-selector {
        left: 1rem;
    }

    .language-button {
        padding: 0.5rem 0.875rem;
        font-size: 0.8rem;
    }

    .code {
        display: none;
    }
}
</style>
