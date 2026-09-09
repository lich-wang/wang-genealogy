---
schema: wang-person/v1
id: p_6m7dwNbvw8h2C8S8evd2Ai
status: active
merged_into: null
display_name: 王植
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cuP3xYmypEzpzQFXA5w9mN
        subject_person_id: p_6m7dwNbvw8h2C8S8evd2Ai
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王植
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HrRyV2GWNEL6fsjsc8uVnt
          claim_id: c_cuP3xYmypEzpzQFXA5w9mN
          source_id: s_2FVd7hPCmma7PEMdjHegty
          stance: supports
          locator: CBDB:343222
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343222）
          source: &a1
            id: s_2FVd7hPCmma7PEMdjHegty
            source_type: api_record
            title: 中国历代人物传记资料库：王植（CBDB 343222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343222&o=json
            external_identifier: CBDB:343222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.246Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sYTzJCpZ66YTQYUNFXj1yB
        subject_person_id: p_6m7dwNbvw8h2C8S8evd2Ai
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_76FnCajfA4tvYCfXhKiJnm
          claim_id: c_sYTzJCpZ66YTQYUNFXj1yB
          source_id: s_2FVd7hPCmma7PEMdjHegty
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
  descendants: []
  other: []
---

# 王植

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王植 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王植（CBDB 343222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343222&o=json)
