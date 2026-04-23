<template>
  <div v-if="needRefresh" class="pwa-update-banner">
    <span>有新内容可用，点击更新</span>
    <button class="pwa-update-btn" @click="updateServiceWorker()">
      更新
    </button>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore - virtual module from vite-plugin-pwa
import { useRegisterSW } from 'virtual:pwa-register/vue'

const { needRefresh, updateServiceWorker } = useRegisterSW({
  onRegistered(r: any) {
    console.log('SW registered: ', r)
  },
  onRegisterError(error: any) {
    console.error('SW registration error', error)
  }
})
</script>

<style scoped>
.pwa-update-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  padding: 12px 20px;
  text-align: center;
  z-index: 1000;
  border-top: 1px solid var(--vp-c-divider);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.pwa-update-btn {
  padding: 6px 16px;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: opacity 0.2s;
}

.pwa-update-btn:hover {
  opacity: 0.9;
}
</style>
