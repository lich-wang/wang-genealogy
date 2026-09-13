---
schema: wang-person/v1
id: p_dfv7c6RbwBEAB3F1H21BXL
status: active
merged_into: null
display_name: 王隺孫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ACp8Uh6B2TaNqKcPt3RXvu
        subject_person_id: p_dfv7c6RbwBEAB3F1H21BXL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隺孫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iK5JBRNZeDxjQ4zdMvqwz4
          claim_id: c_ACp8Uh6B2TaNqKcPt3RXvu
          source_id: s_CQ429q9NH3ibtzE9HU7xrF
          stance: supports
          locator: CBDB:529291
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（529291）
          source: &a1
            id: s_CQ429q9NH3ibtzE9HU7xrF
            source_type: api_record
            title: 中国历代人物传记资料库：王隺孫（CBDB 529291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529291&o=json
            external_identifier: CBDB:529291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KthEEUFcM59aotEsYzKGoa
        subject_person_id: p_dfv7c6RbwBEAB3F1H21BXL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隺孫，史料所见人物。本项目依据《中国历代人物传记资料库：王隺孫（CBDB 529291）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9PPNLQShQFhyq1HtR_Zkbw
          claim_id: c_KthEEUFcM59aotEsYzKGoa
          source_id: s_CQ429q9NH3ibtzE9HU7xrF
          stance: supports
          locator: CBDB:529291
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_CfiUGyoELnoUSFdYnr1RL5
        subject_person_id: p_CqGGoAHd4xav6yj4gHyTHE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dfv7c6RbwBEAB3F1H21BXL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yzewPx7rzOs0Kp7QmG7R1J
          claim_id: c_CfiUGyoELnoUSFdYnr1RL5
          source_id: s_CQ429q9NH3ibtzE9HU7xrF
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），14977：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CqGGoAHd4xav6yj4gHyTHE
        status: active
        display_name: 王崇古
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王隺孫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王隺孫 | accepted |
| bio.summary | 王隺孫，史料所见人物。本项目依据《中国历代人物传记资料库：王隺孫（CBDB 529291）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_CqGGoAHd4xav6yj4gHyTHE | 王崇古 | accepted |

## 外部来源

- [中国历代人物传记资料库：王隺孫（CBDB 529291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529291&o=json)
