---
schema: wang-person/v1
id: p_wsDZJ1MwFHkyLqXv75Yrwu
status: active
merged_into: null
display_name: 王珉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gACcHD3PUTgYj268KGnHDE
        subject_person_id: p_wsDZJ1MwFHkyLqXv75Yrwu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ugrd1jQYf1W1zmLwhSsUUD
          claim_id: c_gACcHD3PUTgYj268KGnHDE
          source_id: s_ZR6sd2HFdAyMXP19FTXbYw
          stance: supports
          locator: CBDB:287444
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287444）
          source: &a1
            id: s_ZR6sd2HFdAyMXP19FTXbYw
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 287444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287444&o=json
            external_identifier: CBDB:287444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KBE1qA5jdJMSNPTFg9ANsc
        subject_person_id: p_wsDZJ1MwFHkyLqXv75Yrwu
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
        - id: cs_9qZotJiCJgathvHsVCHQ7L
          claim_id: c_KBE1qA5jdJMSNPTFg9ANsc
          source_id: s_ZR6sd2HFdAyMXP19FTXbYw
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
  descendants:
    - claim:
        id: c_ReQX-WXoDKRSJGVgpPqD9D
        subject_person_id: p_wsDZJ1MwFHkyLqXv75Yrwu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EoY6249MAYNFPdVz2u3z4E
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y4RQljGslsbU3f1TBA_uF1
          claim_id: c_ReQX-WXoDKRSJGVgpPqD9D
          source_id: s_ZR6sd2HFdAyMXP19FTXbYw
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EoY6249MAYNFPdVz2u3z4E
        status: active
        display_name: 王學益
        merged_into_person_id: null
  other: []
---

# 王珉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_EoY6249MAYNFPdVz2u3z4E | 王學益 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珉（CBDB 287444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287444&o=json)
