---
schema: wang-person/v1
id: p_LgY66MYi17pkCoQsrEyB9E
status: active
merged_into: null
display_name: 王勃
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Bj2Ss4VWv8CVJxB56qse8
        subject_person_id: p_LgY66MYi17pkCoQsrEyB9E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3jom25GJGGEhfpCQwgPTfM
          claim_id: c_8Bj2Ss4VWv8CVJxB56qse8
          source_id: s_NPG2X8ZwMAngCotJDyiN6K
          stance: supports
          locator: CBDB:30982
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30982）
          source: &a1
            id: s_NPG2X8ZwMAngCotJDyiN6K
            source_type: api_record
            title: 中国历代人物传记资料库：王勃（CBDB 30982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30982&o=json
            external_identifier: CBDB:30982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.044Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8XxFKBkbRgJH33ke2yDzgN
        subject_person_id: p_LgY66MYi17pkCoQsrEyB9E
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 650年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mn4hj2sH6hoPiGE8z7kSQF
          claim_id: c_8XxFKBkbRgJH33ke2yDzgN
          source_id: s_NPG2X8ZwMAngCotJDyiN6K
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4WCHyARfW6M8e4eWoF32An
        subject_person_id: p_LgY66MYi17pkCoQsrEyB9E
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 676年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3o97yQ5aQPz3a6yVP94tqJ
          claim_id: c_4WCHyARfW6M8e4eWoF32An
          source_id: s_NPG2X8ZwMAngCotJDyiN6K
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aQPEdGuAxPRZVw1r9shGJk
        subject_person_id: p_LgY66MYi17pkCoQsrEyB9E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_di4MRkaS7reNFCXbKjMuK5
          claim_id: c_aQPEdGuAxPRZVw1r9shGJk
          source_id: s_NPG2X8ZwMAngCotJDyiN6K
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
        id: c_DNiHgsaW880llpxudCqj4u
        subject_person_id: p_aKTcTcwPwwQP7hVaAj9R1z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LgY66MYi17pkCoQsrEyB9E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2jmY1VwklQEACeEDX9ooHF
          claim_id: c_DNiHgsaW880llpxudCqj4u
          source_id: s_NPG2X8ZwMAngCotJDyiN6K
          stance: supports
          locator: Pers DB / 唐代人物知識ベース，pers00241：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aKTcTcwPwwQP7hVaAj9R1z
        status: active
        display_name: 王福畤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王勃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勃 | accepted |
| birth.date | 650年 | accepted |
| death.date | 676年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aKTcTcwPwwQP7hVaAj9R1z | 王福畤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勃（CBDB 30982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30982&o=json)
