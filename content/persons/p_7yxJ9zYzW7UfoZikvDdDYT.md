---
schema: wang-person/v1
id: p_7yxJ9zYzW7UfoZikvDdDYT
status: active
merged_into: null
display_name: 王士敏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rYSNAfUB6XivNmH3LqG3RX
        subject_person_id: p_7yxJ9zYzW7UfoZikvDdDYT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fRXSf7K2ifLPyD5PBqdD5n
          claim_id: c_rYSNAfUB6XivNmH3LqG3RX
          source_id: s_1Hbe4meVad2n1BrPseGT1x
          stance: supports
          locator: CBDB:71326
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71326）
          source: &a1
            id: s_1Hbe4meVad2n1BrPseGT1x
            source_type: api_record
            title: 中国历代人物传记资料库：王士敏（CBDB 71326）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71326&o=json
            external_identifier: CBDB:71326
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.597Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4Tymvumo67BJ6ZGBgtPbLV
        subject_person_id: p_7yxJ9zYzW7UfoZikvDdDYT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1860年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DZgfFJJRwieP6QK8h3pnVa
          claim_id: c_4Tymvumo67BJ6ZGBgtPbLV
          source_id: s_1Hbe4meVad2n1BrPseGT1x
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
        id: c_9uMjerjRQZZfHK1YkD1cQv
        subject_person_id: p_7yxJ9zYzW7UfoZikvDdDYT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1934年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SXA39NkfQmw5hss7Z7E64G
          claim_id: c_9uMjerjRQZZfHK1YkD1cQv
          source_id: s_1Hbe4meVad2n1BrPseGT1x
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
        id: c_FW9LYx13ENYj292K1nKFRT
        subject_person_id: p_7yxJ9zYzW7UfoZikvDdDYT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mtajwByUxkypdUJqM1vf2p
          claim_id: c_FW9LYx13ENYj292K1nKFRT
          source_id: s_1Hbe4meVad2n1BrPseGT1x
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

# 王士敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士敏 | accepted |
| birth.date | 1860年 | accepted |
| death.date | 1934年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士敏（CBDB 71326）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71326&o=json)
