---
schema: wang-person/v1
id: p_aEZ2MeKHdAzenJ2h7vtp9G
status: active
merged_into: null
display_name: 王仲一
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N4eMScChzp_7WM_4A4HAn5
        subject_person_id: p_aEZ2MeKHdAzenJ2h7vtp9G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲一，史料所见人物。本项目依据《湖南日报：王夫之故居寻根》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iBFuo-SMSQ_isxaibEuJlF
          claim_id: c_N4eMScChzp_7WM_4A4HAn5
          source_id: s_RbvovaqoYD5h7qPmkNsY65
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_RbvovaqoYD5h7qPmkNsY65
            source_type: website
            title: 湖南日报：王夫之故居寻根
            creator: null
            publisher: 湖南日报（新浪转载）
            published_at_text: null
            canonical_url: https://news.sina.com.cn/o/2017-01-13/doc-ifxzqhka2859249.shtml
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:46.270Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tLn32EwJYPu6HEA5J7LbAc
        subject_person_id: p_aEZ2MeKHdAzenJ2h7vtp9G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲一
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_z2XCjxfGh4KeoxZi8yEQu2
          claim_id: c_tLn32EwJYPu6HEA5J7LbAc
          source_id: s_RbvovaqoYD5h7qPmkNsY65
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_zFXBhn1w9pHtsoL2oBq26x
        subject_person_id: p_aEZ2MeKHdAzenJ2h7vtp9G
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_kJATJTH5PPbmzSLV3yS7TN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hYhg7ooACRiL63HF9uXpWA
          claim_id: c_zFXBhn1w9pHtsoL2oBq26x
          source_id: s_RbvovaqoYD5h7qPmkNsY65
          stance: supports
          locator: 迁衡始祖段
          quotation: 永乐年间，王仲一之子王全……遂籍于衡。
          interpretation_note: null
          source:
            id: s_RbvovaqoYD5h7qPmkNsY65
            source_type: website
            title: 湖南日报：王夫之故居寻根
            creator: null
            publisher: 湖南日报（新浪转载）
            published_at_text: null
            canonical_url: https://news.sina.com.cn/o/2017-01-13/doc-ifxzqhka2859249.shtml
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:46.270Z
            metadata_json: null
      object_person:
        id: p_kJATJTH5PPbmzSLV3yS7TN
        status: active
        display_name: 王全
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲一，史料所见人物。本项目依据《湖南日报：王夫之故居寻根》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王仲一 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kJATJTH5PPbmzSLV3yS7TN | 王全 | accepted |

## 外部来源

- [湖南日报：王夫之故居寻根](https://news.sina.com.cn/o/2017-01-13/doc-ifxzqhka2859249.shtml)
