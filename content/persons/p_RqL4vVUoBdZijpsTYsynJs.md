---
schema: wang-person/v1
id: p_RqL4vVUoBdZijpsTYsynJs
status: active
merged_into: null
display_name: 王世謙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ab961cePmh6GseAyct8me5
        subject_person_id: p_RqL4vVUoBdZijpsTYsynJs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Lg9G5oAbfK5s6Kdk9gCscm
          claim_id: c_Ab961cePmh6GseAyct8me5
          source_id: s_TPKv6QKQHUqEjHUbHhEELo
          stance: supports
          locator: CBDB:535207
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（535207）
          source: &a1
            id: s_TPKv6QKQHUqEjHUbHhEELo
            source_type: api_record
            title: 中国历代人物传记资料库：王世謙（CBDB 535207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=535207&o=json
            external_identifier: CBDB:535207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.389Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hfhpxr4LeRDPPy3PVZZ6gx
        subject_person_id: p_RqL4vVUoBdZijpsTYsynJs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世謙，宋人物。籍贯靈山，入仕進士。（中国历代人物传记资料库 CBDB 535207）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Gwl3ytxZF_kboXEwQ_SOMg
          claim_id: c_Hfhpxr4LeRDPPy3PVZZ6gx
          source_id: s_TPKv6QKQHUqEjHUbHhEELo
          stance: supports
          locator: CBDB:535207
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

# 王世謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世謙 | accepted |
| bio.summary | 王世謙，宋人物。籍贯靈山，入仕進士。（中国历代人物传记资料库 CBDB 535207） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世謙（CBDB 535207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=535207&o=json)
