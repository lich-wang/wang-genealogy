---
schema: wang-person/v1
id: p_Zh3L6fe6rGXcEvqPu9TugV
status: active
merged_into: null
display_name: 王叔本
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NxbJR4E341RgRxfg4JoJRb
        subject_person_id: p_Zh3L6fe6rGXcEvqPu9TugV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jTtyWpj5m495KGbWqAY87X
          claim_id: c_NxbJR4E341RgRxfg4JoJRb
          source_id: s_XzfFFJ3aZGsaZqbsbFSC5h
          stance: supports
          locator: CBDB:210731
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210731）
          source: &a1
            id: s_XzfFFJ3aZGsaZqbsbFSC5h
            source_type: api_record
            title: 中国历代人物传记资料库：王叔本（CBDB 210731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210731&o=json
            external_identifier: CBDB:210731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.020Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W35WqQAcN6yBAHNyd7xQLV
        subject_person_id: p_Zh3L6fe6rGXcEvqPu9TugV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔本，明人物。隆慶五年進士，籍贯永嘉，曾任鴻臚寺主簿。（中国历代人物传记资料库 CBDB 210731）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0VW7jl5rO4UAXQ3HweER47
          claim_id: c_W35WqQAcN6yBAHNyd7xQLV
          source_id: s_XzfFFJ3aZGsaZqbsbFSC5h
          stance: supports
          locator: CBDB:210731
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

# 王叔本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔本 | accepted |
| bio.summary | 王叔本，明人物。隆慶五年進士，籍贯永嘉，曾任鴻臚寺主簿。（中国历代人物传记资料库 CBDB 210731） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王叔本（CBDB 210731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210731&o=json)
