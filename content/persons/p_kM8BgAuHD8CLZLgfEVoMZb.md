---
schema: wang-person/v1
id: p_kM8BgAuHD8CLZLgfEVoMZb
status: active
merged_into: null
display_name: 王國臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1tJ2wNZgxT3eivdESWymx6
        subject_person_id: p_kM8BgAuHD8CLZLgfEVoMZb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KP8h1pMFrSFjLW14s6gaFY
          claim_id: c_1tJ2wNZgxT3eivdESWymx6
          source_id: s_wRAguKYXYAdbjUqQKEbQXf
          stance: supports
          locator: CBDB:300444
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（300444）
          source: &a1
            id: s_wRAguKYXYAdbjUqQKEbQXf
            source_type: api_record
            title: 中国历代人物传记资料库：王國臣（CBDB 300444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300444&o=json
            external_identifier: CBDB:300444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.632Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KxNmpJx6hDGbGgw382xMdW
        subject_person_id: p_kM8BgAuHD8CLZLgfEVoMZb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國臣，明人物。嘉靖十七年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 300444）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ePG983ZLh3K2wJuZpyw-g9
          claim_id: c_KxNmpJx6hDGbGgw382xMdW
          source_id: s_wRAguKYXYAdbjUqQKEbQXf
          stance: supports
          locator: CBDB:300444
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國臣 | accepted |
| bio.summary | 王國臣，明人物。嘉靖十七年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 300444） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國臣（CBDB 300444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300444&o=json)
