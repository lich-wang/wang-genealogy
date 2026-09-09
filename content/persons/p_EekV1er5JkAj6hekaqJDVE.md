---
schema: wang-person/v1
id: p_EekV1er5JkAj6hekaqJDVE
status: active
merged_into: null
display_name: 王昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yVJJvzHBX9TXFk2eakw6D5
        subject_person_id: p_EekV1er5JkAj6hekaqJDVE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d2Zn7M1BJazGFLMAJP1CfQ
          claim_id: c_yVJJvzHBX9TXFk2eakw6D5
          source_id: s_zk5P4Ec6BpG4pRMBmch3A3
          stance: supports
          locator: CBDB:168569
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（168569）
          source: &a1
            id: s_zk5P4Ec6BpG4pRMBmch3A3
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 168569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168569&o=json
            external_identifier: CBDB:168569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kqwp94DtNAJzqCMK4Q9fGz
        subject_person_id: p_EekV1er5JkAj6hekaqJDVE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xjv5Du1T8ZbNLQhHd9bHiG
          claim_id: c_kqwp94DtNAJzqCMK4Q9fGz
          source_id: s_zk5P4Ec6BpG4pRMBmch3A3
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

# 王昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昌（CBDB 168569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168569&o=json)
