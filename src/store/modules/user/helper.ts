import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://duckgpt-1256187161.cos.ap-nanjing.myqcloud.com/avatar.jpg',
      name: '小黄鸭AI助手',
      description: '欢迎 <a href="https://duckgpt-1256187161.cos.ap-nanjing.myqcloud.com/aboutMe.html" class="text-blue-500" target="_blank" >加入交流群</a>',
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
