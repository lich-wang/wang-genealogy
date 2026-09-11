---
schema: wang-person/v1
id: p_YdfmtQYuaYNdFqb5gJrEpt
status: active
merged_into: null
display_name: 王朝相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yq1xhAsuSvVGKU8PnHpzUA
        subject_person_id: p_YdfmtQYuaYNdFqb5gJrEpt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g458yJQ3kBA4kNkSa6Z8GK
          claim_id: c_yq1xhAsuSvVGKU8PnHpzUA
          source_id: s_tTNYUD1qhomBk5GnZHE9mo
          stance: supports
          locator: CBDB:267262
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267262）
          source: &a1
            id: s_tTNYUD1qhomBk5GnZHE9mo
            source_type: api_record
            title: 中国历代人物传记资料库：王朝相（CBDB 267262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267262&o=json
            external_identifier: CBDB:267262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.779Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GCN877k56MNLKDqxDDLtHB
        subject_person_id: p_YdfmtQYuaYNdFqb5gJrEpt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝相，明人物。弘治九年進士，籍贯平陽。（中国历代人物传记资料库 CBDB 267262）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3kxVTiQ8hdmK2Ae9xaWH_F
          claim_id: c_GCN877k56MNLKDqxDDLtHB
          source_id: s_tTNYUD1qhomBk5GnZHE9mo
          stance: supports
          locator: CBDB:267262
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

# 王朝相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝相 | accepted |
| bio.summary | 王朝相，明人物。弘治九年進士，籍贯平陽。（中国历代人物传记资料库 CBDB 267262） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝相（CBDB 267262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267262&o=json)
