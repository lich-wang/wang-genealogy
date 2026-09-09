---
schema: wang-person/v1
id: p_8PkieG2XAbUn2Us9dYW5eC
status: active
merged_into: null
display_name: 王鎬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ePJQxVDxsv2EvRuequ8vxg
        subject_person_id: p_8PkieG2XAbUn2Us9dYW5eC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4zjKEdzCEw3g2okTQ1bPHh
          claim_id: c_ePJQxVDxsv2EvRuequ8vxg
          source_id: s_DofG638kswFwfTEWcHgsRu
          stance: supports
          locator: CBDB:19085
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19085）
          source: &a1
            id: s_DofG638kswFwfTEWcHgsRu
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 19085）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19085&o=json
            external_identifier: CBDB:19085
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GHwV1MJ7Z5aPYYUGsxL7Ed
        subject_person_id: p_8PkieG2XAbUn2Us9dYW5eC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1135年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9myYrwtcqzQ6mAP68Pps4L
          claim_id: c_GHwV1MJ7Z5aPYYUGsxL7Ed
          source_id: s_DofG638kswFwfTEWcHgsRu
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
        id: c_zcuHAB81SuBMptmqrVd8yh
        subject_person_id: p_8PkieG2XAbUn2Us9dYW5eC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1213年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5EZHTMNxXYNdw99PiDCk6p
          claim_id: c_zcuHAB81SuBMptmqrVd8yh
          source_id: s_DofG638kswFwfTEWcHgsRu
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
        id: c_q4bGFHgeJ982zbX5HVY13i
        subject_person_id: p_8PkieG2XAbUn2Us9dYW5eC
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
        - id: cs_8xHfhDo73Y5Wn67rrUA1zx
          claim_id: c_q4bGFHgeJ982zbX5HVY13i
          source_id: s_DofG638kswFwfTEWcHgsRu
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

# 王鎬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎬 | accepted |
| birth.date | 1135年 | accepted |
| death.date | 1213年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎬（CBDB 19085）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19085&o=json)
