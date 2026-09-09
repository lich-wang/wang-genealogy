---
schema: wang-person/v1
id: p_WQT1Hm7LSS63rTgZwvcsM7
status: active
merged_into: null
display_name: 王希堯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G744LSWexR6smprB5ppBsR
        subject_person_id: p_WQT1Hm7LSS63rTgZwvcsM7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希堯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QbTtzrGGFmX27SBw4Zgt1W
          claim_id: c_G744LSWexR6smprB5ppBsR
          source_id: s_zn5QYE5dRaxgh4kEm1K4b3
          stance: supports
          locator: CBDB:203993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203993）
          source: &a1
            id: s_zn5QYE5dRaxgh4kEm1K4b3
            source_type: api_record
            title: 中国历代人物传记资料库：王希堯（CBDB 203993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203993&o=json
            external_identifier: CBDB:203993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.811Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uiQRG5VY5FHvXJAWz2yPsT
        subject_person_id: p_WQT1Hm7LSS63rTgZwvcsM7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1525年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_csRkBPbStpnPBH1T8XSKk5
          claim_id: c_uiQRG5VY5FHvXJAWz2yPsT
          source_id: s_zn5QYE5dRaxgh4kEm1K4b3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MfCJAyVq4SD8imqDufgvwq
        subject_person_id: p_WQT1Hm7LSS63rTgZwvcsM7
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
        - id: cs_2RDv524EfSaaxLv4CFoTAW
          claim_id: c_MfCJAyVq4SD8imqDufgvwq
          source_id: s_zn5QYE5dRaxgh4kEm1K4b3
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

# 王希堯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希堯 | accepted |
| birth.date | 1525年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希堯（CBDB 203993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203993&o=json)
