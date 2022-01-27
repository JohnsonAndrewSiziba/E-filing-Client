<template class="bootstrap-iso">
  <div class="file-item" @dblclick="getDownloadLink()" :style="hide">
    <div v-if="$route.name !== 'Shared' && $route.name !== 'Trashed'" class="d-flex flex-row justify-content-between btn-group" style="padding-left: 5px; padding-right: 5px;">
      <router-link :to="'/files/share/' + file.id + '/' + file.name">
        <button class="btn btn-default btn-sm rounded-pill icon-btn borderless">
          <i class="fas fa-share-alt-square" style="color:#999494;"></i>
        </button>
      </router-link>
      <button class="btn btn-default btn-sm rounded-pill icon-btn borderless" @click="star()">
        <i :class="star_icon" style="color:#999494;"></i>
      </button>
      <button class="btn btn-default btn-sm rounded-pill icon-btn borderless" @click="deleteFile()">
        <i class="fas fa-trash-alt" style="color:#999494;"></i>
      </button>
    </div>

    <FileIcon :is_folder="file.is_folder" :type="file.file_type"></FileIcon>
    <a href="javascript:void(0)" class="file-item-name px-1">
      {{ file.name }}
    </a>
    <span v-if="file.user">
      <small class="text-secondary" style="font-size: 11px">{{ file.user.name }}</small>
    </span>

  </div>
</template>

<script>
import axios from "axios";
import API_HOME from "@/variables/apiHome";
import FileIcon from "@/components/Files/FileIcon";

export default {
  name: "FileItem",
  components: {FileIcon},
  props: ['file'],
  data(){
    return {
      star_icon: "",
      hide: ""
    }
  },
  created() {
    if (this.file.starred){
        this.star_icon = "fas fa-star";
    }
    else {
        this.star_icon = "far fa-star";
    }
  },
  methods: {
    deleteFile(){
      const answer = confirm("This action cannot be reversed. Please confirm deletion.");
      if(! answer) return;
      axios.post(API_HOME +'api/file_delete', {'id': this.file.id}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('e_files_sesame')}`
        }
      })
      .then(response => {
        if (response.data){
          this.hide = "display: none";
        }
        else {
          alert("An error occurred!")
        }
      })
    },
    star(){
      axios.post(API_HOME +'api/file_star/', {'id': this.file.id}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('e_files_sesame')}`
        }
      })
      .then(response => {
        if (response.data){
          if (this.file.starred){
            this.star_icon = "far fa-star";
          }
          else {
            this.star_icon = "fas fa-star";
          }
        }
        else {
          alert("An error occurred!")
        }
      })
    },
    getDownloadLink(){
      axios.get(API_HOME +'api/files/' + this.file.id, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('e_files_sesame')}`
        }
        })
          .then(response => {
            const url = response.data;
            const a = document.createElement('a')
            a.href = url
            a.target="_blank"
            a.download = url.split('/').pop()
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
          })
          .catch(function () {
            alert("You are not authorised to download this file.");
          });
    },
    getFileSize(bytes, decimals = 2){
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    },
  }
}
</script>

<style scoped>



body{margin-top:20px;}
.file-manager-actions {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.file-manager-actions > * {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.file-manager-container {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.file-item {
  position: relative;
  z-index: 1;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  border: 1px solid #eee;
  cursor: pointer;
}
.file-item:hover,
.file-item.focused {
  border-color: rgba(0, 0, 0, 0.05);
}
.file-item.focused {
  z-index: 2;
}
.file-item * {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  text-decoration:none;
}
.dark-style .file-item:hover,
.dark-style .file-item.focused {
  border-color: rgba(255, 255, 255, 0.2);
}
.file-item-checkbox {
  margin: 0 !important;
}
.file-item-select-bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}
.file-item-img {
  background-color: transparent;
  background-position: center center;
  background-size: cover;
}
.file-item-name {
  display: block;
  overflow: hidden;
}
.file-manager-col-view .file-item {
  margin: 0 0.25rem 0.25rem 0;
  padding: 1.25rem 0 1rem 0;
  width: 9rem;
  text-align: center;
}
[dir="rtl"] .file-manager-col-view .file-item {
  margin-right: 0;
  margin-left: 0.25rem;
}
.file-manager-col-view .file-item-img,
.file-manager-col-view .file-item-icon {
  display: block;
  margin: 0 auto 0.75rem auto;
  width: 4rem;
  height: 4rem;
  font-size: 2.5rem;
  line-height: 4rem;
}
.file-manager-col-view .file-item-level-up {
  font-size: 1.5rem;
}
.file-manager-col-view .file-item-checkbox,
.file-manager-col-view .file-item-actions {
  position: absolute;
  top: 6px;
}
.file-manager-col-view .file-item-checkbox {
  left: 6px;
}
[dir="rtl"] .file-manager-col-view .file-item-checkbox {
  right: 6px;
  left: auto;
}
.file-manager-col-view .file-item-actions {
  right: 6px;
}
[dir="rtl"] .file-manager-col-view .file-item-actions {
  right: auto;
  left: 6px;
}
.file-manager-col-view .file-item-name {
  width: 100%;
}
.file-manager-col-view .file-manager-row-header,
.file-manager-col-view .file-item-changed {
  display: none;
}
.file-manager-row-view .file-manager-row-header,
.file-manager-row-view .file-item {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 0 0.125rem 0;
  padding: 0.25rem 3rem 0.25rem 2.25em;
  width: 100%;
}
[dir="rtl"] .file-manager-row-view .file-manager-row-header,
[dir="rtl"] .file-manager-row-view .file-item {
  padding-right: 2.25em;
  padding-left: 3rem;
}
.file-manager-row-view .file-item-img,
.file-manager-row-view .file-item-icon {
  display: block;
  margin: 0 1rem;
  width: 2rem;
  height: 2rem;
  text-align: center;
  font-size: 1.25rem;
  line-height: 2rem;
}
.file-manager-row-view .file-item-level-up {
  font-size: 1rem;
}
.file-manager-row-view .file-item-checkbox,
.file-manager-row-view .file-item-actions {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.file-manager-row-view .file-item-checkbox {
  left: 10px;
}
[dir="rtl"] .file-manager-row-view .file-item-checkbox {
  right: 10px;
  left: auto;
}
.file-manager-row-view .file-item-actions {
  right: 10px;
}
[dir="rtl"] .file-manager-row-view .file-item-actions {
  right: auto;
  left: 10px;
}
.file-manager-row-view .file-item-changed {
  display: none;
  margin-left: auto;
  width: 10rem;
}
[dir="rtl"] .file-manager-row-view .file-item-changed {
  margin-right: auto;
  margin-left: 0;
}
.file-manager-row-view .file-item-name {
  width: calc(100% - 4rem);
}
.file-manager-row-view .file-manager-row-header {
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
  font-weight: bold;
}
.file-manager-row-view .file-manager-row-header .file-item-name {
  margin-left: 4rem;
}
[dir="rtl"] .file-manager-row-view .file-manager-row-header .file-item-name {
  margin-right: 4rem;
  margin-left: 0;
}
.light-style .file-item-name {
  color: #4e5155 !important;
}
.light-style .file-item.selected .file-item-select-bg {
  opacity: 0.15;
}
@media (min-width: 768px) {
  .light-style .file-manager-row-view .file-item-changed {
    display: block;
  }
  .light-style .file-manager-row-view .file-item-name {
    width: calc(100% - 15rem);
  }
}
@media (min-width: 992px) {
  .light-style .file-manager-col-view .file-item-checkbox,
  .light-style .file-manager-col-view .file-item-actions {
    opacity: 0;
  }
  .light-style .file-manager-col-view .file-item:hover .file-item-checkbox,
  .light-style .file-manager-col-view .file-item.focused .file-item-checkbox,
  .light-style .file-manager-col-view .file-item.selected .file-item-checkbox,
  .light-style .file-manager-col-view .file-item:hover .file-item-actions,
  .light-style .file-manager-col-view .file-item.focused .file-item-actions,
  .light-style .file-manager-col-view .file-item.selected .file-item-actions {
    opacity: 1;
  }
}
.material-style .file-item-name {
  color: #4e5155 !important;
}
.material-style .file-item.selected .file-item-select-bg {
  opacity: 0.15;
}
@media (min-width: 768px) {
  .material-style .file-manager-row-view .file-item-changed {
    display: block;
  }
  .material-style .file-manager-row-view .file-item-name {
    width: calc(100% - 15rem);
  }
}
@media (min-width: 992px) {
  .material-style .file-manager-col-view .file-item-checkbox,
  .material-style .file-manager-col-view .file-item-actions {
    opacity: 0;
  }
  .material-style .file-manager-col-view .file-item:hover .file-item-checkbox,
  .material-style .file-manager-col-view .file-item.focused .file-item-checkbox,
  .material-style .file-manager-col-view .file-item.selected .file-item-checkbox,
  .material-style .file-manager-col-view .file-item:hover .file-item-actions,
  .material-style .file-manager-col-view .file-item.focused .file-item-actions,
  .material-style .file-manager-col-view .file-item.selected .file-item-actions {
    opacity: 1;
  }
}
.dark-style .file-item-name {
  color: #fff !important;
}
.dark-style .file-item.selected .file-item-select-bg {
  opacity: 0.15;
}
@media (min-width: 768px) {
  .dark-style .file-manager-row-view .file-item-changed {
    display: block;
  }
  .dark-style .file-manager-row-view .file-item-name {
    width: calc(100% - 15rem);
  }
}
@media (min-width: 992px) {
  .dark-style .file-manager-col-view .file-item-checkbox,
  .dark-style .file-manager-col-view .file-item-actions {
    opacity: 0;
  }
  .dark-style .file-manager-col-view .file-item:hover .file-item-checkbox,
  .dark-style .file-manager-col-view .file-item.focused .file-item-checkbox,
  .dark-style .file-manager-col-view .file-item.selected .file-item-checkbox,
  .dark-style .file-manager-col-view .file-item:hover .file-item-actions,
  .dark-style .file-manager-col-view .file-item.focused .file-item-actions,
  .dark-style .file-manager-col-view .file-item.selected .file-item-actions {
    opacity: 1;
  }
}

</style>