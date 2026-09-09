---
schema: wang-person/v1
id: p_hfCGYE9t8CZi8LEbQZDGpq
status: active
merged_into: null
display_name: 王復
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mbP361KVTDNd4v93mXWQxN
        subject_person_id: p_hfCGYE9t8CZi8LEbQZDGpq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uiQqbnJpiHM9ij789bnyyB
          claim_id: c_mbP361KVTDNd4v93mXWQxN
          source_id: s_iWdwSXWC2jGtBLDcXJa14B
          stance: supports
          locator: CBDB:38557
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38557）
          source: &a1
            id: s_iWdwSXWC2jGtBLDcXJa14B
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 38557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38557&o=json
            external_identifier: CBDB:38557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.511Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ogbBKX2Vtx8BdPU3YGWJX7
        subject_person_id: p_hfCGYE9t8CZi8LEbQZDGpq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1269年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3aNwM6ZmG8N9X8LHG2LJ1M
          claim_id: c_ogbBKX2Vtx8BdPU3YGWJX7
          source_id: s_iWdwSXWC2jGtBLDcXJa14B
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GyjwVuUuW91Fa3DptnP9Lt
        subject_person_id: p_hfCGYE9t8CZi8LEbQZDGpq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1bD7jqUMnxvGfCoKFWnGhR
          claim_id: c_GyjwVuUuW91Fa3DptnP9Lt
          source_id: s_iWdwSXWC2jGtBLDcXJa14B
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

# 王復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復 | accepted |
| death.date | 1269年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王復（CBDB 38557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38557&o=json)
