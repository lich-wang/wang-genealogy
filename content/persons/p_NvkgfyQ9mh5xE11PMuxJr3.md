---
schema: wang-person/v1
id: p_NvkgfyQ9mh5xE11PMuxJr3
status: active
merged_into: null
display_name: 王業永
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_edEpwShXJPQt5pRCNe5mi5
        subject_person_id: p_NvkgfyQ9mh5xE11PMuxJr3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業永
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cXft1X2uTeL2xf1aafHQj6
          claim_id: c_edEpwShXJPQt5pRCNe5mi5
          source_id: s_AKgqKw8xuLfJiSju6hgLbD
          stance: supports
          locator: CBDB:638773
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638773）
          source: &a1
            id: s_AKgqKw8xuLfJiSju6hgLbD
            source_type: api_record
            title: 中国历代人物传记资料库：王業永（CBDB 638773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638773&o=json
            external_identifier: CBDB:638773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.742Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pnxT1BVM66eJFEKCQU6dx2
        subject_person_id: p_NvkgfyQ9mh5xE11PMuxJr3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業永，清人物。籍贯莊浪廳，曾任訓導。（中国历代人物传记资料库 CBDB 638773）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Pce7smLkl1qpGzSxoubMCP
          claim_id: c_pnxT1BVM66eJFEKCQU6dx2
          source_id: s_AKgqKw8xuLfJiSju6hgLbD
          stance: supports
          locator: CBDB:638773
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

# 王業永

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王業永 | accepted |
| bio.summary | 王業永，清人物。籍贯莊浪廳，曾任訓導。（中国历代人物传记资料库 CBDB 638773） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王業永（CBDB 638773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638773&o=json)
