---
schema: wang-person/v1
id: p_3Lgirh8tCkhjbetAZ9DFZ4
status: active
merged_into: null
display_name: 王仲儒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S1DSvDngyzeCkKL8S4EgDN
        subject_person_id: p_3Lgirh8tCkhjbetAZ9DFZ4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F2cTDHS7F76s1iA4EsWhk8
          claim_id: c_S1DSvDngyzeCkKL8S4EgDN
          source_id: s_7bumxggMzJQaMaZLH56DPT
          stance: supports
          locator: CBDB:26645
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26645）
          source: &a1
            id: s_7bumxggMzJQaMaZLH56DPT
            source_type: api_record
            title: 中国历代人物传记资料库：王仲儒（CBDB 26645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26645&o=json
            external_identifier: CBDB:26645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oBq28mQsrSHHQV6dykSxKk
        subject_person_id: p_3Lgirh8tCkhjbetAZ9DFZ4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1047年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gH5KV4LjuAY1m15U5ctjGo
          claim_id: c_oBq28mQsrSHHQV6dykSxKk
          source_id: s_7bumxggMzJQaMaZLH56DPT
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
        id: c_P6AME3b7bgQngqngRr9VLC
        subject_person_id: p_3Lgirh8tCkhjbetAZ9DFZ4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1096年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3MRZS7e7uvsjdHdQPWQBUU
          claim_id: c_P6AME3b7bgQngqngRr9VLC
          source_id: s_7bumxggMzJQaMaZLH56DPT
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
        id: c_5ZD3ERnH6YXy1qGHesUaBD
        subject_person_id: p_3Lgirh8tCkhjbetAZ9DFZ4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5xzg38zguCNAG4ppEcXRib
          claim_id: c_5ZD3ERnH6YXy1qGHesUaBD
          source_id: s_7bumxggMzJQaMaZLH56DPT
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

# 王仲儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲儒 | accepted |
| birth.date | 1047年 | accepted |
| death.date | 1096年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲儒（CBDB 26645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26645&o=json)
