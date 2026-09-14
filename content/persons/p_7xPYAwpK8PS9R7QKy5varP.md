---
schema: wang-person/v1
id: p_7xPYAwpK8PS9R7QKy5varP
status: active
merged_into: null
display_name: 王珣
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d7d8UhTW8ZrA85oC9u5Tww
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wWCs1V8tPKwWd5tBKp6nVn
          claim_id: c_d7d8UhTW8ZrA85oC9u5Tww
          source_id: s_Vys9dZU9Gy34qAcr5P9Ciw
          stance: supports
          locator: CBDB:266132
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266132）
          source: &a1
            id: s_Vys9dZU9Gy34qAcr5P9Ciw
            source_type: api_record
            title: 中国历代人物传记资料库：王珣（CBDB 266132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266132&o=json
            external_identifier: CBDB:266132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.716Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_75WkTfzzraSoeADP32hpDY
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珣，明人物。弘治六年進士，籍贯曹縣，曾任都察院右副都御史、右參政。（中国历代人物传记资料库 CBDB 266132）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9yEspHk0UXy62W7j3pJT23
          claim_id: c_75WkTfzzraSoeADP32hpDY
          source_id: s_Vys9dZU9Gy34qAcr5P9Ciw
          stance: supports
          locator: CBDB:266132
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_RpRnD0_WjsTkwzGIUqNVDx
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_skjKvTKbz5aUC8X3W9ytWH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JZiIsJF4osc23_x51oUlzP
          claim_id: c_RpRnD0_WjsTkwzGIUqNVDx
          source_id: s_Vys9dZU9Gy34qAcr5P9Ciw
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百四十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_skjKvTKbz5aUC8X3W9ytWH
        status: active
        display_name: 王崇文
        merged_into_person_id: null
    - claim:
        id: c_BxADcTP4WGBJymM-FPu5GK
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5btbNFkuNqxJDcg99ibvfp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0Pp-H_l9rm7uCP_LKgRJp0
          claim_id: c_BxADcTP4WGBJymM-FPu5GK
          source_id: s_Vys9dZU9Gy34qAcr5P9Ciw
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第二十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5btbNFkuNqxJDcg99ibvfp
        status: active
        display_name: 王崇儉
        merged_into_person_id: null
    - claim:
        id: c_ShpgqvRn2jpDmeoOwW8lmn
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gZEG3LV8BoSpVH5X7JPghB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HIPL68xmmUFYqYB6vX3jQG
          claim_id: c_ShpgqvRn2jpDmeoOwW8lmn
          source_id: s_Vys9dZU9Gy34qAcr5P9Ciw
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第二十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gZEG3LV8BoSpVH5X7JPghB
        status: active
        display_name: 王崇獻
        merged_into_person_id: null
    - claim:
        id: c_LKd1gYEEEj8ZAKhcXFZDsm
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Btkcss9NyiAEPVV7JN1ddH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AcUzo_HRrlofnHq3qAIcE8
          claim_id: c_LKd1gYEEEj8ZAKhcXFZDsm
          source_id: s_RUW0svwi8kxC6dRXhzaCso
          stance: supports
          locator: CBDB：兄弟 王崇文（126686）之父／母 王珣
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇高 与 王崇文 为同胞（CBDB 记「弟」），王崇文 之父／母即 王崇高 之父／母。
          source:
            id: s_RUW0svwi8kxC6dRXhzaCso
            source_type: api_record
            title: 中国历代人物传记资料库：王崇高（CBDB 266139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266139&o=json
            external_identifier: CBDB:266139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Btkcss9NyiAEPVV7JN1ddH
        status: active
        display_name: 王崇高
        merged_into_person_id: null
    - claim:
        id: c_NUHUZIfRlD-n_QcVFtfqhq
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FHKYKS2N9qGsxoqVq4Xqcd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d-lLc1gw77bMXuvnMjzXg2
          claim_id: c_NUHUZIfRlD-n_QcVFtfqhq
          source_id: s_kGAgFPFR-Tng96L1DRplbO
          stance: supports
          locator: CBDB：兄弟 王崇文（126686）之父／母 王珣
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇有 与 王崇文 为同胞（CBDB 记「兄」），王崇文 之父／母即 王崇有 之父／母。
          source:
            id: s_kGAgFPFR-Tng96L1DRplbO
            source_type: api_record
            title: 中国历代人物传记资料库：王崇有（CBDB 266144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266144&o=json
            external_identifier: CBDB:266144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FHKYKS2N9qGsxoqVq4Xqcd
        status: active
        display_name: 王崇有
        merged_into_person_id: null
    - claim:
        id: c_oc4s8e8x14i4-dm4Z6ntpo
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P3HHH8MTBQL8eA6N1VwFN8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EHyqd0jmlo7uROY023iBv3
          claim_id: c_oc4s8e8x14i4-dm4Z6ntpo
          source_id: s_GtTmv4bOgUkCJUpmLAGwZe
          stance: supports
          locator: CBDB：兄弟 王崇文（126686）之父／母 王珣
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇仁 与 王崇文 为同胞（CBDB 记「弟」），王崇文 之父／母即 王崇仁 之父／母。
          source:
            id: s_GtTmv4bOgUkCJUpmLAGwZe
            source_type: api_record
            title: 中国历代人物传记资料库：王崇仁（CBDB 266140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266140&o=json
            external_identifier: CBDB:266140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P3HHH8MTBQL8eA6N1VwFN8
        status: active
        display_name: 王崇仁
        merged_into_person_id: null
    - claim:
        id: c_Txb6A0wH9cauFws91CxPTS
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UB9UnQF9RNYnd9wP7wiG61
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cdDmeRzfLW7SccEBWVldbI
          claim_id: c_Txb6A0wH9cauFws91CxPTS
          source_id: s_KSpIDI9CU2hZzUmQ7zMpCG
          stance: supports
          locator: CBDB：兄弟 王崇文（126686）之父／母 王珣
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇素 与 王崇文 为同胞（CBDB 记「兄」），王崇文 之父／母即 王崇素 之父／母。
          source:
            id: s_KSpIDI9CU2hZzUmQ7zMpCG
            source_type: api_record
            title: 中国历代人物传记资料库：王崇素（CBDB 266146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266146&o=json
            external_identifier: CBDB:266146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UB9UnQF9RNYnd9wP7wiG61
        status: active
        display_name: 王崇素
        merged_into_person_id: null
    - claim:
        id: c_kd4DyVuyxT56qGhtdFuQ_t
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_idJk9fSAdyCtoKD3Qf9ESP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qOOx7UM8thGmuCfp-0l-jS
          claim_id: c_kd4DyVuyxT56qGhtdFuQ_t
          source_id: s_h_S9t48v1A4Xj5OffU5BAR
          stance: supports
          locator: CBDB：兄弟 王崇文（126686）之父／母 王珣
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇儒 与 王崇文 为同胞（CBDB 记「弟」），王崇文 之父／母即 王崇儒 之父／母。
          source:
            id: s_h_S9t48v1A4Xj5OffU5BAR
            source_type: api_record
            title: 中国历代人物传记资料库：王崇儒（CBDB 266137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266137&o=json
            external_identifier: CBDB:266137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_idJk9fSAdyCtoKD3Qf9ESP
        status: active
        display_name: 王崇儒
        merged_into_person_id: null
    - claim:
        id: c_SaG7iUVD3VxIQKLfOil8ya
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wSpR3rZLeBx25XyPoZfQV7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7-MVrh3ss9tckhcYDvbDIR
          claim_id: c_SaG7iUVD3VxIQKLfOil8ya
          source_id: s_WX-QzX7T66JKuwyGhCrhiB
          stance: supports
          locator: CBDB：兄弟 王崇文（126686）之父／母 王珣
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇讓 与 王崇文 为同胞（CBDB 记「兄」），王崇文 之父／母即 王崇讓 之父／母。
          source:
            id: s_WX-QzX7T66JKuwyGhCrhiB
            source_type: api_record
            title: 中国历代人物传记资料库：王崇讓（CBDB 266142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266142&o=json
            external_identifier: CBDB:266142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wSpR3rZLeBx25XyPoZfQV7
        status: active
        display_name: 王崇讓
        merged_into_person_id: null
    - claim:
        id: c_j6C3gL7uvqdONbXqZTNe2G
        subject_person_id: p_7xPYAwpK8PS9R7QKy5varP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xzwhd9F2mUCEYUfRq6pquP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j6n768-EKfTTuKDddZsVu-
          claim_id: c_j6C3gL7uvqdONbXqZTNe2G
          source_id: s_nRzfIO9qlGrdi6LqZP8H4J
          stance: supports
          locator: CBDB：兄弟 王崇文（126686）之父／母 王珣
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇禮 与 王崇文 为同胞（CBDB 记「兄」），王崇文 之父／母即 王崇禮 之父／母。
          source:
            id: s_nRzfIO9qlGrdi6LqZP8H4J
            source_type: api_record
            title: 中国历代人物传记资料库：王崇禮（CBDB 266143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266143&o=json
            external_identifier: CBDB:266143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xzwhd9F2mUCEYUfRq6pquP
        status: active
        display_name: 王崇禮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珣 | accepted |
| bio.summary | 王珣，明人物。弘治六年進士，籍贯曹縣，曾任都察院右副都御史、右參政。（中国历代人物传记资料库 CBDB 266132） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_skjKvTKbz5aUC8X3W9ytWH | 王崇文 | accepted |
| children | p_5btbNFkuNqxJDcg99ibvfp | 王崇儉 | accepted |
| children | p_gZEG3LV8BoSpVH5X7JPghB | 王崇獻 | accepted |
| children | p_Btkcss9NyiAEPVV7JN1ddH | 王崇高 | accepted |
| children | p_FHKYKS2N9qGsxoqVq4Xqcd | 王崇有 | accepted |
| children | p_P3HHH8MTBQL8eA6N1VwFN8 | 王崇仁 | accepted |
| children | p_UB9UnQF9RNYnd9wP7wiG61 | 王崇素 | accepted |
| children | p_idJk9fSAdyCtoKD3Qf9ESP | 王崇儒 | accepted |
| children | p_wSpR3rZLeBx25XyPoZfQV7 | 王崇讓 | accepted |
| children | p_xzwhd9F2mUCEYUfRq6pquP | 王崇禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇高（CBDB 266139）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266139&o=json)
- [中国历代人物传记资料库：王崇禮（CBDB 266143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266143&o=json)
- [中国历代人物传记资料库：王崇讓（CBDB 266142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266142&o=json)
- [中国历代人物传记资料库：王崇仁（CBDB 266140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266140&o=json)
- [中国历代人物传记资料库：王崇儒（CBDB 266137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266137&o=json)
- [中国历代人物传记资料库：王崇素（CBDB 266146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266146&o=json)
- [中国历代人物传记资料库：王崇有（CBDB 266144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266144&o=json)
- [中国历代人物传记资料库：王珣（CBDB 266132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266132&o=json)
