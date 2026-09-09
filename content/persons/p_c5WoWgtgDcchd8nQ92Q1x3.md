---
schema: wang-person/v1
id: p_c5WoWgtgDcchd8nQ92Q1x3
status: active
merged_into: null
display_name: 王之楨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Yk91bqpt1z4evEvBCLBKA
        subject_person_id: p_c5WoWgtgDcchd8nQ92Q1x3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gfUnYC5AakKWpFQJGh2ijF
          claim_id: c_2Yk91bqpt1z4evEvBCLBKA
          source_id: s_GnSD9AxGAuNXFE5abucnx3
          stance: supports
          locator: CBDB:342561
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342561）
          source: &a1
            id: s_GnSD9AxGAuNXFE5abucnx3
            source_type: api_record
            title: 中国历代人物传记资料库：王之楨（CBDB 342561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342561&o=json
            external_identifier: CBDB:342561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ufVL5agpeQtC2kf9dWXW26
        subject_person_id: p_c5WoWgtgDcchd8nQ92Q1x3
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
        - id: cs_H2WFKr513jD6Gs3oXEUSTU
          claim_id: c_ufVL5agpeQtC2kf9dWXW26
          source_id: s_GnSD9AxGAuNXFE5abucnx3
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

# 王之楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之楨 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之楨（CBDB 342561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342561&o=json)
