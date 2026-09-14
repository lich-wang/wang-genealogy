---
schema: wang-person/v1
id: p_EPre6RwkxTdv7w3sC85r9v
status: active
merged_into: null
display_name: 王忠
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rNmDZGpXDYB2hwGZXQfA85
        subject_person_id: p_EPre6RwkxTdv7w3sC85r9v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4TMGfvmdPGv2pWoBeunGWo
          claim_id: c_rNmDZGpXDYB2hwGZXQfA85
          source_id: s_B8vpCw4ykxK6wjzgzee7Vt
          stance: supports
          locator: CBDB:255593
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255593）
          source: &a1
            id: s_B8vpCw4ykxK6wjzgzee7Vt
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 255593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255593&o=json
            external_identifier: CBDB:255593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.348Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iYMAJLr5TkWGe3A8EffpaZ
        subject_person_id: p_EPre6RwkxTdv7w3sC85r9v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠，明人物。成化十七年進士，籍贯錦衣衛。（中国历代人物传记资料库 CBDB 255593）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Gg0K5iDXISd1RL0wq7RxjZ
          claim_id: c_iYMAJLr5TkWGe3A8EffpaZ
          source_id: s_B8vpCw4ykxK6wjzgzee7Vt
          stance: supports
          locator: CBDB:255593
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_gp4yv_B7UtX-Glz-gCr__-
        subject_person_id: p_EPre6RwkxTdv7w3sC85r9v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8CKJNGVaripT3AVjGSTRgL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8--o7I8pSJaYJIb_cr9Slc
          claim_id: c_gp4yv_B7UtX-Glz-gCr__-
          source_id: s_cSDhRGdWP4eWosWtyNtGvY
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第九十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cSDhRGdWP4eWosWtyNtGvY
            source_type: api_record
            title: 中国历代人物传记资料库：王敞（CBDB 126724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126724&o=json
            external_identifier: CBDB:126724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.154Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8CKJNGVaripT3AVjGSTRgL
        status: active
        display_name: 王敞
        merged_into_person_id: null
    - claim:
        id: c_q8zBFsZZ9JINBjtOFZ67Tq
        subject_person_id: p_EPre6RwkxTdv7w3sC85r9v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iBKUAT9Q8dFJHzM48f3z6X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O5QVu4d_vY55IsmedwC-pl
          claim_id: c_q8zBFsZZ9JINBjtOFZ67Tq
          source_id: s_Tz3XX_9J7Vv8wLAeozeoiN
          stance: supports
          locator: CBDB：兄弟 王敞（126724）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王政 与 王敞 为同胞（CBDB 记「弟」），王敞 之父／母即 王政 之父／母。
          source:
            id: s_Tz3XX_9J7Vv8wLAeozeoiN
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 255597）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255597&o=json
            external_identifier: CBDB:255597
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iBKUAT9Q8dFJHzM48f3z6X
        status: active
        display_name: 王政
        merged_into_person_id: null
    - claim:
        id: c_kALUzsjyh7q_AZQNcOiwxb
        subject_person_id: p_EPre6RwkxTdv7w3sC85r9v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rwQfH3kFoh67DsmmLarZa4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TguN0NZVqL_n5MuNXMggMR
          claim_id: c_kALUzsjyh7q_AZQNcOiwxb
          source_id: s_iYAxLGqmBjuA2-A3ZoerFr
          stance: supports
          locator: CBDB：兄弟 王敞（126724）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王敔 与 王敞 为同胞（CBDB 记「兄」），王敞 之父／母即 王敔 之父／母。
          source:
            id: s_iYAxLGqmBjuA2-A3ZoerFr
            source_type: api_record
            title: 中国历代人物传记资料库：王敔（CBDB 255598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255598&o=json
            external_identifier: CBDB:255598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rwQfH3kFoh67DsmmLarZa4
        status: active
        display_name: 王敔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| bio.summary | 王忠，明人物。成化十七年進士，籍贯錦衣衛。（中国历代人物传记资料库 CBDB 255593） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8CKJNGVaripT3AVjGSTRgL | 王敞 | accepted |
| children | p_iBKUAT9Q8dFJHzM48f3z6X | 王政 | accepted |
| children | p_rwQfH3kFoh67DsmmLarZa4 | 王敔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敞（CBDB 126724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126724&o=json)
- [中国历代人物传记资料库：王敔（CBDB 255598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255598&o=json)
- [中国历代人物传记资料库：王政（CBDB 255597）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255597&o=json)
- [中国历代人物传记资料库：王忠（CBDB 255593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255593&o=json)
