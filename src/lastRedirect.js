/**
 * @name Last Redirect
 *
 * @desc Summary info for last redirect in chain. For use iwht Puppeteer.
 */

 const lastRedirect = (res) => {
 	// Get last redirect from response HTTPRequest
 	const arrOut;
 	if (res.request().redirectChain().length > 0) {
 		const chain = res.request().redirectChain();
 		const chainLength = chain.length;
 		const lr = chain[chain.length - 1];
 		const lrStatusCode = lr._response._status;
 		const lrStatusText = lastRedirect._response._statusText;
 		const lrUrl = lr.url();
 		arrOut = {
 			"count": chainLength,
 			"status": lrStatusCode,
 			"statusText": lrStatusText,
 			"url": lrUrl
 		};
 	} else {
 		// Return array of null values if no redirects.
 		arrOut = {
 			"count": null,
 			"status": null,
 			"statusText": null,
 			"url": null
 		}; 	
 	}
 	return arrOut;
 }

 module.exports = lastRedirect;


