---
schema: wang-person/v1
id: p_Ls4x2CUPH6eQC33aPAGjoJ
status: active
merged_into: null
display_name: 王恢翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9pP4rgkBZvpoQ12v6pPanE
        subject_person_id: p_Ls4x2CUPH6eQC33aPAGjoJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恢翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wCCdQaMv9TdcTqVGVj1LKF
          claim_id: c_9pP4rgkBZvpoQ12v6pPanE
          source_id: s_SrbXQLhSGBBq3nk7gNGbd2
          stance: supports
          locator: CBDB:637829
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637829）
          source: &a1
            id: s_SrbXQLhSGBBq3nk7gNGbd2
            source_type: api_record
            title: 中国历代人物传记资料库：王恢翰（CBDB 637829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637829&o=json
            external_identifier: CBDB:637829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.435Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VDoU2PCNP9Q4SiiXMdB2PS
        subject_person_id: p_Ls4x2CUPH6eQC33aPAGjoJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恢翰，清人物。籍贯慶遠府，曾任訓導。（中国历代人物传记资料库 CBDB 637829）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aHMrTWA9tADwZysgZIDX83
          claim_id: c_VDoU2PCNP9Q4SiiXMdB2PS
          source_id: s_SrbXQLhSGBBq3nk7gNGbd2
          stance: supports
          locator: CBDB:637829
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

# 王恢翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恢翰 | accepted |
| bio.summary | 王恢翰，清人物。籍贯慶遠府，曾任訓導。（中国历代人物传记资料库 CBDB 637829） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恢翰（CBDB 637829）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637829&o=json)
