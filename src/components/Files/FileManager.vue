<template>
  <div>
    <div class="content">
      <div class="container">
        <h5 class="mt-2 mb-4 text-secondary">My Files</h5>
        <div class="row">
          <div class="col-12">
            <div class="card-box">
              <div class="row">
                <div class="col-lg-3 col-xl-2">
                  <div class="file-man-box"><a href="" class="file-close"><i class="fa fa-times-circle"></i></a>
                    <div class="file-img-box"><img src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/eps.svg" alt="icon"></div><a href="#" class="file-download"><i class="fa fa-download"></i></a>
                    <div class="file-man-title">
                      <h5 class="mb-0 text-overflow">Epsfile.eps</h5>
                      <p class="mb-0"><small>568.8 kb</small></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-xl-2">
                  <div class="file-man-box"><a href="" class="file-close"><i class="fa fa-times-circle"></i></a>
                    <div class="file-img-box"><img src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/dll.svg" alt="icon"></div><a href="#" class="file-download"><i class="fa fa-download"></i></a>
                    <div class="file-man-title">
                      <h5 class="mb-0 text-overflow">Project_file.dll</h5>
                      <p class="mb-0"><small>684.3 kb</small></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-xl-2">
                  <div class="file-man-box"><a href="" class="file-close"><i class="fa fa-times-circle"></i></a>
                    <div class="file-img-box"><img src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/sql.svg" alt="icon"></div><a href="#" class="file-download"><i class="fa fa-download"></i></a>
                    <div class="file-man-title">
                      <h5 class="mb-0 text-overflow">Website_file.sql</h5>
                      <p class="mb-0"><small>457.8 kb</small></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-xl-2">
                  <div class="file-man-box"><a href="" class="file-close"><i class="fa fa-times-circle"></i></a>
                    <div class="file-img-box"><img src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/zip.svg" alt="icon"></div><a href="#" class="file-download"><i class="fa fa-download"></i></a>
                    <div class="file-man-title">
                      <h5 class="mb-0 text-overflow">invoice_project.pdf</h5>
                      <p class="mb-0"><small>568.8 kb</small></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-xl-2">
                  <div class="file-man-box"><a href="" class="file-close"><i class="fa fa-times-circle"></i></a>
                    <div class="file-img-box"><img src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/ps.svg" alt="icon"></div><a href="#" class="file-download"><i class="fa fa-download"></i></a>
                    <div class="file-man-title">
                      <h5 class="mb-0 text-overflow">invoice_project.pdf</h5>
                      <p class="mb-0"><small>568.8 kb</small></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-xl-2">
                  <div class="file-man-box"><a href="" class="file-close"><i class="fa fa-times-circle"></i></a>
                    <div class="file-img-box"><img src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/png.svg" alt="icon"></div><a href="#" class="file-download"><i class="fa fa-download"></i></a>
                    <div class="file-man-title">
                      <h5 class="mb-0 text-overflow">invoice_project.pdf</h5>
                      <p class="mb-0"><small>568.8 kb</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- container -->
    </div>
  </div>
</template>


<script>
export default {
  name: "FileManager"
}
</script>

<style scoped>

/*@import 'https://unpkg.com/bootstrap/dist/css/bootstrap.min.css';*/
/*@import  "@/assets/styles/bootstrap.css";*/
body{
  margin-top:20px;
  background:#DCDCDC;
}
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