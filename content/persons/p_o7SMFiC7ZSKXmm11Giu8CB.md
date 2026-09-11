---
schema: wang-person/v1
id: p_o7SMFiC7ZSKXmm11Giu8CB
status: active
merged_into: null
display_name: 王貞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_emRnjjiBrxaKrTmJ4tvb83
        subject_person_id: p_o7SMFiC7ZSKXmm11Giu8CB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dRDhTZ8pH6B3qCMLjJjsrJ
          claim_id: c_emRnjjiBrxaKrTmJ4tvb83
          source_id: s_R7UsTE7DCpGo7Nia1KXTf1
          stance: supports
          locator: CBDB:568642
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568642）
          source: &a1
            id: s_R7UsTE7DCpGo7Nia1KXTf1
            source_type: api_record
            title: 中国历代人物传记资料库：王貞（CBDB 568642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568642&o=json
            external_identifier: CBDB:568642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.835Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DTxDdgGaoRyMQdNxX1L5KL
        subject_person_id: p_o7SMFiC7ZSKXmm11Giu8CB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貞，清人物。籍贯太倉直隸州。（中国历代人物传记资料库 CBDB 568642）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AO4AUfe2VVbxNoJWO10Wj0
          claim_id: c_DTxDdgGaoRyMQdNxX1L5KL
          source_id: s_R7UsTE7DCpGo7Nia1KXTf1
          stance: supports
          locator: CBDB:568642
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

# 王貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貞 | accepted |
| bio.summary | 王貞，清人物。籍贯太倉直隸州。（中国历代人物传记资料库 CBDB 568642） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貞（CBDB 568642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568642&o=json)
