---
schema: wang-person/v1
id: p_2RwZzY6Uha67DjkBx2UBPv
status: active
merged_into: null
display_name: 王清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xbcqUKJfpkNy9R9VpSKP22
        subject_person_id: p_2RwZzY6Uha67DjkBx2UBPv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ND3QZjtDExRXAojPgWgwtx
          claim_id: c_xbcqUKJfpkNy9R9VpSKP22
          source_id: s_mKEQk5KJ9B7YwNL8AM9heH
          stance: supports
          locator: CBDB:480923
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（480923）
          source: &a1
            id: s_mKEQk5KJ9B7YwNL8AM9heH
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 480923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480923&o=json
            external_identifier: CBDB:480923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.661Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_igzLAFh1emNQjHPH66Bemc
        subject_person_id: p_2RwZzY6Uha67DjkBx2UBPv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清，明人物。入仕世襲(替)，曾任百戶。（中国历代人物传记资料库 CBDB 480923）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KERUck6b1M460a8QDbPinZ
          claim_id: c_igzLAFh1emNQjHPH66Bemc
          source_id: s_mKEQk5KJ9B7YwNL8AM9heH
          stance: supports
          locator: CBDB:480923
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

# 王清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清 | accepted |
| bio.summary | 王清，明人物。入仕世襲(替)，曾任百戶。（中国历代人物传记资料库 CBDB 480923） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 480923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480923&o=json)
