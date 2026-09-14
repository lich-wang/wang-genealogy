---
schema: wang-person/v1
id: p_eoQ2Pe39un8i36axBmqEvr
status: active
merged_into: null
display_name: 王聘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NVc8cT8WRuoCURo6gDxEgF
        subject_person_id: p_eoQ2Pe39un8i36axBmqEvr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VuKE42RxobkgwuzastjYf8
          claim_id: c_NVc8cT8WRuoCURo6gDxEgF
          source_id: s_WzFHZ7A8eMtKqZDijQDuiM
          stance: supports
          locator: CBDB:213412
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213412）
          source: &a1
            id: s_WzFHZ7A8eMtKqZDijQDuiM
            source_type: api_record
            title: 中国历代人物传记资料库：王聘（CBDB 213412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213412&o=json
            external_identifier: CBDB:213412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.114Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JVJYbAwrLBzQ1iqFwcFsMt
        subject_person_id: p_eoQ2Pe39un8i36axBmqEvr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聘，明人物。萬曆二年進士，籍贯洛陽。（中国历代人物传记资料库 CBDB 213412）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ebR-Cmt0qNlW-dHC2Z1Vo5
          claim_id: c_JVJYbAwrLBzQ1iqFwcFsMt
          source_id: s_WzFHZ7A8eMtKqZDijQDuiM
          stance: supports
          locator: CBDB:213412
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_23Ml6Ud-4D-5USEa07uOGy
        subject_person_id: p_5J7f6wYMRMxs7athYCFm1K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eoQ2Pe39un8i36axBmqEvr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lgCWrNTgCssUBdk8ZM3bp1
          claim_id: c_23Ml6Ud-4D-5USEa07uOGy
          source_id: s_Z-b3oNFgCfYZslErJDczeO
          stance: supports
          locator: CBDB：兄弟 王職（206108）之父／母 王永臣
          quotation: null
          interpretation_note: 由兄弟关系推断：王聘 与 王職 为同胞（CBDB 记「弟」），王職 之父／母即 王聘 之父／母。
          source:
            id: s_Z-b3oNFgCfYZslErJDczeO
            source_type: api_record
            title: 中国历代人物传记资料库：王聘（CBDB 213412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213412&o=json
            external_identifier: CBDB:213412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5J7f6wYMRMxs7athYCFm1K
        status: active
        display_name: 王永臣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_aq_RGVN-mbh9qmBlNoFSG_
        subject_person_id: p_UuFL1gAwG68QUD39E4M5Wh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eoQ2Pe39un8i36axBmqEvr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g04yG0kE8A5bJfpznDKYLd
          claim_id: c_aq_RGVN-mbh9qmBlNoFSG_
          source_id: s_Z-b3oNFgCfYZslErJDczeO
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206108 王職）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Z-b3oNFgCfYZslErJDczeO
            source_type: api_record
            title: 中国历代人物传记资料库：王聘（CBDB 213412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213412&o=json
            external_identifier: CBDB:213412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UuFL1gAwG68QUD39E4M5Wh
        status: active
        display_name: 王職
        merged_into_person_id: null
---

# 王聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聘 | accepted |
| bio.summary | 王聘，明人物。萬曆二年進士，籍贯洛陽。（中国历代人物传记资料库 CBDB 213412） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5J7f6wYMRMxs7athYCFm1K | 王永臣 | accepted |
| other | p_UuFL1gAwG68QUD39E4M5Wh | 王職 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聘（CBDB 213412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213412&o=json)
