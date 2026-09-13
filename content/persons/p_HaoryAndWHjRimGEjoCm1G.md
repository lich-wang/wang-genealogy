---
schema: wang-person/v1
id: p_HaoryAndWHjRimGEjoCm1G
status: active
merged_into: null
display_name: 王毓林
cbdb_id: 459763
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B9ooC7yPaj5eACkmEaNyFM
        subject_person_id: p_HaoryAndWHjRimGEjoCm1G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓林，清人物。入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 459763）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_1g21nn44T9iaBVbu9fEjFH
          claim_id: c_B9ooC7yPaj5eACkmEaNyFM
          source_id: s_CjQBRHhktnfJmWDwYqS3TR
          stance: supports
          locator: CBDB:459763
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CjQBRHhktnfJmWDwYqS3TR
            source_type: api_record
            title: 中国历代人物传记资料库：王毓林（CBDB 459763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459763&o=json
            external_identifier: CBDB:459763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:13.763Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1NApPc7TCtDcGKt8D2BRVf
        subject_person_id: p_HaoryAndWHjRimGEjoCm1G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KNS1NDemD9tz42R6EAN8Az
          claim_id: c_1NApPc7TCtDcGKt8D2BRVf
          source_id: s_CjQBRHhktnfJmWDwYqS3TR
          stance: supports
          locator: CBDB:459763
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6601-6700）｜历史性依据：CBDB 朝代 = 清
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

# 王毓林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王毓林，清人物。入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 459763） | accepted |
| name.primary | 王毓林 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王毓林（CBDB 459763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459763&o=json)
