---
schema: wang-person/v1
id: p_6tdTGr8WHYZiKQmeHZ5QVe
status: active
merged_into: null
display_name: 王宗源
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6KDEGkse6jsHBoFziQGm2D
        subject_person_id: p_6tdTGr8WHYZiKQmeHZ5QVe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q2HPq7EPWikenCL35SoLno
          claim_id: c_6KDEGkse6jsHBoFziQGm2D
          source_id: s_jj2yA4oddQ1UkNSUdd2TXN
          stance: supports
          locator: CBDB:230874
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230874）
          source: &a1
            id: s_jj2yA4oddQ1UkNSUdd2TXN
            source_type: api_record
            title: 中国历代人物传记资料库：王宗源（CBDB 230874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230874&o=json
            external_identifier: CBDB:230874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.624Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LwEnF18e9sMEoGEdrf64Pm
        subject_person_id: p_6tdTGr8WHYZiKQmeHZ5QVe
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
        - id: cs_6N3bT7w9CSNKgg8bdcYGKv
          claim_id: c_LwEnF18e9sMEoGEdrf64Pm
          source_id: s_jj2yA4oddQ1UkNSUdd2TXN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_yqVBxl6TKrbhv9mN-6Mxrw
        subject_person_id: p_6tdTGr8WHYZiKQmeHZ5QVe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H8UDji4tvPsw1D6PXfr_J8
          claim_id: c_yqVBxl6TKrbhv9mN-6Mxrw
          source_id: s_jj2yA4oddQ1UkNSUdd2TXN
          stance: supports
          locator: 萬曆丙戌科進士同年總錄：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EAKJt6kT5T4F5kcYrF9f6y
        status: active
        display_name: 王玠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗源 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EAKJt6kT5T4F5kcYrF9f6y | 王玠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗源（CBDB 230874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230874&o=json)
