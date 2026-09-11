---
schema: wang-person/v1
id: p_dG1qVyR3CcDvrMD78uYNRN
status: active
merged_into: null
display_name: 王英
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N7bVD5Q369ebj7dwCXEMU4
        subject_person_id: p_dG1qVyR3CcDvrMD78uYNRN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p1voyCxj2Dy4J26272BVpZ
          claim_id: c_N7bVD5Q369ebj7dwCXEMU4
          source_id: s_Q6GzvHPVaQ2rvxdKvmhtJh
          stance: supports
          locator: CBDB:282423
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282423）
          source: &a1
            id: s_Q6GzvHPVaQ2rvxdKvmhtJh
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 282423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282423&o=json
            external_identifier: CBDB:282423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.083Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NyXBtVdAcdG8sJVcMBPYrP
        subject_person_id: p_dG1qVyR3CcDvrMD78uYNRN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jBd6qESFshvLtXjJZranWU
          claim_id: c_NyXBtVdAcdG8sJVcMBPYrP
          source_id: s_Q6GzvHPVaQ2rvxdKvmhtJh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Q9aG9mED5Wy781DbDXmd9u
        subject_person_id: p_dG1qVyR3CcDvrMD78uYNRN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gAAfv7JQBPfPSFmCq4BBah
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tLG72uccjp0dJ73UZe971q
          claim_id: c_Q9aG9mED5Wy781DbDXmd9u
          source_id: s_Q6GzvHPVaQ2rvxdKvmhtJh
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百七十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gAAfv7JQBPfPSFmCq4BBah
        status: active
        display_name: 王天民
        merged_into_person_id: null
  other: []
---

# 王英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_gAAfv7JQBPfPSFmCq4BBah | 王天民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王英（CBDB 282423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282423&o=json)
