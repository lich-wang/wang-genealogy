---
schema: wang-person/v1
id: p_iFdmQY65wry7H169vut7Uw
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 159083
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w9wsBmSIY-k3vrAF83auya
        subject_person_id: p_iFdmQY65wry7H169vut7Uw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0ShK7eJyRFl5Xel6ZJPKMH
          claim_id: c_w9wsBmSIY-k3vrAF83auya
          source_id: s_cOMA54efcqBBTl4f4u_tQA
          stance: supports
          locator: CBDB:159083
          quotation: null
          interpretation_note: CBDB 明确记录的王守琦配偶
          source: &a1
            id: s_cOMA54efcqBBTl4f4u_tQA
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王守琦妻)（CBDB 159083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159083&o=json
            external_identifier: CBDB:159083
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
        id: c_FcjXf1gHj_WsGJgIkynQvX
        subject_person_id: p_TSiXhGd4sf6hYFPw8EvWsp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iFdmQY65wry7H169vut7Uw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o8Lc-LnTV79xqX9jbVvz9w
          claim_id: c_FcjXf1gHj_WsGJgIkynQvX
          source_id: s_cOMA54efcqBBTl4f4u_tQA
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 32：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TSiXhGd4sf6hYFPw8EvWsp
        status: active
        display_name: 王守琦
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_TSiXhGd4sf6hYFPw8EvWsp | 王守琦 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王守琦妻)（CBDB 159083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159083&o=json)
