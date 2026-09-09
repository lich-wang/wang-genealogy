---
schema: wang-person/v1
id: p_GPFpzHeTwBaeKDFzP715Jg
status: active
merged_into: null
display_name: 王勖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1A4RCCZAxotJ9XteXecJGK
        subject_person_id: p_GPFpzHeTwBaeKDFzP715Jg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ioAv1qt2HWwPCeRbZd1tif
          claim_id: c_1A4RCCZAxotJ9XteXecJGK
          source_id: s_4epoxXynDHFFLffq762cAW
          stance: supports
          locator: CBDB:71188
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71188）
          source: &a1
            id: s_4epoxXynDHFFLffq762cAW
            source_type: api_record
            title: 中国历代人物传记资料库：王勖（CBDB 71188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71188&o=json
            external_identifier: CBDB:71188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.466Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_urSRFKkLnvyUEN1JvuzDxB
        subject_person_id: p_GPFpzHeTwBaeKDFzP715Jg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1609年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w2VBSUCa9gpionsj6Zr2AX
          claim_id: c_urSRFKkLnvyUEN1JvuzDxB
          source_id: s_4epoxXynDHFFLffq762cAW
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
        id: c_3PBk5qDqMBT8fyREanEA2n
        subject_person_id: p_GPFpzHeTwBaeKDFzP715Jg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1673年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1g26NXT3pFgy9zJKWCkfam
          claim_id: c_3PBk5qDqMBT8fyREanEA2n
          source_id: s_4epoxXynDHFFLffq762cAW
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
        id: c_vox3SDp3uxHA9K1it3MyjM
        subject_person_id: p_GPFpzHeTwBaeKDFzP715Jg
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
        - id: cs_nJXZpJHodTGcKaCaQsAawr
          claim_id: c_vox3SDp3uxHA9K1it3MyjM
          source_id: s_4epoxXynDHFFLffq762cAW
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

# 王勖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勖 | accepted |
| birth.date | 1609年 | accepted |
| death.date | 1673年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勖（CBDB 71188）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71188&o=json)
