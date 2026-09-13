---
schema: wang-person/v1
id: p_LSAQbntELyjPo3DMMA6Fjf
status: active
merged_into: null
display_name: 王舂
cbdb_id: 268121
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xsAZugCuRDgCDRd6h73Xgj
        subject_person_id: p_LSAQbntELyjPo3DMMA6Fjf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舂，明人物。弘治九年進士。（中国历代人物传记资料库 CBDB 268121）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs__cJw5LJJIa83wF-I1Y3HTg
          claim_id: c_xsAZugCuRDgCDRd6h73Xgj
          source_id: s_BosCAXULNQ9NZvhnoDi6ma
          stance: supports
          locator: CBDB:268121
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BosCAXULNQ9NZvhnoDi6ma
            source_type: api_record
            title: 中国历代人物传记资料库：王舂（CBDB 268121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268121&o=json
            external_identifier: CBDB:268121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vhxpvo6M3MF9PnUYkjrma5
        subject_person_id: p_LSAQbntELyjPo3DMMA6Fjf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GZf8QZtnT47Y4TLuvCDK78
          claim_id: c_vhxpvo6M3MF9PnUYkjrma5
          source_id: s_BosCAXULNQ9NZvhnoDi6ma
          stance: supports
          locator: CBDB:268121
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
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

# 王舂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王舂，明人物。弘治九年進士。（中国历代人物传记资料库 CBDB 268121） | accepted |
| name.primary | 王舂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舂（CBDB 268121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268121&o=json)
