---
schema: wang-person/v1
id: p_wBpdEZYPyBQQo2Ndn6KuLy
status: active
merged_into: null
display_name: 王臻祐
cbdb_id: 72209
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bihY5sLS3cEwSzBBR9HWUp
        subject_person_id: p_wBpdEZYPyBQQo2Ndn6KuLy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臻祐（卒于1854年），清人物。籍贯貴陽府。（中国历代人物传记资料库 CBDB 72209）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_CQAK8JMEtdL8rQqB1E6whp
          claim_id: c_bihY5sLS3cEwSzBBR9HWUp
          source_id: s_KPVPA7NBDV2q1JZy9WS5XC
          stance: supports
          locator: CBDB:72209
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KPVPA7NBDV2q1JZy9WS5XC
            source_type: api_record
            title: 中国历代人物传记资料库：王臻祐（CBDB 72209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72209&o=json
            external_identifier: CBDB:72209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:37.980Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PBJgAi5KUtz5VD2gq38Lbr
        subject_person_id: p_wBpdEZYPyBQQo2Ndn6KuLy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1854年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1854-01-01
            latest: 1854-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pUNxxzEGd37KsfAYWeuUZi
          claim_id: c_PBJgAi5KUtz5VD2gq38Lbr
          source_id: s_KPVPA7NBDV2q1JZy9WS5XC
          stance: supports
          locator: CBDB:72209
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（301-400）｜历史性依据：CBDB 卒年 = 1854
          source:
            id: s_KPVPA7NBDV2q1JZy9WS5XC
            source_type: api_record
            title: 中国历代人物传记资料库：王臻祐（CBDB 72209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72209&o=json
            external_identifier: CBDB:72209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:37.980Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VC862ef1wWKHUM2DqXm43H
        subject_person_id: p_wBpdEZYPyBQQo2Ndn6KuLy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臻祐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NCWYhve9vfd8KbsfugQDeg
          claim_id: c_VC862ef1wWKHUM2DqXm43H
          source_id: s_KPVPA7NBDV2q1JZy9WS5XC
          stance: supports
          locator: CBDB:72209
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（301-400）｜历史性依据：CBDB 卒年 = 1854
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

# 王臻祐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王臻祐（卒于1854年），清人物。籍贯貴陽府。（中国历代人物传记资料库 CBDB 72209） | accepted |
| death.date | 1854年 | accepted |
| name.primary | 王臻祐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王臻祐（CBDB 72209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72209&o=json)
