---
schema: wang-person/v1
id: p_ckGFfMbHQMMKR94RfeYPgD
status: active
merged_into: null
display_name: 王執經
cbdb_id: 330526
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ctW1PLV4VasyC2qK8NxtnM
        subject_person_id: p_ckGFfMbHQMMKR94RfeYPgD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王執經，明人物。嘉靖四十四年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 330526）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_d8WCqkkev1tFy_HklZEe2k
          claim_id: c_ctW1PLV4VasyC2qK8NxtnM
          source_id: s_AUEfLRehTktT2DAE5JuSSZ
          stance: supports
          locator: CBDB:330526
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_AUEfLRehTktT2DAE5JuSSZ
            source_type: api_record
            title: 中国历代人物传记资料库：王執經（CBDB 330526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330526&o=json
            external_identifier: CBDB:330526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dsf3eao3HnogPXEAQTQyzj
        subject_person_id: p_ckGFfMbHQMMKR94RfeYPgD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王執經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rNWBFuEjuPquyGY2xaMDpB
          claim_id: c_dsf3eao3HnogPXEAQTQyzj
          source_id: s_AUEfLRehTktT2DAE5JuSSZ
          stance: supports
          locator: CBDB:330526
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_00q-xnVoQ3SFb5WY_Elnwz
        subject_person_id: p_u84RG1pPeLw4QLHw6xBnkL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ckGFfMbHQMMKR94RfeYPgD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kfj-Ud9GqlW4OpKrhjLttj
          claim_id: c_00q-xnVoQ3SFb5WY_Elnwz
          source_id: s_ziWtl1Br-g6oJIQ5ImyT-b
          stance: supports
          locator: CBDB：兄弟 王執禮（126683）之父／母 王可大
          quotation: null
          interpretation_note: 由兄弟关系推断：王執經 与 王執禮 为同胞（CBDB 记「兄」），王執禮 之父／母即 王執經 之父／母。
          source:
            id: s_ziWtl1Br-g6oJIQ5ImyT-b
            source_type: api_record
            title: 中国历代人物传记资料库：王執經（CBDB 330526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330526&o=json
            external_identifier: CBDB:330526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_u84RG1pPeLw4QLHw6xBnkL
        status: active
        display_name: 王可大
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_JeEUEeWjBafcQLz9m4rIGs
        subject_person_id: p_ckGFfMbHQMMKR94RfeYPgD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hwqZhRmhj6vWvdBxFiX9dy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7UtG0rtZFnnLBL3lmU21zk
          claim_id: c_JeEUEeWjBafcQLz9m4rIGs
          source_id: s_ziWtl1Br-g6oJIQ5ImyT-b
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126683 王執禮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ziWtl1Br-g6oJIQ5ImyT-b
            source_type: api_record
            title: 中国历代人物传记资料库：王執經（CBDB 330526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330526&o=json
            external_identifier: CBDB:330526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hwqZhRmhj6vWvdBxFiX9dy
        status: active
        display_name: 王執禮
        merged_into_person_id: null
---

# 王執經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王執經，明人物。嘉靖四十四年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 330526） | accepted |
| name.primary | 王執經 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_u84RG1pPeLw4QLHw6xBnkL | 王可大 | accepted |
| other | p_hwqZhRmhj6vWvdBxFiX9dy | 王執禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王執經（CBDB 330526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330526&o=json)
