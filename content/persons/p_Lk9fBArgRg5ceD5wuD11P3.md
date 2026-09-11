---
schema: wang-person/v1
id: p_Lk9fBArgRg5ceD5wuD11P3
status: active
merged_into: null
display_name: 劉嗣
revision: 1
cbdb_id: 28653
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ds4zN3PPJ-5D-4HiWadF6Q
        subject_person_id: p_Lk9fBArgRg5ceD5wuD11P3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉嗣，元人物。籍贯天台。（中国历代人物传记资料库 CBDB 28653）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DJz9YJDAxOvDd7raQDipV5
          claim_id: c_ds4zN3PPJ-5D-4HiWadF6Q
          source_id: s_4a3iePWowJQN2N10qcZ83v
          stance: supports
          locator: CBDB:28653
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4a3iePWowJQN2N10qcZ83v
            source_type: api_record
            title: 中国历代人物传记资料库：劉嗣（CBDB 28653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28653&o=json
            external_identifier: CBDB:28653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZhS40xfOx91GMA1Cz_JJ-f
        subject_person_id: p_Lk9fBArgRg5ceD5wuD11P3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉嗣
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gX0B5DNrC7h49T6wlsQpWP
          claim_id: c_ZhS40xfOx91GMA1Cz_JJ-f
          source_id: s_4a3iePWowJQN2N10qcZ83v
          stance: supports
          locator: CBDB:28653
          quotation: null
          interpretation_note: CBDB 明确记录的王可道配偶
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
        id: c_2opvf01an0DR0Unr4GkUjP
        subject_person_id: p_ffqNAN85yyDgDucQLjy17K
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Lk9fBArgRg5ceD5wuD11P3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P4ilqU_vD1iBgtEdLl0Bci
          claim_id: c_2opvf01an0DR0Unr4GkUjP
          source_id: s_4a3iePWowJQN2N10qcZ83v
          stance: supports
          locator: CBDB 双向互证（丈夫 劉嗣）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ffqNAN85yyDgDucQLjy17K
        status: active
        display_name: 王可道
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉嗣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 劉嗣，元人物。籍贯天台。（中国历代人物传记资料库 CBDB 28653） | accepted |
| name.primary | 劉嗣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ffqNAN85yyDgDucQLjy17K | 王可道 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉嗣（CBDB 28653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28653&o=json)
