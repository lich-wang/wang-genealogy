---
schema: wang-person/v1
id: p_PXux1D6B6V3UPtmqmvahLX
status: active
merged_into: null
display_name: 王國熊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NfYhtPimChY9EGLyyycg5o
        subject_person_id: p_PXux1D6B6V3UPtmqmvahLX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國熊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z85VM8rJQBqX2GXAz5o8P7
          claim_id: c_NfYhtPimChY9EGLyyycg5o
          source_id: s_7o313PsJS9Z5ThCwzJTKkQ
          stance: supports
          locator: CBDB:636662
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636662）
          source: &a1
            id: s_7o313PsJS9Z5ThCwzJTKkQ
            source_type: api_record
            title: 中国历代人物传记资料库：王國熊（CBDB 636662）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636662&o=json
            external_identifier: CBDB:636662
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.062Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CMY2tZ2JukNB8gmZj6cLHf
        subject_person_id: p_PXux1D6B6V3UPtmqmvahLX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國熊，清人物。籍贯當塗，曾任經歷。（中国历代人物传记资料库 CBDB 636662）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6s2d_rUdh1JS4SXivfRzXV
          claim_id: c_CMY2tZ2JukNB8gmZj6cLHf
          source_id: s_7o313PsJS9Z5ThCwzJTKkQ
          stance: supports
          locator: CBDB:636662
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

# 王國熊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國熊 | accepted |
| bio.summary | 王國熊，清人物。籍贯當塗，曾任經歷。（中国历代人物传记资料库 CBDB 636662） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國熊（CBDB 636662）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636662&o=json)
