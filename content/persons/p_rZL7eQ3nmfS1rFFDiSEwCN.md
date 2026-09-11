---
schema: wang-person/v1
id: p_rZL7eQ3nmfS1rFFDiSEwCN
status: active
merged_into: null
display_name: 王月
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WXuwtj6ov64Xc9qYeosV3F
        subject_person_id: p_rZL7eQ3nmfS1rFFDiSEwCN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王月
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CriaDWGGGAqDrVNiXA3hJz
          claim_id: c_WXuwtj6ov64Xc9qYeosV3F
          source_id: s_jQH886DRYMCfMHnMQFx6wy
          stance: supports
          locator: CBDB:566422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（566422）
          source: &a1
            id: s_jQH886DRYMCfMHnMQFx6wy
            source_type: api_record
            title: 中国历代人物传记资料库：王月（CBDB 566422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566422&o=json
            external_identifier: CBDB:566422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3LLdAUmoZkcVjGJKzfotsF
        subject_person_id: p_rZL7eQ3nmfS1rFFDiSEwCN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王月，明人物。籍贯行四川行承宣布政使司。（中国历代人物传记资料库 CBDB 566422）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kwarlptOKX_kQBozLdomQt
          claim_id: c_3LLdAUmoZkcVjGJKzfotsF
          source_id: s_jQH886DRYMCfMHnMQFx6wy
          stance: supports
          locator: CBDB:566422
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

# 王月

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王月 | accepted |
| bio.summary | 王月，明人物。籍贯行四川行承宣布政使司。（中国历代人物传记资料库 CBDB 566422） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王月（CBDB 566422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566422&o=json)
