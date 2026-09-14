---
schema: wang-person/v1
id: p_uhm7QMvYDUq8M3FEsbzMvB
status: active
merged_into: null
display_name: 王子美
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5HiEFTXoNHPrH6cSxLW3yh
        subject_person_id: p_uhm7QMvYDUq8M3FEsbzMvB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子美
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dECkA5fYa7MJescDQYg5hQ
          claim_id: c_5HiEFTXoNHPrH6cSxLW3yh
          source_id: s_gxGpuEASdZGKB6r9B4pzSt
          stance: supports
          locator: CBDB:330483
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（330483）
          source: &a1
            id: s_gxGpuEASdZGKB6r9B4pzSt
            source_type: api_record
            title: 中国历代人物传记资料库：王子美（CBDB 330483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330483&o=json
            external_identifier: CBDB:330483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.348Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tABuC4jKjgzo9XfHDTXpGT
        subject_person_id: p_uhm7QMvYDUq8M3FEsbzMvB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子美，明人物。嘉靖四十四年進士，籍贯金華，曾任陰陽典術。（中国历代人物传记资料库 CBDB 330483）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lB7kdMiq-mUiQztN70xMR3
          claim_id: c_tABuC4jKjgzo9XfHDTXpGT
          source_id: s_gxGpuEASdZGKB6r9B4pzSt
          stance: supports
          locator: CBDB:330483
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tpwmu2P7DyNFBQY4JKM5fn
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uhm7QMvYDUq8M3FEsbzMvB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-PTT4CBNfs8KbY8FIl9JcO
          claim_id: c_tpwmu2P7DyNFBQY4JKM5fn
          source_id: s_vSDJaiSQnv-6N0vt6O_IHh
          stance: supports
          locator: CBDB：兄弟 王三錫（205255）之父／母 王訪
          quotation: null
          interpretation_note: 由兄弟关系推断：王子美 与 王三錫 为同胞（CBDB 记「弟」），王三錫 之父／母即 王子美 之父／母。
          source:
            id: s_vSDJaiSQnv-6N0vt6O_IHh
            source_type: api_record
            title: 中国历代人物传记资料库：王子美（CBDB 330483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330483&o=json
            external_identifier: CBDB:330483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FwWAP4cMFqggRtz76GL45y
        status: active
        display_name: 王訪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_opNWiUaQNSk7rcdpSUbHd2
        subject_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uhm7QMvYDUq8M3FEsbzMvB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NVslQJoFPpckaos1sUHn0-
          claim_id: c_opNWiUaQNSk7rcdpSUbHd2
          source_id: s_vSDJaiSQnv-6N0vt6O_IHh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205255 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vSDJaiSQnv-6N0vt6O_IHh
            source_type: api_record
            title: 中国历代人物传记资料库：王子美（CBDB 330483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330483&o=json
            external_identifier: CBDB:330483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SNd4UuLmfsSW8TJsfi9MKm
        status: active
        display_name: 王三錫
        merged_into_person_id: null
---

# 王子美

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子美 | accepted |
| bio.summary | 王子美，明人物。嘉靖四十四年進士，籍贯金華，曾任陰陽典術。（中国历代人物传记资料库 CBDB 330483） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FwWAP4cMFqggRtz76GL45y | 王訪 | accepted |
| other | p_SNd4UuLmfsSW8TJsfi9MKm | 王三錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子美（CBDB 330483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330483&o=json)
