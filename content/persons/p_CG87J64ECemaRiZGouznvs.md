---
schema: wang-person/v1
id: p_CG87J64ECemaRiZGouznvs
status: active
merged_into: null
display_name: 王衍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TtPZ1UnZP2uzYFFSncEKM5
        subject_person_id: p_CG87J64ECemaRiZGouznvs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E4KfcLoYzfoi4K7VVpaCQ5
          claim_id: c_TtPZ1UnZP2uzYFFSncEKM5
          source_id: s_GQRWHwN6t3c7nhHD6AyJ4Y
          stance: supports
          locator: CBDB:164742
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（164742）
          source: &a1
            id: s_GQRWHwN6t3c7nhHD6AyJ4Y
            source_type: api_record
            title: 中国历代人物传记资料库：王衍（CBDB 164742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164742&o=json
            external_identifier: CBDB:164742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t3uBNQK8NMakQXi5CMBM3f
        subject_person_id: p_CG87J64ECemaRiZGouznvs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍，史料所见人物。本项目依据《中国历代人物传记资料库：王衍（CBDB 164742）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GTPSv0KCqWVoC9bP-ZqLle
          claim_id: c_t3uBNQK8NMakQXi5CMBM3f
          source_id: s_GQRWHwN6t3c7nhHD6AyJ4Y
          stance: supports
          locator: CBDB:164742
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

# 王衍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衍 | accepted |
| bio.summary | 王衍，史料所见人物。本项目依据《中国历代人物传记资料库：王衍（CBDB 164742）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衍（CBDB 164742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164742&o=json)
