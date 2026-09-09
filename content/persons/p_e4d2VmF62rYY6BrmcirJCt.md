---
schema: wang-person/v1
id: p_e4d2VmF62rYY6BrmcirJCt
status: active
merged_into: null
display_name: 王保義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ATHuBGu3s1HrA4T7TjBEAt
        subject_person_id: p_e4d2VmF62rYY6BrmcirJCt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YKN6sfpQio81xPYzj3h6DX
          claim_id: c_ATHuBGu3s1HrA4T7TjBEAt
          source_id: s_nUioVEnJShaKNdQZ5NPUnT
          stance: supports
          locator: CBDB:497330
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（497330）
          source: &a1
            id: s_nUioVEnJShaKNdQZ5NPUnT
            source_type: api_record
            title: 中国历代人物传记资料库：王保義（CBDB 497330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497330&o=json
            external_identifier: CBDB:497330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2VbX8w9JBMMhCdTdZ2dRBy
        subject_person_id: p_e4d2VmF62rYY6BrmcirJCt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为五代人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GuGbUHPk9gfRQ7a1vw33FB
          claim_id: c_2VbX8w9JBMMhCdTdZ2dRBy
          source_id: s_nUioVEnJShaKNdQZ5NPUnT
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

# 王保義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王保義 | accepted |
| bio.summary | CBDB 记载为五代人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王保義（CBDB 497330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497330&o=json)
