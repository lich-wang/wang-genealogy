---
schema: wang-person/v1
id: p_Lj8WT4nJBhsqQXhWW65SRH
status: active
merged_into: null
display_name: 王志善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DdQceN7BbqVj8t16gs1qSQ
        subject_person_id: p_Lj8WT4nJBhsqQXhWW65SRH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6KSGG5XqLmH1mrK7VU6cYB
          claim_id: c_DdQceN7BbqVj8t16gs1qSQ
          source_id: s_dBrYfWL3BziDyL6Xb7sSXW
          stance: supports
          locator: CBDB:237442
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237442）
          source: &a1
            id: s_dBrYfWL3BziDyL6Xb7sSXW
            source_type: api_record
            title: 中国历代人物传记资料库：王志善（CBDB 237442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237442&o=json
            external_identifier: CBDB:237442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MZbScjFrj7jzTyRENHsrH7
        subject_person_id: p_Lj8WT4nJBhsqQXhWW65SRH
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
        - id: cs_x1iBBwYHJ85azsQ3MfftqL
          claim_id: c_MZbScjFrj7jzTyRENHsrH7
          source_id: s_dBrYfWL3BziDyL6Xb7sSXW
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

# 王志善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志善 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志善（CBDB 237442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237442&o=json)
