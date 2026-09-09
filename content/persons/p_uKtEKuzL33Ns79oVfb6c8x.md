---
schema: wang-person/v1
id: p_uKtEKuzL33Ns79oVfb6c8x
status: active
merged_into: null
display_name: 王榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ywQmF6mS496Nuaqv9xinwW
        subject_person_id: p_uKtEKuzL33Ns79oVfb6c8x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sa2fAQY44enSY4hcJ4ApAv
          claim_id: c_ywQmF6mS496Nuaqv9xinwW
          source_id: s_wA8ftcYZeM2e7fqN2jkNPn
          stance: supports
          locator: CBDB:318840
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318840）
          source: &a1
            id: s_wA8ftcYZeM2e7fqN2jkNPn
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 318840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318840&o=json
            external_identifier: CBDB:318840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.033Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JiV93WUpgiJn2GvAmPuczs
        subject_person_id: p_uKtEKuzL33Ns79oVfb6c8x
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
        - id: cs_5ETL4wUPUxEWaBd6vUDB4p
          claim_id: c_JiV93WUpgiJn2GvAmPuczs
          source_id: s_wA8ftcYZeM2e7fqN2jkNPn
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

# 王榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榮（CBDB 318840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318840&o=json)
