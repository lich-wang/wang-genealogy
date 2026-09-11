---
schema: wang-person/v1
id: p_MwfGwStFv7RoR2AUiUf2MV
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 287104
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RnI3RJgNpggdWJHYgpFdo0
        subject_person_id: p_MwfGwStFv7RoR2AUiUf2MV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏，明人物。永樂十年進士。（中国历代人物传记资料库 CBDB 287104）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ITvYbf2W9gmZAgHkM2y3z3
          claim_id: c_RnI3RJgNpggdWJHYgpFdo0
          source_id: s_ZjUU1TijGPGY0frLBPutni
          stance: supports
          locator: CBDB:287104
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZjUU1TijGPGY0frLBPutni
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王璜妻)（CBDB 287104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287104&o=json
            external_identifier: CBDB:287104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sDRatNuXXLtdBZtBLlK2va
        subject_person_id: p_MwfGwStFv7RoR2AUiUf2MV
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
        - id: cs_Xs7_5DxqsNLtERSpwHAd0n
          claim_id: c_sDRatNuXXLtdBZtBLlK2va
          source_id: s_ZjUU1TijGPGY0frLBPutni
          stance: supports
          locator: CBDB:287104
          quotation: null
          interpretation_note: CBDB 明确记录的王璜配偶
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
        id: c_Pkz1BVnTgRtWphKwYC6uap
        subject_person_id: p_hMbDUQB1GaYNgCJcxGcWWL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MwfGwStFv7RoR2AUiUf2MV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qy-eUXVzRNchjwLpsaqweT
          claim_id: c_Pkz1BVnTgRtWphKwYC6uap
          source_id: s_ZjUU1TijGPGY0frLBPutni
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第四十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hMbDUQB1GaYNgCJcxGcWWL
        status: active
        display_name: 王璜
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
| bio.summary | 劉氏，明人物。永樂十年進士。（中国历代人物传记资料库 CBDB 287104） | accepted |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_hMbDUQB1GaYNgCJcxGcWWL | 王璜 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王璜妻)（CBDB 287104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287104&o=json)
