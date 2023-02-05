import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
    setup () {
        return { v$: useVuelidate() }
    },
    data () {
        return {
            firstName: '',
            lastName: '',
            contact: {
                email: ''
            }
        }
    },
    validations () {
        return {
            firstName: { required }, // Matches this.firstName
            lastName: { required }, // Matches this.lastName
            contact: {
                email: { required, email } // Matches this.contact.email
            }
        }
    }
}