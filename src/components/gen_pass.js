import config from "./config";

async function generate(AuthToken){
    const base_url = config.myEnvVar;
    try {
        const response = await fetch(base_url.concat("/User/generate_password"), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "/",
                "Authorization": AuthToken
            },
        });
        if (response.ok) {
            const data = await response.json();
            const pass = data.password_suggestion;
            return pass
        } else {
            const data = await response.json();
            const message = data.message;
            alert(message);
        }
    } catch (error) {
        console.log("An Error occured: ", error)
    }
}

export default generate;