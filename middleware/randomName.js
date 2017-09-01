var rnd = function rand_name() {
        var result       = '';
        var words        = '0123456789qwertyuiopasdfghjklzxcvbnm';
        var max_position = words.length - 1;
            for( i = 0; i < 5; ++i ) {
                position = Math.floor ( Math.random() * max_position );
                result = result + words.substring(position, position + 1);
            }
        return result;
    }
module.exports = rnd;	
	