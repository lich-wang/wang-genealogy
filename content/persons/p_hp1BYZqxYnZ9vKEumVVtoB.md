---
schema: wang-person/v1
id: p_hp1BYZqxYnZ9vKEumVVtoB
status: active
merged_into: null
display_name: 王鎬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bL4YtviZfC8EHLU1vZLEqK
        subject_person_id: p_hp1BYZqxYnZ9vKEumVVtoB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GsW6r3qNF4Z69HjUAkQgCS
          claim_id: c_bL4YtviZfC8EHLU1vZLEqK
          source_id: s_xYF4ufNCgG6xmaZGJbmKwd
          stance: supports
          locator: CBDB:478410
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（478410）
          source: &a1
            id: s_xYF4ufNCgG6xmaZGJbmKwd
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 478410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478410&o=json
            external_identifier: CBDB:478410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.568Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_69Tc1qFs3C7ncydnJknVaM
        subject_person_id: p_hp1BYZqxYnZ9vKEumVVtoB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 478410）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rMXEx0vHa6gyBPaJqs8ffI
          claim_id: c_69Tc1qFs3C7ncydnJknVaM
          source_id: s_xYF4ufNCgG6xmaZGJbmKwd
          stance: supports
          locator: CBDB:478410
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

# 王鎬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎬 | accepted |
| bio.summary | 王鎬，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 478410） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎬（CBDB 478410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478410&o=json)
