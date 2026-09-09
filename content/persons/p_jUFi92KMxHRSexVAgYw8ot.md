---
schema: wang-person/v1
id: p_jUFi92KMxHRSexVAgYw8ot
status: active
merged_into: null
display_name: 王益
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oxfKByCeuXpPSGLqAArL1r
        subject_person_id: p_jUFi92KMxHRSexVAgYw8ot
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EBQSLrXsevkAg4vYqZNRee
          claim_id: c_oxfKByCeuXpPSGLqAArL1r
          source_id: s_Zs35CxSUoAqJdvQcmD9dyF
          stance: supports
          locator: CBDB:222172
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222172）
          source: &a1
            id: s_Zs35CxSUoAqJdvQcmD9dyF
            source_type: api_record
            title: 中国历代人物传记资料库：王益（CBDB 222172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222172&o=json
            external_identifier: CBDB:222172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.364Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HgeKt9ftYmRNQtgz5VyZ57
        subject_person_id: p_jUFi92KMxHRSexVAgYw8ot
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
        - id: cs_3dzwYYv8djnrHLi3Fd2KX8
          claim_id: c_HgeKt9ftYmRNQtgz5VyZ57
          source_id: s_Zs35CxSUoAqJdvQcmD9dyF
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

# 王益

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王益 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王益（CBDB 222172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222172&o=json)
