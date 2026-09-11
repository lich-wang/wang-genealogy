---
schema: wang-person/v1
id: p_G4gwD57itpnSG9ShuQWCgL
status: active
merged_into: null
display_name: 王汝弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HpXjkGpkS3PuyBQYN71NHq
        subject_person_id: p_G4gwD57itpnSG9ShuQWCgL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uBJ6f8odQLVJ3TEJysWoPp
          claim_id: c_HpXjkGpkS3PuyBQYN71NHq
          source_id: s_cHdc1qLk3QXQinJ7y8Aih9
          stance: supports
          locator: CBDB:101178
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101178）
          source: &a1
            id: s_cHdc1qLk3QXQinJ7y8Aih9
            source_type: api_record
            title: 中国历代人物传记资料库：王汝弼（CBDB 101178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101178&o=json
            external_identifier: CBDB:101178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.727Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2E3Wa2bXFVQVFLBXYmDNAQ
        subject_person_id: p_G4gwD57itpnSG9ShuQWCgL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝弼，元人物。曾任路同知。（中国历代人物传记资料库 CBDB 101178）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IOPaq8mS7qzb7cOH7thbW0
          claim_id: c_2E3Wa2bXFVQVFLBXYmDNAQ
          source_id: s_cHdc1qLk3QXQinJ7y8Aih9
          stance: supports
          locator: CBDB:101178
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

# 王汝弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝弼 | accepted |
| bio.summary | 王汝弼，元人物。曾任路同知。（中国历代人物传记资料库 CBDB 101178） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝弼（CBDB 101178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101178&o=json)
