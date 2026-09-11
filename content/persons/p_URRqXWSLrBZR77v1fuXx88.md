---
schema: wang-person/v1
id: p_URRqXWSLrBZR77v1fuXx88
status: active
merged_into: null
display_name: 王作衡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tf5GtcLqSL7cSnu2kLcKND
        subject_person_id: p_URRqXWSLrBZR77v1fuXx88
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eDhut6TLgtdPZaF8ZiVNDG
          claim_id: c_Tf5GtcLqSL7cSnu2kLcKND
          source_id: s_Sursux4ChDEP1yyGpBHL6t
          stance: supports
          locator: CBDB:636008
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636008）
          source: &a1
            id: s_Sursux4ChDEP1yyGpBHL6t
            source_type: api_record
            title: 中国历代人物传记资料库：王作衡（CBDB 636008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636008&o=json
            external_identifier: CBDB:636008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TQkTDjZgUCT6A5mxKTo4uk
        subject_person_id: p_URRqXWSLrBZR77v1fuXx88
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作衡，清人物。籍贯徐州府，入仕廩生，曾任復設訓導。（中国历代人物传记资料库 CBDB 636008）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Zn7X4vqDq2M9aMIMWJqC2-
          claim_id: c_TQkTDjZgUCT6A5mxKTo4uk
          source_id: s_Sursux4ChDEP1yyGpBHL6t
          stance: supports
          locator: CBDB:636008
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

# 王作衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王作衡 | accepted |
| bio.summary | 王作衡，清人物。籍贯徐州府，入仕廩生，曾任復設訓導。（中国历代人物传记资料库 CBDB 636008） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王作衡（CBDB 636008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636008&o=json)
