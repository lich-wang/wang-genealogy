---
schema: wang-person/v1
id: p_cBPu9HHctFDisx14uetVMb
status: active
merged_into: null
display_name: 王欽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DKXxigao2NUqGhJ7iibSLC
        subject_person_id: p_cBPu9HHctFDisx14uetVMb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7L6vgoJt3RymFAUYbyuUqo
          claim_id: c_DKXxigao2NUqGhJ7iibSLC
          source_id: s_XP8CgMBQL3y23KK7F7D2tW
          stance: supports
          locator: CBDB:210359
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210359）
          source: &a1
            id: s_XP8CgMBQL3y23KK7F7D2tW
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 210359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210359&o=json
            external_identifier: CBDB:210359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.000Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZjRbqMBaxK4vTw9d8c2N6J
        subject_person_id: p_cBPu9HHctFDisx14uetVMb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽，明人物。天順八年進士，籍贯潮陽。（中国历代人物传记资料库 CBDB 210359）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gH5VFYBLkUD6MZRqDSzMAq
          claim_id: c_ZjRbqMBaxK4vTw9d8c2N6J
          source_id: s_XP8CgMBQL3y23KK7F7D2tW
          stance: supports
          locator: CBDB:210359
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_B7_03T9azUuFuqhr_YvfFL
        subject_person_id: p_sJw3vXAdXzHuC5w1Shag9M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cBPu9HHctFDisx14uetVMb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XQpg6SJhvaVpqnYag4It-Y
          claim_id: c_B7_03T9azUuFuqhr_YvfFL
          source_id: s__eM0AG_9pAPOaIamLD6YDm
          stance: supports
          locator: CBDB：兄弟 王銓（126792）之父／母 王靖
          quotation: null
          interpretation_note: 由兄弟关系推断：王欽 与 王銓 为同胞（CBDB 记「弟」），王銓 之父／母即 王欽 之父／母。
          source:
            id: s__eM0AG_9pAPOaIamLD6YDm
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 210359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210359&o=json
            external_identifier: CBDB:210359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sJw3vXAdXzHuC5w1Shag9M
        status: active
        display_name: 王靖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_UegkTod13ZTrlGuZudY25T
        subject_person_id: p_A7pYYvCPv8mtUqCwSLePSw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cBPu9HHctFDisx14uetVMb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bXTSlfhbywZM55vtgfAfHe
          claim_id: c_UegkTod13ZTrlGuZudY25T
          source_id: s__eM0AG_9pAPOaIamLD6YDm
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126792 王銓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__eM0AG_9pAPOaIamLD6YDm
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 210359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210359&o=json
            external_identifier: CBDB:210359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A7pYYvCPv8mtUqCwSLePSw
        status: active
        display_name: 王銓
        merged_into_person_id: null
---

# 王欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽 | accepted |
| bio.summary | 王欽，明人物。天順八年進士，籍贯潮陽。（中国历代人物传记资料库 CBDB 210359） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sJw3vXAdXzHuC5w1Shag9M | 王靖 | accepted |
| other | p_A7pYYvCPv8mtUqCwSLePSw | 王銓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王欽（CBDB 210359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210359&o=json)
