---
schema: wang-person/v1
id: p_VK2d9GME8RrEDHBKEwKP51
status: active
merged_into: null
display_name: 王輝光
cbdb_id: 216150
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_capc58x3BDiQnngmiQQ31h
        subject_person_id: p_VK2d9GME8RrEDHBKEwKP51
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輝光，明人物。萬曆五年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 216150）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_SAhf58xiuOMWVD_jzSGzYT
          claim_id: c_capc58x3BDiQnngmiQQ31h
          source_id: s_VJd1MPWnh8MFvpc66nkqDG
          stance: supports
          locator: CBDB:216150
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VJd1MPWnh8MFvpc66nkqDG
            source_type: api_record
            title: 中国历代人物传记资料库：王輝光（CBDB 216150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216150&o=json
            external_identifier: CBDB:216150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NehvxkRPwyVXUPB1BWLjTa
        subject_person_id: p_VK2d9GME8RrEDHBKEwKP51
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輝光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MPaJNuHD7qsEiThfFEbLbC
          claim_id: c_NehvxkRPwyVXUPB1BWLjTa
          source_id: s_VJd1MPWnh8MFvpc66nkqDG
          stance: supports
          locator: CBDB:216150
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WhauQVXKbBuCKGWCLFOZmI
        subject_person_id: p_5j714BoeSUb9hXn4A1cAts
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VK2d9GME8RrEDHBKEwKP51
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JH2_292lle9zwQ72puqLbg
          claim_id: c_WhauQVXKbBuCKGWCLFOZmI
          source_id: s_7OtoAgZWb7McQEn0cn96gx
          stance: supports
          locator: CBDB：兄弟 王繼光（126878）之父／母 王守默
          quotation: null
          interpretation_note: 由兄弟关系推断：王輝光 与 王繼光 为同胞（CBDB 记「兄」），王繼光 之父／母即 王輝光 之父／母。
          source:
            id: s_7OtoAgZWb7McQEn0cn96gx
            source_type: api_record
            title: 中国历代人物传记资料库：王輝光（CBDB 216150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216150&o=json
            external_identifier: CBDB:216150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5j714BoeSUb9hXn4A1cAts
        status: active
        display_name: 王守默
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_lwXXxYuAUIe5ngJBBH9ZPy
        subject_person_id: p_QQuUCHcAyLfkuJKD8SYwNJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VK2d9GME8RrEDHBKEwKP51
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_laslakYq3TnFvWp40vydKa
          claim_id: c_lwXXxYuAUIe5ngJBBH9ZPy
          source_id: s_7OtoAgZWb7McQEn0cn96gx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126878 王繼光）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7OtoAgZWb7McQEn0cn96gx
            source_type: api_record
            title: 中国历代人物传记资料库：王輝光（CBDB 216150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216150&o=json
            external_identifier: CBDB:216150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QQuUCHcAyLfkuJKD8SYwNJ
        status: active
        display_name: 王繼光
        merged_into_person_id: null
---

# 王輝光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王輝光，明人物。萬曆五年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 216150） | accepted |
| name.primary | 王輝光 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5j714BoeSUb9hXn4A1cAts | 王守默 | accepted |
| other | p_QQuUCHcAyLfkuJKD8SYwNJ | 王繼光 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輝光（CBDB 216150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216150&o=json)
