			var request_url = "https://api.worldweatheronline.com/premium/v1/weather.ashx?key=7171412a7c7a4c83af6125037250212&q=Taraz&tp=24&format=json";
			var request = new XMLHttpRequest();
			request.open("GET", request_url);
			request.responseType = "json";
			request.send();
			
			request.onload = function(){
				var weatherInf = request.response;
				
				var sun_path = 'sun.png';
				var sun_cloud_path = 'sun_cloud.png';
				var thunder_path = 'thunder.png';
				var snow_path = 'snow.png';
				var rain_path = 'rain.png';
				var cloud_path = 'cloud.png';
				var blind_rain_path = 'blind_rain.png';
				var mist = "mist.png";
				var wind = "wind.png";
				
				//Ячейка 1//////////////////////////////////////////////
				
				let date_1 = document.getElementById("date_1");
				let dat = weatherInf.data.weather[0].date;
				let mont = dat.slice(5,7);
				let da = dat.slice(8,10);
				let month;
				
				if(mont == 01){
					month = "янв";
				};
				if(mont == 02){
					month = "фев";
				};
				if (mont ==03){
					month = "мар";
				};
				if(mont == 04){
					month = "апр";
				};
				if(mont == 05){
					month = "май";
				};
				if (mont ==06){
					month = "июня";
				};
				if(mont == 07){
					month = "июля";
				};
				if(mont == 08){
					month = "авг";
				};
				if (mont ==09){
					month = "сен";
				};
				if(mont == 10){
					month = "окт";
				};
				if(mont == 11){
					month = "ноя";
				};
				if (mont ==12){
					month = "дек";
				};
					
				let datka = `${da} ${month}`;
				
				date_1.textContent = datka;
				
				if(da == "01"){
					date_1.style = "font-weight:600";
				};

				var maxtempC_1 = weatherInf.data.weather[0].maxtempC;
				var highT_1 = document.getElementById("highT_1");
				highT_1.textContent = maxtempC_1;
				if(maxtempC_1==0){
					highT_1.textContent = "0";
				}
				if(maxtempC_1>0){
					highT_1.textContent = "+" + maxtempC_1;
				}
				if(maxtempC_1<0){
					highT_1.textContent = maxtempC_1;
				}
				
				var mintempC_1 = weatherInf.data.weather[0].mintempC;
				var lowT_1 = document.getElementById("lowT_1");
				if(mintempC_1==0){
					lowT_1.textContent = "0";
				}
				if(mintempC_1>0){
					lowT_1.textContent = "+" + mintempC_1;
				}
				if(mintempC_1<0){
					lowT_1.textContent = mintempC_1;
				}
				lowT_1.style = "color:grey";
				
				var img_1 = document.getElementById("img_1");
				var vw_1 = weatherInf.data.weather[0]["hourly"][0]["weatherDesc"][0]["value"];
				choose_weather(vw_1);
				function choose_weather(choice){
			if (choice == "Blowing snow" || choice == "Moderate or heavy snow showers" || choice == "Patchy moderate snow" || choice == "Moderate snow" || choice == "Heavy snow" || choice == "Blizzard" || choice == "Light snow" || choice == "Light sleet" || choice == "Light snow showers"){
						img_1.src = snow_path;
					}
					if (choice == "Overcast " || choice == "Cloudy "){
						img_1.src = cloud_path;
					}
					if(choice == "Partly Cloudy "){
						img_1.src = sun_cloud_path;
					}
					if (choice == "Sunny"){
						img_1.src = sun_path;
					}
					if(choice == "Light drizzle" || choice == "Light rain" || choice == "Moderate rain" || choice=="Light freezing rain" || choice == "Patchy rain nearby"){
						img_1.src = rain_path;
					}
					if(choice == "Mist" || choice == "Freezing fog" || choice=="Fog"){
						img_1.src = mist;
					}
				}
				
				function dow_1(day){
					let days_1  = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
					return days_1[day.getDay()];
				}
				
				let d_1 = new Date(weatherInf.data.weather[0].date);
				var dy_1 = dow_1(d_1);
				
				let day_of_w_1 = document.getElementById("day_of_w");
				day_of_w_1.textContent = dy_1;
				if(dy_1=="Сб" || dy_1=="Вс"){
					day_of_w_1.style = "color:red";
				}
				
				let arg_1 = weatherInf.data.weather[0].hourly[0].windspeedKmph;
				let speed_arg_1 = Math.round((arg_1*1000)/3600);
				let speed_1 = document.getElementById("speed_1");
				speed_1.textContent = `${speed_arg_1} м/с`;
				
				
				//Ячейка 2//////////////////////////////////////////////
				
				date_2 = document.getElementById("date_2");
				dat = weatherInf.data.weather[1].date;
				mont = dat.slice(5,7);
				da = dat.slice(8,10);
				
				if(mont == 01){
					month = "янв";
				};
				if(mont == 02){
					month = "фев";
				};
				if (mont ==03){
					month = "мар";
				};
				if(mont == 04){
					month = "апр";
				};
				if(mont == 05){
					month = "май";
				};
				if (mont ==06){
					month = "июня";
				};
				if(mont == 07){
					month = "июля";
				};
				if(mont == 08){
					month = "авг";
				};
				if (mont ==09){
					month = "сен";
				};
				if(mont == 10){
					month = "окт";
				};
				if(mont == 11){
					month = "ноя";
				};
				if (mont ==12){
					month = "дек";
				};
					
				datka = `${da} ${month}`;
					
					
				date_2.textContent = datka;
				
				if(da == "01"){
					date_2.style = "font-weight:600";
				};
				
				var maxtempC_2 = weatherInf.data.weather[1].maxtempC;
				var highT_2 = document.getElementById("highT_2");
				if(maxtempC_2==0){
					highT_2.textContent = "0";
				}
				if(maxtempC_2>0){
					highT_2.textContent = "+" + maxtempC_2;
				}
				if(maxtempC_2<0){
					highT_2.textContent = maxtempC_2;
				}
				
				var mintempC_2 = weatherInf.data.weather[1].mintempC;
				var lowT_2 = document.getElementById("lowT_2");
				if(mintempC_2==0){
					lowT_2.textContent = "0";
				}
				if(mintempC_2>0){
					lowT_2.textContent = "+" + mintempC_2;
				}
				if(mintempC_2<0){
					lowT_2.textContent = mintempC_2;
				}
				lowT_2.style = "color:grey";
				
				
				var img_2 = document.getElementById("img_2");
				var vw_2 = weatherInf.data.weather[1]["hourly"][0]["weatherDesc"][0]["value"];
				choose_weather_2(vw_2);
				function choose_weather_2(choice){
					if (choice == "Blowing snow" ||choice == "Moderate or heavy snow showers" || choice == "Patchy moderate snow" ||choice == "Moderate snow" || choice == "Blizzard" || choice == "Light snow" || choice == "Light sleet" || choice == "Light snow showers" || choice == "Heavy snow" || choice == "Moderate or heavy snow showers" || choice == "Patchy moderate snow"){
						img_2.src = snow_path;
					}
					if (choice == "Overcast " || choice == "Cloudy "){
						img_2.src = cloud_path;
					}
					if(choice == "Partly Cloudy "){
						img_2.src = sun_cloud_path;
					}
					if (choice == "Sunny"){
						img_2.src = sun_path;
					}
					if(choice == "Light drizzle" || choice == "Light rain" || choice == "Moderate rain" ||choice=="Light freezing rain" || choice == "Patchy rain nearby"){
						img_2.src = rain_path;
					}
					if(choice == "Mist" || choice == "Freezing fog"|| choice=="Fog"){
						img_2.src = mist;
					}
				}
		
				function dow_2(day){
					let days_2  = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
					return days_2[day.getDay()];
				}
				
				let d_2 = new Date(weatherInf.data.weather[1].date);
				var dy_2 = dow_2(d_2);
				
				let day_of_w_2 = document.getElementById("day_of_w_2");
				day_of_w_2.textContent = dy_2;
				if(dy_2=="Сб" || dy_2=="Вс"){
					day_of_w_2.style = "color:red";
				}
				
				let arg_2 = weatherInf.data.weather[1].hourly[0].windspeedKmph;
				let speed_arg_2 = Math.round((arg_2*1000)/3600);
				let speed_2 = document.getElementById("speed_2");
				speed_2.textContent = `${speed_arg_2} м/с`;
							
				//Ячейка 3//////////////////////////////////////////////
				
				date_3 = document.getElementById("date_3");
				dat = weatherInf.data.weather[2].date;
				mont = dat.slice(5,7);
				da = dat.slice(8,10);
				
				if(mont == 01){
					month = "янв";
				};
				if(mont == 02){
					month = "фев";
				};
				if (mont ==03){
					month = "мар";
				};
				if(mont == 04){
					month = "апр";
				};
				if(mont == 05){
					month = "май";
				};
				if (mont ==06){
					month = "июня";
				};
				if(mont == 07){
					month = "июля";
				};
				if(mont == 08){
					month = "авг";
				};
				if (mont ==09){
					month = "сен";
				};
				if(mont == 10){
					month = "окт";
				};
				if(mont == 11){
					month = "ноя";
				};
				if (mont ==12){
					month = "дек";
				};
					
				datka = `${da} ${month}`;
				
				date_3.textContent = datka;
				
				if(da == "01"){
					date_3.style = "font-weight:600";
				};
				
				var maxtempC_3 = weatherInf.data.weather[2].maxtempC;
				var highT_3 = document.getElementById("highT_3");
				if(maxtempC_3==0){
					highT_3.textContent = "0";
				}
				if(maxtempC_3>0){
					highT_3.textContent = "+" + maxtempC_3;
				}
				if(maxtempC_3<0){
					highT_3.textContent = maxtempC_3;
				}
				
				var mintempC_3 = weatherInf.data.weather[2].mintempC;
				var lowT_3 = document.getElementById("lowT_3");
				if(mintempC_3==0){
					lowT_3.textContent = "0";
				}
				if(mintempC_3>0){
					lowT_3.textContent = "+" + mintempC_3;
				}
				if(mintempC_3<0){
					lowT_3.textContent = mintempC_3;
				}
				lowT_3.style = "color:grey";
				
				
				var img_3 = document.getElementById("img_3");
				var vw_3 = weatherInf.data.weather[2]["hourly"][0]["weatherDesc"][0]["value"];
				choose_weather_3(vw_3);
				function choose_weather_3(choice){
					if (choice == "Blowing snow" ||choice == "Moderate or heavy snow showers" || choice == "Patchy moderate snow" ||choice == "Moderate snow" || choice == "Blizzard" || choice == "Light snow" || choice == "Light sleet" || choice == "Light snow showers" || choice == "Heavy snow"){
						img_3.src = snow_path;
					}
					if (choice == "Overcast " || choice == "Cloudy "){
						img_3.src = cloud_path;
					}
					if(choice == "Partly Cloudy "){
						img_3.src = sun_cloud_path;
					}
					if (choice == "Sunny"){
						img_3.src = sun_path;
					}
					if(choice == "Light drizzle" || choice == "Light rain" || choice == "Moderate rain" ||choice=="Light freezing rain" || choice == "Patchy rain nearby"){
						img_3.src = rain_path;
					}
					if(choice == "Mist" || choice == "Freezing fog"|| choice=="Fog"){
						img_3.src = mist;
					}
				}
				
				function dow_3(day){
					let days_3  = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
					return days_3[day.getDay()];
				}
				
				let d_3 = new Date(weatherInf.data.weather[2].date);
				var dy_3 = dow_3(d_3);
				
				let day_of_w_3 = document.getElementById("day_of_w_3");
				day_of_w_3.textContent = dy_3;
				if(dy_3=="Сб" || dy_3=="Вс"){
					day_of_w_3.style = "color:red";
				}
				
				let arg_3 = weatherInf.data.weather[2].hourly[0].windspeedKmph;
				let speed_arg_3 = Math.round((arg_3*1000)/3600);
				let speed_3 = document.getElementById("speed_3");
				speed_3.textContent = `${speed_arg_3} м/с`;
							
				//Ячейка 4//////////////////////////////////////////////
				
				date_4 = document.getElementById("date_4");
				dat = weatherInf.data.weather[3].date;
				mont = dat.slice(5,7);
				da = dat.slice(8,10);
				
				if(mont == 01){
					month = "янв";
				};
				if(mont == 02){
					month = "фев";
				};
				if (mont ==03){
					month = "мар";
				};
				if(mont == 04){
					month = "апр";
				};
				if(mont == 05){
					month = "май";
				};
				if (mont ==06){
					month = "июня";
				};
				if(mont == 07){
					month = "июля";
				};
				if(mont == 08){
					month = "авг";
				};
				if (mont ==09){
					month = "сен";
				};
				if(mont == 10){
					month = "окт";
				};
				if(mont == 11){
					month = "ноя";
				};
				if (mont ==12){
					month = "дек";
				};
					
				datka = `${da} ${month}`;
				
				date_4.textContent = datka;
				
				if(da == "01"){
					date_4.style = "font-weight:600";
				};
				
				var maxtempC_4 = weatherInf.data.weather[3].maxtempC;
				var highT_4 = document.getElementById("highT_4");
				if(maxtempC_4==0){
					highT_4.textContent = "0";
				}
				if(maxtempC_4>0){
					highT_4.textContent = "+" + maxtempC_4;
				}
				if(maxtempC_4<0){
					highT_4.textContent = maxtempC_4;
				}
				
				var mintempC_4 = weatherInf.data.weather[3].mintempC;
				var lowT_4 = document.getElementById("lowT_4");
				if(mintempC_4==0){
					lowT_4.textContent = "0";
				}
				if(mintempC_4>0){
					lowT_4.textContent = "+" + mintempC_4;
				}
				if(mintempC_4<0){
					lowT_4.textContent = mintempC_4;
				}
				lowT_4.style = "color:grey";
				
				
				var img_4 = document.getElementById("img_4");
				var vw_4 = weatherInf.data.weather[3]["hourly"][0]["weatherDesc"][0]["value"];
				choose_weather_4(vw_4);
				function choose_weather_4(choice){
					if (choice == "Blowing snow" ||choice == "Moderate or heavy snow showers" || choice == "Patchy moderate snow" ||choice == "Moderate snow" || choice == "Blizzard" || choice == "Light snow" || choice == "Light sleet" || choice == "Light snow showers" || choice == "Heavy snow"){
						img_4.src = snow_path;
					}
					if (choice == "Overcast " || choice == "Cloudy "){
						img_4.src = cloud_path;
					}
					if(choice == "Partly Cloudy "){
						img_4.src = sun_cloud_path;
					}
					if (choice == "Sunny"){
						img_4.src = sun_path;
					}
					if(choice == "Light drizzle" || choice == "Light rain" || choice == "Moderate rain" ||choice=="Light freezing rain" || choice == "Patchy rain nearby"){
						img_4.src = rain_path;
					}
					if(choice == "Mist" || choice == "Freezing fog"|| choice=="Fog"){
						img_4.src = mist;
					}
				}
				
				function dow_4(day){
					let days_4  = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
					return days_4[day.getDay()];
				}
				
				let d_4 = new Date(weatherInf.data.weather[3].date);
				var dy_4 = dow_4(d_4);
				
				let day_of_w_4 = document.getElementById("day_of_w_4");
				day_of_w_4.textContent = dy_4;
				if(dy_4=="Сб" || dy_4=="Вс"){
					day_of_w_4.style = "color:red";
				}
				
				let arg_4 = weatherInf.data.weather[3].hourly[0].windspeedKmph;
				let speed_arg_4 = Math.round((arg_4*1000)/3600);
				let speed_4 = document.getElementById("speed_4");
				speed_4.textContent = `${speed_arg_4} м/с`;
							
				//Ячейка 5//////////////////////////////////////////////
				
				date_5 = document.getElementById("date_5");
				dat = weatherInf.data.weather[4].date;
				mont = dat.slice(5,7);
				da = dat.slice(8,10);
				
				if(mont == 01){
					month = "янв";
				};
				if(mont == 02){
					month = "фев";
				};
				if (mont ==03){
					month = "мар";
				};
				if(mont == 04){
					month = "апр";
				};
				if(mont == 05){
					month = "май";
				};
				if (mont ==06){
					month = "июня";
				};
				if(mont == 07){
					month = "июля";
				};
				if(mont == 08){
					month = "авг";
				};
				if (mont ==09){
					month = "сен";
				};
				if(mont == 10){
					month = "окт";
				};
				if(mont == 11){
					month = "ноя";
				};
				if (mont ==12){
					month = "дек";
				};
					
				datka = `${da} ${month}`;
				
				date_5.textContent = datka;
				
				if(da == "01"){
					date_5.style = "font-weight:600";
				};
				
				var maxtempC_5 = weatherInf.data.weather[4].maxtempC;
				var highT_5 = document.getElementById("highT_5");
				if(maxtempC_5==0){
					highT_5.textContent = "0";
				}
				if(maxtempC_5>0){
					highT_5.textContent = "+" + maxtempC_5;
				}
				if(maxtempC_5<0){
					highT_5.textContent = maxtempC_5;
				}
				
				var mintempC_5 = weatherInf.data.weather[4].mintempC;
				var lowT_5 = document.getElementById("lowT_5");
				if(mintempC_5==0){
					lowT_5.textContent = "0";
				}
				if(mintempC_5>0){
					lowT_5.textContent = "+" + mintempC_5;
				}
				if(mintempC_5<0){
					lowT_5.textContent = mintempC_5;
				}
				lowT_5.style = "color:grey";
				
				var img_5 = document.getElementById("img_5");
				var vw_5 = weatherInf.data.weather[4]["hourly"][0]["weatherDesc"][0]["value"];
				choose_weather_5(vw_5);
				function choose_weather_5(choice){
					if (choice == "Blowing snow" ||choice == "Moderate or heavy snow showers" || choice == "Patchy moderate snow" ||choice == "Moderate snow" || choice == "Heavy snow" || choice == "Blizzard" || choice == "Light snow" || choice == "Light sleet" || choice == "Light snow showers"){
						img_5.src = snow_path;
					}
					if (choice == "Overcast " || choice == "Cloudy "){
						img_5.src = cloud_path;
					}
					if(choice == "Partly Cloudy "){
						img_5.src = sun_cloud_path;
					}
					if (choice == "Sunny"){
						img_5.src = sun_path;
					}
					if(choice == "Light drizzle" || choice == "Light rain" || choice == "Moderate rain" ||choice=="Light freezing rain" || choice == "Patchy rain nearby"){
						img_5.src = rain_path;
					}
					if(choice == "Mist" || choice == "Freezing fog"|| choice=="Fog"){
						img_5.src = mist;
					}
				}
				
				function dow_5(day){
					let days_5  = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
					return days_5[day.getDay()];
				}
				
				let d_5 = new Date(weatherInf.data.weather[4].date);
				var dy_5 = dow_5(d_5);
				
				let day_of_w_5 = document.getElementById("day_of_w_5");
				day_of_w_5.textContent = dy_5;	
				if(dy_5=="Сб" || dy_5=="Вс"){
					day_of_w_5.style = "color:red";
				}
				
				let arg_5 = weatherInf.data.weather[4].hourly[0].windspeedKmph;
				let speed_arg_5 = Math.round((arg_5*1000)/3600);
				let speed_5 = document.getElementById("speed_5");
				speed_5.textContent = `${speed_arg_5} м/с`;
				
				//Ячейка 6//////////////////////////////////////////////	
				
				date_6 = document.getElementById("date_6");
				dat = weatherInf.data.weather[5].date;
				mont = dat.slice(5,7);
				da = dat.slice(8,10);
				
				if(mont == 01){
					month = "янв";
				};
				if(mont == 02){
					month = "фев";
				};
				if (mont ==03){
					month = "мар";
				};
				if(mont == 04){
					month = "апр";
				};
				if(mont == 05){
					month = "май";
				};
				if (mont ==06){
					month = "июня";
				};
				if(mont == 07){
					month = "июля";
				};
				if(mont == 08){
					month = "авг";
				};
				if (mont ==09){
					month = "сен";
				};
				if(mont == 10){
					month = "окт";
				};
				if(mont == 11){
					month = "ноя";
				};
				if (mont ==12){
					month = "дек";
				};
					
				datka = `${da} ${month}`;
				
				date_6.textContent = datka;
				
				if(da == "01"){
					date_6.style = "font-weight:600";
				};
				
				var maxtempC_6 = weatherInf.data.weather[5].maxtempC;
				var highT_6 = document.getElementById("highT_6");
				if(maxtempC_6==0){
					highT_6.textContent = "0";
				}
				if(maxtempC_6>0){
					highT_6.textContent = "+" + maxtempC_6;
				}
				if(maxtempC_6<0){
					highT_6.textContent = maxtempC_6;
				}
				
				var mintempC_6 = weatherInf.data.weather[5].mintempC;
				var lowT_6 = document.getElementById("lowT_6");
				if(mintempC_6==0){
					lowT_6.textContent = "0";
				}
				if(mintempC_6>0){
					lowT_6.textContent = "+" + mintempC_6;
				}
				if(mintempC_6<0){
					lowT_6.textContent = mintempC_6;
				}
				lowT_6.style = "color:grey";
				
				var img_6 = document.getElementById("img_6");
				var vw_6 = weatherInf.data.weather[5]["hourly"][0]["weatherDesc"][0]["value"];
				choose_weather_6(vw_6);
				function choose_weather_6(choice){
					if (choice == "Blowing snow" ||choice == "Moderate or heavy snow showers" || choice == "Patchy moderate snow" ||choice == "Moderate snow" || choice == "Heavy snow" || choice == "Blizzard" || choice == "Light snow" || choice == "Light sleet" || choice == "Light snow showers"){
						img_6.src = snow_path;
					}
					if (choice == "Overcast " || choice == "Cloudy "){
						img_6.src = cloud_path;
					}
					if(choice == "Partly Cloudy "){
						img_6.src = sun_cloud_path;
					}
					if (choice == "Sunny"){
						img_6.src = sun_path;
					}
					if(choice == "Light drizzle" || choice == "Light rain" || choice == "Moderate rain" ||choice=="Light freezing rain" || choice == "Patchy rain nearby"){
						img_6.src = rain_path;
					}
					if(choice == "Mist" || choice == "Freezing fog"|| choice=="Fog"){
						img_6.src = mist;
					}
				}
						
				function dow_6(day){
					let days_6  = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
					return days_6[day.getDay()];
				}
				
				let d_6 = new Date(weatherInf.data.weather[5].date);
				var dy_6 = dow_6(d_6);
				
				let day_of_w_6 = document.getElementById("day_of_w_6");
				day_of_w_6.textContent = dy_6;
				if(dy_6=="Сб" || dy_6=="Вс"){
					day_of_w_6.style = "color:red";
				}
				
				let arg_6 = weatherInf.data.weather[5].hourly[0].windspeedKmph;
				let speed_arg_6 = Math.round((arg_6*1000)/3600);
				let speed_6 = document.getElementById("speed_6");
				speed_6.textContent = `${speed_arg_6} м/с`;
								
				//Ячейка 7//////////////////////////////////////////////
				
				date_7 = document.getElementById("date_7");
				dat = weatherInf.data.weather[6].date;
				mont = dat.slice(5,7);
				da = dat.slice(8,10);
				
				if(mont == 01){
					month = "янв";
				};
				if(mont == 02){
					month = "фев";
				};
				if (mont ==03){
					month = "мар";
				};
				if(mont == 04){
					month = "апр";
				};
				if(mont == 05){
					month = "май";
				};
				if (mont ==06){
					month = "июня";
				};
				if(mont == 07){
					month = "июля";
				};
				if(mont == 08){
					month = "авг";
				};
				if (mont ==09){
					month = "сен";
				};
				if(mont == 10){
					month = "окт";
				};
				if(mont == 11){
					month = "ноя";
				};
				if (mont ==12){
					month = "дек";
				};
					
				datka = `${da} ${month}`;
				
				date_7.textContent = datka;
				
				if(da == "01"){
					date_7.style = "font-weight:600";
				};
				
				var maxtempC_7 = weatherInf.data.weather[6].maxtempC;
				var highT_7 = document.getElementById("highT_7");
				if(maxtempC_7==0){
					highT_7.textContent = "0";
				}
				if(maxtempC_7>0){
					highT_7.textContent = "+" + maxtempC_7;
				}
				if(maxtempC_7<0){
					highT_7.textContent = maxtempC_7;
				}
				
				var mintempC_7 = weatherInf.data.weather[6].mintempC;
				var lowT_7 = document.getElementById("lowT_7");
				if(mintempC_7==0){
					lowT_7.textContent = "0";
				}
				if(mintempC_7>0){
					lowT_7.textContent = "+" + mintempC_7;
				}
				if(mintempC_7<0){
					lowT_7.textContent = mintempC_7;
				}
				lowT_7.style = "color:grey";
				
				
				var img_7 = document.getElementById("img_7");
				var vw_7 = weatherInf.data.weather[6]["hourly"][0]["weatherDesc"][0]["value"];
				choose_weather_7(vw_7);
				function choose_weather_7(choice){
					if (choice == "Blowing snow" ||choice == "Moderate or heavy snow showers" || choice == "Patchy moderate snow" ||choice == "Moderate snow" || choice == "Heavy snow" || choice == "Blizzard" || choice == "Light snow" || choice == "Light sleet" || choice == "Light snow showers"){
						img_7.src = snow_path;
					}
					if (choice == "Overcast " || choice == "Cloudy "){
						img_7.src = cloud_path;
					}
					if(choice == "Partly Cloudy "){
						img_7.src = sun_cloud_path;
					}
					if (choice == "Sunny"){
						img_7.src = sun_path;
					}
					if(choice == "Light drizzle" || choice == "Light rain" || choice == "Moderate rain" ||choice=="Light freezing rain" || choice == "Patchy rain nearby"){
						img_7.src = rain_path;
					}
					if(choice == "Mist" || choice == "Freezing fog"|| choice=="Fog"){
						img_7.src = mist;
					}
				}
				
				function dow_7(day){
					let days_7  = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
					return days_7[day.getDay()];
				}
				
				let d_7 = new Date(weatherInf.data.weather[6].date);
				var dy_7 = dow_7(d_7);
				
				let day_of_w_7 = document.getElementById("day_of_w_7");
				day_of_w_7.textContent = dy_7;
				if(dy_7=="Сб" || dy_7=="Вс"){
					day_of_w_7.style = "color:red";
				}
				
				let arg_7 = weatherInf.data.weather[6].hourly[0].windspeedKmph;
				let speed_arg_7 = Math.round((arg_7*1000)/3600);
				let speed_7 = document.getElementById("speed_7");
				speed_7.textContent = `${speed_arg_7} м/с`;
							
				//Ячейка 8//////////////////////////////////////////////
				
				date_8 = document.getElementById("date_8");
				dat = weatherInf.data.weather[7].date;
				mont = dat.slice(5,7);
				da = dat.slice(8,10);
				
				if(mont == 01){
					month = "янв";
				};
				if(mont == 02){
					month = "фев";
				};
				if (mont ==03){
					month = "мар";
				};
				if(mont == 04){
					month = "апр";
				};
				if(mont == 05){
					month = "май";
				};
				if (mont ==06){
					month = "июня";
				};
				if(mont == 07){
					month = "июля";
				};
				if(mont == 08){
					month = "авг";
				};
				if (mont ==09){
					month = "сен";
				};
				if(mont == 10){
					month = "окт";
				};
				if(mont == 11){
					month = "ноя";
				};
				if (mont ==12){
					month = "дек";
				};
					
				datka = `${da} ${month}`;
				
				date_8.textContent = datka;
				
				if(da == "01"){
					date_8.style = "font-weight:600";
				};
				
				var maxtempC_8 = weatherInf.data.weather[7].maxtempC;
				var highT_8 = document.getElementById("highT_8");
				if(maxtempC_8==0){
					highT_8.textContent = "0";
				}
				if(maxtempC_8>0){
					highT_8.textContent = "+" + maxtempC_8;
				}
				if(maxtempC_8<0){
					highT_8.textContent = maxtempC_8;
				}
				
				var mintempC_8 = weatherInf.data.weather[7].mintempC;
				var lowT_8 = document.getElementById("lowT_8");
				if(mintempC_8==0){
					lowT_8.textContent = "0";
				}
				if(mintempC_8>0){
					lowT_8.textContent = "+" + mintempC_8;
				}
				if(mintempC_8<0){
					lowT_8.textContent = mintempC_8;
				}
				lowT_8.style = "color:grey";
				
				var img_8 = document.getElementById("img_8");
				var vw_8 = weatherInf.data.weather[7]["hourly"][0]["weatherDesc"][0]["value"];
				choose_weather_8(vw_8);
				function choose_weather_8(choice){
					if (choice == "Blowing snow" ||choice == "Moderate or heavy snow showers" || choice == "Patchy moderate snow" ||choice == "Moderate snow" || choice == "Heavy snow" || choice == "Blizzard" || choice == "Light snow" || choice == "Light sleet" || choice == "Light snow showers"){
						img_8.src = snow_path;
					}
					if (choice == "Overcast " || choice == "Cloudy "){
						img_8.src = cloud_path;
					}
					if(choice == "Partly Cloudy "){
						img_8.src = sun_cloud_path;
					}
					if (choice == "Sunny"){
						img_8.src = sun_path;
					}
					if(choice == "Light drizzle" || choice == "Light rain" || choice == "Moderate rain" ||choice=="Light freezing rain" || choice == "Patchy rain nearby"){
						img_8.src = rain_path;
					}
					if(choice == "Mist" || choice == "Freezing fog"|| choice=="Fog"){
						img_8.src = mist;
					}
				}
				
				function dow_8(day){
					let days_8  = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
					return days_8[day.getDay()];
				}
				
				let d_8 = new Date(weatherInf.data.weather[7].date);
				var dy_8 = dow_8(d_8);
				
				let day_of_w_8 = document.getElementById("day_of_w_8");
				day_of_w_8.textContent = dy_8;
				if(dy_8=="Сб" || dy_8=="Вс"){
					day_of_w_8.style = "color:red";
				}
				
				let arg_8 = weatherInf.data.weather[7].hourly[0].windspeedKmph;
				let speed_arg_8 = Math.round((arg_8*1000)/3600);
				let speed_8 = document.getElementById("speed_8");
				speed_8.textContent = `${speed_arg_8} м/с`;
			
							
				//Ячейка 9//////////////////////////////////////////////
				
				date_9 = document.getElementById("date_9");
				dat = weatherInf.data.weather[8].date;
				mont = dat.slice(5,7);
				da = dat.slice(8,10);
				
				if(mont == 01){
					month = "янв";
				};
				if(mont == 02){
					month = "фев";
				};
				if (mont ==03){
					month = "мар";
				};
				if(mont == 04){
					month = "апр";
				};
				if(mont == 05){
					month = "май";
				};
				if (mont ==06){
					month = "июня";
				};
				if(mont == 07){
					month = "июля";
				};
				if(mont == 08){
					month = "авг";
				};
				if (mont ==09){
					month = "сен";
				};
				if(mont == 10){
					month = "окт";
				};
				if(mont == 11){
					month = "ноя";
				};
				if (mont ==12){
					month = "дек";
				};
					
				datka = `${da} ${month}`;
				
				date_9.textContent = datka;
				
				if(da == "01"){
					date_9.style = "font-weight:600";
				};
				
				var maxtempC_9 = weatherInf.data.weather[8].maxtempC;
				var highT_9 = document.getElementById("highT_9");
				if(maxtempC_9==0){
					highT_9.textContent = "0";
				}
				if(maxtempC_9>0){
					highT_9.textContent = "+" + maxtempC_9;
				}
				if(maxtempC_9<0){
					highT_9.textContent = maxtempC_9;
				}
				
				var mintempC_9 = weatherInf.data.weather[8].mintempC;
				var lowT_9 = document.getElementById("lowT_9");
				if(mintempC_9==0){
					lowT_9.textContent = "0";
				}
				if(mintempC_9>0){
					lowT_9.textContent = "+" + mintempC_9;
				}
				if(mintempC_9<0){
					lowT_9.textContent = mintempC_9;
				}
				lowT_9.style = "color:grey";
				
				var img_9 = document.getElementById("img_9");
				var vw_9 = weatherInf.data.weather[8]["hourly"][0]["weatherDesc"][0]["value"];
				choose_weather_9(vw_9);
				function choose_weather_9(choice){
					if (choice == "Blowing snow" ||choice == "Moderate or heavy snow showers" || choice == "Patchy moderate snow" ||choice == "Moderate snow" || choice == "Heavy snow" || choice == "Blizzard" || choice == "Light snow" || choice == "Light sleet" || choice == "Light snow showers"){
						img_9.src = snow_path;
					}
					if (choice == "Overcast " || choice == "Cloudy "){
						img_9.src = cloud_path;
					}
					if(choice == "Partly Cloudy "){
						img_9.src = sun_cloud_path;
					}
					if (choice == "Sunny"){
						img_9.src = sun_path;
					}
					if(choice == "Light drizzle" || choice == "Light rain" || choice == "Moderate rain" ||choice=="Light freezing rain" || choice == "Patchy rain nearby"){
						img_9.src = rain_path;
					}
					if(choice=="Mist" || choice == "Freezing fog"|| choice=="Fog"){
						img_9.src = mist;
					}
				}
				
				function dow_9(day){
					let days_9  = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
					return days_9[day.getDay()];
				}
				
				let d_9 = new Date(weatherInf.data.weather[8].date);
				var dy_9 = dow_9(d_9);
				
				let day_of_w_9 = document.getElementById("day_of_w_9");
				day_of_w_9.textContent = dy_9;
				if(dy_9=="Сб" || dy_9=="Вс"){
					day_of_w_9.style = "color:red";
				}
				
				let arg_9 = weatherInf.data.weather[8].hourly[0].windspeedKmph;
				let speed_arg_9 = Math.round((arg_9*1000)/3600);
				let speed_9 = document.getElementById("speed_9");
				speed_9.textContent = `${speed_arg_9} м/с`;
			
							
				//Ячейка 10//////////////////////////////////////////////
				
				date_10 = document.getElementById("date_10");
				dat = weatherInf.data.weather[9].date;
				mont = dat.slice(5,7);
				da = dat.slice(8,10);
				
				if(mont == 01){
					month = "янв";
				};
				if(mont == 02){
					month = "фев";
				};
				if (mont ==03){
					month = "мар";
				};
				if(mont == 04){
					month = "апр";
				};
				if(mont == 05){
					month = "май";
				};
				if (mont ==06){
					month = "июня";
				};
				if(mont == 07){
					month = "июля";
				};
				if(mont == 08){
					month = "авг";
				};
				if (mont ==09){
					month = "сен";
				};
				if(mont == 10){
					month = "окт";
				};
				if(mont == 11){
					month = "ноя";
				};
				if (mont ==12){
					month = "дек";
				};
					
				datka = `${da} ${month}`;
				
				date_10.textContent = datka;
				
				if(da == "01"){
					date_10.style = "font-weight:600";
				};
				
				var maxtempC_10 = weatherInf.data.weather[9].maxtempC;
				var highT_10 = document.getElementById("highT_10");
				if(maxtempC_10==0){
					highT_10.textContent = "0";
				}
				if(maxtempC_10>0){
					highT_10.textContent = "+" + maxtempC_10;
				}
				if(maxtempC_10<0){
					highT_10.textContent = maxtempC_10;
				}
				
				var mintempC_10 = weatherInf.data.weather[9].mintempC;
				var lowT_10 = document.getElementById("lowT_10");
				if(mintempC_10==0){
					lowT_10.textContent = "0";
				}
				if(mintempC_10>0){
					lowT_10.textContent = "+" + mintempC_10;
				}
				if(mintempC_10<0){
					lowT_10.textContent = mintempC_10;
				}
				lowT_10.style = "color:grey";
				
				var img_10 = document.getElementById("img_10");
				var vw_10 = weatherInf.data.weather[9]["hourly"][0]["weatherDesc"][0]["value"];
				choose_weather_10(vw_10);
				function choose_weather_10(choice){
					if (choice == "Blowing snow" ||choice == "Moderate or heavy snow showers" || choice == "Patchy moderate snow" ||choice == "Moderate snow" || choice == "Heavy snow" || choice == "Blizzard" || choice == "Light snow" || choice == "Light sleet" || choice == "Light snow showers"){
						img_10.src = snow_path;
					}
					if (choice == "Overcast " || choice == "Cloudy "){
						img_10.src = cloud_path;
					}
					if(choice == "Partly Cloudy "){
						img_10.src = sun_cloud_path;
					}
					if (choice == "Sunny"){
						img_10.src = sun_path;
					}
					if(choice == "Light drizzle" || choice == "Light rain" || choice == "Moderate rain" ||choice=="Light freezing rain" || choice == "Patchy rain nearby"){
						img_10.src = rain_path;
					}
					if(choice == "Mist" || choice == "Freezing fog"|| choice=="Fog"){
						img_10.src = mist;
					}
				}
				
				function dow_10(day){
					let days_10  = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
					return days_10[day.getDay()];
				}
				
				let d_10 = new Date(weatherInf.data.weather[9].date);
				var dy_10 = dow_10(d_10);
				
				let day_of_w_10 = document.getElementById("day_of_w_10");
				day_of_w_10.textContent = dy_10;
				if(dy_10=="Сб" || dy_10=="Вс"){
					day_of_w_10.style = "color:red";
				}
				
				let arg_10 = weatherInf.data.weather[9].hourly[0].windspeedKmph;
				let speed_arg_10 = Math.round((arg_10*1000)/3600);
				let speed_10 = document.getElementById("speed_10");
				speed_10.textContent = `${speed_arg_10} м/с`;
			
							
				//Ячейка 11//////////////////////////////////////////////
				
				date_11 = document.getElementById("date_11");
				dat = weatherInf.data.weather[10].date;
				mont = dat.slice(5,7);
				da = dat.slice(8,10);
				
				if(mont == 01){
					month = "янв";
				};
				if(mont == 02){
					month = "фев";
				};
				if (mont ==03){
					month = "мар";
				};
				if(mont == 04){
					month = "апр";
				};
				if(mont == 05){
					month = "май";
				};
				if (mont ==06){
					month = "июня";
				};
				if(mont == 07){
					month = "июля";
				};
				if(mont == 08){
					month = "авг";
				};
				if (mont ==09){
					month = "сен";
				};
				if(mont == 10){
					month = "окт";
				};
				if(mont == 11){
					month = "ноя";
				};
				if (mont ==12){
					month = "дек";
				};
					
				datka = `${da} ${month}`;
				
				date_11.textContent = datka;
				
				if(da == "01"){
					date_11.style = "font-weight:600";
				};
				
				var maxtempC_11 = weatherInf.data.weather[10].maxtempC;
				var highT_11 = document.getElementById("highT_11");
				if(maxtempC_11==0){
					highT_11.textContent = "0";
				}
				if(maxtempC_11>0){
					highT_11.textContent = "+" + maxtempC_11;
				}
				if(maxtempC_11<0){
					highT_11.textContent = maxtempC_11;
				}
				
				var mintempC_11 = weatherInf.data.weather[10].mintempC;
				var lowT_11 = document.getElementById("lowT_11");
				if(mintempC_11==0){
					lowT_11.textContent = "0";
				}
				if(mintempC_11>0){
					lowT_11.textContent = "+" + mintempC_11;
				}
				if(mintempC_11<0){
					lowT_11.textContent = mintempC_11;
				}
				lowT_11.style = "color:grey";
				
				var img_11 = document.getElementById("img_11");
				var vw_11 = weatherInf.data.weather[10]["hourly"][0]["weatherDesc"][0]["value"];
				choose_weather_11(vw_11);
				function choose_weather_11(choice){
					if (choice == "Blowing snow" ||choice == "Moderate or heavy snow showers" || choice == "Patchy moderate snow" || choice == "Moderate snow" || choice == "Heavy snow" || choice == "Blizzard" || choice == "Light snow" || choice == "Light sleet" || choice == "Light snow showers"){
						img_11.src = snow_path;
					}
					if (choice == "Overcast " || choice == "Cloudy "){
						img_11.src = cloud_path;
					}
					if(choice == "Partly Cloudy "){
						img_11.src = sun_cloud_path;
					}
					if (choice == "Sunny"){
						img_11.src = sun_path;
					}
					if(choice == "Light drizzle" || choice == "Light rain" || choice == "Moderate rain" ||choice=="Light freezing rain" || choice == "Patchy rain nearby"){
						img_11.src = rain_path;
					}
					if(choice == "Mist" || choice == "Freezing fog"|| choice=="Fog"){
						img_11.src = mist;
					}
				}
				
				function dow_11(day){
					let days_11  = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
					return days_11[day.getDay()];
				}
				
				let d_11 = new Date(weatherInf.data.weather[10].date);
				var dy_11 = dow_11(d_11);
				
				let day_of_w_11 = document.getElementById("day_of_w_11");
				day_of_w_11.textContent = dy_11;
				if(dy_11=="Сб" || dy_11=="Вс"){
					day_of_w_11.style = "color:red";
				}
				
				let arg_11 = weatherInf.data.weather[10].hourly[0].windspeedKmph;
				let speed_arg_11 = Math.round((arg_11*1000)/3600);
				let speed_11 = document.getElementById("speed_11");
				speed_11.textContent = `${speed_arg_11} м/с`;
							
				//Ячейка 12//////////////////////////////////////////////
				
				date_12 = document.getElementById("date_12");
				dat = weatherInf.data.weather[11].date;
				mont = dat.slice(5,7);
				da = dat.slice(8,10);
				
				if(mont == 01){
					month = "янв";
				};
				if(mont == 02){
					month = "фев";
				};
				if (mont ==03){
					month = "мар";
				};
				if(mont == 04){
					month = "апр";
				};
				if(mont == 05){
					month = "май";
				};
				if (mont ==06){
					month = "июня";
				};
				if(mont == 07){
					month = "июля";
				};
				if(mont == 08){
					month = "авг";
				};
				if (mont ==09){
					month = "сен";
				};
				if(mont == 10){
					month = "окт";
				};
				if(mont == 11){
					month = "ноя";
				};
				if (mont ==12){
					month = "дек";
				};
					
				datka = `${da} ${month}`;
				
				date_12.textContent = datka;
				
				if(da == "01"){
					date_12.style = "font-weight:600";
				};
				
				var maxtempC_12 = weatherInf.data.weather[11].maxtempC;
				var highT_12 = document.getElementById("highT_12");
				if(maxtempC_12==0){
					highT_12.textContent = "0";
				}
				if(maxtempC_12>0){
					highT_12.textContent = "+" + maxtempC_12;
				}
				if(maxtempC_12<0){
					highT_12.textContent = maxtempC_12;
				}
				
				var mintempC_12 = weatherInf.data.weather[11].mintempC;
				var lowT_12 = document.getElementById("lowT_12");
				if(mintempC_12==0){
					lowT_12.textContent = "0";
				}
				if(mintempC_12>0){
					lowT_12.textContent = "+" + mintempC_12;
				}
				if(mintempC_12<0){
					lowT_12.textContent = mintempC_12;
				}
				lowT_12.style = "color:grey";
				
				var img_12 = document.getElementById("img_12");
				var vw_12 = weatherInf.data.weather[11]["hourly"][0]["weatherDesc"][0]["value"];
				choose_weather_12(vw_12);
				function choose_weather_12(choice){
					if (choice == "Blowing snow" ||choice == "Moderate or heavy snow showers" || choice == "Patchy moderate snow" ||choice == "Moderate snow" || choice == "Heavy snow" || choice == "Blizzard" || choice == "Light snow" || choice == "Light sleet" || choice == "Light snow showers"){
						img_12.src = snow_path;
					}
					if (choice == "Overcast " || choice == "Cloudy "){
						img_12.src = cloud_path;
					}
					if(choice == "Partly Cloudy "){
						img_12.src = sun_cloud_path;
					}
					if (choice == "Sunny"){
						img_12.src = sun_path;
					}
					if(choice == "Light drizzle" || choice == "Light rain" || choice == "Moderate rain" ||choice=="Light freezing rain" || choice == "Patchy rain nearby"){
						img_12.src = rain_path;
					}
					if(choice = "Mist" || choice == "Freezing fog"|| choice=="Fog"){
						img_12.src = mist;
					}
				}
				
				function dow_12(day){
					let days_12  = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
					return days_12[day.getDay()];
				}
				
				let d_12 = new Date(weatherInf.data.weather[11].date);
				var dy_12 = dow_12(d_12);
				
				let day_of_w_12 = document.getElementById("day_of_w_12");
				day_of_w_12.textContent = dy_12;
				if(dy_12=="Сб" || dy_12=="Вс"){
					day_of_w_12.style = "color:red";
				}
				
				let arg_12 = weatherInf.data.weather[11].hourly[0].windspeedKmph;
				let speed_arg_12 = Math.round((arg_12*1000)/3600);
				let speed_12 = document.getElementById("speed_12");
				speed_12.textContent = `${speed_arg_12} м/с`;
							
				//Ячейка 13//////////////////////////////////////////////
				
				date_13 = document.getElementById("date_13");
				dat = weatherInf.data.weather[12].date;
				mont = dat.slice(5,7);
				da = dat.slice(8,10);
				
				if(mont == 01){
					month = "янв";
				};
				if(mont == 02){
					month = "фев";
				};
				if (mont ==03){
					month = "мар";
				};
				if(mont == 04){
					month = "апр";
				};
				if(mont == 05){
					month = "май";
				};
				if (mont ==06){
					month = "июня";
				};
				if(mont == 07){
					month = "июля";
				};
				if(mont == 08){
					month = "авг";
				};
				if (mont ==09){
					month = "сен";
				};
				if(mont == 10){
					month = "окт";
				};
				if(mont == 11){
					month = "ноя";
				};
				if (mont ==12){
					month = "дек";
				};
					
				datka = `${da} ${month}`;
				
				date_13.textContent = datka;
				
				if(da == "01"){
					date_13.style = "font-weight:600";
				};
				
				var maxtempC_13 = weatherInf.data.weather[12].maxtempC;
				var highT_13 = document.getElementById("highT_13");
				if(maxtempC_13==0){
					highT_13.textContent = "0";
				}
				if(maxtempC_13>0){
					highT_13.textContent = "+" + maxtempC_13;
				}
				if(maxtempC_13<0){
					highT_13.textContent = maxtempC_13;
				}
				
				var mintempC_13 = weatherInf.data.weather[12].mintempC;
				var lowT_13 = document.getElementById("lowT_13");
				if(mintempC_13==0){
					lowT_13.textContent = "0";
				}
				if(mintempC_13>0){
					lowT_13.textContent = "+" + mintempC_13;
				}
				if(mintempC_13<0){
					lowT_13.textContent = mintempC_13;
				}
				lowT_13.style = "color:grey";
				
				var img_13 = document.getElementById("img_13");
				var vw_13 = weatherInf.data.weather[12]["hourly"][0]["weatherDesc"][0]["value"];
				choose_weather_13(vw_13);
				function choose_weather_13(choice){
					if (choice == "Blowing snow" ||choice == "Moderate or heavy snow showers" || choice == "Patchy moderate snow" ||choice == "Moderate snow" || choice == "Heavy snow" || choice == "Blizzard" || choice == "Light snow" || choice == "Light sleet" || choice == "Light snow showers"){
						img_13.src = snow_path;
					}
					if (choice == "Overcast " || choice == "Cloudy "){
						img_13.src = cloud_path;
					}
					if(choice == "Partly Cloudy "){
						img_13.src = sun_cloud_path;
					}
					if (choice == "Sunny"){
						img_13.src = sun_path;
					}
					if(choice == "Light drizzle" || choice == "Light rain" || choice == "Moderate rain" ||choice=="Light freezing rain" || choice == "Patchy rain nearby"){
						img_13.src = rain_path;
					}
					if(choice = "Mist" || choice == "Freezing fog"|| choice=="Fog"){
						img_13.src = mist;
					}
				}
		
				function dow_13(day){
					let days_13  = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
					return days_13[day.getDay()];
				}
				
				let d_13 = new Date(weatherInf.data.weather[12].date);
				var dy_13 = dow_13(d_13);
				
				let day_of_w_13 = document.getElementById("day_of_w_13");
				day_of_w_13.textContent = dy_13;
				if(dy_13=="Сб" || dy_13=="Вс"){
					day_of_w_13.style = "color:red";
				}
				
				let arg_13 = weatherInf.data.weather[12].hourly[0].windspeedKmph;
				let speed_arg_13 = Math.round((arg_13*1000)/3600);
				let speed_13 = document.getElementById("speed_13");
				speed_13.textContent = `${speed_arg_13} м/с`;
							
				//Ячейка 14//////////////////////////////////////////////
				
				date_14 = document.getElementById("date_14");
				dat = weatherInf.data.weather[13].date;
				mont = dat.slice(5,7);
				da = dat.slice(8,10);
				
				if(mont == 01){
					month = "янв";
				};
				if(mont == 02){
					month = "фев";
				};
				if (mont ==03){
					month = "мар";
				};
				if(mont == 04){
					month = "апр";
				};
				if(mont == 05){
					month = "май";
				};
				if (mont ==06){
					month = "июня";
				};
				if(mont == 07){
					month = "июля";
				};
				if(mont == 08){
					month = "авг";
				};
				if (mont ==09){
					month = "сен";
				};
				if(mont == 10){
					month = "окт";
				};
				if(mont == 11){
					month = "ноя";
				};
				if (mont ==12){
					month = "дек";
				};
					
				datka = `${da} ${month}`;
				
				date_14.textContent = datka;
				
				if(da == "01"){
					date_14.style = "font-weight:600";
				};
				
				var maxtempC_14 = weatherInf.data.weather[13].maxtempC;
				var highT_14 = document.getElementById("highT_14");
				if(maxtempC_14==0){
					highT_14.textContent = "0";
				}
				if(maxtempC_14>0){
					highT_14.textContent = "+" + maxtempC_14;
				}
				if(maxtempC_14<0){
					highT_14.textContent = maxtempC_14;
				}
				
				var mintempC_14 = weatherInf.data.weather[13].mintempC;
				var lowT_14 = document.getElementById("lowT_14");
				if(mintempC_14==0){
					lowT_14.textContent = "0";
				}
				if(mintempC_14>0){
					lowT_14.textContent = "+" + mintempC_14;
				}
				if(mintempC_14<0){
					lowT_14.textContent = mintempC_14;
				}
				lowT_14.style = "color:grey";
				
				var img_14 = document.getElementById("img_14");
				var vw_14 = weatherInf.data.weather[13]["hourly"][0]["weatherDesc"][0]["value"];
				choose_weather_14(vw_14);
				function choose_weather_14(choice){
					if (choice == "Blowing snow" ||choice == "Moderate or heavy snow showers" || choice == "Patchy moderate snow" ||choice == "Moderate snow" || choice == "Heavy snow" || choice == "Blizzard" || choice == "Light snow" || choice == "Light sleet" || choice == "Light snow showers"){
						img_14.src = snow_path;
					}
					if (choice == "Overcast " || choice == "Cloudy "){
						img_14.src = cloud_path;
					}
					if(choice == "Partly Cloudy "){
						img_14.src = sun_cloud_path;
					}
					if (choice == "Sunny"){
						img_14.src = sun_path;
					}
					if(choice == "Light drizzle" || choice == "Light rain" || choice == "Moderate rain" ||choice=="Light freezing rain" || choice == "Patchy rain nearby"){
						img_14.src = rain_path;
					}
					if(choice == "Mist" || choice == "Freezing fog"|| choice=="Fog"){
						img_14.src = mist;
					}
				}
				
				function dow_14(day){
					let days_14 = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
					return days_14[day.getDay()];
				}
				
				let d_14 = new Date(weatherInf.data.weather[13].date);
				var dy_14 = dow_14(d_14);
				
				let day_of_w_14 = document.getElementById("day_of_w_14");
				day_of_w_14.textContent = dy_14;
				if(dy_14=="Сб" || dy_14=="Вс"){
					day_of_w_14.style = "color:red";
				}
				
				let arg_14 = weatherInf.data.weather[13].hourly[0].windspeedKmph;
				let speed_arg_14 = Math.round((arg_14*1000)/3600);
				let speed_14 = document.getElementById("speed_14");
				speed_14.textContent = `${speed_arg_14} м/с`;
			}