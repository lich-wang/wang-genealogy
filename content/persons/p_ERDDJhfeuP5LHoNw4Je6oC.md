---
schema: wang-person/v1
id: p_ERDDJhfeuP5LHoNw4Je6oC
status: active
merged_into: null
display_name: 王中皓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TfVBtpJuaPBeSbDjEexgnJ
        subject_person_id: p_ERDDJhfeuP5LHoNw4Je6oC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中皓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZCJKrmy5AhpcHtYdbWGR9A
          claim_id: c_TfVBtpJuaPBeSbDjEexgnJ
          source_id: s_RNnDfx6GFcRfqCokAN25WE
          stance: supports
          locator: CBDB:635749
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635749）
          source: &a1
            id: s_RNnDfx6GFcRfqCokAN25WE
            source_type: api_record
            title: 中国历代人物传记资料库：王中皓（CBDB 635749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635749&o=json
            external_identifier: CBDB:635749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.779Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_639khUh28FQZcmonb5mY4W
        subject_person_id: p_ERDDJhfeuP5LHoNw4Je6oC
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
        - id: cs_7U8AsSvTr9JbEq41pp82VY
          claim_id: c_639khUh28FQZcmonb5mY4W
          source_id: s_RNnDfx6GFcRfqCokAN25WE
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

# 王中皓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王中皓 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王中皓（CBDB 635749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635749&o=json)
