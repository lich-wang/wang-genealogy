---
schema: wang-person/v1
id: p_LC2saNjRn8AHVBESWoqV7j
status: active
merged_into: null
display_name: 王師順
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QZYsTDH8suL8n1SDc76o9D
        subject_person_id: p_LC2saNjRn8AHVBESWoqV7j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師順
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iSwxWKmAR3jYjDuFiFBzFL
          claim_id: c_QZYsTDH8suL8n1SDc76o9D
          source_id: s_43T8pGhp4N4JPDUnjVb9tq
          stance: supports
          locator: CBDB:163970
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（163970）
          source: &a1
            id: s_43T8pGhp4N4JPDUnjVb9tq
            source_type: api_record
            title: 中国历代人物传记资料库：王師順（CBDB 163970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163970&o=json
            external_identifier: CBDB:163970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3DbpPpVtpwkrMNe1QYx8PF
        subject_person_id: p_LC2saNjRn8AHVBESWoqV7j
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
        - id: cs_XdnW8P3cPgkMCvKk6EpK7A
          claim_id: c_3DbpPpVtpwkrMNe1QYx8PF
          source_id: s_43T8pGhp4N4JPDUnjVb9tq
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

# 王師順

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師順 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師順（CBDB 163970）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163970&o=json)
