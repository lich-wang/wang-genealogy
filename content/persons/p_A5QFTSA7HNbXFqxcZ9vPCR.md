---
schema: wang-person/v1
id: p_A5QFTSA7HNbXFqxcZ9vPCR
status: active
merged_into: null
display_name: 王懋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EogUSsSGgERpzZ8v153HNC
        subject_person_id: p_A5QFTSA7HNbXFqxcZ9vPCR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e5SFUMhdsJGoMNRbcRKbUJ
          claim_id: c_EogUSsSGgERpzZ8v153HNC
          source_id: s_2A4CWoaGp3nxiKVzQjVeAr
          stance: supports
          locator: CBDB:67078
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67078）
          source: &a1
            id: s_2A4CWoaGp3nxiKVzQjVeAr
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 67078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67078&o=json
            external_identifier: CBDB:67078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VsdUnqUWsWbAT55Yy6WsQx
        subject_person_id: p_A5QFTSA7HNbXFqxcZ9vPCR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1537年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DXMwKc4zy8M9M7A59GLqjf
          claim_id: c_VsdUnqUWsWbAT55Yy6WsQx
          source_id: s_2A4CWoaGp3nxiKVzQjVeAr
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
        id: c_J3FNe3vtDZ9rwQwFm1QKUN
        subject_person_id: p_A5QFTSA7HNbXFqxcZ9vPCR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1597年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bqBfPbPuBrnHisPNscC74B
          claim_id: c_J3FNe3vtDZ9rwQwFm1QKUN
          source_id: s_2A4CWoaGp3nxiKVzQjVeAr
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
        id: c_KLbTyNEcTYc781gqsrXPAR
        subject_person_id: p_A5QFTSA7HNbXFqxcZ9vPCR
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
        - id: cs_1nc4qmfejGYJWWsi5G95zB
          claim_id: c_KLbTyNEcTYc781gqsrXPAR
          source_id: s_2A4CWoaGp3nxiKVzQjVeAr
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

# 王懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋 | accepted |
| birth.date | 1537年 | accepted |
| death.date | 1597年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懋（CBDB 67078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67078&o=json)
