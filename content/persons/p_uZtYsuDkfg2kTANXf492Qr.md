---
schema: wang-person/v1
id: p_uZtYsuDkfg2kTANXf492Qr
status: active
merged_into: null
display_name: 王巖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GSq19WKo7FCE3e1pMFXUq7
        subject_person_id: p_uZtYsuDkfg2kTANXf492Qr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sw8FLsUvgeYFJ3iSKY9kva
          claim_id: c_GSq19WKo7FCE3e1pMFXUq7
          source_id: s_zFNLufCzZ78UondpNdQt9Q
          stance: supports
          locator: CBDB:45859
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45859）
          source: &a1
            id: s_zFNLufCzZ78UondpNdQt9Q
            source_type: api_record
            title: 中国历代人物传记资料库：王巖（CBDB 45859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45859&o=json
            external_identifier: CBDB:45859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.700Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aAFUrgoFMMQC9aLEPw2Bpi
        subject_person_id: p_uZtYsuDkfg2kTANXf492Qr
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
        - id: cs_4qFb6Q5VD6dXfkBdYuaPsS
          claim_id: c_aAFUrgoFMMQC9aLEPw2Bpi
          source_id: s_zFNLufCzZ78UondpNdQt9Q
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

# 王巖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王巖 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王巖（CBDB 45859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45859&o=json)
