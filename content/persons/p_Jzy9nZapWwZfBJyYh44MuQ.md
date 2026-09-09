---
schema: wang-person/v1
id: p_Jzy9nZapWwZfBJyYh44MuQ
status: active
merged_into: null
display_name: 王琮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_npt5yKtPmdQUJDBqvp7eC6
        subject_person_id: p_Jzy9nZapWwZfBJyYh44MuQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zrwZ7FPxsrqRhrAS8ahPAq
          claim_id: c_npt5yKtPmdQUJDBqvp7eC6
          source_id: s_GaBEDkbrHxJxk3yFFC3Eei
          stance: supports
          locator: CBDB:23650
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23650）
          source: &a1
            id: s_GaBEDkbrHxJxk3yFFC3Eei
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 23650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23650&o=json
            external_identifier: CBDB:23650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W1mF8BN6zcz9SHCgcm1VTb
        subject_person_id: p_Jzy9nZapWwZfBJyYh44MuQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bBDwEX5oDxZS7gNvT2xUWX
          claim_id: c_W1mF8BN6zcz9SHCgcm1VTb
          source_id: s_GaBEDkbrHxJxk3yFFC3Eei
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琮 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 23650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23650&o=json)
