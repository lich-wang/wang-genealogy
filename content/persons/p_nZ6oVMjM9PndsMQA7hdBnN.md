---
schema: wang-person/v1
id: p_nZ6oVMjM9PndsMQA7hdBnN
status: active
merged_into: null
display_name: 王致中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k2LCqDmodxF4PoJTFpZA75
        subject_person_id: p_nZ6oVMjM9PndsMQA7hdBnN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_56asDVJZMJNjjuPituCAZ2
          claim_id: c_k2LCqDmodxF4PoJTFpZA75
          source_id: s_mBW2EfJe6aXNQ6Mmhmos7T
          stance: supports
          locator: CBDB:206164
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206164）
          source: &a1
            id: s_mBW2EfJe6aXNQ6Mmhmos7T
            source_type: api_record
            title: 中国历代人物传记资料库：王致中（CBDB 206164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206164&o=json
            external_identifier: CBDB:206164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_G5V2B3CjGxo8J8Hkz9AMSx
        subject_person_id: p_nZ6oVMjM9PndsMQA7hdBnN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1547年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q78BX576BE4mc6X8CKo2s4
          claim_id: c_G5V2B3CjGxo8J8Hkz9AMSx
          source_id: s_mBW2EfJe6aXNQ6Mmhmos7T
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GP17mBnfSm7EME6Y68hXyn
        subject_person_id: p_nZ6oVMjM9PndsMQA7hdBnN
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
        - id: cs_yHKrZL5QJp5SZXJUXgWBPe
          claim_id: c_GP17mBnfSm7EME6Y68hXyn
          source_id: s_mBW2EfJe6aXNQ6Mmhmos7T
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

# 王致中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王致中 | accepted |
| birth.date | 1547年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王致中（CBDB 206164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206164&o=json)
