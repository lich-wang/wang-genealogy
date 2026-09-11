---
schema: wang-person/v1
id: p_ymQLsviGVnJad7qLTZDHb4
status: active
merged_into: null
display_name: 王渙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NQJ2imKW4rPwuB5vNBVEZA
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AHW6BbXLHL53qNKKGk6voc
          claim_id: c_NQJ2imKW4rPwuB5vNBVEZA
          source_id: s_Hi4Dfz1rKMoiuGrViGfdTN
          stance: supports
          locator: CBDB:294432
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294432）
          source: &a1
            id: s_Hi4Dfz1rKMoiuGrViGfdTN
            source_type: api_record
            title: 中国历代人物传记资料库：王渙（CBDB 294432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294432&o=json
            external_identifier: CBDB:294432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FixB7uyvxTBGRktyUpMtUJ
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bP3vWPnTbW4ox1KyGecxKj
          claim_id: c_FixB7uyvxTBGRktyUpMtUJ
          source_id: s_Hi4Dfz1rKMoiuGrViGfdTN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xTI7CCJzeGfkvUZQEA4upw
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hWm92R8BxfH1SXFUJfsfle
          claim_id: c_xTI7CCJzeGfkvUZQEA4upw
          source_id: s_Hi4Dfz1rKMoiuGrViGfdTN
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TdovnQSDHPgtdb6L5QzgtZ
        status: active
        display_name: 王梴
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王渙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渙 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TdovnQSDHPgtdb6L5QzgtZ | 王梴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王渙（CBDB 294432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294432&o=json)
