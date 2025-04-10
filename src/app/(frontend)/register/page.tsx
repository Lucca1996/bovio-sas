import { ReactElement } from "react";
import SignupForm from "./components/RegisterForm";

export default async function page(): Promise<ReactElement> {
    return <div className="h-[calc(100vh-3rem)]">
        <SignupForm />
    </div>
}