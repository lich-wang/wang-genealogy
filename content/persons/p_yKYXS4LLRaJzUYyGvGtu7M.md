---
schema: wang-person/v1
id: p_yKYXS4LLRaJzUYyGvGtu7M
status: active
merged_into: null
display_name: 王元勛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6FKtE5KGHR26xiJ3pcCvpL
        subject_person_id: p_yKYXS4LLRaJzUYyGvGtu7M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元勛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UXFHEKQg4pgQPPisTUdoXS
          claim_id: c_6FKtE5KGHR26xiJ3pcCvpL
          source_id: s_J6buzxFETrVkBkjKDDE9ZD
          stance: supports
          locator: CBDB:71375
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71375）
          source: &a1
            id: s_J6buzxFETrVkBkjKDDE9ZD
            source_type: api_record
            title: 中国历代人物传记资料库：王元勛（CBDB 71375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71375&o=json
            external_identifier: CBDB:71375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.626Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uvwTVwGRwRijwUQm9vVmyS
        subject_person_id: p_yKYXS4LLRaJzUYyGvGtu7M
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1728年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mx3AKrGqhGdXA6Qrw7foLp
          claim_id: c_uvwTVwGRwRijwUQm9vVmyS
          source_id: s_J6buzxFETrVkBkjKDDE9ZD
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
        id: c_ZmRdvQRFDmKBun39xSLjj3
        subject_person_id: p_yKYXS4LLRaJzUYyGvGtu7M
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1807年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m6PL6vi7p3GU4AS6fqhYVt
          claim_id: c_ZmRdvQRFDmKBun39xSLjj3
          source_id: s_J6buzxFETrVkBkjKDDE9ZD
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
        id: c_4NedGDJNRuR4f5NjanYJ3a
        subject_person_id: p_yKYXS4LLRaJzUYyGvGtu7M
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
        - id: cs_rpdbAtDpFLTako5DKouCFK
          claim_id: c_4NedGDJNRuR4f5NjanYJ3a
          source_id: s_J6buzxFETrVkBkjKDDE9ZD
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

# 王元勛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元勛 | accepted |
| birth.date | 1728年 | accepted |
| death.date | 1807年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元勛（CBDB 71375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71375&o=json)
