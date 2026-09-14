---
schema: wang-person/v1
id: p_5GoCZ6LMqwnyLpJJPbTAtp
status: active
merged_into: null
display_name: 王溉槐
cbdb_id: 235464
revision: 11
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R6BAjqFGXG36pcm5CMw2q5
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溉槐，明人物。籍贯東光，入仕庠生。（中国历代人物传记资料库 CBDB 235464）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ksKc-8MdtcNv65wKJlP-1O
          claim_id: c_R6BAjqFGXG36pcm5CMw2q5
          source_id: s_QXYD7rdXyT5aDJJeaSJ1rk
          stance: supports
          locator: CBDB:235464
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QXYD7rdXyT5aDJJeaSJ1rk
            source_type: api_record
            title: 中国历代人物传记资料库：王溉槐（CBDB 235464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235464&o=json
            external_identifier: CBDB:235464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qUN28cVgPMGShUNxwhVMy2
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溉槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jF9ECza9AMRBF42CmeZ3gv
          claim_id: c_qUN28cVgPMGShUNxwhVMy2
          source_id: s_QXYD7rdXyT5aDJJeaSJ1rk
          stance: supports
          locator: CBDB:235464
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_v-XTN3ch9jdsQv9VHpFv75
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hpsegmCooo9gAZbLr3f93A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nrWO6LdgFaxTHiTDcSx3So
          claim_id: c_v-XTN3ch9jdsQv9VHpFv75
          source_id: s_QXYD7rdXyT5aDJJeaSJ1rk
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二百二十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QXYD7rdXyT5aDJJeaSJ1rk
            source_type: api_record
            title: 中国历代人物传记资料库：王溉槐（CBDB 235464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235464&o=json
            external_identifier: CBDB:235464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_hpsegmCooo9gAZbLr3f93A
        status: active
        display_name: 王元爽
        merged_into_person_id: null
    - claim:
        id: c_mxJe81QNWLN5WXOlmF2V0d
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_78RagDdaNsyfMD2L9KN1J1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T2tNLQrrbU2hLO1Pg5oOIK
          claim_id: c_mxJe81QNWLN5WXOlmF2V0d
          source_id: s_AkKGofplVwnpnLus_0FjHC
          stance: supports
          locator: CBDB：兄弟 王元爽（207767）之父／母 王溉槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王元繼 与 王元爽 为同胞（CBDB 记「兄」），王元爽 之父／母即 王元繼 之父／母。
          source:
            id: s_AkKGofplVwnpnLus_0FjHC
            source_type: api_record
            title: 中国历代人物传记资料库：王元繼（CBDB 235475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235475&o=json
            external_identifier: CBDB:235475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_78RagDdaNsyfMD2L9KN1J1
        status: active
        display_name: 王元繼
        merged_into_person_id: null
    - claim:
        id: c_YK-0YuqwbZHmBbQmjrRiNt
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hp2gs71z7Ej3aTLnCJZ2pJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qySX9BasKFXZvcE9qop-Sk
          claim_id: c_YK-0YuqwbZHmBbQmjrRiNt
          source_id: s_uBcxwLpUZFbUk5jj5P59iT
          stance: supports
          locator: CBDB：兄弟 王元爽（207767）之父／母 王溉槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王元選 与 王元爽 为同胞（CBDB 记「兄」），王元爽 之父／母即 王元選 之父／母。
          source:
            id: s_uBcxwLpUZFbUk5jj5P59iT
            source_type: api_record
            title: 中国历代人物传记资料库：王元選（CBDB 235478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235478&o=json
            external_identifier: CBDB:235478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hp2gs71z7Ej3aTLnCJZ2pJ
        status: active
        display_name: 王元選
        merged_into_person_id: null
    - claim:
        id: c_Up_fVgdwrWwJJjR6WV1OSM
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KKZvLds578GDQHNKEGJXPU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i-5UgIkA6ohxZeZio99Y_O
          claim_id: c_Up_fVgdwrWwJJjR6WV1OSM
          source_id: s_7A3ytk5sYImJfOWYO_WSjT
          stance: supports
          locator: CBDB：兄弟 王元爽（207767）之父／母 王溉槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王元鑑 与 王元爽 为同胞（CBDB 记「兄」），王元爽 之父／母即 王元鑑 之父／母。
          source:
            id: s_7A3ytk5sYImJfOWYO_WSjT
            source_type: api_record
            title: 中国历代人物传记资料库：王元鑑（CBDB 235477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235477&o=json
            external_identifier: CBDB:235477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KKZvLds578GDQHNKEGJXPU
        status: active
        display_name: 王元鑑
        merged_into_person_id: null
    - claim:
        id: c_1Jjmw494_2x8WDPc8aujQ6
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MVxkJ4qnAPvK4KQJhadCYj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kYGmBt9lrerWEtn_Un8aBC
          claim_id: c_1Jjmw494_2x8WDPc8aujQ6
          source_id: s__3AccALKjeRg8dIDnVJ0yT
          stance: supports
          locator: CBDB：兄弟 王元爽（207767）之父／母 王溉槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王元蘭 与 王元爽 为同胞（CBDB 记「兄」），王元爽 之父／母即 王元蘭 之父／母。
          source:
            id: s__3AccALKjeRg8dIDnVJ0yT
            source_type: api_record
            title: 中国历代人物传记资料库：王元蘭（CBDB 235480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235480&o=json
            external_identifier: CBDB:235480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MVxkJ4qnAPvK4KQJhadCYj
        status: active
        display_name: 王元蘭
        merged_into_person_id: null
    - claim:
        id: c_RQ-T9CJPPNArM4YzcoFB1j
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T7XCT5auDmxppeFRTyn4zp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rIxMpNZ2jGaE5_K301VU5X
          claim_id: c_RQ-T9CJPPNArM4YzcoFB1j
          source_id: s_Wdt0hFk6rfHGUMowIH39A7
          stance: supports
          locator: CBDB：兄弟 王元爽（207767）之父／母 王溉槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王元婁 与 王元爽 为同胞（CBDB 记「兄」），王元爽 之父／母即 王元婁 之父／母。
          source:
            id: s_Wdt0hFk6rfHGUMowIH39A7
            source_type: api_record
            title: 中国历代人物传记资料库：王元婁（CBDB 235472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235472&o=json
            external_identifier: CBDB:235472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_T7XCT5auDmxppeFRTyn4zp
        status: active
        display_name: 王元婁
        merged_into_person_id: null
    - claim:
        id: c_N1l-G6sRwFetKOPOr95osl
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a66XwJPN1SnGehtNYkmZT2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_274pZVQymm01Uf965YTG3E
          claim_id: c_N1l-G6sRwFetKOPOr95osl
          source_id: s_lFfYfoTuV4RtjcOJVoSdzb
          stance: supports
          locator: CBDB：兄弟 王元爽（207767）之父／母 王溉槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王元承 与 王元爽 为同胞（CBDB 记「兄」），王元爽 之父／母即 王元承 之父／母。
          source:
            id: s_lFfYfoTuV4RtjcOJVoSdzb
            source_type: api_record
            title: 中国历代人物传记资料库：王元承（CBDB 235479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235479&o=json
            external_identifier: CBDB:235479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_a66XwJPN1SnGehtNYkmZT2
        status: active
        display_name: 王元承
        merged_into_person_id: null
    - claim:
        id: c_4dr6Y1ckzHwHtPFjRMZ7gP
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kAgKpD4X8VXubGDiK7GRNB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KamW-BMXebrN8IVXWn1f6Z
          claim_id: c_4dr6Y1ckzHwHtPFjRMZ7gP
          source_id: s_9Nqc5WqwXZNV9SRFjo4Wd3
          stance: supports
          locator: CBDB：兄弟 王元爽（207767）之父／母 王溉槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王元衡 与 王元爽 为同胞（CBDB 记「兄」），王元爽 之父／母即 王元衡 之父／母。
          source:
            id: s_9Nqc5WqwXZNV9SRFjo4Wd3
            source_type: api_record
            title: 中国历代人物传记资料库：王元衡（CBDB 235471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235471&o=json
            external_identifier: CBDB:235471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kAgKpD4X8VXubGDiK7GRNB
        status: active
        display_name: 王元衡
        merged_into_person_id: null
    - claim:
        id: c_Ber57rTz8gTR7joE-z1qwA
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rPQwNRR3778vPLDizaxFNZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U3IIJrbkadiK4XmAtOFutv
          claim_id: c_Ber57rTz8gTR7joE-z1qwA
          source_id: s_njHpuqJsHJ-tTz9NBvJWG_
          stance: supports
          locator: CBDB：兄弟 王元爽（207767）之父／母 王溉槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王元俊 与 王元爽 为同胞（CBDB 记「兄」），王元爽 之父／母即 王元俊 之父／母。
          source:
            id: s_njHpuqJsHJ-tTz9NBvJWG_
            source_type: api_record
            title: 中国历代人物传记资料库：王元俊（CBDB 235473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235473&o=json
            external_identifier: CBDB:235473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rPQwNRR3778vPLDizaxFNZ
        status: active
        display_name: 王元俊
        merged_into_person_id: null
    - claim:
        id: c_e_vffbozw3C2JZQ_mHyQt_
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y6zteE4f29zi6ki6BtCkQj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N0OeeyvtXqTsQdN8KTFeB3
          claim_id: c_e_vffbozw3C2JZQ_mHyQt_
          source_id: s_xuOCxkyczoXLN292kZd6Hc
          stance: supports
          locator: CBDB：兄弟 王元爽（207767）之父／母 王溉槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王元舉 与 王元爽 为同胞（CBDB 记「兄」），王元爽 之父／母即 王元舉 之父／母。
          source:
            id: s_xuOCxkyczoXLN292kZd6Hc
            source_type: api_record
            title: 中国历代人物传记资料库：王元舉（CBDB 235474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235474&o=json
            external_identifier: CBDB:235474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y6zteE4f29zi6ki6BtCkQj
        status: active
        display_name: 王元舉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王溉槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王溉槐，明人物。籍贯東光，入仕庠生。（中国历代人物传记资料库 CBDB 235464） | accepted |
| name.primary | 王溉槐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hpsegmCooo9gAZbLr3f93A | 王元爽 | accepted |
| children | p_78RagDdaNsyfMD2L9KN1J1 | 王元繼 | accepted |
| children | p_Hp2gs71z7Ej3aTLnCJZ2pJ | 王元選 | accepted |
| children | p_KKZvLds578GDQHNKEGJXPU | 王元鑑 | accepted |
| children | p_MVxkJ4qnAPvK4KQJhadCYj | 王元蘭 | accepted |
| children | p_T7XCT5auDmxppeFRTyn4zp | 王元婁 | accepted |
| children | p_a66XwJPN1SnGehtNYkmZT2 | 王元承 | accepted |
| children | p_kAgKpD4X8VXubGDiK7GRNB | 王元衡 | accepted |
| children | p_rPQwNRR3778vPLDizaxFNZ | 王元俊 | accepted |
| children | p_y6zteE4f29zi6ki6BtCkQj | 王元舉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王溉槐（CBDB 235464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235464&o=json)
- [中国历代人物传记资料库：王元承（CBDB 235479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235479&o=json)
- [中国历代人物传记资料库：王元衡（CBDB 235471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235471&o=json)
- [中国历代人物传记资料库：王元繼（CBDB 235475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235475&o=json)
- [中国历代人物传记资料库：王元鑑（CBDB 235477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235477&o=json)
- [中国历代人物传记资料库：王元舉（CBDB 235474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235474&o=json)
- [中国历代人物传记资料库：王元俊（CBDB 235473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235473&o=json)
- [中国历代人物传记资料库：王元蘭（CBDB 235480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235480&o=json)
- [中国历代人物传记资料库：王元婁（CBDB 235472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235472&o=json)
- [中国历代人物传记资料库：王元選（CBDB 235478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235478&o=json)
