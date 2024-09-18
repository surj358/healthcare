import { useParams } from "react-router-dom"

export function Doctor() {
    const { speciality } = useParams()

    
    return (
        <div>
            <h1>Welcome to Doctor Page</h1>
        </div>
    )
}

