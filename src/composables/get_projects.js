import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const get_projects = () => {

    const projects = ref([])
    const featured_project = ref([])
    const coming_soon = ref([])

    const load = async () => {
        const res = await projectFirestore.collection('projects').get()
        const res2 = await projectFirestore.collection('featured project').get()
        const res3 = await projectFirestore.collection('coming soon').get()
        
        projects.value = res.docs.map(doc => {
            return { ...doc.data(), id: doc.id }
        })
        featured_project.value = res2.docs.map(doc => {
            return { ...doc.data(), id: doc.id }
        })
        coming_soon.value = res3.docs.map(doc => {
            return { ...doc.data(), id: doc.id }
        })
    }

    return { projects, featured_project, coming_soon, load }
}

export default get_projects