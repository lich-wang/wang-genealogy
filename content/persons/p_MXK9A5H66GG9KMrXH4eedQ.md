---
schema: wang-person/v1
id: p_MXK9A5H66GG9KMrXH4eedQ
status: active
merged_into: null
display_name: 王廷楠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kz4iVdwyGnTKsgLYPLZMVT
        subject_person_id: p_MXK9A5H66GG9KMrXH4eedQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷楠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NC5Yp2n9435K9Pv4omdpuJ
          claim_id: c_kz4iVdwyGnTKsgLYPLZMVT
          source_id: s_yBeWENKo596BrAXrx6HAdj
          stance: supports
          locator: CBDB:637514
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637514）
          source: &a1
            id: s_yBeWENKo596BrAXrx6HAdj
            source_type: api_record
            title: 中国历代人物传记资料库：王廷楠（CBDB 637514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637514&o=json
            external_identifier: CBDB:637514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.344Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r9LSJ19CUzjf4gQQX4enEq
        subject_person_id: p_MXK9A5H66GG9KMrXH4eedQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷楠，清人物。籍贯大理府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 637514）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TIXNLcjd29OMEz8HeLjY0Q
          claim_id: c_r9LSJ19CUzjf4gQQX4enEq
          source_id: s_yBeWENKo596BrAXrx6HAdj
          stance: supports
          locator: CBDB:637514
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

# 王廷楠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷楠 | accepted |
| bio.summary | 王廷楠，清人物。籍贯大理府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 637514） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷楠（CBDB 637514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637514&o=json)
