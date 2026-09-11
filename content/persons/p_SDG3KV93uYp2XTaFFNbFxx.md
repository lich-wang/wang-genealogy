---
schema: wang-person/v1
id: p_SDG3KV93uYp2XTaFFNbFxx
status: active
merged_into: null
display_name: 王文政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5ngc6rjvNBLFXANWVufM7b
        subject_person_id: p_SDG3KV93uYp2XTaFFNbFxx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KKmL9gnsYaNMhqYdf8ETjC
          claim_id: c_5ngc6rjvNBLFXANWVufM7b
          source_id: s_5397e65C9VXFquGZ1h78wZ
          stance: supports
          locator: CBDB:186203
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186203）
          source: &a1
            id: s_5397e65C9VXFquGZ1h78wZ
            source_type: api_record
            title: 中国历代人物传记资料库：王文政（CBDB 186203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186203&o=json
            external_identifier: CBDB:186203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EPMT9myPFocLsVYYXT9T31
        subject_person_id: p_SDG3KV93uYp2XTaFFNbFxx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 891年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2ea94Ft5BoN7fh5htFCo4c
          claim_id: c_EPMT9myPFocLsVYYXT9T31
          source_id: s_5397e65C9VXFquGZ1h78wZ
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
        id: c_5F9Ek2vPfySKhax96dnaJx
        subject_person_id: p_SDG3KV93uYp2XTaFFNbFxx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文政（卒于891年），史料所见人物。本项目依据《中国历代人物传记资料库：王文政（CBDB 186203）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_umuspRvpEU07eF7Z7BPPsl
          claim_id: c_5F9Ek2vPfySKhax96dnaJx
          source_id: s_5397e65C9VXFquGZ1h78wZ
          stance: supports
          locator: CBDB:186203
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文政 | accepted |
| death.date | 891年 | accepted |
| bio.summary | 王文政（卒于891年），史料所见人物。本项目依据《中国历代人物传记资料库：王文政（CBDB 186203）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文政（CBDB 186203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186203&o=json)
