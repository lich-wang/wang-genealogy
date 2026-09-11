---
schema: wang-person/v1
id: p_Juc4KBHvt2sMy78HwQ3gzd
status: active
merged_into: null
display_name: 王大年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QiyiobiXH7c1CkwLcrHBuq
        subject_person_id: p_Juc4KBHvt2sMy78HwQ3gzd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DCv5romeujDjjBCaEr7rKJ
          claim_id: c_QiyiobiXH7c1CkwLcrHBuq
          source_id: s_vQ47fKWr5EaDHpzreTJCyL
          stance: supports
          locator: CBDB:126456
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126456）
          source: &a1
            id: s_vQ47fKWr5EaDHpzreTJCyL
            source_type: api_record
            title: 中国历代人物传记资料库：王大年（CBDB 126456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126456&o=json
            external_identifier: CBDB:126456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ddrG2q622kW3ePNMFZM49x
        subject_person_id: p_Juc4KBHvt2sMy78HwQ3gzd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大年，明人物。籍贯壽張。（中国历代人物传记资料库 CBDB 126456）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_b0fJzdkV2BZDgcRdfT8z2A
          claim_id: c_ddrG2q622kW3ePNMFZM49x
          source_id: s_vQ47fKWr5EaDHpzreTJCyL
          stance: supports
          locator: CBDB:126456
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

# 王大年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大年 | accepted |
| bio.summary | 王大年，明人物。籍贯壽張。（中国历代人物传记资料库 CBDB 126456） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大年（CBDB 126456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126456&o=json)
