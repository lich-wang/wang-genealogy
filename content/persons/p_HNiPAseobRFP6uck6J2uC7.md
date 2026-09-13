---
schema: wang-person/v1
id: p_HNiPAseobRFP6uck6J2uC7
status: active
merged_into: null
display_name: 王蓉生
cbdb_id: 121137
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yHySfnqK8o58XyLimMTcjL
        subject_person_id: p_HNiPAseobRFP6uck6J2uC7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蓉生，史料所见人物。本项目依据《中国历代人物传记资料库：王蓉生（CBDB 121137）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Ncw5CXPCQwqUe7jw6BFTc8
          claim_id: c_yHySfnqK8o58XyLimMTcjL
          source_id: s_y2U4KapEGctjyEsppq2e2r
          stance: supports
          locator: CBDB:121137
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_y2U4KapEGctjyEsppq2e2r
            source_type: api_record
            title: 中国历代人物传记资料库：王蓉生（CBDB 121137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121137&o=json
            external_identifier: CBDB:121137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uHmKh1y2svQePDFrXBuz3D
        subject_person_id: p_HNiPAseobRFP6uck6J2uC7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蓉生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5ibJVpDQB1KJtXEW6LLvQk
          claim_id: c_uHmKh1y2svQePDFrXBuz3D
          source_id: s_y2U4KapEGctjyEsppq2e2r
          stance: supports
          locator: CBDB:121137
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_JvZDZg1oes_M9MfnlnEwfi
        subject_person_id: p_HNiPAseobRFP6uck6J2uC7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gCeXnQJfBcmcUVqZ7mTfbK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tA7kPH4N1tgF2MWZZX8fVw
          claim_id: c_JvZDZg1oes_M9MfnlnEwfi
          source_id: s_beQVfA97TfFA3ooIkLomku
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4006, HuWenKai #458：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_beQVfA97TfFA3ooIkLomku
            source_type: api_record
            title: 中国历代人物传记资料库：夏菊初（CBDB 121124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121124&o=json
            external_identifier: CBDB:121124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gCeXnQJfBcmcUVqZ7mTfbK
        status: active
        display_name: 夏菊初
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王蓉生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王蓉生，史料所见人物。本项目依据《中国历代人物传记资料库：王蓉生（CBDB 121137）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王蓉生 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_gCeXnQJfBcmcUVqZ7mTfbK | 夏菊初 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蓉生（CBDB 121137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121137&o=json)
- [中国历代人物传记资料库：夏菊初（CBDB 121124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121124&o=json)
