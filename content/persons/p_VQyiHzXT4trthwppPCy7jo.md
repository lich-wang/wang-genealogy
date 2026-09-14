---
schema: wang-person/v1
id: p_VQyiHzXT4trthwppPCy7jo
status: active
merged_into: null
display_name: 王垌
cbdb_id: 273956
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R5oNFDWLLiNYL48Zw8JFjM
        subject_person_id: p_VQyiHzXT4trthwppPCy7jo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垌，明人物。弘治十八年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 273956）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_QMzK23gtZWYO6romvQbDsm
          claim_id: c_R5oNFDWLLiNYL48Zw8JFjM
          source_id: s_rEomP6zMEcgusMQEdD7xAZ
          stance: supports
          locator: CBDB:273956
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rEomP6zMEcgusMQEdD7xAZ
            source_type: api_record
            title: 中国历代人物传记资料库：王垌（CBDB 273956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273956&o=json
            external_identifier: CBDB:273956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eyy5KVQFTqrhY5yVAzzWfk
        subject_person_id: p_VQyiHzXT4trthwppPCy7jo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_44WNjAgt79zUWAsGsThfBY
          claim_id: c_eyy5KVQFTqrhY5yVAzzWfk
          source_id: s_rEomP6zMEcgusMQEdD7xAZ
          stance: supports
          locator: CBDB:273956
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2ANKRL27xLjYXAFc6Zv46D
        subject_person_id: p_w5pNEVYCVJAEuFuR4sLpcJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VQyiHzXT4trthwppPCy7jo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tR7WD2mGFAvt7IzrjI-768
          claim_id: c_2ANKRL27xLjYXAFc6Zv46D
          source_id: s_DmDdGeTx3TE0RF8j-ijpDd
          stance: supports
          locator: CBDB：兄弟 王坊（201535）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王垌 与 王坊 为同胞（CBDB 记「兄」），王坊 之父／母即 王垌 之父／母。
          source:
            id: s_DmDdGeTx3TE0RF8j-ijpDd
            source_type: api_record
            title: 中国历代人物传记资料库：王垌（CBDB 273956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273956&o=json
            external_identifier: CBDB:273956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w5pNEVYCVJAEuFuR4sLpcJ
        status: active
        display_name: 王弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_I4M4akrbk06Dti_P4Qln-Z
        subject_person_id: p_VQyiHzXT4trthwppPCy7jo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mXq9uxGc8pg1wHpdoUPQx2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RMvx-ybYk1Af59DEkHp1ot
          claim_id: c_I4M4akrbk06Dti_P4Qln-Z
          source_id: s_DmDdGeTx3TE0RF8j-ijpDd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201535 王坊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DmDdGeTx3TE0RF8j-ijpDd
            source_type: api_record
            title: 中国历代人物传记资料库：王垌（CBDB 273956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273956&o=json
            external_identifier: CBDB:273956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mXq9uxGc8pg1wHpdoUPQx2
        status: active
        display_name: 王坊
        merged_into_person_id: null
---

# 王垌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王垌，明人物。弘治十八年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 273956） | accepted |
| name.primary | 王垌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_w5pNEVYCVJAEuFuR4sLpcJ | 王弼 | accepted |
| other | p_mXq9uxGc8pg1wHpdoUPQx2 | 王坊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王垌（CBDB 273956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273956&o=json)
