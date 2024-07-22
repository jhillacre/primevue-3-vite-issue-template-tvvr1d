import Vue from "@vitejs/plugin-vue";
// import fs from "fs";
import { defineConfig } from "vite";

export default () => {
    // related to my local setup, ignore this
    // let https;
    // if (fs.existsSync("/etc/pki/tls/private/arrai.com.key")) {
    //     https = {
    //         key: fs.readFileSync("/etc/pki/tls/private/arrai.com.key"),
    //         cert: fs.readFileSync("/etc/pki/tls/certs/arrai.com.crt"),
    //     };
    // }
    return defineConfig({
        plugins: [Vue()],
        // server: {
        //     host: true,
        //     port: 8888,
        //     strictPort: true,
        //     https,
        // },
        // preview: {
        //     host: true,
        //     port: 8888,
        //     strictPort: true,
        //     https,
        // },
    });
};