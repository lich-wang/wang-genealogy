---
schema: wang-person/v1
id: p_PKPnxZYET1wxYB5DroJAiD
status: active
merged_into: null
display_name: 王暖
cbdb_id: 247368
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_anD2TXD2BqmaTYY7JYBr8p
        subject_person_id: p_PKPnxZYET1wxYB5DroJAiD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暖，明人物。成化八年進士，籍贯嵊縣。（中国历代人物传记资料库 CBDB 247368）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Q_q3aBYEbYu8C_fgv4uDF_
          claim_id: c_anD2TXD2BqmaTYY7JYBr8p
          source_id: s_rdWEACk2s6Ja79PbimLnmo
          stance: supports
          locator: CBDB:247368
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rdWEACk2s6Ja79PbimLnmo
            source_type: api_record
            title: 中国历代人物传记资料库：王暖（CBDB 247368）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247368&o=json
            external_identifier: CBDB:247368
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4QckHgezU6SsKcihmtCRZY
        subject_person_id: p_PKPnxZYET1wxYB5DroJAiD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_V7PsjQi37E8zFnRRSyntrf
          claim_id: c_4QckHgezU6SsKcihmtCRZY
          source_id: s_rdWEACk2s6Ja79PbimLnmo
          stance: supports
          locator: CBDB:247368
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_utQ6yQZFfXuIeHywybgnFi
        subject_person_id: p_vNNRVNM4fb2RVGCGj65JaG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PKPnxZYET1wxYB5DroJAiD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S4pwj37sE6fJmWEUVaYKKB
          claim_id: c_utQ6yQZFfXuIeHywybgnFi
          source_id: s_RBFutxg_UpzVx0GJG7f-PR
          stance: supports
          locator: CBDB：兄弟 王暄（199620）之父／母 王鈍
          quotation: null
          interpretation_note: 由兄弟关系推断：王暖 与 王暄 为同胞（CBDB 记「弟」），王暄 之父／母即 王暖 之父／母。
          source:
            id: s_RBFutxg_UpzVx0GJG7f-PR
            source_type: api_record
            title: 中国历代人物传记资料库：王暖（CBDB 247368）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247368&o=json
            external_identifier: CBDB:247368
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vNNRVNM4fb2RVGCGj65JaG
        status: active
        display_name: 王鈍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2cAnIOyze1Lvd1qK-r0aIX
        subject_person_id: p_PKPnxZYET1wxYB5DroJAiD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__gGldxV_wsNEh8y0U_3DnQ
          claim_id: c_2cAnIOyze1Lvd1qK-r0aIX
          source_id: s_RBFutxg_UpzVx0GJG7f-PR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199620 王暄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RBFutxg_UpzVx0GJG7f-PR
            source_type: api_record
            title: 中国历代人物传记资料库：王暖（CBDB 247368）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247368&o=json
            external_identifier: CBDB:247368
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dHFBy8GTgBZpvwKJGG8hsX
        status: active
        display_name: 王暄
        merged_into_person_id: null
---

# 王暖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王暖，明人物。成化八年進士，籍贯嵊縣。（中国历代人物传记资料库 CBDB 247368） | accepted |
| name.primary | 王暖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vNNRVNM4fb2RVGCGj65JaG | 王鈍 | accepted |
| other | p_dHFBy8GTgBZpvwKJGG8hsX | 王暄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王暖（CBDB 247368）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247368&o=json)
