import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"

async function UserPage() {
    const sessions = await getServerSession(options)
    return (
        <div>
            ---------------- user panel -----------------
            <br />
            <br />
            {sessions?.user.first_name}
            <br />
            {sessions?.user.last_name}
            <br />
            {sessions?.user.mobile}
        </div>
    )
}

export default UserPage
