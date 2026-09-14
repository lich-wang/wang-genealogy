---
schema: wang-person/v1
id: p_VgDUNqR84btxsvHJHuwqom
status: active
merged_into: null
display_name: 王應微
cbdb_id: 338256
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZWaBB4vi1G5tzmXwdFko7E
        subject_person_id: p_VgDUNqR84btxsvHJHuwqom
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應微，史料所见人物。本项目依据《中国历代人物传记资料库：王應微（CBDB 338256）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_-m8bWDEMyusQsK0GxPNeWb
          claim_id: c_ZWaBB4vi1G5tzmXwdFko7E
          source_id: s_wULbrL2b5XcktPtPZMEx5K
          stance: supports
          locator: CBDB:338256
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_wULbrL2b5XcktPtPZMEx5K
            source_type: api_record
            title: 中国历代人物传记资料库：王應微（CBDB 338256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338256&o=json
            external_identifier: CBDB:338256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7so615NhJ5ZKfyFotGHiHc
        subject_person_id: p_VgDUNqR84btxsvHJHuwqom
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應微
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dhCbrUvU3N83E1DDWfDZvU
          claim_id: c_7so615NhJ5ZKfyFotGHiHc
          source_id: s_wULbrL2b5XcktPtPZMEx5K
          stance: supports
          locator: CBDB:338256
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
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
        id: c_CTTBDxkIFPQGSDwHiI_VkN
        subject_person_id: p_4ufaARqU5k2BeNPiVBHGjJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VgDUNqR84btxsvHJHuwqom
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QeT3cB2Ol-nF1-9IsjMFT9
          claim_id: c_CTTBDxkIFPQGSDwHiI_VkN
          source_id: s_EDwX__md2i2SpsNX_2dONg
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 338256 王應微）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EDwX__md2i2SpsNX_2dONg
            source_type: api_record
            title: 中国历代人物传记资料库：王應徵（CBDB 338255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338255&o=json
            external_identifier: CBDB:338255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4ufaARqU5k2BeNPiVBHGjJ
        status: active
        display_name: 王應徵
        merged_into_person_id: null
    - claim:
        id: c_QOGhebODIaBhNftHl3iJ90
        subject_person_id: p_VgDUNqR84btxsvHJHuwqom
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pVr2YmvW2g7u44dWJVuytr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__BZaB0J3NDPpiR-MyCmVSC
          claim_id: c_QOGhebODIaBhNftHl3iJ90
          source_id: s_RwB_3BYoxGQa_x2HvEvjw-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 338256 王應微）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RwB_3BYoxGQa_x2HvEvjw-
            source_type: api_record
            title: 中国历代人物传记资料库：王應行（CBDB 338257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338257&o=json
            external_identifier: CBDB:338257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pVr2YmvW2g7u44dWJVuytr
        status: active
        display_name: 王應行
        merged_into_person_id: null
---

# 王應微

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應微，史料所见人物。本项目依据《中国历代人物传记资料库：王應微（CBDB 338256）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王應微 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_4ufaARqU5k2BeNPiVBHGjJ | 王應徵 | accepted |
| other | p_pVr2YmvW2g7u44dWJVuytr | 王應行 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應微（CBDB 338256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338256&o=json)
- [中国历代人物传记资料库：王應行（CBDB 338257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338257&o=json)
- [中国历代人物传记资料库：王應徵（CBDB 338255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338255&o=json)
