---
schema: wang-person/v1
id: p_44AwJX64k8AAendQQbtSDb
status: active
merged_into: null
display_name: 王貽信
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NZwEV91dGxZSFEPj2HD7JG
        subject_person_id: p_44AwJX64k8AAendQQbtSDb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貽信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oAH5p3UZLfZxw3VZJ2aqJ5
          claim_id: c_NZwEV91dGxZSFEPj2HD7JG
          source_id: s_nDAq82CESXTnmKc9V7gfcM
          stance: supports
          locator: CBDB:640312
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640312）
          source: &a1
            id: s_nDAq82CESXTnmKc9V7gfcM
            source_type: api_record
            title: 中国历代人物传记资料库：王貽信（CBDB 640312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640312&o=json
            external_identifier: CBDB:640312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.213Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bwJKJXqk47useXBWaQKuWm
        subject_person_id: p_44AwJX64k8AAendQQbtSDb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AXmvazXxnh1mT1iRJVMrS6
          claim_id: c_bwJKJXqk47useXBWaQKuWm
          source_id: s_nDAq82CESXTnmKc9V7gfcM
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

# 王貽信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貽信 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貽信（CBDB 640312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640312&o=json)
