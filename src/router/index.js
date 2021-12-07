import PageHome from '@/components/PageHome'
import PagePeople from '@/components/PagePeople'
import PageCompanies from '@/components/PageCompanies'
import PageGenerators from '@/components/PageGenerators'
import PageValidations from '@/components/PageValidations'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/people',
    name: 'People',
    component: PagePeople
  },
  {
    path: '/companies',
    name: 'Companies',
    component: PageCompanies
  },
  {
    path: '/generators',
    name: 'Generators',
    component: PageGenerators
  },
  {
    path: '/validations',
    name: 'Validations',
    component: PageValidations
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
