---
schema: wang-person/v1
id: p_3XLLtqT4J4e4ut5KcH8qEX
status: active
merged_into: null
display_name: 王智
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L2Ue3f7wECVRpfB7w6M8Ve
        subject_person_id: p_3XLLtqT4J4e4ut5KcH8qEX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EeSjfMgYdNzUAVyK5zDDfF
          claim_id: c_L2Ue3f7wECVRpfB7w6M8Ve
          source_id: s_JPUeQtWGRdJv39W586VChA
          stance: supports
          locator: CBDB:259649
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259649）
          source: &a1
            id: s_JPUeQtWGRdJv39W586VChA
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 259649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259649&o=json
            external_identifier: CBDB:259649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.470Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W37K4YJshpVYsomnbeNLTg
        subject_person_id: p_3XLLtqT4J4e4ut5KcH8qEX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智，明人物。成化二十三年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 259649）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a7KQqjvWwHeXgHJGtAEP4w
          claim_id: c_W37K4YJshpVYsomnbeNLTg
          source_id: s_JPUeQtWGRdJv39W586VChA
          stance: supports
          locator: CBDB:259649
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ykLzK_K1Ee_jH5WWdjcq9o
        subject_person_id: p_z2KrppHPtLom67wwLrWXDN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3XLLtqT4J4e4ut5KcH8qEX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__kztwvDgPDrA5ZhdUBxi65
          claim_id: c_ykLzK_K1Ee_jH5WWdjcq9o
          source_id: s_kV_qljVg1Yxjth9Zx-7pTA
          stance: supports
          locator: CBDB：兄弟 王用（200554）之父／母 王繹
          quotation: null
          interpretation_note: 由兄弟关系推断：王智 与 王用 为同胞（CBDB 记「弟」），王用 之父／母即 王智 之父／母。
          source:
            id: s_kV_qljVg1Yxjth9Zx-7pTA
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 259649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259649&o=json
            external_identifier: CBDB:259649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_z2KrppHPtLom67wwLrWXDN
        status: active
        display_name: 王繹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qErhObPFreplMxZtNmv0GP
        subject_person_id: p_3XLLtqT4J4e4ut5KcH8qEX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rd5qTvBTthC6ZnBxJzkeri
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DA_c2Web8vNgvW_pIjxl3g
          claim_id: c_qErhObPFreplMxZtNmv0GP
          source_id: s_kV_qljVg1Yxjth9Zx-7pTA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200554 王用）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kV_qljVg1Yxjth9Zx-7pTA
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 259649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259649&o=json
            external_identifier: CBDB:259649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rd5qTvBTthC6ZnBxJzkeri
        status: active
        display_name: 王用
        merged_into_person_id: null
---

# 王智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王智 | accepted |
| bio.summary | 王智，明人物。成化二十三年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 259649） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_z2KrppHPtLom67wwLrWXDN | 王繹 | accepted |
| other | p_rd5qTvBTthC6ZnBxJzkeri | 王用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王智（CBDB 259649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259649&o=json)
