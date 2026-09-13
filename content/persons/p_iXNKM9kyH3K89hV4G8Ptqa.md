---
schema: wang-person/v1
id: p_iXNKM9kyH3K89hV4G8Ptqa
status: active
merged_into: null
display_name: 王彥翔
cbdb_id: 283519
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aEdSPg5dsyFvcKSAnRAPGP
        subject_person_id: p_iXNKM9kyH3K89hV4G8Ptqa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥翔，史料所见人物。本项目依据《中国历代人物传记资料库：王彥翔（CBDB 283519）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_QCkQ9im88EhpRl3n4ZPN4o
          claim_id: c_aEdSPg5dsyFvcKSAnRAPGP
          source_id: s_miNioDSaFXrMPkyKfnDfEP
          stance: supports
          locator: CBDB:283519
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_miNioDSaFXrMPkyKfnDfEP
            source_type: api_record
            title: 中国历代人物传记资料库：王彥翔（CBDB 283519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283519&o=json
            external_identifier: CBDB:283519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3GKEmKQ9SQ4oqT31RLRFh5
        subject_person_id: p_iXNKM9kyH3K89hV4G8Ptqa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥翔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7DgAFUdPdiFG4tvLUjHfWH
          claim_id: c_3GKEmKQ9SQ4oqT31RLRFh5
          source_id: s_miNioDSaFXrMPkyKfnDfEP
          stance: supports
          locator: CBDB:283519
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
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
        id: c_PZNxxUcKHheELIJm0u8jze
        subject_person_id: p_iXNKM9kyH3K89hV4G8Ptqa
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K9X8MFEsDPy-XyYprd8TT6
          claim_id: c_PZNxxUcKHheELIJm0u8jze
          source_id: s_oYEu5Xwri3kM83JFCb6pJB
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第四十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oYEu5Xwri3kM83JFCb6pJB
            source_type: api_record
            title: 中国历代人物传记资料库：王煒（CBDB 202099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202099&o=json
            external_identifier: CBDB:202099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.719Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9cPpJFUi1d46tFMj2MGDrb
        status: active
        display_name: 王煒
        merged_into_person_id: null
  other: []
---

# 王彥翔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彥翔，史料所见人物。本项目依据《中国历代人物传记资料库：王彥翔（CBDB 283519）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王彥翔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_9cPpJFUi1d46tFMj2MGDrb | 王煒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王煒（CBDB 202099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202099&o=json)
- [中国历代人物传记资料库：王彥翔（CBDB 283519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283519&o=json)
