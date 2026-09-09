---
schema: wang-person/v1
id: p_37rkiikhK7mSRwya7YxjRB
status: active
merged_into: null
display_name: 王嶽松
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uffLsT2wPpGqw6h77233RN
        subject_person_id: p_37rkiikhK7mSRwya7YxjRB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶽松
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nq3GjnPFNY8DPPhtWfft6n
          claim_id: c_uffLsT2wPpGqw6h77233RN
          source_id: s_7j9TdRXQN8294RSJgVvao3
          stance: supports
          locator: CBDB:637381
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637381）
          source: &a1
            id: s_7j9TdRXQN8294RSJgVvao3
            source_type: api_record
            title: 中国历代人物传记资料库：王嶽松（CBDB 637381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637381&o=json
            external_identifier: CBDB:637381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.300Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bPyVDb4Y8zDxvXDZBvRf3r
        subject_person_id: p_37rkiikhK7mSRwya7YxjRB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FdD4o5fcHTMrataZevrAGH
          claim_id: c_bPyVDb4Y8zDxvXDZBvRf3r
          source_id: s_7j9TdRXQN8294RSJgVvao3
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

# 王嶽松

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嶽松 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嶽松（CBDB 637381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637381&o=json)
