---
schema: wang-person/v1
id: p_xJ4hBEUpss6KqCP8nHiRXx
status: active
merged_into: null
display_name: 錢氏
revision: 1
cbdb_id: 274797
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9tnsNCBOT1_jq3eFuFRzCQ
        subject_person_id: p_xJ4hBEUpss6KqCP8nHiRXx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 錢氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cciB_rEO8ZCWV_M83ayY8L
          claim_id: c_9tnsNCBOT1_jq3eFuFRzCQ
          source_id: s_5RIDrXX1BY4zmru2fOaqtR
          stance: supports
          locator: CBDB:274797
          quotation: null
          interpretation_note: CBDB 明确记录的王璘配偶
          source: &a1
            id: s_5RIDrXX1BY4zmru2fOaqtR
            source_type: api_record
            title: 中国历代人物传记资料库：錢氏(王璘妻)（CBDB 274797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274797&o=json
            external_identifier: CBDB:274797
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
        id: c_C2_njNyJ7LPn5zUF9M0Rw0
        subject_person_id: p_7tdhj3xqs6eFzthKS1AGvP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xJ4hBEUpss6KqCP8nHiRXx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u0EhVqFa9RbEWmabuiW4DU
          claim_id: c_C2_njNyJ7LPn5zUF9M0Rw0
          source_id: s_5RIDrXX1BY4zmru2fOaqtR
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百四十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7tdhj3xqs6eFzthKS1AGvP
        status: active
        display_name: 王璘
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 錢氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 錢氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7tdhj3xqs6eFzthKS1AGvP | 王璘 | accepted |

## 外部来源

- [中国历代人物传记资料库：錢氏(王璘妻)（CBDB 274797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274797&o=json)
