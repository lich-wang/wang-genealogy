---
schema: wang-person/v1
id: p_8dgAxfFfVEMLHEpMDD9hvE
status: active
merged_into: null
display_name: 王賢佐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b9QA7K29EVNf6PVa22u3iU
        subject_person_id: p_8dgAxfFfVEMLHEpMDD9hvE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5SSYM3QfRZHuoPekZrKDho
          claim_id: c_b9QA7K29EVNf6PVa22u3iU
          source_id: s_Avr3x9MWzZLGHCcBHBSe8Q
          stance: supports
          locator: CBDB:279462
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279462）
          source: &a1
            id: s_Avr3x9MWzZLGHCcBHBSe8Q
            source_type: api_record
            title: 中国历代人物传记资料库：王賢佐（CBDB 279462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279462&o=json
            external_identifier: CBDB:279462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jQEAdYpEShZYBLhtWD8wGA
        subject_person_id: p_8dgAxfFfVEMLHEpMDD9hvE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢佐，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 279462）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0ojSA5axQiYPUvXnOP0QOM
          claim_id: c_jQEAdYpEShZYBLhtWD8wGA
          source_id: s_Avr3x9MWzZLGHCcBHBSe8Q
          stance: supports
          locator: CBDB:279462
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
  descendants:
    - claim:
        id: c_Ibv9YP8kbvKqyAacmdwox0
        subject_person_id: p_8dgAxfFfVEMLHEpMDD9hvE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2oy62EEzX8avtnwM7s1tDJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BVQxjP0HLW2XeBNAHM5y7h
          claim_id: c_Ibv9YP8kbvKqyAacmdwox0
          source_id: s_EMFDyqiwB7TGfKzHDKUFLZ
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EMFDyqiwB7TGfKzHDKUFLZ
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 201866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201866&o=json
            external_identifier: CBDB:201866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.699Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2oy62EEzX8avtnwM7s1tDJ
        status: active
        display_name: 王綸
        merged_into_person_id: null
  other: []
---

# 王賢佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賢佐 | accepted |
| bio.summary | 王賢佐，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 279462） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2oy62EEzX8avtnwM7s1tDJ | 王綸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綸（CBDB 201866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201866&o=json)
- [中国历代人物传记资料库：王賢佐（CBDB 279462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279462&o=json)
