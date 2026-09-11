---
schema: wang-person/v1
id: p_NXEsz679fPSajv4LUs1Hxi
status: active
merged_into: null
display_name: 王恩慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2mxEyP4JFzLmujf3eKw55K
        subject_person_id: p_NXEsz679fPSajv4LUs1Hxi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1hKBYavddXL4JHA7BPootd
          claim_id: c_2mxEyP4JFzLmujf3eKw55K
          source_id: s_bf5gs4y49GQN84mF96aG98
          stance: supports
          locator: CBDB:637835
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637835）
          source: &a1
            id: s_bf5gs4y49GQN84mF96aG98
            source_type: api_record
            title: 中国历代人物传记资料库：王恩慶（CBDB 637835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637835&o=json
            external_identifier: CBDB:637835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.529Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nbiKWVz1gPqV2KB16Y1yxD
        subject_person_id: p_NXEsz679fPSajv4LUs1Hxi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩慶，清人物。籍贯永嘉，曾任主事。（中国历代人物传记资料库 CBDB 637835）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-ZAdD4WmpxbfCWdKHU31Ps
          claim_id: c_nbiKWVz1gPqV2KB16Y1yxD
          source_id: s_bf5gs4y49GQN84mF96aG98
          stance: supports
          locator: CBDB:637835
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王恩慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩慶 | accepted |
| bio.summary | 王恩慶，清人物。籍贯永嘉，曾任主事。（中国历代人物传记资料库 CBDB 637835） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恩慶（CBDB 637835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637835&o=json)
