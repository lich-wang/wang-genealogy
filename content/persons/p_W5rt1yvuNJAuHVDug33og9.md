---
schema: wang-person/v1
id: p_W5rt1yvuNJAuHVDug33og9
status: active
merged_into: null
display_name: 王九思
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ASEWykKD6uAVb2eLLjDahG
        subject_person_id: p_W5rt1yvuNJAuHVDug33og9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九思
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZeVjpJefV9M5YLdhLdNGHD
          claim_id: c_ASEWykKD6uAVb2eLLjDahG
          source_id: s_ydwfHr41296Qdk5rtBAXt1
          stance: supports
          locator: CBDB:221743
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221743）
          source: &a1
            id: s_ydwfHr41296Qdk5rtBAXt1
            source_type: api_record
            title: 中国历代人物传记资料库：王九思（CBDB 221743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221743&o=json
            external_identifier: CBDB:221743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.332Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZhnSrksEYxABHgDr9jMu4t
        subject_person_id: p_W5rt1yvuNJAuHVDug33og9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九思，明人物。萬曆八年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 221743）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dACHoNdxnTMMTkwbT3-cCT
          claim_id: c_ZhnSrksEYxABHgDr9jMu4t
          source_id: s_ydwfHr41296Qdk5rtBAXt1
          stance: supports
          locator: CBDB:221743
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

# 王九思

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九思 | accepted |
| bio.summary | 王九思，明人物。萬曆八年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 221743） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九思（CBDB 221743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221743&o=json)
