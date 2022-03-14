<template>
  <div class="detail-main-div" >
    {{user?.login}}
    <div class="card">
      <div class="card-header">
        <div>
          <img
            :src="`https://avatars.githubusercontent.com/u/${user.id}?v=4`"
            alt="profile"
            :class="isClickProfileImage ? 'clicked-image' : 'image'"
            @Click="handleClickProfileImage"
          />
          <!-- <div style={isClickProfileImage?
              {
                marginLeft: '10px',
                transform: 'translate(165px,0px)',
                transitionDuration: '1s',
              }:{
                marginLeft: '10px',
                transform: 'translate(0px,0px)',
                transitionDuration: '1s',
              }
            }> -->
            <!-- <Typography>
              {`${user.login}   ${user.name?'/ '+ user.name:''}`}
            </Typography>
            <Typography color='gray' >
              {new Date(user.created_at).toLocaleDateString()}
            </Typography> -->
          </div>
        </div>
        <div>
          <!-- <IconButton aria-label="star" onClick={()=>window.open(user.html_url+'?tab=stars')}>
            <StarBorderIcon />
          </IconButton>
          <IconButton aria-label="following" onClick={()=>window.open(user.html_url+'?tab=followers')}>
            <PeopleAltIcon />
          </IconButton> -->
        </div>
      <!-- <CardContent sx={isClickProfileImage
        ?{
          alignItems: 'center',
          transform: 'translate(220px,0px)',
          transitionDuration: '1s',
        }:{
          alignItems: 'center',
          transform: 'translate(0px,0px)',
          transitionDuration: '1s',
      }}> -->
        <!-- <IconButton aria-label="add to favorites" size='small' disabled >
          {/* <FavoriteIcon /> */}
          <EmailIcon fontSize='small'/> : {user.email?user.email:'x'}
        </IconButton>
        <br />
        <IconButton aria-label="share" size='small' disabled >
          <LocationOnIcon fontSize='small'/> : {user.location?user.location:'x'}
        </IconButton>
        <br />
        <IconButton aria-label="share" size='small' disabled >
          <ApartmentIcon fontSize='small'/> : {user.company?user.company:'x'}
        </IconButton> -->
      <!-- </CardContent>
      <CardMedia
        sx={{width:'95%', padding: '10px'}}
        component="img"
        image={`https://ghchart.rshah.org/${user.login}`}
        alt="commit"
      /> -->
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { User } from '../../lib/type';
const {user} = defineProps<{user: User}>()
const {isClickProfileImage, handleClickProfileImage} = useProfile()

function useProfile() {
  const isClickProfileImage = ref<Boolean>(false)
  function handleClickProfileImage() {
    isClickProfileImage.value = !isClickProfileImage.value
  }
  return {isClickProfileImage, handleClickProfileImage}
}


</script>
<style lang="scss" scoped>

.detail-main-div {
  height: 300px;
}
.clicked-image {
  height: 50px;
  width: 50px;
  border-radius: 1px;
  transform: scale(4, 4) translate(40%, 15px);
  transition-property: all;
  transition-duration: 1s;
  z-index: 1,
}
.image {
  height: 50px;
  width: 50px;
  border-radius: 50px;
  transform: scale(4, 4), translate(50px, 50px);
  transition-property: all;
  transition-duration: 1s;
}
</style>