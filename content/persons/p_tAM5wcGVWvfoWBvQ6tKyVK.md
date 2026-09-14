---
schema: wang-person/v1
id: p_tAM5wcGVWvfoWBvQ6tKyVK
status: active
merged_into: null
display_name: 王守訓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1YWPuAoXgpQ4QLJZiK2tFe
        subject_person_id: p_tAM5wcGVWvfoWBvQ6tKyVK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XSHGnsmi1htBjVs5uCPr2U
          claim_id: c_1YWPuAoXgpQ4QLJZiK2tFe
          source_id: s_toSEJdBf8z68wrj6o8Zb5d
          stance: supports
          locator: CBDB:327955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327955）
          source: &a1
            id: s_toSEJdBf8z68wrj6o8Zb5d
            source_type: api_record
            title: 中国历代人物传记资料库：王守訓（CBDB 327955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327955&o=json
            external_identifier: CBDB:327955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.275Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rkuQUqieJL3afwiuKA9qtR
        subject_person_id: p_tAM5wcGVWvfoWBvQ6tKyVK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守訓，明人物。嘉靖四十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 327955）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EmOXXO0n_KONNX7DmC5QY_
          claim_id: c_rkuQUqieJL3afwiuKA9qtR
          source_id: s_toSEJdBf8z68wrj6o8Zb5d
          stance: supports
          locator: CBDB:327955
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_J-lLZ4yQhaseIKBJ-QFCTy
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tAM5wcGVWvfoWBvQ6tKyVK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CyTRnnkKp1G0Wqzs5CZjUn
          claim_id: c_J-lLZ4yQhaseIKBJ-QFCTy
          source_id: s_yUy4P6xdRHGDSKattfLuKg
          stance: supports
          locator: CBDB：兄弟 王以纁（205075）之父／母 王楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王守訓 与 王以纁 为同胞（CBDB 记「弟」），王以纁 之父／母即 王守訓 之父／母。
          source:
            id: s_yUy4P6xdRHGDSKattfLuKg
            source_type: api_record
            title: 中国历代人物传记资料库：王守訓（CBDB 327955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327955&o=json
            external_identifier: CBDB:327955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SJyiQsStHWbHq3jTTvu2vD
        status: active
        display_name: 王楫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_zgZKzzrheUkgG5EyRH9Zwd
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tAM5wcGVWvfoWBvQ6tKyVK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A34iv7zcId-qDkTd0iXY_t
          claim_id: c_zgZKzzrheUkgG5EyRH9Zwd
          source_id: s_yUy4P6xdRHGDSKattfLuKg
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205075 王以纁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yUy4P6xdRHGDSKattfLuKg
            source_type: api_record
            title: 中国历代人物传记资料库：王守訓（CBDB 327955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327955&o=json
            external_identifier: CBDB:327955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DYviEpoQ7QNEe7UQdPVSd4
        status: active
        display_name: 王以纁
        merged_into_person_id: null
---

# 王守訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守訓 | accepted |
| bio.summary | 王守訓，明人物。嘉靖四十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 327955） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SJyiQsStHWbHq3jTTvu2vD | 王楫 | accepted |
| other | p_DYviEpoQ7QNEe7UQdPVSd4 | 王以纁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守訓（CBDB 327955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327955&o=json)
