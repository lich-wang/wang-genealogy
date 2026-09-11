---
schema: wang-person/v1
id: p_xdzttneyqKBTqwP11RYHHR
status: active
merged_into: null
display_name: 王耕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i2v3izvG3B43ceFUFD26ho
        subject_person_id: p_xdzttneyqKBTqwP11RYHHR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mKBPhwPKiJuRMRVtUgjpPp
          claim_id: c_i2v3izvG3B43ceFUFD26ho
          source_id: s_zNwH2H1DQozmC8CKw95h4K
          stance: supports
          locator: CBDB:505673
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（505673）
          source: &a1
            id: s_zNwH2H1DQozmC8CKw95h4K
            source_type: api_record
            title: 中国历代人物传记资料库：王耕（CBDB 505673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505673&o=json
            external_identifier: CBDB:505673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A7T62fWUMsF21sBw4hsLMi
        subject_person_id: p_xdzttneyqKBTqwP11RYHHR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耕，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 505673）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aXVElL_DfmhBEswHpJGq-H
          claim_id: c_A7T62fWUMsF21sBw4hsLMi
          source_id: s_zNwH2H1DQozmC8CKw95h4K
          stance: supports
          locator: CBDB:505673
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

# 王耕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王耕 | accepted |
| bio.summary | 王耕，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 505673） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王耕（CBDB 505673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505673&o=json)
