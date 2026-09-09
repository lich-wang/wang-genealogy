---
schema: wang-person/v1
id: p_XHjxFr33V66bMh2ewvUp6q
status: active
merged_into: null
display_name: 王鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TxvGjZ38NHpGvcQ1z4Sj4Z
        subject_person_id: p_XHjxFr33V66bMh2ewvUp6q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Mk6fTG96Sm4jpdi9rGKDUn
          claim_id: c_TxvGjZ38NHpGvcQ1z4Sj4Z
          source_id: s_x1Xy84trPWJ1Qg5nVcS1uG
          stance: supports
          locator: CBDB:481130
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（481130）
          source: &a1
            id: s_x1Xy84trPWJ1Qg5nVcS1uG
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 481130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=481130&o=json
            external_identifier: CBDB:481130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.678Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p43j6dZVoabu9AGgKEuFo3
        subject_person_id: p_XHjxFr33V66bMh2ewvUp6q
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
        - id: cs_ER9ceyHwBNSvTxbgy9MKzj
          claim_id: c_p43j6dZVoabu9AGgKEuFo3
          source_id: s_x1Xy84trPWJ1Qg5nVcS1uG
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

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 481130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=481130&o=json)
