---
schema: wang-person/v1
id: p_6iaxkbFLC47F26S9TZmy4A
status: active
merged_into: null
display_name: 王秉愨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_obZL48DnFzoRH2vdpT8wjG
        subject_person_id: p_6iaxkbFLC47F26S9TZmy4A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉愨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fEoM7uGZxAQv2TDny5CUhz
          claim_id: c_obZL48DnFzoRH2vdpT8wjG
          source_id: s_1QcGtHQDiocfKQFb1t5pVt
          stance: supports
          locator: CBDB:639650
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639650）
          source: &a1
            id: s_1QcGtHQDiocfKQFb1t5pVt
            source_type: api_record
            title: 中国历代人物传记资料库：王秉愨（CBDB 639650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639650&o=json
            external_identifier: CBDB:639650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4hKAAXiUPGBL6NrCDRqFKL
        subject_person_id: p_6iaxkbFLC47F26S9TZmy4A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉愨，清人物。籍贯華陽，入仕附貢生，曾任知縣。（中国历代人物传记资料库 CBDB 639650）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IaSq49kfojR8cnaqEFFN1B
          claim_id: c_4hKAAXiUPGBL6NrCDRqFKL
          source_id: s_1QcGtHQDiocfKQFb1t5pVt
          stance: supports
          locator: CBDB:639650
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

# 王秉愨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉愨 | accepted |
| bio.summary | 王秉愨，清人物。籍贯華陽，入仕附貢生，曾任知縣。（中国历代人物传记资料库 CBDB 639650） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉愨（CBDB 639650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639650&o=json)
