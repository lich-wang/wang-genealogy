---
schema: wang-person/v1
id: p_nGWAHeEASKiJdfcar4Chmc
status: active
merged_into: null
display_name: 王一陽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ymUc3ifnrTWnNWab17KP9m
        subject_person_id: p_nGWAHeEASKiJdfcar4Chmc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zQWH8D7ExD8jhD57N5gKxn
          claim_id: c_ymUc3ifnrTWnNWab17KP9m
          source_id: s_NahXQHmyXYgxnHtBZEfMRi
          stance: supports
          locator: CBDB:330484
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（330484）
          source: &a1
            id: s_NahXQHmyXYgxnHtBZEfMRi
            source_type: api_record
            title: 中国历代人物传记资料库：王一陽（CBDB 330484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330484&o=json
            external_identifier: CBDB:330484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.348Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D1QN3ppYBiJ1JSSCwDeyVL
        subject_person_id: p_nGWAHeEASKiJdfcar4Chmc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一陽，明人物。嘉靖四十四年進士，籍贯金華。（中国历代人物传记资料库 CBDB 330484）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iPYxZjFaOPUBrcHxWNXsvO
          claim_id: c_D1QN3ppYBiJ1JSSCwDeyVL
          source_id: s_NahXQHmyXYgxnHtBZEfMRi
          stance: supports
          locator: CBDB:330484
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_y6KY8JkUNIRU5__3OlidZT
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nGWAHeEASKiJdfcar4Chmc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iHCCai6sBdQPaFBxjNspgA
          claim_id: c_y6KY8JkUNIRU5__3OlidZT
          source_id: s_sVLVjVzoSn94_TU1wLsUvD
          stance: supports
          locator: CBDB：兄弟 王三錫（205255）之父／母 王訪
          quotation: null
          interpretation_note: 由兄弟关系推断：王一陽 与 王三錫 为同胞（CBDB 记「弟」），王三錫 之父／母即 王一陽 之父／母。
          source:
            id: s_sVLVjVzoSn94_TU1wLsUvD
            source_type: api_record
            title: 中国历代人物传记资料库：王一陽（CBDB 330484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330484&o=json
            external_identifier: CBDB:330484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FwWAP4cMFqggRtz76GL45y
        status: active
        display_name: 王訪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_g-6rOljYfWYBWxjf0ROsBF
        subject_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nGWAHeEASKiJdfcar4Chmc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kmfv5Lq3hGsVPvy8RI8gqE
          claim_id: c_g-6rOljYfWYBWxjf0ROsBF
          source_id: s_sVLVjVzoSn94_TU1wLsUvD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205255 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sVLVjVzoSn94_TU1wLsUvD
            source_type: api_record
            title: 中国历代人物传记资料库：王一陽（CBDB 330484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330484&o=json
            external_identifier: CBDB:330484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SNd4UuLmfsSW8TJsfi9MKm
        status: active
        display_name: 王三錫
        merged_into_person_id: null
---

# 王一陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一陽 | accepted |
| bio.summary | 王一陽，明人物。嘉靖四十四年進士，籍贯金華。（中国历代人物传记资料库 CBDB 330484） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FwWAP4cMFqggRtz76GL45y | 王訪 | accepted |
| other | p_SNd4UuLmfsSW8TJsfi9MKm | 王三錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一陽（CBDB 330484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330484&o=json)
