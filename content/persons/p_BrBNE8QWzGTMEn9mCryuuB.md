---
schema: wang-person/v1
id: p_BrBNE8QWzGTMEn9mCryuuB
status: active
merged_into: null
display_name: 王璽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PcxXpg1Z3oUbrgBjvwc2JN
        subject_person_id: p_BrBNE8QWzGTMEn9mCryuuB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Fxc5NnTzw5peCUftWP24eC
          claim_id: c_PcxXpg1Z3oUbrgBjvwc2JN
          source_id: s_kiLQEf2X2mYoq4Et9gU1Fk
          stance: supports
          locator: CBDB:270322
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270322）
          source: &a1
            id: s_kiLQEf2X2mYoq4Et9gU1Fk
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 270322）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270322&o=json
            external_identifier: CBDB:270322
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.828Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qYQL3YViWD43gMzMW1r7Qg
        subject_person_id: p_BrBNE8QWzGTMEn9mCryuuB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_46yDvd6tWpVEYM4um2U7oL
          claim_id: c_qYQL3YViWD43gMzMW1r7Qg
          source_id: s_kiLQEf2X2mYoq4Et9gU1Fk
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
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_-H1mFJBEF1RzOOBvRBLrmf
        subject_person_id: p_BrBNE8QWzGTMEn9mCryuuB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QqHZ53bR3BD9L2PF2yyQK7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HdDltCFQPzboRZtz-ibJ15
          claim_id: c_-H1mFJBEF1RzOOBvRBLrmf
          source_id: s_kiLQEf2X2mYoq4Et9gU1Fk
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第五十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QqHZ53bR3BD9L2PF2yyQK7
        status: active
        display_name: 王金
        merged_into_person_id: null
  other: []
---

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_QqHZ53bR3BD9L2PF2yyQK7 | 王金 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璽（CBDB 270322）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270322&o=json)
