---
schema: wang-person/v1
id: p_JFxNc3pGXxSbh8tK7oDUVw
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 702262
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q1eDZl15dooEogW6_hPXOb
        subject_person_id: p_JFxNc3pGXxSbh8tK7oDUVw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KDOic_vvRJsWwfF00OLy68
          claim_id: c_q1eDZl15dooEogW6_hPXOb
          source_id: s_U2ct6nbsRq4eOf4NNOHqLv
          stance: supports
          locator: CBDB:702262
          quotation: null
          interpretation_note: CBDB 明确记录的王純配偶
          source: &a1
            id: s_U2ct6nbsRq4eOf4NNOHqLv
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王純妻)（CBDB 702262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702262&o=json
            external_identifier: CBDB:702262
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
        id: c_zVDGE4QYMOE6-xx8aop0XG
        subject_person_id: p_NyYHxUHUugsJF2H4cL2iAF
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JFxNc3pGXxSbh8tK7oDUVw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7laAFOeAw8kyJ8qcHIAubL
          claim_id: c_zVDGE4QYMOE6-xx8aop0XG
          source_id: s_U2ct6nbsRq4eOf4NNOHqLv
          stance: supports
          locator: 平陰縣志，lgid=630876：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NyYHxUHUugsJF2H4cL2iAF
        status: active
        display_name: 王純
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_NyYHxUHUugsJF2H4cL2iAF | 王純 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王純妻)（CBDB 702262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702262&o=json)
