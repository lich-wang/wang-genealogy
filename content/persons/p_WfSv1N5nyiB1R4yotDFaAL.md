---
schema: wang-person/v1
id: p_WfSv1N5nyiB1R4yotDFaAL
status: active
merged_into: null
display_name: 楊氏
revision: 1
cbdb_id: 165518
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P1ON6Dd665vF6nFj6wBD9Y
        subject_person_id: p_WfSv1N5nyiB1R4yotDFaAL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 楊氏，史料所见人物。本项目依据《中国历代人物传记资料库：楊氏(王偕妻)（CBDB 165518）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yUa8Cqq_rZ0RCEmy-1DjM_
          claim_id: c_P1ON6Dd665vF6nFj6wBD9Y
          source_id: s_Htfg1XcFR2qURzr6WvBvIx
          stance: supports
          locator: CBDB:165518
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Htfg1XcFR2qURzr6WvBvIx
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(王偕妻)（CBDB 165518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165518&o=json
            external_identifier: CBDB:165518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uJTkyvEo7bdKU-ZHz_9UB8
        subject_person_id: p_WfSv1N5nyiB1R4yotDFaAL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 楊氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-Fl6V5zRmAr77U3wJIWv-v
          claim_id: c_uJTkyvEo7bdKU-ZHz_9UB8
          source_id: s_Htfg1XcFR2qURzr6WvBvIx
          stance: supports
          locator: CBDB:165518
          quotation: null
          interpretation_note: CBDB 明确记录的王偕配偶
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
        id: c_t4f2LqTcp9wTV4JWmZ7kig
        subject_person_id: p_ATVLVYdrJfV8c2bGwEHBnG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WfSv1N5nyiB1R4yotDFaAL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_APxN14LXxlCth6k2MsZjut
          claim_id: c_t4f2LqTcp9wTV4JWmZ7kig
          source_id: s_Htfg1XcFR2qURzr6WvBvIx
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Zhenyuan27：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ATVLVYdrJfV8c2bGwEHBnG
        status: active
        display_name: 王偕
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 楊氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 楊氏，史料所见人物。本项目依据《中国历代人物传记资料库：楊氏(王偕妻)（CBDB 165518）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 楊氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ATVLVYdrJfV8c2bGwEHBnG | 王偕 | accepted |

## 外部来源

- [中国历代人物传记资料库：楊氏(王偕妻)（CBDB 165518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165518&o=json)
