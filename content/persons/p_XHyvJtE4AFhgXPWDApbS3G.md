---
schema: wang-person/v1
id: p_XHyvJtE4AFhgXPWDApbS3G
status: active
merged_into: null
display_name: 王恮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V6bjNBaiZryKLE3xmAZs6r
        subject_person_id: p_XHyvJtE4AFhgXPWDApbS3G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1gEuuhQdcjpdNv7ujjaMK4
          claim_id: c_V6bjNBaiZryKLE3xmAZs6r
          source_id: s_Y7jgU7obp3joiQTiG7RX7A
          stance: supports
          locator: CBDB:190093
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190093）
          source: &a1
            id: s_Y7jgU7obp3joiQTiG7RX7A
            source_type: api_record
            title: 中国历代人物传记资料库：王恮（CBDB 190093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190093&o=json
            external_identifier: CBDB:190093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.277Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8awNFfM9zoDyQF4acVLHm6
        subject_person_id: p_XHyvJtE4AFhgXPWDApbS3G
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 757年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fLH7U9PGBAsw7w2hFwiut1
          claim_id: c_8awNFfM9zoDyQF4acVLHm6
          source_id: s_Y7jgU7obp3joiQTiG7RX7A
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
        id: c_x6WKTtBsv2XRVs4JseH6uV
        subject_person_id: p_XHyvJtE4AFhgXPWDApbS3G
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
        - id: cs_QUc19dct6NfHeQ1RUeRtY1
          claim_id: c_x6WKTtBsv2XRVs4JseH6uV
          source_id: s_Y7jgU7obp3joiQTiG7RX7A
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

# 王恮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恮 | accepted |
| death.date | 757年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恮（CBDB 190093）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190093&o=json)
