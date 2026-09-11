---
schema: wang-person/v1
id: p_QGhSwt4APqvhX37Hy6qW5R
status: active
merged_into: null
display_name: 王一德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TjEBXvqYzaZJz8vVy1up7C
        subject_person_id: p_QGhSwt4APqvhX37Hy6qW5R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DGXVF3S2S6hPtSh4KkDm92
          claim_id: c_TjEBXvqYzaZJz8vVy1up7C
          source_id: s_7hL8ti33uZ2KyLiRgDydLp
          stance: supports
          locator: CBDB:635616
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635616）
          source: &a1
            id: s_7hL8ti33uZ2KyLiRgDydLp
            source_type: api_record
            title: 中国历代人物传记资料库：王一德（CBDB 635616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635616&o=json
            external_identifier: CBDB:635616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Wi5ikjs2KVcXD6sTtaiY9v
        subject_person_id: p_QGhSwt4APqvhX37Hy6qW5R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王一德，清人物。籍贯漢中府，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 635616）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T1XcXDOS1pEewt3MmkdK0c
          claim_id: c_Wi5ikjs2KVcXD6sTtaiY9v
          source_id: s_7hL8ti33uZ2KyLiRgDydLp
          stance: supports
          locator: CBDB:635616
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

# 王一德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一德 | accepted |
| bio.summary | 王一德，清人物。籍贯漢中府，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 635616） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一德（CBDB 635616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635616&o=json)
