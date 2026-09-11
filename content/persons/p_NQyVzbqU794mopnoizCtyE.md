---
schema: wang-person/v1
id: p_NQyVzbqU794mopnoizCtyE
status: active
merged_into: null
display_name: 某氏
revision: 1
cbdb_id: 306922
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SGKK71dgj9XB9_pPLGAt5D
        subject_person_id: p_NQyVzbqU794mopnoizCtyE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 某氏，明人物。嘉靖二十三年進士。（中国历代人物传记资料库 CBDB 306922）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qZikpoY-TTBY8dx5__0EqH
          claim_id: c_SGKK71dgj9XB9_pPLGAt5D
          source_id: s_4_PsIKgn46vi6IJNu9VKA0
          stance: supports
          locator: CBDB:306922
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4_PsIKgn46vi6IJNu9VKA0
            source_type: api_record
            title: 中国历代人物传记资料库：某氏(王學妻)（CBDB 306922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306922&o=json
            external_identifier: CBDB:306922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3xnr5sp3cq6SC1iUwefXlU
        subject_person_id: p_NQyVzbqU794mopnoizCtyE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 某氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KyGJc1mRVhIVz5xGpB2Z4p
          claim_id: c_3xnr5sp3cq6SC1iUwefXlU
          source_id: s_4_PsIKgn46vi6IJNu9VKA0
          stance: supports
          locator: CBDB:306922
          quotation: null
          interpretation_note: CBDB 明确记录的王學配偶
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
        id: c_z2C-OBybFSlbagRlno6xi8
        subject_person_id: p_mj43p62dQVDfJdFrwRMJq5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NQyVzbqU794mopnoizCtyE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eXUTTvVQrz2e1L7n8QcXty
          claim_id: c_z2C-OBybFSlbagRlno6xi8
          source_id: s_4_PsIKgn46vi6IJNu9VKA0
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第六十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mj43p62dQVDfJdFrwRMJq5
        status: active
        display_name: 王學
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 某氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 某氏，明人物。嘉靖二十三年進士。（中国历代人物传记资料库 CBDB 306922） | accepted |
| name.primary | 某氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_mj43p62dQVDfJdFrwRMJq5 | 王學 | accepted |

## 外部来源

- [中国历代人物传记资料库：某氏(王學妻)（CBDB 306922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306922&o=json)
