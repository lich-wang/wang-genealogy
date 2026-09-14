---
schema: wang-person/v1
id: p_6xoDhEeUc4DrFbTWjXFWRL
status: active
merged_into: null
display_name: 王鍈
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jmw3fu7fqAqKsryFpCP1ZY
        subject_person_id: p_6xoDhEeUc4DrFbTWjXFWRL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9JE6Q3rbo3iLvugC4Mwgmt
          claim_id: c_Jmw3fu7fqAqKsryFpCP1ZY
          source_id: s_Z7QHbBHUcskaJdkDRXctDF
          stance: supports
          locator: CBDB:252704
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（252704）
          source: &a1
            id: s_Z7QHbBHUcskaJdkDRXctDF
            source_type: api_record
            title: 中国历代人物传记资料库：王鍈（CBDB 252704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252704&o=json
            external_identifier: CBDB:252704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.278Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MJsuz9FSWVLUxWHRtJXxoJ
        subject_person_id: p_6xoDhEeUc4DrFbTWjXFWRL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍈，明人物。成化十四年進士，籍贯大寧中衛。（中国历代人物传记资料库 CBDB 252704）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gkFzAeMH4rM33xcH4_2Hob
          claim_id: c_MJsuz9FSWVLUxWHRtJXxoJ
          source_id: s_Z7QHbBHUcskaJdkDRXctDF
          stance: supports
          locator: CBDB:252704
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5YFH0vroxcteNE7mKbcit0
        subject_person_id: p_jrr2Fwz4x5hKA8iAkHGgin
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6xoDhEeUc4DrFbTWjXFWRL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_52StUz2uUt8vF2MJN_nFUy
          claim_id: c_5YFH0vroxcteNE7mKbcit0
          source_id: s_bJbkAbs9qdhi3Ju8JQ2fYk
          stance: supports
          locator: CBDB：兄弟 王鉉（200018）之父／母 王文信
          quotation: null
          interpretation_note: 由兄弟关系推断：王鍈 与 王鉉 为同胞（CBDB 记「兄」），王鉉 之父／母即 王鍈 之父／母。
          source:
            id: s_bJbkAbs9qdhi3Ju8JQ2fYk
            source_type: api_record
            title: 中国历代人物传记资料库：王鍈（CBDB 252704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252704&o=json
            external_identifier: CBDB:252704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jrr2Fwz4x5hKA8iAkHGgin
        status: active
        display_name: 王文信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_n9NMaGmc6sry6DID2DFPyi
        subject_person_id: p_2LCs128HMx8dbvsEorc8ou
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_6xoDhEeUc4DrFbTWjXFWRL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WP_lhsqG8gOvaot1iE_sR0
          claim_id: c_n9NMaGmc6sry6DID2DFPyi
          source_id: s_bJbkAbs9qdhi3Ju8JQ2fYk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200018 王鉉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bJbkAbs9qdhi3Ju8JQ2fYk
            source_type: api_record
            title: 中国历代人物传记资料库：王鍈（CBDB 252704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252704&o=json
            external_identifier: CBDB:252704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2LCs128HMx8dbvsEorc8ou
        status: active
        display_name: 王鉉
        merged_into_person_id: null
---

# 王鍈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍈 | accepted |
| bio.summary | 王鍈，明人物。成化十四年進士，籍贯大寧中衛。（中国历代人物传记资料库 CBDB 252704） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jrr2Fwz4x5hKA8iAkHGgin | 王文信 | accepted |
| other | p_2LCs128HMx8dbvsEorc8ou | 王鉉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鍈（CBDB 252704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252704&o=json)
