import { RouteRecordRaw } from 'vue-router'

declare global {
  declare type RouteItem = RouteRecordRaw
  declare type RouteItemArray = Array<RouteRecordRaw>
}
