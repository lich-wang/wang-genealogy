---
schema: wang-person/v1
id: p_x67MFsUuLJ2UXcCYTdbiNe
status: active
merged_into: null
display_name: 王錫祿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZecEecMx8yAL8EnL5Dcf25
        subject_person_id: p_x67MFsUuLJ2UXcCYTdbiNe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a6rbYiTHypuAkR9NWY9W1E
          claim_id: c_ZecEecMx8yAL8EnL5Dcf25
          source_id: s_x1XJCxLP1psFBbd7dTkDkg
          stance: supports
          locator: CBDB:640635
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640635）
          source: &a1
            id: s_x1XJCxLP1psFBbd7dTkDkg
            source_type: api_record
            title: 中国历代人物传记资料库：王錫祿（CBDB 640635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640635&o=json
            external_identifier: CBDB:640635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.164Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ghgf27AndeFatAAWo9a5ZW
        subject_person_id: p_x67MFsUuLJ2UXcCYTdbiNe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫祿，清人物。籍贯大興，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 640635）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FK9FTAXYXKGPM8wW5gTM4p
          claim_id: c_ghgf27AndeFatAAWo9a5ZW
          source_id: s_x1XJCxLP1psFBbd7dTkDkg
          stance: supports
          locator: CBDB:640635
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

# 王錫祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫祿 | accepted |
| bio.summary | 王錫祿，清人物。籍贯大興，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 640635） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫祿（CBDB 640635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640635&o=json)
