---
schema: wang-person/v1
id: p_juprEPsGwLt1knduVkFRyW
status: active
merged_into: null
display_name: 王恪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_99aPyhKYRCPCmhZtyoujLn
        subject_person_id: p_juprEPsGwLt1knduVkFRyW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U2GdwFfBYj4c4gKFj4KzzE
          claim_id: c_99aPyhKYRCPCmhZtyoujLn
          source_id: s_CzCdJWAbgQdT2AY4G2hN9w
          stance: supports
          locator: CBDB:343930
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343930）
          source: &a1
            id: s_CzCdJWAbgQdT2AY4G2hN9w
            source_type: api_record
            title: 中国历代人物传记资料库：王恪（CBDB 343930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343930&o=json
            external_identifier: CBDB:343930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TfK61cABUeudB9PfaVkDx1
        subject_person_id: p_juprEPsGwLt1knduVkFRyW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恪，清人物。明清進士進士，籍贯太倉直隸州，入仕進士。（中国历代人物传记资料库 CBDB 343930）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WZJBxR9_IRMXR8ok3ui7QU
          claim_id: c_TfK61cABUeudB9PfaVkDx1
          source_id: s_CzCdJWAbgQdT2AY4G2hN9w
          stance: supports
          locator: CBDB:343930
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

# 王恪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恪 | accepted |
| bio.summary | 王恪，清人物。明清進士進士，籍贯太倉直隸州，入仕進士。（中国历代人物传记资料库 CBDB 343930） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恪（CBDB 343930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343930&o=json)
