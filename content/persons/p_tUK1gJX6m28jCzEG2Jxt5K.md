---
schema: wang-person/v1
id: p_tUK1gJX6m28jCzEG2Jxt5K
status: active
merged_into: null
display_name: 王方壽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9A26yvR4vBwXHBj9AQipbB
        subject_person_id: p_tUK1gJX6m28jCzEG2Jxt5K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LcKYhQvtiGeYVNM3CKvZpZ
          claim_id: c_9A26yvR4vBwXHBj9AQipbB
          source_id: s_ZFRNSGvAu8zQbSmhZNW5wT
          stance: supports
          locator: CBDB:175661
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175661）
          source: &a1
            id: s_ZFRNSGvAu8zQbSmhZNW5wT
            source_type: api_record
            title: 中国历代人物传记资料库：王方壽（CBDB 175661）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175661&o=json
            external_identifier: CBDB:175661
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.242Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Twyy5KrNgmLKNK76HdbBF7
        subject_person_id: p_tUK1gJX6m28jCzEG2Jxt5K
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 625年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4xDCUkVRKwFPgcSxeAmZx1
          claim_id: c_Twyy5KrNgmLKNK76HdbBF7
          source_id: s_ZFRNSGvAu8zQbSmhZNW5wT
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
        id: c_HekKxHJwRyKvZM6NiLzc58
        subject_person_id: p_tUK1gJX6m28jCzEG2Jxt5K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方壽（卒于625年），史料所见人物。本项目依据《中国历代人物传记资料库：王方壽（CBDB 175661）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yAfk4CD-U_r9JErGFv36Ad
          claim_id: c_HekKxHJwRyKvZM6NiLzc58
          source_id: s_ZFRNSGvAu8zQbSmhZNW5wT
          stance: supports
          locator: CBDB:175661
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ShCG4QcStiAAoUXyuIThFy
        subject_person_id: p_cGxjGC96W1m7oTzFPZX3UA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tUK1gJX6m28jCzEG2Jxt5K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d0jQXMy3ZONWEuNWbCqHqz
          claim_id: c_ShCG4QcStiAAoUXyuIThFy
          source_id: s_E4GkT6Rcg7GLLKNk7eHRuA
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E4GkT6Rcg7GLLKNk7eHRuA
            source_type: api_record
            title: 中国历代人物传记资料库：王弘藝（CBDB 175660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175660&o=json
            external_identifier: CBDB:175660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.242Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cGxjGC96W1m7oTzFPZX3UA
        status: active
        display_name: 王弘藝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王方壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王方壽 | accepted |
| death.date | 625年 | accepted |
| bio.summary | 王方壽（卒于625年），史料所见人物。本项目依据《中国历代人物传记资料库：王方壽（CBDB 175661）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cGxjGC96W1m7oTzFPZX3UA | 王弘藝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王方壽（CBDB 175661）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175661&o=json)
- [中国历代人物传记资料库：王弘藝（CBDB 175660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175660&o=json)
