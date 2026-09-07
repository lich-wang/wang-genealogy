---
schema: wang-person/v1
id: p_trg4cuM1tnD5GLsUnLoU3f
status: active
merged_into: null
display_name: 王曾禄
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rffqXd_MOyM757nUQeb64T
        subject_person_id: p_trg4cuM1tnD5GLsUnLoU3f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曾禄，史料所见人物。本项目依据《中央纪委监察部网站：江苏高邮王念孙、王引之父子》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Aej7d_nsZyQPT5O7tsJAs
          claim_id: c_rffqXd_MOyM757nUQeb64T
          source_id: s_1N4VHzGnSCazYyxcFVye5N
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_1N4VHzGnSCazYyxcFVye5N
            source_type: website
            title: 中央纪委监察部网站：江苏高邮王念孙、王引之父子
            creator: null
            publisher: 中央纪委监察部网站
            published_at_text: null
            canonical_url: https://m.ccdi.gov.cn/content/7c/1a/11289.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:55.243Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DDRq6233XMG4piT4nJA2xq
        subject_person_id: p_trg4cuM1tnD5GLsUnLoU3f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曾禄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cb2aXHVM976TqzN5okuRAw
          claim_id: c_DDRq6233XMG4piT4nJA2xq
          source_id: s_1N4VHzGnSCazYyxcFVye5N
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
        id: c_Y1q166CRRsBNWNEzNqBEiS
        subject_person_id: p_trg4cuM1tnD5GLsUnLoU3f
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_WJ1Fv3Xeybue8CK9VGrZL3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xSU4E28xB7h48huvjSKs83
          claim_id: c_Y1q166CRRsBNWNEzNqBEiS
          source_id: s_1N4VHzGnSCazYyxcFVye5N
          stance: supports
          locator: 王氏家学渊源
          quotation: 王安国任左都御史兼领广东巡抚时，其父王曾禄叮嘱他。
          interpretation_note: null
          source:
            id: s_1N4VHzGnSCazYyxcFVye5N
            source_type: website
            title: 中央纪委监察部网站：江苏高邮王念孙、王引之父子
            creator: null
            publisher: 中央纪委监察部网站
            published_at_text: null
            canonical_url: https://m.ccdi.gov.cn/content/7c/1a/11289.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:55.243Z
            metadata_json: null
      object_person:
        id: p_WJ1Fv3Xeybue8CK9VGrZL3
        status: active
        display_name: 王安国
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王曾禄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王曾禄，史料所见人物。本项目依据《中央纪委监察部网站：江苏高邮王念孙、王引之父子》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王曾禄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_WJ1Fv3Xeybue8CK9VGrZL3 | 王安国 | accepted |

## 外部来源

- [中央纪委监察部网站：江苏高邮王念孙、王引之父子](https://m.ccdi.gov.cn/content/7c/1a/11289.html)
