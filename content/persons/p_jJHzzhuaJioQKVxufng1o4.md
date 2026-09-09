---
schema: wang-person/v1
id: p_jJHzzhuaJioQKVxufng1o4
status: active
merged_into: null
display_name: 王炳壇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_waKUt9y7Kar7j6xdo3Hsrs
        subject_person_id: p_jJHzzhuaJioQKVxufng1o4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳壇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e1oKkh9tqHP9Gr5kC8CZi7
          claim_id: c_waKUt9y7Kar7j6xdo3Hsrs
          source_id: s_3qf89Br1hJcfhrRFU37mt5
          stance: supports
          locator: CBDB:71910
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71910）
          source: &a1
            id: s_3qf89Br1hJcfhrRFU37mt5
            source_type: api_record
            title: 中国历代人物传记资料库：王炳壇（CBDB 71910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71910&o=json
            external_identifier: CBDB:71910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RN7gMhVD4xo2So8VQgHyRV
        subject_person_id: p_jJHzzhuaJioQKVxufng1o4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1819年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MFh9tXgGtAqha3BfZqri4M
          claim_id: c_RN7gMhVD4xo2So8VQgHyRV
          source_id: s_3qf89Br1hJcfhrRFU37mt5
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
        id: c_aXpzP9soSQQTCUWKagRPp7
        subject_person_id: p_jJHzzhuaJioQKVxufng1o4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1893年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iHW4nb5T7yZ2NJH66iXEQn
          claim_id: c_aXpzP9soSQQTCUWKagRPp7
          source_id: s_3qf89Br1hJcfhrRFU37mt5
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
        id: c_zbfKQZtKAcLUtvUwKEYSgJ
        subject_person_id: p_jJHzzhuaJioQKVxufng1o4
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
        - id: cs_j4XTLgGRPSZhKra6PB2XDy
          claim_id: c_zbfKQZtKAcLUtvUwKEYSgJ
          source_id: s_3qf89Br1hJcfhrRFU37mt5
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

# 王炳壇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳壇 | accepted |
| birth.date | 1819年 | accepted |
| death.date | 1893年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炳壇（CBDB 71910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71910&o=json)
