---
schema: wang-person/v1
id: p_dA1UMvYxPE7L63LFF3g7iw
status: active
merged_into: null
display_name: 王衍褔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qgs29ch78kTVBD2h9GKy1A
        subject_person_id: p_dA1UMvYxPE7L63LFF3g7iw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍褔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GZsYSkdrGpLqHP3di6QvmY
          claim_id: c_Qgs29ch78kTVBD2h9GKy1A
          source_id: s_sdEkihVJj13LQimBXuHUKZ
          stance: supports
          locator: CBDB:640207
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640207）
          source: &a1
            id: s_sdEkihVJj13LQimBXuHUKZ
            source_type: api_record
            title: 中国历代人物传记资料库：王衍褔（CBDB 640207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640207&o=json
            external_identifier: CBDB:640207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.184Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fAKsfhQn4723Sqh41miRvW
        subject_person_id: p_dA1UMvYxPE7L63LFF3g7iw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍褔，清人物。籍贯諸城，曾任郎中。（中国历代人物传记资料库 CBDB 640207）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jzRgNwuby7Hu0YK-QGKxrr
          claim_id: c_fAKsfhQn4723Sqh41miRvW
          source_id: s_sdEkihVJj13LQimBXuHUKZ
          stance: supports
          locator: CBDB:640207
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

# 王衍褔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衍褔 | accepted |
| bio.summary | 王衍褔，清人物。籍贯諸城，曾任郎中。（中国历代人物传记资料库 CBDB 640207） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衍褔（CBDB 640207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640207&o=json)
