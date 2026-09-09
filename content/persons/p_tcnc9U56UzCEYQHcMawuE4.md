---
schema: wang-person/v1
id: p_tcnc9U56UzCEYQHcMawuE4
status: active
merged_into: null
display_name: 王十朋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dSM64YHV38zA4MDLipxqmz
        subject_person_id: p_tcnc9U56UzCEYQHcMawuE4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王十朋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FtkKWJSpA6QNPhfrchAcMb
          claim_id: c_dSM64YHV38zA4MDLipxqmz
          source_id: s_7HzyayY9Q2afFnRxZAR4YR
          stance: supports
          locator: CBDB:10598
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10598）
          source: &a1
            id: s_7HzyayY9Q2afFnRxZAR4YR
            source_type: api_record
            title: 中国历代人物传记资料库：王十朋（CBDB 10598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10598&o=json
            external_identifier: CBDB:10598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.537Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gnz7isdJW5WSMmP7wRHcv5
        subject_person_id: p_tcnc9U56UzCEYQHcMawuE4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1112年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jk71QGRPN3XxCjgnMFcuQ7
          claim_id: c_gnz7isdJW5WSMmP7wRHcv5
          source_id: s_7HzyayY9Q2afFnRxZAR4YR
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
        id: c_pN6U9RGyhMCeTuQis6YrW7
        subject_person_id: p_tcnc9U56UzCEYQHcMawuE4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1171年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BTwLkCBiT9pKx47Z5bU6oR
          claim_id: c_pN6U9RGyhMCeTuQis6YrW7
          source_id: s_7HzyayY9Q2afFnRxZAR4YR
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
        id: c_jmQ9yM8N1hoqVn1J54MxnR
        subject_person_id: p_tcnc9U56UzCEYQHcMawuE4
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
        - id: cs_7wd2u6HdJL8CKyVqNtihsA
          claim_id: c_jmQ9yM8N1hoqVn1J54MxnR
          source_id: s_7HzyayY9Q2afFnRxZAR4YR
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

# 王十朋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王十朋 | accepted |
| birth.date | 1112年 | accepted |
| death.date | 1171年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王十朋（CBDB 10598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10598&o=json)
