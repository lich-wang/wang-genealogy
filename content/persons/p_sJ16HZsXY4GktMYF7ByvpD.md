---
schema: wang-person/v1
id: p_sJ16HZsXY4GktMYF7ByvpD
status: active
merged_into: null
display_name: 王世裔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fCwZ4xptViKqL1N9UDDcz8
        subject_person_id: p_sJ16HZsXY4GktMYF7ByvpD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世裔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5msMoroAEt4et4hZhwuEAb
          claim_id: c_fCwZ4xptViKqL1N9UDDcz8
          source_id: s_B1rKsq5F6Hqmxf44uDa1dH
          stance: supports
          locator: CBDB:71472
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71472）
          source: &a1
            id: s_B1rKsq5F6Hqmxf44uDa1dH
            source_type: api_record
            title: 中国历代人物传记资料库：王世裔（CBDB 71472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71472&o=json
            external_identifier: CBDB:71472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.700Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_msG56B8oYX7DVWWBdGDCs9
        subject_person_id: p_sJ16HZsXY4GktMYF7ByvpD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1613年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1S6yGQpzonkB9NxPSFXQei
          claim_id: c_msG56B8oYX7DVWWBdGDCs9
          source_id: s_B1rKsq5F6Hqmxf44uDa1dH
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
        id: c_TfSjAEiiTh63eTUN76WMoJ
        subject_person_id: p_sJ16HZsXY4GktMYF7ByvpD
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
        - id: cs_5jWVV5G7d3DA5JqHw6yHf4
          claim_id: c_TfSjAEiiTh63eTUN76WMoJ
          source_id: s_B1rKsq5F6Hqmxf44uDa1dH
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

# 王世裔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世裔 | accepted |
| birth.date | 1613年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世裔（CBDB 71472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71472&o=json)
