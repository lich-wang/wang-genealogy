---
schema: wang-person/v1
id: p_FQmtRFg6CW3R5L9J3dv7Y3
status: active
merged_into: null
display_name: 王學旦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uey3tjyx392B7SpZmpKhYw
        subject_person_id: p_FQmtRFg6CW3R5L9J3dv7Y3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學旦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bz99MSAQ646wFBjKDWu96E
          claim_id: c_uey3tjyx392B7SpZmpKhYw
          source_id: s_XeCzycMGLA8Wyc4ewLbNk6
          stance: supports
          locator: CBDB:694265
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694265）
          source: &a1
            id: s_XeCzycMGLA8Wyc4ewLbNk6
            source_type: api_record
            title: 中国历代人物传记资料库：王學旦（CBDB 694265）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694265&o=json
            external_identifier: CBDB:694265
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.519Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7wLcnD2bpXYbS6Ua6vMqSs
        subject_person_id: p_FQmtRFg6CW3R5L9J3dv7Y3
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
        - id: cs_2fH6LqhPtu6hiVZFNCK9kH
          claim_id: c_7wLcnD2bpXYbS6Ua6vMqSs
          source_id: s_XeCzycMGLA8Wyc4ewLbNk6
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
        id: c_lugV_oeYCRm6befh0D_s6s
        subject_person_id: p_FQmtRFg6CW3R5L9J3dv7Y3
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_pn7dqzARG8e7ihVDRabphz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MGPy1P7SUlPeEYj8Utt7iH
          claim_id: c_lugV_oeYCRm6befh0D_s6s
          source_id: s_4KjTkPwzAF6G8rXfyP-WRh
          stance: supports
          locator: 鄞縣志，lgid=243613：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4KjTkPwzAF6G8rXfyP-WRh
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王學旦妻)（CBDB 694267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694267&o=json
            external_identifier: CBDB:694267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pn7dqzARG8e7ihVDRabphz
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王學旦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學旦 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_pn7dqzARG8e7ihVDRabphz | 劉氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王學旦妻)（CBDB 694267）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694267&o=json)
- [中国历代人物传记资料库：王學旦（CBDB 694265）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694265&o=json)
