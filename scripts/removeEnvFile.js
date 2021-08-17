 const fs = require('fs');

 function removeEnvFile() {
    const prodDotEnv = process.cwd() + '/.env.production';
   
    try {
      fs.unlinkSync(prodDotEnv);
      console.log(`${prodDotEnv} successfully removed`);
    } catch (error) {
      console.log("\x1b[31m",`[removeEnvFile] there was an error removing ${prodDotEnv} file`);
      console.log("\x1b[0m","");
    }

    return;
 }
 
 removeEnvFile();