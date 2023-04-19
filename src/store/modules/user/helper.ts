import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface AIInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export interface AIState {
  AIInfo: UserInfo
}

export function defaultAISetting(): AIState {
  return {
    AIInfo: {
      avatar: 'https://duckgpt-1256187161.cos.ap-nanjing.myqcloud.com/avatar.jpg',
      name: '小黄鸭AI助手',
      description: '欢迎扫码加群交流</a>',

      // description: '欢迎 <a href="https://duckgpt-1256187161.cos.ap-nanjing.myqcloud.com/aboutMe.html" class="text-blue-500" target="_blank" >加入交流群</a>',
    },
  }
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://duckgpt-1256187161.cos.ap-nanjing.myqcloud.com/user_avatar.jpg',
      name: '萌新',
      description: '',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
