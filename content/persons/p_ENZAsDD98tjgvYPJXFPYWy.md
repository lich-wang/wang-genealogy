---
schema: wang-person/v1
id: p_ENZAsDD98tjgvYPJXFPYWy
status: active
merged_into: null
display_name: 王誠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e3RRwwMNJXUL5S7NAam96J
        subject_person_id: p_ENZAsDD98tjgvYPJXFPYWy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zT7NRG2oDB7oTQWH4UbA39
          claim_id: c_e3RRwwMNJXUL5S7NAam96J
          source_id: s_WmZKTSmCaWqx65bEn6b8bz
          stance: supports
          locator: CBDB:100924
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100924）
          source: &a1
            id: s_WmZKTSmCaWqx65bEn6b8bz
            source_type: api_record
            title: 中国历代人物传记资料库：王誠（CBDB 100924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100924&o=json
            external_identifier: CBDB:100924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.571Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RYHb1RtfDxwhZYmRCzv7KB
        subject_person_id: p_ENZAsDD98tjgvYPJXFPYWy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rei7PxJmWFtCz3DwBCtY3h
          claim_id: c_RYHb1RtfDxwhZYmRCzv7KB
          source_id: s_WmZKTSmCaWqx65bEn6b8bz
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

# 王誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誠 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王誠（CBDB 100924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100924&o=json)
