import { useParams } from "react-router-dom"

export default function User() {
    const { userId } = useParams()

    return (
        <>
            <div className="flex justify-center items-center ">
                <span className="w-20 text-cyan-200 h-10 bg-cyan-600 text-center flex justify-center items-center rounded-lg m-2 hover:bg-cyan-800 hover:text-white cursor-pointer">
                User : {userId}
                </span>
               
            </div>
        </>
    )
}