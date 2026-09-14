---
schema: wang-person/v1
id: p_M1HQXEBWufASsGiebeytZc
status: active
merged_into: null
display_name: 王英
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nvJFcmxY9umCTS1L3uC8Wr
        subject_person_id: p_M1HQXEBWufASsGiebeytZc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1NCYHAApGfWYiXm7KGDmbr
          claim_id: c_nvJFcmxY9umCTS1L3uC8Wr
          source_id: s_XCQB8LTgq8k3aZRDDeH6Wm
          stance: supports
          locator: CBDB:273797
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273797）
          source: &a1
            id: s_XCQB8LTgq8k3aZRDDeH6Wm
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 273797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273797&o=json
            external_identifier: CBDB:273797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.908Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tcmQYR6Epwo147XSNVhd4Z
        subject_person_id: p_M1HQXEBWufASsGiebeytZc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英，明人物。弘治十八年進士，籍贯徐州。（中国历代人物传记资料库 CBDB 273797）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HS29T6XA3LYXvULFxfAFEy
          claim_id: c_tcmQYR6Epwo147XSNVhd4Z
          source_id: s_XCQB8LTgq8k3aZRDDeH6Wm
          stance: supports
          locator: CBDB:273797
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1BNXE4hKAkOsIUHSdVPLvV
        subject_person_id: p_j2iruMugSZPepsD4KQYC8f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M1HQXEBWufASsGiebeytZc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XXj-TVGhihxml78uSENehh
          claim_id: c_1BNXE4hKAkOsIUHSdVPLvV
          source_id: s_gL4eE-vcDXYUJyvIlpHZkK
          stance: supports
          locator: CBDB：兄弟 王鏜（201524）之父／母 王林
          quotation: null
          interpretation_note: 由兄弟关系推断：王英 与 王鏜 为同胞（CBDB 记「弟」），王鏜 之父／母即 王英 之父／母。
          source:
            id: s_gL4eE-vcDXYUJyvIlpHZkK
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 273797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273797&o=json
            external_identifier: CBDB:273797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j2iruMugSZPepsD4KQYC8f
        status: active
        display_name: 王林
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c__NtA-jGHZsSe47XW7fX1tC
        subject_person_id: p_M1HQXEBWufASsGiebeytZc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oUoF6dRdhe6WLHeR9E6Mai
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R7PHM6bB1QVdqlRzgKHGIK
          claim_id: c__NtA-jGHZsSe47XW7fX1tC
          source_id: s_gL4eE-vcDXYUJyvIlpHZkK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201524 王鏜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gL4eE-vcDXYUJyvIlpHZkK
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 273797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273797&o=json
            external_identifier: CBDB:273797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oUoF6dRdhe6WLHeR9E6Mai
        status: active
        display_name: 王鏜
        merged_into_person_id: null
---

# 王英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英 | accepted |
| bio.summary | 王英，明人物。弘治十八年進士，籍贯徐州。（中国历代人物传记资料库 CBDB 273797） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_j2iruMugSZPepsD4KQYC8f | 王林 | accepted |
| other | p_oUoF6dRdhe6WLHeR9E6Mai | 王鏜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王英（CBDB 273797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273797&o=json)
