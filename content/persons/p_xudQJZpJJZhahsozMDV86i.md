---
schema: wang-person/v1
id: p_xudQJZpJJZhahsozMDV86i
status: active
merged_into: null
display_name: 王茂瓊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qD64J1SCAfJvE5pYEPyfrE
        subject_person_id: p_xudQJZpJJZhahsozMDV86i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂瓊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Njp8tXwgSRejZxqYwGFp4S
          claim_id: c_qD64J1SCAfJvE5pYEPyfrE
          source_id: s_vBzDBqA84pq5oAn7YowZsE
          stance: supports
          locator: CBDB:683891
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683891）
          source: &a1
            id: s_vBzDBqA84pq5oAn7YowZsE
            source_type: api_record
            title: 中国历代人物传记资料库：王茂瓊（CBDB 683891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683891&o=json
            external_identifier: CBDB:683891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fUo3sXZom5pPfbg9oVY4tK
        subject_person_id: p_xudQJZpJJZhahsozMDV86i
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
        - id: cs_Qxrm2XQeuokNLmbgBd5skv
          claim_id: c_fUo3sXZom5pPfbg9oVY4tK
          source_id: s_vBzDBqA84pq5oAn7YowZsE
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

# 王茂瓊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂瓊 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王茂瓊（CBDB 683891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683891&o=json)
