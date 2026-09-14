---
schema: wang-person/v1
id: p_548o1SKAP1oKBMmyuHA5jA
status: active
merged_into: null
display_name: 王崇義
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oDXXg6d9R7h4Z5sRcMnm1i
        subject_person_id: p_548o1SKAP1oKBMmyuHA5jA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GZQW5oAMi3jxY8a6L6CwGH
          claim_id: c_oDXXg6d9R7h4Z5sRcMnm1i
          source_id: s_YiHzg9Jkj4EwDSKii8VwE5
          stance: supports
          locator: CBDB:208868
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208868）
          source: &a1
            id: s_YiHzg9Jkj4EwDSKii8VwE5
            source_type: api_record
            title: 中国历代人物传记资料库：王崇義（CBDB 208868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208868&o=json
            external_identifier: CBDB:208868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AP3qypn5xPySKbbc6dnf8g
        subject_person_id: p_548o1SKAP1oKBMmyuHA5jA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇義，明人物。隆慶五年進士，籍贯淄川，曾任知府。（中国历代人物传记资料库 CBDB 208868）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3sLIVeO3bb5R0wbM__53eU
          claim_id: c_AP3qypn5xPySKbbc6dnf8g
          source_id: s_YiHzg9Jkj4EwDSKii8VwE5
          stance: supports
          locator: CBDB:208868
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ROaGXefZkS9O1kYT9zjdLM
        subject_person_id: p_548o1SKAP1oKBMmyuHA5jA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RznqNoKYNYcxhtUnus5Vov
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w3qc8_OqSfoBkr7BbQHoBc
          claim_id: c_ROaGXefZkS9O1kYT9zjdLM
          source_id: s_YiHzg9Jkj4EwDSKii8VwE5
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RznqNoKYNYcxhtUnus5Vov
        status: active
        display_name: 王曉
        merged_into_person_id: null
    - claim:
        id: c_BaJ1dknMxHmDEyKFf4_nyJ
        subject_person_id: p_548o1SKAP1oKBMmyuHA5jA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_693pcJyMBGr2wCJtrWMyqP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5zF7tl1zWiZ3pQwrwd9OSP
          claim_id: c_BaJ1dknMxHmDEyKFf4_nyJ
          source_id: s_vK8qGHoXkzrzZs5U-8CFTH
          stance: supports
          locator: CBDB：兄弟 王曉（205806）之父／母 王崇義
          quotation: null
          interpretation_note: 由兄弟关系推断：王曄 与 王曉 为同胞（CBDB 记「兄」），王曉 之父／母即 王曄 之父／母。
          source:
            id: s_vK8qGHoXkzrzZs5U-8CFTH
            source_type: api_record
            title: 中国历代人物传记资料库：王曄（CBDB 208878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208878&o=json
            external_identifier: CBDB:208878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_693pcJyMBGr2wCJtrWMyqP
        status: active
        display_name: 王曄
        merged_into_person_id: null
    - claim:
        id: c_PNjYN3lGaHedHCYThF2v8m
        subject_person_id: p_548o1SKAP1oKBMmyuHA5jA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GskD3RtdwKRsHbE33pjhxn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FuWkaKwpQDD6isJZ1TRaJm
          claim_id: c_PNjYN3lGaHedHCYThF2v8m
          source_id: s_s2dB2kcODMwW9KhtZ5cf6z
          stance: supports
          locator: CBDB：兄弟 王曉（205806）之父／母 王崇義
          quotation: null
          interpretation_note: 由兄弟关系推断：王暏 与 王曉 为同胞（CBDB 记「兄」），王曉 之父／母即 王暏 之父／母。
          source:
            id: s_s2dB2kcODMwW9KhtZ5cf6z
            source_type: api_record
            title: 中国历代人物传记资料库：王暏（CBDB 208875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208875&o=json
            external_identifier: CBDB:208875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GskD3RtdwKRsHbE33pjhxn
        status: active
        display_name: 王暏
        merged_into_person_id: null
    - claim:
        id: c_tcUpZHtYVy1-eqgVqjzxVo
        subject_person_id: p_548o1SKAP1oKBMmyuHA5jA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NT5zCfqJiKCG5NCFQcToWy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g89XleHattsiSOKl86FfC-
          claim_id: c_tcUpZHtYVy1-eqgVqjzxVo
          source_id: s__l-PPUNdPV4c1gGk0d8HGn
          stance: supports
          locator: CBDB：兄弟 王曉（205806）之父／母 王崇義
          quotation: null
          interpretation_note: 由兄弟关系推断：王曙 与 王曉 为同胞（CBDB 记「兄」），王曉 之父／母即 王曙 之父／母。
          source:
            id: s__l-PPUNdPV4c1gGk0d8HGn
            source_type: api_record
            title: 中国历代人物传记资料库：王曙（CBDB 208877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208877&o=json
            external_identifier: CBDB:208877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NT5zCfqJiKCG5NCFQcToWy
        status: active
        display_name: 王曙
        merged_into_person_id: null
    - claim:
        id: c_MOIB8QihuUQwwLVtBWZvbx
        subject_person_id: p_548o1SKAP1oKBMmyuHA5jA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QZDDHQkVG25ym6DbVHajPv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Aekl5_wVr_mmB1jeZRCLJ
          claim_id: c_MOIB8QihuUQwwLVtBWZvbx
          source_id: s_wWvnbcO3aiiZykEp7jepvR
          stance: supports
          locator: CBDB：兄弟 王曉（205806）之父／母 王崇義
          quotation: null
          interpretation_note: 由兄弟关系推断：王晤 与 王曉 为同胞（CBDB 记「兄」），王曉 之父／母即 王晤 之父／母。
          source:
            id: s_wWvnbcO3aiiZykEp7jepvR
            source_type: api_record
            title: 中国历代人物传记资料库：王晤（CBDB 208873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208873&o=json
            external_identifier: CBDB:208873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QZDDHQkVG25ym6DbVHajPv
        status: active
        display_name: 王晤
        merged_into_person_id: null
    - claim:
        id: c_AoopDkwAfnqyOY7KtULnMt
        subject_person_id: p_548o1SKAP1oKBMmyuHA5jA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UXpDLH3Q6ACR5REW6rx98f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vJrvTpQs2DGyn771iGOlRb
          claim_id: c_AoopDkwAfnqyOY7KtULnMt
          source_id: s_kw5Ja6wXmY9ZCLlXLjIZWR
          stance: supports
          locator: CBDB：兄弟 王曉（205806）之父／母 王崇義
          quotation: null
          interpretation_note: 由兄弟关系推断：王㫛 与 王曉 为同胞（CBDB 记「兄」），王曉 之父／母即 王㫛 之父／母。
          source:
            id: s_kw5Ja6wXmY9ZCLlXLjIZWR
            source_type: api_record
            title: 中国历代人物传记资料库：王㫛（CBDB 208874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208874&o=json
            external_identifier: CBDB:208874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UXpDLH3Q6ACR5REW6rx98f
        status: active
        display_name: 王㫛
        merged_into_person_id: null
    - claim:
        id: c_eQSO7uFa8lHEjbxgDHKsxj
        subject_person_id: p_548o1SKAP1oKBMmyuHA5jA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nmPKNuXkMQTW2N47jRsjTb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5YazPiHYEk7enZ-J6knL3m
          claim_id: c_eQSO7uFa8lHEjbxgDHKsxj
          source_id: s_-OD9GOuDquz9fNdpkhB0re
          stance: supports
          locator: CBDB：兄弟 王曉（205806）之父／母 王崇義
          quotation: null
          interpretation_note: 由兄弟关系推断：王時 与 王曉 为同胞（CBDB 记「兄」），王曉 之父／母即 王時 之父／母。
          source:
            id: s_-OD9GOuDquz9fNdpkhB0re
            source_type: api_record
            title: 中国历代人物传记资料库：王時（CBDB 208879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208879&o=json
            external_identifier: CBDB:208879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nmPKNuXkMQTW2N47jRsjTb
        status: active
        display_name: 王時
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇義 | accepted |
| bio.summary | 王崇義，明人物。隆慶五年進士，籍贯淄川，曾任知府。（中国历代人物传记资料库 CBDB 208868） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RznqNoKYNYcxhtUnus5Vov | 王曉 | accepted |
| children | p_693pcJyMBGr2wCJtrWMyqP | 王曄 | accepted |
| children | p_GskD3RtdwKRsHbE33pjhxn | 王暏 | accepted |
| children | p_NT5zCfqJiKCG5NCFQcToWy | 王曙 | accepted |
| children | p_QZDDHQkVG25ym6DbVHajPv | 王晤 | accepted |
| children | p_UXpDLH3Q6ACR5REW6rx98f | 王㫛 | accepted |
| children | p_nmPKNuXkMQTW2N47jRsjTb | 王時 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇義（CBDB 208868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208868&o=json)
- [中国历代人物传记资料库：王時（CBDB 208879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208879&o=json)
- [中国历代人物传记资料库：王暏（CBDB 208875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208875&o=json)
- [中国历代人物传记资料库：王曙（CBDB 208877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208877&o=json)
- [中国历代人物传记资料库：王晤（CBDB 208873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208873&o=json)
- [中国历代人物传记资料库：王曄（CBDB 208878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208878&o=json)
- [中国历代人物传记资料库：王㫛（CBDB 208874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208874&o=json)
