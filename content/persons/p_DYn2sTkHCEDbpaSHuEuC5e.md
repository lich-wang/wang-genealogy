---
schema: wang-person/v1
id: p_DYn2sTkHCEDbpaSHuEuC5e
status: active
merged_into: null
display_name: 王謐
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C4YR5WtnGezXw8ACdyH5Cq
        subject_person_id: p_DYn2sTkHCEDbpaSHuEuC5e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hYLFyjJ7CLxtz3JoxCoqqQ
          claim_id: c_C4YR5WtnGezXw8ACdyH5Cq
          source_id: s_PzmkJBxD656b3F9v7bVzPz
          stance: supports
          locator: CBDB:331283
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331283）
          source: &a1
            id: s_PzmkJBxD656b3F9v7bVzPz
            source_type: api_record
            title: 中国历代人物传记资料库：王謐（CBDB 331283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331283&o=json
            external_identifier: CBDB:331283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.364Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ErJyRjHnpthWwMSQ7nhkg4
        subject_person_id: p_DYn2sTkHCEDbpaSHuEuC5e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謐，明人物。嘉靖四十四年進士，籍贯全州。（中国历代人物传记资料库 CBDB 331283）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JxrF-pKxHofnCF6Zd4M5WS
          claim_id: c_ErJyRjHnpthWwMSQ7nhkg4
          source_id: s_PzmkJBxD656b3F9v7bVzPz
          stance: supports
          locator: CBDB:331283
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-J1p8EcgNt8M-6P8jUUKJJ
        subject_person_id: p_DYn2sTkHCEDbpaSHuEuC5e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2AHmF8AUPM19K8SgoBBTUY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F2L3b6bnUJ2lsVuFYenmc0
          claim_id: c_-J1p8EcgNt8M-6P8jUUKJJ
          source_id: s_PzmkJBxD656b3F9v7bVzPz
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第九十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2AHmF8AUPM19K8SgoBBTUY
        status: active
        display_name: 王貽德
        merged_into_person_id: null
    - claim:
        id: c_vPadu0nx9SBASovEUe99RU
        subject_person_id: p_DYn2sTkHCEDbpaSHuEuC5e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GxHKNa17CTs5pZRJ5uqRQY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sG9koenwrCLq-YJq7wgP43
          claim_id: c_vPadu0nx9SBASovEUe99RU
          source_id: s_OaAU9ArGk7PkN80XAUEN34
          stance: supports
          locator: CBDB：兄弟 王貽德（205304）之父／母 王謐
          quotation: null
          interpretation_note: 由兄弟关系推断：王峻德 与 王貽德 为同胞（CBDB 记「弟」），王貽德 之父／母即 王峻德 之父／母。
          source:
            id: s_OaAU9ArGk7PkN80XAUEN34
            source_type: api_record
            title: 中国历代人物传记资料库：王峻德（CBDB 331286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331286&o=json
            external_identifier: CBDB:331286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GxHKNa17CTs5pZRJ5uqRQY
        status: active
        display_name: 王峻德
        merged_into_person_id: null
    - claim:
        id: c_536IHeB-Pgk_5ipcgj1y0i
        subject_person_id: p_DYn2sTkHCEDbpaSHuEuC5e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kSn9qye62cR1yUgwzLX6AY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wPvPAAvCi5AaOQP5e0n_ZR
          claim_id: c_536IHeB-Pgk_5ipcgj1y0i
          source_id: s_kWp4s3ITkI_OSQjEHORtQh
          stance: supports
          locator: CBDB：兄弟 王貽德（205304）之父／母 王謐
          quotation: null
          interpretation_note: 由兄弟关系推断：王玄德 与 王貽德 为同胞（CBDB 记「弟」），王貽德 之父／母即 王玄德 之父／母。
          source:
            id: s_kWp4s3ITkI_OSQjEHORtQh
            source_type: api_record
            title: 中国历代人物传记资料库：王玄德（CBDB 331287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331287&o=json
            external_identifier: CBDB:331287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kSn9qye62cR1yUgwzLX6AY
        status: active
        display_name: 王玄德
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王謐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謐 | accepted |
| bio.summary | 王謐，明人物。嘉靖四十四年進士，籍贯全州。（中国历代人物传记资料库 CBDB 331283） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2AHmF8AUPM19K8SgoBBTUY | 王貽德 | accepted |
| children | p_GxHKNa17CTs5pZRJ5uqRQY | 王峻德 | accepted |
| children | p_kSn9qye62cR1yUgwzLX6AY | 王玄德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王峻德（CBDB 331286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331286&o=json)
- [中国历代人物传记资料库：王謐（CBDB 331283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331283&o=json)
- [中国历代人物传记资料库：王玄德（CBDB 331287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331287&o=json)
