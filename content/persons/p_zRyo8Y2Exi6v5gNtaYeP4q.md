---
schema: wang-person/v1
id: p_zRyo8Y2Exi6v5gNtaYeP4q
status: active
merged_into: null
display_name: 王玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QQ5LfvXJLkf4e1Vi9gARnT
        subject_person_id: p_zRyo8Y2Exi6v5gNtaYeP4q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W1czy3wHjJk946AJmnY4bJ
          claim_id: c_QQ5LfvXJLkf4e1Vi9gARnT
          source_id: s_a9da88H44SrbTLxggPqSRo
          stance: supports
          locator: CBDB:501627
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（501627）
          source: &a1
            id: s_a9da88H44SrbTLxggPqSRo
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 501627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501627&o=json
            external_identifier: CBDB:501627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.842Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vFp5Vh4xdY62qGKuPHf3Vr
        subject_person_id: p_zRyo8Y2Exi6v5gNtaYeP4q
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
        - id: cs_fUJ21txpQJKeW6fj49SeZH
          claim_id: c_vFp5Vh4xdY62qGKuPHf3Vr
          source_id: s_a9da88H44SrbTLxggPqSRo
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

# 王玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉（CBDB 501627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501627&o=json)
