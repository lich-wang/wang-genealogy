---
schema: wang-person/v1
id: p_HcfsKA3FvSxgK9qhNB5oxH
status: active
merged_into: null
display_name: 王時中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fTLNdmk2uKoYsSWaNLmQQs
        subject_person_id: p_HcfsKA3FvSxgK9qhNB5oxH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gs7pm1jW5hatrXDACpWmCb
          claim_id: c_fTLNdmk2uKoYsSWaNLmQQs
          source_id: s_FQ7H49co1k5arYLrB3hK9e
          stance: supports
          locator: CBDB:327990
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327990）
          source: &a1
            id: s_FQ7H49co1k5arYLrB3hK9e
            source_type: api_record
            title: 中国历代人物传记资料库：王時中（CBDB 327990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327990&o=json
            external_identifier: CBDB:327990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.283Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4gWJ5uyHEqf1WdFQK9HcY9
        subject_person_id: p_HcfsKA3FvSxgK9qhNB5oxH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時中，明人物。嘉靖四十一年進士，籍贯通州。（中国历代人物传记资料库 CBDB 327990）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UwTaj4rjBwZAL38N4WtREk
          claim_id: c_4gWJ5uyHEqf1WdFQK9HcY9
          source_id: s_FQ7H49co1k5arYLrB3hK9e
          stance: supports
          locator: CBDB:327990
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

# 王時中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時中 | accepted |
| bio.summary | 王時中，明人物。嘉靖四十一年進士，籍贯通州。（中国历代人物传记资料库 CBDB 327990） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時中（CBDB 327990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327990&o=json)
