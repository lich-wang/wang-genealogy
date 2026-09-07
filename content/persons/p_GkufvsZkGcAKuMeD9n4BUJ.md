---
schema: wang-person/v1
id: p_GkufvsZkGcAKuMeD9n4BUJ
status: active
merged_into: null
display_name: 王子言
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v2xH_Wp2WdWxnWUQRLN1id
        subject_person_id: p_GkufvsZkGcAKuMeD9n4BUJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子言，史料所见人物。本项目依据《王賓 (成化丙戌進士)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_0y9Q96lplNBx2Nd_ry3YE_
          claim_id: c_v2xH_Wp2WdWxnWUQRLN1id
          source_id: s_2F98dM1oBn675do3vNM5Du
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_2F98dM1oBn675do3vNM5Du
            source_type: website
            title: 中文维基百科：王賓 (成化丙戌進士)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B3%93_(%E6%88%90%E5%8C%96%E4%B8%99%E6%88%8C%E9%80%B2%E5%A3%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Za9sFzG21d7KwQTp6h2hUQ
        subject_person_id: p_GkufvsZkGcAKuMeD9n4BUJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子言
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mMcxh68RfZ977jcsYaH97U
          claim_id: c_Za9sFzG21d7KwQTp6h2hUQ
          source_id: s_2F98dM1oBn675do3vNM5Du
          stance: supports
          locator: Q45628197
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7StSocKWZGg7banmLx8aq6
        subject_person_id: p_ZX3i8KeYu9huaG29oAKyPV
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_GkufvsZkGcAKuMeD9n4BUJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XnEdMgVwwCBtxxW8enCSUx
          claim_id: c_7StSocKWZGg7banmLx8aq6
          source_id: s_2F98dM1oBn675do3vNM5Du
          stance: supports
          locator: 条文：信息框 親屬（子）
          quotation: （子）王子言
          interpretation_note: null
          source:
            id: s_2F98dM1oBn675do3vNM5Du
            source_type: website
            title: 中文维基百科：王賓 (成化丙戌進士)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B3%93_(%E6%88%90%E5%8C%96%E4%B8%99%E6%88%8C%E9%80%B2%E5%A3%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person:
        id: p_ZX3i8KeYu9huaG29oAKyPV
        status: active
        display_name: 王賓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子言，史料所见人物。本项目依据《王賓 (成化丙戌進士)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王子言 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZX3i8KeYu9huaG29oAKyPV | 王賓 | accepted |

## 外部来源

- [中文维基百科：王賓 (成化丙戌進士)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B3%93_(%E6%88%90%E5%8C%96%E4%B8%99%E6%88%8C%E9%80%B2%E5%A3%AB))
