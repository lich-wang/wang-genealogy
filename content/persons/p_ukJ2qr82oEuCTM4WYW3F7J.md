---
schema: wang-person/v1
id: p_ukJ2qr82oEuCTM4WYW3F7J
status: active
merged_into: null
display_name: 王文翰
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hYNzQ9Q5fHx6A7JpbLPAva
        subject_person_id: p_ukJ2qr82oEuCTM4WYW3F7J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uFYSTZZWH6xEzp71LCbSVf
          claim_id: c_hYNzQ9Q5fHx6A7JpbLPAva
          source_id: s_JEVg3Z186Azmc5PHLLX9Xc
          stance: supports
          locator: CBDB:204105
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204105）
          source: &a1
            id: s_JEVg3Z186Azmc5PHLLX9Xc
            source_type: api_record
            title: 中国历代人物传记资料库：王文翰（CBDB 204105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204105&o=json
            external_identifier: CBDB:204105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_etTU2qVEmoHZA9vy2LuKgy
        subject_person_id: p_ukJ2qr82oEuCTM4WYW3F7J
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1512年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B5YFT14R8z2YDFB6bj15JY
          claim_id: c_etTU2qVEmoHZA9vy2LuKgy
          source_id: s_JEVg3Z186Azmc5PHLLX9Xc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_15NbLfSUviJUbe1C4v9J7N
        subject_person_id: p_ukJ2qr82oEuCTM4WYW3F7J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文翰（生于1512年），明人物。明清進士進士，籍贯蒙城，入仕進士。（中国历代人物传记资料库 CBDB 204105）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6094VhU4YwVWX-haz6ProY
          claim_id: c_15NbLfSUviJUbe1C4v9J7N
          source_id: s_JEVg3Z186Azmc5PHLLX9Xc
          stance: supports
          locator: CBDB:204105
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iIlKtm2fR0TNEPXXD0V93l
        subject_person_id: p_vDgtFRNYxuxGwwcAPH4NeN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ukJ2qr82oEuCTM4WYW3F7J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_raUkica93QdA3WbBnwigSt
          claim_id: c_iIlKtm2fR0TNEPXXD0V93l
          source_id: s_RkYxDgQ7bX2RRphJ58VJEJ
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RkYxDgQ7bX2RRphJ58VJEJ
            source_type: api_record
            title: 中国历代人物传记资料库：王繼（CBDB 314478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314478&o=json
            external_identifier: CBDB:314478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vDgtFRNYxuxGwwcAPH4NeN
        status: active
        display_name: 王繼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_iNW2rVWaaUgsCpmKmdiYdC
        subject_person_id: p_TfMLi6NbWH8rKkGCKLEG8g
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ukJ2qr82oEuCTM4WYW3F7J
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fIH0zNjKzZUTFvACIKA_ZW
          claim_id: c_iNW2rVWaaUgsCpmKmdiYdC
          source_id: s_pBFi9ZJyWyQQDD9bxeXCKk
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百八十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pBFi9ZJyWyQQDD9bxeXCKk
            source_type: api_record
            title: 中国历代人物传记资料库：王林（CBDB 314477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314477&o=json
            external_identifier: CBDB:314477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TfMLi6NbWH8rKkGCKLEG8g
        status: active
        display_name: 王林
        merged_into_person_id: null
    - claim:
        id: c_4B6JJ7QhELzjDa3cUPkdL0
        subject_person_id: p_TJqwo9PYn9Wa7jb1JfTd9H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ukJ2qr82oEuCTM4WYW3F7J
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YtSsWWNTZXZCgZlaDDIBZO
          claim_id: c_4B6JJ7QhELzjDa3cUPkdL0
          source_id: s_N3ny66ED2qB7YEycjnB47h
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百八十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_N3ny66ED2qB7YEycjnB47h
            source_type: api_record
            title: 中国历代人物传记资料库：王全（CBDB 314476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314476&o=json
            external_identifier: CBDB:314476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TJqwo9PYn9Wa7jb1JfTd9H
        status: active
        display_name: 王全
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_JDLMMa3_K_iQXzOlZbnpNl
        subject_person_id: p_6UgmescXfbbBRdbEZSjX5d
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ukJ2qr82oEuCTM4WYW3F7J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yPQqs_1lQKmRtxCV31QVFa
          claim_id: c_JDLMMa3_K_iQXzOlZbnpNl
          source_id: s_2x0eoR7kNVdLFQTa14LvuT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204105 王文翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2x0eoR7kNVdLFQTa14LvuT
            source_type: api_record
            title: 中国历代人物传记资料库：王文華（CBDB 314486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314486&o=json
            external_identifier: CBDB:314486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6UgmescXfbbBRdbEZSjX5d
        status: active
        display_name: 王文華
        merged_into_person_id: null
    - claim:
        id: c_WnVA2sLLNso7a97nR1QvRO
        subject_person_id: p_fbm1nnS7D3rk8g2aY9pykX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ukJ2qr82oEuCTM4WYW3F7J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QVWo0xCWYvbhB6JaEYMisV
          claim_id: c_WnVA2sLLNso7a97nR1QvRO
          source_id: s_QoGtNYlKGLBftfR3qwE5Nv
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204105 王文翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QoGtNYlKGLBftfR3qwE5Nv
            source_type: api_record
            title: 中国历代人物传记资料库：王文宣（CBDB 314483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314483&o=json
            external_identifier: CBDB:314483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fbm1nnS7D3rk8g2aY9pykX
        status: active
        display_name: 王文宣
        merged_into_person_id: null
    - claim:
        id: c_6fwLTM75m5E5e2ekf93upH
        subject_person_id: p_kWzhWb3Nuj81n5vgmHJdDD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ukJ2qr82oEuCTM4WYW3F7J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hPkiaQD35aS7p6XewBePLe
          claim_id: c_6fwLTM75m5E5e2ekf93upH
          source_id: s_rSRllFbpE3vWNEGXIfCcvK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204105 王文翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rSRllFbpE3vWNEGXIfCcvK
            source_type: api_record
            title: 中国历代人物传记资料库：王文宗（CBDB 314482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314482&o=json
            external_identifier: CBDB:314482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kWzhWb3Nuj81n5vgmHJdDD
        status: active
        display_name: 王文宗
        merged_into_person_id: null
    - claim:
        id: c_ayyYRB3UwNcWC4K2_w_KGf
        subject_person_id: p_ukJ2qr82oEuCTM4WYW3F7J
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wxnRoaVPFW8NVuD7PYEjHn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DUs6gJ4iNOjp6SNUFBQYIM
          claim_id: c_ayyYRB3UwNcWC4K2_w_KGf
          source_id: s_BZcn5zeAFT4_WaOXP6ntyW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204105 王文翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BZcn5zeAFT4_WaOXP6ntyW
            source_type: api_record
            title: 中国历代人物传记资料库：王文榮（CBDB 314485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314485&o=json
            external_identifier: CBDB:314485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wxnRoaVPFW8NVuD7PYEjHn
        status: active
        display_name: 王文榮
        merged_into_person_id: null
---

# 王文翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文翰 | accepted |
| birth.date | 1512年 | accepted |
| bio.summary | 王文翰（生于1512年），明人物。明清進士進士，籍贯蒙城，入仕進士。（中国历代人物传记资料库 CBDB 204105） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vDgtFRNYxuxGwwcAPH4NeN | 王繼 | accepted |
| ancestors | p_TfMLi6NbWH8rKkGCKLEG8g | 王林 | accepted |
| ancestors | p_TJqwo9PYn9Wa7jb1JfTd9H | 王全 | accepted |
| other | p_6UgmescXfbbBRdbEZSjX5d | 王文華 | accepted |
| other | p_fbm1nnS7D3rk8g2aY9pykX | 王文宣 | accepted |
| other | p_kWzhWb3Nuj81n5vgmHJdDD | 王文宗 | accepted |
| other | p_wxnRoaVPFW8NVuD7PYEjHn | 王文榮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼（CBDB 314478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314478&o=json)
- [中国历代人物传记资料库：王林（CBDB 314477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314477&o=json)
- [中国历代人物传记资料库：王全（CBDB 314476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314476&o=json)
- [中国历代人物传记资料库：王文翰（CBDB 204105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204105&o=json)
- [中国历代人物传记资料库：王文華（CBDB 314486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314486&o=json)
- [中国历代人物传记资料库：王文榮（CBDB 314485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314485&o=json)
- [中国历代人物传记资料库：王文宣（CBDB 314483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314483&o=json)
- [中国历代人物传记资料库：王文宗（CBDB 314482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314482&o=json)
