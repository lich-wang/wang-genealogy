---
schema: wang-person/v1
id: p_ZUSeBf3bwunYCNX9U7KU7r
status: active
merged_into: null
display_name: 王汝良
cbdb_id: 265940
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F21nNhUobuJQ1qdWKFpQ42
        subject_person_id: p_ZUSeBf3bwunYCNX9U7KU7r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝良，明人物。弘治六年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 265940）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_pePK25Je2WAPpqxT5F_sdi
          claim_id: c_F21nNhUobuJQ1qdWKFpQ42
          source_id: s_4NKo1WXMt5AeF3gxUW6bMz
          stance: supports
          locator: CBDB:265940
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4NKo1WXMt5AeF3gxUW6bMz
            source_type: api_record
            title: 中国历代人物传记资料库：王汝良（CBDB 265940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265940&o=json
            external_identifier: CBDB:265940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7cyU85WQaZm7BoZLEPgXiN
        subject_person_id: p_ZUSeBf3bwunYCNX9U7KU7r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GGUzf4qs45TevNQKKWR92R
          claim_id: c_7cyU85WQaZm7BoZLEPgXiN
          source_id: s_4NKo1WXMt5AeF3gxUW6bMz
          stance: supports
          locator: CBDB:265940
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GGp23UejUDJvAWTwWBpwHx
        subject_person_id: p_czhtiwqBMu1RGkzhciwNgo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZUSeBf3bwunYCNX9U7KU7r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qXyrZPNJKbklZopzkfHsbS
          claim_id: c_GGp23UejUDJvAWTwWBpwHx
          source_id: s_BDhXSI5eTq1K4O-pEQSiw3
          stance: supports
          locator: CBDB：兄弟 王德（201011）之父／母 王昌
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝良 与 王德 为同胞（CBDB 记「弟」），王德 之父／母即 王汝良 之父／母。
          source:
            id: s_BDhXSI5eTq1K4O-pEQSiw3
            source_type: api_record
            title: 中国历代人物传记资料库：王汝良（CBDB 265940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265940&o=json
            external_identifier: CBDB:265940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_czhtiwqBMu1RGkzhciwNgo
        status: active
        display_name: 王昌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Tz992iCoSaMyeB_wZs_kfc
        subject_person_id: p_ZUSeBf3bwunYCNX9U7KU7r
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bVh1otR2HH59HH7rfKSMH9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i5rSOZ7WKxdpcn16w6hu97
          claim_id: c_Tz992iCoSaMyeB_wZs_kfc
          source_id: s_BDhXSI5eTq1K4O-pEQSiw3
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201011 王德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BDhXSI5eTq1K4O-pEQSiw3
            source_type: api_record
            title: 中国历代人物传记资料库：王汝良（CBDB 265940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265940&o=json
            external_identifier: CBDB:265940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bVh1otR2HH59HH7rfKSMH9
        status: active
        display_name: 王德
        merged_into_person_id: null
---

# 王汝良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝良，明人物。弘治六年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 265940） | accepted |
| name.primary | 王汝良 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_czhtiwqBMu1RGkzhciwNgo | 王昌 | accepted |
| other | p_bVh1otR2HH59HH7rfKSMH9 | 王德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝良（CBDB 265940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265940&o=json)
