---
schema: wang-person/v1
id: p_EKwQNDPx12vEttAXJCaT9r
status: active
merged_into: null
display_name: 王肇楨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RExYKVUgHCR4SJX8UzzzLk
        subject_person_id: p_EKwQNDPx12vEttAXJCaT9r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PF8xhisPJtp6WKt2bQrzVt
          claim_id: c_RExYKVUgHCR4SJX8UzzzLk
          source_id: s_tcsj4PrDsvkmR9Nu1gELsf
          stance: supports
          locator: CBDB:639976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639976）
          source: &a1
            id: s_tcsj4PrDsvkmR9Nu1gELsf
            source_type: api_record
            title: 中国历代人物传记资料库：王肇楨（CBDB 639976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639976&o=json
            external_identifier: CBDB:639976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.108Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YkKkHCpYCd2gx8i3GCNRLg
        subject_person_id: p_EKwQNDPx12vEttAXJCaT9r
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
        - id: cs_TRhLiKwX62KQQQodM2Z5wx
          claim_id: c_YkKkHCpYCd2gx8i3GCNRLg
          source_id: s_tcsj4PrDsvkmR9Nu1gELsf
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

# 王肇楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肇楨 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王肇楨（CBDB 639976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639976&o=json)
