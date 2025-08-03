
window.confetti = {
    fire: function () {
        // Simple confetti animation
        let colors = ['#ffb300', '#e84a5f', '#00b8a9', '#43dde6', '#f45905','#29a19c'];
        let canvas = document.createElement('canvas');
        canvas.id = "confetti-canvas";
        document.body.appendChild(canvas);
        let ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth; canvas.height = window.innerHeight;

        let confs = [];
        for(let i=0;i<180;i++){
            confs.push({
                x: Math.random()*canvas.width,
                y: Math.random()*canvas.height/3,
                r: Math.random()*8+3,
                d: Math.random()*80+40,
                color: colors[Math.floor(Math.random()*colors.length)],
                tilt: Math.random() * 10 - 10
            });
        }
        let angle = 0;
        function draw(){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            angle += 0.01;
            for(let i=0;i<confs.length;i++){
                let cf = confs[i];
                ctx.beginPath();
                ctx.arc(cf.x, cf.y, cf.r, 0, 2*Math.PI);
                ctx.fillStyle = cf.color;
                ctx.fill();
                cf.y += Math.cos(angle+cf.d)*0.5 + 2;
                cf.x += Math.sin(angle)*2 + Math.sin(cf.d)*1.4;
                cf.tilt += Math.sin(angle)*0.5;
                if (cf.y > canvas.height) {
                    cf.x = Math.random()*canvas.width;
                    cf.y = -10;
                }
            }
        }
        let anim = setInterval(draw, 20);
        setTimeout(()=>{clearInterval(anim);canvas.remove()},3500);
    }
};