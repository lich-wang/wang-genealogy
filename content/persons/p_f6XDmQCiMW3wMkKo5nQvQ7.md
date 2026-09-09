---
schema: wang-person/v1
id: p_f6XDmQCiMW3wMkKo5nQvQ7
status: active
merged_into: null
display_name: 王仙喬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xQ5k2AuV523nuPJfj8vEEF
        subject_person_id: p_f6XDmQCiMW3wMkKo5nQvQ7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仙喬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7xPPqcsgYqr7gKDhLKF9Ds
          claim_id: c_xQ5k2AuV523nuPJfj8vEEF
          source_id: s_M6iK1fiRuXQYF7sgRDMNAk
          stance: supports
          locator: CBDB:91985
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（91985）
          source: &a1
            id: s_M6iK1fiRuXQYF7sgRDMNAk
            source_type: api_record
            title: 中国历代人物传记资料库：王仙喬（CBDB 91985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91985&o=json
            external_identifier: CBDB:91985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.066Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_BaYZuHo9EMbqLsnnz1gMX8
        subject_person_id: p_f6XDmQCiMW3wMkKo5nQvQ7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 759年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L8VNdHB8XiGFJxe24kN2aL
          claim_id: c_BaYZuHo9EMbqLsnnz1gMX8
          source_id: s_M6iK1fiRuXQYF7sgRDMNAk
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
        id: c_jaqi4GQypv1SFit6b91byB
        subject_person_id: p_f6XDmQCiMW3wMkKo5nQvQ7
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
        - id: cs_b3iA6X9zRnTftZnSkfGQ7e
          claim_id: c_jaqi4GQypv1SFit6b91byB
          source_id: s_M6iK1fiRuXQYF7sgRDMNAk
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

# 王仙喬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仙喬 | accepted |
| death.date | 759年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仙喬（CBDB 91985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91985&o=json)
