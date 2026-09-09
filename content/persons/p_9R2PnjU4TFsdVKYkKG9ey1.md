---
schema: wang-person/v1
id: p_9R2PnjU4TFsdVKYkKG9ey1
status: active
merged_into: null
display_name: 王師
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B6Z9sDr8Z74q1L8C7R5nSv
        subject_person_id: p_9R2PnjU4TFsdVKYkKG9ey1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SnQ6THp39X6S18ggQ99H54
          claim_id: c_B6Z9sDr8Z74q1L8C7R5nSv
          source_id: s_4GMYnMdeW3aw1wHLc1HKGC
          stance: supports
          locator: CBDB:140308
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140308）
          source: &a1
            id: s_4GMYnMdeW3aw1wHLc1HKGC
            source_type: api_record
            title: 中国历代人物传记资料库：王師（CBDB 140308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140308&o=json
            external_identifier: CBDB:140308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.492Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_p34wFLrYT3B8cJeSkrWTcj
        subject_person_id: p_9R2PnjU4TFsdVKYkKG9ey1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 615年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MavFydyEKUtZTGHmZwDiky
          claim_id: c_p34wFLrYT3B8cJeSkrWTcj
          source_id: s_4GMYnMdeW3aw1wHLc1HKGC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_3J6HMa5t6fpVn6RVFe56Df
        subject_person_id: p_9R2PnjU4TFsdVKYkKG9ey1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 670年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RgM8pUUUDLfDBvYR87kL2B
          claim_id: c_3J6HMa5t6fpVn6RVFe56Df
          source_id: s_4GMYnMdeW3aw1wHLc1HKGC
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
        id: c_cvGWe9iZs453ey4NqKdJ6K
        subject_person_id: p_9R2PnjU4TFsdVKYkKG9ey1
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
        - id: cs_Kr9vkUuaBtx8aHACKZYFoo
          claim_id: c_cvGWe9iZs453ey4NqKdJ6K
          source_id: s_4GMYnMdeW3aw1wHLc1HKGC
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

# 王師

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師 | accepted |
| birth.date | 615年 | accepted |
| death.date | 670年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師（CBDB 140308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140308&o=json)
