---
schema: wang-person/v1
id: p_yUh5Ys3GsJr5X9EvLigP9m
status: active
merged_into: null
display_name: 王璧
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KAPFk7Qwyj944vikcq5ND1
        subject_person_id: p_yUh5Ys3GsJr5X9EvLigP9m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HMN1GJ3zQD6tZfHQtp2uW7
          claim_id: c_KAPFk7Qwyj944vikcq5ND1
          source_id: s_b1eFbYzJkT9aHECg1r1H9A
          stance: supports
          locator: CBDB:208145
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208145）
          source: &a1
            id: s_b1eFbYzJkT9aHECg1r1H9A
            source_type: api_record
            title: 中国历代人物传记资料库：王璧（CBDB 208145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208145&o=json
            external_identifier: CBDB:208145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_caxWjDwJnFU5tyYg1nYQoq
        subject_person_id: p_yUh5Ys3GsJr5X9EvLigP9m
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1419年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tvFt5oz7bccTH2hR2jzMbv
          claim_id: c_caxWjDwJnFU5tyYg1nYQoq
          source_id: s_b1eFbYzJkT9aHECg1r1H9A
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
        id: c_XD3Z8XLjRoECX7qBPf1MxE
        subject_person_id: p_yUh5Ys3GsJr5X9EvLigP9m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璧（生于1419年），明人物。正統十三年進士，籍贯合州，入仕進士。（中国历代人物传记资料库 CBDB 208145）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8nTi8gYRn84iL0VrNZy4ul
          claim_id: c_XD3Z8XLjRoECX7qBPf1MxE
          source_id: s_b1eFbYzJkT9aHECg1r1H9A
          stance: supports
          locator: CBDB:208145
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nEok3-7d4U5lsiPo3e4BQ1
        subject_person_id: p_kaRFgEVMADyEpNGFyiYQu5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yUh5Ys3GsJr5X9EvLigP9m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uJxC-1aLtf-UYAkFgxC0UX
          claim_id: c_nEok3-7d4U5lsiPo3e4BQ1
          source_id: s_7tmLAYXPNhkFwWnLjNweWN
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第四十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7tmLAYXPNhkFwWnLjNweWN
            source_type: api_record
            title: 中国历代人物传记资料库：王汝義（CBDB 241030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241030&o=json
            external_identifier: CBDB:241030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_kaRFgEVMADyEpNGFyiYQu5
        status: active
        display_name: 王汝義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_aRaEiUhVmajlYy6WZ1e2aY
        subject_person_id: p_mDr8LUHaJgHotM51VUQz8e
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yUh5Ys3GsJr5X9EvLigP9m
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A2LK1q_iDQxJQeto14WIoz
          claim_id: c_aRaEiUhVmajlYy6WZ1e2aY
          source_id: s_MVJrBewghrMp2NLCR7Gh7G
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第四十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MVJrBewghrMp2NLCR7Gh7G
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 241029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241029&o=json
            external_identifier: CBDB:241029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.938Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mDr8LUHaJgHotM51VUQz8e
        status: active
        display_name: 王佐
        merged_into_person_id: null
    - claim:
        id: c_ecZxNsFJ7AmvpAu_2bFtzn
        subject_person_id: p_yrbtFUQmi2x2die1oYwa7b
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yUh5Ys3GsJr5X9EvLigP9m
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lSD8Kc8d472J5skbcq2oaf
          claim_id: c_ecZxNsFJ7AmvpAu_2bFtzn
          source_id: s_qBt4L6ytE5jq33sMXrAqa6
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第四十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qBt4L6ytE5jq33sMXrAqa6
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 241028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241028&o=json
            external_identifier: CBDB:241028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yrbtFUQmi2x2die1oYwa7b
        status: active
        display_name: 王斌
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_zuAKV2MfZqSb2qAMCBz1EI
        subject_person_id: p_An9MoaQzb7STT5R9QRDiX4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yUh5Ys3GsJr5X9EvLigP9m
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rKKw6Fclg4hIFno0bbwM8B
          claim_id: c_zuAKV2MfZqSb2qAMCBz1EI
          source_id: s_P9Bbp7ylHsh7_EYx7wEL11
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208145 王璧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_P9Bbp7ylHsh7_EYx7wEL11
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 241036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241036&o=json
            external_identifier: CBDB:241036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_An9MoaQzb7STT5R9QRDiX4
        status: active
        display_name: 王璋
        merged_into_person_id: null
    - claim:
        id: c_F8Rrjqh8X-DayJPVc5wnPg
        subject_person_id: p_BVWFGMKZ6mBRGgbJEUqY4P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yUh5Ys3GsJr5X9EvLigP9m
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G251Stz-H3gwMXGooiguyY
          claim_id: c_F8Rrjqh8X-DayJPVc5wnPg
          source_id: s_tH4sfbyti33rX3za6pkEwy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208145 王璧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tH4sfbyti33rX3za6pkEwy
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 241034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241034&o=json
            external_identifier: CBDB:241034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BVWFGMKZ6mBRGgbJEUqY4P
        status: active
        display_name: 王珪
        merged_into_person_id: null
    - claim:
        id: c_onrEl6xzE4t9JRAwr61pv0
        subject_person_id: p_JC4xS6ndeTfcDNDrJZuDCx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yUh5Ys3GsJr5X9EvLigP9m
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z8v3s5N6V7DIU5QL8-pgaS
          claim_id: c_onrEl6xzE4t9JRAwr61pv0
          source_id: s_GB6mfUtaMWbucTEHClrZII
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208145 王璧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GB6mfUtaMWbucTEHClrZII
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 241035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241035&o=json
            external_identifier: CBDB:241035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JC4xS6ndeTfcDNDrJZuDCx
        status: active
        display_name: 王瓚
        merged_into_person_id: null
    - claim:
        id: c_fS90yvIKQE__9kTLwkSSCD
        subject_person_id: p_k33S1s7NsjC167CaCVTDtd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yUh5Ys3GsJr5X9EvLigP9m
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xdBKbEk5Q9HVFEDX8PvdEm
          claim_id: c_fS90yvIKQE__9kTLwkSSCD
          source_id: s_DVfui97CDnLoAgOQZoNrNh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208145 王璧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DVfui97CDnLoAgOQZoNrNh
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 241037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241037&o=json
            external_identifier: CBDB:241037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_k33S1s7NsjC167CaCVTDtd
        status: active
        display_name: 王瓊
        merged_into_person_id: null
---

# 王璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璧 | accepted |
| birth.date | 1419年 | accepted |
| bio.summary | 王璧（生于1419年），明人物。正統十三年進士，籍贯合州，入仕進士。（中国历代人物传记资料库 CBDB 208145） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kaRFgEVMADyEpNGFyiYQu5 | 王汝義 | accepted |
| ancestors | p_mDr8LUHaJgHotM51VUQz8e | 王佐 | accepted |
| ancestors | p_yrbtFUQmi2x2die1oYwa7b | 王斌 | accepted |
| other | p_An9MoaQzb7STT5R9QRDiX4 | 王璋 | accepted |
| other | p_BVWFGMKZ6mBRGgbJEUqY4P | 王珪 | accepted |
| other | p_JC4xS6ndeTfcDNDrJZuDCx | 王瓚 | accepted |
| other | p_k33S1s7NsjC167CaCVTDtd | 王瓊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璧（CBDB 208145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208145&o=json)
- [中国历代人物传记资料库：王斌（CBDB 241028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241028&o=json)
- [中国历代人物传记资料库：王珪（CBDB 241034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241034&o=json)
- [中国历代人物传记资料库：王瓊（CBDB 241037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241037&o=json)
- [中国历代人物传记资料库：王汝義（CBDB 241030）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241030&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 241035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241035&o=json)
- [中国历代人物传记资料库：王璋（CBDB 241036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241036&o=json)
- [中国历代人物传记资料库：王佐（CBDB 241029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241029&o=json)
