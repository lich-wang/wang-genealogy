---
schema: wang-person/v1
id: p_b6cEZCHEKf1k8G6ycHLc5i
status: active
merged_into: null
display_name: 王友遇
cbdb_id: 379499
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_86j9DyV18uUCyyT4yBj5cx
        subject_person_id: p_b6cEZCHEKf1k8G6ycHLc5i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友遇，史料所见人物。本项目依据《中国历代人物传记资料库：王友遇（CBDB 379499）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_v3o17JE5ehvBLIo1KfdtBL
          claim_id: c_86j9DyV18uUCyyT4yBj5cx
          source_id: s_cmGphMLLHYTLRNq2mUY67v
          stance: supports
          locator: CBDB:379499
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_cmGphMLLHYTLRNq2mUY67v
            source_type: api_record
            title: 中国历代人物传记资料库：王友遇（CBDB 379499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379499&o=json
            external_identifier: CBDB:379499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:19.877Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VDQRtNNVFTawe1zmvQ1XaK
        subject_person_id: p_b6cEZCHEKf1k8G6ycHLc5i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友遇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hK5iECG6QsENXEt23CuB5h
          claim_id: c_VDQRtNNVFTawe1zmvQ1XaK
          source_id: s_cmGphMLLHYTLRNq2mUY67v
          stance: supports
          locator: CBDB:379499
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4701-4800）｜历史性依据：CBDB 朝代 = 唐
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

# 王友遇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王友遇，史料所见人物。本项目依据《中国历代人物传记资料库：王友遇（CBDB 379499）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王友遇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王友遇（CBDB 379499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379499&o=json)
