---
schema: wang-person/v1
id: p_gAGyFxPwHU7UiGJcN4AFtu
status: active
merged_into: null
display_name: 曾氏
revision: 1
cbdb_id: 551521
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FfnUTuFibXcrB5O_uDASCy
        subject_person_id: p_gAGyFxPwHU7UiGJcN4AFtu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曾氏（卒於1710），清人物。籍贯湖廣布政司，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 551521）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rS6dHqxaLttaEWKmQEt-Ub
          claim_id: c_FfnUTuFibXcrB5O_uDASCy
          source_id: s_04Mbn8_u4c1ZXkmyw3kGHt
          stance: supports
          locator: CBDB:551521
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_04Mbn8_u4c1ZXkmyw3kGHt
            source_type: api_record
            title: 中国历代人物传记资料库：曾氏(王玉長妻)（CBDB 551521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551521&o=json
            external_identifier: CBDB:551521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TbDJP5z3PJtemugdEeJa93
        subject_person_id: p_gAGyFxPwHU7UiGJcN4AFtu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曾氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tjhrVdzgNWqWU8IX6LJPyt
          claim_id: c_TbDJP5z3PJtemugdEeJa93
          source_id: s_04Mbn8_u4c1ZXkmyw3kGHt
          stance: supports
          locator: CBDB:551521
          quotation: null
          interpretation_note: CBDB 明确记录的王玉長配偶
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
        id: c_Q-q14FZ_479aZBpT8w91rm
        subject_person_id: p_q5uG2Q3VyG79u4js9tTGBh
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gAGyFxPwHU7UiGJcN4AFtu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4QHWZhRcTd04UYb7iHs_Xo
          claim_id: c_Q-q14FZ_479aZBpT8w91rm
          source_id: s_04Mbn8_u4c1ZXkmyw3kGHt
          stance: supports
          locator: 南陽府志，lgid=878672：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_q5uG2Q3VyG79u4js9tTGBh
        status: active
        display_name: 王玉長
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 曾氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 曾氏（卒於1710），清人物。籍贯湖廣布政司，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 551521） | accepted |
| name.primary | 曾氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_q5uG2Q3VyG79u4js9tTGBh | 王玉長 | accepted |

## 外部来源

- [中国历代人物传记资料库：曾氏(王玉長妻)（CBDB 551521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551521&o=json)
