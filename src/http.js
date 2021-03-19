import axios from 'axios'

export default class AxiosWrapper {
    instance = null
    baseRoute = null

    constructor({ baseRoute, ...options }) {
        this.instance = axios.create(options)
        this.baseRoute = baseRoute

        this.instance.interceptors.request.use((config) => {

            const newConfig = {
                ...config,
                url: `${baseRoute}@${config.url}`
            }

            const authToken = sessionStorage.getItem('auth:token')
            if( authToken ) {
                Object.assign(newConfig, {
                    headers: {
                        authorization: `Bearer ${authToken}`
                    }
                })
            }

            return newConfig
        })

        Object.assign(this, this.instance)
    }
}