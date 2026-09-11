---
schema: wang-person/v1
id: p_fCZuX8X6nUuMiUgz6dpbqH
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 335887
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2W-GK4Rz0mltnrSGfVH_QE
        subject_person_id: p_fCZuX8X6nUuMiUgz6dpbqH
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
        - id: cs_iNRz1R1RpEE6FXCKimne4a
          claim_id: c_2W-GK4Rz0mltnrSGfVH_QE
          source_id: s_3gL3Pt9T2eA4YTPT1wItQt
          stance: supports
          locator: CBDB:335887
          quotation: null
          interpretation_note: CBDB 明确记录的王誼配偶
          source: &a1
            id: s_3gL3Pt9T2eA4YTPT1wItQt
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王誼妻)（CBDB 335887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335887&o=json
            external_identifier: CBDB:335887
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
        id: c_hw7actrnjsulDTKWcUnEZt
        subject_person_id: p_8Ron7BDzFq6b4FwKnZ8W1Z
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fCZuX8X6nUuMiUgz6dpbqH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_30pR9GaqReq7oMFRJ-_yjP
          claim_id: c_hw7actrnjsulDTKWcUnEZt
          source_id: s_3gL3Pt9T2eA4YTPT1wItQt
          stance: supports
          locator: 洪武四年進士登科錄:一卷，第二甲第十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8Ron7BDzFq6b4FwKnZ8W1Z
        status: active
        display_name: 王誼
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
| spouses | p_8Ron7BDzFq6b4FwKnZ8W1Z | 王誼 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王誼妻)（CBDB 335887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335887&o=json)
