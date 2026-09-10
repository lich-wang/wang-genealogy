---
schema: wang-person/v1
id: p_161GNVSM8DiRJnB3XBWjtc
status: active
merged_into: null
display_name: 王景亮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3Qpp3SPD2yfiHnTNmMFg2W
        subject_person_id: p_161GNVSM8DiRJnB3XBWjtc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景亮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c7mepFhpjjRDPPQ7wLE3jB
          claim_id: c_3Qpp3SPD2yfiHnTNmMFg2W
          source_id: s_CbWFAEnnD22YoSendFtQLY
          stance: supports
          locator: CBDB:38058
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38058）
          source: &a1
            id: s_CbWFAEnnD22YoSendFtQLY
            source_type: api_record
            title: 中国历代人物传记资料库：王景亮（CBDB 38058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38058&o=json
            external_identifier: CBDB:38058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.342Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vsUWQNsUYXe8P75yKpBPG6
        subject_person_id: p_161GNVSM8DiRJnB3XBWjtc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1025年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZLaMEKE4d5GKzKQrBw2sHJ
          claim_id: c_vsUWQNsUYXe8P75yKpBPG6
          source_id: s_CbWFAEnnD22YoSendFtQLY
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
        id: c_3xysE4SM8sHLZHpfaALo8S
        subject_person_id: p_161GNVSM8DiRJnB3XBWjtc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1093年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WnDLzdjuBm46g8FQWeeEPu
          claim_id: c_3xysE4SM8sHLZHpfaALo8S
          source_id: s_CbWFAEnnD22YoSendFtQLY
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
        id: c_5AH2Vke6j3egGcQm4bkWq4
        subject_person_id: p_161GNVSM8DiRJnB3XBWjtc
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
        - id: cs_3njWofJ9ErwMWEK7B4sNKq
          claim_id: c_5AH2Vke6j3egGcQm4bkWq4
          source_id: s_CbWFAEnnD22YoSendFtQLY
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
  spouses:
    - claim:
        id: c_0erYPH89D5HYJHX1bS_Gbk
        subject_person_id: p_5ZSVQNW7tLuMVH6CLhp3wL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_161GNVSM8DiRJnB3XBWjtc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I1JSJ8quQV7jY2g7SOozlq
          claim_id: c_0erYPH89D5HYJHX1bS_Gbk
          source_id: s_dtrrkkONML-6kaHIISPJj4
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1920：丈夫
          quotation: null
          interpretation_note: null
          source:
            id: s_dtrrkkONML-6kaHIISPJj4
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王景亮妻)（CBDB 38063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38063&o=json
            external_identifier: CBDB:38063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-10T13:33:56.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5ZSVQNW7tLuMVH6CLhp3wL
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王景亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景亮 | accepted |
| birth.date | 1025年 | accepted |
| death.date | 1093年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5ZSVQNW7tLuMVH6CLhp3wL | 張氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景亮（CBDB 38058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38058&o=json)
- [中国历代人物传记资料库：張氏(王景亮妻)（CBDB 38063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38063&o=json)
