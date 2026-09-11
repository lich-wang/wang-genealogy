---
schema: wang-person/v1
id: p_o8FfNYMMNHqCFLrz829XzN
status: active
merged_into: null
display_name: 王籍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d7vgHeVAYmPxDRu33krTPU
        subject_person_id: p_o8FfNYMMNHqCFLrz829XzN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王籍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qtiMcFJ4NsVuarkNnBDyr7
          claim_id: c_d7vgHeVAYmPxDRu33krTPU
          source_id: s_4RiahvBsoNNKNuQFULeerr
          stance: supports
          locator: CBDB:415221
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（415221）
          source: &a1
            id: s_4RiahvBsoNNKNuQFULeerr
            source_type: api_record
            title: 中国历代人物传记资料库：王籍（CBDB 415221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415221&o=json
            external_identifier: CBDB:415221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.996Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vEiEpdaj3Dp8F77j7MKcHP
        subject_person_id: p_o8FfNYMMNHqCFLrz829XzN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王籍，史料所见人物。本项目依据《中国历代人物传记资料库：王籍（CBDB 415221）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_escBhEhrNibwtQ8eVMQiXV
          claim_id: c_vEiEpdaj3Dp8F77j7MKcHP
          source_id: s_4RiahvBsoNNKNuQFULeerr
          stance: supports
          locator: CBDB:415221
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

# 王籍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王籍 | accepted |
| bio.summary | 王籍，史料所见人物。本项目依据《中国历代人物传记资料库：王籍（CBDB 415221）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王籍（CBDB 415221）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415221&o=json)
