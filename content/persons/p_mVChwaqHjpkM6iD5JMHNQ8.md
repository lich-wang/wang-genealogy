---
schema: wang-person/v1
id: p_mVChwaqHjpkM6iD5JMHNQ8
status: active
merged_into: null
display_name: 王璋
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q8FeYe8vMHL2yQKUb17cnt
        subject_person_id: p_mVChwaqHjpkM6iD5JMHNQ8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FgBCqqPsiHQzH6ioVpGTWU
          claim_id: c_q8FeYe8vMHL2yQKUb17cnt
          source_id: s_nfBLhjWRCJbtrNCiq1GNC7
          stance: supports
          locator: CBDB:120347
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（120347）
          source: &a1
            id: s_nfBLhjWRCJbtrNCiq1GNC7
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 120347）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120347&o=json
            external_identifier: CBDB:120347
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nh598hEe3F7NjqJoiCWTQa
        subject_person_id: p_mVChwaqHjpkM6iD5JMHNQ8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋，史料所见人物。本项目依据《中国历代人物传记资料库：王璋（CBDB 120347）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_02PtK8Dev4D_bpL32ZW2YL
          claim_id: c_nh598hEe3F7NjqJoiCWTQa
          source_id: s_nfBLhjWRCJbtrNCiq1GNC7
          stance: supports
          locator: CBDB:120347
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_L_QZ5TcPc6bFJAurNaQumH
        subject_person_id: p_FZHK6N7NZLGKbaRxdux9zY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mVChwaqHjpkM6iD5JMHNQ8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-8PwGuiMtcxDJRmH0D0Kql
          claim_id: c_L_QZ5TcPc6bFJAurNaQumH
          source_id: s_nfBLhjWRCJbtrNCiq1GNC7
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3531, HuWenKai #253：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FZHK6N7NZLGKbaRxdux9zY
        status: active
        display_name: 王佑賢
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_CnJNkUvoocWZmjDSShtezk
        subject_person_id: p_mVChwaqHjpkM6iD5JMHNQ8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NeQhGNSxxDjAd4s7HJrHtJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tmbhGWO9vX4RsjHnNpWMyV
          claim_id: c_CnJNkUvoocWZmjDSShtezk
          source_id: s_NgBRcB8HDlwGFrfDSsfSP-
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3531, HuWenKai #253：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NgBRcB8HDlwGFrfDSsfSP-
            source_type: api_record
            title: 中国历代人物传记资料库：孫孝楨（CBDB 120352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120352&o=json
            external_identifier: CBDB:120352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NeQhGNSxxDjAd4s7HJrHtJ
        status: active
        display_name: 孫孝楨
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璋 | accepted |
| bio.summary | 王璋，史料所见人物。本项目依据《中国历代人物传记资料库：王璋（CBDB 120347）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FZHK6N7NZLGKbaRxdux9zY | 王佑賢 | accepted |
| spouses | p_NeQhGNSxxDjAd4s7HJrHtJ | 孫孝楨 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫孝楨（CBDB 120352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120352&o=json)
- [中国历代人物传记资料库：王璋（CBDB 120347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120347&o=json)
