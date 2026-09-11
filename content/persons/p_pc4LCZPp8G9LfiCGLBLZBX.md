---
schema: wang-person/v1
id: p_pc4LCZPp8G9LfiCGLBLZBX
status: active
merged_into: null
display_name: 王德成
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3k6gAu7mGteGPENkSLo3dU
        subject_person_id: p_pc4LCZPp8G9LfiCGLBLZBX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WrE53aixgFNL52sYFCtK8E
          claim_id: c_3k6gAu7mGteGPENkSLo3dU
          source_id: s_4todbyzG5q5AkB18diWaKZ
          stance: supports
          locator: CBDB:240076
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240076）
          source: &a1
            id: s_4todbyzG5q5AkB18diWaKZ
            source_type: api_record
            title: 中国历代人物传记资料库：王德成（CBDB 240076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240076&o=json
            external_identifier: CBDB:240076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.908Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uSeHwC35McDJEU1s3Ne96K
        subject_person_id: p_pc4LCZPp8G9LfiCGLBLZBX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德成，明人物。正统十年進士。（中国历代人物传记资料库 CBDB 240076）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3ZbvNNid250LqpJZB0q4dQ
          claim_id: c_uSeHwC35McDJEU1s3Ne96K
          source_id: s_4todbyzG5q5AkB18diWaKZ
          stance: supports
          locator: CBDB:240076
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
  descendants:
    - claim:
        id: c_Bxtbt1LKv1D1JdFIbpMCWz
        subject_person_id: p_pc4LCZPp8G9LfiCGLBLZBX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GGoCNoVNHxmsGgT4y3whCN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f9fkGwC7qEo028fIVFUjYd
          claim_id: c_Bxtbt1LKv1D1JdFIbpMCWz
          source_id: s_4todbyzG5q5AkB18diWaKZ
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第八十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GGoCNoVNHxmsGgT4y3whCN
        status: active
        display_name: 王瓖
        merged_into_person_id: null
  other: []
---

# 王德成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德成 | accepted |
| bio.summary | 王德成，明人物。正统十年進士。（中国历代人物传记资料库 CBDB 240076） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_GGoCNoVNHxmsGgT4y3whCN | 王瓖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德成（CBDB 240076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240076&o=json)
