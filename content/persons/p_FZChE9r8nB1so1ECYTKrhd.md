---
schema: wang-person/v1
id: p_FZChE9r8nB1so1ECYTKrhd
status: active
merged_into: null
display_name: 王覽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kAn2c4X5tW58m9zHwHUcNg
        subject_person_id: p_FZChE9r8nB1so1ECYTKrhd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王覽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c3yPJta8nk8PkuDRw4A5SM
          claim_id: c_kAn2c4X5tW58m9zHwHUcNg
          source_id: s_6Ae2d8ejweTRArekCwF7dy
          stance: supports
          locator: CBDB:165104
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（165104）
          source: &a1
            id: s_6Ae2d8ejweTRArekCwF7dy
            source_type: api_record
            title: 中国历代人物传记资料库：王覽（CBDB 165104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165104&o=json
            external_identifier: CBDB:165104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3JZEyVdf4nA1B5uZ3xRaoH
        subject_person_id: p_FZChE9r8nB1so1ECYTKrhd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王覽，史料所见人物。本项目依据《中国历代人物传记资料库：王覽（CBDB 165104）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IzTi4l7ZK9xgAzjh3lNj_a
          claim_id: c_3JZEyVdf4nA1B5uZ3xRaoH
          source_id: s_6Ae2d8ejweTRArekCwF7dy
          stance: supports
          locator: CBDB:165104
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_CvcXO2V94N64BlOON7Ruyt
        subject_person_id: p_FZChE9r8nB1so1ECYTKrhd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tS3aqzmoihV8cYa7pNW3Dz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8h5hrXkXv4eiIYoNF9qRjP
          claim_id: c_CvcXO2V94N64BlOON7Ruyt
          source_id: s_6Ae2d8ejweTRArekCwF7dy
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Baoying3：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tS3aqzmoihV8cYa7pNW3Dz
        status: active
        display_name: 王徽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王覽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王覽 | accepted |
| bio.summary | 王覽，史料所见人物。本项目依据《中国历代人物传记资料库：王覽（CBDB 165104）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tS3aqzmoihV8cYa7pNW3Dz | 王徽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王覽（CBDB 165104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165104&o=json)
