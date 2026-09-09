---
schema: wang-person/v1
id: p_kMPKPf7p6iNzau6drna7WP
status: active
merged_into: null
display_name: 王雲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mr2MNrgWa4ZqyqAyebxzYy
        subject_person_id: p_kMPKPf7p6iNzau6drna7WP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xYzJz7QCadyvNh1fHjHTFM
          claim_id: c_mr2MNrgWa4ZqyqAyebxzYy
          source_id: s_NH7Kyf4aZncfwvqnH39bWM
          stance: supports
          locator: CBDB:503818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（503818）
          source: &a1
            id: s_NH7Kyf4aZncfwvqnH39bWM
            source_type: api_record
            title: 中国历代人物传记资料库：王雲（CBDB 503818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503818&o=json
            external_identifier: CBDB:503818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p4yiBiKCCPQQRGY1rJS7TA
        subject_person_id: p_kMPKPf7p6iNzau6drna7WP
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
        - id: cs_Jhw1LDASoYVXy9pXMb6Xnj
          claim_id: c_p4yiBiKCCPQQRGY1rJS7TA
          source_id: s_NH7Kyf4aZncfwvqnH39bWM
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

# 王雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲（CBDB 503818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503818&o=json)
