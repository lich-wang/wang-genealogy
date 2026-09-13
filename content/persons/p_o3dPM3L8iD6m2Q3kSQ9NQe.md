---
schema: wang-person/v1
id: p_o3dPM3L8iD6m2Q3kSQ9NQe
status: active
merged_into: null
display_name: 王庸之
cbdb_id: 414437
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oCRtwXsKXNJXcPV9GCppGQ
        subject_person_id: p_o3dPM3L8iD6m2Q3kSQ9NQe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庸之，史料所见人物。本项目依据《中国历代人物传记资料库：王庸之（CBDB 414437）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_lcyfjHlTIolp56NrbXa3NJ
          claim_id: c_oCRtwXsKXNJXcPV9GCppGQ
          source_id: s_ZpXsoPABfgwNT4CDK8CgsD
          stance: supports
          locator: CBDB:414437
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ZpXsoPABfgwNT4CDK8CgsD
            source_type: api_record
            title: 中国历代人物传记资料库：王庸之（CBDB 414437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414437&o=json
            external_identifier: CBDB:414437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:34.838Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NdCTkwSiYZS1y8mmqBE1Bm
        subject_person_id: p_o3dPM3L8iD6m2Q3kSQ9NQe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庸之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PN4b1Kic2rLsuo3W8odgfr
          claim_id: c_NdCTkwSiYZS1y8mmqBE1Bm
          source_id: s_ZpXsoPABfgwNT4CDK8CgsD
          stance: supports
          locator: CBDB:414437
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5501-5600）｜历史性依据：CBDB 朝代 = 宋
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

# 王庸之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王庸之，史料所见人物。本项目依据《中国历代人物传记资料库：王庸之（CBDB 414437）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王庸之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庸之（CBDB 414437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414437&o=json)
