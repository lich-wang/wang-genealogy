---
schema: wang-person/v1
id: p_pn7dqzARG8e7ihVDRabphz
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 694267
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nnPg5ySifS6lvWtQ71l_Vo
        subject_person_id: p_pn7dqzARG8e7ihVDRabphz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D7xmz0bl5bsmspIODGizgA
          claim_id: c_nnPg5ySifS6lvWtQ71l_Vo
          source_id: s_4KjTkPwzAF6G8rXfyP-WRh
          stance: supports
          locator: CBDB:694267
          quotation: null
          interpretation_note: CBDB 明确记录的王學旦配偶
          source: &a1
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
          source: *a1
      object_person:
        id: p_FQmtRFg6CW3R5L9J3dv7Y3
        status: active
        display_name: 王學旦
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_FQmtRFg6CW3R5L9J3dv7Y3 | 王學旦 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王學旦妻)（CBDB 694267）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694267&o=json)
