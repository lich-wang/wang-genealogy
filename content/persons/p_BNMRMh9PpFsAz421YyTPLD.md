---
schema: wang-person/v1
id: p_BNMRMh9PpFsAz421YyTPLD
status: active
merged_into: null
display_name: 王庭臣
cbdb_id: 37926
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_en6XtvTThJiNV9HrMzM5xQ
        subject_person_id: p_BNMRMh9PpFsAz421YyTPLD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭臣，宋人物。身份为結社、入元祐黨籍者。（中国历代人物传记资料库 CBDB 37926）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_pL7uMZd_DU9c3YwHADfm8Z
          claim_id: c_en6XtvTThJiNV9HrMzM5xQ
          source_id: s_fwsQnFjuKdbGkggbAumc7N
          stance: supports
          locator: CBDB:37926
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fwsQnFjuKdbGkggbAumc7N
            source_type: api_record
            title: 中国历代人物传记资料库：王庭臣（CBDB 37926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37926&o=json
            external_identifier: CBDB:37926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CKB3FrAGJ3QM4tspns4KAS
        subject_person_id: p_BNMRMh9PpFsAz421YyTPLD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MJECdhi2uXrSfAEzE3gqEc
          claim_id: c_CKB3FrAGJ3QM4tspns4KAS
          source_id: s_fwsQnFjuKdbGkggbAumc7N
          stance: supports
          locator: CBDB:37926
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1201-1300）｜历史性依据：CBDB 朝代 = 宋
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

# 王庭臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王庭臣，宋人物。身份为結社、入元祐黨籍者。（中国历代人物传记资料库 CBDB 37926） | accepted |
| name.primary | 王庭臣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庭臣（CBDB 37926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37926&o=json)
