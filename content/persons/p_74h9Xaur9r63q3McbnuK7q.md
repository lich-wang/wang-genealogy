---
schema: wang-person/v1
id: p_74h9Xaur9r63q3McbnuK7q
status: active
merged_into: null
display_name: 王德方
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XddQWKrmMhWcgTkkSzDeW5
        subject_person_id: p_74h9Xaur9r63q3McbnuK7q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德方
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_feqLydiUJfpjuJhEGNto7L
          claim_id: c_XddQWKrmMhWcgTkkSzDeW5
          source_id: s_4csSkcF5XksEy4n7vREt3w
          stance: supports
          locator: CBDB:690110
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690110）
          source: &a1
            id: s_4csSkcF5XksEy4n7vREt3w
            source_type: api_record
            title: 中国历代人物传记资料库：王德方（CBDB 690110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690110&o=json
            external_identifier: CBDB:690110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.576Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E4cDQGyiDFY3yJ5e8br5oK
        subject_person_id: p_74h9Xaur9r63q3McbnuK7q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德方，宋人物。籍贯臨城，曾任縣令。（中国历代人物传记资料库 CBDB 690110）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W5fpx20mD2oXmNjSMgWbVT
          claim_id: c_E4cDQGyiDFY3yJ5e8br5oK
          source_id: s_4csSkcF5XksEy4n7vREt3w
          stance: supports
          locator: CBDB:690110
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pJZsV2yTKcprY57MTsGhPz
        subject_person_id: p_5HLAwt21hgN7UKGzKG2BNZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_74h9Xaur9r63q3McbnuK7q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hLpnzjXEfbSkw4G6m6_MRN
          claim_id: c_pJZsV2yTKcprY57MTsGhPz
          source_id: s_o7Nk3SEYM5vBbhsK8ykKF_
          stance: supports
          locator: CBDB 亲属：父（KinPerson 22213）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_o7Nk3SEYM5vBbhsK8ykKF_
            source_type: api_record
            title: 中国历代人物传记资料库：王德方（CBDB 690110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690110&o=json
            external_identifier: CBDB:690110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5HLAwt21hgN7UKGzKG2BNZ
        status: active
        display_name: 王璘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德方

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德方 | accepted |
| bio.summary | 王德方，宋人物。籍贯臨城，曾任縣令。（中国历代人物传记资料库 CBDB 690110） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5HLAwt21hgN7UKGzKG2BNZ | 王璘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德方（CBDB 690110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690110&o=json)
