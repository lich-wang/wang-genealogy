---
schema: wang-person/v1
id: p_DNoFqs5WRDmQfihCwCiECy
status: active
merged_into: null
display_name: 王憲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uS1CK5W5jjgUsLmEeQVNh1
        subject_person_id: p_DNoFqs5WRDmQfihCwCiECy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NLUy6EQaAdxuNYEB92PGWp
          claim_id: c_uS1CK5W5jjgUsLmEeQVNh1
          source_id: s_PWkfRGPXkBhVTJGRfB49hm
          stance: supports
          locator: CBDB:191817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191817）
          source: &a1
            id: s_PWkfRGPXkBhVTJGRfB49hm
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 191817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191817&o=json
            external_identifier: CBDB:191817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.382Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gyBQrnkDCCdLtuQXNNXcG5
        subject_person_id: p_DNoFqs5WRDmQfihCwCiECy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 749年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_js5KQoKRXkZVjjHnFe8uCy
          claim_id: c_gyBQrnkDCCdLtuQXNNXcG5
          source_id: s_PWkfRGPXkBhVTJGRfB49hm
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
        id: c_thuUjUg7DerehxH46foapJ
        subject_person_id: p_DNoFqs5WRDmQfihCwCiECy
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
        - id: cs_YPML8tFMWs84KgJZLNY1BR
          claim_id: c_thuUjUg7DerehxH46foapJ
          source_id: s_PWkfRGPXkBhVTJGRfB49hm
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

# 王憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲 | accepted |
| death.date | 749年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王憲（CBDB 191817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191817&o=json)
