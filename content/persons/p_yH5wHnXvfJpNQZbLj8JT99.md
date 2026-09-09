---
schema: wang-person/v1
id: p_yH5wHnXvfJpNQZbLj8JT99
status: active
merged_into: null
display_name: 王師説
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qk6SK1T5N8mcFiNui8LPK8
        subject_person_id: p_yH5wHnXvfJpNQZbLj8JT99
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師説
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PdaVZhgL2KhowrtxuD94Fd
          claim_id: c_qk6SK1T5N8mcFiNui8LPK8
          source_id: s_Gy26s3dk4rjLQFF6gmwuNT
          stance: supports
          locator: CBDB:535971
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（535971）
          source: &a1
            id: s_Gy26s3dk4rjLQFF6gmwuNT
            source_type: api_record
            title: 中国历代人物传记资料库：王師説（CBDB 535971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=535971&o=json
            external_identifier: CBDB:535971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.401Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7LS5fn6Q8B6Cp54j6FGC5v
        subject_person_id: p_yH5wHnXvfJpNQZbLj8JT99
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
        - id: cs_JSnL42VS7VVg8SfpQxV1MR
          claim_id: c_7LS5fn6Q8B6Cp54j6FGC5v
          source_id: s_Gy26s3dk4rjLQFF6gmwuNT
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

# 王師説

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師説 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師説（CBDB 535971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=535971&o=json)
