---
schema: wang-person/v1
id: p_APLfarcF4pzrUmHrV8LW16
status: active
merged_into: null
display_name: 王及
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G6FEAqz5P27acLJ9z4M3Mo
        subject_person_id: p_APLfarcF4pzrUmHrV8LW16
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王及
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A7vXkcLiM9i5hG386FUqSG
          claim_id: c_G6FEAqz5P27acLJ9z4M3Mo
          source_id: s_Y6L6yNFjs5v25Qy7x3NaNh
          stance: supports
          locator: CBDB:26712
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26712）
          source: &a1
            id: s_Y6L6yNFjs5v25Qy7x3NaNh
            source_type: api_record
            title: 中国历代人物传记资料库：王及（CBDB 26712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26712&o=json
            external_identifier: CBDB:26712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cmUV3aaGodyD14FsDPbNSD
        subject_person_id: p_APLfarcF4pzrUmHrV8LW16
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王及，宋人物。籍贯寧海，入仕進士，曾任朝奉大夫、國子監博士、國子監丞。（中国历代人物传记资料库 CBDB 26712）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SgWwhkJHfctAPm2hEmvlta
          claim_id: c_cmUV3aaGodyD14FsDPbNSD
          source_id: s_Y6L6yNFjs5v25Qy7x3NaNh
          stance: supports
          locator: CBDB:26712
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

# 王及

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王及 | accepted |
| bio.summary | 王及，宋人物。籍贯寧海，入仕進士，曾任朝奉大夫、國子監博士、國子監丞。（中国历代人物传记资料库 CBDB 26712） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王及（CBDB 26712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26712&o=json)
