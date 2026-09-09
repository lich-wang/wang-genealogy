---
schema: wang-person/v1
id: p_L88i6vLQB7g8KwkfZdBuVT
status: active
merged_into: null
display_name: 王若拙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CV6KCLMNpBVxWJ9TH1LkbN
        subject_person_id: p_L88i6vLQB7g8KwkfZdBuVT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若拙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_svwJaKyVBwJGgzECNjpmYX
          claim_id: c_CV6KCLMNpBVxWJ9TH1LkbN
          source_id: s_BceMBkePKFZbn5LCTFab3v
          stance: supports
          locator: CBDB:101293
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101293）
          source: &a1
            id: s_BceMBkePKFZbn5LCTFab3v
            source_type: api_record
            title: 中国历代人物传记资料库：王若拙（CBDB 101293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101293&o=json
            external_identifier: CBDB:101293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BpgGCAPxx9159W7mzt2JW4
        subject_person_id: p_L88i6vLQB7g8KwkfZdBuVT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XGAkGfPhXhA8ZwnMUihkgL
          claim_id: c_BpgGCAPxx9159W7mzt2JW4
          source_id: s_BceMBkePKFZbn5LCTFab3v
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王若拙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王若拙 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王若拙（CBDB 101293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101293&o=json)
