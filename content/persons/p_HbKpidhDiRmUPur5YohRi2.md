---
schema: wang-person/v1
id: p_HbKpidhDiRmUPur5YohRi2
status: active
merged_into: null
display_name: 王慶符
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RqjPrTiFDD4QnnR8aVhXY1
        subject_person_id: p_HbKpidhDiRmUPur5YohRi2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶符
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xVDL9xSgfiaerMstAKBEXo
          claim_id: c_RqjPrTiFDD4QnnR8aVhXY1
          source_id: s_mC7nnVRGUMGUVP8PLhJ4RN
          stance: supports
          locator: CBDB:175732
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175732）
          source: &a1
            id: s_mC7nnVRGUMGUVP8PLhJ4RN
            source_type: api_record
            title: 中国历代人物传记资料库：王慶符（CBDB 175732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175732&o=json
            external_identifier: CBDB:175732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.251Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1BRiPppn9ANbgwNi1eGuBe
        subject_person_id: p_HbKpidhDiRmUPur5YohRi2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 695年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e37mPAMYgPbNZCD32DE3Tb
          claim_id: c_1BRiPppn9ANbgwNi1eGuBe
          source_id: s_mC7nnVRGUMGUVP8PLhJ4RN
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
        id: c_LHt7dhyN1PrbaFakQif5mg
        subject_person_id: p_HbKpidhDiRmUPur5YohRi2
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
        - id: cs_sYMHaiHrr9fxj8mK7cgLrB
          claim_id: c_LHt7dhyN1PrbaFakQif5mg
          source_id: s_mC7nnVRGUMGUVP8PLhJ4RN
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

# 王慶符

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶符 | accepted |
| death.date | 695年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶符（CBDB 175732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175732&o=json)
