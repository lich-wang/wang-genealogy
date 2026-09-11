---
schema: wang-person/v1
id: p_R5JShMuREiNN4sUo25efXj
status: active
merged_into: null
display_name: 王珪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tJwZ8zxFTQjAfkPDnewSzN
        subject_person_id: p_R5JShMuREiNN4sUo25efXj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mCiGJHDfGjkZV1ZEsD4jD3
          claim_id: c_tJwZ8zxFTQjAfkPDnewSzN
          source_id: s_KS1V5xGnBzDz9HoQ6uVTte
          stance: supports
          locator: CBDB:570937
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（570937）
          source: &a1
            id: s_KS1V5xGnBzDz9HoQ6uVTte
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 570937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570937&o=json
            external_identifier: CBDB:570937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5VdcN9pcDZbQq8gtKF3CmG
        subject_person_id: p_R5JShMuREiNN4sUo25efXj
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
        - id: cs_p3VQjzqD47QLknzZvCKoBw
          claim_id: c_5VdcN9pcDZbQq8gtKF3CmG
          source_id: s_KS1V5xGnBzDz9HoQ6uVTte
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
          source:
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
      object_person:
        id: p_uk9HdYEhbyNasCNmhLksdr
        status: active
        display_name: 蔡氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珪 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_uk9HdYEhbyNasCNmhLksdr | 蔡氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：蔡氏(王珪妻)（CBDB 570935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570935&o=json)
- [中国历代人物传记资料库：王珪（CBDB 570937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570937&o=json)
