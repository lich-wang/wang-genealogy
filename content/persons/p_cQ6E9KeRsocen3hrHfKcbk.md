---
schema: wang-person/v1
id: p_cQ6E9KeRsocen3hrHfKcbk
status: active
merged_into: null
display_name: 王廷器
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KHXGXB6cJkiFieKz9dENnm
        subject_person_id: p_cQ6E9KeRsocen3hrHfKcbk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷器
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y7FGBGxk77o4xNdJ9aseqF
          claim_id: c_KHXGXB6cJkiFieKz9dENnm
          source_id: s_CExna37FAoDURe7CuENPKp
          stance: supports
          locator: CBDB:237875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237875）
          source: &a1
            id: s_CExna37FAoDURe7CuENPKp
            source_type: api_record
            title: 中国历代人物传记资料库：王廷器（CBDB 237875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237875&o=json
            external_identifier: CBDB:237875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.857Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t1eUoXjcCodA4oZiQGf9k1
        subject_person_id: p_cQ6E9KeRsocen3hrHfKcbk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷器，明人物。成化二年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 237875）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sXcdyInIg6Oo_vJo3GMA_n
          claim_id: c_t1eUoXjcCodA4oZiQGf9k1
          source_id: s_CExna37FAoDURe7CuENPKp
          stance: supports
          locator: CBDB:237875
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Svr-AV74OHykH2yDy1itQ4
        subject_person_id: p_cQ6E9KeRsocen3hrHfKcbk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ByxZLeQEM3c8TBLeF6KvJM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Me0yt6OB5ZllvNdZZCBdXl
          claim_id: c_Svr-AV74OHykH2yDy1itQ4
          source_id: s_vzhFyj98EbzW26DLi4CY6U
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vzhFyj98EbzW26DLi4CY6U
            source_type: api_record
            title: 中国历代人物传记资料库：王繼（CBDB 126877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126877&o=json
            external_identifier: CBDB:126877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.279Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ByxZLeQEM3c8TBLeF6KvJM
        status: active
        display_name: 王繼
        merged_into_person_id: null
    - claim:
        id: c_Q444gc8bGz4B3NJoHjblqj
        subject_person_id: p_cQ6E9KeRsocen3hrHfKcbk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2ZhvqH958bmNuvK6AmufHf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xIZl5BIJQ2Ci5G822qQN-C
          claim_id: c_Q444gc8bGz4B3NJoHjblqj
          source_id: s_-0Qy4mgrstz7a08mNZkqfS
          stance: supports
          locator: CBDB：兄弟 王繼（126877）之父／母 王廷器
          quotation: null
          interpretation_note: 由兄弟关系推断：王恭 与 王繼 为同胞（CBDB 记「兄」），王繼 之父／母即 王恭 之父／母。
          source:
            id: s_-0Qy4mgrstz7a08mNZkqfS
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 237920）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237920&o=json
            external_identifier: CBDB:237920
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2ZhvqH958bmNuvK6AmufHf
        status: active
        display_name: 王恭
        merged_into_person_id: null
    - claim:
        id: c_wUbfgNW1CSNV8m4rSY7E_B
        subject_person_id: p_cQ6E9KeRsocen3hrHfKcbk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_89Gv5LxJm8nf3nvnSY46kb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Maa4G-0Z_QDW-DZePYAnXw
          claim_id: c_wUbfgNW1CSNV8m4rSY7E_B
          source_id: s_rI3AhPmX2Vyaxdu_FvoVNo
          stance: supports
          locator: CBDB：兄弟 王繼（126877）之父／母 王廷器
          quotation: null
          interpretation_note: 由兄弟关系推断：王綜 与 王繼 为同胞（CBDB 记「弟」），王繼 之父／母即 王綜 之父／母。
          source:
            id: s_rI3AhPmX2Vyaxdu_FvoVNo
            source_type: api_record
            title: 中国历代人物传记资料库：王綜（CBDB 237909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237909&o=json
            external_identifier: CBDB:237909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_89Gv5LxJm8nf3nvnSY46kb
        status: active
        display_name: 王綜
        merged_into_person_id: null
    - claim:
        id: c_mW45XIjHFk1-xb-xm9cap7
        subject_person_id: p_cQ6E9KeRsocen3hrHfKcbk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HJcQ8d3dQ1XcCbBCD2vNJu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DYvFWASAcF-jPfOhNj2Mr5
          claim_id: c_mW45XIjHFk1-xb-xm9cap7
          source_id: s_W9tYzWOrvQuWF_39mcgmNz
          stance: supports
          locator: CBDB：兄弟 王繼（126877）之父／母 王廷器
          quotation: null
          interpretation_note: 由兄弟关系推断：王寬 与 王繼 为同胞（CBDB 记「兄」），王繼 之父／母即 王寬 之父／母。
          source:
            id: s_W9tYzWOrvQuWF_39mcgmNz
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 237931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237931&o=json
            external_identifier: CBDB:237931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HJcQ8d3dQ1XcCbBCD2vNJu
        status: active
        display_name: 王寬
        merged_into_person_id: null
    - claim:
        id: c_nVkcUnQZ2yzjHo03kXp6sI
        subject_person_id: p_cQ6E9KeRsocen3hrHfKcbk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NPuD48ACECXDKgZJ8tKWBt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rNxPYGCuP1Jq-7De_MWA1o
          claim_id: c_nVkcUnQZ2yzjHo03kXp6sI
          source_id: s_A6TTemiiyX_u-oO9Mm35Kv
          stance: supports
          locator: CBDB：兄弟 王繼（126877）之父／母 王廷器
          quotation: null
          interpretation_note: 由兄弟关系推断：王敏 与 王繼 为同胞（CBDB 记「兄」），王繼 之父／母即 王敏 之父／母。
          source:
            id: s_A6TTemiiyX_u-oO9Mm35Kv
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 237942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237942&o=json
            external_identifier: CBDB:237942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NPuD48ACECXDKgZJ8tKWBt
        status: active
        display_name: 王敏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷器

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷器 | accepted |
| bio.summary | 王廷器，明人物。成化二年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 237875） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ByxZLeQEM3c8TBLeF6KvJM | 王繼 | accepted |
| children | p_2ZhvqH958bmNuvK6AmufHf | 王恭 | accepted |
| children | p_89Gv5LxJm8nf3nvnSY46kb | 王綜 | accepted |
| children | p_HJcQ8d3dQ1XcCbBCD2vNJu | 王寬 | accepted |
| children | p_NPuD48ACECXDKgZJ8tKWBt | 王敏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恭（CBDB 237920）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237920&o=json)
- [中国历代人物传记资料库：王繼（CBDB 126877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126877&o=json)
- [中国历代人物传记资料库：王寬（CBDB 237931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237931&o=json)
- [中国历代人物传记资料库：王敏（CBDB 237942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237942&o=json)
- [中国历代人物传记资料库：王廷器（CBDB 237875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237875&o=json)
- [中国历代人物传记资料库：王綜（CBDB 237909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237909&o=json)
