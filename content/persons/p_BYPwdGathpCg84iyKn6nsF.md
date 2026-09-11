---
schema: wang-person/v1
id: p_BYPwdGathpCg84iyKn6nsF
status: active
merged_into: null
display_name: 王國忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dZRVE7yWzFYCNGC1Hp4xD4
        subject_person_id: p_BYPwdGathpCg84iyKn6nsF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x36Ph1Jio9oxJM9FZMpW6h
          claim_id: c_dZRVE7yWzFYCNGC1Hp4xD4
          source_id: s_FRawv8K18cFLiTJTAsbq39
          stance: supports
          locator: CBDB:559896
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（559896）
          source: &a1
            id: s_FRawv8K18cFLiTJTAsbq39
            source_type: api_record
            title: 中国历代人物传记资料库：王國忠（CBDB 559896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=559896&o=json
            external_identifier: CBDB:559896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.712Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ktbU9FJsgEV3R35Cfm9T1o
        subject_person_id: p_BYPwdGathpCg84iyKn6nsF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國忠，明人物。籍贯府谷，曾任副將軍。（中国历代人物传记资料库 CBDB 559896）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Uf9mf7WfDCo0Bco8iIZiSv
          claim_id: c_ktbU9FJsgEV3R35Cfm9T1o
          source_id: s_FRawv8K18cFLiTJTAsbq39
          stance: supports
          locator: CBDB:559896
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

# 王國忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國忠 | accepted |
| bio.summary | 王國忠，明人物。籍贯府谷，曾任副將軍。（中国历代人物传记资料库 CBDB 559896） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國忠（CBDB 559896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=559896&o=json)
