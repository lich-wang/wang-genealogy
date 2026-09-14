---
schema: wang-person/v1
id: p_V18oBy2L6rC1KaNxxiWckb
status: active
merged_into: null
display_name: 王鑑
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JCXVASfWM2yHmSeWWbdVC8
        subject_person_id: p_V18oBy2L6rC1KaNxxiWckb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1KLKEZ8e1vKtD9n9BaB5kG
          claim_id: c_JCXVASfWM2yHmSeWWbdVC8
          source_id: s_j9NqKZQP8yp8B3eCWrGroM
          stance: supports
          locator: CBDB:259650
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259650）
          source: &a1
            id: s_j9NqKZQP8yp8B3eCWrGroM
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 259650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259650&o=json
            external_identifier: CBDB:259650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.470Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rSfXAm5oPsj7PULAKUdaSb
        subject_person_id: p_V18oBy2L6rC1KaNxxiWckb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑，明人物。成化二十三年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 259650）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0bUcFpfsW94Xv5mlVw7vpW
          claim_id: c_rSfXAm5oPsj7PULAKUdaSb
          source_id: s_j9NqKZQP8yp8B3eCWrGroM
          stance: supports
          locator: CBDB:259650
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_z2KrppHPtLom67wwLrWXDN
        status: active
        display_name: 王繹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nbsn50kwu2ReLIAAbq6ceO
        subject_person_id: p_V18oBy2L6rC1KaNxxiWckb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rd5qTvBTthC6ZnBxJzkeri
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oxR9rHrkfr-cNdTMUpTGbl
          claim_id: c_nbsn50kwu2ReLIAAbq6ceO
          source_id: s_WwyXLxF4ghj_kN0gSEOuwg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200554 王用）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_rd5qTvBTthC6ZnBxJzkeri
        status: active
        display_name: 王用
        merged_into_person_id: null
---

# 王鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑑 | accepted |
| bio.summary | 王鑑，明人物。成化二十三年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 259650） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_z2KrppHPtLom67wwLrWXDN | 王繹 | accepted |
| other | p_rd5qTvBTthC6ZnBxJzkeri | 王用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 259650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259650&o=json)
