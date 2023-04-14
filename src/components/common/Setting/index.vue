<script setup lang='ts'>
import { computed, ref } from 'vue'
import { NModal, NTabPane, NTabs } from 'naive-ui'
import General from './General.vue'
import Advanced from './Advanced.vue'
import About from './About.vue'
import { useAuthStore } from '@/store'
import { SvgIcon } from '@/components/common'

interface Props {
  visible: boolean
}

interface Emit {
  (e: 'update:visible', visible: boolean): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const authStore = useAuthStore()

const isChatGPTAPI = computed<boolean>(() => !!authStore.isChatGPTAPI)

const active = ref('General')

const show = computed({
  get() {
    return props.visible
  },
  set(visible: boolean) {
    emit('update:visible', visible)
  },
})
</script>

<template>
  <NModal v-model:show="show" :auto-focus="false" preset="card" style="width: 95%; max-width: 640px">
    <div>
      <NTabs v-model:value="active" type="line" animated>
        <!-- <NTabPane name="General" tab="General">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:file-user-line" />
            <span class="ml-2">{{ $t('setting.general') }}</span>
          </template>
          <div class="min-h-[100px]">
            <General />
          </div>
        </NTabPane> -->
        <NTabPane v-if="isChatGPTAPI" name="Advanced" tab="Advanced">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:equalizer-line" />
            <span class="ml-2">{{ $t('setting.advanced') }}</span>
          </template>
          <div class="min-h-[100px]">
            <Advanced />
          </div>
        </NTabPane>
        <!-- <NTabPane name="Config" tab="Config">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:list-settings-line" />
            <span class="ml-2">{{ $t('setting.config') }}</span>
          </template>
          <About />
        </NTabPane> -->
      </NTabs>
    </div>
  </NModal>
</template>


<!-- 这段代码是 Vue 3 的一个组件，使用了<script setup>语法。它引入了一些来自 Vue、naive-ui（一个 Vue 3 UI 库）的组件和其他自定义组件。此组件主要用于显示一个弹出窗口（模态框），包含三个选项卡：General（通用），Advanced（高级）和Config（配置）。

以下是代码的分析：

从 Vue 中导入computed和ref函数。
从 naive-ui 导入NModal、NTabPane和NTabs组件。
从相对路径导入General、Advanced和About组件。
从@/store导入useAuthStore。
导入自定义SvgIcon组件。
定义Props和Emit接口。
使用defineProps和defineEmits函数定义组件的props和emit。
使用useAuthStore来创建一个authStore实例。
计算属性isChatGPTAPI，用于判断用户是否拥有 ChatGPT API 的权限。
创建一个ref实例active，用于存储当前活动的选项卡。
使用计算属性show处理模态框的显示和隐藏。
使用<template>语法编写组件的 HTML 结构。 -->
  <!-- 如果你想去掉“设置.配置”这一项，只需删除与NTabPane相关的代码段。以下是修改后的代码： -->