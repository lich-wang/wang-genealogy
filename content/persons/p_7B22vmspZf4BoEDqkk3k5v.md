---
schema: wang-person/v1
id: p_7B22vmspZf4BoEDqkk3k5v
status: active
merged_into: null
display_name: 王潛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xgqNSNAt3SS3kDf5Q9i2oH
        subject_person_id: p_7B22vmspZf4BoEDqkk3k5v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fTBpdq6G5cPK5ZL38Vs747
          claim_id: c_xgqNSNAt3SS3kDf5Q9i2oH
          source_id: s_6AFekyDAhg4sJUGYJSTq3K
          stance: supports
          locator: CBDB:318105
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318105）
          source: &a1
            id: s_6AFekyDAhg4sJUGYJSTq3K
            source_type: api_record
            title: 中国历代人物传记资料库：王潛（CBDB 318105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318105&o=json
            external_identifier: CBDB:318105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GVfA6exKc865P7Ke9pk7DD
        subject_person_id: p_7B22vmspZf4BoEDqkk3k5v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cDCGeTuBxWuRUSmoB39kCM
          claim_id: c_GVfA6exKc865P7Ke9pk7DD
          source_id: s_6AFekyDAhg4sJUGYJSTq3K
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王潛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潛 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潛（CBDB 318105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318105&o=json)
