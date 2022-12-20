const jwt = require("jsonwebtoken");
function generateToken() {
const payload = {
"id": "61badf62-5d51-4a42-80f0-dc6c8990bef6",
"name": "Lizen Shakya",
"official_email_id": "lizen@outside.tech",
"iat": 1666376100
}

const token = jwt.sign(payload, "$2b$10$Bb4TDYmHyPUFtATYFkKEY", {expiresIn: "1d"});
console.log(token, '>>>>>')
};

generateToken();