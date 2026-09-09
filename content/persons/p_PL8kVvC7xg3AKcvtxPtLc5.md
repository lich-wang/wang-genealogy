---
schema: wang-person/v1
id: p_PL8kVvC7xg3AKcvtxPtLc5
status: active
merged_into: null
display_name: 王鎮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZY1rn6bDR41zasctzRyECF
        subject_person_id: p_PL8kVvC7xg3AKcvtxPtLc5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yo4K1gRro4YYK2UYRd4CB3
          claim_id: c_ZY1rn6bDR41zasctzRyECF
          source_id: s_LLXwbnLM56rnHZi8RZ1em6
          stance: supports
          locator: CBDB:380798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（380798）
          source: &a1
            id: s_LLXwbnLM56rnHZi8RZ1em6
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 380798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380798&o=json
            external_identifier: CBDB:380798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.738Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QPenPcurwMjLpQj1zc9jzM
        subject_person_id: p_PL8kVvC7xg3AKcvtxPtLc5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PWp7Ysh1yXbAFHxESfL5mJ
          claim_id: c_QPenPcurwMjLpQj1zc9jzM
          source_id: s_LLXwbnLM56rnHZi8RZ1em6
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

# 王鎮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎮（CBDB 380798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380798&o=json)
