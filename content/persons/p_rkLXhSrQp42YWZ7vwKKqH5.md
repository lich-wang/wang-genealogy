---
schema: wang-person/v1
id: p_rkLXhSrQp42YWZ7vwKKqH5
status: active
merged_into: null
display_name: 王奉國
cbdb_id: 156543
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9idUUcUC63PDs22MMWyKAa
        subject_person_id: p_rkLXhSrQp42YWZ7vwKKqH5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奉國，史料所见人物。本项目依据《中国历代人物传记资料库：王奉國（CBDB 156543）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_uSRlDOhiqlR5MNAOgEwQ2C
          claim_id: c_9idUUcUC63PDs22MMWyKAa
          source_id: s_pjuyAjVJr75wQNPfEyK1EU
          stance: supports
          locator: CBDB:156543
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_pjuyAjVJr75wQNPfEyK1EU
            source_type: api_record
            title: 中国历代人物传记资料库：王奉國（CBDB 156543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156543&o=json
            external_identifier: CBDB:156543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ckMWFxG6rz9Mq7cL8W3mws
        subject_person_id: p_rkLXhSrQp42YWZ7vwKKqH5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奉國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cFmg4z3xWDm6SGCMgR8Zhg
          claim_id: c_ckMWFxG6rz9Mq7cL8W3mws
          source_id: s_pjuyAjVJr75wQNPfEyK1EU
          stance: supports
          locator: CBDB:156543
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bBeSBgrBlR-HHnSAAryZJ3
        subject_person_id: p_4MQNbYanr85ZD5eECioUpp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rkLXhSrQp42YWZ7vwKKqH5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ah4_R-PF1OesTy-duo1f3M
          claim_id: c_bBeSBgrBlR-HHnSAAryZJ3
          source_id: s_Xt6EFxTaBxQFEMJ1NvSba4
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Xt6EFxTaBxQFEMJ1NvSba4
            source_type: api_record
            title: 中国历代人物传记资料库：王守廉（CBDB 141446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141446&o=json
            external_identifier: CBDB:141446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4MQNbYanr85ZD5eECioUpp
        status: active
        display_name: 王守廉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王奉國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王奉國，史料所见人物。本项目依据《中国历代人物传记资料库：王奉國（CBDB 156543）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王奉國 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4MQNbYanr85ZD5eECioUpp | 王守廉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王奉國（CBDB 156543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156543&o=json)
- [中国历代人物传记资料库：王守廉（CBDB 141446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141446&o=json)
