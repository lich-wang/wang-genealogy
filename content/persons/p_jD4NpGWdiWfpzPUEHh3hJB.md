---
schema: wang-person/v1
id: p_jD4NpGWdiWfpzPUEHh3hJB
status: active
merged_into: null
display_name: 王立言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CefHELA539AoM57KEDxPc9
        subject_person_id: p_jD4NpGWdiWfpzPUEHh3hJB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2uz2h3h7HZETirQVQuXsvb
          claim_id: c_CefHELA539AoM57KEDxPc9
          source_id: s_ZRzXvzhuNDhy3LB7p24gDM
          stance: supports
          locator: CBDB:22228
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22228）
          source: &a1
            id: s_ZRzXvzhuNDhy3LB7p24gDM
            source_type: api_record
            title: 中国历代人物传记资料库：王立言（CBDB 22228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22228&o=json
            external_identifier: CBDB:22228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.856Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DXpMBE7Te4FUdDFXDEAG3d
        subject_person_id: p_jD4NpGWdiWfpzPUEHh3hJB
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
        - id: cs_hgh5HQrASXWSQjc7SuX7zj
          claim_id: c_DXpMBE7Te4FUdDFXDEAG3d
          source_id: s_ZRzXvzhuNDhy3LB7p24gDM
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

# 王立言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立言 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王立言（CBDB 22228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22228&o=json)
