export const state = () => ({
  links: ['home', 'works', 'about', 'contact'],
  baseURL: ''
})

export const mutations = {
  setUrl: (state, data) => console.log(data)
}

export const actions = {
  setUrl: ({commit}, data) => console.log(data)
}