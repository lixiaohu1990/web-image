<script setup lang='ts'>
import { NAvatar } from 'naive-ui'
import defaultAvatar from '@/assets/avatar.jpg'
import { isString } from '@/utils/is'
import { defaultAISetting } from '@/store/modules/user/helper'

const aiInfo = defaultAISetting().AIInfo
</script>

<template>
  <div class="flex items-center overflow-hidden">
    <div class="w-10 h-10 overflow-hidden rounded-full shrink-0">
      <template v-if="isString(aiInfo.avatar) && aiInfo.avatar.length > 0">
        <NAvatar
          size="large"
          round
          :src="aiInfo.avatar"
          :fallback-src="defaultAvatar"
        />
      </template>
      <template v-else>
        <NAvatar size="large" round :src="defaultAvatar" />
      </template>
    </div>
    <div class="flex-1 min-w-0 ml-2">
      <h2 class="overflow-hidden font-bold text-md text-ellipsis whitespace-nowrap">
        {{ aiInfo.name ?? 'duckGpt' }}
      </h2>
      <p class="overflow-hidden text-xs text-gray-500 text-ellipsis whitespace-nowrap">
        <span
          v-if="isString(aiInfo.description) && aiInfo.description !== ''"
          v-html="aiInfo.description"
        />
      </p>
    </div>
  </div>
</template>
