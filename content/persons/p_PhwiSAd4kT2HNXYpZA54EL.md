---
schema: wang-person/v1
id: p_PhwiSAd4kT2HNXYpZA54EL
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 237752
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_38BoKcat_UwXiNDqtr1WPH
        subject_person_id: p_PhwiSAd4kT2HNXYpZA54EL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S1pIP0rivATLDygQTgZZEp
          claim_id: c_38BoKcat_UwXiNDqtr1WPH
          source_id: s_pWY4igE05CzBs-MFInzZrM
          stance: supports
          locator: CBDB:237752
          quotation: null
          interpretation_note: CBDB 明确记录的王槩配偶
          source: &a1
            id: s_pWY4igE05CzBs-MFInzZrM
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王概妻)（CBDB 237752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237752&o=json
            external_identifier: CBDB:237752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_OK1Up3RG9qVcrQYD1uBqfL
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PhwiSAd4kT2HNXYpZA54EL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jc2mcRoWhbCpJmq4wb4QZF
          claim_id: c_OK1Up3RG9qVcrQYD1uBqfL
          source_id: s_pWY4igE05CzBs-MFInzZrM
          stance: supports
          locator: 正统七年進士登科錄:一卷，第二甲第二十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2N77V679N67chKYe7DivHB
        status: active
        display_name: 王槩
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2N77V679N67chKYe7DivHB | 王槩 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王概妻)（CBDB 237752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237752&o=json)
