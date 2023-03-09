<template>
    <footer className="bg-white">
        <div style="border-bottom: 1px solid #454545; font-size: var(--subtittle);
            margin-left: 5%;" 
            className="w-1/2">
            <span>Company</span>
        </div>
        <address style="padding-top: 20px; margin-left: 5%; font-size: var(--base);"
            className="w-9/12">
            <ul>
                <li className="pb-5 pl-5">
                    <strong>Email: </strong>
                    <a href="mailto:example@gmail.com" className="font-thin">example@gmail.com</a>
                </li>
                <li className="pb-5 pl-5">
                    <strong>Cellphone: </strong>
                    <a href="tel:+50372190525" className="font-thin">(+503) 4589-9653 </a>
                </li>
                <li className="pb-5 pl-5">
                    <strong>Address: </strong>
                    <span className="font-thin">took a galley of type and crambled it to make a type specimen book</span>
                </li>
            </ul>
        </address>
        <div className="text-center" style="font-size: var(--subtittle);">
            <ul id="social_section">
                <li className="inline-block p-5"><font-awesome-icon icon="fa-brands fa-facebook" /></li>
                <li className="inline-block p-5"><font-awesome-icon icon="fa-brands fa-facebook-messenger" /></li>
                <li className="inline-block p-5"><font-awesome-icon icon="fa-brands fa-instagram" /></li>
                <li className="inline-block p-5"><font-awesome-icon icon="fa-brands fa-whatsapp" /></li>
                <li className="inline-block p-5"><font-awesome-icon icon="fa-solid fa-link" /></li>
            </ul>
        </div>
        <div className="bg-black text-white end_footer flex justify-center">
            <span className="flowroot pt-5 pb-5" style="font-size: var(--base);">
                <strong>&copy 2023.</strong>
                rights reserved
            </span>
        </div>
    </footer>
</template>

<script>
    export default{

    }
</script>