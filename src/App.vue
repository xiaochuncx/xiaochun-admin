<template>
  <TConfigProvider :global-config="{ classPrefix: 't' }">
    <TSpace direction="vertical" style="width: 100%; text-align: center">
      <Logo />
      <h3>Welcome to use TDesign！</h3>
      <TSpace>
        <TButton theme="primary">
          <add-icon />
          新建
        </TButton>
        <TButton variant="outline">
          <cloud-upload-icon />
          上传文件
        </TButton>
        <TButton shape="circle" theme="primary">
          <discount-icon />
        </TButton>
        <TButton shape="circle" theme="primary">
          <cloud-download-icon />
        </TButton>
        <TButton variant="outline"> 搜索 </TButton>
      </TSpace>
    </TSpace>
  </TConfigProvider>
</template>

<script setup lang="ts">
import {
  AddIcon,
  CloudUploadIcon,
  DiscountIcon,
  CloudDownloadIcon,
} from "tdesign-icons-vue-next";
import Logo from '@assets/svg/assets-t-logo.svg';
</script>

