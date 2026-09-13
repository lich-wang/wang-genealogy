---
schema: wang-person/v1
id: p_WMMTno9xy7FgRvEP6oGDM9
status: active
merged_into: null
display_name: 王式烈
cbdb_id: 71522
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ynj6G8bFS1GwYSRpbWY8As
        subject_person_id: p_WMMTno9xy7FgRvEP6oGDM9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式烈（生于1698年），清人物。籍贯雲夢。（中国历代人物传记资料库 CBDB 71522）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_u666wrxNZyE-7hYSycKg9-
          claim_id: c_Ynj6G8bFS1GwYSRpbWY8As
          source_id: s_RD9K68u9kXg6CdDNdfm2gd
          stance: supports
          locator: CBDB:71522
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RD9K68u9kXg6CdDNdfm2gd
            source_type: api_record
            title: 中国历代人物传记资料库：王式烈（CBDB 71522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71522&o=json
            external_identifier: CBDB:71522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XRujdGWjNfScPHYnXrxsrj
        subject_person_id: p_WMMTno9xy7FgRvEP6oGDM9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1698年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1698-01-01
            latest: 1698-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4CUWxDKvPnZxRrtCwehrRq
          claim_id: c_XRujdGWjNfScPHYnXrxsrj
          source_id: s_RD9K68u9kXg6CdDNdfm2gd
          stance: supports
          locator: CBDB:71522
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1698
          source:
            id: s_RD9K68u9kXg6CdDNdfm2gd
            source_type: api_record
            title: 中国历代人物传记资料库：王式烈（CBDB 71522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71522&o=json
            external_identifier: CBDB:71522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nZoxGyhCsSfJgDNgWTCR8m
        subject_person_id: p_WMMTno9xy7FgRvEP6oGDM9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YLsPQMgAwNLEG5uLREzuGs
          claim_id: c_nZoxGyhCsSfJgDNgWTCR8m
          source_id: s_RD9K68u9kXg6CdDNdfm2gd
          stance: supports
          locator: CBDB:71522
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1698
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

# 王式烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王式烈（生于1698年），清人物。籍贯雲夢。（中国历代人物传记资料库 CBDB 71522） | accepted |
| birth.date | 1698年 | accepted |
| name.primary | 王式烈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王式烈（CBDB 71522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71522&o=json)
