module.exports = {

    shuffleArray: function (target) {

        if (Array.isArray(target)) {

            for (let i = 0; i < 3; i++) {
             
                let shuffleContainer = [];

                for (let i = 0; target.length > 0; i++) {

                    let rng = Math.floor(Math.random() * target.length);

                    let pull = target.splice(rng, 1);

                    shuffleContainer.push(pull[0]);

                };

                target = shuffleContainer;
            };
            return target;
        } else {
            console.log("invalid input: target must be an array");
            return;
        }
    }
};