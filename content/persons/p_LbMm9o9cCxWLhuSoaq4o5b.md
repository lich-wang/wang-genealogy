---
schema: wang-person/v1
id: p_LbMm9o9cCxWLhuSoaq4o5b
status: active
merged_into: null
display_name: 王康佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QF6wT1gZpTvMrKU6MVW3ko
        subject_person_id: p_LbMm9o9cCxWLhuSoaq4o5b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WCHyK7vGeGbHonW6qAeQZL
          claim_id: c_QF6wT1gZpTvMrKU6MVW3ko
          source_id: s_Tnw6xzdbXXRk66ZF2rozAE
          stance: supports
          locator: CBDB:72006
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72006）
          source: &a1
            id: s_Tnw6xzdbXXRk66ZF2rozAE
            source_type: api_record
            title: 中国历代人物传记资料库：王康佐（CBDB 72006）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72006&o=json
            external_identifier: CBDB:72006
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.954Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GJQfdWyjPDVPFUev8cmPqe
        subject_person_id: p_LbMm9o9cCxWLhuSoaq4o5b
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1700年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qnTcZeygCYC5rki1xdxHA6
          claim_id: c_GJQfdWyjPDVPFUev8cmPqe
          source_id: s_Tnw6xzdbXXRk66ZF2rozAE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_pWPp1CrawceK5Ae11iJpeQ
        subject_person_id: p_LbMm9o9cCxWLhuSoaq4o5b
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1763年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jPQ86U6Vf1s1eoJeoDGcQq
          claim_id: c_pWPp1CrawceK5Ae11iJpeQ
          source_id: s_Tnw6xzdbXXRk66ZF2rozAE
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
        id: c_8a6MQ4tNW3J5KFbb32XUSt
        subject_person_id: p_LbMm9o9cCxWLhuSoaq4o5b
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
        - id: cs_H1Mg746mngREBJBMYYXbZu
          claim_id: c_8a6MQ4tNW3J5KFbb32XUSt
          source_id: s_Tnw6xzdbXXRk66ZF2rozAE
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

# 王康佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王康佐 | accepted |
| birth.date | 1700年 | accepted |
| death.date | 1763年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王康佐（CBDB 72006）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72006&o=json)
