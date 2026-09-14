---
schema: wang-person/v1
id: p_zfn3sYKH5Tqqef4kMSEFmQ
status: active
merged_into: null
display_name: 王尚簡
cbdb_id: 269876
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_arHNxG9E9uUZTmoRfgPbC1
        subject_person_id: p_zfn3sYKH5Tqqef4kMSEFmQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚簡，明人物。弘治十五年進士，籍贯郟縣。（中国历代人物传记资料库 CBDB 269876）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_QJATynGlcpkV1cqwKdZpTM
          claim_id: c_arHNxG9E9uUZTmoRfgPbC1
          source_id: s_4ovsBErZAhxnU9oYAjUs2r
          stance: supports
          locator: CBDB:269876
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4ovsBErZAhxnU9oYAjUs2r
            source_type: api_record
            title: 中国历代人物传记资料库：王尚簡（CBDB 269876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269876&o=json
            external_identifier: CBDB:269876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_M37ef1WR6AtXpQAcAk4DDs
        subject_person_id: p_zfn3sYKH5Tqqef4kMSEFmQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Gkcj6R4P5frQz16BJh6b5J
          claim_id: c_M37ef1WR6AtXpQAcAk4DDs
          source_id: s_4ovsBErZAhxnU9oYAjUs2r
          stance: supports
          locator: CBDB:269876
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UaJc4bn2_a7IRHzKXPhlD8
        subject_person_id: p_BGWgef2Z8E8vPL41NM62UK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zfn3sYKH5Tqqef4kMSEFmQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LYoBHT7HDos9W2Y1-mO3W-
          claim_id: c_UaJc4bn2_a7IRHzKXPhlD8
          source_id: s_F96D1dkcvOgPO8rtLQGg73
          stance: supports
          locator: CBDB：兄弟 王尚絅（126574）之父／母 王璇
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚簡 与 王尚絅 为同胞（CBDB 记「兄」），王尚絅 之父／母即 王尚簡 之父／母。
          source:
            id: s_F96D1dkcvOgPO8rtLQGg73
            source_type: api_record
            title: 中国历代人物传记资料库：王尚簡（CBDB 269876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269876&o=json
            external_identifier: CBDB:269876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BGWgef2Z8E8vPL41NM62UK
        status: active
        display_name: 王璇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qMhjVD5ca04Q-UE3uQzYEY
        subject_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zfn3sYKH5Tqqef4kMSEFmQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_saZICwSNpFNQ61fAW414pp
          claim_id: c_qMhjVD5ca04Q-UE3uQzYEY
          source_id: s_F96D1dkcvOgPO8rtLQGg73
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126574 王尚絅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_F96D1dkcvOgPO8rtLQGg73
            source_type: api_record
            title: 中国历代人物传记资料库：王尚簡（CBDB 269876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269876&o=json
            external_identifier: CBDB:269876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ec1dckj7YLUcRUGq2Dbkdc
        status: active
        display_name: 王尚絅
        merged_into_person_id: null
---

# 王尚簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王尚簡，明人物。弘治十五年進士，籍贯郟縣。（中国历代人物传记资料库 CBDB 269876） | accepted |
| name.primary | 王尚簡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BGWgef2Z8E8vPL41NM62UK | 王璇 | accepted |
| other | p_Ec1dckj7YLUcRUGq2Dbkdc | 王尚絅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚簡（CBDB 269876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269876&o=json)
