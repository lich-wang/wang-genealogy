---
schema: wang-person/v1
id: p_ciXb4UH2wKJZ363JCcVWVZ
status: active
merged_into: null
display_name: 王建忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bgtgD1kKctHSUucMKLkjMp
        subject_person_id: p_ciXb4UH2wKJZ363JCcVWVZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ex55b8MgK48w5UFFKxep5Z
          claim_id: c_bgtgD1kKctHSUucMKLkjMp
          source_id: s_AN6Z6UACShNXPD2Heb8hTW
          stance: supports
          locator: CBDB:233803
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（233803）
          source: &a1
            id: s_AN6Z6UACShNXPD2Heb8hTW
            source_type: api_record
            title: 中国历代人物传记资料库：王建忠（CBDB 233803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233803&o=json
            external_identifier: CBDB:233803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WdieNA1HaDFWWK6eU3Tbyk
        subject_person_id: p_ciXb4UH2wKJZ363JCcVWVZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建忠，明人物。籍贯南充，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 233803）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WcK_SHrIZy8EAInz_d-cdg
          claim_id: c_WdieNA1HaDFWWK6eU3Tbyk
          source_id: s_AN6Z6UACShNXPD2Heb8hTW
          stance: supports
          locator: CBDB:233803
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

# 王建忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建忠 | accepted |
| bio.summary | 王建忠，明人物。籍贯南充，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 233803） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建忠（CBDB 233803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233803&o=json)
