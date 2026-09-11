---
schema: wang-person/v1
id: p_s1PHoruNVpfL6dYWTgnMR8
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 270240
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n93EcsMbSuCkH4BJU5ZO0M
        subject_person_id: p_s1PHoruNVpfL6dYWTgnMR8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rkto2rMsVGu09KOq3DhVPl
          claim_id: c_n93EcsMbSuCkH4BJU5ZO0M
          source_id: s_Ek5eqSHGBqiajNc-Wt4o_m
          stance: supports
          locator: CBDB:270240
          quotation: null
          interpretation_note: CBDB 明确记录的王納誨配偶
          source: &a1
            id: s_Ek5eqSHGBqiajNc-Wt4o_m
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王納誨妻)（CBDB 270240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270240&o=json
            external_identifier: CBDB:270240
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
        id: c_N3ufDO6CYpv_Dor4bFbTSD
        subject_person_id: p_1Z5UnhG19fXLy7n6F1UwHg
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_s1PHoruNVpfL6dYWTgnMR8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QMLvO0G52Y2hefSZXrtBkD
          claim_id: c_N3ufDO6CYpv_Dor4bFbTSD
          source_id: s_Ek5eqSHGBqiajNc-Wt4o_m
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1Z5UnhG19fXLy7n6F1UwHg
        status: active
        display_name: 王納誨
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_1Z5UnhG19fXLy7n6F1UwHg | 王納誨 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王納誨妻)（CBDB 270240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270240&o=json)
