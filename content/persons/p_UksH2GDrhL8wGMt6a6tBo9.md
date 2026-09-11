---
schema: wang-person/v1
id: p_UksH2GDrhL8wGMt6a6tBo9
status: active
merged_into: null
display_name: 王棠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DeAqEk5skputHhzkmpUc3Y
        subject_person_id: p_UksH2GDrhL8wGMt6a6tBo9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SpqKrszbKL6rFExo4eM8cy
          claim_id: c_DeAqEk5skputHhzkmpUc3Y
          source_id: s_116BDyRVWkEsx5YZDc9i95
          stance: supports
          locator: CBDB:22138
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22138）
          source: &a1
            id: s_116BDyRVWkEsx5YZDc9i95
            source_type: api_record
            title: 中国历代人物传记资料库：王棠（CBDB 22138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22138&o=json
            external_identifier: CBDB:22138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nToQKFt8ULiiKPF7LQG4at
        subject_person_id: p_UksH2GDrhL8wGMt6a6tBo9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棠，宋人物。籍贯吳縣，身份为良吏;循吏，入仕胥吏出職，曾任左朝奉郎、左朝請大夫、右朝散郎。（中国历代人物传记资料库 CBDB 22138）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WvIZMoNMn1bgkvAOuhS2NU
          claim_id: c_nToQKFt8ULiiKPF7LQG4at
          source_id: s_116BDyRVWkEsx5YZDc9i95
          stance: supports
          locator: CBDB:22138
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
  descendants:
    - claim:
        id: c_mNYSGigcmGtErdHZtvR5cQ
        subject_person_id: p_UksH2GDrhL8wGMt6a6tBo9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Cu7F7Knax7KYQ6hrBfo9UZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__Fb1GXraLNB5coN8oY4pyi
          claim_id: c_mNYSGigcmGtErdHZtvR5cQ
          source_id: s_CCcrAmHM7gHbH174EQN15r
          stance: supports
          locator: CBDB 双向互证（祖父 王棠 ⇄ 孫 王大有）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_CCcrAmHM7gHbH174EQN15r
            source_type: api_record
            title: 中国历代人物传记资料库：王大有（CBDB 22144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22144&o=json
            external_identifier: CBDB:22144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.834Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Cu7F7Knax7KYQ6hrBfo9UZ
        status: active
        display_name: 王大有
        merged_into_person_id: null
    - claim:
        id: c_lYqV1mI_PLbDws09bpddty
        subject_person_id: p_UksH2GDrhL8wGMt6a6tBo9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4ZFWTE12ciF8FWWzCr37vg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9QmaTfomxsR9jm19jkko1_
          claim_id: c_lYqV1mI_PLbDws09bpddty
          source_id: s_116BDyRVWkEsx5YZDc9i95
          stance: supports
          locator: CBDB 双向互证（孫 王保大 ⇄ 祖父 王棠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_4ZFWTE12ciF8FWWzCr37vg
        status: active
        display_name: 王保大
        merged_into_person_id: null
  other: []
---

# 王棠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棠 | accepted |
| bio.summary | 王棠，宋人物。籍贯吳縣，身份为良吏;循吏，入仕胥吏出職，曾任左朝奉郎、左朝請大夫、右朝散郎。（中国历代人物传记资料库 CBDB 22138） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Cu7F7Knax7KYQ6hrBfo9UZ | 王大有 | accepted |
| descendants | p_4ZFWTE12ciF8FWWzCr37vg | 王保大 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大有（CBDB 22144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22144&o=json)
- [中国历代人物传记资料库：王棠（CBDB 22138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22138&o=json)
