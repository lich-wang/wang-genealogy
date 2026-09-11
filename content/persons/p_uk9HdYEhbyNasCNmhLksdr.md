---
schema: wang-person/v1
id: p_uk9HdYEhbyNasCNmhLksdr
status: active
merged_into: null
display_name: 蔡氏
revision: 1
cbdb_id: 570935
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_lKWlfTmY5Sm4kUB0i6zWTH
        subject_person_id: p_uk9HdYEhbyNasCNmhLksdr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蔡氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GYPxWgNtCA9oeu3zEsEqCj
          claim_id: c_lKWlfTmY5Sm4kUB0i6zWTH
          source_id: s_TpzLe48Q65V1fZ3tC8aR5q
          stance: supports
          locator: CBDB:570935
          quotation: null
          interpretation_note: CBDB 明确记录的王珪配偶
          source: &a1
            id: s_TpzLe48Q65V1fZ3tC8aR5q
            source_type: api_record
            title: 中国历代人物传记资料库：蔡氏(王珪妻)（CBDB 570935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570935&o=json
            external_identifier: CBDB:570935
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
        id: c_SPisrGkzwq5OoYOWxOOuD5
        subject_person_id: p_R5JShMuREiNN4sUo25efXj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_uk9HdYEhbyNasCNmhLksdr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SdHu7q5mGn0LtA5zRAiDTJ
          claim_id: c_SPisrGkzwq5OoYOWxOOuD5
          source_id: s_TpzLe48Q65V1fZ3tC8aR5q
          stance: supports
          locator: 紹興府志:八十卷，lgid=316863：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_R5JShMuREiNN4sUo25efXj
        status: active
        display_name: 王珪
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蔡氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 蔡氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_R5JShMuREiNN4sUo25efXj | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：蔡氏(王珪妻)（CBDB 570935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570935&o=json)
