---
schema: wang-person/v1
id: p_ZqpxKBqyDJtXTG8SZjo1en
status: active
merged_into: null
display_name: 王熠
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_smZKDrsbrmTADeXSFKVrS2
        subject_person_id: p_ZqpxKBqyDJtXTG8SZjo1en
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6bPpAT3rgDbQbcUoS1NrXA
          claim_id: c_smZKDrsbrmTADeXSFKVrS2
          source_id: s_xfmSrY8o5ZjXvpY59KrvHH
          stance: supports
          locator: CBDB:331799
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331799）
          source: &a1
            id: s_xfmSrY8o5ZjXvpY59KrvHH
            source_type: api_record
            title: 中国历代人物传记资料库：王熠（CBDB 331799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331799&o=json
            external_identifier: CBDB:331799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rLrdsTSuhMS5mDdBqRPjsX
        subject_person_id: p_ZqpxKBqyDJtXTG8SZjo1en
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熠，明人物。嘉靖四十四年進士，籍贯嘉定，曾任醫學正科。（中国历代人物传记资料库 CBDB 331799）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uJVPorZZ4k0QwrNvfFXxmD
          claim_id: c_rLrdsTSuhMS5mDdBqRPjsX
          source_id: s_xfmSrY8o5ZjXvpY59KrvHH
          stance: supports
          locator: CBDB:331799
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6WCsAw-BVQUYWuCYZ4-IlV
        subject_person_id: p_ZqpxKBqyDJtXTG8SZjo1en
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TugXusNFHFdTE5ayse4kLm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OqIkSnN-ZJ-XeMluWOUlr3
          claim_id: c_6WCsAw-BVQUYWuCYZ4-IlV
          source_id: s_xfmSrY8o5ZjXvpY59KrvHH
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百五十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TugXusNFHFdTE5ayse4kLm
        status: active
        display_name: 王圻
        merged_into_person_id: null
    - claim:
        id: c_GLr-FaAnNA3Jq5N6unwvVf
        subject_person_id: p_ZqpxKBqyDJtXTG8SZjo1en
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L6e8HB8GohB5NJoBPANcAy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m7vYgsXLNXQVRqeg3N0Ugv
          claim_id: c_GLr-FaAnNA3Jq5N6unwvVf
          source_id: s_6HR8bgPz4dKNqLaGEsS1jy
          stance: supports
          locator: CBDB：兄弟 王圻（126533）之父／母 王熠
          quotation: null
          interpretation_note: 由兄弟关系推断：王墀 与 王圻 为同胞（CBDB 记「弟」），王圻 之父／母即 王墀 之父／母。
          source:
            id: s_6HR8bgPz4dKNqLaGEsS1jy
            source_type: api_record
            title: 中国历代人物传记资料库：王墀（CBDB 331803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331803&o=json
            external_identifier: CBDB:331803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L6e8HB8GohB5NJoBPANcAy
        status: active
        display_name: 王墀
        merged_into_person_id: null
    - claim:
        id: c_lIZWhe12qc3JnLUuA0J5vW
        subject_person_id: p_ZqpxKBqyDJtXTG8SZjo1en
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PxzE9zNAcET5a6KZfVTy3L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bggtYBRA-EmH5Eblq5fORy
          claim_id: c_lIZWhe12qc3JnLUuA0J5vW
          source_id: s_S8v6Y1HOjm28Sr05I6k6ps
          stance: supports
          locator: CBDB：兄弟 王圻（126533）之父／母 王熠
          quotation: null
          interpretation_note: 由兄弟关系推断：王陞 与 王圻 为同胞（CBDB 记「兄」），王圻 之父／母即 王陞 之父／母。
          source:
            id: s_S8v6Y1HOjm28Sr05I6k6ps
            source_type: api_record
            title: 中国历代人物传记资料库：王陞（CBDB 331804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331804&o=json
            external_identifier: CBDB:331804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PxzE9zNAcET5a6KZfVTy3L
        status: active
        display_name: 王陞
        merged_into_person_id: null
    - claim:
        id: c_ZvRoKJO5OZQ4nDCTKfpINL
        subject_person_id: p_ZqpxKBqyDJtXTG8SZjo1en
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j4NKkgDxjFSf3BsUEw22Gw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GLOWJxduL46-caf89gzAsT
          claim_id: c_ZvRoKJO5OZQ4nDCTKfpINL
          source_id: s_s84NZik-pGWGIo-SfTxR57
          stance: supports
          locator: CBDB：兄弟 王圻（126533）之父／母 王熠
          quotation: null
          interpretation_note: 由兄弟关系推断：王重 与 王圻 为同胞（CBDB 记「兄」），王圻 之父／母即 王重 之父／母。
          source:
            id: s_s84NZik-pGWGIo-SfTxR57
            source_type: api_record
            title: 中国历代人物传记资料库：王重（CBDB 331805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331805&o=json
            external_identifier: CBDB:331805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j4NKkgDxjFSf3BsUEw22Gw
        status: active
        display_name: 王重
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王熠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熠 | accepted |
| bio.summary | 王熠，明人物。嘉靖四十四年進士，籍贯嘉定，曾任醫學正科。（中国历代人物传记资料库 CBDB 331799） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TugXusNFHFdTE5ayse4kLm | 王圻 | accepted |
| children | p_L6e8HB8GohB5NJoBPANcAy | 王墀 | accepted |
| children | p_PxzE9zNAcET5a6KZfVTy3L | 王陞 | accepted |
| children | p_j4NKkgDxjFSf3BsUEw22Gw | 王重 | accepted |

## 外部来源

- [中国历代人物传记资料库：王墀（CBDB 331803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331803&o=json)
- [中国历代人物传记资料库：王陞（CBDB 331804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331804&o=json)
- [中国历代人物传记资料库：王熠（CBDB 331799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331799&o=json)
- [中国历代人物传记资料库：王重（CBDB 331805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331805&o=json)
