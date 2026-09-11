---
schema: wang-person/v1
id: p_jJ7oBEfLzsZ8MSWPD485w3
status: active
merged_into: null
display_name: 徐氏
revision: 1
cbdb_id: 244698
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wJDw33M_pHjNzp2MVrjf1O
        subject_person_id: p_jJ7oBEfLzsZ8MSWPD485w3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐氏，明人物。成化五年進士。（中国历代人物传记资料库 CBDB 244698）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BGBu4RssS8f6OyG9M3Balu
          claim_id: c_wJDw33M_pHjNzp2MVrjf1O
          source_id: s_gi7zpK2UL7sw1Fa0Wvhi4P
          stance: supports
          locator: CBDB:244698
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gi7zpK2UL7sw1Fa0Wvhi4P
            source_type: api_record
            title: 中国历代人物传记资料库：徐氏(王玹妻)（CBDB 244698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244698&o=json
            external_identifier: CBDB:244698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EMAZvnVzHn6ysYOPIjNLL8
        subject_person_id: p_jJ7oBEfLzsZ8MSWPD485w3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6QI6xWIFFY4fKFsosm16vx
          claim_id: c_EMAZvnVzHn6ysYOPIjNLL8
          source_id: s_gi7zpK2UL7sw1Fa0Wvhi4P
          stance: supports
          locator: CBDB:244698
          quotation: null
          interpretation_note: CBDB 明确记录的王玹配偶
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
        id: c_DOMzALYRzPfMnC7bKfYoE1
        subject_person_id: p_3oKFdGHi8BKifcXxMMERFS
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jJ7oBEfLzsZ8MSWPD485w3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K8Lme5SiFC9qQ6H1b-W35Y
          claim_id: c_DOMzALYRzPfMnC7bKfYoE1
          source_id: s_gi7zpK2UL7sw1Fa0Wvhi4P
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百三十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3oKFdGHi8BKifcXxMMERFS
        status: active
        display_name: 王玹
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 徐氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 徐氏，明人物。成化五年進士。（中国历代人物传记资料库 CBDB 244698） | accepted |
| name.primary | 徐氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3oKFdGHi8BKifcXxMMERFS | 王玹 | accepted |

## 外部来源

- [中国历代人物传记资料库：徐氏(王玹妻)（CBDB 244698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244698&o=json)
