import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const get_project = (id)=>{

    const project = ref(null)
    const feature = ref(null)

    const load = async () => {
        let res = await projectFirestore.collection('projects').doc(id).get()
        project.value = { ...res.data(), id: res.id }
        let res2 = await projectFirestore.collection('featured project').doc(id).get()
        feature.value = { ...res2.data(), id: res2.id }
    }

    return { project, feature, load }
}

export default get_project