---
schema: wang-person/v1
id: p_4RKyBrxN2M8zWuVNpAHZBn
status: active
merged_into: null
display_name: 王璉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vZfQLQrADEACq4xYvsaqEz
        subject_person_id: p_4RKyBrxN2M8zWuVNpAHZBn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qx75ixvDBEqKATzEWaChV4
          claim_id: c_vZfQLQrADEACq4xYvsaqEz
          source_id: s_X8JqUJHDFdtL2TmYc4g6u9
          stance: supports
          locator: CBDB:270234
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270234）
          source: &a1
            id: s_X8JqUJHDFdtL2TmYc4g6u9
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 270234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270234&o=json
            external_identifier: CBDB:270234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.826Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fZGe3Z4AVXA6TFZbZK8gUb
        subject_person_id: p_4RKyBrxN2M8zWuVNpAHZBn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉，明人物。弘治十五年進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 270234）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4aoYo7w7NUZ2081s8hSCXe
          claim_id: c_fZGe3Z4AVXA6TFZbZK8gUb
          source_id: s_X8JqUJHDFdtL2TmYc4g6u9
          stance: supports
          locator: CBDB:270234
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HhEhADgVzcU4-Sig0OYd3p
        subject_person_id: p_PGZtNCp6fX43UKKVunQyUd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4RKyBrxN2M8zWuVNpAHZBn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dTAYQavYO2wl-vrgjvd2ty
          claim_id: c_HhEhADgVzcU4-Sig0OYd3p
          source_id: s_LdDVn5qXiEBiNPKxNmGRKW
          stance: supports
          locator: CBDB：兄弟 王濟（34667）之父／母 王文奎
          quotation: null
          interpretation_note: 由兄弟关系推断：王璉 与 王濟 为同胞（CBDB 记「弟」），王濟 之父／母即 王璉 之父／母。
          source:
            id: s_LdDVn5qXiEBiNPKxNmGRKW
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 270234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270234&o=json
            external_identifier: CBDB:270234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PGZtNCp6fX43UKKVunQyUd
        status: active
        display_name: 王文奎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_gmq4V7lErwCzvI8QdlREct
        subject_person_id: p_4RKyBrxN2M8zWuVNpAHZBn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kjR9d6-NpliEFBOj-YYbPm
          claim_id: c_gmq4V7lErwCzvI8QdlREct
          source_id: s_LdDVn5qXiEBiNPKxNmGRKW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34667 王濟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LdDVn5qXiEBiNPKxNmGRKW
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 270234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270234&o=json
            external_identifier: CBDB:270234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CF5LJP7gMSDjjxZDLTJKd5
        status: active
        display_name: 王濟
        merged_into_person_id: null
---

# 王璉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璉 | accepted |
| bio.summary | 王璉，明人物。弘治十五年進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 270234） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PGZtNCp6fX43UKKVunQyUd | 王文奎 | accepted |
| other | p_CF5LJP7gMSDjjxZDLTJKd5 | 王濟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璉（CBDB 270234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270234&o=json)
