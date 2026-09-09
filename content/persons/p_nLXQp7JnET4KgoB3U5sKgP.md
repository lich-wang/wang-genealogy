---
schema: wang-person/v1
id: p_nLXQp7JnET4KgoB3U5sKgP
status: active
merged_into: null
display_name: 王縉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ha43dHA8DERJeY39aKg7UQ
        subject_person_id: p_nLXQp7JnET4KgoB3U5sKgP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FUaE5W44kSqDL99xQLULDd
          claim_id: c_ha43dHA8DERJeY39aKg7UQ
          source_id: s_a9jQSRa2V7egrUU3zDj5k1
          stance: supports
          locator: CBDB:126836
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126836）
          source: &a1
            id: s_a9jQSRa2V7egrUU3zDj5k1
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 126836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126836&o=json
            external_identifier: CBDB:126836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_a9Q1UxfuAgmmiFG3BVunUy
        subject_person_id: p_nLXQp7JnET4KgoB3U5sKgP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1492年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_87YMDp2EudGMXZVR7BT1yD
          claim_id: c_a9Q1UxfuAgmmiFG3BVunUy
          source_id: s_a9jQSRa2V7egrUU3zDj5k1
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
        id: c_XGAx33EJ3PMWd3e2BGnYvy
        subject_person_id: p_nLXQp7JnET4KgoB3U5sKgP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1550年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tkLhEXepf59K3UKj7FPGYW
          claim_id: c_XGAx33EJ3PMWd3e2BGnYvy
          source_id: s_a9jQSRa2V7egrUU3zDj5k1
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
        id: c_VE1N8QUNBaAWybKifLkZmS
        subject_person_id: p_nLXQp7JnET4KgoB3U5sKgP
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
        - id: cs_rRZZjB4Kc5BcwwkZx8zRU4
          claim_id: c_VE1N8QUNBaAWybKifLkZmS
          source_id: s_a9jQSRa2V7egrUU3zDj5k1
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

# 王縉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縉 | accepted |
| birth.date | 1492年 | accepted |
| death.date | 1550年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王縉（CBDB 126836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126836&o=json)
