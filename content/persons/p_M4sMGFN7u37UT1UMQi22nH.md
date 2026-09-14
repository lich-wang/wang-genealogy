---
schema: wang-person/v1
id: p_M4sMGFN7u37UT1UMQi22nH
status: active
merged_into: null
display_name: 王炳權
cbdb_id: 210110
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QkCYmnaS4KhM67EBUiWP1A
        subject_person_id: p_M4sMGFN7u37UT1UMQi22nH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳權，明人物。隆慶五年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 210110）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_S32kOhmhKZgRWxdRNRGISX
          claim_id: c_QkCYmnaS4KhM67EBUiWP1A
          source_id: s_ZzqDNEVHMHtbmDVZLeRVV7
          stance: supports
          locator: CBDB:210110
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZzqDNEVHMHtbmDVZLeRVV7
            source_type: api_record
            title: 中国历代人物传记资料库：王炳權（CBDB 210110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210110&o=json
            external_identifier: CBDB:210110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_V1DnqnKxJTovdLWrhZEtph
        subject_person_id: p_M4sMGFN7u37UT1UMQi22nH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳權
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oiWw1E1mtXJ494UcBFXY2x
          claim_id: c_V1DnqnKxJTovdLWrhZEtph
          source_id: s_ZzqDNEVHMHtbmDVZLeRVV7
          stance: supports
          locator: CBDB:210110
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_79CerOBy1iplofU2Cyb-oP
        subject_person_id: p_rn5bs45vsLNkK5gzRaTQ98
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M4sMGFN7u37UT1UMQi22nH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GtkeYtlbcJ4c5mE56tE961
          claim_id: c_79CerOBy1iplofU2Cyb-oP
          source_id: s_7kTboE3Ex7ktEe1vdOrdu3
          stance: supports
          locator: CBDB：兄弟 王炳衡（126591）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王炳權 与 王炳衡 为同胞（CBDB 记「兄」），王炳衡 之父／母即 王炳權 之父／母。
          source:
            id: s_7kTboE3Ex7ktEe1vdOrdu3
            source_type: api_record
            title: 中国历代人物传记资料库：王炳權（CBDB 210110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210110&o=json
            external_identifier: CBDB:210110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rn5bs45vsLNkK5gzRaTQ98
        status: active
        display_name: 王法
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FgO579J7bf-MW-CZLzViKv
        subject_person_id: p_8fDiA64i7XEi5BnTAt9qhu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_M4sMGFN7u37UT1UMQi22nH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OsYYm7oLctJ8y1jUllnwbz
          claim_id: c_FgO579J7bf-MW-CZLzViKv
          source_id: s_7kTboE3Ex7ktEe1vdOrdu3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126591 王炳衡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7kTboE3Ex7ktEe1vdOrdu3
            source_type: api_record
            title: 中国历代人物传记资料库：王炳權（CBDB 210110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210110&o=json
            external_identifier: CBDB:210110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8fDiA64i7XEi5BnTAt9qhu
        status: active
        display_name: 王炳衡
        merged_into_person_id: null
    - claim:
        id: c_uwV1J53wskd9Dbd4xVzSN2
        subject_person_id: p_BSK3JVZbYgKQNPmF9hrz5q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_M4sMGFN7u37UT1UMQi22nH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U8p1dG35vQQh19lS4509WB
          claim_id: c_uwV1J53wskd9Dbd4xVzSN2
          source_id: s_7kTboE3Ex7ktEe1vdOrdu3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126592 王炳璿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7kTboE3Ex7ktEe1vdOrdu3
            source_type: api_record
            title: 中国历代人物传记资料库：王炳權（CBDB 210110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210110&o=json
            external_identifier: CBDB:210110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BSK3JVZbYgKQNPmF9hrz5q
        status: active
        display_name: 王炳璿
        merged_into_person_id: null
---

# 王炳權

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王炳權，明人物。隆慶五年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 210110） | accepted |
| name.primary | 王炳權 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rn5bs45vsLNkK5gzRaTQ98 | 王法 | accepted |
| other | p_8fDiA64i7XEi5BnTAt9qhu | 王炳衡 | accepted |
| other | p_BSK3JVZbYgKQNPmF9hrz5q | 王炳璿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王炳權（CBDB 210110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210110&o=json)
