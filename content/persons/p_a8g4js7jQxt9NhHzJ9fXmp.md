---
schema: wang-person/v1
id: p_a8g4js7jQxt9NhHzJ9fXmp
status: active
merged_into: null
display_name: 王公孺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gkQ2seeEp5Ku364tbw85H3
        subject_person_id: p_a8g4js7jQxt9NhHzJ9fXmp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公孺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5vDxDUB98MPL5q5nsf9C3x
          claim_id: c_gkQ2seeEp5Ku364tbw85H3
          source_id: s_XvpQC7VUxirQNCWQDzVA4N
          stance: supports
          locator: CBDB:485733
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（485733）
          source: &a1
            id: s_XvpQC7VUxirQNCWQDzVA4N
            source_type: api_record
            title: 中国历代人物传记资料库：王公孺（CBDB 485733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=485733&o=json
            external_identifier: CBDB:485733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ChjwNDFQjRA8LYvDmBRG9A
        subject_person_id: p_a8g4js7jQxt9NhHzJ9fXmp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ki74ECgGkJ3DxroMFaM8vj
          claim_id: c_ChjwNDFQjRA8LYvDmBRG9A
          source_id: s_XvpQC7VUxirQNCWQDzVA4N
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

# 王公孺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公孺 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公孺（CBDB 485733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=485733&o=json)
