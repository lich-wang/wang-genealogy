---
schema: wang-person/v1
id: p_5S6FXhcD9zMBVMKP5KkuEV
status: active
merged_into: null
display_name: 王德秀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5eDg5yXMvK8W4NdrZYoFxb
        subject_person_id: p_5S6FXhcD9zMBVMKP5KkuEV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MtGosBpt1PxBp4Jf6p4fRR
          claim_id: c_5eDg5yXMvK8W4NdrZYoFxb
          source_id: s_VvtYyGJ8aPdqbyGbUrG8di
          stance: supports
          locator: CBDB:35304
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35304）
          source: &a1
            id: s_VvtYyGJ8aPdqbyGbUrG8di
            source_type: api_record
            title: 中国历代人物传记资料库：王德秀（CBDB 35304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35304&o=json
            external_identifier: CBDB:35304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.122Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W9pCT2HTg86FuiGTM8QYnt
        subject_person_id: p_5S6FXhcD9zMBVMKP5KkuEV
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
        - id: cs_NQrfc8zuyqJzP6NvePAqFw
          claim_id: c_W9pCT2HTg86FuiGTM8QYnt
          source_id: s_VvtYyGJ8aPdqbyGbUrG8di
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

# 王德秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德秀 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德秀（CBDB 35304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35304&o=json)
