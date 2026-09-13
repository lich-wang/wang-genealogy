---
schema: wang-person/v1
id: p_Kjn91LWBHkruHxJ6AhTUwd
status: active
merged_into: null
display_name: 王無虧
cbdb_id: 150704
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PVTJVdC7nUxo9Xmt6yRisD
        subject_person_id: p_Kjn91LWBHkruHxJ6AhTUwd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王無虧，史料所见人物。本项目依据《中国历代人物传记资料库：王無虧（CBDB 150704）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs__3Dxyj-dYqT85K2aDlV3EQ
          claim_id: c_PVTJVdC7nUxo9Xmt6yRisD
          source_id: s_H5Mv1TKMiuru1Y5C8ziT6v
          stance: supports
          locator: CBDB:150704
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_H5Mv1TKMiuru1Y5C8ziT6v
            source_type: api_record
            title: 中国历代人物传记资料库：王無虧（CBDB 150704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150704&o=json
            external_identifier: CBDB:150704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6W98K3PLgwQNT8U4AMgC3B
        subject_person_id: p_Kjn91LWBHkruHxJ6AhTUwd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王無虧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yZDvAVSpKwB9zjdx3uxmYm
          claim_id: c_6W98K3PLgwQNT8U4AMgC3B
          source_id: s_H5Mv1TKMiuru1Y5C8ziT6v
          stance: supports
          locator: CBDB:150704
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RKSDOp4FZOmwHIm3rB5kb7
        subject_person_id: p_bewqQm7i6ZaUyZ1bMYLsJi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Kjn91LWBHkruHxJ6AhTUwd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_73F9R2EY6OgC6fK7JW_euq
          claim_id: c_RKSDOp4FZOmwHIm3rB5kb7
          source_id: s_ho952LSp6FCu3XPRScF388
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 5：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ho952LSp6FCu3XPRScF388
            source_type: api_record
            title: 中国历代人物传记资料库：王素臣（CBDB 140232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140232&o=json
            external_identifier: CBDB:140232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bewqQm7i6ZaUyZ1bMYLsJi
        status: active
        display_name: 王素臣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王無虧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王無虧，史料所见人物。本项目依据《中国历代人物传记资料库：王無虧（CBDB 150704）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王無虧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bewqQm7i6ZaUyZ1bMYLsJi | 王素臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王素臣（CBDB 140232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140232&o=json)
- [中国历代人物传记资料库：王無虧（CBDB 150704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150704&o=json)
