(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(37),s=a.n(i),c=a(107),l=a(21),o=a(10),u=a(42),m=(a(54),a(11)),d=a(12),p=a(14),h=a(13),E=a(15),g=a(110),f=a(106),_=a(108),v=a(109),D=(a(56),a(105)),b=(a(58),a(60),a(40)),w=a.n(b),C="FETCH_DATA",y="FETCH_DETAILS",A="FETCH_SEARCH",S=function(e,t){return{type:C,mode:e,genre:t}},N=function(e){return{type:"FETCH_DATA_SUCCEED",data:e}},R=function(){return{type:"FETCH_DATA_FAILED"}},O=function(e){return{type:"FETCH_DETAILS_SUCCEED",data:e}},B=function(){return{type:"FETCH_DETAILS_FAILED"}},I=function(e){return{type:A,data:e}},T=function(e){return{type:"FETCH_SEARCH_SUCCEED",data:e}},k=function(){return{type:"FETCH_SEARCH_FAILED"}},x=function(e){return{type:"LOAD_TITLE",genre:e}},H=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).searchTerm=function(e){e.preventDefault();var t=document.querySelector(".menu__box__search_box input");a.props.history.replace("/search?query=".concat(t.value)),a.props.onFetchSearch(t.value),a.showNormalView(),t.blur()},a.showNormalView=function(){a.props.toggleMenu(),a.props.onHideDetails(),a.props.goBack()},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.props.menuIsShowing?"menu__box is-showing":"menu__box"},r.a.createElement("img",{src:w.a,className:"tmdb_logo",alt:"TheMovieDatabase logo"}),r.a.createElement("div",{className:"menu__box__search_box"},r.a.createElement("form",{onSubmit:this.searchTerm},r.a.createElement("input",{className:"menu__box__search_input",type:"text",placeholder:"Search..."}),r.a.createElement("button",{className:"menu__box__search_button"},"Search"))),r.a.createElement("ul",{className:"menu__movies_list"},r.a.createElement("span",{className:"menu__list_title"},"Movies"),r.a.createElement("li",null,r.a.createElement(D.a,{to:"/movie/top_rated",onClick:function(){e.props.onFetchData("movie","top_rated"),e.showNormalView()}},"Top Rated")),r.a.createElement("li",null,r.a.createElement(D.a,{to:"/movie/now_playing",onClick:function(){e.props.onFetchData("movie","now_playing"),e.showNormalView()}},"Now Playing")),r.a.createElement("li",null,r.a.createElement(D.a,{to:"/movie/popular",onClick:function(){e.props.onFetchData("movie","popular"),e.showNormalView()}},"Popular"))),r.a.createElement("p",{className:"tmdb_attribution"},"This product uses the TMDb API but is not endorsed or certified by TMDb."))}}]),t}(n.Component),F=Object(v.a)(Object(o.b)(null,function(e){return{onFetchData:function(t,a){return e(S(t,a))},onFetchSearch:function(t){return e(I(t))},onHideDetails:function(){return e({type:"PAGE_GO_BACK"})}}})(H)),j=function(e){return r.a.createElement("div",{className:"Header"},e.menuIsShowing?r.a.createElement("div",{className:"Backdrop"}):null,e.inDetails?r.a.createElement("span",{className:e.inDetails?"Header__goBack icon-angle-left":"Header__goBack icon-angle-left hidden",onClick:function(){e.goBack()}}):r.a.createElement(D.a,{to:"/"},r.a.createElement("span",{className:"icon-home"})),r.a.createElement("p",{className:"Header__title"},e.title),r.a.createElement("div",{className:e.menuIsShowing?"menu__button close-button":"menu__button",onClick:e.toggleMenu},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement(F,{toggleMenu:e.toggleMenu,menuIsShowing:e.menuIsShowing,goBack:e.goBack}))},L=(a(63),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).searchTerm=function(e){e.preventDefault();var t=document.querySelector(".menu__box__search_box input");a.props.history.replace("/search?query=".concat(t.value)),a.props.onFetchSearch(t.value),t.blur()},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("h1",{className:"Home__title"},"The Movies"),r.a.createElement("div",{className:"Home__search_box"},r.a.createElement("form",{onSubmit:this.searchTerm},r.a.createElement("input",{className:"Home__search_input",type:"text",placeholder:"Search..."}),r.a.createElement("button",{className:"Home__search_button"},"Search"))),r.a.createElement("ul",{className:"menu__movies__list"},r.a.createElement("span",{className:"menu__list__title"},"Movies"),r.a.createElement("li",null,r.a.createElement(D.a,{to:"/movie/top_rated"},"Top Rated")),r.a.createElement("li",null,r.a.createElement(D.a,{to:"/movie/now_playing"},"Now Playing")),r.a.createElement("li",null,r.a.createElement(D.a,{to:"/movie/popular"},"Popular"))),r.a.createElement("ul",{className:"menu__tv__list"},r.a.createElement("span",{className:"menu__list__title"},"TV"),r.a.createElement("li",null,r.a.createElement(D.a,{to:"/tv/top_rated"},"Top Rated")),r.a.createElement("li",null,r.a.createElement(D.a,{to:"/tv/on_the_air"},"On Air")),r.a.createElement("li",null,r.a.createElement(D.a,{to:"/tv/popular"},"Popular"))))}}]),t}(n.Component)),M=Object(o.b)(null,function(e){return{onFetchSearch:function(t){return e(I(t))}}})(L),Y=(a(65),a(67),a(69),function(e){for(var t=[],a=e.rate/2,n=0;n<Math.floor(a);n++){var i=r.a.createElement("span",{key:t.length,className:"icon-star"});t.push(i)}if(a%1>=.85){var s=r.a.createElement("span",{key:t.length,className:"icon-star"});t.push(s)}else if(a%1>=.35){var c=r.a.createElement("span",{key:t.length,className:"icon-star-half-o"});t.push(c)}for(;t.length<5;){var l=r.a.createElement("span",{key:t.length,className:"icon-star-o"});t.push(l)}return r.a.createElement("div",null,t,r.a.createElement("span",{className:"rate"},e.rate))}),G=function(e){var t=e.info.title||e.info.name,a=e.info.poster_path||e.info.profile_path;return t.length>14&&(t=t.slice(0,14)+"..."),console.log("Rendering Card.js"),r.a.createElement("div",{className:"Card",onClick:e.showDetails,"data-id":e.info.id},r.a.createElement("img",{className:"Card__Poster",src:"https://image.tmdb.org/t/p/w342"+a,alt:e.info.title||e.info.name}),r.a.createElement("div",{className:"Card__Info"},r.a.createElement("p",{className:"Card__Info__title"},t),r.a.createElement(Y,{rate:e.info.vote_average})))},K=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).searchTerm=function(e){e.preventDefault();var t=document.querySelector(".grid__search_box input");a.props.history.replace("/search?query=".concat(t.value)),a.props.onFetchSearch(t.value),a.props.menuIsShowing&&a.props.toggleMenu(),t.blur()},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldupdate grid"),!1===this.props.dataState.newData&&!0===e.dataState.newData||!0===this.props.dataState.fetchingData&&!1===e.dataState.fetchingData&&"/search"===this.props.location.pathname}},{key:"componentDidMount",value:function(){var e=this.props.match.params.mode,t=this.props.match.params.genre;this.props.onFetchData(e,t)}},{key:"componentDidUpdate",value:function(){var e=document.querySelector(".Grid input");e&&e.focus()}},{key:"render",value:function(){var e=this;console.log("rendering grid");var t=document.querySelector(".Grid"),a=null;if(null===this.props.dataState.data&&"/search"===this.props.location.pathname)t&&(t.style.display="block"),a=r.a.createElement("div",{className:"grid__search_box"},r.a.createElement("form",{onSubmit:this.searchTerm},r.a.createElement("input",{className:"menu__box__search_input",type:"text",placeholder:"Search..."}),r.a.createElement("button",{className:"menu__box__search_button"},"Search")));else if(this.props.dataState.data){var n=this.props.dataState.data;t&&(t.style.display="grid"),a=n.map(function(t,a){var n=t.media_type?t.media_type:e.props.match.params.mode;return r.a.createElement(G,{key:a,info:t,showDetails:function(t){return e.props.showDetails(t,n)}})})}return r.a.createElement("div",{className:"Grid"},a)}}]),t}(n.Component),P=Object(v.a)(Object(o.b)(function(e){return{dataState:e.dataReducer,generalState:e.generalReducer}},function(e){return{onFetchData:function(t,a){return e(S(t,a))},onFetchSearch:function(t){return e(I(t))}}})(K)),z=a(18),U=a.n(z),Z=(a(71),a(73),a(75),function(e){return r.a.createElement("div",{className:"movie-card-info__tags__tag"},e.name.name)}),J=function(e){for(var t=[{id:10759,name:"Action & Adventure"},{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:10762,name:"Kids"},{id:9648,name:"Mystery"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10749,name:"Romance"},{id:10765,name:"Sci-Fi & Fantasy"},{id:878,name:"Science Fiction"},{id:10766,name:"Soap"},{id:10767,name:"Talk"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10768,name:"War & Politics"},{id:10752,name:"War"},{id:37,name:"Western"}],a=[],n=function(n){var i=t.find(function(t){return t.id===e.tags[n].id});i=r.a.createElement(Z,{key:n,name:i}),a.push(i)},i=0;i<e.tags.length;i++)n(i);return r.a.createElement("div",{className:"MCI__tags"},a)},W=function(e){return r.a.createElement("div",{className:"DetailsCard__body"},r.a.createElement("div",{className:"DetailsCard__body__main"},r.a.createElement("h2",{className:"DetailsCard__body__movie_title"},e.data.title),r.a.createElement(Y,{rate:e.data.vote_average}),r.a.createElement("div",{className:"DetailsCard__body__runtime-release"},r.a.createElement("span",{className:"DetailsCard__body__runtime"},r.a.createElement("span",{className:"icon-clock"}),r.a.createElement("span",null,e.data.runtime," min")),r.a.createElement("span",{className:"DetailsCard__body__release"},r.a.createElement("span",{className:"icon-calendar"}),r.a.createElement("span",null,e.data.release_date))),r.a.createElement(J,{tags:e.data.genres})),r.a.createElement("div",{className:"DetailsCard__body__overview"},r.a.createElement("p",{className:"DetailsCard__body__title"},"Overview"),r.a.createElement("p",{className:"DetailsCard__body__overview_p"},e.data.overview)),r.a.createElement("div",{className:"DetailsCard__body__cast"},r.a.createElement("p",{className:"DetailsCard__body__title"},"Cast (",e.cast?e.cast.length:null,")"),r.a.createElement("div",{className:"DetailsCard__body__cast__list"},e.cast)),r.a.createElement("div",{className:"DetailsCard__body__trailer"},r.a.createElement("p",{className:"DetailsCard__body__title"},"Trailer"),e.trailerKey?r.a.createElement("iframe",{className:"iframeTrailer",src:"https://www.youtube-nocookie.com/embed/".concat(e.trailerKey),frameBorder:"0",title:e.data.title+"'s trailer",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):r.a.createElement("div",{className:"iframeTrailer"},"No Trailer available")))},q=(a(77),function(e){return r.a.createElement("div",{className:"DetailsCard__body"},r.a.createElement("div",{className:"DetailsCard__body__main"},r.a.createElement("h2",{className:"DetailsCard__body__movie_title"},e.data.name),r.a.createElement(Y,{rate:e.data.vote_average}),r.a.createElement("div",{className:"DetailsCard__body__runtime-release"},r.a.createElement("span",{className:"DetailsCard__body__runtime"},r.a.createElement("span",{className:"icon-clock"}),r.a.createElement("span",null,e.data.episode_run_time[0]?e.data.episode_run_time[0]:"0"," min")),r.a.createElement("span",{className:"DetailsCard__body__release"},r.a.createElement("span",{className:"icon-calendar"}),r.a.createElement("span",null,e.data.first_air_date))),r.a.createElement(J,{tags:e.data.genres})),r.a.createElement("div",{className:"DetailsCard__body__overview"},r.a.createElement("p",{className:"DetailsCard__body__title"},"Overview"),r.a.createElement("p",{className:"DetailsCard__body__overview_p"},e.data.overview)),r.a.createElement("div",{className:"DetailsCard__body__cast"},r.a.createElement("p",{className:"DetailsCard__body__title"},"Cast (",e.cast.length?e.cast.length:null,")"),r.a.createElement("div",{className:"DetailsCard__body__cast__list"},e.cast)),r.a.createElement("div",{className:"DetailsCard__body__trailer"},r.a.createElement("p",{className:"DetailsCard__body__title"},"Trailer"),e.trailerKey?r.a.createElement("iframe",{className:"iframeTrailer",src:"https://www.youtube-nocookie.com/embed/".concat(e.trailerKey),frameBorder:"0",title:e.data.title+"'s trailer",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):r.a.createElement("div",{className:"iframeTrailer"},"No Trailer available")))}),X=(a(79),function(e){return r.a.createElement("div",{className:"DetailsCard__body"},r.a.createElement("div",{className:"DetailsCard__body__main"},r.a.createElement("h2",{className:"DetailsCard__body__movie_title"},e.data.name)),r.a.createElement("div",{className:"DetailsCard__body__overview"},r.a.createElement("p",{className:"DetailsCard__body__title"},"Biography"),r.a.createElement("p",{className:"DetailsCard__body__overview_p"},e.data.biography)),r.a.createElement("div",{className:"DetailsCard__body__cast"},r.a.createElement("p",{className:"DetailsCard__body__title"},"Known for (",e.cast.length,")"),r.a.createElement("div",{className:"DetailsCard__body__cast__list"},e.cast)))}),V=(a(81),function(e){return r.a.createElement("div",{className:"Cast"},r.a.createElement("img",{className:"Cast__picture",src:"https://image.tmdb.org/t/p/w185"+e.pic,alt:e.name}),r.a.createElement("p",{className:"Cast__name"},e.name))}),Q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).loadDetailsCard=function(e){if(e){var t,n,r,i=document.querySelector(".currentCard img");U.a.measure(function(){t=i.getBoundingClientRect(),n=window.innerWidth,r=n/2/t.width}),U.a.mutate(function(){a.posterBG.style.height=t.height*r+100+"px",i.style.borderBottomLeftRadius="5px",i.style.borderBottomRightRadius="5px",a.detailsCard.style.transform="scale(1)",a.detailsCard.style.opacity="1"})}else U.a.mutate(function(){a.detailsCard.style.transform="scale(0)",a.detailsCard.style.opacity="0"})},a.state={data:null},a.detailsCard=null,a.posterBG=null,a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e){return!1===this.props.dataState.newDetails&&!0===e.dataState.newDetails||(!1===this.props.dataState.fetchingDetails&&!0===e.dataState.fetchingDetails||this.props.generalState.inDetails!==e.generalState.inDetails)}},{key:"componentDidUpdate",value:function(){this.loadDetailsCard(this.props.generalState.inDetails)}},{key:"componentDidMount",value:function(){this.detailsCard=document.querySelector(".DetailsCard"),this.posterBG=document.querySelector(".DetailsCard__posterBG")}},{key:"render",value:function(){console.log("rendering detailsCard");var e=document.querySelector(".DetailsCard__posterBG"),t=null,a=null;if(e&&(this.props.generalState.inDetails&&this.props.dataState.newDetails?e.style.backgroundImage='url("https://image.tmdb.org/t/p/w780'.concat(this.state.data.backdrop_path,'")'):this.props.generalState.inDetails||(e.style.backgroundImage="none")),this.state.data){var n=null;if(this.state.data.credits.cast.length){var i=this.state.data.credits.cast,s=i.length>20?20:i.length;n=[];for(var c=0;c<s;c++)if(i[c].title){var l=r.a.createElement(V,{key:i[c].title+c,pic:i[c].poster_path,name:i[c].title});n.push(l)}else{var o=r.a.createElement(V,{key:i[c].name+c,pic:i[c].profile_path||i[c].poster_path,name:i[c].name});n.push(o)}}switch(this.state.data.videos.results.length&&(a=this.state.data.videos.results[0].key),this.props.generalState.media){case"movie":t=r.a.createElement(W,{data:this.state.data,cast:n,trailerKey:a});break;case"tv":t=r.a.createElement(q,{data:this.state.data,cast:n,trailerKey:a});break;case"person":t=r.a.createElement(X,{data:this.state.data,cast:n});break;default:t=null}}return r.a.createElement("div",{className:"DetailsCard"},r.a.createElement("div",{className:"DetailsCard__posterBG"}),t)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.generalState.inDetails&&e.dataState.newDetails?{data:e.dataState.details}:e.generalState.inDetails?null:{data:null}}}]),t}(n.Component),$=Object(o.b)(function(e){return{generalState:e.generalReducer,dataState:e.dataReducer}})(Q),ee=function(e){var t,a,n,r,i,s;U.a.measure(function(){t=window.innerWidth,a=e.getBoundingClientRect(),n=a.width,r=t/2/n,i=t/4-a.left,s=100*r-a.y}),U.a.mutate(function(){document.querySelector(".Grid").style.overflow="hidden",e.classList.add("transition"),e.style.zIndex="100",e.style.transform="translate(".concat(i,"px, ").concat(s,"px) scale(").concat(r,")")})},te=function(e,t){U.a.mutate(function(){document.querySelector(".Grid").style.overflow="",e.style.borderBottomLeftRadius="",e.style.borderBottomRightRadius="",e.style.transform="",e.style.zIndex="",t.style.transform=""})},ae=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={menuIsShowing:!1},a.toggleMenu=function(){(console.log("toggleMenu()"),a.state.menuIsShowing)?a.props.generalState.inDetails?a.props.history.replace("#details"):a.props.history.push("#"):a.props.history.push("#menu");a.setState(function(e){return{menuIsShowing:!e.menuIsShowing}})},a.showDetails=function(e,t){if(!e.currentTarget.classList.contains("currentCard")){var n=e.currentTarget,r=n.querySelector(".Card__Poster"),i=a.props.dataState;null!==i.details&&Number(n.dataset.id)===i.details.id||a.props.onFetchDetails(t,n.dataset.id),n.classList.add("currentCard"),a.props.history.push("#details"),a.props.onShowDetails(t),ee(r)}},a.hideDetails=function(){var e=document.querySelector(".currentCard");if(e){var t=e.querySelector("img"),n=e.querySelector(".Card__Info");te(t,n),e.classList.remove("currentCard"),a.props.history.push("#"),a.props.onHideDetails()}},a.onHashChange=function(e){if(console.log("onHashChange"),e.oldURL){console.log(e.oldURL);var t=e.oldURL.split("#")[1];"details"===t?a.hideDetails():"menu"===t&&a.toggleMenu()}},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("hashchange",function(t){return e.onHashChange(t)},!1),console.log(this.props)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(j,{title:this.props.generalState.title,menuIsShowing:this.state.menuIsShowing,toggleMenu:this.toggleMenu,goBack:this.hideDetails,inDetails:this.props.generalState.inDetails}),r.a.createElement($,null),r.a.createElement(g.a,null,r.a.createElement(f.a,{path:"/",exact:!0,component:M}),r.a.createElement(f.a,{path:"/:mode/:genre?",render:function(){return r.a.createElement(P,Object.assign({},e.props,{showDetails:function(t,a){return e.showDetails(t,a)},menuIsShowing:e.state.menuIsShowing,toggleMenu:e.toggleMenu}))}}),r.a.createElement(_.a,{to:"/"})))}}]),t}(n.Component),ne=Object(v.a)(Object(o.b)(function(e){return{dataState:e.dataReducer,generalState:e.generalReducer}},function(e){return{onFetchDetails:function(t,a){return e(function(e,t){return{type:y,mode:e,id:t}}(t,a))},onShowDetails:function(t){return e(function(e){return{type:"SHOW_DETAILS",media:e}}(t))},onHideDetails:function(){return e({type:"PAGE_GO_BACK"})}}})(ae));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=a(16),ie=a.n(re),se=a(8),ce=a(27),le=a.n(ce),oe=ie.a.mark(de),ue=ie.a.mark(pe),me=ie.a.mark(he);function de(e){var t;return ie.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,le.a.get("https://api.themoviedb.org/3/".concat(e.mode,"/").concat(e.genre,"?api_key=6095dab7d845691ab95df77d0a908452"));case 3:return t=a.sent,console.log(t.data.results),a.next=7,Object(se.a)(N(t.data.results));case 7:return a.next=9,Object(se.a)(x(e.genre));case 9:a.next=16;break;case 11:return a.prev=11,a.t0=a.catch(0),console.log("Error fetching Data"),a.next=16,Object(se.a)(R());case 16:case"end":return a.stop()}},oe,this,[[0,11]])}function pe(e){var t;return ie.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,le.a.get("https://api.themoviedb.org/3/".concat(e.mode,"/").concat(e.id,"?api_key=6095dab7d845691ab95df77d0a908452&append_to_response=videos,credits"));case 3:return t=a.sent,console.log(t.data),a.next=7,Object(se.a)(O(t.data));case 7:a.next=14;break;case 9:return a.prev=9,a.t0=a.catch(0),console.log("Error fetching Details"),a.next=14,Object(se.a)(B());case 14:case"end":return a.stop()}},ue,this,[[0,9]])}function he(e){var t;return ie.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,le.a.get("https://api.themoviedb.org/3/search/multi?api_key=6095dab7d845691ab95df77d0a908452&query=".concat(e.data,"&include_adult=false"));case 3:return t=a.sent,console.log(t.data),a.next=7,Object(se.a)(T(t.data.results));case 7:return a.next=9,Object(se.a)(x("search"));case 9:a.next=16;break;case 11:return a.prev=11,a.t0=a.catch(0),console.log("Error fetching Search Term"),a.next=16,Object(se.a)(k());case 16:case"end":return a.stop()}},me,this,[[0,11]])}var Ee=ie.a.mark(ge);function ge(){return ie.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.b)(C,de);case 2:return e.next=4,Object(se.b)(y,pe);case 4:return e.next=6,Object(se.b)(A,he);case 6:case"end":return e.stop()}},Ee,this)}var fe=a(43),_e=function(e,t){return Object(fe.a)({},e,t)},ve={data:null,fetchingData:!1,newData:!1,details:null,fetchingDetails:!1,newDetails:!1,error:!1},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return function(e,t){return _e(e,{fetchingData:!0,newData:!1,error:!1})}(e);case"FETCH_DATA_SUCCEED":return function(e,t){var a={data:t.data,fetchingData:!1,newData:!0,error:!1};return _e(e,a)}(e,t);case"FETCH_DATA_FAILED":return function(e){return _e(e,{fetchingData:!1,error:!0})}(e);case y:return function(e,t){return _e(e,{fetchingDetails:!0,newDetails:!1,error:!1})}(e);case"FETCH_DETAILS_SUCCEED":return function(e,t){var a={details:t.data,fetchingDetails:!1,newDetails:!0,error:!1};return _e(e,a)}(e,t);case"FETCH_DETAILS_FAILED":return function(e){return _e(e,{fetchingDetails:!1,error:!0})}(e);case A:return function(e,t){return _e(e,{fetchingData:!0,newData:!1,error:!1})}(e);case"FETCH_SEARCH_SUCCEED":return function(e,t){return _e(e,{data:t.data,fetchingData:!1,newData:!0,error:!1})}(e,t);case"FETCH_SEARCH_FAILED":return function(e){return _e(e,{fetchingData:!1,error:!0})}(e);default:return e}},be={inDetails:!1,media:null,title:"Home"},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_TITLE":return function(e,t){var a=e.title;switch(t.genre){case"now_playing":a="Now Playing";break;case"top_rated":a="Top Rated";break;case"popular":a="Popular";break;case"search":a="Search Results";break;default:a="Home"}return _e(e,{title:a})}(e,t);case"PAGE_GO_BACK":return function(e,t){return _e(e,{inDetails:!1})}(e);case"SHOW_DETAILS":return function(e,t){return _e(e,{inDetails:!0,media:t.media})}(e,t);default:return e}},Ce=l.d,ye=Object(l.c)({dataReducer:De,generalReducer:we}),Ae=Object(u.a)(),Se=Object(l.e)(ye,Ce(Object(l.a)(Ae)));Ae.run(ge);var Ne=r.a.createElement(o.a,{store:Se},r.a.createElement(c.a,{basename:"/The-Movies"},r.a.createElement(ne,null)));s.a.render(Ne,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},40:function(e,t){e.exports="data:image/png;base64,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"},44:function(e,t,a){e.exports=a(104)},54:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){}},[[44,2,1]]]);
//# sourceMappingURL=main.786cf413.chunk.js.map