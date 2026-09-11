---
schema: wang-person/v1
id: p_287ZuLLUNDjfc6znBpVJuv
status: active
merged_into: null
display_name: 王國柱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KdkdK96VfZ6cZgnagwHRQa
        subject_person_id: p_287ZuLLUNDjfc6znBpVJuv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國柱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2BTqyjYPEQmtE3kSyMw9Wk
          claim_id: c_KdkdK96VfZ6cZgnagwHRQa
          source_id: s_s3fex8wotWiHEsf34pGrcT
          stance: supports
          locator: CBDB:456510
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（456510）
          source: &a1
            id: s_s3fex8wotWiHEsf34pGrcT
            source_type: api_record
            title: 中国历代人物传记资料库：王國柱（CBDB 456510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456510&o=json
            external_identifier: CBDB:456510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.579Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f4JwMzbAFDqzmZ8J35LhkH
        subject_person_id: p_287ZuLLUNDjfc6znBpVJuv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國柱，清人物。曾任典史。（中国历代人物传记资料库 CBDB 456510）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TawB7xJutWrb1mxrx3Vi9y
          claim_id: c_f4JwMzbAFDqzmZ8J35LhkH
          source_id: s_s3fex8wotWiHEsf34pGrcT
          stance: supports
          locator: CBDB:456510
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

# 王國柱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國柱 | accepted |
| bio.summary | 王國柱，清人物。曾任典史。（中国历代人物传记资料库 CBDB 456510） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國柱（CBDB 456510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456510&o=json)
