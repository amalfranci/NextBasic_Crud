import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

const getTopics = async (id)=>{

    try {
        const res=await fetch (`http://localhost:3000/api/topics/${id}`,{
            cache:'no-store'

        })
        if(!res.ok){
            throw new Error("Failed to fetch topics")

        }
        return  await res.json()
    } catch (error) {
        console.log(error)
    }
}

async function EditeTopic({params}) {
    const {id}=params
    const {topic} = await getTopics(id)
    const {title,description}=topic
 return <EditTopicForm id={id} title={title} description={description}/>
}

export default EditeTopic