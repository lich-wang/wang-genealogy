---
schema: wang-person/v1
id: p_ebF1TFfJS5aAqtvgR3EeWF
status: active
merged_into: null
display_name: 王藻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EEoVT2ts6picCPGCTBwghL
        subject_person_id: p_ebF1TFfJS5aAqtvgR3EeWF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q9u85QiEwG1P1QMRhLFF9E
          claim_id: c_EEoVT2ts6picCPGCTBwghL
          source_id: s_bYHS9Y6rYHtKEUESXLjHBg
          stance: supports
          locator: CBDB:457201
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（457201）
          source: &a1
            id: s_bYHS9Y6rYHtKEUESXLjHBg
            source_type: api_record
            title: 中国历代人物传记资料库：王藻（CBDB 457201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457201&o=json
            external_identifier: CBDB:457201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.600Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Nez9L6EaBECsPd6FZp1C3N
        subject_person_id: p_ebF1TFfJS5aAqtvgR3EeWF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藻，清人物。曾任丞。（中国历代人物传记资料库 CBDB 457201）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M8Ka7n6h497TikpOSkSVsi
          claim_id: c_Nez9L6EaBECsPd6FZp1C3N
          source_id: s_bYHS9Y6rYHtKEUESXLjHBg
          stance: supports
          locator: CBDB:457201
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

# 王藻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藻 | accepted |
| bio.summary | 王藻，清人物。曾任丞。（中国历代人物传记资料库 CBDB 457201） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王藻（CBDB 457201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457201&o=json)
