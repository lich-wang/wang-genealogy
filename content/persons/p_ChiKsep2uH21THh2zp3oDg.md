---
schema: wang-person/v1
id: p_ChiKsep2uH21THh2zp3oDg
status: active
merged_into: null
display_name: 王慶華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_af56xx9jezZK9yJYiyWF4P
        subject_person_id: p_ChiKsep2uH21THh2zp3oDg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VsZ8852LX5E3n1kS1kiRcy
          claim_id: c_af56xx9jezZK9yJYiyWF4P
          source_id: s_JNjiZwAsSe5HnLiuwdHkdT
          stance: supports
          locator: CBDB:691317
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691317）
          source: &a1
            id: s_JNjiZwAsSe5HnLiuwdHkdT
            source_type: api_record
            title: 中国历代人物传记资料库：王慶華（CBDB 691317）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691317&o=json
            external_identifier: CBDB:691317
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.604Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_brH4gZUCjgSVfHoZsmK6At
        subject_person_id: p_ChiKsep2uH21THh2zp3oDg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶華，清人物。籍贯平江，身份为曲譜曲韻作家。（中国历代人物传记资料库 CBDB 691317）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sZgCXUUVNsRA6HrGf9mMyl
          claim_id: c_brH4gZUCjgSVfHoZsmK6At
          source_id: s_JNjiZwAsSe5HnLiuwdHkdT
          stance: supports
          locator: CBDB:691317
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

# 王慶華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶華 | accepted |
| bio.summary | 王慶華，清人物。籍贯平江，身份为曲譜曲韻作家。（中国历代人物传记资料库 CBDB 691317） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶華（CBDB 691317）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691317&o=json)
