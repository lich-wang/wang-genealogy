---
schema: wang-person/v1
id: p_5ymkXNmxtGSAkm43w2wcrR
status: active
merged_into: null
display_name: 王恩湛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oG8xvzWCDKBUtCfL5cJwe9
        subject_person_id: p_5ymkXNmxtGSAkm43w2wcrR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩湛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SJbomfjGB2FbRUmgTU4cee
          claim_id: c_oG8xvzWCDKBUtCfL5cJwe9
          source_id: s_PneVPc7XdPbFLVqGcK56qU
          stance: supports
          locator: CBDB:637843
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637843）
          source: &a1
            id: s_PneVPc7XdPbFLVqGcK56qU
            source_type: api_record
            title: 中国历代人物传记资料库：王恩湛（CBDB 637843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637843&o=json
            external_identifier: CBDB:637843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u2kcPcvAubAcasN6sDetDm
        subject_person_id: p_5ymkXNmxtGSAkm43w2wcrR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩湛，清人物。籍贯義寧州，入仕監生，曾任典史、知縣。（中国历代人物传记资料库 CBDB 637843）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4gu3Pz2gQdCnFmxSEjFyMY
          claim_id: c_u2kcPcvAubAcasN6sDetDm
          source_id: s_PneVPc7XdPbFLVqGcK56qU
          stance: supports
          locator: CBDB:637843
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

# 王恩湛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩湛 | accepted |
| bio.summary | 王恩湛，清人物。籍贯義寧州，入仕監生，曾任典史、知縣。（中国历代人物传记资料库 CBDB 637843） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恩湛（CBDB 637843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637843&o=json)
