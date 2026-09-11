---
schema: wang-person/v1
id: p_Z3i1QDaVK9bKnfHPjC2LL1
status: active
merged_into: null
display_name: 雙氏
revision: 1
cbdb_id: 162202
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yxsfyVimsoi5cUTyYsXB53
        subject_person_id: p_Z3i1QDaVK9bKnfHPjC2LL1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 雙氏，史料所见人物。本项目依据《中国历代人物传记资料库：雙氏(王行妻)（CBDB 162202）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UjRzV4kLWiyP0E9-3LJzMl
          claim_id: c_yxsfyVimsoi5cUTyYsXB53
          source_id: s_RqO0CEqarDLQBI5wTNU_cR
          stance: supports
          locator: CBDB:162202
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_RqO0CEqarDLQBI5wTNU_cR
            source_type: api_record
            title: 中国历代人物传记资料库：雙氏(王行妻)（CBDB 162202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162202&o=json
            external_identifier: CBDB:162202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8HwABuq7GEQ_9orwrN-gjb
        subject_person_id: p_Z3i1QDaVK9bKnfHPjC2LL1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 雙氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_46zeFbhQwJ7EP1Bfm7haaD
          claim_id: c_8HwABuq7GEQ_9orwrN-gjb
          source_id: s_RqO0CEqarDLQBI5wTNU_cR
          stance: supports
          locator: CBDB:162202
          quotation: null
          interpretation_note: CBDB 明确记录的王行配偶
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
        id: c_avbkJK39B1FnA9kUavxFzU
        subject_person_id: p_D4HCTBKsMufgMrHgBLUuVV
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Z3i1QDaVK9bKnfHPjC2LL1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yiwoI8hSmGAzSQv0LtZTcQ
          claim_id: c_avbkJK39B1FnA9kUavxFzU
          source_id: s_RqO0CEqarDLQBI5wTNU_cR
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Xianqing39：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_D4HCTBKsMufgMrHgBLUuVV
        status: active
        display_name: 王行
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 雙氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 雙氏，史料所见人物。本项目依据《中国历代人物传记资料库：雙氏(王行妻)（CBDB 162202）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 雙氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_D4HCTBKsMufgMrHgBLUuVV | 王行 | accepted |

## 外部来源

- [中国历代人物传记资料库：雙氏(王行妻)（CBDB 162202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162202&o=json)
