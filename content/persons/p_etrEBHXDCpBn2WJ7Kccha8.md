---
schema: wang-person/v1
id: p_etrEBHXDCpBn2WJ7Kccha8
status: active
merged_into: null
display_name: 王肇護
cbdb_id: 289990
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZhrfC2qEMufacozMvcQ8Wa
        subject_person_id: p_etrEBHXDCpBn2WJ7Kccha8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇護，史料所见人物。本项目依据《中国历代人物传记资料库：王肇護（CBDB 289990）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_EST8-92TY6XNR2Da__2J0M
          claim_id: c_ZhrfC2qEMufacozMvcQ8Wa
          source_id: s_ubKBZBdeheGMDejyMhBDgV
          stance: supports
          locator: CBDB:289990
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ubKBZBdeheGMDejyMhBDgV
            source_type: api_record
            title: 中国历代人物传记资料库：王肇護（CBDB 289990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289990&o=json
            external_identifier: CBDB:289990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4NHSXN2FeLA44nPe72MXwP
        subject_person_id: p_etrEBHXDCpBn2WJ7Kccha8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇護
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9pvVpJC7xKZp5AEzDMJmxc
          claim_id: c_4NHSXN2FeLA44nPe72MXwP
          source_id: s_ubKBZBdeheGMDejyMhBDgV
          stance: supports
          locator: CBDB:289990
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_GWWmy23zKV0ZZKEJgN49XV
        subject_person_id: p_etrEBHXDCpBn2WJ7Kccha8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5Nsm7LtaHH2TfQdw6zv4Pu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8bpM8LNcemOXor-Xe-Ncef
          claim_id: c_GWWmy23zKV0ZZKEJgN49XV
          source_id: s_4P9sB4w6wzqeoekXVGxMGt
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百五十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4P9sB4w6wzqeoekXVGxMGt
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 126684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126684&o=json
            external_identifier: CBDB:126684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.121Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5Nsm7LtaHH2TfQdw6zv4Pu
        status: active
        display_name: 王崇
        merged_into_person_id: null
  other: []
---

# 王肇護

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王肇護，史料所见人物。本项目依据《中国历代人物传记资料库：王肇護（CBDB 289990）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王肇護 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_5Nsm7LtaHH2TfQdw6zv4Pu | 王崇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇（CBDB 126684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126684&o=json)
- [中国历代人物传记资料库：王肇護（CBDB 289990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289990&o=json)
