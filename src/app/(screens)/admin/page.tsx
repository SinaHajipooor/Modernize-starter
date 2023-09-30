import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"

async function AdminPage() {
    const session = await getServerSession(options)

    return (
        <div>
            ------------- ADMIN PAGE -------------
            <br />
            {session?.user.first_name}
            <br />
            {session?.user.last_name}
            <br />
            {session?.user.mobile}
            <br />
            <br />
        </div>
    )
}

export default AdminPage
