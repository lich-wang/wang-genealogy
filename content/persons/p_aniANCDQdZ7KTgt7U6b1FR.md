---
schema: wang-person/v1
id: p_aniANCDQdZ7KTgt7U6b1FR
status: active
merged_into: null
display_name: 王聯庚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HNsybm2MhX4SDnooKTcSiG
        subject_person_id: p_aniANCDQdZ7KTgt7U6b1FR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聯庚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z1TBtr8o1vQswQATH4b8uu
          claim_id: c_HNsybm2MhX4SDnooKTcSiG
          source_id: s_wnZcaV2aTPnoMycd14q7hP
          stance: supports
          locator: CBDB:639957
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639957）
          source: &a1
            id: s_wnZcaV2aTPnoMycd14q7hP
            source_type: api_record
            title: 中国历代人物传记资料库：王聯庚（CBDB 639957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639957&o=json
            external_identifier: CBDB:639957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7QUNNUhA5GPHhVq2VQBh65
        subject_person_id: p_aniANCDQdZ7KTgt7U6b1FR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聯庚，清人物。籍贯甘泉，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 639957）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vtJJSd6MWRooWMsBVixkt7
          claim_id: c_7QUNNUhA5GPHhVq2VQBh65
          source_id: s_wnZcaV2aTPnoMycd14q7hP
          stance: supports
          locator: CBDB:639957
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

# 王聯庚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聯庚 | accepted |
| bio.summary | 王聯庚，清人物。籍贯甘泉，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 639957） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聯庚（CBDB 639957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639957&o=json)
