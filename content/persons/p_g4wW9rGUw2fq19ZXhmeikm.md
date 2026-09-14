---
schema: wang-person/v1
id: p_g4wW9rGUw2fq19ZXhmeikm
status: active
merged_into: null
display_name: 王式鋹
cbdb_id: 266649
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AMqjrMbL2u9viurJLh1xzs
        subject_person_id: p_g4wW9rGUw2fq19ZXhmeikm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式鋹，明人物。景泰五年進士，籍贯安福。（中国历代人物传记资料库 CBDB 266649）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_wu7FquDyKcJxN3JTnjdWs3
          claim_id: c_AMqjrMbL2u9viurJLh1xzs
          source_id: s_g2QvxnDPyJj1ZZ9yVg36tP
          stance: supports
          locator: CBDB:266649
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_g2QvxnDPyJj1ZZ9yVg36tP
            source_type: api_record
            title: 中国历代人物传记资料库：王式鋹（CBDB 266649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266649&o=json
            external_identifier: CBDB:266649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ETVRcNVAr7yUjbDB9u1zZM
        subject_person_id: p_g4wW9rGUw2fq19ZXhmeikm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式鋹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_v3K79ufrC3HCdqEK4RBw8y
          claim_id: c_ETVRcNVAr7yUjbDB9u1zZM
          source_id: s_g2QvxnDPyJj1ZZ9yVg36tP
          stance: supports
          locator: CBDB:266649
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YYsDUz0EUoeYs_HU995N3W
        subject_person_id: p_DYcwLJjTUW6ckv7UzLhqhY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g4wW9rGUw2fq19ZXhmeikm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2uhB7mEf22H-jCt3h5PDtK
          claim_id: c_YYsDUz0EUoeYs_HU995N3W
          source_id: s_V4Fm9H0iHK0WiapBUDBS3j
          stance: supports
          locator: CBDB：兄弟 王重（198394）之父／母 王瀘滔
          quotation: null
          interpretation_note: 由兄弟关系推断：王式鋹 与 王重 为同胞（CBDB 记「弟」），王重 之父／母即 王式鋹 之父／母。
          source:
            id: s_V4Fm9H0iHK0WiapBUDBS3j
            source_type: api_record
            title: 中国历代人物传记资料库：王式鋹（CBDB 266649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266649&o=json
            external_identifier: CBDB:266649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DYcwLJjTUW6ckv7UzLhqhY
        status: active
        display_name: 王瀘滔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_a_d-CqITBN2TS6GnmVBVnB
        subject_person_id: p_g4wW9rGUw2fq19ZXhmeikm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_z4aCxcZmXAafGUnNufCVpV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5ySNi3LPk133EW6NoCAcY7
          claim_id: c_a_d-CqITBN2TS6GnmVBVnB
          source_id: s_V4Fm9H0iHK0WiapBUDBS3j
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198394 王重）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_V4Fm9H0iHK0WiapBUDBS3j
            source_type: api_record
            title: 中国历代人物传记资料库：王式鋹（CBDB 266649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266649&o=json
            external_identifier: CBDB:266649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_z4aCxcZmXAafGUnNufCVpV
        status: active
        display_name: 王重
        merged_into_person_id: null
---

# 王式鋹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王式鋹，明人物。景泰五年進士，籍贯安福。（中国历代人物传记资料库 CBDB 266649） | accepted |
| name.primary | 王式鋹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DYcwLJjTUW6ckv7UzLhqhY | 王瀘滔 | accepted |
| other | p_z4aCxcZmXAafGUnNufCVpV | 王重 | accepted |

## 外部来源

- [中国历代人物传记资料库：王式鋹（CBDB 266649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266649&o=json)
