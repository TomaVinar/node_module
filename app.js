const fs = require('fs');
const path = require('path');
const replace = require('repl')

// fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (error) => {
//     if (error) {
//         console.log(error);
//     }
// })
//
// fs.mkdir(path.join(__dirname, 'main', 'inPerson'), (error) => {
//     if (error) {
//         console.log(error);
//     }
// })
//
// fs.writeFile(path.join(__dirname, 'main', 'online', 'online.txt'), 'Some data', (err) => {
//     if (err) throw err
// })
//
// fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), 'New data', (error) => {
//     if (error) {
//         console.log(error)
//     }
// })
//
// function newContent() {
//     const onlineUsers = [
//         {name: "Ivan", age: 22, city: "Lviv"},
//         {name: "Stepan", age: 28, city: "Lviv"},
//         {name: "Fedir", age: 32, city: "Lviv"}
//     ];
//
//     for (const user of onlineUsers) {
//         fs.writeFile(path.join(__dirname, 'main', 'online', `${user.name}.txt`),
//             `${user.name.toString()} \n${user.age.toString()} \n${user.city.toString()}`,
//             {flag: 'w'},
//             (error) => {
//                 if (error) {
//                     console.log(error)
//                 }
//             })
//     }
//
// }
//
// newContent();

// function inPerson () {
//     const inPersonUsers = [
//         {name: "Marta", age: 22, city: "Lviv"},
//         {name: "Olena", age: 28, city: "Lviv"},
//         {name: "Maria", age: 32, city: "Lviv"}
//     ];
//
//     for (const user of inPersonUsers) {
//         fs.writeFile(path.join(__dirname, 'main', 'inPerson', `${user.name}.txt`),
//             `${user.name.toString()} \n${user.age.toString()} \n${user.city.toString()}`,
//             {flag: 'w'},
//             (error) => {
//                 if (error) {
//                     console.log(error)
//                 }
//             })
//     }
//
// }
//
// inPerson();
//

function replaceContent() {
    fs.readdir(path.join(__dirname, 'main', 'online'), (error, files) => {
        for (const file of files) {
            if (!file.includes('new_')) {
                fs.rename(path.join(__dirname, 'main', 'online', file), path.join(__dirname, 'main', 'inPerson', `new_${file}`),
                    (err) => {
                        if (err) {
                            console.log(err);
                        }
                    })
            }
        }
    })
    fs.readdir(path.join(__dirname, 'main', 'inPerson'), (error, items) => {
        for (const item of items) {
            if (!item.includes('repl_')) {
                fs.rename(path.join(__dirname, 'main', 'inPerson', item), path.join(__dirname, 'main', 'online', `repl_${item}`),
                    (err) => {
                        if (err) {
                            console.log(err);
                        }
                    })
            }
        }
    })
}

replaceContent();

