---
schema: wang-person/v1
id: p_jJpSp75MVxBxr7MACduWs3
status: active
merged_into: null
display_name: 王恪亭
cbdb_id: 526829
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4FBsgFLuyMnamkhG5zkXGV
        subject_person_id: p_jJpSp75MVxBxr7MACduWs3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恪亭，史料所见人物。本项目依据《中国历代人物传记资料库：王恪亭（CBDB 526829）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_8FU66hFUVRxex9zWSkiMZz
          claim_id: c_4FBsgFLuyMnamkhG5zkXGV
          source_id: s_e3JaVkFqM92nKTamdUe2ma
          stance: supports
          locator: CBDB:526829
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_e3JaVkFqM92nKTamdUe2ma
            source_type: api_record
            title: 中国历代人物传记资料库：王恪亭（CBDB 526829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526829&o=json
            external_identifier: CBDB:526829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ikG63yHVkaY7b4iB15QioE
        subject_person_id: p_jJpSp75MVxBxr7MACduWs3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恪亭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YZeGTiNeMm6gh2pFagcFcG
          claim_id: c_ikG63yHVkaY7b4iB15QioE
          source_id: s_e3JaVkFqM92nKTamdUe2ma
          stance: supports
          locator: CBDB:526829
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
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
  other:
    - claim:
        id: c_bNYTQ4gn6liqiv3lKum2HX
        subject_person_id: p_jJpSp75MVxBxr7MACduWs3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pEdGRSnHAWXvL7ekoq9irm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q_yp-qhJ8qp67N3esPy5As
          claim_id: c_bNYTQ4gn6liqiv3lKum2HX
          source_id: s_Gbjg0MeRwABIcbdyNxiQ4A
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 69290 王家賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Gbjg0MeRwABIcbdyNxiQ4A
            source_type: api_record
            title: 中国历代人物传记资料库：王恪亭（CBDB 526829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526829&o=json
            external_identifier: CBDB:526829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pEdGRSnHAWXvL7ekoq9irm
        status: active
        display_name: 王家賓
        merged_into_person_id: null
---

# 王恪亭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恪亭，史料所见人物。本项目依据《中国历代人物传记资料库：王恪亭（CBDB 526829）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王恪亭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_pEdGRSnHAWXvL7ekoq9irm | 王家賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恪亭（CBDB 526829）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526829&o=json)
