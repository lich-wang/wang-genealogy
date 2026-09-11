---
schema: wang-person/v1
id: p_7QMyx7emU2xyH9CiQd9J7P
status: active
merged_into: null
display_name: 王紹科
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EQ5LsTVJcnJ2ui8VJhkh99
        subject_person_id: p_7QMyx7emU2xyH9CiQd9J7P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹科
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Dheppacy7nn4tn3kYJv5W8
          claim_id: c_EQ5LsTVJcnJ2ui8VJhkh99
          source_id: s_pHnpDJb7nq7pnHi38pfUe7
          stance: supports
          locator: CBDB:639771
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639771）
          source: &a1
            id: s_pHnpDJb7nq7pnHi38pfUe7
            source_type: api_record
            title: 中国历代人物传记资料库：王紹科（CBDB 639771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639771&o=json
            external_identifier: CBDB:639771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.042Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q6vABtQL6o8puKJHwQegDc
        subject_person_id: p_7QMyx7emU2xyH9CiQd9J7P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹科，清人物。籍贯麗江府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 639771）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1DfT9lbEQxKZaX91hsF7t6
          claim_id: c_q6vABtQL6o8puKJHwQegDc
          source_id: s_pHnpDJb7nq7pnHi38pfUe7
          stance: supports
          locator: CBDB:639771
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

# 王紹科

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹科 | accepted |
| bio.summary | 王紹科，清人物。籍贯麗江府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 639771） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹科（CBDB 639771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639771&o=json)
