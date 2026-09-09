---
schema: wang-person/v1
id: p_XLytFyo2bEJHH5N4cVSyQc
status: active
merged_into: null
display_name: 王約
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yMcNLWy11pP1df4sNe1wyc
        subject_person_id: p_XLytFyo2bEJHH5N4cVSyQc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王約
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2sDv6VLshyhUXkHeDz5WyK
          claim_id: c_yMcNLWy11pP1df4sNe1wyc
          source_id: s_1eBgQzAk2GaPbJd9GzYwVC
          stance: supports
          locator: CBDB:175758
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175758）
          source: &a1
            id: s_1eBgQzAk2GaPbJd9GzYwVC
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 175758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175758&o=json
            external_identifier: CBDB:175758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_tSWDyZxXUKCgKYSJ77PHju
        subject_person_id: p_XLytFyo2bEJHH5N4cVSyQc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 669年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fd9QAM7C3rgYudYLELWTSA
          claim_id: c_tSWDyZxXUKCgKYSJ77PHju
          source_id: s_1eBgQzAk2GaPbJd9GzYwVC
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
        id: c_gU3bX1QnwnfZQRzHaSqHkb
        subject_person_id: p_XLytFyo2bEJHH5N4cVSyQc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZB3aGXyyGa8dsac82vqRoP
          claim_id: c_gU3bX1QnwnfZQRzHaSqHkb
          source_id: s_1eBgQzAk2GaPbJd9GzYwVC
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

# 王約

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王約 | accepted |
| death.date | 669年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王約（CBDB 175758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175758&o=json)
