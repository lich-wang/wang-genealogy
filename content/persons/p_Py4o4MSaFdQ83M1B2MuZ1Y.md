---
schema: wang-person/v1
id: p_Py4o4MSaFdQ83M1B2MuZ1Y
status: active
merged_into: null
display_name: 王鶴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kDm7RJZydpAwD247giN29d
        subject_person_id: p_Py4o4MSaFdQ83M1B2MuZ1Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鶴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LnHwY6tDxmKMaK5qh5ZZMu
          claim_id: c_kDm7RJZydpAwD247giN29d
          source_id: s_Dzr2yB7MrucVE6eZE3s3n6
          stance: supports
          locator: CBDB:325689
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（325689）
          source: &a1
            id: s_Dzr2yB7MrucVE6eZE3s3n6
            source_type: api_record
            title: 中国历代人物传记资料库：王鶴（CBDB 325689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325689&o=json
            external_identifier: CBDB:325689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KaH8tfDup76PjGbjhyMz7Y
        subject_person_id: p_Py4o4MSaFdQ83M1B2MuZ1Y
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
        - id: cs_eVbWgxkB6AaEiSVRuAkFib
          claim_id: c_KaH8tfDup76PjGbjhyMz7Y
          source_id: s_Dzr2yB7MrucVE6eZE3s3n6
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

# 王鶴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鶴 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鶴（CBDB 325689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325689&o=json)
