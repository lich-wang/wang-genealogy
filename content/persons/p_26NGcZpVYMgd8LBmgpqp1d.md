---
schema: wang-person/v1
id: p_26NGcZpVYMgd8LBmgpqp1d
status: active
merged_into: null
display_name: 王定和
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tbZm6EN4o8KZvr6iGGMZnz
        subject_person_id: p_26NGcZpVYMgd8LBmgpqp1d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cnTpBkTzQNNrajgVE8Aziv
          claim_id: c_tbZm6EN4o8KZvr6iGGMZnz
          source_id: s_1LeAtLybSJuwrnGoHAY6tV
          stance: supports
          locator: CBDB:186151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186151）
          source: &a1
            id: s_1LeAtLybSJuwrnGoHAY6tV
            source_type: api_record
            title: 中国历代人物传记资料库：王定和（CBDB 186151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186151&o=json
            external_identifier: CBDB:186151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.268Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_379PHKhqdLnv4GBr7Es9oL
        subject_person_id: p_26NGcZpVYMgd8LBmgpqp1d
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 909年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5283AHJNUUK9gCHNd1mkic
          claim_id: c_379PHKhqdLnv4GBr7Es9oL
          source_id: s_1LeAtLybSJuwrnGoHAY6tV
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
        id: c_58nQik9zV8stiZ4zgvDQn3
        subject_person_id: p_26NGcZpVYMgd8LBmgpqp1d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定和（卒于909年），史料所见人物。本项目依据《中国历代人物传记资料库：王定和（CBDB 186151）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-SS1CUqQ_VQXf7u_tZLu59
          claim_id: c_58nQik9zV8stiZ4zgvDQn3
          source_id: s_1LeAtLybSJuwrnGoHAY6tV
          stance: supports
          locator: CBDB:186151
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_o3OCIrBM2wB8hMC0FhLUZi
        subject_person_id: p_PaQ5yP1i6ggstQ3reseLJo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_26NGcZpVYMgd8LBmgpqp1d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d4NL27GRYE0M5v6R5nHC2X
          claim_id: c_o3OCIrBM2wB8hMC0FhLUZi
          source_id: s_1LeAtLybSJuwrnGoHAY6tV
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PaQ5yP1i6ggstQ3reseLJo
        status: active
        display_name: 王尚準
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王定和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定和 | accepted |
| death.date | 909年 | accepted |
| bio.summary | 王定和（卒于909年），史料所见人物。本项目依据《中国历代人物传记资料库：王定和（CBDB 186151）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PaQ5yP1i6ggstQ3reseLJo | 王尚準 | accepted |

## 外部来源

- [中国历代人物传记资料库：王定和（CBDB 186151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186151&o=json)
