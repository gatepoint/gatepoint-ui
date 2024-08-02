// Utilities
import { defineStore } from 'pinia'

import Menu from '@/assets/core/menu.json'
import Link from '@/assets/core/link.json'
import Account from '@/assets/core/account.json'
import UserMenu from '@/assets/user/menu.json'

export const useAppStore = defineStore('app', {
  state: () => ({
    language: localStorage.language || window.navigator.language.toLowerCase() || 'en',
    rail: false,
    theme: null,
    logoUrl: '/assets/images/logo.png',
    menus: Menu,
    links: Link,
    accounts: Account,
    userMenus: UserMenu,
    breadcrumbs: [],
    user: {
      id: null,
      name: null,
      email: null,
      isSuperAdmin: false
    },
    token: {
      accessToken: null,
      refreshToken: null
    },
  }),
  getters: {
    isSignedIn: (state) => (state.user.id !== null),
  },
  actions: {
    refresh(payload) {
      if (payload.accessToken && payload.refreshToken) {
        localStorage.tokenAccessToken = payload.accessToken
        localStorage.tokenRefreshToken = payload.refreshToken
        this.user.id = localStorage.userId
        this.user.name = localStorage.userName
        this.user.email = localStorage.userEmail
        this.user.isSuperAdmin = localStorage.userIsSuperAdmin
        this.token.accessToken = localStorage.tokenAccessToken
        this.token.refreshToken = localStorage.tokenRefreshToken
      }
    },
    signIn(payload) {
      const {
        id,
        name,
        email,
        isSuperAdmin,
        accessToken,
        refreshToken
      } = payload
      localStorage.userId = id
      localStorage.userName = name
      localStorage.userEmail = email
      localStorage.userIsSuperAdmin = isSuperAdmin
      localStorage.tokenAccessToken = accessToken
      localStorage.tokenRefreshToken = refreshToken
      this.user = {
        id,
        name,
        email,
        isSuperAdmin
      }
      this.token = {
        accessToken,
        refreshToken
      }
    },
    signOut() {
      localStorage.removeItem('userId')
      localStorage.removeItem('userName')
      localStorage.removeItem('userEmail')
      localStorage.removeItem('userIsSuperAdmin')
      localStorage.removeItem('tokenAccessToken')
      localStorage.removeItem('tokenRefreshToken')
      this.user.id = null
      this.user.name = null
      this.user.email = null
      this.user.isSuperAdmin = null
      this.token.accessToken = null
      this.token.refreshToken = null
      this.breadcrumbs = []
    },
    setRail(payload) {
      localStorage.rail = Boolean(payload)
      this.rail = Boolean(payload)
    },
    changeTheme(payload) {
      localStorage.theme = payload
      localStorage.logoUrl = payload ? '/assets/images/logo-dark.png' : '/assets/images/logo.png'
      this.theme = payload
      this.logoUrl = this.theme ? '/assets/images/logo-dark.png' : '/assets/images/logo.png'
    },
    setLanguage(payload) {
      localStorage.language = payload
      this.language = payload
    },
    pushBreadcrumbs(payload) {
      this.breadcrumbs.push(payload)
    },
    popBreadcrumbs() {
      this.breadcrumbs.slice(0, this.breadcrumbs.length - 1)
    },
    setBreadcrumbs(payload) {
      this.breadcrumbs = [...payload]
    },
    clearBreadcrumbs() {
      this.breadcrumbs = []
    }
  },
})
