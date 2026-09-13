---
schema: wang-person/v1
id: p_6jHSeBLmTJFKAdLmgdoTBB
status: active
merged_into: null
display_name: 王行表
cbdb_id: 148570
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t8ip4993VyiEEAMgr4Y8WR
        subject_person_id: p_6jHSeBLmTJFKAdLmgdoTBB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行表，史料所见人物。本项目依据《中国历代人物传记资料库：王行表（CBDB 148570）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_SlFis7nteNT6JM4NW3eas6
          claim_id: c_t8ip4993VyiEEAMgr4Y8WR
          source_id: s_AS3nHuTpgsRaKPUE72MxfN
          stance: supports
          locator: CBDB:148570
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_AS3nHuTpgsRaKPUE72MxfN
            source_type: api_record
            title: 中国历代人物传记资料库：王行表（CBDB 148570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148570&o=json
            external_identifier: CBDB:148570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Brgn2ucYVKbpU472samQYL
        subject_person_id: p_6jHSeBLmTJFKAdLmgdoTBB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行表
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9jAjzKoVPqMHM891HWYmPh
          claim_id: c_Brgn2ucYVKbpU472samQYL
          source_id: s_AS3nHuTpgsRaKPUE72MxfN
          stance: supports
          locator: CBDB:148570
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_y7c77QSEIS8hL0JzMVMiUm
        subject_person_id: p_Ry9y14hNJySmUBWw9QaGgB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6jHSeBLmTJFKAdLmgdoTBB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_McPybCwH04ALqarJ38DH0o
          claim_id: c_y7c77QSEIS8hL0JzMVMiUm
          source_id: s_ecjSPPmUZed9C1r86B6Q55
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 53：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ecjSPPmUZed9C1r86B6Q55
            source_type: api_record
            title: 中国历代人物传记资料库：王逸（CBDB 139632）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139632&o=json
            external_identifier: CBDB:139632
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.431Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Ry9y14hNJySmUBWw9QaGgB
        status: active
        display_name: 王逸
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王行表

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王行表，史料所见人物。本项目依据《中国历代人物传记资料库：王行表（CBDB 148570）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王行表 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_Ry9y14hNJySmUBWw9QaGgB | 王逸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王行表（CBDB 148570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148570&o=json)
- [中国历代人物传记资料库：王逸（CBDB 139632）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139632&o=json)
