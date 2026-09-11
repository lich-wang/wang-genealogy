---
schema: wang-person/v1
id: p_1A2p2sEJxfJEdyLMPVQo57
status: active
merged_into: null
display_name: 王賡言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EHSdKyZbu2caWQG48WmzQ8
        subject_person_id: p_1A2p2sEJxfJEdyLMPVQo57
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賡言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eebDZ4QJAAkqvFWSGuLw7j
          claim_id: c_EHSdKyZbu2caWQG48WmzQ8
          source_id: s_a8AP1RXmh9EuscvL4bjSXN
          stance: supports
          locator: CBDB:439157
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（439157）
          source: &a1
            id: s_a8AP1RXmh9EuscvL4bjSXN
            source_type: api_record
            title: 中国历代人物传记资料库：王賡言（CBDB 439157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439157&o=json
            external_identifier: CBDB:439157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.091Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DkT3ibduZaPPrnZEssDp4P
        subject_person_id: p_1A2p2sEJxfJEdyLMPVQo57
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賡言，清人物。籍贯諸城，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 439157）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AvCgPNd9JMa_CsOrpCImuj
          claim_id: c_DkT3ibduZaPPrnZEssDp4P
          source_id: s_a8AP1RXmh9EuscvL4bjSXN
          stance: supports
          locator: CBDB:439157
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

# 王賡言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賡言 | accepted |
| bio.summary | 王賡言，清人物。籍贯諸城，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 439157） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賡言（CBDB 439157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439157&o=json)
