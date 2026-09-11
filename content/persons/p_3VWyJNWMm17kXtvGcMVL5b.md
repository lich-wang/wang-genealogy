---
schema: wang-person/v1
id: p_3VWyJNWMm17kXtvGcMVL5b
status: active
merged_into: null
display_name: 王密
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7yFfs27n1zyqLiKkZya8tN
        subject_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王密
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tuHsD6ZRJiUjRSMpJcp175
          claim_id: c_7yFfs27n1zyqLiKkZya8tN
          source_id: s_LMA8xHJ4EXr524gv8VeY3b
          stance: supports
          locator: CBDB:202150
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202150）
          source: &a1
            id: s_LMA8xHJ4EXr524gv8VeY3b
            source_type: api_record
            title: 中国历代人物传记资料库：王密（CBDB 202150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202150&o=json
            external_identifier: CBDB:202150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_seXn9fs3en62sR4fT9gscA
        subject_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1487年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7nNddcunk1t39oen82pHAx
          claim_id: c_seXn9fs3en62sR4fT9gscA
          source_id: s_LMA8xHJ4EXr524gv8VeY3b
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
        id: c_WB2DhgordtABnfqzivTx2T
        subject_person_id: p_3VWyJNWMm17kXtvGcMVL5b
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
        - id: cs_o65ba8ij9HYqFuiTRqF7Bk
          claim_id: c_WB2DhgordtABnfqzivTx2T
          source_id: s_LMA8xHJ4EXr524gv8VeY3b
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__aZxU1BR7Wf8_Cq1xfI2uT
        subject_person_id: p_CN2jDLgCox9JFiLJPyx2Za
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nqDcwomowXtBuBN0weBMsm
          claim_id: c__aZxU1BR7Wf8_Cq1xfI2uT
          source_id: s_LMA8xHJ4EXr524gv8VeY3b
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CN2jDLgCox9JFiLJPyx2Za
        status: active
        display_name: 王鎮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_eloTyXsJ334GLvJGici2Zb
        subject_person_id: p_DSxYDaaTU5JEJPeq3GSeg5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yxgqh426PaAQx3BrO8SpVn
          claim_id: c_eloTyXsJ334GLvJGici2Zb
          source_id: s_LMA8xHJ4EXr524gv8VeY3b
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DSxYDaaTU5JEJPeq3GSeg5
        status: active
        display_name: 王聚
        merged_into_person_id: null
    - claim:
        id: c_tPXt64fdfbh0v-tmeostct
        subject_person_id: p_r4MTRV1bEZ9nUwXyZp7sDF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KJYPaB-aHM_S3ycnz2CZXm
          claim_id: c_tPXt64fdfbh0v-tmeostct
          source_id: s_LMA8xHJ4EXr524gv8VeY3b
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_r4MTRV1bEZ9nUwXyZp7sDF
        status: active
        display_name: 王溫
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王密

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王密 | accepted |
| birth.date | 1487年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CN2jDLgCox9JFiLJPyx2Za | 王鎮 | accepted |
| ancestors | p_DSxYDaaTU5JEJPeq3GSeg5 | 王聚 | accepted |
| ancestors | p_r4MTRV1bEZ9nUwXyZp7sDF | 王溫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王密（CBDB 202150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202150&o=json)
