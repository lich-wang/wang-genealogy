---
schema: wang-person/v1
id: p_47f1Ba7VVDDa5PcGfQF6og
status: active
merged_into: null
display_name: 王暕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JWcApCfa3u45a5xQDSF4dY
        subject_person_id: p_47f1Ba7VVDDa5PcGfQF6og
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zP8yFg3ibr7KVhfgG32FER
          claim_id: c_JWcApCfa3u45a5xQDSF4dY
          source_id: s_g3GcLBSMEQ5uUjjMXFn9hN
          stance: supports
          locator: CBDB:38958
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38958）
          source: &a1
            id: s_g3GcLBSMEQ5uUjjMXFn9hN
            source_type: api_record
            title: 中国历代人物传记资料库：王暕（CBDB 38958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38958&o=json
            external_identifier: CBDB:38958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.569Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uLm4Eq8SkECKxmRc4eJrBr
        subject_person_id: p_47f1Ba7VVDDa5PcGfQF6og
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1069年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H5dKKK5ZNNC6vi3zQj18NG
          claim_id: c_uLm4Eq8SkECKxmRc4eJrBr
          source_id: s_g3GcLBSMEQ5uUjjMXFn9hN
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
        id: c_9HkH1T6bYFnqNSBXP3MrwN
        subject_person_id: p_47f1Ba7VVDDa5PcGfQF6og
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
        - id: cs_KDkMNfbbPJXZAENQNDy3Rb
          claim_id: c_9HkH1T6bYFnqNSBXP3MrwN
          source_id: s_g3GcLBSMEQ5uUjjMXFn9hN
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

# 王暕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王暕 | accepted |
| death.date | 1069年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王暕（CBDB 38958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38958&o=json)
