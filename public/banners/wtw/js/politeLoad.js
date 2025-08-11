var loadAssets = function() {
var container_dc = document.getElementById("container_dc");
					
					//messages div
					var messages = document.createElement("div");
					messages.setAttribute("id", "messages");
					container_dc.appendChild(messages);
					
					var wtw = document.createElement("div");
					wtw.setAttribute("id", "wtw");
					messages.appendChild(wtw);
					
					var allFours = document.createElement("div");
					allFours.setAttribute("id", "allFours");
					messages.appendChild(allFours);
					//End messages/
					
					//Plinth div
					var plinth = document.createElement("div");
					plinth.setAttribute("id", "plinth");
					container_dc.appendChild(plinth);
					
					var findOutCTA = document.createElement("div");
					findOutCTA.setAttribute("id", "findOutCTA");
					plinth.appendChild(findOutCTA);
					

					var arrow_btn = document.createElement("div");
					arrow_btn.setAttribute("id", "arrow_btn");
					findOutCTA.appendChild(arrow_btn);
					//End plinth/
					
					var arrow = document.createElement("div");
					arrow.setAttribute("id", "arrow");
					container_dc.appendChild(arrow);
					
					var endFrame = document.createElement("div");
					endFrame.setAttribute("id", "endFrame");
					container_dc.appendChild(endFrame);
					
					var ad_container = document.createElement("div");
					ad_container.setAttribute("id", "ad_container");
					container_dc.appendChild(ad_container);
					
					var road3 = document.createElement("div");
					road3.setAttribute("id", "road3");
					ad_container.appendChild(road3);

					var road2 = document.createElement("div");
					road2.setAttribute("id", "road2");
					ad_container.appendChild(road2);

					var road1 = document.createElement("div");
					road1.setAttribute("id", "road1");
					ad_container.appendChild(road1);

					var dogSprite = document.createElement("div");
					dogSprite.setAttribute("id", "dogSprite");
					ad_container.appendChild(dogSprite);

					var car = document.createElement("div");
					car.setAttribute("id", "car");
					ad_container.appendChild(car);
}