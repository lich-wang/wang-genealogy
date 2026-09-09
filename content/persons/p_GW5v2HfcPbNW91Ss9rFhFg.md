---
schema: wang-person/v1
id: p_GW5v2HfcPbNW91Ss9rFhFg
status: active
merged_into: null
display_name: 王俊民
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NWPBnqrDa7oh5XnfLXMrFG
        subject_person_id: p_GW5v2HfcPbNW91Ss9rFhFg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6iZjVy28gwcSpqwP4QG1gY
          claim_id: c_NWPBnqrDa7oh5XnfLXMrFG
          source_id: s_4VQ1sqmpCnt6AvZ8kUXx4k
          stance: supports
          locator: CBDB:126616
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126616）
          source: &a1
            id: s_4VQ1sqmpCnt6AvZ8kUXx4k
            source_type: api_record
            title: 中国历代人物传记资料库：王俊民（CBDB 126616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126616&o=json
            external_identifier: CBDB:126616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.061Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_v7ACwegc648xouQVYLYmLK
        subject_person_id: p_GW5v2HfcPbNW91Ss9rFhFg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1480年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_87y3s39zHT4RoyGNXAqcFK
          claim_id: c_v7ACwegc648xouQVYLYmLK
          source_id: s_4VQ1sqmpCnt6AvZ8kUXx4k
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
        id: c_jphCnWi7bgLc2sUpKSuCNr
        subject_person_id: p_GW5v2HfcPbNW91Ss9rFhFg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1538年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W4tC8eJNWHvQzVPY9vsDFA
          claim_id: c_jphCnWi7bgLc2sUpKSuCNr
          source_id: s_4VQ1sqmpCnt6AvZ8kUXx4k
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
        id: c_Mbzif4YEA91vpA88GUJLtX
        subject_person_id: p_GW5v2HfcPbNW91Ss9rFhFg
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
        - id: cs_1G62EKn8hLLE5fnJ2tEN4U
          claim_id: c_Mbzif4YEA91vpA88GUJLtX
          source_id: s_4VQ1sqmpCnt6AvZ8kUXx4k
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

# 王俊民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊民 | accepted |
| birth.date | 1480年 | accepted |
| death.date | 1538年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俊民（CBDB 126616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126616&o=json)
