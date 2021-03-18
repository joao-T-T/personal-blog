import Module from '../generic'

export default class Post extends Module {
    constructor() {
        super({
            namespaced: true,
            route: 'post',

            state: {
                item: {
                    title: '',
                    content: ''
                }
            }
        })
    }
}