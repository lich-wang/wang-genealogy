---
schema: wang-person/v1
id: p_LzEELjJoPgtvqqg3hCWYLG
status: active
merged_into: null
display_name: 韓氏
revision: 1
cbdb_id: 334259
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PhLvSRn9cFfaPud5pREX3q
        subject_person_id: p_LzEELjJoPgtvqqg3hCWYLG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 韓氏，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 334259）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sDmQ6GTxB8ubwwaIHCKrrb
          claim_id: c_PhLvSRn9cFfaPud5pREX3q
          source_id: s_sTlfPV6lNaliVn8l6PydHO
          stance: supports
          locator: CBDB:334259
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sTlfPV6lNaliVn8l6PydHO
            source_type: api_record
            title: 中国历代人物传记资料库：韓氏(王之士妻)（CBDB 334259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334259&o=json
            external_identifier: CBDB:334259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_B1GJkDUAM-GxEoHlodczhy
        subject_person_id: p_LzEELjJoPgtvqqg3hCWYLG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 韓氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ljS_YnYcX_EWsglbj7S0p5
          claim_id: c_B1GJkDUAM-GxEoHlodczhy
          source_id: s_sTlfPV6lNaliVn8l6PydHO
          stance: supports
          locator: CBDB:334259
          quotation: null
          interpretation_note: CBDB 明确记录的王之士配偶
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
        id: c_CfuA4DMrYRXuvvvHjoETo0
        subject_person_id: p_2WkB5UHe7A5kLMMt82Na3L
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_LzEELjJoPgtvqqg3hCWYLG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5r0vP0tWiACqQVfkxn3TTm
          claim_id: c_CfuA4DMrYRXuvvvHjoETo0
          source_id: s_sTlfPV6lNaliVn8l6PydHO
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第六十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2WkB5UHe7A5kLMMt82Na3L
        status: active
        display_name: 王之士
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 韓氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 韓氏，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 334259） | accepted |
| name.primary | 韓氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2WkB5UHe7A5kLMMt82Na3L | 王之士 | accepted |

## 外部来源

- [中国历代人物传记资料库：韓氏(王之士妻)（CBDB 334259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334259&o=json)
