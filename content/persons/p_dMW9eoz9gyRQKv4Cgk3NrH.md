---
schema: wang-person/v1
id: p_dMW9eoz9gyRQKv4Cgk3NrH
status: active
merged_into: null
display_name: 王成璐
cbdb_id: 124336
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wGXShcjsRxXCkaESjyKRGV
        subject_person_id: p_dMW9eoz9gyRQKv4Cgk3NrH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成璐（生于1794年），清人物。明清進士進士，籍贯江夏，入仕進士，曾任鹽法道、知縣。（中国历代人物传记资料库 CBDB 124336）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_0XUBQbqroh-f9qmjF8mCVn
          claim_id: c_wGXShcjsRxXCkaESjyKRGV
          source_id: s_MVV1qfmy7EZSASwHKsbUmc
          stance: supports
          locator: CBDB:124336
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MVV1qfmy7EZSASwHKsbUmc
            source_type: api_record
            title: 中国历代人物传记资料库：王成璐（CBDB 124336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124336&o=json
            external_identifier: CBDB:124336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hAG4aV6NdYhNcXunKKpMya
        subject_person_id: p_dMW9eoz9gyRQKv4Cgk3NrH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1794年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1794-01-01
            latest: 1794-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PFtUJbai5tZLRZote3HBt1
          claim_id: c_hAG4aV6NdYhNcXunKKpMya
          source_id: s_MVV1qfmy7EZSASwHKsbUmc
          stance: supports
          locator: CBDB:124336
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1794
          source:
            id: s_MVV1qfmy7EZSASwHKsbUmc
            source_type: api_record
            title: 中国历代人物传记资料库：王成璐（CBDB 124336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124336&o=json
            external_identifier: CBDB:124336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_goB243EQMVf23PeddVZMeX
        subject_person_id: p_dMW9eoz9gyRQKv4Cgk3NrH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成璐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Vv9jSs6gJbnB5FJWcKd1jj
          claim_id: c_goB243EQMVf23PeddVZMeX
          source_id: s_MVV1qfmy7EZSASwHKsbUmc
          stance: supports
          locator: CBDB:124336
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1794
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

# 王成璐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王成璐（生于1794年），清人物。明清進士進士，籍贯江夏，入仕進士，曾任鹽法道、知縣。（中国历代人物传记资料库 CBDB 124336） | accepted |
| birth.date | 1794年 | accepted |
| name.primary | 王成璐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王成璐（CBDB 124336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124336&o=json)
