---
schema: wang-person/v1
id: p_6HnBDuxQQRyhyukrT2Hm9A
status: active
merged_into: null
display_name: 王用明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tfHM97bekJGvezZQNA88uv
        subject_person_id: p_6HnBDuxQQRyhyukrT2Hm9A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DKZyRSy98tx6pn4xSpQ1e6
          claim_id: c_tfHM97bekJGvezZQNA88uv
          source_id: s_afo2AhEZJbbaif5Gr3pnFS
          stance: supports
          locator: CBDB:639468
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639468）
          source: &a1
            id: s_afo2AhEZJbbaif5Gr3pnFS
            source_type: api_record
            title: 中国历代人物传记资料库：王用明（CBDB 639468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639468&o=json
            external_identifier: CBDB:639468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FG9fMb1p8wDuFCCt3QNt76
        subject_person_id: p_6HnBDuxQQRyhyukrT2Hm9A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用明，清人物。籍贯博平，入仕鄉貢舉人，曾任教諭、知縣。（中国历代人物传记资料库 CBDB 639468）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aeGK0vAo0Du31HlRy6yMBR
          claim_id: c_FG9fMb1p8wDuFCCt3QNt76
          source_id: s_afo2AhEZJbbaif5Gr3pnFS
          stance: supports
          locator: CBDB:639468
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

# 王用明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用明 | accepted |
| bio.summary | 王用明，清人物。籍贯博平，入仕鄉貢舉人，曾任教諭、知縣。（中国历代人物传记资料库 CBDB 639468） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用明（CBDB 639468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639468&o=json)
