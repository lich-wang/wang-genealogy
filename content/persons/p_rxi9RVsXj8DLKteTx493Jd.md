---
schema: wang-person/v1
id: p_rxi9RVsXj8DLKteTx493Jd
status: active
merged_into: null
display_name: 王岳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ygKYRW4myNpuKtCeC3p2fb
        subject_person_id: p_rxi9RVsXj8DLKteTx493Jd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岳
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XBseo3VimZMSrEXDcqb9Pm
          claim_id: c_ygKYRW4myNpuKtCeC3p2fb
          source_id: s_pUZsoy817C7FKobgJa11mG
          stance: supports
          locator: CBDB:39517
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39517）
          source: &a1
            id: s_pUZsoy817C7FKobgJa11mG
            source_type: api_record
            title: 中国历代人物传记资料库：王岳（CBDB 39517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39517&o=json
            external_identifier: CBDB:39517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CNiDZNtFUK8pB24T43DX3w
        subject_person_id: p_rxi9RVsXj8DLKteTx493Jd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1035年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kiK2ijWD1qxEdsvFpZ7cfV
          claim_id: c_CNiDZNtFUK8pB24T43DX3w
          source_id: s_pUZsoy817C7FKobgJa11mG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ASK4f8x8uZEtnYHJM4pW8Z
        subject_person_id: p_rxi9RVsXj8DLKteTx493Jd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1080年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gRJEVR3dppwRMSMk8cbkXW
          claim_id: c_ASK4f8x8uZEtnYHJM4pW8Z
          source_id: s_pUZsoy817C7FKobgJa11mG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1s4CAZYLWn8GveTTYiomjD
        subject_person_id: p_rxi9RVsXj8DLKteTx493Jd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dQLc1dKc1XaUyxgPvYWVjy
          claim_id: c_1s4CAZYLWn8GveTTYiomjD
          source_id: s_pUZsoy817C7FKobgJa11mG
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

# 王岳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王岳 | accepted |
| birth.date | 1035年 | accepted |
| death.date | 1080年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王岳（CBDB 39517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39517&o=json)
