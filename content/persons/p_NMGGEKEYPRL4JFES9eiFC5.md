---
schema: wang-person/v1
id: p_NMGGEKEYPRL4JFES9eiFC5
status: active
merged_into: null
display_name: 王晛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qfGuN3wqNj3nAbyBNMNCFs
        subject_person_id: p_NMGGEKEYPRL4JFES9eiFC5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3PRyNoZZiRjfWd8nWh4ngJ
          claim_id: c_qfGuN3wqNj3nAbyBNMNCFs
          source_id: s_67z3K2TE2Ukgm1B3F7EVtW
          stance: supports
          locator: CBDB:143703
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143703）
          source: &a1
            id: s_67z3K2TE2Ukgm1B3F7EVtW
            source_type: api_record
            title: 中国历代人物传记资料库：王晛（CBDB 143703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143703&o=json
            external_identifier: CBDB:143703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_fiD3hGrw8ccEH46dVM12p3
        subject_person_id: p_NMGGEKEYPRL4JFES9eiFC5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 731年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RgRwGa2F1A9JesTEuMEXQk
          claim_id: c_fiD3hGrw8ccEH46dVM12p3
          source_id: s_67z3K2TE2Ukgm1B3F7EVtW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bfn7tKyxhwRC7qpmAVKU32
        subject_person_id: p_NMGGEKEYPRL4JFES9eiFC5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晛（卒于731年），史料所见人物。本项目依据《中国历代人物传记资料库：王晛（CBDB 143703）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_emICUQuOerYoWWYlV3c4eQ
          claim_id: c_bfn7tKyxhwRC7qpmAVKU32
          source_id: s_67z3K2TE2Ukgm1B3F7EVtW
          stance: supports
          locator: CBDB:143703
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_h-Vy9trdvV2UCo-0nU2jGY
        subject_person_id: p_xyTfpu99iGhW5Hx23dbPxr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NMGGEKEYPRL4JFES9eiFC5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N9MkovHNV5v_qLaKwBoRK6
          claim_id: c_h-Vy9trdvV2UCo-0nU2jGY
          source_id: s_67z3K2TE2Ukgm1B3F7EVtW
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan120：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xyTfpu99iGhW5Hx23dbPxr
        status: active
        display_name: 王旻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晛 | accepted |
| death.date | 731年 | accepted |
| bio.summary | 王晛（卒于731年），史料所见人物。本项目依据《中国历代人物传记资料库：王晛（CBDB 143703）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xyTfpu99iGhW5Hx23dbPxr | 王旻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晛（CBDB 143703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143703&o=json)
