---
schema: wang-person/v1
id: p_NKoh8r9H7Tshm4XLPGFAJu
status: active
merged_into: null
display_name: 王舒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f81ZA3LRkJH6DZXcShbk92
        subject_person_id: p_NKoh8r9H7Tshm4XLPGFAJu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hy4fiZsMh1foeUVXaeyRGH
          claim_id: c_f81ZA3LRkJH6DZXcShbk92
          source_id: s_oQDTuA3E7tfQVZfoJHopdG
          stance: supports
          locator: CBDB:467957
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467957）
          source: &a1
            id: s_oQDTuA3E7tfQVZfoJHopdG
            source_type: api_record
            title: 中国历代人物传记资料库：王舒（CBDB 467957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467957&o=json
            external_identifier: CBDB:467957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.068Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CDwva5Pd9P8aXAFyKJ5S8r
        subject_person_id: p_NKoh8r9H7Tshm4XLPGFAJu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舒，史料所见人物。本项目依据《中国历代人物传记资料库：王舒（CBDB 467957）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KTeeCbTkLS4oTaLAlGjWIx
          claim_id: c_CDwva5Pd9P8aXAFyKJ5S8r
          source_id: s_oQDTuA3E7tfQVZfoJHopdG
          stance: supports
          locator: CBDB:467957
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

# 王舒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舒 | accepted |
| bio.summary | 王舒，史料所见人物。本项目依据《中国历代人物传记资料库：王舒（CBDB 467957）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舒（CBDB 467957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467957&o=json)
