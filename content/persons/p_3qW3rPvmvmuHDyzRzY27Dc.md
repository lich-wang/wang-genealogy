---
schema: wang-person/v1
id: p_3qW3rPvmvmuHDyzRzY27Dc
status: active
merged_into: null
display_name: 王暐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4dWo4AtSMZYGUVBawy3J43
        subject_person_id: p_3qW3rPvmvmuHDyzRzY27Dc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FEQLTvGUQmz4mbJg5tmgCy
          claim_id: c_4dWo4AtSMZYGUVBawy3J43
          source_id: s_9MH82C6yzXYvU5ktfBAM6F
          stance: supports
          locator: CBDB:175820
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175820）
          source: &a1
            id: s_9MH82C6yzXYvU5ktfBAM6F
            source_type: api_record
            title: 中国历代人物传记资料库：王暐（CBDB 175820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175820&o=json
            external_identifier: CBDB:175820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.142Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JxZn4PoLSYM4dMhEo3ah41
        subject_person_id: p_3qW3rPvmvmuHDyzRzY27Dc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 781年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rdo9CmFXdT6b6tn4ixM6tE
          claim_id: c_JxZn4PoLSYM4dMhEo3ah41
          source_id: s_9MH82C6yzXYvU5ktfBAM6F
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
        id: c_T8fjsjZy46AEpcuDdLBxP3
        subject_person_id: p_3qW3rPvmvmuHDyzRzY27Dc
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
        - id: cs_KzxChhmFYa8HNBq28Zoebv
          claim_id: c_T8fjsjZy46AEpcuDdLBxP3
          source_id: s_9MH82C6yzXYvU5ktfBAM6F
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

# 王暐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王暐 | accepted |
| death.date | 781年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王暐（CBDB 175820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175820&o=json)
