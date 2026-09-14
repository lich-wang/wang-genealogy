---
schema: wang-person/v1
id: p_GUY42anzhEmrW3MkiP5GSB
status: active
merged_into: null
display_name: 王夢雷
cbdb_id: 221666
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zis1nvFHDEzpAeEdT7bzsS
        subject_person_id: p_GUY42anzhEmrW3MkiP5GSB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢雷，明人物。萬曆八年進士，籍贯上饒。（中国历代人物传记资料库 CBDB 221666）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_vofHob9CP4SvITanFRhKbV
          claim_id: c_zis1nvFHDEzpAeEdT7bzsS
          source_id: s_5gGw1KDmTMaBkM7RovByMh
          stance: supports
          locator: CBDB:221666
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5gGw1KDmTMaBkM7RovByMh
            source_type: api_record
            title: 中国历代人物传记资料库：王夢雷（CBDB 221666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221666&o=json
            external_identifier: CBDB:221666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WqC3JdwqT3xEV72qsrvDth
        subject_person_id: p_GUY42anzhEmrW3MkiP5GSB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢雷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BMw48xtYcgMwgEGC58LQtQ
          claim_id: c_WqC3JdwqT3xEV72qsrvDth
          source_id: s_5gGw1KDmTMaBkM7RovByMh
          stance: supports
          locator: CBDB:221666
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_v0nWOHnLmRN3tBgQ1EdAyY
        subject_person_id: p_GEvSYKNyDCnRLesR9j7DmA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GUY42anzhEmrW3MkiP5GSB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p3PSZx5XB7JkAE0GC3qsso
          claim_id: c_v0nWOHnLmRN3tBgQ1EdAyY
          source_id: s_fYlfpYtdIphT-jad1v1Gbp
          stance: supports
          locator: CBDB：兄弟 王夢暘（206693）之父／母 王綸
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢雷 与 王夢暘 为同胞（CBDB 记「弟」），王夢暘 之父／母即 王夢雷 之父／母。
          source:
            id: s_fYlfpYtdIphT-jad1v1Gbp
            source_type: api_record
            title: 中国历代人物传记资料库：王夢雷（CBDB 221666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221666&o=json
            external_identifier: CBDB:221666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GEvSYKNyDCnRLesR9j7DmA
        status: active
        display_name: 王綸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_izTdKdKX8gIrLV0ywGx7xt
        subject_person_id: p_DtN8Z5QdtH34dfH2KX2i1q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GUY42anzhEmrW3MkiP5GSB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5MaF--chAhMXN4bngKt1Kt
          claim_id: c_izTdKdKX8gIrLV0ywGx7xt
          source_id: s_fYlfpYtdIphT-jad1v1Gbp
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206693 王夢暘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fYlfpYtdIphT-jad1v1Gbp
            source_type: api_record
            title: 中国历代人物传记资料库：王夢雷（CBDB 221666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221666&o=json
            external_identifier: CBDB:221666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DtN8Z5QdtH34dfH2KX2i1q
        status: active
        display_name: 王夢暘
        merged_into_person_id: null
---

# 王夢雷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王夢雷，明人物。萬曆八年進士，籍贯上饒。（中国历代人物传记资料库 CBDB 221666） | accepted |
| name.primary | 王夢雷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GEvSYKNyDCnRLesR9j7DmA | 王綸 | accepted |
| other | p_DtN8Z5QdtH34dfH2KX2i1q | 王夢暘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢雷（CBDB 221666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221666&o=json)
