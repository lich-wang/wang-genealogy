---
schema: wang-person/v1
id: p_bRHrDR8NYZKkW4VyQ8RSmV
status: active
merged_into: null
display_name: 王崈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wGh9oqHm3mKKnafLd7v2qi
        subject_person_id: p_bRHrDR8NYZKkW4VyQ8RSmV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P28AXCFnf1KwLZtAmZsJQB
          claim_id: c_wGh9oqHm3mKKnafLd7v2qi
          source_id: s_RHYeZ5xUR5nikw6L7fgkVF
          stance: supports
          locator: CBDB:253494
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253494）
          source: &a1
            id: s_RHYeZ5xUR5nikw6L7fgkVF
            source_type: api_record
            title: 中国历代人物传记资料库：王崈（CBDB 253494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253494&o=json
            external_identifier: CBDB:253494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.302Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mj9y6PjJVGeA8DKJPfyFQy
        subject_person_id: p_bRHrDR8NYZKkW4VyQ8RSmV
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
        - id: cs_Ex6VPxbNRaMkLxx6HwRkWS
          claim_id: c_mj9y6PjJVGeA8DKJPfyFQy
          source_id: s_RHYeZ5xUR5nikw6L7fgkVF
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

# 王崈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崈 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崈（CBDB 253494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253494&o=json)
