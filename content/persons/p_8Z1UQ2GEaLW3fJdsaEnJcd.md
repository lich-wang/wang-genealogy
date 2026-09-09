---
schema: wang-person/v1
id: p_8Z1UQ2GEaLW3fJdsaEnJcd
status: active
merged_into: null
display_name: 王哲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PNMiBgpDNCqJcrE9uQ2DVX
        subject_person_id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vo3er7s2MgYgmos3hDXsRQ
          claim_id: c_PNMiBgpDNCqJcrE9uQ2DVX
          source_id: s_YEFc76BF7d689AbSJF4e5B
          stance: supports
          locator: CBDB:126636
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126636）
          source: &a1
            id: s_YEFc76BF7d689AbSJF4e5B
            source_type: api_record
            title: 中国历代人物传记资料库：王哲（CBDB 126636）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126636&o=json
            external_identifier: CBDB:126636
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.078Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YQsQ56bBSEmt7ND7rKcrNM
        subject_person_id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1457年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jn7fitTzyttRiimkzEEgWe
          claim_id: c_YQsQ56bBSEmt7ND7rKcrNM
          source_id: s_YEFc76BF7d689AbSJF4e5B
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
        id: c_71ys1BPk5922jFwbhBjvsQ
        subject_person_id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1513年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4CHWNAD89X3eYLNhBzK3so
          claim_id: c_71ys1BPk5922jFwbhBjvsQ
          source_id: s_YEFc76BF7d689AbSJF4e5B
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
        id: c_zk2SXdPh2HY9wxEL9NNvDA
        subject_person_id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J63Dr69RRy3zQhvkAaUxNH
          claim_id: c_zk2SXdPh2HY9wxEL9NNvDA
          source_id: s_YEFc76BF7d689AbSJF4e5B
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

# 王哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王哲 | accepted |
| birth.date | 1457年 | accepted |
| death.date | 1513年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王哲（CBDB 126636）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126636&o=json)
