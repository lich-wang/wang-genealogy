---
schema: wang-person/v1
id: p_PYM7TF8n5zz54ZhKXXXqUT
status: active
merged_into: null
display_name: 王萬章
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CCfiApnxdb6E5rqsp1gPNL
        subject_person_id: p_PYM7TF8n5zz54ZhKXXXqUT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cLpCY2unY6FU67ywQHWdr3
          claim_id: c_CCfiApnxdb6E5rqsp1gPNL
          source_id: s_WkGQb5SVo8UEWsoR2xayQf
          stance: supports
          locator: CBDB:37631
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37631）
          source: &a1
            id: s_WkGQb5SVo8UEWsoR2xayQf
            source_type: api_record
            title: 中国历代人物传记资料库：王萬章（CBDB 37631）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37631&o=json
            external_identifier: CBDB:37631
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.206Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hrpdfd4rhHxDJLPb9TdzBw
        subject_person_id: p_PYM7TF8n5zz54ZhKXXXqUT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬章，史料所见人物。本项目依据《中国历代人物传记资料库：王萬章（CBDB 37631）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YuCmKmZxajgoZKeMdz7Vyk
          claim_id: c_Hrpdfd4rhHxDJLPb9TdzBw
          source_id: s_WkGQb5SVo8UEWsoR2xayQf
          stance: supports
          locator: CBDB:37631
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-RUByL4cHBg0yoGIaZFoCK
        subject_person_id: p_PYM7TF8n5zz54ZhKXXXqUT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hcbME2VWPXrFTdZxvmZeWN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_StW55cYeWZ1POe1DVnqyD1
          claim_id: c_-RUByL4cHBg0yoGIaZFoCK
          source_id: s_4iuSFE0_g_X_mG9HGv81Av
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 37631 王萬章）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4iuSFE0_g_X_mG9HGv81Av
            source_type: api_record
            title: 中国历代人物传记资料库：王宗望（CBDB 37629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37629&o=json
            external_identifier: CBDB:37629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hcbME2VWPXrFTdZxvmZeWN
        status: active
        display_name: 王宗望
        merged_into_person_id: null
---

# 王萬章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬章 | accepted |
| bio.summary | 王萬章，史料所见人物。本项目依据《中国历代人物传记资料库：王萬章（CBDB 37631）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_hcbME2VWPXrFTdZxvmZeWN | 王宗望 | accepted |

## 外部来源

- [中国历代人物传记资料库：王萬章（CBDB 37631）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37631&o=json)
- [中国历代人物传记资料库：王宗望（CBDB 37629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37629&o=json)
