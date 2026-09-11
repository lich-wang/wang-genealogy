---
schema: wang-person/v1
id: p_YSySVDFkHoiwLMp7djFurG
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 333325
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B_rIdUTibbuNDmVE1SsoHl
        subject_person_id: p_YSySVDFkHoiwLMp7djFurG
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
        - id: cs_cYgGM4r8VeMgtpSx6BX553
          claim_id: c_B_rIdUTibbuNDmVE1SsoHl
          source_id: s_Aike37LC1u9Nr8xg7r0zoH
          stance: supports
          locator: CBDB:333325
          quotation: null
          interpretation_note: CBDB 明确记录的王之屏配偶
          source: &a1
            id: s_Aike37LC1u9Nr8xg7r0zoH
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王之屏妻)（CBDB 333325）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333325&o=json
            external_identifier: CBDB:333325
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
        id: c_tShifK6jdmH3R2dYc5qMUI
        subject_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YSySVDFkHoiwLMp7djFurG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uEMNadQBoSdiX6MdUdYW9T
          claim_id: c_tShifK6jdmH3R2dYc5qMUI
          source_id: s_Aike37LC1u9Nr8xg7r0zoH
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百九十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1rXUfnsmYtKV6HvQmcZEx1
        status: active
        display_name: 王之屏
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
| spouses | p_1rXUfnsmYtKV6HvQmcZEx1 | 王之屏 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王之屏妻)（CBDB 333325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333325&o=json)
