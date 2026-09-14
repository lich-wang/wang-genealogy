---
schema: wang-person/v1
id: p_6WucMbhkQXJwBzBACZWi7R
status: active
merged_into: null
display_name: 王淑通
cbdb_id: 331192
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_owiQbBQdtDzH8ug763umTL
        subject_person_id: p_6WucMbhkQXJwBzBACZWi7R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑通，明人物。嘉靖四十四年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 331192）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_9Wgt6VoH_pNmRjHFdbYSeR
          claim_id: c_owiQbBQdtDzH8ug763umTL
          source_id: s_FFCYEXxMtVZSLqwaBwsQpu
          stance: supports
          locator: CBDB:331192
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FFCYEXxMtVZSLqwaBwsQpu
            source_type: api_record
            title: 中国历代人物传记资料库：王淑通（CBDB 331192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331192&o=json
            external_identifier: CBDB:331192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oPNPMscg4E5esQ36vUNbH1
        subject_person_id: p_6WucMbhkQXJwBzBACZWi7R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AWrga48J8WWeGVg5fcZG7G
          claim_id: c_oPNPMscg4E5esQ36vUNbH1
          source_id: s_FFCYEXxMtVZSLqwaBwsQpu
          stance: supports
          locator: CBDB:331192
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1pgQ_BiqV-ORZOjAmWusdu
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6WucMbhkQXJwBzBACZWi7R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wUAk71SpACsh02vyolT84x
          claim_id: c_1pgQ_BiqV-ORZOjAmWusdu
          source_id: s_ETvtZ7dZqE2-mIsRWlgroh
          stance: supports
          locator: CBDB：兄弟 王淑陵（205297）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王淑通 与 王淑陵 为同胞（CBDB 记「兄」），王淑陵 之父／母即 王淑通 之父／母。
          source:
            id: s_ETvtZ7dZqE2-mIsRWlgroh
            source_type: api_record
            title: 中国历代人物传记资料库：王淑通（CBDB 331192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331192&o=json
            external_identifier: CBDB:331192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vQ7CxFfVeDD5gVP5SnofRA
        status: active
        display_name: 王言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_7octT3BWpnnQQ99WNV4Ruy
        subject_person_id: p_6WucMbhkQXJwBzBACZWi7R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hcKvf5FLdEWFTkVQ2RFjN8
          claim_id: c_7octT3BWpnnQQ99WNV4Ruy
          source_id: s_ETvtZ7dZqE2-mIsRWlgroh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205297 王淑陵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ETvtZ7dZqE2-mIsRWlgroh
            source_type: api_record
            title: 中国历代人物传记资料库：王淑通（CBDB 331192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331192&o=json
            external_identifier: CBDB:331192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Tffvt8PaRx7qSEiYdDgfFH
        status: active
        display_name: 王淑陵
        merged_into_person_id: null
---

# 王淑通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王淑通，明人物。嘉靖四十四年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 331192） | accepted |
| name.primary | 王淑通 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vQ7CxFfVeDD5gVP5SnofRA | 王言 | accepted |
| other | p_Tffvt8PaRx7qSEiYdDgfFH | 王淑陵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淑通（CBDB 331192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331192&o=json)
