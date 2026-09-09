---
schema: wang-person/v1
id: p_HYHpKaJa17iu8Upo6wdU7W
status: active
merged_into: null
display_name: 王育
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2JAaHzR7A7j7m7xuMnhD23
        subject_person_id: p_HYHpKaJa17iu8Upo6wdU7W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王育
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aX2GUcnVtW2KGHBH1kiC2n
          claim_id: c_2JAaHzR7A7j7m7xuMnhD23
          source_id: s_uYpWo4b3o5i6i7tLGYTY3b
          stance: supports
          locator: CBDB:208149
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208149）
          source: &a1
            id: s_uYpWo4b3o5i6i7tLGYTY3b
            source_type: api_record
            title: 中国历代人物传记资料库：王育（CBDB 208149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208149&o=json
            external_identifier: CBDB:208149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kcEiV4HBXmeUPKzL65MYMp
        subject_person_id: p_HYHpKaJa17iu8Upo6wdU7W
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1418年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3MSSyKsH6mS7qUCqG48WFo
          claim_id: c_kcEiV4HBXmeUPKzL65MYMp
          source_id: s_uYpWo4b3o5i6i7tLGYTY3b
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NnR4VRABtDoGrHUBrHwqCK
        subject_person_id: p_HYHpKaJa17iu8Upo6wdU7W
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
        - id: cs_i3n3sof6vrEiG6LivGMWmH
          claim_id: c_NnR4VRABtDoGrHUBrHwqCK
          source_id: s_uYpWo4b3o5i6i7tLGYTY3b
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

# 王育

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王育 | accepted |
| birth.date | 1418年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王育（CBDB 208149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208149&o=json)
