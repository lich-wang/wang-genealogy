---
schema: wang-person/v1
id: p_mPJ5F3MMZrGAAvNTPSFyR8
status: active
merged_into: null
display_name: 王進賢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FefQDEzpcKtUqaXFjdHyxJ
        subject_person_id: p_mPJ5F3MMZrGAAvNTPSFyR8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5wybKJNEmcznS6aDo2NQLT
          claim_id: c_FefQDEzpcKtUqaXFjdHyxJ
          source_id: s_Wvbx5xX2to9BaTzZN3ymyR
          stance: supports
          locator: CBDB:285852
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285852）
          source: &a1
            id: s_Wvbx5xX2to9BaTzZN3ymyR
            source_type: api_record
            title: 中国历代人物传记资料库：王進賢（CBDB 285852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285852&o=json
            external_identifier: CBDB:285852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QU9PLtqHvC3oLCNbmYK2Xu
        subject_person_id: p_mPJ5F3MMZrGAAvNTPSFyR8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進賢，明人物。正德十六年進士，籍贯交河。（中国历代人物传记资料库 CBDB 285852）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9ZqTUri-8DuNu8j3YtkfqO
          claim_id: c_QU9PLtqHvC3oLCNbmYK2Xu
          source_id: s_Wvbx5xX2to9BaTzZN3ymyR
          stance: supports
          locator: CBDB:285852
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_H6i580eqKx0hn6UdH4FtfN
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mPJ5F3MMZrGAAvNTPSFyR8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A0q8kZlIO3P7HOBV6HsNH2
          claim_id: c_H6i580eqKx0hn6UdH4FtfN
          source_id: s_Eh_Zbo7zBaHYxiRNmLPvQ6
          stance: supports
          locator: CBDB：兄弟 王重賢（202269）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王進賢 与 王重賢 为同胞（CBDB 记「兄」），王重賢 之父／母即 王進賢 之父／母。
          source:
            id: s_Eh_Zbo7zBaHYxiRNmLPvQ6
            source_type: api_record
            title: 中国历代人物传记资料库：王進賢（CBDB 285852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285852&o=json
            external_identifier: CBDB:285852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yeJtEcC7cBaU9sVyVGy7xj
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_g6PHCo4TaIZhSAssPe6Q7g
        subject_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mPJ5F3MMZrGAAvNTPSFyR8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hagEp58DSsRZ9v3Sk6QZ5u
          claim_id: c_g6PHCo4TaIZhSAssPe6Q7g
          source_id: s_Eh_Zbo7zBaHYxiRNmLPvQ6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202269 王重賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Eh_Zbo7zBaHYxiRNmLPvQ6
            source_type: api_record
            title: 中国历代人物传记资料库：王進賢（CBDB 285852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285852&o=json
            external_identifier: CBDB:285852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HgaWqM5nscyN4tzrPQd5UX
        status: active
        display_name: 王重賢
        merged_into_person_id: null
---

# 王進賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進賢 | accepted |
| bio.summary | 王進賢，明人物。正德十六年進士，籍贯交河。（中国历代人物传记资料库 CBDB 285852） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yeJtEcC7cBaU9sVyVGy7xj | 王鉞 | accepted |
| other | p_HgaWqM5nscyN4tzrPQd5UX | 王重賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王進賢（CBDB 285852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285852&o=json)
