---
schema: wang-person/v1
id: p_2vPPvcmJM8KUSp95F7PJ7s
status: active
merged_into: null
display_name: 王定章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6sq6P8DPHDWbfm79MpxvdL
        subject_person_id: p_2vPPvcmJM8KUSp95F7PJ7s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q1vjHSVnez6Hn8WoiA1Zx2
          claim_id: c_6sq6P8DPHDWbfm79MpxvdL
          source_id: s_CB6tN7nGNmBdYiQNuzPcxY
          stance: supports
          locator: CBDB:637140
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637140）
          source: &a1
            id: s_CB6tN7nGNmBdYiQNuzPcxY
            source_type: api_record
            title: 中国历代人物传记资料库：王定章（CBDB 637140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637140&o=json
            external_identifier: CBDB:637140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZDPkHKp8uf4qXD79HRDb3Z
        subject_person_id: p_2vPPvcmJM8KUSp95F7PJ7s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定章，清人物。籍贯海康，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 637140）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FMgzD1TYHPUygRb_kBNTT0
          claim_id: c_ZDPkHKp8uf4qXD79HRDb3Z
          source_id: s_CB6tN7nGNmBdYiQNuzPcxY
          stance: supports
          locator: CBDB:637140
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

# 王定章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定章 | accepted |
| bio.summary | 王定章，清人物。籍贯海康，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 637140） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定章（CBDB 637140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637140&o=json)
