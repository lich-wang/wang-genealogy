---
schema: wang-person/v1
id: p_QqHZ53bR3BD9L2PF2yyQK7
status: active
merged_into: null
display_name: 王金
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H3zDv9u9w1oGa8JjwfhLJP
        subject_person_id: p_QqHZ53bR3BD9L2PF2yyQK7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7fDDDL5FDhb7NTw8vZoRJK
          claim_id: c_H3zDv9u9w1oGa8JjwfhLJP
          source_id: s_zFiPFp1G28jaocM21n8Qpq
          stance: supports
          locator: CBDB:126582
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126582）
          source: &a1
            id: s_zFiPFp1G28jaocM21n8Qpq
            source_type: api_record
            title: 中国历代人物传记资料库：王金（CBDB 126582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126582&o=json
            external_identifier: CBDB:126582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.040Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fNgjnpq6x6HCkBXK8mvXKC
        subject_person_id: p_QqHZ53bR3BD9L2PF2yyQK7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1471年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AJcWQfcEBHurjGM9HQ64oS
          claim_id: c_fNgjnpq6x6HCkBXK8mvXKC
          source_id: s_zFiPFp1G28jaocM21n8Qpq
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
        id: c_dQDP26o2p4ZyD5zpA5pXdE
        subject_person_id: p_QqHZ53bR3BD9L2PF2yyQK7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1516年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NQR5wJf1Hr2MMcG22LEkuY
          claim_id: c_dQDP26o2p4ZyD5zpA5pXdE
          source_id: s_zFiPFp1G28jaocM21n8Qpq
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
        id: c_a5sVNeMG8D69nnEgnkjwjn
        subject_person_id: p_QqHZ53bR3BD9L2PF2yyQK7
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
        - id: cs_dv4hc8CEv1yMRYPim5uNN6
          claim_id: c_a5sVNeMG8D69nnEgnkjwjn
          source_id: s_zFiPFp1G28jaocM21n8Qpq
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

# 王金

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金 | accepted |
| birth.date | 1471年 | accepted |
| death.date | 1516年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金（CBDB 126582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126582&o=json)
