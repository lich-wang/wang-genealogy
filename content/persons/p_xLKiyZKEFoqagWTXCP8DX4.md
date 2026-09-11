---
schema: wang-person/v1
id: p_xLKiyZKEFoqagWTXCP8DX4
status: active
merged_into: null
display_name: 王化涵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6oYzeMr94rNDA4sAvv8ZFt
        subject_person_id: p_xLKiyZKEFoqagWTXCP8DX4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化涵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ndREtAB6G5BcoYKoZ41Ge1
          claim_id: c_6oYzeMr94rNDA4sAvv8ZFt
          source_id: s_Lz2E1yjdoXuM2hLxJ43Qc6
          stance: supports
          locator: CBDB:636403
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636403）
          source: &a1
            id: s_Lz2E1yjdoXuM2hLxJ43Qc6
            source_type: api_record
            title: 中国历代人物传记资料库：王化涵（CBDB 636403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636403&o=json
            external_identifier: CBDB:636403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.166Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9cYuwkmZK2PWwnp2ZsmzY3
        subject_person_id: p_xLKiyZKEFoqagWTXCP8DX4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化涵，清人物。籍贯奉天府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 636403）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4BsoF8X2Uu_-r8wQN3CpL3
          claim_id: c_9cYuwkmZK2PWwnp2ZsmzY3
          source_id: s_Lz2E1yjdoXuM2hLxJ43Qc6
          stance: supports
          locator: CBDB:636403
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

# 王化涵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化涵 | accepted |
| bio.summary | 王化涵，清人物。籍贯奉天府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 636403） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化涵（CBDB 636403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636403&o=json)
