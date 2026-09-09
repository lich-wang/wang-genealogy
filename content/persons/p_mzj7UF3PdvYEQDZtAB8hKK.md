---
schema: wang-person/v1
id: p_mzj7UF3PdvYEQDZtAB8hKK
status: active
merged_into: null
display_name: 王先謙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6H23tyd3uVZHZcqYYSXLvD
        subject_person_id: p_mzj7UF3PdvYEQDZtAB8hKK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CvhCe1HkW1xVZu642Frvxg
          claim_id: c_6H23tyd3uVZHZcqYYSXLvD
          source_id: s_QqGH3qC51odBd5xFwj9Exc
          stance: supports
          locator: CBDB:69172
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69172）
          source: &a1
            id: s_QqGH3qC51odBd5xFwj9Exc
            source_type: api_record
            title: 中国历代人物传记资料库：王先謙（CBDB 69172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69172&o=json
            external_identifier: CBDB:69172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.140Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_SF8ZrjZQUaAuYP9Edyo8cC
        subject_person_id: p_mzj7UF3PdvYEQDZtAB8hKK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1842年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FJpxSeM7m4cnNGDHEzKoj9
          claim_id: c_SF8ZrjZQUaAuYP9Edyo8cC
          source_id: s_QqGH3qC51odBd5xFwj9Exc
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
        id: c_W7XDmDMSHnv9rFZwDESsRH
        subject_person_id: p_mzj7UF3PdvYEQDZtAB8hKK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1917年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LhfTW3Y62sJvSvadFHJ1zb
          claim_id: c_W7XDmDMSHnv9rFZwDESsRH
          source_id: s_QqGH3qC51odBd5xFwj9Exc
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
        id: c_cotC3e62bL4ViotnoWe3QS
        subject_person_id: p_mzj7UF3PdvYEQDZtAB8hKK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sGRxSnXVLTKDFKTqsNADxh
          claim_id: c_cotC3e62bL4ViotnoWe3QS
          source_id: s_QqGH3qC51odBd5xFwj9Exc
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

# 王先謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王先謙 | accepted |
| birth.date | 1842年 | accepted |
| death.date | 1917年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王先謙（CBDB 69172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69172&o=json)
