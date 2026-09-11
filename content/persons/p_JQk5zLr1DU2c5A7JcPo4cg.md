---
schema: wang-person/v1
id: p_JQk5zLr1DU2c5A7JcPo4cg
status: active
merged_into: null
display_name: 謝氏
revision: 1
cbdb_id: 251146
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mzA4ikbPBFS1t3MQb3EEux
        subject_person_id: p_JQk5zLr1DU2c5A7JcPo4cg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 謝氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ESfeQHkaJYM9tQHPCHvEyk
          claim_id: c_mzA4ikbPBFS1t3MQb3EEux
          source_id: s_CxVfYecQkbcHaU7E6rGptj
          stance: supports
          locator: CBDB:251146
          quotation: null
          interpretation_note: CBDB 明确记录的王珦配偶
          source: &a1
            id: s_CxVfYecQkbcHaU7E6rGptj
            source_type: api_record
            title: 中国历代人物传记资料库：謝氏(王珦妻)（CBDB 251146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251146&o=json
            external_identifier: CBDB:251146
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
        id: c_jb8pW5Ge80wL2rXVRk1oCB
        subject_person_id: p_9EQ7RpHJJENgpoTNeutQ15
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JQk5zLr1DU2c5A7JcPo4cg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_obbNPTLx8hdm6nmhKmNeGG
          claim_id: c_jb8pW5Ge80wL2rXVRk1oCB
          source_id: s_CxVfYecQkbcHaU7E6rGptj
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第二甲第四十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9EQ7RpHJJENgpoTNeutQ15
        status: active
        display_name: 王珦
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 謝氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 謝氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_9EQ7RpHJJENgpoTNeutQ15 | 王珦 | accepted |

## 外部来源

- [中国历代人物传记资料库：謝氏(王珦妻)（CBDB 251146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251146&o=json)
