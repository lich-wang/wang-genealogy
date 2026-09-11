---
schema: wang-person/v1
id: p_r1BWPRikWTBYXrn9yZQrtw
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 242212
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q5Cd5JU3bOe9UndyX8FMuz
        subject_person_id: p_r1BWPRikWTBYXrn9yZQrtw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WJP3MpEKxStoX3dOuUEjbw
          claim_id: c_q5Cd5JU3bOe9UndyX8FMuz
          source_id: s__cNDzVsUsSsZ4nLbaHupf6
          stance: supports
          locator: CBDB:242212
          quotation: null
          interpretation_note: CBDB 明确记录的王義配偶
          source: &a1
            id: s__cNDzVsUsSsZ4nLbaHupf6
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王義妻)（CBDB 242212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242212&o=json
            external_identifier: CBDB:242212
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
        id: c_fMK1SP4fWTZGMdHm9QH4E4
        subject_person_id: p_J9NadhxFwxWfp7AyRarwGS
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_r1BWPRikWTBYXrn9yZQrtw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vzoJIpbzgWxg61NXSNN1Iq
          claim_id: c_fMK1SP4fWTZGMdHm9QH4E4
          source_id: s__cNDzVsUsSsZ4nLbaHupf6
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百零九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_J9NadhxFwxWfp7AyRarwGS
        status: active
        display_name: 王義
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_J9NadhxFwxWfp7AyRarwGS | 王義 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王義妻)（CBDB 242212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242212&o=json)
