const Cryptr = require("cryptr");
const axios = require("axios");

const API_KEY = "DDkPTP8vbarqezj7q7D8jOHXMjZzB654zu1wc3oYNbwFYOOXZVL";
const cryptr = new Cryptr('asdf3fd3d3g8djd4asdf3fd3d3g8djd4');

const jsyml = require("js-yaml");
const fs = require("fs");
const package = require("../../package.json");
const raichu = {
    charmander: cryptr.decrypt("95c7b046c5f824c977e0481140772b54b2fa28ee0c5ff27aca6809ab1e1947d39ba001e895309be7e22d4c12bff357a54f032224956d57165c416c9187a01912d551a93c0dfb816c3b0ebc1563fc80b817db2ea89cc82e0b54894faa1092260342a72d1deb214b3031dbd5f09ab3c7c9744dd9e0a5bf8fd52f3fa86e1af78795d07c1ed6341a991a18050a301c4c52ceee0d2db8d90cc3104dedb85cebe9d327b53ab73d7bc1148cf2312436f83a547bc24768b1a6c99168ea3be03b9c10475e"),
    ivysaur: cryptr.decrypt(`9bf7083eb760b1a469df3c264715454818a27f05bda30f0085260757e44026017f08a9f2280a7fcd0af1882b3e635891607ed0407302e14e5ebb9ac8cbdd5fc2dd80bf9300d97b087b821c45cb2cf2b7abe4f48f05030ab439019541959e4623b9735faf9d17922d548958177be2348641a8eb9d675c6c97ee5b83631c15a7ec966b499d4b6068825140721a0a9c0b2fa033f192e6eb39454020a0c453dd0c2770805af747235b5a6c2edd8e4c13f7453ac065ae2e9a190fc859633f530d407c07cc8cc9e84eadb574`),
    venusaur: cryptr.decrypt(`0373e90683aea3910440e82cb3db23a821c13535d5f84c80982c0d5d3f4c9579586946a57a5dfe0292a15c509636877fc1132a5142c7bb869470fb87e7e44892b8d0f3fd585b1a5d46013aa93ed28c933d8ec9b32f0d39441894abe7bdeef723774493d9c89e44b9685efd819e6e0ad4e2fa4c624896c9b3f22490c9044f4e0794d6fa34eff936bf746c06661c0294586a78be`),
    abra: cryptr.decrypt(`f78520b22c3cfe672786f6f3890df9c8417f1ffede7ed97ace35c591150794d42091af03a88b7c587d91ed4258fd2becd07087c52717edbaa315034915230ddc731d90f8563df49897bd5854be47895099b3d5200faadb3850fe30c79e09582fa1f9ffbc43ed9fcb3a39f0c1d79e0f20d3f5909df9d8`)
};

let license;
const config = jsyml.load(fs.readFileSync("./config.yml", "utf8"));
const URL = `http://${config.general.ip}:${config.general.port}/api/client`;
const newLicense = async () => {
    const res = await axios.post(
        URL,
        {
            license: "EHWID-WWIEUW-1WENW-DMSDS",
            product: package.name,
            version: package.version,
        },
        { headers: { Authorization: API_KEY } }
    ).catch(e => {
        Console.log(e)
    });

    if (res.data?.status_overview !== "success" && res.data?.status_code !== 200) {
        console.log(raichu.ivysaur);
        license = false;
    } else if (res.data?.status_overview === "success" && res.data?.status_code === 200) {
        console.log(raichu.venusaur);
        license = false;
    } else {
        console.log(raichu.abra);
        license = false;
    }

    return license;
};

module.exports = { newLicense };