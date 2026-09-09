---
schema: wang-person/v1
id: p_M4cPJQE6jqrnS6T8Pq8K6h
status: active
merged_into: null
display_name: 王豐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sB4rnYDU1fh5CCMfryRpdo
        subject_person_id: p_M4cPJQE6jqrnS6T8Pq8K6h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fAezzUvtRYiGaTTjjBV73y
          claim_id: c_sB4rnYDU1fh5CCMfryRpdo
          source_id: s_xLjX2xwQMNdp7QEzt5omA1
          stance: supports
          locator: CBDB:186501
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186501）
          source: &a1
            id: s_xLjX2xwQMNdp7QEzt5omA1
            source_type: api_record
            title: 中国历代人物传记资料库：王豐（CBDB 186501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186501&o=json
            external_identifier: CBDB:186501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.276Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_TVjPCLkt9CMSQ5hDsNfyV6
        subject_person_id: p_M4cPJQE6jqrnS6T8Pq8K6h
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 841年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A3k83E1CB2r5nxKVLCYzYs
          claim_id: c_TVjPCLkt9CMSQ5hDsNfyV6
          source_id: s_xLjX2xwQMNdp7QEzt5omA1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PwJAW99QbQu6Q2i4bKYmWm
        subject_person_id: p_M4cPJQE6jqrnS6T8Pq8K6h
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
        - id: cs_r486H8BuQ7vPQhjLF2EJug
          claim_id: c_PwJAW99QbQu6Q2i4bKYmWm
          source_id: s_xLjX2xwQMNdp7QEzt5omA1
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

# 王豐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豐 | accepted |
| death.date | 841年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王豐（CBDB 186501）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186501&o=json)
