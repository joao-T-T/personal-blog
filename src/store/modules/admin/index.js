import Module from '../generic'

export default class Admin extends Module {
    constructor() {
        super({
            namespaced: true,
            defaults: false,
            
            state: {
                newPost: false,
            }
        })

        this.appendProperty('actions', {
            shiftNewPost: ({ commit }, payload) => {
                commit('NEWPOST_SHIFT', payload)
            }
        })

        this.appendProperty('mutations', {
            NEWPOST_SHIFT: (state, payload) => {
                state.newPost = payload === undefined
                    ? !state.newPost
                    : payload
            }
        })

        this.appendProperty('getters', {
            newPost: state => state.newPost
        })
    }
}