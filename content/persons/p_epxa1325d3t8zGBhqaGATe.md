---
schema: wang-person/v1
id: p_epxa1325d3t8zGBhqaGATe
status: active
merged_into: null
display_name: 王錦
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A1EfDUvFaPn27RzYGcVKxu
        subject_person_id: p_epxa1325d3t8zGBhqaGATe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L5cYW5FsupS5X3b7zQxPg5
          claim_id: c_A1EfDUvFaPn27RzYGcVKxu
          source_id: s_tsLSMzErps2tPShGmMQFWS
          stance: supports
          locator: CBDB:199393
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199393）
          source: &a1
            id: s_tsLSMzErps2tPShGmMQFWS
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 199393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199393&o=json
            external_identifier: CBDB:199393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rTciztgXvufGWMErN42xMU
        subject_person_id: p_epxa1325d3t8zGBhqaGATe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1450年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BP4aneCPGgyx5vhbbGHeTg
          claim_id: c_rTciztgXvufGWMErN42xMU
          source_id: s_tsLSMzErps2tPShGmMQFWS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZYr4AuXdEw7dC4mHHHm7JN
        subject_person_id: p_epxa1325d3t8zGBhqaGATe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦（生于1450年），明人物。明清進士進士，籍贯襄城，入仕進士，曾任提刑按察使司副使。（中国历代人物传记资料库 CBDB 199393）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tmpS5rHt3I6pew6TO0osuG
          claim_id: c_ZYr4AuXdEw7dC4mHHHm7JN
          source_id: s_tsLSMzErps2tPShGmMQFWS
          stance: supports
          locator: CBDB:199393
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_K50JMpBjWwm6PRe485kSAB
        subject_person_id: p_vBZf8XcAfN7YLCu434S6Mn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_epxa1325d3t8zGBhqaGATe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KC2cW68VmTqve4XMRyI5P3
          claim_id: c_K50JMpBjWwm6PRe485kSAB
          source_id: s_tsLSMzErps2tPShGmMQFWS
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vBZf8XcAfN7YLCu434S6Mn
        status: active
        display_name: 王瓖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Nb8HuNhlL9R6C52uIeojSS
        subject_person_id: p_epxa1325d3t8zGBhqaGATe
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ydw3XdFP7dn8p1rcW2K4d1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Ncj6PkmYdiljyw4sIDKB8
          claim_id: c_Nb8HuNhlL9R6C52uIeojSS
          source_id: s_ykLVXnaXKYihya5LnBpm16
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ykLVXnaXKYihya5LnBpm16
            source_type: api_record
            title: 中国历代人物传记资料库：焦氏(王錦妻)（CBDB 244357）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244357&o=json
            external_identifier: CBDB:244357
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ydw3XdFP7dn8p1rcW2K4d1
        status: active
        display_name: 焦氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_Q0Qt_bKJFTHtn5QDoTLxLU
        subject_person_id: p_HQwCgPv1NvwspN18mM5u4K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_epxa1325d3t8zGBhqaGATe
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oWR_vcZIxsQx10A15QUpM9
          claim_id: c_Q0Qt_bKJFTHtn5QDoTLxLU
          source_id: s_tsLSMzErps2tPShGmMQFWS
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HQwCgPv1NvwspN18mM5u4K
        status: active
        display_name: 王尚文
        merged_into_person_id: null
    - claim:
        id: c_LXjPfmgV4TxYOAPiH5qjYN
        subject_person_id: p_1CnDV1uXu2cPKxk5ki1EED
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_epxa1325d3t8zGBhqaGATe
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h6J9ypsEDHmPnD7hxK8th7
          claim_id: c_LXjPfmgV4TxYOAPiH5qjYN
          source_id: s_tsLSMzErps2tPShGmMQFWS
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1CnDV1uXu2cPKxk5ki1EED
        status: active
        display_name: 王景道
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錦 | accepted |
| birth.date | 1450年 | accepted |
| bio.summary | 王錦（生于1450年），明人物。明清進士進士，籍贯襄城，入仕進士，曾任提刑按察使司副使。（中国历代人物传记资料库 CBDB 199393） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vBZf8XcAfN7YLCu434S6Mn | 王瓖 | accepted |
| spouses | p_ydw3XdFP7dn8p1rcW2K4d1 | 焦氏 | accepted |
| ancestors | p_HQwCgPv1NvwspN18mM5u4K | 王尚文 | accepted |
| ancestors | p_1CnDV1uXu2cPKxk5ki1EED | 王景道 | accepted |

## 外部来源

- [中国历代人物传记资料库：焦氏(王錦妻)（CBDB 244357）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244357&o=json)
- [中国历代人物传记资料库：王錦（CBDB 199393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199393&o=json)
