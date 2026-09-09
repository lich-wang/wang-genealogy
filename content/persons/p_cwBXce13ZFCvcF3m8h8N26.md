---
schema: wang-person/v1
id: p_cwBXce13ZFCvcF3m8h8N26
status: active
merged_into: null
display_name: 王堃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WtpQypHNNf22pjAQ7DiqCF
        subject_person_id: p_cwBXce13ZFCvcF3m8h8N26
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NYkdk7Nuvi2MDJx24e6nRK
          claim_id: c_WtpQypHNNf22pjAQ7DiqCF
          source_id: s_Q3yvzSNt1Jzqn4opGG6KHs
          stance: supports
          locator: CBDB:71198
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71198）
          source: &a1
            id: s_Q3yvzSNt1Jzqn4opGG6KHs
            source_type: api_record
            title: 中国历代人物传记资料库：王堃（CBDB 71198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71198&o=json
            external_identifier: CBDB:71198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_H2Hp9fLxZuKEro7T3K5tDL
        subject_person_id: p_cwBXce13ZFCvcF3m8h8N26
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1852年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FcTyN7hPXMuSDULrwN1d2m
          claim_id: c_H2Hp9fLxZuKEro7T3K5tDL
          source_id: s_Q3yvzSNt1Jzqn4opGG6KHs
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
        id: c_qDtn446nfBC1bCH8LWiWxS
        subject_person_id: p_cwBXce13ZFCvcF3m8h8N26
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
        - id: cs_cFqCyG1ZLQYpXTfkN16mrp
          claim_id: c_qDtn446nfBC1bCH8LWiWxS
          source_id: s_Q3yvzSNt1Jzqn4opGG6KHs
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

# 王堃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堃 | accepted |
| death.date | 1852年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王堃（CBDB 71198）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71198&o=json)
