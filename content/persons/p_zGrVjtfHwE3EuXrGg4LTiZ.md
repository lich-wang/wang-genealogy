---
schema: wang-person/v1
id: p_zGrVjtfHwE3EuXrGg4LTiZ
status: active
merged_into: null
display_name: 王碩人
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PtPY53QzQGUtVJ1amPjN9s
        subject_person_id: p_zGrVjtfHwE3EuXrGg4LTiZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王碩人
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zy5MJ7PrxJpQ36b7LCsKpE
          claim_id: c_PtPY53QzQGUtVJ1amPjN9s
          source_id: s_RLQgQxRj6ekyFjH8nKAamX
          stance: supports
          locator: CBDB:71996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71996）
          source: &a1
            id: s_RLQgQxRj6ekyFjH8nKAamX
            source_type: api_record
            title: 中国历代人物传记资料库：王碩人（CBDB 71996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71996&o=json
            external_identifier: CBDB:71996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.952Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jLNhPeNKEAXfJJmrNTXyRo
        subject_person_id: p_zGrVjtfHwE3EuXrGg4LTiZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1691年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9ud3X8YjuCAepqxkGoK5NT
          claim_id: c_jLNhPeNKEAXfJJmrNTXyRo
          source_id: s_RLQgQxRj6ekyFjH8nKAamX
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
        id: c_eDZAFF87TwTwNfVB4Ada45
        subject_person_id: p_zGrVjtfHwE3EuXrGg4LTiZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王碩人（生于1691年），清人物。籍贯寧津。（中国历代人物传记资料库 CBDB 71996）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3vGehOY7xsDzwPf6Vwznvz
          claim_id: c_eDZAFF87TwTwNfVB4Ada45
          source_id: s_RLQgQxRj6ekyFjH8nKAamX
          stance: supports
          locator: CBDB:71996
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

# 王碩人

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王碩人 | accepted |
| birth.date | 1691年 | accepted |
| bio.summary | 王碩人（生于1691年），清人物。籍贯寧津。（中国历代人物传记资料库 CBDB 71996） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王碩人（CBDB 71996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71996&o=json)
