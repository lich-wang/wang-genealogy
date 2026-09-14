---
schema: wang-person/v1
id: p_iBKUAT9Q8dFJHzM48f3z6X
status: active
merged_into: null
display_name: 王政
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TQdBjtofEQaAhz6qqFuehQ
        subject_person_id: p_iBKUAT9Q8dFJHzM48f3z6X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G6sQvpfeP55yjQxTw4YoQ7
          claim_id: c_TQdBjtofEQaAhz6qqFuehQ
          source_id: s_pMJYGS5scSzA2L9ioPcuXv
          stance: supports
          locator: CBDB:255597
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255597）
          source: &a1
            id: s_pMJYGS5scSzA2L9ioPcuXv
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 255597）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255597&o=json
            external_identifier: CBDB:255597
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.348Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HSfRGkshHWF33UyeVh8rNK
        subject_person_id: p_iBKUAT9Q8dFJHzM48f3z6X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 255597）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6zxQvYK8UN-VQ_eyk3RZnD
          claim_id: c_HSfRGkshHWF33UyeVh8rNK
          source_id: s_pMJYGS5scSzA2L9ioPcuXv
          stance: supports
          locator: CBDB:255597
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_EPre6RwkxTdv7w3sC85r9v
        status: active
        display_name: 王忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_W_SmxWkgRgidfzP2p4JXtf
        subject_person_id: p_8CKJNGVaripT3AVjGSTRgL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iBKUAT9Q8dFJHzM48f3z6X
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2ofg_fCi638nxsYijrixtt
          claim_id: c_W_SmxWkgRgidfzP2p4JXtf
          source_id: s_Tz3XX_9J7Vv8wLAeozeoiN
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126724 王敞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_8CKJNGVaripT3AVjGSTRgL
        status: active
        display_name: 王敞
        merged_into_person_id: null
---

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | 王政，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 255597） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EPre6RwkxTdv7w3sC85r9v | 王忠 | accepted |
| other | p_8CKJNGVaripT3AVjGSTRgL | 王敞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王政（CBDB 255597）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255597&o=json)
