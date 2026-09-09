---
schema: wang-person/v1
id: p_E8S3gpVoWhmzE5CvGsVumu
status: active
merged_into: null
display_name: 王節
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dFBR49Ruy6w4cASagnfsHB
        subject_person_id: p_E8S3gpVoWhmzE5CvGsVumu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王節
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ykXtm8mqwPUPEKVdDArBmm
          claim_id: c_dFBR49Ruy6w4cASagnfsHB
          source_id: s_KFmeLuJCW4hCx54YgLAJHz
          stance: supports
          locator: CBDB:71049
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71049）
          source: &a1
            id: s_KFmeLuJCW4hCx54YgLAJHz
            source_type: api_record
            title: 中国历代人物传记资料库：王節（CBDB 71049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71049&o=json
            external_identifier: CBDB:71049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.316Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_szNeSvSm7B8kWtucLnFCnB
        subject_person_id: p_E8S3gpVoWhmzE5CvGsVumu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1599年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wC229cAZmbwrqpVFV9LcVf
          claim_id: c_szNeSvSm7B8kWtucLnFCnB
          source_id: s_KFmeLuJCW4hCx54YgLAJHz
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
        id: c_5QKLC4u1oNEK6PmkNYB4ya
        subject_person_id: p_E8S3gpVoWhmzE5CvGsVumu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1660年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x68vnyqjHbLXvKXTAN62rQ
          claim_id: c_5QKLC4u1oNEK6PmkNYB4ya
          source_id: s_KFmeLuJCW4hCx54YgLAJHz
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
        id: c_mBFjCgA8qA3TdjggQmT8hb
        subject_person_id: p_E8S3gpVoWhmzE5CvGsVumu
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
        - id: cs_pD49GJ2CKBSgdY2t8YLJ3C
          claim_id: c_mBFjCgA8qA3TdjggQmT8hb
          source_id: s_KFmeLuJCW4hCx54YgLAJHz
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

# 王節

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王節 | accepted |
| birth.date | 1599年 | accepted |
| death.date | 1660年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王節（CBDB 71049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71049&o=json)
