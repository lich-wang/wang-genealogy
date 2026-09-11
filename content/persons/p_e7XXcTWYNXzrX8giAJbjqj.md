---
schema: wang-person/v1
id: p_e7XXcTWYNXzrX8giAJbjqj
status: active
merged_into: null
display_name: 徐淑
revision: 1
cbdb_id: 56521
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_14LvInKTjez6PSFK9Vhi3l
        subject_person_id: p_e7XXcTWYNXzrX8giAJbjqj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐淑，史料所见人物。本项目依据《中国历代人物传记资料库：徐淑（CBDB 56521）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hZXFo4rq8sTqSHU8fq6uGd
          claim_id: c_14LvInKTjez6PSFK9Vhi3l
          source_id: s_p3LJSszLvyruviS1JlcXy9
          stance: supports
          locator: CBDB:56521
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_p3LJSszLvyruviS1JlcXy9
            source_type: api_record
            title: 中国历代人物传记资料库：徐淑（CBDB 56521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56521&o=json
            external_identifier: CBDB:56521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xwAnajWwJiVvyW5fL_HsPj
        subject_person_id: p_e7XXcTWYNXzrX8giAJbjqj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐淑
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FIWazQ_vKy9VKiQcPk0rdk
          claim_id: c_xwAnajWwJiVvyW5fL_HsPj
          source_id: s_p3LJSszLvyruviS1JlcXy9
          stance: supports
          locator: CBDB:56521
          quotation: null
          interpretation_note: CBDB 明确记录的王子良配偶
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
        id: c_UbSbSN50jeIn15wl1fbIev
        subject_person_id: p_aHKUYiw3rsbWPr9u72yJ8e
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_e7XXcTWYNXzrX8giAJbjqj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qnpGTd1zft2WdBsJ7_GNz-
          claim_id: c_UbSbSN50jeIn15wl1fbIev
          source_id: s_p3LJSszLvyruviS1JlcXy9
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #950, HuWenKai #474：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aHKUYiw3rsbWPr9u72yJ8e
        status: active
        display_name: 王子良
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 徐淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 徐淑，史料所见人物。本项目依据《中国历代人物传记资料库：徐淑（CBDB 56521）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 徐淑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_aHKUYiw3rsbWPr9u72yJ8e | 王子良 | accepted |

## 外部来源

- [中国历代人物传记资料库：徐淑（CBDB 56521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56521&o=json)
