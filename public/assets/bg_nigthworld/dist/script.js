/*
	Designed by: Hash Elias
	Original image: https://dribbble.com/shots/5425482-LOST
*/

gsap.registerPlugin();
const a = document.querySelector("#a");
const son = document.querySelector("#son");
const soff = document.querySelector("#soff");
const unit = 3;
const layerFrom = { xPercent: -100 };
const layerTo = {
	xPercent: 0,
	repeat: -1,
	ease: "linear"
};

const startAnimation = () => {
	a.loop = true;

	if (a.paused) a.play();
	else {
		a.loop = true;
		a.pause();
		a.currentTime = 0;
	}

	son.classList.toggle("s");
	soff.classList.toggle("s");
};

soff.addEventListener("click", startAnimation);
son.addEventListener("click", startAnimation);
// ==============================
// ==============================

gsap
	.timeline({ yoyo: true, repeat: -1 })
	.to("html", { "--bg1": "#131e86", duration: 11.55 })
	.to("html", { "--bg1": "#222d93", duration: 0.15 })
	.to("html", { "--bg1": "#131e86", duration: 0.15 })
	.to("html", { "--bg1": "#222d93", duration: 0.15 });
// -----------------------------

gsap.fromTo(".layer-tree", layerFrom, {
	...layerTo,
	duration: 32
});

gsap.fromTo(".layer-02", layerFrom, {
	...layerTo,
	duration: 12
});

gsap.fromTo(".layer-03", layerFrom, {
	...layerTo,
	duration: 8
});
gsap.fromTo(".layer-tree02", layerFrom, {
	...layerTo,
	duration: 7
});
gsap.fromTo(".layer-05", layerFrom, {
	...layerTo,
	duration: 3
});

gsap.to(".smoke", {
	y: `${-3 * unit}vmin`,
	opacity: 0.05,
	duration: 1,
	repeat: -1
});
// -----------------------------
gsap
	.timeline({ yoyo: true, repeat: -1 })
	.to(".stone-1", {
		rotateZ: -10,
		y: 0,
		duration: 5
	})
	.to(".stone-1", {
		rotateZ: -10,
		y: `${3 * unit}vmin`,
		duration: 1
	});

gsap
	.timeline({ yoyo: true, repeat: -1 })
	.to(".stone-2", {
		rotateZ: 10,
		y: 0,
		duration: 7
	})
	.to(".stone-2", {
		rotateZ: 10,
		y: `${3 * unit}vmin`,
		duration: 1
	});

// -----------------------------

gsap
	.timeline({ yoyo: true, repeat: -1 })
	.to(".head", { rotateZ: 0, duration: 3 })
	.to(".head", { rotateZ: 45, duration: 0.5 })
	.to(".head", { rotateZ: 45, duration: 2 })
	.to(".head", { rotateZ: 0, duration: 0.5 });

gsap
	.timeline({ yoyo: true, repeat: -1 })
	.to(
		".ghost",
		{
			y: `${-1.125 * unit}vmin`,
			scaleZ: 0.7,
			scaleX: 0.9,
			duration: 0.5,
			repeat: -1,
			yoyo: true
		},
		"start"
	)
	.to(
		".ghost",
		{
			"clip-path":
				"polygon(20% 100%, 10% 88%, 5% 78%, 4% 63%, 6% 50%, 11% 37%, 16% 28%, 22% 21%, 31% 15%, 44% 13%, 57% 14%, 68% 20%, 76% 26%, 81% 33%, 87% 42%, 89% 54%, 89% 66%, 86% 80%, 82% 89%, 72% 100%)",
			repeat: -1,
			yoyo: true,
			duration: 0.25
		},
		"start"
	);

gsap.to(".light", {
	y: `${-1.125 * unit}vmin`,
	scaleX: 0.9,
	duration: 0.5,
	repeat: -1,
	yoyo: true
});

// -----------------------------

gsap.to(".f-01", {
	keyframes: {
		"0%, 100%": { translateX: `${1 * unit}vmin`, translateY: `${1 * unit}vmin ` },
		"10%": { translateX: `${1 * unit}vmin`, translateY: `${1 * unit}vmin` },
		"30%": { translateX: `${12 * unit}vmin`, translateY: `${2 * unit}vmin` },
		"20%": { translateX: `${14 * unit}vmin`, translateY: `${4 * unit}vmin` },
		"40%": { translateX: `${18 * unit}vmin`, translateY: `${7 * unit}vmin` },
		"50%": { translateX: `${4 * unit}vmin`, translateY: `${8 * unit}vmin` },
		"60%": { translateX: `${12 * unit}vmin`, translateY: `${9 * unit}vmin` },
		"70%": { translateX: `${4 * unit}vmin`, translateY: `${5 * unit}vmin` },
		"80%": { translateX: `${12 * unit}vmin`, translateY: `${3 * unit}vmin` },
		"90%": { translateX: `${3 * unit}vmin`, translateY: `${3 * unit}vmin` },
		"98%": { translateX: `${1 * unit}vmin`, translateY: `${1 * unit}vmin` },
		easeEach: "linear"
	},
	repeat: -1,
	yoyo: true,
	duration: 10
});
gsap.to(".f-02", {
	keyframes: {
		"0%, 100%": { translateX: `${3 * unit}vmin`, translateY: `${1 * unit}vmin ` },
		"10%": { translateX: `${4 * unit}vmin`, translateY: `${2 * unit}vmin` },
		"30%": { translateX: `${14 * unit}vmin`, translateY: `${5 * unit}vmin` },
		"20%": { translateX: `${12 * unit}vmin`, translateY: `${4 * unit}vmin` },
		"40%": { translateX: `${14 * unit}vmin`, translateY: `${2 * unit}vmin` },
		"50%": { translateX: `${25 * unit}vmin`, translateY: `${8 * unit}vmin` },
		"60%": { translateX: `${15 * unit}vmin`, translateY: `${9 * unit}vmin` },
		"70%": { translateX: `${4 * unit}vmin`, translateY: `${5 * unit}vmin` },
		"80%": { translateX: `${20 * unit}vmin`, translateY: `${6 * unit}vmin` },
		"90%": { translateX: `${3 * unit}vmin`, translateY: `${3 * unit}vmin` },
		"98%": { translateX: `${3 * unit}vmin`, translateY: `${6 * unit}vmin` },
		easeEach: "linear"
	},
	repeat: -1,
	yoyo: true,
	duration: 10
});
gsap.to(".f-03", {
	keyframes: {
		"0%, 100%": { translateX: `${3 * unit}vmin`, translateY: `${3 * unit}vmin ` },
		"10%": { translateX: `${4 * unit}vmin`, translateY: `${12 * unit}vmin` },
		"30%": { translateX: `${14 * unit}vmin`, translateY: `${15 * unit}vmin` },
		"20%": { translateX: `${2 * unit}vmin`, translateY: `${14 * unit}vmin` },
		"40%": { translateX: `${14 * unit}vmin`, translateY: `${12 * unit}vmin` },
		"50%": { translateX: `${15 * unit}vmin`, translateY: `${18 * unit}vmin` },
		"60%": { translateX: `${18 * unit}vmin`, translateY: `${19 * unit}vmin` },
		"70%": { translateX: `${4 * unit}vmin`, translateY: `${15 * unit}vmin` },
		"80%": { translateX: `${20 * unit}vmin`, translateY: `${6 * unit}vmin` },
		"90%": { translateX: `${3 * unit}vmin`, translateY: `${3 * unit}vmin` },
		"98%": { translateX: `${3 * unit}vmin`, translateY: `${6 * unit}vmin` },
		easeEach: "linear"
	},
	repeat: -1,
	yoyo: true,
	duration: 8
});
gsap.to(".f-04", {
	keyframes: {
		"0%, 100%": { translateX: `${3 * unit}vmin`, translateY: `${3 * unit}vmin ` },
		"10%": { translateX: `${14 * unit}vmin`, translateY: `${12 * unit}vmin` },
		"30%": { translateX: `${4 * unit}vmin`, translateY: `${15 * unit}vmin` },
		"20%": { translateX: `${12 * unit}vmin`, translateY: `${8 * unit}vmin` },
		"40%": { translateX: `${4 * unit}vmin`, translateY: `${10 * unit}vmin` },
		"50%": { translateX: `${5 * unit}vmin`, translateY: `${17 * unit}vmin` },
		"60%": { translateX: `${8 * unit}vmin`, translateY: `${19 * unit}vmin` },
		"70%": { translateX: `${14 * unit}vmin`, translateY: `${5 * unit}vmin` },
		"80%": { translateX: `${10 * unit}vmin`, translateY: `${6 * unit}vmin` },
		"90%": { translateX: `${3 * unit}vmin`, translateY: `${2 * unit}vmin` },
		"98%": { translateX: `${3 * unit}vmin`, translateY: `${8 * unit}vmin` },
		easeEach: "linear"
	},
	repeat: -1,
	yoyo: true,
	duration: 8
});