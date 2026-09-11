---
schema: wang-person/v1
id: p_TfqhihxM5VYnk6jgYw9ZHt
status: active
merged_into: null
display_name: 王直
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XadhXavSgWTa3HnUwLBCCC
        subject_person_id: p_TfqhihxM5VYnk6jgYw9ZHt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BTNJxDHykBRti3sd3jb76x
          claim_id: c_XadhXavSgWTa3HnUwLBCCC
          source_id: s_HbnHazPrCYcNLHcLjFywSs
          stance: supports
          locator: CBDB:39416
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39416）
          source: &a1
            id: s_HbnHazPrCYcNLHcLjFywSs
            source_type: api_record
            title: 中国历代人物传记资料库：王直（CBDB 39416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39416&o=json
            external_identifier: CBDB:39416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.611Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PDqehLKoNjSSZuGkdQTWQw
        subject_person_id: p_TfqhihxM5VYnk6jgYw9ZHt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王直，宋人物。曾任殿中省丞、發運判官、淮南江浙荊湖茶鹽礬稅、都大發運判官。（中国历代人物传记资料库 CBDB 39416）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ool-GyLHstFkFwn-VOBy4g
          claim_id: c_PDqehLKoNjSSZuGkdQTWQw
          source_id: s_HbnHazPrCYcNLHcLjFywSs
          stance: supports
          locator: CBDB:39416
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

# 王直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王直 | accepted |
| bio.summary | 王直，宋人物。曾任殿中省丞、發運判官、淮南江浙荊湖茶鹽礬稅、都大發運判官。（中国历代人物传记资料库 CBDB 39416） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王直（CBDB 39416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39416&o=json)
