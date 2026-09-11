---
schema: wang-person/v1
id: p_jGAnmRyBAgQe7xAAZpgHkS
status: active
merged_into: null
display_name: 盛氏
revision: 1
cbdb_id: 42631
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YrIvjpZdOmUZmWHXALaaK7
        subject_person_id: p_jGAnmRyBAgQe7xAAZpgHkS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 盛氏，史料所见人物。本项目依据《中国历代人物传记资料库：盛氏(周彥先前妻)（CBDB 42631）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NeLXAXPFSpxk5scbZUHURQ
          claim_id: c_YrIvjpZdOmUZmWHXALaaK7
          source_id: s_e_pzeeBXoPZCbn9RGoEf7M
          stance: supports
          locator: CBDB:42631
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_e_pzeeBXoPZCbn9RGoEf7M
            source_type: api_record
            title: 中国历代人物传记资料库：盛氏(周彥先前妻)（CBDB 42631）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=42631&o=json
            external_identifier: CBDB:42631
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xR29EygTI4yrd5tlM9dFZH
        subject_person_id: p_jGAnmRyBAgQe7xAAZpgHkS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 盛氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mqkzYx5DSxY2onJ_jgB0Ia
          claim_id: c_xR29EygTI4yrd5tlM9dFZH
          source_id: s_e_pzeeBXoPZCbn9RGoEf7M
          stance: supports
          locator: CBDB:42631
          quotation: null
          interpretation_note: CBDB 明确记录的周彦先配偶
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
        id: c_YwQppHpgZbOkAJqx3-Ygui
        subject_person_id: p_89CVzmbJkovfM1uzWHbhb4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jGAnmRyBAgQe7xAAZpgHkS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KMglGQ_78fokyQ0pkjRLio
          claim_id: c_YwQppHpgZbOkAJqx3-Ygui
          source_id: s_e_pzeeBXoPZCbn9RGoEf7M
          stance: supports
          locator: CBDB 双向互证（妻子 盛氏(周彥先前妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_89CVzmbJkovfM1uzWHbhb4
        status: active
        display_name: 周彦先
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 盛氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 盛氏，史料所见人物。本项目依据《中国历代人物传记资料库：盛氏(周彥先前妻)（CBDB 42631）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 盛氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_89CVzmbJkovfM1uzWHbhb4 | 周彦先 | accepted |

## 外部来源

- [中国历代人物传记资料库：盛氏(周彥先前妻)（CBDB 42631）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=42631&o=json)
