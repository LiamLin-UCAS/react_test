import { useNavigate } from "react-router";
import { Button } from "@mui/material";

export default function HomePage() {
    const navigate = useNavigate();
    return <>
        <p>"Hello, world"</p>
        <Button onClick={() => { navigate("test1") }} variant="contained">click to /test1</Button>
    </>
}