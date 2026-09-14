---
schema: wang-person/v1
id: p_V8iYdPvF188ppJY56EcyZB
status: active
merged_into: null
display_name: 王三重
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mw4XpK61RFbAkmEiEPaH5n
        subject_person_id: p_V8iYdPvF188ppJY56EcyZB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三重
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wc3gc4ZXKeNzzkyZ2KzxLA
          claim_id: c_Mw4XpK61RFbAkmEiEPaH5n
          source_id: s_DaN3kTaPY68i1LfppyAniH
          stance: supports
          locator: CBDB:311214
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（311214）
          source: &a1
            id: s_DaN3kTaPY68i1LfppyAniH
            source_type: api_record
            title: 中国历代人物传记资料库：王三重（CBDB 311214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311214&o=json
            external_identifier: CBDB:311214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.849Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3QQsfi2YnuYKxFDCvy6KEm
        subject_person_id: p_V8iYdPvF188ppJY56EcyZB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三重，明人物。嘉靖二十六年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 311214）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qRWG6Zg5Izdf1RgTZAorC3
          claim_id: c_3QQsfi2YnuYKxFDCvy6KEm
          source_id: s_DaN3kTaPY68i1LfppyAniH
          stance: supports
          locator: CBDB:311214
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_d4VYTlgQtmpbzi6VrsYsgQ
        subject_person_id: p_CvzpEJfQqQbdZFgH5SKxcJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V8iYdPvF188ppJY56EcyZB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dDSWr34Dq8Wj5rvC3q4vVU
          claim_id: c_d4VYTlgQtmpbzi6VrsYsgQ
          source_id: s_LG5zesGB8JyneKAN1IDDYS
          stance: supports
          locator: CBDB：兄弟 王任用（203867）之父／母 王時雨
          quotation: null
          interpretation_note: 由兄弟关系推断：王三重 与 王任用 为同胞（CBDB 记「兄」），王任用 之父／母即 王三重 之父／母。
          source:
            id: s_LG5zesGB8JyneKAN1IDDYS
            source_type: api_record
            title: 中国历代人物传记资料库：王三重（CBDB 311214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311214&o=json
            external_identifier: CBDB:311214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CvzpEJfQqQbdZFgH5SKxcJ
        status: active
        display_name: 王時雨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Jb2T01fiBpFYIadgG8hwcd
        subject_person_id: p_18GnPkpUEcGNgbFCDg5gah
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_V8iYdPvF188ppJY56EcyZB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IJZgZ1pc8T5ersRh1RH0wX
          claim_id: c_Jb2T01fiBpFYIadgG8hwcd
          source_id: s_LG5zesGB8JyneKAN1IDDYS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203867 王任用）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LG5zesGB8JyneKAN1IDDYS
            source_type: api_record
            title: 中国历代人物传记资料库：王三重（CBDB 311214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311214&o=json
            external_identifier: CBDB:311214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_18GnPkpUEcGNgbFCDg5gah
        status: active
        display_name: 王任用
        merged_into_person_id: null
---

# 王三重

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三重 | accepted |
| bio.summary | 王三重，明人物。嘉靖二十六年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 311214） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CvzpEJfQqQbdZFgH5SKxcJ | 王時雨 | accepted |
| other | p_18GnPkpUEcGNgbFCDg5gah | 王任用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三重（CBDB 311214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311214&o=json)
