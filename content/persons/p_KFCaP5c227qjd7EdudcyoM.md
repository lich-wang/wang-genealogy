---
schema: wang-person/v1
id: p_KFCaP5c227qjd7EdudcyoM
status: active
merged_into: null
display_name: 王興國
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HVT34fUgbPrrade3iShJMv
        subject_person_id: p_KFCaP5c227qjd7EdudcyoM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zEkWqREw6hPvGzC81Md274
          claim_id: c_HVT34fUgbPrrade3iShJMv
          source_id: s_vRTENSVkBEfwWECzrfXUHp
          stance: supports
          locator: CBDB:640031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640031）
          source: &a1
            id: s_vRTENSVkBEfwWECzrfXUHp
            source_type: api_record
            title: 中国历代人物传记资料库：王興國（CBDB 640031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640031&o=json
            external_identifier: CBDB:640031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.014Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8Gr9hk7mUyHgLAL9USeHEu
        subject_person_id: p_KFCaP5c227qjd7EdudcyoM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興國，清人物。籍贯金山，曾任知州。（中国历代人物传记资料库 CBDB 640031）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZgDW55mZpI-PPkIa__j8Cf
          claim_id: c_8Gr9hk7mUyHgLAL9USeHEu
          source_id: s_vRTENSVkBEfwWECzrfXUHp
          stance: supports
          locator: CBDB:640031
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

# 王興國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興國 | accepted |
| bio.summary | 王興國，清人物。籍贯金山，曾任知州。（中国历代人物传记资料库 CBDB 640031） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王興國（CBDB 640031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640031&o=json)
