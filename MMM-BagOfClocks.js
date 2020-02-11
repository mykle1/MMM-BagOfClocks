/* Magic Mirror
 * Module: MMM-BagOfClocks
 *
 * By Mykle1 - MIT Licensed
 *
 */

Module.register("MMM-BagOfClocks",{

	defaults: {
		  city: "",
			type: "",
			animationSpeed: 3000,
			updateInterval: 60 * 60 * 1000,
	},


	start: function () {
	self = this;

	// update timer
	setInterval(function() {
	self.updateDom(self.config.animationSpeed || 0);
	}, this.config.updateInterval);
},

	getStyles: function() {
        return ["MMM-BagOfClocks.css"];
    },

	getDom: function() {

		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border:none";
		iframe.scrolling = "no";


	if (this.config.type === "1") {
		iframe.style.height = "174px";
		iframe.style.width = "256px";
		// Insert config options
		iframe.srcdoc = `<iframe scrolling="no" frameborder="no" clocktype="html5" style="overflow:hidden;border:0;margin:0;padding:0;width:256px;height:174px;"src="https://www.clocklink.com/html5embed.php?clock=046&timezone=${this.config.city}&color=black&size=256&Title=&Message=&Target=&From=2020,1,1,0,0,0&Color=black"></iframe>`;

	} else if (this.config.type === "2") {
		iframe.style.height = "180px";
	  iframe.style.width = "356px";
		// Insert config options
		iframe.srcdoc = `<iframe scrolling="no" frameborder="no" clocktype="html5" style="overflow:hidden;border:0;margin:0;padding:0;width:356px;height:180px;"src="https://www.clocklink.com/html5embed.php?clock=042&timezone=${this.config.city}&color=green&size=356&Title=&Message=&Target=&From=2020,1,1,0,0,0&Color=green"></iframe>`;

	} else if (this.config.type === "3") {
		iframe.style.height = "160px";
	  iframe.style.width = "160px";
		// Insert config options
		iframe.srcdoc = `<iframe scrolling="no" frameborder="no" clocktype="html5" style="overflow:hidden;border:0;margin:0;padding:0;width:150px;height:150px;"src="https://www.clocklink.com/html5embed.php?clock=041&timezone=${this.config.city}&color=green&size=150&Title=&Message=&Target=&From=2020,1,1,0,0,0&Color=green"></iframe>`;

	} else if (this.config.type === "4") {
		iframe.style.height = "90px";
	  iframe.style.width = "390px";
		// Insert config options
		iframe.srcdoc = `<iframe scrolling="no" frameborder="no" clocktype="html5" style="overflow:hidden;border:0;margin:0;padding:0;width:380px;height:80px;"src="https://www.clocklink.com/html5embed.php?clock=047&timezone=${this.config.city}&color=green&size=380&Title=&Message=&Target=&From=2020,1,1,0,0,0&Color=green"></iframe>`;

	} else if (this.config.type === "5") {
		iframe.style.height = "70px";
	  iframe.style.width = "190px";
		// Insert config options
		iframe.srcdoc = `<iframe scrolling="no" frameborder="no" clocktype="html5" style="overflow:hidden;border:0;margin:0;padding:0;width:180px;height:60px;"src="https://www.clocklink.com/html5embed.php?clock=004&timezone=${this.config.city}&color=green&size=180&Title=&Message=&Target=&From=2020,1,1,0,0,0&Color=green"></iframe>`;

	} else if (this.config.type === "6") {
		iframe.style.height = "55px";
	  iframe.style.width = "450px";
		// Insert config options
		iframe.srcdoc = `<iframe scrolling="no" frameborder="no" clocktype="html5" style="overflow:hidden;border:0;margin:0;padding:0;width:440px;height:45px;"src="https://www.clocklink.com/html5embed.php?clock=018&timezone=${this.config.city}&color=purple&size=440&Title=&Message=&Target=&From=2020,1,1,0,0,0&DateFormat=MMM / dd / yyyy&TimeFormat=hh:mm TT&Color=purple"></iframe>`;

	} else if (this.config.type === "7") {
		iframe.style.height = "90px";
	  iframe.style.width = "250px";
		// Insert config options
		iframe.srcdoc = `<iframe scrolling="no" frameborder="no" clocktype="html5" style="overflow:hidden;border:0;margin:0;padding:0;width:240px;height:80px;"src="https://www.clocklink.com/html5embed.php?clock=043&timezone=${this.config.city}&color=yellow&size=240&Title=&Message=&Target=&From=2020,1,1,0,0,0&Color=yellow"></iframe>`;

	} else if (this.config.type === "8") {
		iframe.style.height = "85px";
	  iframe.style.width = "237px";
		// Insert config options
		iframe.srcdoc = `<iframe scrolling="no" frameborder="no" clocktype="html5" style="overflow:hidden;border:0;margin:0;padding:0;width:227px;height:75px;"src="https://www.clocklink.com/html5embed.php?clock=008&timezone=${this.config.city}&color=blue&size=227&Title=&Message=&Target=&From=2020,1,1,0,0,0&Color=blue"></iframe>`;

	} else if (this.config.type === "9") {
		iframe.style.height = "85px";
	  iframe.style.width = "580px";
		// Insert config options
		iframe.srcdoc = `<iframe scrolling="no" frameborder="no" clocktype="html5" style="overflow:hidden;border:0;margin:0;padding:0;width:570px;height:75px;"src="https://www.clocklink.com/html5embed.php?clock=036&timezone=${this.config.city}&color=green&size=570&Title=&Message=&Target=&From=2020,1,1,0,0,0&Color=green"></iframe>`;

	} else if (this.config.type === "10") {
		iframe.style.height = "200px";
	  iframe.style.width = "265px";
		// Insert config options
		iframe.srcdoc = `<div style="text-align:center;padding:1em 0;"> <h2><a style="text-decoration:none;" href="https://www.zeitverschiebung.net/en/city/5139568"><span style="color:cyan;"></span><br /></a></h2> <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=large&timezone=${this.config.city}&show=hour_minute" width="100%" height="140" frameborder="0" seamless></iframe> </div>`;
	}

		return iframe;

	},

});
