<template>
  <div class="col-md-3 col-sm-4 bootstrap-iso">
    <div class="file-man-box"><a href="" class="file-close"><i class="fa fa-times-circle"></i></a>
      <div class="file-img-box" style="text-align: left; margin: 0; padding: 0">
        <FileIcon :type="file.file_type"></FileIcon>
      </div>
      <button @click="getDownloadLink()" class="file-download"><i class="fa fa-download"></i></button>
      <div class="file-man-title">
        <h5 class="mb-0 text-overflow">{{ file.name }}</h5>
        <p class="mb-0"><small>{{ getFileSize(file.file_size) }}</small></p>
      </div>
    </div>
  </div>
</template>

<script>
import FileIcon from "@/components/Files/FileIcon";
import axios from "axios";
import API_HOME from "@/variables/apiHome";

export default {
  name: "FileBox",
  components: {
    FileIcon,
  },
  props: ['file'],
  methods: {
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
            a.download = url.split('/').pop()
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
          })
          .catch(function () {
            alert("You are not authorised to download that file");
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
.card-box {
  padding: 20px;
  border-radius: 3px;
  margin-bottom: 30px;
  background-color: #fff;
}

.file-man-box {
  padding: 20px;
  border: 1px solid #e3eaef;
  border-radius: 5px;
  position: relative;
  margin-bottom: 20px
}

.file-man-box .file-close {
  color: #f1556c;
  position: absolute;
  line-height: 24px;
  font-size: 24px;
  right: 10px;
  top: 10px;
  visibility: hidden
}

.file-man-box .file-img-box {
  line-height: 120px;
  text-align: center
}

.file-man-box .file-img-box img {
  height: 64px
}

.file-man-box .file-download {
  font-size: 32px;
  color: #98a6ad;
  position: absolute;
  right: 10px
}

.file-man-box .file-download:hover {
  color: #313a46
}

.file-man-box .file-man-title {
  padding-right: 25px
}

.file-man-box:hover {
  -webkit-box-shadow: 0 0 24px 0 rgba(0, 0, 0, .06), 0 1px 0 0 rgba(0, 0, 0, .02);
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, .06), 0 1px 0 0 rgba(0, 0, 0, .02)
}

.file-man-box:hover .file-close {
  visibility: visible
}
.text-overflow {
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  width: 100%;
  overflow: hidden;
}
h5 {
  font-size: 15px;
}
</style>