import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"

async function page() {
    const sessions = await getServerSession(options)
    return (
        <div>
            ---------------- user panel -----------------
            <br />
            <br />
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

export default page
