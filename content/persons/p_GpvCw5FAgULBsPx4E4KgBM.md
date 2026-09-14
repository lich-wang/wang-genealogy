---
schema: wang-person/v1
id: p_GpvCw5FAgULBsPx4E4KgBM
status: active
merged_into: null
display_name: 王景堂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VwpVcGC7U48x7QY5Zog318
        subject_person_id: p_GpvCw5FAgULBsPx4E4KgBM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BjwYcGu4B974HQht82WZ2Q
          claim_id: c_VwpVcGC7U48x7QY5Zog318
          source_id: s_M9qznGw4q1Zdw1APojTbxs
          stance: supports
          locator: CBDB:124342
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（124342）
          source: &a1
            id: s_M9qznGw4q1Zdw1APojTbxs
            source_type: api_record
            title: 中国历代人物传记资料库：王景堂（CBDB 124342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124342&o=json
            external_identifier: CBDB:124342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.174Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DAbkCkxNj3GQMy3cR9Hgrk
        subject_person_id: p_GpvCw5FAgULBsPx4E4KgBM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1853年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ftAjPwmtGBUDjMnfakZiXq
          claim_id: c_DAbkCkxNj3GQMy3cR9Hgrk
          source_id: s_M9qznGw4q1Zdw1APojTbxs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GdhUrXXrDzXJDYj2smudxa
        subject_person_id: p_GpvCw5FAgULBsPx4E4KgBM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景堂（卒于1853年），清人物。籍贯甘泉。（中国历代人物传记资料库 CBDB 124342）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MVPrlexYpQ5wnIjARiTWmF
          claim_id: c_GdhUrXXrDzXJDYj2smudxa
          source_id: s_M9qznGw4q1Zdw1APojTbxs
          stance: supports
          locator: CBDB:124342
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_ImqR9yTNflBokiemmR9yZd
        subject_person_id: p_GpvCw5FAgULBsPx4E4KgBM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_N7EWjhatt6M2kUu98eZPB2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_egTaJ-dboY8POdd3M1eRwx
          claim_id: c_ImqR9yTNflBokiemmR9yZd
          source_id: s_nuwLqfaeEDfK2HVJhJsYda
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 527993 王德義）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_nuwLqfaeEDfK2HVJhJsYda
            source_type: api_record
            title: 中国历代人物传记资料库：王景堂（CBDB 124342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124342&o=json
            external_identifier: CBDB:124342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N7EWjhatt6M2kUu98eZPB2
        status: active
        display_name: 王德義
        merged_into_person_id: null
---

# 王景堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景堂 | accepted |
| death.date | 1853年 | accepted |
| bio.summary | 王景堂（卒于1853年），清人物。籍贯甘泉。（中国历代人物传记资料库 CBDB 124342） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_N7EWjhatt6M2kUu98eZPB2 | 王德義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景堂（CBDB 124342）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124342&o=json)
