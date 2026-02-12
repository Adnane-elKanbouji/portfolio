<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t, currentLanguage } = useI18n()

const typedText = ref('')
let roleIndex = 0
let charIndex = 0
let isDeleting = false

const typeEffect = () => {
  const currentRole = t.value.hero.roles[roleIndex]
  if (!currentRole) return

  if (isDeleting) {
    typedText.value = currentRole.substring(0, charIndex - 1)
    charIndex--
  } else {
    typedText.value = currentRole.substring(0, charIndex + 1)
    charIndex++
  }

  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => { isDeleting = true }, 2000)
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    roleIndex = (roleIndex + 1) % t.value.hero.roles.length
  }

  setTimeout(typeEffect, isDeleting ? 50 : 150)
}

// Canvas particle animation
const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationId: number | null = null

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

const initCanvas = () => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const resizeCanvas = () => {
    const section = canvas.parentElement
    if (section) {
      canvas.width = section.offsetWidth
      canvas.height = section.offsetHeight
    }
  }
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  // Get theme-aware colors
  const getThemeColors = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
    return {
      background: isDark ? 'rgba(11, 17, 38, 0.1)' : 'rgba(255, 255, 255, 0.1)',
      particle: isDark ? 'rgba(59, 130, 246,' : 'rgba(37, 99, 235,',
      connection: isDark ? 'rgba(59, 130, 246,' : 'rgba(37, 99, 235,'
    }
  }

  // Particle system
  const particles: Particle[] = []
  const particleCount = 50

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    })
  }

  const animate = () => {
    const colors = getThemeColors()
    ctx.fillStyle = colors.background
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    particles.forEach((particle, i) => {
      particle.x += particle.vx
      particle.y += particle.vy

      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = `${colors.particle} ${particle.opacity})`
      ctx.fill()

      // Draw connections between nearby particles
      particles.slice(i + 1).forEach((other) => {
        const dx = particle.x - other.x
        const dy = particle.y - other.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(other.x, other.y)
          ctx.strokeStyle = `${colors.connection} ${0.1 * (1 - distance / 150)})`
          ctx.stroke()
        }
      })
    })

    animationId = requestAnimationFrame(animate)
  }

  animate()

  return () => {
    window.removeEventListener('resize', resizeCanvas)
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
  }
}

// Reset typing when language changes
watch(currentLanguage, () => {
  typedText.value = ''
  roleIndex = 0
  charIndex = 0
  isDeleting = false
})

onMounted(() => {
  typeEffect()
  const cleanup = initCanvas()

  return () => {
    if (cleanup) cleanup()
  }
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})

const scrollToContact = () => {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="hero">
    <!-- Animated Canvas Background -->
    <canvas ref="canvasRef" class="hero-canvas" />

    <div class="hero-bg">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
    </div>

    <div class="hero-content">
      <div class="hero-text">
        <div class="greeting">👋 Hello, I'm</div>
        <h1 class="name">Adnane El Kanbougi</h1>
        <div class="role-container">
          <span class="role">{{ typedText }}</span>
          <span class="cursor">|</span>
        </div>
        <p class="description">
          Moroccan developer with 1.5+ years of experience crafting beautiful and functional web applications.
          Licensed professional passionate about creating exceptional digital experiences.
        </p>
        <div class="hero-buttons">
          <button @click="scrollToContact" class="btn btn-primary">
            Get In Touch
          </button>
          <a href="#projects" class="btn btn-secondary">
            View My Work
          </a>
        </div>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/adnane-el-kanbougi-a06922282/" target="_blank" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>
          <a href="https://github.com/adnane" target="_blank" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
          </a>
          <a href="mailto:adnane@example.com" aria-label="Email">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="code-window">
          <div class="window-header">
            <div class="window-dots">
              <span></span><span></span><span></span>
            </div>
            <div class="window-title">developer.ts</div>
            <div class="avatar2">
              <img src="../assets/avatar2.jpeg" alt="Adnane" class="avatar2-image" />
            </div>
          </div>
          <div class="window-content">
            <div class="content-layout">
              <div class="code-section">
                <code>
                  <span class="keyword">const</span> <span class="variable">developer</span> = {<br/>
                  &nbsp;&nbsp;<span class="property">name:</span> <span class="string">'Adnane'</span>,<br/>
                  &nbsp;&nbsp;<span class="property">location:</span> <span class="string">'Morocco 🇲🇦'</span>,<br/>
                  &nbsp;&nbsp;<span class="property">experience:</span> <span class="number">1.5</span>,<br/>
                  &nbsp;&nbsp;<span class="property">passionate:</span> <span class="boolean">true</span>,<br/>
                  &nbsp;&nbsp;<span class="property">skills:</span> [<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span class="string">'Vue.js'</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span class="string">'TypeScript'</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span class="string">'UI/UX'</span><br/>
                  &nbsp;&nbsp;]<br/>
                  };
                </code>
              </div>
              <div class="profile-section">
                <div class="profile-image">
                  <div class="profile-avatar">
                    <img src="../assets/avatar.avif" alt="Adnane Developer Avatar" class="avatar-image" />
                  </div>
                  <div class="profile-status">
                    <span class="status-dot"></span>
                    <span class="status-text">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-indicator">
      <div class="mouse"></div>
      <span>{{ t.hero.scroll }}</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 2vw, 2rem);
  overflow: hidden;
}

.hero-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: linear-gradient(135deg, #0b1126 0%, #0f172a 50%, #1e3a5f 100%);
  transition: background 0.3s ease;
}

[data-theme='light'] .hero-canvas {
  background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 50%, #dbeafe 100%);
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
  animation: float 20s ease-in-out infinite;
  pointer-events: none;
}

.orb-1 {
  width: min(500px, 40vw);
  height: min(500px, 40vw);
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  top: -250px;
  left: -250px;
  animation-delay: 0s;
}

.orb-2 {
  width: min(400px, 35vw);
  height: min(400px, 35vw);
  background: linear-gradient(135deg, var(--secondary), var(--primary));
  bottom: -200px;
  right: -200px;
  animation-delay: 7s;
}

.orb-3 {
  width: min(350px, 30vw);
  height: min(350px, 30vw);
  background: linear-gradient(135deg, var(--accent), var(--primary-light));
  top: 50%;
  right: 10%;
  animation-delay: 14s;
}

@keyframes float {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  33% {
    transform: translate(80px, -80px) scale(1.15);
  }

  66% {
    transform: translate(-80px, 80px) scale(0.9);
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: min(1400px, 95vw);
  width: 100%;
  padding: 0 clamp(1rem, 3vw, 3rem);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 4vw, 4rem);
  align-items: center;
}

.hero-text {
  animation: fadeInUp 1s ease;
}

.avatar-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.avatar {
  position: relative;
  width: 120px;
  height: 120px;
  animation: bounceIn 1s ease, floatAvatar 3s ease-in-out infinite;
}

.avatar-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
  border-radius: 50%;
  animation: rotate 10s linear infinite;
}

.avatar-face {
  position: absolute;
  width: 90%;
  height: 90%;
  top: 5%;
  left: 5%;
  background: linear-gradient(180deg, #ffd6a5 0%, #ffb380 100%);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  z-index: 1;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.1);
}

.avatar-hair {
  position: absolute;
  top: -5px;
  width: 85%;
  height: 45%;
  background: #2d3748;
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  z-index: 2;
}

.avatar-hair::before {
  content: '';
  position: absolute;
  width: 30%;
  height: 60%;
  background: #2d3748;
  border-radius: 0 100% 0 0;
  left: -10%;
  top: 20%;
}

.avatar-hair::after {
  content: '';
  position: absolute;
  width: 30%;
  height: 60%;
  background: #2d3748;
  border-radius: 100% 0 0 0;
  right: -10%;
  top: 20%;
}

.avatar-eyes {
  display: flex;
  gap: 1.2rem;
  margin-top: 2rem;
  margin-bottom: 0.3rem;
  z-index: 3;
}

.eye {
  width: 14px;
  height: 18px;
  background: white;
  border-radius: 50%;
  position: relative;
  animation: blink 4s infinite;
}

.pupil {
  position: absolute;
  width: 7px;
  height: 7px;
  background: #1e293b;
  border-radius: 50%;
  top: 6px;
  left: 3.5px;
  animation: lookAround 6s ease-in-out infinite;
}

.eye::after {
  content: '';
  position: absolute;
  width: 3px;
  height: 3px;
  background: white;
  border-radius: 50%;
  top: 5px;
  left: 5px;
  z-index: 1;
}

.glasses {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 40px;
  z-index: 4;
}

.glass-frame {
  position: absolute;
  width: 32px;
  height: 28px;
  border: 2.5px solid #1e293b;
  border-radius: 50% 50% 45% 45%;
  background: rgba(99, 102, 241, 0.15);
  backdrop-filter: blur(2px);
}

.glass-frame.left {
  left: 8px;
}

.glass-frame.right {
  right: 8px;
}

.nose-bridge {
  position: absolute;
  width: 12px;
  height: 3px;
  background: #1e293b;
  border-radius: 2px;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
}

.glass-frame::before {
  content: '';
  position: absolute;
  width: 8px;
  height: 2px;
  background: #1e293b;
  top: 12px;
}

.glass-frame.left::before {
  left: -10px;
  transform: rotate(-10deg);
}

.glass-frame.right::before {
  right: -10px;
  transform: rotate(10deg);
}

.avatar-nose {
  width: 8px;
  height: 12px;
  background: #ffb380;
  border-radius: 0 0 50% 50%;
  margin-top: 0.8rem;
  box-shadow: -1px 2px 3px rgba(0, 0, 0, 0.1);
}

.avatar-smile {
  width: 35px;
  height: 18px;
  border: 3px solid #d97757;
  border-top: none;
  border-radius: 0 0 35px 35px;
  margin-top: 0.3rem;
  animation: smile 3s ease-in-out infinite;
}

.window-header {
  background: #1e293b;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar2 {
  position: absolute;
  right: 1rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--primary);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
}

.avatar2:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
}

.avatar2-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes floatAvatar {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {

  0%,
  100% {
    opacity: 0.6;
    transform: scale(1);
  }

  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

.greeting {
  font-size: clamp(0.9rem, 1.5vw + 0.5rem, 1.2rem);
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.name {
  font-size: clamp(2rem, 5vw + 1rem, 4rem);
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.role-container {
  font-size: clamp(1.1rem, 2vw + 0.5rem, 1.8rem);
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  min-height: 2.5rem;
}

.cursor {
  animation: blink 1s infinite;
  color: var(--primary);
}

@keyframes blink {

  0%,
  50% {
    opacity: 1;
  }

  51%,
  100% {
    opacity: 0;
  }
}

.description {
  font-size: clamp(0.875rem, 1.2vw + 0.5rem, 1.1rem);
  color: var(--text-muted);
  margin-bottom: 2rem;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn {
  padding: clamp(0.75rem, 1vw + 0.5rem, 0.875rem) clamp(1.5rem, 2vw + 1rem, 2rem);
  border-radius: 0.5rem;
  font-size: clamp(0.875rem, 1vw + 0.3rem, 1rem);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  border: none;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
  width: 300px;
  height: 300px;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: white;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.6);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--primary);
}

.btn-secondary:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(59, 130, 246, 0.4);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  width: clamp(2.5rem, 3vw + 1rem, 3rem);
  height: clamp(2.5rem, 3vw + 1rem, 3rem);
  border-radius: 0.5rem;
  background: var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  position: relative;
}

.social-links a::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 0.5rem;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.social-links a:hover::before {
  opacity: 1;
}

.social-links a svg {
  position: relative;
  z-index: 1;
  width: clamp(20px, 2.5vw, 24px);
  height: clamp(20px, 2.5vw, 24px);
}

.social-links a:hover {
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(59, 130, 246, 0.4);
}

.hero-visual {
  animation: fadeInRight 1s ease;
  max-width: 100%;
}

.code-window {
  background: var(--bg-darker);
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  max-width: 100%;
}

.window-header {
  background: #1e293b;
  padding: clamp(0.5rem, 1vw, 0.75rem) clamp(0.75rem, 1.5vw, 1rem);
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.window-dots {
  display: flex;
  gap: 0.5rem;
}

.window-dots span {
  width: clamp(0.625rem, 1vw, 0.75rem);
  height: clamp(0.625rem, 1vw, 0.75rem);
  border-radius: 50%;
  background: var(--border);
}

.window-dots span:nth-child(1) {
  background: #ef4444;
}

.window-dots span:nth-child(2) {
  background: #f59e0b;
}

.window-dots span:nth-child(3) {
  background: #10b981;
}

.window-title {
  color: var(--text-muted);
  font-size: clamp(0.75rem, 1vw + 0.3rem, 0.875rem);
}

.avatar2 {
  position: absolute;
  right: 1rem;
  width: clamp(30px, 4vw, 40px);
  height: clamp(30px, 4vw, 40px);
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--primary);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
}

.avatar2:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
}

.avatar2-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.window-content {
  padding: clamp(1rem, 2vw, 2rem);
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: clamp(0.75rem, 1vw + 0.3rem, 0.9rem);
  line-height: 1.8;
}

.content-layout {
  display: flex;
  gap: clamp(1rem, 2vw, 2rem);
  align-items: center;
}

.profile-section {
  flex-shrink: 0;
}

.profile-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.profile-avatar {
  position: relative;
  width: clamp(90px, 15vw, 140px);
  height: clamp(90px, 15vw, 140px);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-image {
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  border-radius: 15px;
  object-fit: cover;
  display: block;
  background: white;
}

.avatar-gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
  animation: gradientShift 8s ease infinite;
}

@keyframes gradientShift {

  0%,
  100% {
    transform: scale(1) rotate(0deg);
  }

  50% {
    transform: scale(1.1) rotate(10deg);
  }
}

.profile-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: clamp(0.4rem, 1vw, 0.5rem) clamp(0.75rem, 1.5vw, 1rem);
  background: rgba(16, 185, 129, 0.1);
  border-radius: 20px;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.status-dot {
  width: clamp(6px, 1vw, 8px);
  height: clamp(6px, 1vw, 8px);
  background: #10b981;
  border-radius: 50%;
  animation: statusPulse 2s infinite;
}

@keyframes statusPulse {

  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }

  50% {
    box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
  }
}

.status-text {
  font-size: clamp(0.7rem, 1vw, 0.75rem);
  color: #10b981;
  font-weight: 600;
}

.code-section {
  flex: 1;
  overflow-x: auto;
  min-width: 0;
}

.keyword {
  color: #c678dd;
}

.variable {
  color: #e06c75;
}

.property {
  color: #61afef;
}

.string {
  color: #98c379;
}

.number {
  color: #d19a66;
}

.boolean {
  color: #56b6c2;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: clamp(0.75rem, 1vw, 0.875rem);
  animation: bounce 2s infinite;
}

.mouse {
  width: clamp(20px, 3vw, 24px);
  height: clamp(30px, 4vw, 36px);
  border: 2px solid var(--text-muted);
  border-radius: 12px;
  position: relative;
}

.mouse::before {
  content: '';
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 8px;
  background: var(--text-muted);
  border-radius: 2px;
  animation: scroll 1.5s infinite;
}

@keyframes scroll {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }
}

@keyframes bounce {

  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }

  50% {
    transform: translateX(-50%) translateY(-10px);
  }
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

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Design - Desktop Large */
@media (max-width: 1400px) {
  .hero-content {
    max-width: 1200px;
    gap: 3rem;
  }

  .orb-1 {
    width: 400px;
    height: 400px;
  }

  .orb-2 {
    width: 350px;
    height: 350px;
  }

  .orb-3 {
    width: 300px;
    height: 300px;
  }
}

/* Desktop Medium */
@media (max-width: 1280px) {
  .hero-content {
    max-width: 1000px;
    gap: 2.5rem;
    padding: 0 2rem;
  }

  .name {
    font-size: 3.5rem;
  }

  .role-container {
    font-size: 1.6rem;
  }

  .description {
    font-size: 1rem;
  }

  .orb-1 {
    width: 350px;
    height: 350px;
  }

  .orb-2 {
    width: 300px;
    height: 300px;
  }

  .orb-3 {
    width: 250px;
    height: 250px;
  }
}

/* Laptop/Tablet Landscape */
@media (max-width: 1024px) {
  .hero {
    padding: 1.5rem;
  }

  .hero-content {
    max-width: 900px;
    gap: 2rem;
    padding: 0 1.5rem;
  }

  .name {
    font-size: 3rem;
  }

  .role-container {
    font-size: 1.4rem;
  }


  .profile-avatar {
    width: 120px;
    height: 120px;
  }

  .orb-1,
  .orb-2,
  .orb-3 {
    filter: blur(80px);
  }
}

/* Tablet Portrait */
@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    padding: 6rem 1.5rem;
  }

  .name {
    font-size: 2.8rem;
  }

  .role-container {
    font-size: 1.5rem;
  }

  .hero-buttons {
    justify-content: center;
    flex-wrap: wrap;
  }

  .social-links {
    justify-content: center;
  }

  .hero-visual {
    order: -1;
    max-width: 600px;
    margin: 0 auto;
  }

  .content-layout {
    flex-direction: column;
  }

  .profile-avatar {
    width: 120px;
    height: 120px;
  }

  .orb-1 {
    width: 300px;
    height: 300px;
    top: -150px;
    left: -150px;
  }

  .orb-2 {
    width: 250px;
    height: 250px;
    bottom: -125px;
    right: -125px;
  }

  .orb-3 {
    width: 200px;
    height: 200px;
  }
}

/* Mobile Large */
@media (max-width: 768px) {
  .hero {
    padding: 1rem;
    min-height: auto;
  }

  .hero-content {
    padding: 4rem 1rem;
    gap: 2rem;
  }

  .name {
    font-size: 2.5rem;
  }

  .greeting {
    font-size: 1rem;
  }

  .role-container {
    font-size: 1.3rem;
  }

  .description {
    font-size: 0.95rem;
  }

  .hero-buttons {
    width: 100%;
  }

  .btn {
    width: 100%;
    max-width: 300px;
  }

  .window-content {
    padding: 1.5rem 2.5rem;
    font-size: 1rem;
  }

  .content-layout {
    gap: 1rem;
  }

  .profile-avatar {
    width: 100px;
    height: 100px;
  }

  .social-links a {
    width: 2.5rem;
    height: 2.5rem;
  }

  .orb-1,
  .orb-2,
  .orb-3 {
    filter: blur(60px);
  }
}

/* Mobile Medium */
@media (max-width: 640px) {
  .hero-content {
    padding: 3rem 1rem;
  }

  .name {
    font-size: 2rem;
    line-height: 1.1;
  }

  .greeting {
    font-size: 0.9rem;
  }

  .role-container {
    font-size: 1.1rem;
    min-height: 2rem;
  }

  .description {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .hero-visual {
    max-width: 100%;
  }

  .window-content {
    padding: 0.75rem;
    font-size: 0.75rem;
    line-height: 1.6;
  }

  .code-window {
    border-radius: 0.75rem;
  }

  .window-header {
    padding: 0.5rem 0.75rem;
  }

  .window-dots span {
    width: 0.625rem;
    height: 0.625rem;
  }

  .window-title {
    font-size: 0.75rem;
  }

  .avatar2 {
    width: 30px;
    height: 30px;
  }

  .profile-avatar {
    width: 90px;
    height: 90px;
  }

  .status-text {
    font-size: 0.7rem;
  }

  .orb-1 {
    width: 250px;
    height: 250px;
    top: -125px;
    left: -125px;
  }

  .orb-2 {
    width: 200px;
    height: 200px;
    bottom: -100px;
    right: -100px;
  }

  .orb-3 {
    width: 180px;
    height: 180px;
  }
}

/* Mobile Small */
@media (max-width: 480px) {
  .hero {
    padding: 0.5rem;
  }

  .hero-content {
    padding: 8rem 0.5rem;
    gap: 1.5rem;
  }

  .name {
    font-size: 1.75rem;
  }

  .greeting {
    font-size: 0.85rem;
  }

  .role-container {
    font-size: 1rem;
  }

  .description {
    font-size: 0.85rem;
    line-height: 1.6;
  }

  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }

  .window-content {
    padding: 1.5rem;
    font-size: 1rem;
  }

  .profile-avatar {
    width: 80px;
    height: 80px;
  }

  .profile-status {
    padding: 0.4rem 0.75rem;
  }

  .social-links a {
    width: 2.25rem;
    height: 2.25rem;
  }

  .social-links a svg {
    width: 20px;
    height: 20px;
  }

  .scroll-indicator {
    bottom: 1rem;
    font-size: 0.75rem;
  }

  .mouse {
    width: 20px;
    height: 30px;
  }

  .orb-1,
  .orb-2,
  .orb-3 {
    filter: blur(50px);
    opacity: 0.3;
  }
}

/* Mobile Extra Small */
@media (max-width: 375px) {

  .name {
    font-size: 1.5rem;
  }

  .role-container {
    font-size: 0.9rem;
  }

  .description {
    font-size: 0.8rem;
  }

  .btn {
    padding: 0.625rem 1.25rem;
    font-size: 0.85rem;
  }

  .window-content {
    font-size: 0.85rem;
  }

  .profile-avatar {
    width: 70px;
    height: 70px;
  }

  .orb-1 {
    width: 200px;
    height: 200px;
  }

  .orb-2 {
    width: 180px;
    height: 180px;
  }

  .orb-3 {
    width: 150px;
    height: 150px;
  }
}
</style>
