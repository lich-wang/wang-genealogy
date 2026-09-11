---
schema: wang-person/v1
id: p_6b89831cMWKeFnXTBKj7Kp
status: active
merged_into: null
display_name: 王土豪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gNiSMwXA55AT36KUPwKAZs
        subject_person_id: p_6b89831cMWKeFnXTBKj7Kp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王土豪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zjZoQJbuhtGb3hgHQiDjTB
          claim_id: c_gNiSMwXA55AT36KUPwKAZs
          source_id: s_B7pSdCLgbNFLve4cEVsBnZ
          stance: supports
          locator: CBDB:636680
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636680）
          source: &a1
            id: s_B7pSdCLgbNFLve4cEVsBnZ
            source_type: api_record
            title: 中国历代人物传记资料库：王土豪（CBDB 636680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636680&o=json
            external_identifier: CBDB:636680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.066Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VfYS3sn4KMB4pWstHrBYxv
        subject_person_id: p_6b89831cMWKeFnXTBKj7Kp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王土豪，清人物。籍贯曹州府，曾任訓導。（中国历代人物传记资料库 CBDB 636680）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VaZwwfK8rc3UVsZJT_iCH8
          claim_id: c_VfYS3sn4KMB4pWstHrBYxv
          source_id: s_B7pSdCLgbNFLve4cEVsBnZ
          stance: supports
          locator: CBDB:636680
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

# 王土豪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王土豪 | accepted |
| bio.summary | 王土豪，清人物。籍贯曹州府，曾任訓導。（中国历代人物传记资料库 CBDB 636680） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王土豪（CBDB 636680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636680&o=json)
