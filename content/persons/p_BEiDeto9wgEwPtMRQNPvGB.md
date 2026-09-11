---
schema: wang-person/v1
id: p_BEiDeto9wgEwPtMRQNPvGB
status: active
merged_into: null
display_name: 王默
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PHi6WWPy1C8Cye89LGHwdV
        subject_person_id: p_BEiDeto9wgEwPtMRQNPvGB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王默
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PtbmHGmyKAGGC7YXAnz3D7
          claim_id: c_PHi6WWPy1C8Cye89LGHwdV
          source_id: s_Y1QLuajFk9kUfASd9ckbS5
          stance: supports
          locator: CBDB:641040
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641040）
          source: &a1
            id: s_Y1QLuajFk9kUfASd9ckbS5
            source_type: api_record
            title: 中国历代人物传记资料库：王默（CBDB 641040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641040&o=json
            external_identifier: CBDB:641040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L5j16Adsu4eihxYCYhjFBD
        subject_person_id: p_BEiDeto9wgEwPtMRQNPvGB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王默，清人物。籍贯三原，入仕鄉貢舉人，曾任教授、訓導、知縣。（中国历代人物传记资料库 CBDB 641040）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D4GdcHb9SpW1h9M1Klzv1c
          claim_id: c_L5j16Adsu4eihxYCYhjFBD
          source_id: s_Y1QLuajFk9kUfASd9ckbS5
          stance: supports
          locator: CBDB:641040
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

# 王默

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王默 | accepted |
| bio.summary | 王默，清人物。籍贯三原，入仕鄉貢舉人，曾任教授、訓導、知縣。（中国历代人物传记资料库 CBDB 641040） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王默（CBDB 641040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641040&o=json)
