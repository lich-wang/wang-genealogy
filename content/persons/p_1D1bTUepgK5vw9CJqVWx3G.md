---
schema: wang-person/v1
id: p_1D1bTUepgK5vw9CJqVWx3G
status: active
merged_into: null
display_name: 王樂雍
cbdb_id: 71493
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yi8x19h3mkydifNm6vLUUS
        subject_person_id: p_1D1bTUepgK5vw9CJqVWx3G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂雍（卒于1861年），清人物。籍贯黃巖。（中国历代人物传记资料库 CBDB 71493）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_uheDngqtkhO9bFFeTiUtGH
          claim_id: c_Yi8x19h3mkydifNm6vLUUS
          source_id: s_gXKLbBxkPMNLyGm6NzAMoy
          stance: supports
          locator: CBDB:71493
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gXKLbBxkPMNLyGm6NzAMoy
            source_type: api_record
            title: 中国历代人物传记资料库：王樂雍（CBDB 71493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71493&o=json
            external_identifier: CBDB:71493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:35.499Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_X1Y1dJDgy8NBM2XSvLPCqx
        subject_person_id: p_1D1bTUepgK5vw9CJqVWx3G
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1861年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1861-01-01
            latest: 1861-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wsUWQKo3z46SCmQ2RfPAj8
          claim_id: c_X1Y1dJDgy8NBM2XSvLPCqx
          source_id: s_gXKLbBxkPMNLyGm6NzAMoy
          stance: supports
          locator: CBDB:71493
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（101-200）｜历史性依据：CBDB 卒年 = 1861
          source:
            id: s_gXKLbBxkPMNLyGm6NzAMoy
            source_type: api_record
            title: 中国历代人物传记资料库：王樂雍（CBDB 71493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71493&o=json
            external_identifier: CBDB:71493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:35.499Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1t4YS1zGp9y5Cu8K5RmoAw
        subject_person_id: p_1D1bTUepgK5vw9CJqVWx3G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂雍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ziKBknwaDr1uBRifCD1UBe
          claim_id: c_1t4YS1zGp9y5Cu8K5RmoAw
          source_id: s_gXKLbBxkPMNLyGm6NzAMoy
          stance: supports
          locator: CBDB:71493
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（101-200）｜历史性依据：CBDB 卒年 = 1861
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

# 王樂雍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王樂雍（卒于1861年），清人物。籍贯黃巖。（中国历代人物传记资料库 CBDB 71493） | accepted |
| death.date | 1861年 | accepted |
| name.primary | 王樂雍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樂雍（CBDB 71493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71493&o=json)
