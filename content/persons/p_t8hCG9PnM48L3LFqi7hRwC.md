---
schema: wang-person/v1
id: p_t8hCG9PnM48L3LFqi7hRwC
status: active
merged_into: null
display_name: 王泰曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hH5jsNmCyHfMN4Sgs6q97R
        subject_person_id: p_t8hCG9PnM48L3LFqi7hRwC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HqfdenJ3fj8ALs5GhAvKoE
          claim_id: c_hH5jsNmCyHfMN4Sgs6q97R
          source_id: s_cdYQp9hZVWGJFXeskQwyTP
          stance: supports
          locator: CBDB:639077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639077）
          source: &a1
            id: s_cdYQp9hZVWGJFXeskQwyTP
            source_type: api_record
            title: 中国历代人物传记资料库：王泰曾（CBDB 639077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639077&o=json
            external_identifier: CBDB:639077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oNfhn568Gy5vLF1Sz4t5Nf
        subject_person_id: p_t8hCG9PnM48L3LFqi7hRwC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰曾，清人物。籍贯宛平，入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 639077）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rCJrdIMLswwJAUxChHEYUR
          claim_id: c_oNfhn568Gy5vLF1Sz4t5Nf
          source_id: s_cdYQp9hZVWGJFXeskQwyTP
          stance: supports
          locator: CBDB:639077
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

# 王泰曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰曾 | accepted |
| bio.summary | 王泰曾，清人物。籍贯宛平，入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 639077） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泰曾（CBDB 639077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639077&o=json)
