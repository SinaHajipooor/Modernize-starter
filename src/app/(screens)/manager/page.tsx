import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"

async function ManagerPage() {
    const session = await getServerSession(options)
    return (
        <div>
            ----------------- manager panel -----------------
            <br />
            <br />
            <br />
            <br />
            <br />
            {session?.user.first_name}
            <br />
            {session?.user.last_name}
            <br />
            {session?.user.mobile}
        </div>
    )
}

export default ManagerPage
