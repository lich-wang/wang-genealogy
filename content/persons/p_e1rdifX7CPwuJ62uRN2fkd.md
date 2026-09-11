---
schema: wang-person/v1
id: p_e1rdifX7CPwuJ62uRN2fkd
status: active
merged_into: null
display_name: 王道成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7P6NKtszgE8scx22JE4Kho
        subject_person_id: p_e1rdifX7CPwuJ62uRN2fkd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tfKgQ3irPQtX7SToabFFgL
          claim_id: c_7P6NKtszgE8scx22JE4Kho
          source_id: s_RqNGaasTx3aPD3JK8uFMbW
          stance: supports
          locator: CBDB:454051
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（454051）
          source: &a1
            id: s_RqNGaasTx3aPD3JK8uFMbW
            source_type: api_record
            title: 中国历代人物传记资料库：王道成（CBDB 454051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454051&o=json
            external_identifier: CBDB:454051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.424Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NpYVoNXwFAjfNDDpC6TUpX
        subject_person_id: p_e1rdifX7CPwuJ62uRN2fkd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道成，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 454051）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t2LrxYE091LjQGVbL6XNsn
          claim_id: c_NpYVoNXwFAjfNDDpC6TUpX
          source_id: s_RqNGaasTx3aPD3JK8uFMbW
          stance: supports
          locator: CBDB:454051
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

# 王道成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道成 | accepted |
| bio.summary | 王道成，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 454051） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道成（CBDB 454051）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454051&o=json)
