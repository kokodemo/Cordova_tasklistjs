/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

document.addEventListener('deviceready', onDeviceReady, false);

const ElementTask = "tasks";


function refresh_view(tasks){
	$("li").remove();
	var cont = 0;
	for(const item of tasks){
		$('ul').append("<li pos='"+cont+"'class='ui-li-has-alt ui-last-child'><a class='ui-btn' href='#'>"+item+"<button class='delete'>Elimina</button></a></li>");
		cont++;
	}
	$(".delete").click(function() {
		sup = $(this).parent().attr('pos');
		delet = JSON.parse(localStorage.getItem(ElementTask));
		delet.splice(sup,1);
		localStorage.setItem(ElementTask,JSON.stringify(delet))
		refresh_view(delet);
	});
}

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    if(!localStorage.getItem("tasks")){
    	localStorage.setItem("tasks", JSON.stringify([]));
    }
    
	$("#input").click(function() {
        var text = $('#newtask').val();
        var tasks = JSON.parse(localStorage.getItem(ElementTask));
		tasks.push(text);
		localStorage.setItem(ElementTask,JSON.stringify(tasks));
		refresh_view(tasks);
    });

	var manage = JSON.parse(localStorage.getItem(ElementTask));
	refresh_view(manage);

}