---
schema: wang-person/v1
id: p_W4nh58zswmJ97A4idB5ywj
status: active
merged_into: null
display_name: 高士明
revision: 1
cbdb_id: 162065
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zGBldJsUZLWLB5eEvS0FQw
        subject_person_id: p_W4nh58zswmJ97A4idB5ywj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 高士明，史料所见人物。本项目依据《中国历代人物传记资料库：高士明（CBDB 162065）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FHNR4lPedYEvFCCO3E78Ub
          claim_id: c_zGBldJsUZLWLB5eEvS0FQw
          source_id: s_fh1eU3tQo5TzOKrR8jqRB0
          stance: supports
          locator: CBDB:162065
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_fh1eU3tQo5TzOKrR8jqRB0
            source_type: api_record
            title: 中国历代人物传记资料库：高士明（CBDB 162065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162065&o=json
            external_identifier: CBDB:162065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ebYSy1IE8pfiIGgKbt1D6x
        subject_person_id: p_W4nh58zswmJ97A4idB5ywj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 高士明
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pqPXTz90amS0sCIcBoi5XK
          claim_id: c_ebYSy1IE8pfiIGgKbt1D6x
          source_id: s_fh1eU3tQo5TzOKrR8jqRB0
          stance: supports
          locator: CBDB:162065
          quotation: null
          interpretation_note: CBDB 明确记录的王淨配偶
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
        id: c_t8Vrk0leKUvXysBL69BKh6
        subject_person_id: p_XxZ2iw5GJ8V5KZzvCDoyCb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_W4nh58zswmJ97A4idB5ywj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ziU9NygginJGDjfpufEKMY
          claim_id: c_t8Vrk0leKUvXysBL69BKh6
          source_id: s_fh1eU3tQo5TzOKrR8jqRB0
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yonghui29：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XxZ2iw5GJ8V5KZzvCDoyCb
        status: active
        display_name: 王淨
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 高士明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 高士明，史料所见人物。本项目依据《中国历代人物传记资料库：高士明（CBDB 162065）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 高士明 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_XxZ2iw5GJ8V5KZzvCDoyCb | 王淨 | accepted |

## 外部来源

- [中国历代人物传记资料库：高士明（CBDB 162065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162065&o=json)
