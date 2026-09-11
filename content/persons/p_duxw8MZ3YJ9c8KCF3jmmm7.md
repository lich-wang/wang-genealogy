---
schema: wang-person/v1
id: p_duxw8MZ3YJ9c8KCF3jmmm7
status: active
merged_into: null
display_name: 夏氏
revision: 1
cbdb_id: 313045
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kIyKG3Q4Aysl1RoTYvl-f6
        subject_person_id: p_duxw8MZ3YJ9c8KCF3jmmm7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 夏氏，明人物。嘉靖二十九年進士。（中国历代人物传记资料库 CBDB 313045）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dg_VCP8kPpevQRUvZ-e89Z
          claim_id: c_kIyKG3Q4Aysl1RoTYvl-f6
          source_id: s_6LoAFTfGTmreo-thYGqjDJ
          stance: supports
          locator: CBDB:313045
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6LoAFTfGTmreo-thYGqjDJ
            source_type: api_record
            title: 中国历代人物传记资料库：夏氏(王應璧妻)（CBDB 313045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313045&o=json
            external_identifier: CBDB:313045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WvA6ZXvxDDKtVPNhqgKP1c
        subject_person_id: p_duxw8MZ3YJ9c8KCF3jmmm7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 夏氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6zJq-TmEjKPxrtT1_WOTep
          claim_id: c_WvA6ZXvxDDKtVPNhqgKP1c
          source_id: s_6LoAFTfGTmreo-thYGqjDJ
          stance: supports
          locator: CBDB:313045
          quotation: null
          interpretation_note: CBDB 明确记录的王應璧配偶
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
        id: c_IfVR3xbmWL2HRnR-ntji-b
        subject_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_duxw8MZ3YJ9c8KCF3jmmm7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wQJlmuhQTlR_x8ZxVb7Ckd
          claim_id: c_IfVR3xbmWL2HRnR-ntji-b
          source_id: s_6LoAFTfGTmreo-thYGqjDJ
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第三十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        status: active
        display_name: 王應璧
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 夏氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 夏氏，明人物。嘉靖二十九年進士。（中国历代人物传记资料库 CBDB 313045） | accepted |
| name.primary | 夏氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_1ZWbH3Q2UJJJLSJ9mDZ9cG | 王應璧 | accepted |

## 外部来源

- [中国历代人物传记资料库：夏氏(王應璧妻)（CBDB 313045）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313045&o=json)
