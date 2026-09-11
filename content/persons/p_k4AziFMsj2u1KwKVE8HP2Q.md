---
schema: wang-person/v1
id: p_k4AziFMsj2u1KwKVE8HP2Q
status: active
merged_into: null
display_name: 王錫田
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JofUqG5JgmGP3rTDorWYqD
        subject_person_id: p_k4AziFMsj2u1KwKVE8HP2Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫田
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a9FJHq91NQ36JfUCMasPg7
          claim_id: c_JofUqG5JgmGP3rTDorWYqD
          source_id: s_2J7vhdzET7Cth1Xa9Ad83M
          stance: supports
          locator: CBDB:640631
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640631）
          source: &a1
            id: s_2J7vhdzET7Cth1Xa9Ad83M
            source_type: api_record
            title: 中国历代人物传记资料库：王錫田（CBDB 640631）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640631&o=json
            external_identifier: CBDB:640631
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.162Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g4cu5HSh3hZw1ywvHx25RE
        subject_person_id: p_k4AziFMsj2u1KwKVE8HP2Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫田，清人物。籍贯宣化，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 640631）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Jkx7_09XCNoWzAACOt70El
          claim_id: c_g4cu5HSh3hZw1ywvHx25RE
          source_id: s_2J7vhdzET7Cth1Xa9Ad83M
          stance: supports
          locator: CBDB:640631
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

# 王錫田

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫田 | accepted |
| bio.summary | 王錫田，清人物。籍贯宣化，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 640631） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫田（CBDB 640631）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640631&o=json)
