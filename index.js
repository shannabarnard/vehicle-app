/**
 * Created by brett.hadley on 10/10/2016.
 */
const app = require('./server');

app.listen(9988, (error) => {
    if (!error) {
        console.log('server running...')
    }
});
