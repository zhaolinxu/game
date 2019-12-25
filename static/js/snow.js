/*!
 * Migu Screen Animation JS
 * 下雪效果
 * snow.js
 * Alvin
 * Date: 2017-01-04 11:05
 */

window.onload = function() {
                //canvas init
                var canvas = document.getElementById("canvas");
                var ctx = canvas.getContext("2d");
                //canvas dimensions
                var W = window.innerWidth;
                var H = window.innerHeight;
                canvas.width = W;
                canvas.height = H;
                //snowflake particles
                var mp = 200; //雪花密度
                var particles = [];
                for (var i = 0; i < mp; i++) {
                    particles.push({
                        x: Math.random() * W, //x-coordinate
                        y: Math.random() * H, //y-coordinate
                        r: Math.random() * 4 + 1, //radius雪花半径大小
                        d: Math.random() * mp //density
                    })
                }
                //Lets draw the flakes
                function draw() {
                    ctx.clearRect(0, 0, W, H);
                    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
                    /* ctx.fillStyle = "#FF0000";*/
                    ctx.beginPath();
                    for (var i = 0; i < mp; i++) {
                        var p = particles[i];
                        ctx.moveTo(p.x, p.y);
                        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
                    }
                    ctx.fill();
                    update();
                }
                //Function to move the snowflakes
                //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
                var angle = 0;

                function update() {
                    angle += 0.01;
                    for (var i = 0; i < mp; i++) {
                        var p = particles[i];
                        //Updating X and Y coordinates
                        //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
                        //Every particle has its own density which can be used to make the downward movement different for each flake
                        //Lets make it more random by adding in the radius
                        p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
                        p.x += Math.sin(angle) * 2;
                        //Sending flakes back from the top when it exits
                        //Lets make it a bit more organic and let flakes enter from the left and right also.
                        if (p.x > W || p.x < 0 || p.y > H) {
                            if (i % 3 > 0) //66.67% of the flakes
                            {
                                particles[i] = {
                                    x: Math.random() * W,
                                    y: -10,
                                    r: p.r,
                                    d: p.d
                                };
                            } else {
                                //If the flake is exitting from the right
                                if (Math.sin(angle) > 0) {
                                    //Enter fromth
                                    particles[i] = {
                                        x: -5,
                                        y: Math.random() * H,
                                        r: p.r,
                                        d: p.d
                                    };
                                } else {
                                    //Enter from the right
                                    particles[i] = {
                                        x: W + 5,
                                        y: Math.random() * H,
                                        r: p.r,
                                        d: p.d
                                    };
                                }
                            }
                        }
                    }
                }
                //animation loop雪花下落速度
                setInterval(draw, 15);
            }