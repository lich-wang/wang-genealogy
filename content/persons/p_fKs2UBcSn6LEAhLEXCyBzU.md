---
schema: wang-person/v1
id: p_fKs2UBcSn6LEAhLEXCyBzU
status: active
merged_into: null
display_name: 趙氏
revision: 1
cbdb_id: 303916
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Gkpe_VacUfZVnEE9qoju0R
        subject_person_id: p_fKs2UBcSn6LEAhLEXCyBzU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 303916）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M2Na33dq0qCSbPXgy4rpw7
          claim_id: c_Gkpe_VacUfZVnEE9qoju0R
          source_id: s_Gpth3r1_Xm_ISVtTCS2BSr
          stance: supports
          locator: CBDB:303916
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Gpth3r1_Xm_ISVtTCS2BSr
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王繼洛妻)（CBDB 303916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303916&o=json
            external_identifier: CBDB:303916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FxhPop1mmaYQPSNCfKjCs8
        subject_person_id: p_fKs2UBcSn6LEAhLEXCyBzU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_txyOkL65LAzXqm9AS7SCSx
          claim_id: c_FxhPop1mmaYQPSNCfKjCs8
          source_id: s_Gpth3r1_Xm_ISVtTCS2BSr
          stance: supports
          locator: CBDB:303916
          quotation: null
          interpretation_note: CBDB 明确记录的王繼洛配偶
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
        id: c_nKuRUYp_AcRXjsu2lThMLN
        subject_person_id: p_DjAtFBFadf2HWZ7GfWUuJs
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fKs2UBcSn6LEAhLEXCyBzU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ai_myBM1kxb7RhrYI7MvrE
          claim_id: c_nKuRUYp_AcRXjsu2lThMLN
          source_id: s_Gpth3r1_Xm_ISVtTCS2BSr
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第八十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DjAtFBFadf2HWZ7GfWUuJs
        status: active
        display_name: 王繼洛
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 趙氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 趙氏，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 303916） | accepted |
| name.primary | 趙氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_DjAtFBFadf2HWZ7GfWUuJs | 王繼洛 | accepted |

## 外部来源

- [中国历代人物传记资料库：趙氏(王繼洛妻)（CBDB 303916）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303916&o=json)
