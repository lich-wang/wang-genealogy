---
schema: wang-person/v1
id: p_6GfcoaCQXYnuXJ4AhCP9h6
status: active
merged_into: null
display_name: 王玢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Ja7TD4BVg64BZpn3QXumx
        subject_person_id: p_6GfcoaCQXYnuXJ4AhCP9h6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EjTpQTPBLrDeQ7QMRELDD1
          claim_id: c_2Ja7TD4BVg64BZpn3QXumx
          source_id: s_2zpcfvCRMMXS6EoUaCajEs
          stance: supports
          locator: CBDB:175849
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175849）
          source: &a1
            id: s_2zpcfvCRMMXS6EoUaCajEs
            source_type: api_record
            title: 中国历代人物传记资料库：王玢（CBDB 175849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175849&o=json
            external_identifier: CBDB:175849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ZS4QDBi6c1bV1gNevTzsmH
        subject_person_id: p_6GfcoaCQXYnuXJ4AhCP9h6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 778年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8NZBXsxeJmTfvB7PD4V7FX
          claim_id: c_ZS4QDBi6c1bV1gNevTzsmH
          source_id: s_2zpcfvCRMMXS6EoUaCajEs
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
        id: c_Raq7jw12HUAsRC2o216ZET
        subject_person_id: p_6GfcoaCQXYnuXJ4AhCP9h6
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
        - id: cs_4o6sGS6von7nxa5e6ttFHW
          claim_id: c_Raq7jw12HUAsRC2o216ZET
          source_id: s_2zpcfvCRMMXS6EoUaCajEs
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

# 王玢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玢 | accepted |
| death.date | 778年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玢（CBDB 175849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175849&o=json)
