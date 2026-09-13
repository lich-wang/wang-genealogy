---
schema: wang-person/v1
id: p_Ct25pKmaZJo6zvVomNZ3sE
status: active
merged_into: null
display_name: 王惟祇
cbdb_id: 294966
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qpCAxmQzykDUXnC55MyLsE
        subject_person_id: p_Ct25pKmaZJo6zvVomNZ3sE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟祇，史料所见人物。本项目依据《中国历代人物传记资料库：王惟祇（CBDB 294966）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_J2ltC2V_EkXXtVgl_iXkYn
          claim_id: c_qpCAxmQzykDUXnC55MyLsE
          source_id: s_5zLAcCBMbtGv2spLzL72AC
          stance: supports
          locator: CBDB:294966
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_5zLAcCBMbtGv2spLzL72AC
            source_type: api_record
            title: 中国历代人物传记资料库：王惟祇（CBDB 294966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294966&o=json
            external_identifier: CBDB:294966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DCc4u4Jb9rwoRFcfRPSLjY
        subject_person_id: p_Ct25pKmaZJo6zvVomNZ3sE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟祇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_K4QT3iRm3Njmq9YTTa8xrs
          claim_id: c_DCc4u4Jb9rwoRFcfRPSLjY
          source_id: s_5zLAcCBMbtGv2spLzL72AC
          stance: supports
          locator: CBDB:294966
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0DQxK_qM7qgLRsKvyejhIP
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ct25pKmaZJo6zvVomNZ3sE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pL3XI4dqLQQQS1EbkwzPCG
          claim_id: c_0DQxK_qM7qgLRsKvyejhIP
          source_id: s_5zLAcCBMbtGv2spLzL72AC
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百三十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5zLAcCBMbtGv2spLzL72AC
            source_type: api_record
            title: 中国历代人物传记资料库：王惟祇（CBDB 294966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294966&o=json
            external_identifier: CBDB:294966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_ShbQcKbhPZJtYL14xZXyTR
        status: active
        display_name: 王佩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟祇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惟祇，史料所见人物。本项目依据《中国历代人物传记资料库：王惟祇（CBDB 294966）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王惟祇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ShbQcKbhPZJtYL14xZXyTR | 王佩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟祇（CBDB 294966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294966&o=json)
