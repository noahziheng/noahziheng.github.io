<template>
  <div class="about">
    <div
      v-for="(info, i) in infos"
      :key="i"
      class="info-block">
      <span class="info-title">{{ $t(info.title) }}</span>
      <div
        v-for="(item, j) in info.items"
        :key="j"
        class="item-block">
        <img
          v-if="item.logo"
          class="item-logo"
          :src="item.logo">
        <div class="item-detail">
          <span class="item-title" v-html="$t(item.title)"></span>
          <span class="item-date" v-if="item.date">{{ item.date }}</span>
          <span class="item-desc" v-if="item.desc">
            <span class="tag" v-if="item.tag">{{ $t(item.tag) }}</span>
            <span v-html="$t(item.desc)"></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TUSTLogo from '../assets/about/tust.png';
import ALiLogo from '../assets/about/ali.png';
import XCFLogo from '../assets/about/xcf.png';
import BDLogo from '../assets/about/bytedance.png';

@Component({})
export default class About extends Vue {
  private infos = [
    {
      title: 'education.title',
      items: [
        {
          logo: TUSTLogo,
          title: 'education.tust_name',
          date: '2015.9-2019.6',
          desc: 'education.tust_desc',
        },
      ],
    },
    {
      title: 'work.title',
      items: [
        {
          logo: BDLogo,
          title: 'work.bytedance_name',
          date: '2021.8-',
          tag: 'work.working_tag',
          desc: 'work.bytedance_desc',
        },
        {
          logo: ALiLogo,
          title: 'work.ali_name',
          date: '2019.7-2021.8',
          desc: 'work.ali_desc',
        },
        {
          logo: XCFLogo,
          title: 'work.xcf_name',
          date: '2018.10-2019.3',
          desc: 'work.xcf_desc',
        },
        {
          logo: ALiLogo,
          title: 'work.ali_intern_name',
          date: '2018.7-2018.8',
          desc: 'work.ali_intern_desc',
        },
      ],
    },
    {
      title: 'paper.title',
      items: [
        {
          title: 'paper.cpci_name',
          tag: 'paper.cpci_tag',
          desc: 'paper.cpci_desc',
        },
        {
          title: 'paper.chn_name',
          tag: 'paper.chn_tag',
          desc: 'paper.chn_desc',
        },
      ],
    },
    {
      title: 'projects.title',
      items: [
        {
          title: 'projects.github',
          desc: 'projects.private',
        },
      ],
    },
  ];
}
</script>

<style lang="scss" scoped>
@media (max-width: 800px) {
  .about {
    box-sizing: border-box;
    width: 100%;
    padding: 25px;
  }
  .item-logo {
    width: 150px;
  }
}
@media (min-width: 1500px) {
  .about {
    width: auto;
    max-width: 35%;
  }
  .item-logo {
    width: 200px;
  }
}
@media (min-width: 800px) and (max-width: 1500px) {
  .about {
    padding-left: 40px;
    width: auto;
    max-width: 40%;
  }
  .item-logo {
    width: 150px;
  }
}
.about {
  margin: 0 auto;
  margin-top: 70px;
  align-items: flex-start;
  text-align: start;
  .info-block:last-child {
    margin-bottom: 30px;
  }
  .info-block {
    margin-top: 30px;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .info-title {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .item-block:first-child {
      margin-top: 10px;
    }
    .item-block {
      min-height: 100px;
      padding: 10px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      .item-logo {
        margin-right: 18px;
      }
      .item-detail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        span {
          margin: 3px 0;
        }
        .item-title {
          text-align: start;
          font-size: 20px;
        }
        .item-date {
          font-size: 12px;
        }
        .item-desc {
          font-size: 14px;
          line-height: 20px;
          .tag {
            font-size: 10px;
            background-color: #2c3e50;
            color: #fff;
            border-radius: 10px;
            padding: 3px 8px;
            margin-right: 6px;
          }
        }
      }
    }
  }
}
</style>
