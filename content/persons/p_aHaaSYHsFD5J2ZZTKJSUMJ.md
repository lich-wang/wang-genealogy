---
schema: wang-person/v1
id: p_aHaaSYHsFD5J2ZZTKJSUMJ
status: active
merged_into: null
display_name: 王履仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5bLrnFS3sSG9pP6HXkqjGK
        subject_person_id: p_aHaaSYHsFD5J2ZZTKJSUMJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1175GGmGVvmHjmUXcf2dtF
          claim_id: c_5bLrnFS3sSG9pP6HXkqjGK
          source_id: s_cmL3EryV6D4zX3SLGcJPCv
          stance: supports
          locator: CBDB:474097
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（474097）
          source: &a1
            id: s_cmL3EryV6D4zX3SLGcJPCv
            source_type: api_record
            title: 中国历代人物传记资料库：王履仁（CBDB 474097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474097&o=json
            external_identifier: CBDB:474097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.344Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mQE8QAnEawcWmmhY9JQkZY
        subject_person_id: p_aHaaSYHsFD5J2ZZTKJSUMJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履仁，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 474097）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OkwTHmb1NTj7DWnweLqrtG
          claim_id: c_mQE8QAnEawcWmmhY9JQkZY
          source_id: s_cmL3EryV6D4zX3SLGcJPCv
          stance: supports
          locator: CBDB:474097
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王履仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履仁 | accepted |
| bio.summary | 王履仁，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 474097） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王履仁（CBDB 474097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474097&o=json)
