---
schema: wang-person/v1
id: p_ozRP1Ysy3ZsqsYzAaUHhj8
status: active
merged_into: null
display_name: 王建極
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pkjytxBacE8WR8afi3AyRk
        subject_person_id: p_ozRP1Ysy3ZsqsYzAaUHhj8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建極
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NpvSt13uJS4CvM2Em5ByFx
          claim_id: c_pkjytxBacE8WR8afi3AyRk
          source_id: s_EZ6JP8JGbpX5bsZeNFxQHC
          stance: supports
          locator: CBDB:561014
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（561014）
          source: &a1
            id: s_EZ6JP8JGbpX5bsZeNFxQHC
            source_type: api_record
            title: 中国历代人物传记资料库：王建極（CBDB 561014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561014&o=json
            external_identifier: CBDB:561014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.733Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L5VfMwUsCZ3ihJcu4jLiZK
        subject_person_id: p_ozRP1Ysy3ZsqsYzAaUHhj8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建極，明人物。身份为畫家。（中国历代人物传记资料库 CBDB 561014）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Uw1z62HmTmahNJnTVnCrUI
          claim_id: c_L5VfMwUsCZ3ihJcu4jLiZK
          source_id: s_EZ6JP8JGbpX5bsZeNFxQHC
          stance: supports
          locator: CBDB:561014
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

# 王建極

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建極 | accepted |
| bio.summary | 王建極，明人物。身份为畫家。（中国历代人物传记资料库 CBDB 561014） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建極（CBDB 561014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561014&o=json)
