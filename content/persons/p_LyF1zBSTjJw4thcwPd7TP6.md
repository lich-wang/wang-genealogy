---
schema: wang-person/v1
id: p_LyF1zBSTjJw4thcwPd7TP6
status: active
merged_into: null
display_name: 王文寧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bSmGnvfMD8DNpj8md6FXLx
        subject_person_id: p_LyF1zBSTjJw4thcwPd7TP6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kyaYWjtBjwC37azHsF14fY
          claim_id: c_bSmGnvfMD8DNpj8md6FXLx
          source_id: s_GoezBeWvUXETBBi15uDfxt
          stance: supports
          locator: CBDB:573945
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573945）
          source: &a1
            id: s_GoezBeWvUXETBBi15uDfxt
            source_type: api_record
            title: 中国历代人物传记资料库：王文寧（CBDB 573945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573945&o=json
            external_identifier: CBDB:573945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.668Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yt4e1tJ3pr8myGf4RTCdtY
        subject_person_id: p_LyF1zBSTjJw4thcwPd7TP6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文寧，清人物。籍贯漢陽。（中国历代人物传记资料库 CBDB 573945）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fHsEIUsQT8PREQw-bB3uKn
          claim_id: c_Yt4e1tJ3pr8myGf4RTCdtY
          source_id: s_GoezBeWvUXETBBi15uDfxt
          stance: supports
          locator: CBDB:573945
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

# 王文寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文寧 | accepted |
| bio.summary | 王文寧，清人物。籍贯漢陽。（中国历代人物传记资料库 CBDB 573945） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文寧（CBDB 573945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573945&o=json)
