---
schema: wang-person/v1
id: p_e66TrFhjcAGLAzEgGsqu9m
status: active
merged_into: null
display_name: 王念祖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NFE5jq7Nj1xZzBL6Doys4M
        subject_person_id: p_e66TrFhjcAGLAzEgGsqu9m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王念祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GA993bDS4mtKEyqt41NFoJ
          claim_id: c_NFE5jq7Nj1xZzBL6Doys4M
          source_id: s_Vut5b8Mf5vqcTeMDz983WJ
          stance: supports
          locator: CBDB:300375
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（300375）
          source: &a1
            id: s_Vut5b8Mf5vqcTeMDz983WJ
            source_type: api_record
            title: 中国历代人物传记资料库：王念祖（CBDB 300375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300375&o=json
            external_identifier: CBDB:300375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BhacBmQN327LewPFvDEU6n
        subject_person_id: p_e66TrFhjcAGLAzEgGsqu9m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王念祖，明人物。嘉靖十七年進士，籍贯嵊縣。（中国历代人物传记资料库 CBDB 300375）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X_W6FzpFLzEQ2SyRh9ypmP
          claim_id: c_BhacBmQN327LewPFvDEU6n
          source_id: s_Vut5b8Mf5vqcTeMDz983WJ
          stance: supports
          locator: CBDB:300375
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_M8gqdcARxLE60AwF9xYM_Q
        subject_person_id: p_B2bBEtj4zAmwMdnWXTzqPS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e66TrFhjcAGLAzEgGsqu9m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v-tzHNTspkqp_bwLV32fTl
          claim_id: c_M8gqdcARxLE60AwF9xYM_Q
          source_id: s_3tKCgN6vdCGhXfE_O3iljJ
          stance: supports
          locator: CBDB：兄弟 王炯（203137）之父／母 王木
          quotation: null
          interpretation_note: 由兄弟关系推断：王念祖 与 王炯 为同胞（CBDB 记「弟」），王炯 之父／母即 王念祖 之父／母。
          source:
            id: s_3tKCgN6vdCGhXfE_O3iljJ
            source_type: api_record
            title: 中国历代人物传记资料库：王念祖（CBDB 300375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300375&o=json
            external_identifier: CBDB:300375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_B2bBEtj4zAmwMdnWXTzqPS
        status: active
        display_name: 王木
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Pi1erY7TXLqp2tDpL0VZbS
        subject_person_id: p_e66TrFhjcAGLAzEgGsqu9m
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sSGZsmVuWDC2RLoBps8cmA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tafyjBumiZOUp0UV2tzY4V
          claim_id: c_Pi1erY7TXLqp2tDpL0VZbS
          source_id: s_3tKCgN6vdCGhXfE_O3iljJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203137 王炯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3tKCgN6vdCGhXfE_O3iljJ
            source_type: api_record
            title: 中国历代人物传记资料库：王念祖（CBDB 300375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300375&o=json
            external_identifier: CBDB:300375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sSGZsmVuWDC2RLoBps8cmA
        status: active
        display_name: 王炯
        merged_into_person_id: null
---

# 王念祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王念祖 | accepted |
| bio.summary | 王念祖，明人物。嘉靖十七年進士，籍贯嵊縣。（中国历代人物传记资料库 CBDB 300375） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B2bBEtj4zAmwMdnWXTzqPS | 王木 | accepted |
| other | p_sSGZsmVuWDC2RLoBps8cmA | 王炯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王念祖（CBDB 300375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300375&o=json)
