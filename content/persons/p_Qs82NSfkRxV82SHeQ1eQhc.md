---
schema: wang-person/v1
id: p_Qs82NSfkRxV82SHeQ1eQhc
status: active
merged_into: null
display_name: 饒氏
revision: 1
cbdb_id: 261993
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_OmHu_DFlYhHHHMpWbO3JYS
        subject_person_id: p_Qs82NSfkRxV82SHeQ1eQhc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 饒氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cDOSO3kXuKZ_NuSaPAgZlU
          claim_id: c_OmHu_DFlYhHHHMpWbO3JYS
          source_id: s_QTwLECA0gATDI9zMVPZSWu
          stance: supports
          locator: CBDB:261993
          quotation: null
          interpretation_note: CBDB 明确记录的王統配偶
          source: &a1
            id: s_QTwLECA0gATDI9zMVPZSWu
            source_type: api_record
            title: 中国历代人物传记资料库：饒氏(王統妻)（CBDB 261993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261993&o=json
            external_identifier: CBDB:261993
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
        id: c_XdZo_vATX8_P31O8j944GU
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Qs82NSfkRxV82SHeQ1eQhc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__WeHEidmG9V4w23wJZrMdi
          claim_id: c_XdZo_vATX8_P31O8j944GU
          source_id: s_QTwLECA0gATDI9zMVPZSWu
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第二十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2LSGWLrXs7XnndXnW76V8U
        status: active
        display_name: 王統
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 饒氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 饒氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2LSGWLrXs7XnndXnW76V8U | 王統 | accepted |

## 外部来源

- [中国历代人物传记资料库：饒氏(王統妻)（CBDB 261993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261993&o=json)
