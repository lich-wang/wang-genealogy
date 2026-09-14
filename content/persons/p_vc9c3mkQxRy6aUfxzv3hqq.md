---
schema: wang-person/v1
id: p_vc9c3mkQxRy6aUfxzv3hqq
status: active
merged_into: null
display_name: 王三接
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5NonSRyBhMAXU7iHssVPt6
        subject_person_id: p_vc9c3mkQxRy6aUfxzv3hqq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三接
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xTNTA5DBT57FUFxnfn63V6
          claim_id: c_5NonSRyBhMAXU7iHssVPt6
          source_id: s_P9Vmz2YG7KJjvEp1x5Kc7V
          stance: supports
          locator: CBDB:203882
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203882）
          source: &a1
            id: s_P9Vmz2YG7KJjvEp1x5Kc7V
            source_type: api_record
            title: 中国历代人物传记资料库：王三接（CBDB 203882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203882&o=json
            external_identifier: CBDB:203882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.807Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2kJYD7G8BAVu6M2waa61LV
        subject_person_id: p_vc9c3mkQxRy6aUfxzv3hqq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1508年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jBpPmAMCwAEBL5aaFruCnE
          claim_id: c_2kJYD7G8BAVu6M2waa61LV
          source_id: s_P9Vmz2YG7KJjvEp1x5Kc7V
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
        id: c_quCXLc1uuhM4kCiScfePcz
        subject_person_id: p_vc9c3mkQxRy6aUfxzv3hqq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三接（生于1508年），明人物。明清進士進士，籍贯洪洞，入仕進士。（中国历代人物传记资料库 CBDB 203882）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C_2NTjiAplu1JNo1NDWYTf
          claim_id: c_quCXLc1uuhM4kCiScfePcz
          source_id: s_P9Vmz2YG7KJjvEp1x5Kc7V
          stance: supports
          locator: CBDB:203882
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_H5DHtcKk4sjfxvrDq0QfUq
        subject_person_id: p_qsqNNxC6SQb2oA7yPxzojc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vc9c3mkQxRy6aUfxzv3hqq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nsGwaKQVPhoBZJfFDmuuvw
          claim_id: c_H5DHtcKk4sjfxvrDq0QfUq
          source_id: s_GYs3JvJ7e3R4XSB5TUuNUD
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百八十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GYs3JvJ7e3R4XSB5TUuNUD
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 311389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311389&o=json
            external_identifier: CBDB:311389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.859Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qsqNNxC6SQb2oA7yPxzojc
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_1r5oFFfN8a-CJKNt4J7AIv
        subject_person_id: p_YieZ1UoCG2GNbpNMx4NkYV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vc9c3mkQxRy6aUfxzv3hqq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f9QKIpyHsytyX_fkl7kQPZ
          claim_id: c_1r5oFFfN8a-CJKNt4J7AIv
          source_id: s_C2MDbT2xF1TYpzv9bs6Nq8
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百八十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_C2MDbT2xF1TYpzv9bs6Nq8
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 311388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311388&o=json
            external_identifier: CBDB:311388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YieZ1UoCG2GNbpNMx4NkYV
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_gccDFZZDsQV7tGJYARSh7u
        subject_person_id: p_BH6i3mTKcB47JQvKoKiYBL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vc9c3mkQxRy6aUfxzv3hqq
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-9PxFFBG_0prEOMs6dWgKc
          claim_id: c_gccDFZZDsQV7tGJYARSh7u
          source_id: s_q2j5CmWFENRMJ9Tez51pA2
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百八十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_q2j5CmWFENRMJ9Tez51pA2
            source_type: api_record
            title: 中国历代人物传记资料库：王從宣（CBDB 311387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311387&o=json
            external_identifier: CBDB:311387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_BH6i3mTKcB47JQvKoKiYBL
        status: active
        display_name: 王從宣
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_wF-trqQsh_dUV9XurYPsjF
        subject_person_id: p_4qbcftqg5nJTBRCpr65zcA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vc9c3mkQxRy6aUfxzv3hqq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zpLPyAH9fwDbef6OsgHgN2
          claim_id: c_wF-trqQsh_dUV9XurYPsjF
          source_id: s_bcdt-OeaRGRhJsvrPh41W_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203882 王三接）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bcdt-OeaRGRhJsvrPh41W_
            source_type: api_record
            title: 中国历代人物传记资料库：王三德（CBDB 311394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311394&o=json
            external_identifier: CBDB:311394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4qbcftqg5nJTBRCpr65zcA
        status: active
        display_name: 王三德
        merged_into_person_id: null
    - claim:
        id: c_O78k8S9AlgGPGQQ4K-UKJc
        subject_person_id: p_9XbcKSHkWoiKfdXHS1vmSN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vc9c3mkQxRy6aUfxzv3hqq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AzCle7rpxtvCZobUg3ZGZU
          claim_id: c_O78k8S9AlgGPGQQ4K-UKJc
          source_id: s_6PKUY1yvb-Uz6UxxZIm629
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203882 王三接）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6PKUY1yvb-Uz6UxxZIm629
            source_type: api_record
            title: 中国历代人物传记资料库：王三槐（CBDB 311396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311396&o=json
            external_identifier: CBDB:311396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9XbcKSHkWoiKfdXHS1vmSN
        status: active
        display_name: 王三槐
        merged_into_person_id: null
    - claim:
        id: c_xusvFstA4COm5a1jwq5GmZ
        subject_person_id: p_LBNLcSyeGkhZ18tJMVzLgu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vc9c3mkQxRy6aUfxzv3hqq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QWqbvdIJORMbadGFlxx-VZ
          claim_id: c_xusvFstA4COm5a1jwq5GmZ
          source_id: s_kIMEbeLl110Jel8D7_h72o
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203882 王三接）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kIMEbeLl110Jel8D7_h72o
            source_type: api_record
            title: 中国历代人物传记资料库：王三省（CBDB 311398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311398&o=json
            external_identifier: CBDB:311398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LBNLcSyeGkhZ18tJMVzLgu
        status: active
        display_name: 王三省
        merged_into_person_id: null
    - claim:
        id: c_j_fSPhiPotkOyJHW9ZDbXT
        subject_person_id: p_N2mo9RCkWRu3nTPvjhL9zT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vc9c3mkQxRy6aUfxzv3hqq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8a7yc1hrvpwyurTQgm3cAz
          claim_id: c_j_fSPhiPotkOyJHW9ZDbXT
          source_id: s_C_3FfwDpe9oi2cWFc5Amjq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203882 王三接）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_C_3FfwDpe9oi2cWFc5Amjq
            source_type: api_record
            title: 中国历代人物传记资料库：王三聘（CBDB 311397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311397&o=json
            external_identifier: CBDB:311397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N2mo9RCkWRu3nTPvjhL9zT
        status: active
        display_name: 王三聘
        merged_into_person_id: null
    - claim:
        id: c_wClczLMlxYyw7E4OC6Yp4K
        subject_person_id: p_vc9c3mkQxRy6aUfxzv3hqq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w6zLo9trTY22THztLK6BRA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WNrT5XzTL3mUlHwQIhkgKe
          claim_id: c_wClczLMlxYyw7E4OC6Yp4K
          source_id: s_E1L92XiDYNZsGPCY7y2Gsm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203882 王三接）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_E1L92XiDYNZsGPCY7y2Gsm
            source_type: api_record
            title: 中国历代人物传记资料库：王三益（CBDB 311399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311399&o=json
            external_identifier: CBDB:311399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w6zLo9trTY22THztLK6BRA
        status: active
        display_name: 王三益
        merged_into_person_id: null
---

# 王三接

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三接 | accepted |
| birth.date | 1508年 | accepted |
| bio.summary | 王三接（生于1508年），明人物。明清進士進士，籍贯洪洞，入仕進士。（中国历代人物传记资料库 CBDB 203882） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qsqNNxC6SQb2oA7yPxzojc | 王相 | accepted |
| ancestors | p_YieZ1UoCG2GNbpNMx4NkYV | 王俊 | accepted |
| ancestors | p_BH6i3mTKcB47JQvKoKiYBL | 王從宣 | accepted |
| other | p_4qbcftqg5nJTBRCpr65zcA | 王三德 | accepted |
| other | p_9XbcKSHkWoiKfdXHS1vmSN | 王三槐 | accepted |
| other | p_LBNLcSyeGkhZ18tJMVzLgu | 王三省 | accepted |
| other | p_N2mo9RCkWRu3nTPvjhL9zT | 王三聘 | accepted |
| other | p_w6zLo9trTY22THztLK6BRA | 王三益 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從宣（CBDB 311387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311387&o=json)
- [中国历代人物传记资料库：王俊（CBDB 311388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311388&o=json)
- [中国历代人物传记资料库：王三德（CBDB 311394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311394&o=json)
- [中国历代人物传记资料库：王三槐（CBDB 311396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311396&o=json)
- [中国历代人物传记资料库：王三接（CBDB 203882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203882&o=json)
- [中国历代人物传记资料库：王三聘（CBDB 311397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311397&o=json)
- [中国历代人物传记资料库：王三省（CBDB 311398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311398&o=json)
- [中国历代人物传记资料库：王三益（CBDB 311399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311399&o=json)
- [中国历代人物传记资料库：王相（CBDB 311389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311389&o=json)
