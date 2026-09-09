---
schema: wang-person/v1
id: p_xEaM4rQjPe4K8sfc4d25cu
status: active
merged_into: null
display_name: 王耀曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1cyQ17RR81v3KXZYwAR4N8
        subject_person_id: p_xEaM4rQjPe4K8sfc4d25cu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耀曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6MG1RoM5uTFsYDTxRXdpSD
          claim_id: c_1cyQ17RR81v3KXZYwAR4N8
          source_id: s_1vcnqJmutMdmJXi9xTQQ5b
          stance: supports
          locator: CBDB:72222
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72222）
          source: &a1
            id: s_1vcnqJmutMdmJXi9xTQQ5b
            source_type: api_record
            title: 中国历代人物传记资料库：王耀曾（CBDB 72222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72222&o=json
            external_identifier: CBDB:72222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.056Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vda3P6vU751Rx5CXuT9Xt5
        subject_person_id: p_xEaM4rQjPe4K8sfc4d25cu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1852年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NHXHZ5LhWauP9qMcQYWzjB
          claim_id: c_vda3P6vU751Rx5CXuT9Xt5
          source_id: s_1vcnqJmutMdmJXi9xTQQ5b
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HyurkdqQqGd6LH5mKUVPBU
        subject_person_id: p_xEaM4rQjPe4K8sfc4d25cu
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
        - id: cs_ZKL1sqF8CHzi7hVLQYr8DU
          claim_id: c_HyurkdqQqGd6LH5mKUVPBU
          source_id: s_1vcnqJmutMdmJXi9xTQQ5b
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

# 王耀曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王耀曾 | accepted |
| birth.date | 1852年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王耀曾（CBDB 72222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72222&o=json)
