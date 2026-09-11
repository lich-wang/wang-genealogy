---
schema: wang-person/v1
id: p_bcQ9oz49QYQ245xEWHXkmc
status: active
merged_into: null
display_name: 王之愷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CZEfnCTStodTPPbuhkMDFT
        subject_person_id: p_bcQ9oz49QYQ245xEWHXkmc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之愷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_msTi3s1W4PYaHq3ZnD1kcQ
          claim_id: c_CZEfnCTStodTPPbuhkMDFT
          source_id: s_MC45c1AqjXQuKMjpVPiUKy
          stance: supports
          locator: CBDB:635784
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635784）
          source: &a1
            id: s_MC45c1AqjXQuKMjpVPiUKy
            source_type: api_record
            title: 中国历代人物传记资料库：王之愷（CBDB 635784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635784&o=json
            external_identifier: CBDB:635784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.018Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RMG3xa8xFRoPja1pBCTVX9
        subject_person_id: p_bcQ9oz49QYQ245xEWHXkmc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之愷，清人物。籍贯城固，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 635784）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gfDNAGJxIw_mNYZu0OapUL
          claim_id: c_RMG3xa8xFRoPja1pBCTVX9
          source_id: s_MC45c1AqjXQuKMjpVPiUKy
          stance: supports
          locator: CBDB:635784
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

# 王之愷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之愷 | accepted |
| bio.summary | 王之愷，清人物。籍贯城固，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 635784） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之愷（CBDB 635784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635784&o=json)
