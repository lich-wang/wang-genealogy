---
schema: wang-person/v1
id: p_gGh9F3FDDzRxJFGB6vA1Sx
status: active
merged_into: null
display_name: 王尚志
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r4Gn2DYWiPL3oF5AE7Kw7P
        subject_person_id: p_gGh9F3FDDzRxJFGB6vA1Sx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iB8pW2hh8sAqdq5wCackwt
          claim_id: c_r4Gn2DYWiPL3oF5AE7Kw7P
          source_id: s_c7zGMgdooX8oYy58nD7ZEC
          stance: supports
          locator: CBDB:302731
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302731）
          source: &a1
            id: s_c7zGMgdooX8oYy58nD7ZEC
            source_type: api_record
            title: 中国历代人物传记资料库：王尚志（CBDB 302731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302731&o=json
            external_identifier: CBDB:302731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.657Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DuRBQge7rBbqtdmqfAs3Xd
        subject_person_id: p_gGh9F3FDDzRxJFGB6vA1Sx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚志，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 302731）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fx8Ostj0md-1WJcm3tuJLp
          claim_id: c_DuRBQge7rBbqtdmqfAs3Xd
          source_id: s_c7zGMgdooX8oYy58nD7ZEC
          stance: supports
          locator: CBDB:302731
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
        id: c_mL5MyZ5v4t-Xvo32IbO_qb
        subject_person_id: p_gGh9F3FDDzRxJFGB6vA1Sx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BZLwNz8UohpakiqfGWVWHk
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rwirMmHvdX29t827TdqqnV
          claim_id: c_mL5MyZ5v4t-Xvo32IbO_qb
          source_id: s_c7zGMgdooX8oYy58nD7ZEC
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第六十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BZLwNz8UohpakiqfGWVWHk
        status: active
        display_name: 王正容
        merged_into_person_id: null
  other: []
---

# 王尚志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚志 | accepted |
| bio.summary | 王尚志，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 302731） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BZLwNz8UohpakiqfGWVWHk | 王正容 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚志（CBDB 302731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302731&o=json)
