module.exports = {
    content: ["./index.html", "./src/**/*.tsx"],
    theme: {
        colors: {
            primary: "hsla(180, 29%, 47%, 1)",
            black: "hsla(0, 2%, 18%, 1)",
            "lightblack": "hsla(0, 4 % , 41 % , 1)",
            white: "#ffffff",
            transparent: "transparent",
            gray: {
                100: "hsla(0, 0%, 60%, 1)",
                200: "hsla(0, 4%, 41%, 1)",
                300: "hsla(0, 0%, 60%, 0.2)",

            },
            violet: "hsla(223, 57%, 60%, 1)",
            purple: "hsla(231, 24%, 62%, 1)",
            orange: "hsla(28, 69%, 54%, 1)"
        },
        extend: {
            boxShadow: {
                sm: "0px 2px 10px rgba(182, 182, 182, 0.25)",
                lg: "-1px 3px 22px 3px rgba(141, 152, 152, 0.7)"

            }
        }

    },
    plugins: [],
};