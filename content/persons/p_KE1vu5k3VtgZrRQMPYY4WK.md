---
schema: wang-person/v1
id: p_KE1vu5k3VtgZrRQMPYY4WK
status: active
merged_into: null
display_name: 王予彤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qnHWXJEjUrqA647gydG4B1
        subject_person_id: p_KE1vu5k3VtgZrRQMPYY4WK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王予彤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WFX5aU6rPmUpZtsfJ5hi5m
          claim_id: c_qnHWXJEjUrqA647gydG4B1
          source_id: s_yKpJiRKQAbkfq68jJj4j6K
          stance: supports
          locator: CBDB:526921
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526921）
          source: &a1
            id: s_yKpJiRKQAbkfq68jJj4j6K
            source_type: api_record
            title: 中国历代人物传记资料库：王予彤（CBDB 526921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526921&o=json
            external_identifier: CBDB:526921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.302Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BqCqmXCobgpRbK4ZjE8UL7
        subject_person_id: p_KE1vu5k3VtgZrRQMPYY4WK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王予彤，史料所见人物。本项目依据《中国历代人物传记资料库：王予彤（CBDB 526921）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jPUDrssB2CrOSh5esyiCT1
          claim_id: c_BqCqmXCobgpRbK4ZjE8UL7
          source_id: s_yKpJiRKQAbkfq68jJj4j6K
          stance: supports
          locator: CBDB:526921
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T9q60H0OyJNg2TP1vE4D5R
        subject_person_id: p_DHYbJsS7LE12BDd6qGrWUt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KE1vu5k3VtgZrRQMPYY4WK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oOfeL2UhaEB00zucj6mtFZ
          claim_id: c_T9q60H0OyJNg2TP1vE4D5R
          source_id: s_yKpJiRKQAbkfq68jJj4j6K
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13096：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DHYbJsS7LE12BDd6qGrWUt
        status: active
        display_name: 王蒔蘭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王予彤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王予彤 | accepted |
| bio.summary | 王予彤，史料所见人物。本项目依据《中国历代人物传记资料库：王予彤（CBDB 526921）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DHYbJsS7LE12BDd6qGrWUt | 王蒔蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王予彤（CBDB 526921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526921&o=json)
