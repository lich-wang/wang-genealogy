---
schema: wang-person/v1
id: p_e7M8RKTrVfqAUJQg5RFuLs
status: active
merged_into: null
display_name: 王璉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pU3S2ULi7N47LsLmCNffQK
        subject_person_id: p_e7M8RKTrVfqAUJQg5RFuLs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eEQnL7LRA2HLZSa5dyy1D4
          claim_id: c_pU3S2ULi7N47LsLmCNffQK
          source_id: s_Qhb946qDbE4tcnnuDfojHu
          stance: supports
          locator: CBDB:297101
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297101）
          source: &a1
            id: s_Qhb946qDbE4tcnnuDfojHu
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 297101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297101&o=json
            external_identifier: CBDB:297101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.546Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HMZ19USC8dWJu6qTJkjz6D
        subject_person_id: p_e7M8RKTrVfqAUJQg5RFuLs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉，明人物。景泰二年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 297101）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jGk7cbOLEr0LJjvRVIw3P1
          claim_id: c_HMZ19USC8dWJu6qTJkjz6D
          source_id: s_Qhb946qDbE4tcnnuDfojHu
          stance: supports
          locator: CBDB:297101
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

# 王璉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璉 | accepted |
| bio.summary | 王璉，明人物。景泰二年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 297101） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璉（CBDB 297101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297101&o=json)
