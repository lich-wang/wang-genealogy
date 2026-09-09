---
schema: wang-person/v1
id: p_beBiBPxsWHHzENVHmC9hv9
status: active
merged_into: null
display_name: 王拯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bLBKkL4mv26hYyBN9teUgb
        subject_person_id: p_beBiBPxsWHHzENVHmC9hv9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5fKFjkXEVDWwDvZmzc1xx5
          claim_id: c_bLBKkL4mv26hYyBN9teUgb
          source_id: s_DHbms4HmFrZ6Q4RB1Vwo9E
          stance: supports
          locator: CBDB:58604
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（58604）
          source: &a1
            id: s_DHbms4HmFrZ6Q4RB1Vwo9E
            source_type: api_record
            title: 中国历代人物传记资料库：王拯（CBDB 58604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58604&o=json
            external_identifier: CBDB:58604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.822Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2DbDmvTHGTjX8xosTq7RTY
        subject_person_id: p_beBiBPxsWHHzENVHmC9hv9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1815年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mo8yeT2GFdD2ALZyME8Hb6
          claim_id: c_2DbDmvTHGTjX8xosTq7RTY
          source_id: s_DHbms4HmFrZ6Q4RB1Vwo9E
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
        id: c_9oMDJ86tzUwfFH4hToQThp
        subject_person_id: p_beBiBPxsWHHzENVHmC9hv9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1876年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_txJoXzEM2ZugK4K76Geado
          claim_id: c_9oMDJ86tzUwfFH4hToQThp
          source_id: s_DHbms4HmFrZ6Q4RB1Vwo9E
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
        id: c_i1GtDxs5RkCiWd31sToeYv
        subject_person_id: p_beBiBPxsWHHzENVHmC9hv9
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
        - id: cs_E6mdx3kcUR56JK8oeN3nc7
          claim_id: c_i1GtDxs5RkCiWd31sToeYv
          source_id: s_DHbms4HmFrZ6Q4RB1Vwo9E
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

# 王拯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王拯 | accepted |
| birth.date | 1815年 | accepted |
| death.date | 1876年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王拯（CBDB 58604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58604&o=json)
