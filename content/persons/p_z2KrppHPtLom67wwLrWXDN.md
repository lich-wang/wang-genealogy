---
schema: wang-person/v1
id: p_z2KrppHPtLom67wwLrWXDN
status: active
merged_into: null
display_name: 王繹
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VT6BdNJbJK2f9C3fmHhaVx
        subject_person_id: p_z2KrppHPtLom67wwLrWXDN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J6pAzaFiPT7KgjoGVk6Lvt
          claim_id: c_VT6BdNJbJK2f9C3fmHhaVx
          source_id: s_RzLzCyuxNFxhA9CNho3jxN
          stance: supports
          locator: CBDB:259644
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259644）
          source: &a1
            id: s_RzLzCyuxNFxhA9CNho3jxN
            source_type: api_record
            title: 中国历代人物传记资料库：王繹（CBDB 259644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259644&o=json
            external_identifier: CBDB:259644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9BDQPB2tTbu3zRLUuRbTDV
        subject_person_id: p_z2KrppHPtLom67wwLrWXDN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繹，明人物。成化二十三年進士，籍贯安邱，曾任教諭。（中国历代人物传记资料库 CBDB 259644）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PHmOHRE8D39u2p-zx20Rl3
          claim_id: c_9BDQPB2tTbu3zRLUuRbTDV
          source_id: s_RzLzCyuxNFxhA9CNho3jxN
          stance: supports
          locator: CBDB:259644
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wox-xWrvs8agldO416658L
        subject_person_id: p_z2KrppHPtLom67wwLrWXDN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rd5qTvBTthC6ZnBxJzkeri
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7s9bidGmmw8PmjqUgFm1s4
          claim_id: c_wox-xWrvs8agldO416658L
          source_id: s_RzLzCyuxNFxhA9CNho3jxN
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百零八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rd5qTvBTthC6ZnBxJzkeri
        status: active
        display_name: 王用
        merged_into_person_id: null
    - claim:
        id: c_ykLzK_K1Ee_jH5WWdjcq9o
        subject_person_id: p_z2KrppHPtLom67wwLrWXDN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3XLLtqT4J4e4ut5KcH8qEX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__kztwvDgPDrA5ZhdUBxi65
          claim_id: c_ykLzK_K1Ee_jH5WWdjcq9o
          source_id: s_kV_qljVg1Yxjth9Zx-7pTA
          stance: supports
          locator: CBDB：兄弟 王用（200554）之父／母 王繹
          quotation: null
          interpretation_note: 由兄弟关系推断：王智 与 王用 为同胞（CBDB 记「弟」），王用 之父／母即 王智 之父／母。
          source:
            id: s_kV_qljVg1Yxjth9Zx-7pTA
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 259649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259649&o=json
            external_identifier: CBDB:259649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3XLLtqT4J4e4ut5KcH8qEX
        status: active
        display_name: 王智
        merged_into_person_id: null
    - claim:
        id: c_us4MC6wDmsj8ZcD5TOexbh
        subject_person_id: p_z2KrppHPtLom67wwLrWXDN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_43ehpGJWFBB1qj5AHicrWQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l8beAGcoI_bXCjmmCyBwh0
          claim_id: c_us4MC6wDmsj8ZcD5TOexbh
          source_id: s_FeIAcpCxBq2e7UyBg2JzOo
          stance: supports
          locator: CBDB：兄弟 王用（200554）之父／母 王繹
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓚 与 王用 为同胞（CBDB 记「弟」），王用 之父／母即 王瓚 之父／母。
          source:
            id: s_FeIAcpCxBq2e7UyBg2JzOo
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 259648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259648&o=json
            external_identifier: CBDB:259648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_43ehpGJWFBB1qj5AHicrWQ
        status: active
        display_name: 王瓚
        merged_into_person_id: null
    - claim:
        id: c_rLfWN9lx1lAbRpS3ftEM3B
        subject_person_id: p_z2KrppHPtLom67wwLrWXDN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V18oBy2L6rC1KaNxxiWckb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ICtN05FBVDJ4XgMhfjD2CI
          claim_id: c_rLfWN9lx1lAbRpS3ftEM3B
          source_id: s_WwyXLxF4ghj_kN0gSEOuwg
          stance: supports
          locator: CBDB：兄弟 王用（200554）之父／母 王繹
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑑 与 王用 为同胞（CBDB 记「兄」），王用 之父／母即 王鑑 之父／母。
          source:
            id: s_WwyXLxF4ghj_kN0gSEOuwg
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 259650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259650&o=json
            external_identifier: CBDB:259650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V18oBy2L6rC1KaNxxiWckb
        status: active
        display_name: 王鑑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繹 | accepted |
| bio.summary | 王繹，明人物。成化二十三年進士，籍贯安邱，曾任教諭。（中国历代人物传记资料库 CBDB 259644） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_rd5qTvBTthC6ZnBxJzkeri | 王用 | accepted |
| children | p_3XLLtqT4J4e4ut5KcH8qEX | 王智 | accepted |
| children | p_43ehpGJWFBB1qj5AHicrWQ | 王瓚 | accepted |
| children | p_V18oBy2L6rC1KaNxxiWckb | 王鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 259650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259650&o=json)
- [中国历代人物传记资料库：王繹（CBDB 259644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259644&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 259648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259648&o=json)
- [中国历代人物传记资料库：王智（CBDB 259649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259649&o=json)
