---
schema: wang-person/v1
id: p_7sMXHQmm37imqYqf3tQooB
status: active
merged_into: null
display_name: 王恩照
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FR2QT9EHTHV7SH2DteLemq
        subject_person_id: p_7sMXHQmm37imqYqf3tQooB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩照
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6eK241648oM3h5Raq7dWZn
          claim_id: c_FR2QT9EHTHV7SH2DteLemq
          source_id: s_A4zRUi7PfYxZ6VdPQ1vQSu
          stance: supports
          locator: CBDB:637849
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637849）
          source: &a1
            id: s_A4zRUi7PfYxZ6VdPQ1vQSu
            source_type: api_record
            title: 中国历代人物传记资料库：王恩照（CBDB 637849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637849&o=json
            external_identifier: CBDB:637849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NyRQQLj3eWHupRwp2KL2p6
        subject_person_id: p_7sMXHQmm37imqYqf3tQooB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩照，清人物。籍贯歙縣，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 637849）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rVDdYD2DeyQKUpevvoEFPy
          claim_id: c_NyRQQLj3eWHupRwp2KL2p6
          source_id: s_A4zRUi7PfYxZ6VdPQ1vQSu
          stance: supports
          locator: CBDB:637849
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

# 王恩照

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩照 | accepted |
| bio.summary | 王恩照，清人物。籍贯歙縣，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 637849） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恩照（CBDB 637849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637849&o=json)
