---
schema: wang-person/v1
id: p_Kebu9paBMzhwM6J5F5Feut
status: active
merged_into: null
display_name: 王九峰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BH2Db6JWBqUQ3EfQs3opQ6
        subject_person_id: p_Kebu9paBMzhwM6J5F5Feut
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九峰
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cLNHDPVHFfWQAGg9FgziCd
          claim_id: c_BH2Db6JWBqUQ3EfQs3opQ6
          source_id: s_c7mUForCVG1hqo3LZL6fs8
          stance: supports
          locator: CBDB:268144
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（268144）
          source: &a1
            id: s_c7mUForCVG1hqo3LZL6fs8
            source_type: api_record
            title: 中国历代人物传记资料库：王九峰（CBDB 268144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268144&o=json
            external_identifier: CBDB:268144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HBF18tyjYRJ89BdUm3Ruo9
        subject_person_id: p_Kebu9paBMzhwM6J5F5Feut
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
        - id: cs_r5KFAxtWGPmenHDvwW1JX7
          claim_id: c_HBF18tyjYRJ89BdUm3Ruo9
          source_id: s_c7mUForCVG1hqo3LZL6fs8
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

# 王九峰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九峰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九峰（CBDB 268144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268144&o=json)
