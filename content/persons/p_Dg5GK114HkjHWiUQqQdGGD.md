---
schema: wang-person/v1
id: p_Dg5GK114HkjHWiUQqQdGGD
status: active
merged_into: null
display_name: 王來訪
cbdb_id: 298284
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gJ14vy8TLZAyW6hQFiRKD5
        subject_person_id: p_Dg5GK114HkjHWiUQqQdGGD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來訪，明人物。嘉靖十四年進士，籍贯盩厔。（中国历代人物传记资料库 CBDB 298284）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_E5HnSxPDFLOYkwD5TeGi_o
          claim_id: c_gJ14vy8TLZAyW6hQFiRKD5
          source_id: s_Hb5QdzB3PzgvJ7vvt3H5hc
          stance: supports
          locator: CBDB:298284
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Hb5QdzB3PzgvJ7vvt3H5hc
            source_type: api_record
            title: 中国历代人物传记资料库：王來訪（CBDB 298284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298284&o=json
            external_identifier: CBDB:298284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aUcUBNDp9HjFb2mHSii52t
        subject_person_id: p_Dg5GK114HkjHWiUQqQdGGD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來訪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UZsWLXh66mo4HghEUHtbKL
          claim_id: c_aUcUBNDp9HjFb2mHSii52t
          source_id: s_Hb5QdzB3PzgvJ7vvt3H5hc
          stance: supports
          locator: CBDB:298284
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__iEHa86rH1ivWzVg4YItCF
        subject_person_id: p_pBNZiURNhTvnzH774UY4Jb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Dg5GK114HkjHWiUQqQdGGD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vJ5yTPFQibN8NwANYRI-Ia
          claim_id: c__iEHa86rH1ivWzVg4YItCF
          source_id: s_yJLRPmdwTvlPLhp2vUwc6Z
          stance: supports
          locator: CBDB：兄弟 王三聘（203007）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王來訪 与 王三聘 为同胞（CBDB 记「弟」），王三聘 之父／母即 王來訪 之父／母。
          source:
            id: s_yJLRPmdwTvlPLhp2vUwc6Z
            source_type: api_record
            title: 中国历代人物传记资料库：王來訪（CBDB 298284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298284&o=json
            external_identifier: CBDB:298284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pBNZiURNhTvnzH774UY4Jb
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_T-lOC63ATEphejBpsLvhuO
        subject_person_id: p_Dg5GK114HkjHWiUQqQdGGD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UjZpJ3nna6WnKHPp7DAt53
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FyU5FejQkq8OTtueRxKdcU
          claim_id: c_T-lOC63ATEphejBpsLvhuO
          source_id: s_yJLRPmdwTvlPLhp2vUwc6Z
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203007 王三聘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yJLRPmdwTvlPLhp2vUwc6Z
            source_type: api_record
            title: 中国历代人物传记资料库：王來訪（CBDB 298284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298284&o=json
            external_identifier: CBDB:298284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UjZpJ3nna6WnKHPp7DAt53
        status: active
        display_name: 王三聘
        merged_into_person_id: null
---

# 王來訪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王來訪，明人物。嘉靖十四年進士，籍贯盩厔。（中国历代人物传记资料库 CBDB 298284） | accepted |
| name.primary | 王來訪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pBNZiURNhTvnzH774UY4Jb | 王玉 | accepted |
| other | p_UjZpJ3nna6WnKHPp7DAt53 | 王三聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王來訪（CBDB 298284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298284&o=json)
