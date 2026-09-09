---
schema: wang-person/v1
id: p_k8DH8NbtcgrNAqV3h7MMgA
status: active
merged_into: null
display_name: 王東老
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xHcsEK8vbhH9392dopCZty
        subject_person_id: p_k8DH8NbtcgrNAqV3h7MMgA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王東老
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9TGTEcseoK8X2XCmRZT8k9
          claim_id: c_xHcsEK8vbhH9392dopCZty
          source_id: s_L3BBaqVQmuCpJtdf82o77z
          stance: supports
          locator: CBDB:546347
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（546347）
          source: &a1
            id: s_L3BBaqVQmuCpJtdf82o77z
            source_type: api_record
            title: 中国历代人物传记资料库：王東老（CBDB 546347）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=546347&o=json
            external_identifier: CBDB:546347
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.482Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z24nzyVYo8GQ3Lx95YwQbm
        subject_person_id: p_k8DH8NbtcgrNAqV3h7MMgA
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
        - id: cs_siZZNjDXb7yF5F8xhV6Ab1
          claim_id: c_z24nzyVYo8GQ3Lx95YwQbm
          source_id: s_L3BBaqVQmuCpJtdf82o77z
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

# 王東老

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王東老 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王東老（CBDB 546347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=546347&o=json)
