---
schema: wang-person/v1
id: p_wEtwwJVfUx19apR9keMrR6
status: active
merged_into: null
display_name: 梁氏
revision: 1
cbdb_id: 253010
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zGKB_HAN5zwzHyNi0K4BUj
        subject_person_id: p_wEtwwJVfUx19apR9keMrR6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 梁氏，明人物。成化十四年進士。（中国历代人物传记资料库 CBDB 253010）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bLXOHKWPGfYKGEZsl47FSJ
          claim_id: c_zGKB_HAN5zwzHyNi0K4BUj
          source_id: s_GWOo8NZSgFhbs-9jtrj5Oa
          stance: supports
          locator: CBDB:253010
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GWOo8NZSgFhbs-9jtrj5Oa
            source_type: api_record
            title: 中国历代人物传记资料库：梁氏(王相妻)（CBDB 253010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253010&o=json
            external_identifier: CBDB:253010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_84k92i5Zt9fwGFgcDT22NK
        subject_person_id: p_wEtwwJVfUx19apR9keMrR6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 梁氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hSUOuAGAInoZr4qgDa-HzI
          claim_id: c_84k92i5Zt9fwGFgcDT22NK
          source_id: s_GWOo8NZSgFhbs-9jtrj5Oa
          stance: supports
          locator: CBDB:253010
          quotation: null
          interpretation_note: CBDB 明确记录的王相配偶
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
        id: c_FqbhQlERPc0hiZyFhg1mud
        subject_person_id: p_eMDP1q9C4pkhGjAYDKDRYY
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wEtwwJVfUx19apR9keMrR6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PI2_bxze9PSYdlZ_6SJA1i
          claim_id: c_FqbhQlERPc0hiZyFhg1mud
          source_id: s_GWOo8NZSgFhbs-9jtrj5Oa
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百四十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eMDP1q9C4pkhGjAYDKDRYY
        status: active
        display_name: 王相
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 梁氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 梁氏，明人物。成化十四年進士。（中国历代人物传记资料库 CBDB 253010） | accepted |
| name.primary | 梁氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_eMDP1q9C4pkhGjAYDKDRYY | 王相 | accepted |

## 外部来源

- [中国历代人物传记资料库：梁氏(王相妻)（CBDB 253010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253010&o=json)
