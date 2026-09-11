---
schema: wang-person/v1
id: p_vz66B5JKGz8SMLVGuHa8kR
status: active
merged_into: null
display_name: 王元晉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T7KwuJqpvpByQXRKu6A5Yq
        subject_person_id: p_vz66B5JKGz8SMLVGuHa8kR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元晉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XLw3NpxjCbw32oePfMRjgP
          claim_id: c_T7KwuJqpvpByQXRKu6A5Yq
          source_id: s_pM6DMMx35VNi97DkVvinE9
          stance: supports
          locator: CBDB:71377
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71377）
          source: &a1
            id: s_pM6DMMx35VNi97DkVvinE9
            source_type: api_record
            title: 中国历代人物传记资料库：王元晉（CBDB 71377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71377&o=json
            external_identifier: CBDB:71377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ubFi6TqaJQMB6kfn8CJ6aP
        subject_person_id: p_vz66B5JKGz8SMLVGuHa8kR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1825年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QFXN1qXKU2mb7LdrTDgPkW
          claim_id: c_ubFi6TqaJQMB6kfn8CJ6aP
          source_id: s_pM6DMMx35VNi97DkVvinE9
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
        id: c_sKRN4dgMjFwT7jRYyYJYMe
        subject_person_id: p_vz66B5JKGz8SMLVGuHa8kR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1897年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DEcDwyhcqTtQPnsXQdHxpX
          claim_id: c_sKRN4dgMjFwT7jRYyYJYMe
          source_id: s_pM6DMMx35VNi97DkVvinE9
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
        id: c_ieiNkaLAVGsrKeQKSkBK1c
        subject_person_id: p_vz66B5JKGz8SMLVGuHa8kR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元晉（1825年—1897年），清人物。籍贯黎城。（中国历代人物传记资料库 CBDB 71377）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j-xexWJmdkY54wwor37QE-
          claim_id: c_ieiNkaLAVGsrKeQKSkBK1c
          source_id: s_pM6DMMx35VNi97DkVvinE9
          stance: supports
          locator: CBDB:71377
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王元晉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元晉 | accepted |
| birth.date | 1825年 | accepted |
| death.date | 1897年 | accepted |
| bio.summary | 王元晉（1825年—1897年），清人物。籍贯黎城。（中国历代人物传记资料库 CBDB 71377） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元晉（CBDB 71377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71377&o=json)
