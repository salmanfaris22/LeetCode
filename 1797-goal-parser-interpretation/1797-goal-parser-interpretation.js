/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
     let result = '';
    let i = 0;

    while (i < command.length) {
        if (command[i] === 'G') {
            result += 'G'; 
            i++;
        } else if (command[i] === '(') {
            if (command[i + 1] === ')') {
                result += 'o'; 
                i += 2;
            } else if (command[i + 1] === 'a') {
                result += 'al'; 
                i += 4;
            }
        }
    }

    return result;
};