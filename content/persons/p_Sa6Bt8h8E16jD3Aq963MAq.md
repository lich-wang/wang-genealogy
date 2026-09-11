---
schema: wang-person/v1
id: p_Sa6Bt8h8E16jD3Aq963MAq
status: active
merged_into: null
display_name: 王晉坊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hcCQum2BdD8gWvLPomwnL5
        subject_person_id: p_Sa6Bt8h8E16jD3Aq963MAq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉坊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TNwFzwixNEybALNnTRkFwB
          claim_id: c_hcCQum2BdD8gWvLPomwnL5
          source_id: s_P65C7P2zB7y38jMw3NJXpH
          stance: supports
          locator: CBDB:638448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638448）
          source: &a1
            id: s_P65C7P2zB7y38jMw3NJXpH
            source_type: api_record
            title: 中国历代人物传记资料库：王晉坊（CBDB 638448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638448&o=json
            external_identifier: CBDB:638448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.637Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E2wkL5bQKm178QWeokyjXw
        subject_person_id: p_Sa6Bt8h8E16jD3Aq963MAq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉坊，清人物。籍贯天津，入仕附貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 638448）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1ya35_h0iWQy40agSCF9YA
          claim_id: c_E2wkL5bQKm178QWeokyjXw
          source_id: s_P65C7P2zB7y38jMw3NJXpH
          stance: supports
          locator: CBDB:638448
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

# 王晉坊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晉坊 | accepted |
| bio.summary | 王晉坊，清人物。籍贯天津，入仕附貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 638448） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晉坊（CBDB 638448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638448&o=json)
