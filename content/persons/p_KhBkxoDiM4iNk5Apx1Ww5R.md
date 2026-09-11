---
schema: wang-person/v1
id: p_KhBkxoDiM4iNk5Apx1Ww5R
status: active
merged_into: null
display_name: 王行本
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A5z2qFWcssgSAJ5KnKPqUn
        subject_person_id: p_KhBkxoDiM4iNk5Apx1Ww5R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iwp2Y2qJmMhVq2FM28S8ph
          claim_id: c_A5z2qFWcssgSAJ5KnKPqUn
          source_id: s_RuuTcFfh7TT9vbGFZkUyQ9
          stance: supports
          locator: CBDB:190061
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190061）
          source: &a1
            id: s_RuuTcFfh7TT9vbGFZkUyQ9
            source_type: api_record
            title: 中国历代人物传记资料库：王行本（CBDB 190061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190061&o=json
            external_identifier: CBDB:190061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4cXoZ2Yw5JnAdnyiNt7LSy
        subject_person_id: p_KhBkxoDiM4iNk5Apx1Ww5R
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 850年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2UynZoi1dXuuRoSptHrsAx
          claim_id: c_4cXoZ2Yw5JnAdnyiNt7LSy
          source_id: s_RuuTcFfh7TT9vbGFZkUyQ9
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
        id: c_DZoERPvNpdWAQM8QrrFoKi
        subject_person_id: p_KhBkxoDiM4iNk5Apx1Ww5R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行本（卒于850年），史料所见人物。本项目依据《中国历代人物传记资料库：王行本（CBDB 190061）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r8gkZ4ebjogwIs8zOYmjo_
          claim_id: c_DZoERPvNpdWAQM8QrrFoKi
          source_id: s_RuuTcFfh7TT9vbGFZkUyQ9
          stance: supports
          locator: CBDB:190061
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

# 王行本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王行本 | accepted |
| death.date | 850年 | accepted |
| bio.summary | 王行本（卒于850年），史料所见人物。本项目依据《中国历代人物传记资料库：王行本（CBDB 190061）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王行本（CBDB 190061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190061&o=json)
