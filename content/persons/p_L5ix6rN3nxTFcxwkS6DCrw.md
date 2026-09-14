---
schema: wang-person/v1
id: p_L5ix6rN3nxTFcxwkS6DCrw
status: active
merged_into: null
display_name: 王言
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ocCAHLbF6AZ6aCWJfDfnwi
        subject_person_id: p_L5ix6rN3nxTFcxwkS6DCrw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eBH8oaS3KKLTWgP5DQMEHF
          claim_id: c_ocCAHLbF6AZ6aCWJfDfnwi
          source_id: s_NFeu2qRUvP4kqLdNa9BgQ1
          stance: supports
          locator: CBDB:221463
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221463）
          source: &a1
            id: s_NFeu2qRUvP4kqLdNa9BgQ1
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 221463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221463&o=json
            external_identifier: CBDB:221463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9p21MmDPhC7UebPkZa8Sji
        subject_person_id: p_L5ix6rN3nxTFcxwkS6DCrw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言，明人物。萬曆八年進士，籍贯解州。（中国历代人物传记资料库 CBDB 221463）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DJLnMfJFllAh3rpGMVDyyC
          claim_id: c_9p21MmDPhC7UebPkZa8Sji
          source_id: s_NFeu2qRUvP4kqLdNa9BgQ1
          stance: supports
          locator: CBDB:221463
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fj3WaW2ciUlZjohcsGJEXm
        subject_person_id: p_dr5THMYZGs7zW675Bw8A4u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L5ix6rN3nxTFcxwkS6DCrw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NWZAlrgQUx8T2VcRXt6TJB
          claim_id: c_fj3WaW2ciUlZjohcsGJEXm
          source_id: s_V3hGQfYAbb38mfUk6JuCmy
          stance: supports
          locator: CBDB：兄弟 王明（126580）之父／母 王玉圭
          quotation: null
          interpretation_note: 由兄弟关系推断：王言 与 王明 为同胞（CBDB 记「弟」），王明 之父／母即 王言 之父／母。
          source:
            id: s_V3hGQfYAbb38mfUk6JuCmy
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 221463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221463&o=json
            external_identifier: CBDB:221463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dr5THMYZGs7zW675Bw8A4u
        status: active
        display_name: 王玉圭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_7hRH8SIk-QbvwbPKvjAE2X
        subject_person_id: p_L5ix6rN3nxTFcxwkS6DCrw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cdvLWdUT8xwQ2GV4vwbiSj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y7J9v2IL29i1rZl4rpaPin
          claim_id: c_7hRH8SIk-QbvwbPKvjAE2X
          source_id: s_V3hGQfYAbb38mfUk6JuCmy
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126580 王明）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_V3hGQfYAbb38mfUk6JuCmy
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 221463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221463&o=json
            external_identifier: CBDB:221463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cdvLWdUT8xwQ2GV4vwbiSj
        status: active
        display_name: 王明
        merged_into_person_id: null
---

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| bio.summary | 王言，明人物。萬曆八年進士，籍贯解州。（中国历代人物传记资料库 CBDB 221463） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dr5THMYZGs7zW675Bw8A4u | 王玉圭 | accepted |
| other | p_cdvLWdUT8xwQ2GV4vwbiSj | 王明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王言（CBDB 221463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221463&o=json)
