---
schema: wang-person/v1
id: p_KVvxLLXewD8c1mAcmvXvv2
status: active
merged_into: null
display_name: 王惠昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wy1te1d3Xy7ECJEEFDktCh
        subject_person_id: p_KVvxLLXewD8c1mAcmvXvv2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6KghHH31Teg7DejhEt3CdF
          claim_id: c_wy1te1d3Xy7ECJEEFDktCh
          source_id: s_mEx3vEg8Lfv1p3DPhQ9YaS
          stance: supports
          locator: CBDB:637897
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637897）
          source: &a1
            id: s_mEx3vEg8Lfv1p3DPhQ9YaS
            source_type: api_record
            title: 中国历代人物传记资料库：王惠昌（CBDB 637897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637897&o=json
            external_identifier: CBDB:637897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.450Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1xJzkeFnLY7DcXoEGL7QFS
        subject_person_id: p_KVvxLLXewD8c1mAcmvXvv2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠昌，清人物。籍贯遵化州，曾任訓導。（中国历代人物传记资料库 CBDB 637897）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mKsvuqXpauTkmBl2tL4CTs
          claim_id: c_1xJzkeFnLY7DcXoEGL7QFS
          source_id: s_mEx3vEg8Lfv1p3DPhQ9YaS
          stance: supports
          locator: CBDB:637897
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

# 王惠昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惠昌 | accepted |
| bio.summary | 王惠昌，清人物。籍贯遵化州，曾任訓導。（中国历代人物传记资料库 CBDB 637897） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惠昌（CBDB 637897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637897&o=json)
