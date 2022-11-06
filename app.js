const music = new Audio('Tamil audio/1.mp3');
//music.play();


  



  
let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_songs=document.getElementsByClassName('pop_songs')[0];


pop_song_right.addEventListener('click', () => {
    pop_songs.scrollLeft+=500;
});

pop_song_left.addEventListener('click', () => {
    pop_songs.scrollLeft-=500;
});

let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let item=document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', () => {
    item.scrollLeft+=400;
});

pop_art_left.addEventListener('click', () => {
    item.scrollLeft-=400;
});

const songs=[
{
    id:1,
    songName:`Vaseegara <br>
    <div class="subtitle"> Bombay Jayashri</div>`,
    poster:"images/1.jpeg"
},

{
    id:2,
    songName:` Venmathiye <br>
    <div class="subtitle">Roopkumar Rathod and Tippu
    </div>`,
    poster:"images/2.jpeg"
},

{
    id:3,
    songName:`Yaar indha saalai oram <br>
    <div class="subtitle"> Vijay Prakash, G. V. Prakash Kumar</div>`,
    poster:"images/3.jpeg"
},

{
    id:4,
    songName:`Yathe Yathe <br>
    <div class="subtitle"> G. V. Prakash Kumar</div>`,
    poster:"images/4.jpeg"
},

{
    id:5,
    songName:`Pogadhey Pogadhey
    
     <br>
    <div class="subtitle">Yuvan Shankar Raja</div>`,
    poster:"images/5.jpeg"
},

{
    id:6,
    songName:`Pirai Thedum
     <br>
    <div class="subtitle">G. V. Prakash Kumar and Saindhavi</div>`,
    poster:"images/6.jpeg"
},

{
    id:7,
    songName:`Pookal Pookum (Pookkal Pookkum)
    
     <br>
    <div class="subtitle">Andrea Jeremiah, Roopkumar Rathod, Harini, G. V. Prakash Kumar</div>`,
    poster:"images/7.jpeg"
},

{
    id:8,
    songName:`Snehithane Snehithane
     <br>
    <div class="subtitle"> Sadhana Sargam and Srinivas</div>`,
    poster:"images/8.jpeg"
},

{
    id:9,
    songName:`Sol Sol <br>
    <div class="subtitle"> Vijay Prakash, G. V. Prakash Kumar</div>`,
    poster:"images/9.jpeg"
},

{
    id:10,
    songName:`Thenmozhi <br>
    <div class="subtitle">Anirudh Ravichander, Dhanush, and Santhosh Narayanan
    </div>`,
    poster:"images/10.jpeg"
},

{
    id:11,
    songName:`Un vizhigalil <br>
    <div class="subtitle">Harini</div>`,
    poster:"images/11.jpeg"
},

{
    id:12,
    songName:`Usure poguthe <br>
    <div class="subtitle"> Karthik, Mohammed Irfan</div>`,
    poster:"images/12.jpeg"
},

{
    id:13,
    songName:` Kanja Poovu Kannala <br>
    <div class="subtitle">Sid Sriram and Yuvan Shankar Raja

    </div>`,
    poster:"images/13.jpeg"
},
{
    id:14,
    songName:`Loosu Penne <br>
    <div class="subtitle"> Premgi Amaren, and Silambarasan TR
    </div>`,
    poster:"images/14.jpeg"
},

{
    id:15,
    songName:`Mallipoo <br>
    <div class="subtitle"> A. R. Rahman and Madhushree
    </div>`,
    poster:"images/15.jpeg"
},

{
    id:16,
    songName:`Mayakkama Kalakkama
    
     <br>
    <div class="subtitle"> Anirudh Ravichander and Dhanush
    </div>`,
    poster:"images/16.jpeg"
},

{
    id:17,
    songName:`Pirai Thedum (music)
     <br>
    <div class="subtitle">G. V. Prakash Kumar and Saindhavi</div>`,
    poster:"images/17.jpeg"
},

{
    id:18,
    songName:`Megham Karukatha
    
     <br>
    <div class="subtitle">Anirudh Ravichander and Dhanush
    </div>`,
    poster:"images/18.jpeg"
},

{
    id:19,
    songName:`otha sollala
     <br>
    <div class="subtitle"> G.V. Prakash Kumar</div>`,
    poster:"images/19.jpeg"
},

{
    id:20,
    songName:` Oru Naalil <br>
    <div class="subtitle"> Yuvan Shankar Raja</div>`,
    poster:"images/20.jpeg"
},

{id:21,
    songName:`kambathu ponnu <br>
    <div class="subtitle">Yuvan Shankar Raja
    </div>`,
    poster:"images/21.jpeg"
},
{
    id:22,
    songName:`Kaattu Sirukki <br>
    <div class="subtitle">Anuradha Sriram and Shankar Mahadevan</div>`,
    poster:"images/22.jpeg"
},
{
    id:23,
    songName:`Kadhal En Kadhal<br>
    <div class="subtitle"> G. V. Prakash Kumar, and Selvaraghavan
    </div>`,
    poster:"images/23.jpeg"
},
{
    id:24,
    songName:`Idhu Varai <br>
    <div class="subtitle"> Yuvan Shankar Raja
    </div>`,
    poster:"images/24.jpeg"
},
{
    id:25,
    songName:`June ponal<br>
    <div class="subtitle"> Harris Jayaraj</div>`,
    poster:"images/25.jpeg"
},
{
    id:26,
    songName:`Innum Konjam Naeram<br>
    <div class="subtitle"> A. R. Rahman, Shweta Mohan, and Vijay Prakash
    </div>`,
    poster:"images/26.jpeg"
},
{
    id:27,
    songName:`Enthaara Enthaara <br>
    <div class="subtitle"> M. Ghibran</div>`,
    poster:"images/27.jpeg"
},
{
    id:28,
    songName:`Enna solla pogirai  <br>
    <div class="subtitle"> Shankar Mahadevan</div>`,
    poster:"images/28.jpeg"
},
{
    id:29,
    songName:`En Kadhal Solla
    <br>
    <div class="subtitle"> Tanvi Shah and Yuvan Shankar Raja</div>`,
    poster:"images/29.jpeg"
},
{
    id:30,
    songName:`Anbe Anbe <br>
    <div class="subtitle"> G. V. Prakash Kumar</div>`,
    poster:"images/30.jpeg"
},
{
    id:31,
    songName:`Adiye <br>
    <div class="subtitle"> Dhibu Ninan Thomas and Kapil Kapilan
    </div>`,
    poster:"images/31.jpeg"
},

]


  
let masterPlay=document.getElementById('masterPlay');

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
        
    }
});

const makeAllPlays=()=>{
    Array.from(document.querySelectorAll('.play')).forEach((el)=>{
        el.classList.add('bi-play-fill');
        el.classList.remove('bi-pause-fill');
    })
}
const makeAllBackground=()=>{
    Array.from(document.getElementsByClassName('song_list')).forEach((el)=>{
        el.style.background='rgb(105, 105, 105, .0)';
    })
}

let index=0;
let poster_play=document.getElementById('poster_play');
let title=document.getElementById('title');
let songl=document.querySelectorAll('song_list');
Array.from(document.getElementsByClassName('play')).forEach((e)=>{
      e.addEventListener('click',(el) => {
        index=el.target.id;
      // console.log(index);
      music.src=`Tamil audio/${index}.mp3`;
      poster_play.src=`images/${index}.jpeg`;
      music.play();
      masterPlay.classList.remove('bi-play-fill');
      masterPlay.classList.add('bi-pause-fill');

      let songTitles=songs.filter((els) => {
        return els.id==index;
      })

      songTitles.forEach(elss => {
        let{songName} = elss;
         title.innerHTML = songName;
         //poster_play.src=poster;
      })
     makeAllBackground()
     makeAllPlays()
   //   Array.from(document.getElementsByClassName('song_list')).forEach((mod) => {e.style.background="rgb(105, 105, 105, .1)"
    //  songl.style.background="rgb(105, 105, 105, .1)"

      e.classList.remove('bi-play-fill')
    e.classList.add('bi-pause-fill')
  //  })
      })
})




       



  let start_time =document.getElementById('start_time');
  let end_time =document.getElementById('end_time');
  let seek =document.getElementById('seek');
  let bar1 =document.getElementById('bar1');
  let dot =document.getElementsByClassName('dot')[0];
  
  music.addEventListener('timeupdate',()=>{
      let music_curr=music.currentTime;
      let music_dur=music.duration;
     //console.log(music_curr);
  
     let min1=Math.floor(music_dur/60);
     let sec1=Math.floor(music_dur%60);
     if (sec1<10) {
      sec1=`0${sec1}`;
     }
     end_time.innerText=`${min1}:${sec1}`;
  
     let min2=Math.floor(music_curr /60);
     let sec2=Math.floor(music_curr %60);
     if (sec2<10) {
      sec2=`0${sec2}`;
     }
     start_time.innerText=`${min2}:${sec2}`;
  
      let progressBar=parseInt((music_curr/music_dur)*100);
      seek.value=progressBar;
      //console.log(seek.value);
      let seekbar=seek.value;
      bar1.style.width=`${seekbar}%`;
      dot.style.left=`${seekbar}%`;
  
  });
   
  seek.addEventListener('change',()=>{
      music.currentTime=seek.value*music.duration/100;
  });
  
  let vol_icon =document.getElementById('vol_icon');
  let vol=document.getElementById('vol');
  let vol_bar=document.getElementsByClassName('vol_bar')[0];
  let vol_dot=document.getElementById('vol_dot');
  
  vol.addEventListener('change',()=>{
      if (vol.value==0) {
          vol_icon.classList.remove('bi-volume-up-fill');
          vol_icon.classList.remove('bi-volume-down-fill');
          vol_icon.classList.add('bi-volume-off-fill');
      }if (vol.value>0) {
          vol_icon.classList.remove('bi-volume-up-fill');
          vol_icon.classList.add('bi-volume-down-fill');
          vol_icon.classList.remove('bi-volume-off-fill');
      }
      if (vol.value>50) {
          vol_icon.classList.add('bi-volume-up-fill');
          vol_icon.classList.remove('bi-volume-down-fill');
          vol_icon.classList.remove('bi-volume-off-fill');
      }
      let vol_a=vol.value;
      vol_bar.style.width=`${vol_a}%`;
      vol_dot.style.left=`${vol_a}%`;
      music.volume=vol_a/100;
  });
  
  let back=document.getElementById('back');
  let next=document.getElementById('next');
  
  back.addEventListener('click',()=>{
      index-=1;
      if (index<1) {
          index=Array.from(document.getElementsByClassName('song_list')).length;
          
      }

      music.src=`Tamil audio/${index}.mp3`;
      poster_play.src=`images/${index}.jpeg`
      music.play();
    //  masterPlay.classList.remove('bi-play-fill');
//masterPlay.classList.add('bi-pause-fill');

      let songTitles=songs.filter((els)=>{
        return els.id==index;
      });

      songTitles.forEach(elss=>{
        let{songName,poster}=elss;
         title.innerHTML=songName;
         //poster_play.src=poster;
      });
      makeAllBackground();
     Array.from(document.getElementsByClassName(song_list))[index-1].style.background="rgb(105, 105, 105, .1)";
      makeAllPlays();
      e.target.classList.remove('bi-play-fill');
      e.target.classList.add('bi-pause-fill');
      //copy and paste   
  })
  
  next.addEventListener('click',()=>{
      index++;
      if (index >Array.from(document.getElementsByClassName('song_list')).length) {
          index=1;
      }

      music.src=`Tamil audio/${index}.mp3`;
      poster_play.src=`images/${index}.jpeg`
      music.play();
     // masterPlay.classList.remove('bi-play-fill');
      //masterPlay.classList.add('bi-pause-fill');

      let songTitles=songs.filter((els)=>{
        return els.id==index;
      });

      songTitles.forEach(elss=>{
        let{songName,poster}=elss;
         title.innerHTML=songName;
         //poster_play.src=poster;
      });
     
      makeAllBackground();
     Array.from(document.getElementsByClassName(song_list))[index-1].style.background="rgb(105, 105, 105, .1)";
      makeAllPlays();
      e.target.classList.remove('bi-play-fill');
      e.target.classList.add('bi-pause-fill');
      //copy and paste
  });



  Array.from(document.getElementsByClassName('song_list')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
  });
