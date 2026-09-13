---
schema: wang-person/v1
id: p_1iLNF8d3FFcTQi9EKGEeud
status: active
merged_into: null
display_name: 王欽德
cbdb_id: 247206
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9a6nLFfz55xFy8Vv6mDsrg
        subject_person_id: p_1iLNF8d3FFcTQi9EKGEeud
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽德，明人物。成化八年進士。（中国历代人物传记资料库 CBDB 247206）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_iO_ZbX12C8bZgeU8hX9JGZ
          claim_id: c_9a6nLFfz55xFy8Vv6mDsrg
          source_id: s_pRAimWvNdaCQUDHMCxNtQC
          stance: supports
          locator: CBDB:247206
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_pRAimWvNdaCQUDHMCxNtQC
            source_type: api_record
            title: 中国历代人物传记资料库：王欽德（CBDB 247206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247206&o=json
            external_identifier: CBDB:247206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XQP4HRrwE3wnZtvXCXgF5m
        subject_person_id: p_1iLNF8d3FFcTQi9EKGEeud
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7jfZoQYguZcY9grLtMF42y
          claim_id: c_XQP4HRrwE3wnZtvXCXgF5m
          source_id: s_pRAimWvNdaCQUDHMCxNtQC
          stance: supports
          locator: CBDB:247206
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_G4dBwfLPJAh6VE3U0j1Gs4
        subject_person_id: p_1iLNF8d3FFcTQi9EKGEeud
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IxqDHn-3pmM9IGXXRQoB9Z
          claim_id: c_G4dBwfLPJAh6VE3U0j1Gs4
          source_id: s_44ZRSw7JUzZCzrKFGDptvb
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百三十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_44ZRSw7JUzZCzrKFGDptvb
            source_type: api_record
            title: 中国历代人物传记资料库：王弁（CBDB 199608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199608&o=json
            external_identifier: CBDB:199608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aoocqwv9rrDDvPqTtq5ozW
        status: active
        display_name: 王弁
        merged_into_person_id: null
  other: []
---

# 王欽德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王欽德，明人物。成化八年進士。（中国历代人物传记资料库 CBDB 247206） | accepted |
| name.primary | 王欽德 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_aoocqwv9rrDDvPqTtq5ozW | 王弁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弁（CBDB 199608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199608&o=json)
- [中国历代人物传记资料库：王欽德（CBDB 247206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247206&o=json)
