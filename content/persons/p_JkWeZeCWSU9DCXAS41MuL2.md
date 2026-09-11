---
schema: wang-person/v1
id: p_JkWeZeCWSU9DCXAS41MuL2
status: active
merged_into: null
display_name: 王夢庚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZNta5N17RBYbSnLe8s5yVp
        subject_person_id: p_JkWeZeCWSU9DCXAS41MuL2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢庚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gws7w8p8mKhtJ4WobQhqRe
          claim_id: c_ZNta5N17RBYbSnLe8s5yVp
          source_id: s_bQ9FiYvVWPLyzsAm6Bppq9
          stance: supports
          locator: CBDB:25800
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25800）
          source: &a1
            id: s_bQ9FiYvVWPLyzsAm6Bppq9
            source_type: api_record
            title: 中国历代人物传记资料库：王夢庚（CBDB 25800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25800&o=json
            external_identifier: CBDB:25800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_aLe5vABp3jr17d5EgtVhzZ
        subject_person_id: p_JkWeZeCWSU9DCXAS41MuL2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1208年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J5xc3wqKhKYSj6geCLD4jF
          claim_id: c_aLe5vABp3jr17d5EgtVhzZ
          source_id: s_bQ9FiYvVWPLyzsAm6Bppq9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uEiHMb2odJhqZMtt6LErm1
        subject_person_id: p_JkWeZeCWSU9DCXAS41MuL2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rQS3z8H8ynEBpjoAQuWMD3
          claim_id: c_uEiHMb2odJhqZMtt6LErm1
          source_id: s_bQ9FiYvVWPLyzsAm6Bppq9
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
        id: c_09qqny7iRvwDtVSOCgoLgr
        subject_person_id: p_JkWeZeCWSU9DCXAS41MuL2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AgYiBCM7MfwDaoeuNsJi33
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W2CiYKG2v6VQw5TKelYozl
          claim_id: c_09qqny7iRvwDtVSOCgoLgr
          source_id: s_bQ9FiYvVWPLyzsAm6Bppq9
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1863：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AgYiBCM7MfwDaoeuNsJi33
        status: active
        display_name: 王惟寅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王夢庚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢庚 | accepted |
| death.date | 1208年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AgYiBCM7MfwDaoeuNsJi33 | 王惟寅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢庚（CBDB 25800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25800&o=json)
