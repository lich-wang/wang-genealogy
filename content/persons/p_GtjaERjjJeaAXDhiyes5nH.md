---
schema: wang-person/v1
id: p_GtjaERjjJeaAXDhiyes5nH
status: active
merged_into: null
display_name: 王騰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NjnMfbP1kYF7KnJRE9gWDe
        subject_person_id: p_GtjaERjjJeaAXDhiyes5nH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ve1doKpHaEfjRMUYDTnfCK
          claim_id: c_NjnMfbP1kYF7KnJRE9gWDe
          source_id: s_JW661b9qi4GsiMa8jMXGqe
          stance: supports
          locator: CBDB:640897
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640897）
          source: &a1
            id: s_JW661b9qi4GsiMa8jMXGqe
            source_type: api_record
            title: 中国历代人物传记资料库：王騰（CBDB 640897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640897&o=json
            external_identifier: CBDB:640897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.233Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DeEQrLsFqTLubQTnEQ2C77
        subject_person_id: p_GtjaERjjJeaAXDhiyes5nH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騰，清人物。籍贯同州府，入仕優貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 640897）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IIASR6d5BLFfJ3ekwtA8Zl
          claim_id: c_DeEQrLsFqTLubQTnEQ2C77
          source_id: s_JW661b9qi4GsiMa8jMXGqe
          stance: supports
          locator: CBDB:640897
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

# 王騰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王騰 | accepted |
| bio.summary | 王騰，清人物。籍贯同州府，入仕優貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 640897） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王騰（CBDB 640897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640897&o=json)
