---
schema: wang-person/v1
id: p_4YWJZ3kSNXJ3VKSk39U3uM
status: active
merged_into: null
display_name: 王光國
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qBUBeaTrnc2DGCYw286DjF
        subject_person_id: p_4YWJZ3kSNXJ3VKSk39U3uM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4rBGL5kwJZtUHs8t7tgEtH
          claim_id: c_qBUBeaTrnc2DGCYw286DjF
          source_id: s_qozC5iiMxdtVSTLobMtq8r
          stance: supports
          locator: CBDB:101153
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101153）
          source: &a1
            id: s_qozC5iiMxdtVSTLobMtq8r
            source_type: api_record
            title: 中国历代人物传记资料库：王光國（CBDB 101153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101153&o=json
            external_identifier: CBDB:101153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.705Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fs7ro6C5jPbwCc5KyvsYSk
        subject_person_id: p_4YWJZ3kSNXJ3VKSk39U3uM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光國，元人物。籍贯集慶路，曾任縣主簿。（中国历代人物传记资料库 CBDB 101153）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bf6xHWwukAa_R4S0SJEhJM
          claim_id: c_fs7ro6C5jPbwCc5KyvsYSk
          source_id: s_qozC5iiMxdtVSTLobMtq8r
          stance: supports
          locator: CBDB:101153
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

# 王光國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光國 | accepted |
| bio.summary | 王光國，元人物。籍贯集慶路，曾任縣主簿。（中国历代人物传记资料库 CBDB 101153） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光國（CBDB 101153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101153&o=json)
