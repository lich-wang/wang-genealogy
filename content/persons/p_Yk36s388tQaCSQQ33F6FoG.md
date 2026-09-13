---
schema: wang-person/v1
id: p_Yk36s388tQaCSQQ33F6FoG
status: active
merged_into: null
display_name: 王景榮
cbdb_id: 414802
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xaZxnGo9Usi3vUrCKPypqU
        subject_person_id: p_Yk36s388tQaCSQQ33F6FoG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景榮，史料所见人物。本项目依据《中国历代人物传记资料库：王景榮（CBDB 414802）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_m6nOo015nfBHz1xyLg7hbo
          claim_id: c_xaZxnGo9Usi3vUrCKPypqU
          source_id: s_Nz7fuQm2awfx6HqcvANS86
          stance: supports
          locator: CBDB:414802
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Nz7fuQm2awfx6HqcvANS86
            source_type: api_record
            title: 中国历代人物传记资料库：王景榮（CBDB 414802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414802&o=json
            external_identifier: CBDB:414802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:40.762Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TDVKZjKGv2QYi8S4W6cdo7
        subject_person_id: p_Yk36s388tQaCSQQ33F6FoG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PhuJhx2GBKVHGNZFc6Z1ij
          claim_id: c_TDVKZjKGv2QYi8S4W6cdo7
          source_id: s_Nz7fuQm2awfx6HqcvANS86
          stance: supports
          locator: CBDB:414802
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5801-5900）｜历史性依据：CBDB 朝代 = 明
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

# 王景榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景榮，史料所见人物。本项目依据《中国历代人物传记资料库：王景榮（CBDB 414802）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王景榮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景榮（CBDB 414802）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414802&o=json)
