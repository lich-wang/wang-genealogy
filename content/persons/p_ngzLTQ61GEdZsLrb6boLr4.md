---
schema: wang-person/v1
id: p_ngzLTQ61GEdZsLrb6boLr4
status: active
merged_into: null
display_name: 王思齊
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ExkfBhMiThZ78788fLVYjZ
        subject_person_id: p_ngzLTQ61GEdZsLrb6boLr4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思齊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2g9FzE9fLir9zrtFunfS7V
          claim_id: c_ExkfBhMiThZ78788fLVYjZ
          source_id: s_4wYN2sLtgYDEB7JfZ6zfAB
          stance: supports
          locator: CBDB:292429
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292429）
          source: &a1
            id: s_4wYN2sLtgYDEB7JfZ6zfAB
            source_type: api_record
            title: 中国历代人物传记资料库：王思齊（CBDB 292429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292429&o=json
            external_identifier: CBDB:292429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.406Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8jNBytVJWV7FMHYQSXnM96
        subject_person_id: p_ngzLTQ61GEdZsLrb6boLr4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思齊，明人物。天順元年進士，籍贯汝州。（中国历代人物传记资料库 CBDB 292429）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SqGpDbfLQG4_G1bUF04Hvj
          claim_id: c_8jNBytVJWV7FMHYQSXnM96
          source_id: s_4wYN2sLtgYDEB7JfZ6zfAB
          stance: supports
          locator: CBDB:292429
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3o2Hz0lJFpgBdR4cylbePR
        subject_person_id: p_ngzLTQ61GEdZsLrb6boLr4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MB31qtyXiP7DGzQ9oxGxHs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tvfkoBGkZwgGZfULRIVdoM
          claim_id: c_3o2Hz0lJFpgBdR4cylbePR
          source_id: s_CwWTF9VA67uJm1TkU6Bmz6
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CwWTF9VA67uJm1TkU6Bmz6
            source_type: api_record
            title: 中国历代人物传记资料库：王預（CBDB 198598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198598&o=json
            external_identifier: CBDB:198598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MB31qtyXiP7DGzQ9oxGxHs
        status: active
        display_name: 王預
        merged_into_person_id: null
    - claim:
        id: c_GkLKumDNg4fv0Uf72O07SH
        subject_person_id: p_ngzLTQ61GEdZsLrb6boLr4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5rqgjMbqENeQvnfJjggY2i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R6ZcHRrWeKRE1pFDR81crU
          claim_id: c_GkLKumDNg4fv0Uf72O07SH
          source_id: s_TGGTG864FMzQkUU26eGmbA
          stance: supports
          locator: CBDB：兄弟 王預（198598）之父／母 王思齊
          quotation: null
          interpretation_note: 由兄弟关系推断：王規 与 王預 为同胞（CBDB 记「弟」），王預 之父／母即 王規 之父／母。
          source:
            id: s_TGGTG864FMzQkUU26eGmbA
            source_type: api_record
            title: 中国历代人物传记资料库：王規（CBDB 292473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292473&o=json
            external_identifier: CBDB:292473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5rqgjMbqENeQvnfJjggY2i
        status: active
        display_name: 王規
        merged_into_person_id: null
    - claim:
        id: c_pNmlmBbLvigLQRQZz6rXm_
        subject_person_id: p_ngzLTQ61GEdZsLrb6boLr4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KkQWFdaDn5UDBzcB1hoEnD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D2p_-_hY9tuOBXa9zA1E6m
          claim_id: c_pNmlmBbLvigLQRQZz6rXm_
          source_id: s_hmx1scdCcUtKYzrNNI0cva
          stance: supports
          locator: CBDB：兄弟 王預（198598）之父／母 王思齊
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑩 与 王預 为同胞（CBDB 记「兄」），王預 之父／母即 王瑩 之父／母。
          source:
            id: s_hmx1scdCcUtKYzrNNI0cva
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩（CBDB 292495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292495&o=json
            external_identifier: CBDB:292495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KkQWFdaDn5UDBzcB1hoEnD
        status: active
        display_name: 王瑩
        merged_into_person_id: null
    - claim:
        id: c_1XNAcR52oLkKszZoTpJQ9P
        subject_person_id: p_ngzLTQ61GEdZsLrb6boLr4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tM3HezFRWgMxa82EZjSSQA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__b70FQPKUzv0g6WEiQ0PWs
          claim_id: c_1XNAcR52oLkKszZoTpJQ9P
          source_id: s_eN-VedSITrwJakelFddaZI
          stance: supports
          locator: CBDB：兄弟 王預（198598）之父／母 王思齊
          quotation: null
          interpretation_note: 由兄弟关系推断：王琇 与 王預 为同胞（CBDB 记「兄」），王預 之父／母即 王琇 之父／母。
          source:
            id: s_eN-VedSITrwJakelFddaZI
            source_type: api_record
            title: 中国历代人物传记资料库：王琇（CBDB 292484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292484&o=json
            external_identifier: CBDB:292484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tM3HezFRWgMxa82EZjSSQA
        status: active
        display_name: 王琇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思齊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思齊 | accepted |
| bio.summary | 王思齊，明人物。天順元年進士，籍贯汝州。（中国历代人物传记资料库 CBDB 292429） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_MB31qtyXiP7DGzQ9oxGxHs | 王預 | accepted |
| children | p_5rqgjMbqENeQvnfJjggY2i | 王規 | accepted |
| children | p_KkQWFdaDn5UDBzcB1hoEnD | 王瑩 | accepted |
| children | p_tM3HezFRWgMxa82EZjSSQA | 王琇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王規（CBDB 292473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292473&o=json)
- [中国历代人物传记资料库：王思齊（CBDB 292429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292429&o=json)
- [中国历代人物传记资料库：王琇（CBDB 292484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292484&o=json)
- [中国历代人物传记资料库：王瑩（CBDB 292495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292495&o=json)
- [中国历代人物传记资料库：王預（CBDB 198598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198598&o=json)
