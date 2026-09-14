---
schema: wang-person/v1
id: p_rn5bs45vsLNkK5gzRaTQ98
status: active
merged_into: null
display_name: 王法
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gjd4BLpFgJHtnWXJmdtM63
        subject_person_id: p_rn5bs45vsLNkK5gzRaTQ98
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王法
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pjve6UzDMfkUE1yrrTCcwx
          claim_id: c_Gjd4BLpFgJHtnWXJmdtM63
          source_id: s_yQnx55PXgPSsjfouyrNp2S
          stance: supports
          locator: CBDB:210101
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210101）
          source: &a1
            id: s_yQnx55PXgPSsjfouyrNp2S
            source_type: api_record
            title: 中国历代人物传记资料库：王法（CBDB 210101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210101&o=json
            external_identifier: CBDB:210101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.998Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4YoWnsBG9Jp7ByJnB3nTwt
        subject_person_id: p_rn5bs45vsLNkK5gzRaTQ98
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王法，明人物。隆慶五年進士，籍贯崑山，入仕監生。（中国历代人物传记资料库 CBDB 210101）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CdXTsdpcEdtFN4VJzVjOXX
          claim_id: c_4YoWnsBG9Jp7ByJnB3nTwt
          source_id: s_yQnx55PXgPSsjfouyrNp2S
          stance: supports
          locator: CBDB:210101
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_lwdOjZwNNfeLhqcYikNJXN
        subject_person_id: p_rn5bs45vsLNkK5gzRaTQ98
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8fDiA64i7XEi5BnTAt9qhu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U97vOXo0h8IWka-iTDjssI
          claim_id: c_lwdOjZwNNfeLhqcYikNJXN
          source_id: s_yQnx55PXgPSsjfouyrNp2S
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百一十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8fDiA64i7XEi5BnTAt9qhu
        status: active
        display_name: 王炳衡
        merged_into_person_id: null
    - claim:
        id: c_JHjM-4Nd3lguDIA-zJ7Mvp
        subject_person_id: p_rn5bs45vsLNkK5gzRaTQ98
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BSK3JVZbYgKQNPmF9hrz5q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u8HffRxdxLKK-KVKSt1JeH
          claim_id: c_JHjM-4Nd3lguDIA-zJ7Mvp
          source_id: s_yQnx55PXgPSsjfouyrNp2S
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第二十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BSK3JVZbYgKQNPmF9hrz5q
        status: active
        display_name: 王炳璿
        merged_into_person_id: null
    - claim:
        id: c_bSIrdh7pC7ED8TdRcaDNIn
        subject_person_id: p_rn5bs45vsLNkK5gzRaTQ98
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1VJSjVyXEnau58kJ2u5mhW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Myh02zL0nLRSIbkbaRP8A5
          claim_id: c_bSIrdh7pC7ED8TdRcaDNIn
          source_id: s_QudfHlawyOoc2ViLq6ppn5
          stance: supports
          locator: CBDB：兄弟 王炳璿（126592）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王炳輔 与 王炳璿 为同胞（CBDB 记「兄」），王炳璿 之父／母即 王炳輔 之父／母。
          source:
            id: s_QudfHlawyOoc2ViLq6ppn5
            source_type: api_record
            title: 中国历代人物传记资料库：王炳輔（CBDB 213346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213346&o=json
            external_identifier: CBDB:213346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1VJSjVyXEnau58kJ2u5mhW
        status: active
        display_name: 王炳輔
        merged_into_person_id: null
    - claim:
        id: c_ghMMDlrg0-qNJtiu-X2bmb
        subject_person_id: p_rn5bs45vsLNkK5gzRaTQ98
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3McrPk5i4DFURJJMpaJ4Ns
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q8C1HkEqoWETzn_LRB9osO
          claim_id: c_ghMMDlrg0-qNJtiu-X2bmb
          source_id: s_H8h7AD4tUImI6UUsK3-KBB
          stance: supports
          locator: CBDB：兄弟 王炳璿（126592）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王炳斗 与 王炳璿 为同胞（CBDB 记「兄」），王炳璿 之父／母即 王炳斗 之父／母。
          source:
            id: s_H8h7AD4tUImI6UUsK3-KBB
            source_type: api_record
            title: 中国历代人物传记资料库：王炳斗（CBDB 213353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213353&o=json
            external_identifier: CBDB:213353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3McrPk5i4DFURJJMpaJ4Ns
        status: active
        display_name: 王炳斗
        merged_into_person_id: null
    - claim:
        id: c_uF2-XWiCxU3uEvmjne8x-q
        subject_person_id: p_rn5bs45vsLNkK5gzRaTQ98
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FuECHtEuruGsfL43Q42Giy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pPkv6GuBddAghoCkn1l-wV
          claim_id: c_uF2-XWiCxU3uEvmjne8x-q
          source_id: s_jfaY8MWJ4FNxCeaCdsyK5T
          stance: supports
          locator: CBDB：兄弟 王炳衡（126591）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王炳昂 与 王炳衡 为同胞（CBDB 记「兄」），王炳衡 之父／母即 王炳昂 之父／母。
          source:
            id: s_jfaY8MWJ4FNxCeaCdsyK5T
            source_type: api_record
            title: 中国历代人物传记资料库：王炳昂（CBDB 210109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210109&o=json
            external_identifier: CBDB:210109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FuECHtEuruGsfL43Q42Giy
        status: active
        display_name: 王炳昂
        merged_into_person_id: null
    - claim:
        id: c_79CerOBy1iplofU2Cyb-oP
        subject_person_id: p_rn5bs45vsLNkK5gzRaTQ98
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M4sMGFN7u37UT1UMQi22nH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GtkeYtlbcJ4c5mE56tE961
          claim_id: c_79CerOBy1iplofU2Cyb-oP
          source_id: s_7kTboE3Ex7ktEe1vdOrdu3
          stance: supports
          locator: CBDB：兄弟 王炳衡（126591）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王炳權 与 王炳衡 为同胞（CBDB 记「兄」），王炳衡 之父／母即 王炳權 之父／母。
          source:
            id: s_7kTboE3Ex7ktEe1vdOrdu3
            source_type: api_record
            title: 中国历代人物传记资料库：王炳權（CBDB 210110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210110&o=json
            external_identifier: CBDB:210110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_M4sMGFN7u37UT1UMQi22nH
        status: active
        display_name: 王炳權
        merged_into_person_id: null
    - claim:
        id: c_v7lBHDFgxfLktrF8MTAg3H
        subject_person_id: p_rn5bs45vsLNkK5gzRaTQ98
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RDqZJF6KLmYwStUbKLPpxB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e_zIjUGSSmUJ9eajVtJXJW
          claim_id: c_v7lBHDFgxfLktrF8MTAg3H
          source_id: s_KoEFslFPtRIcf6yrSQlsEg
          stance: supports
          locator: CBDB：兄弟 王炳衡（126591）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王炳陽 与 王炳衡 为同胞（CBDB 记「兄」），王炳衡 之父／母即 王炳陽 之父／母。
          source:
            id: s_KoEFslFPtRIcf6yrSQlsEg
            source_type: api_record
            title: 中国历代人物传记资料库：王炳陽（CBDB 210107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210107&o=json
            external_identifier: CBDB:210107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RDqZJF6KLmYwStUbKLPpxB
        status: active
        display_name: 王炳陽
        merged_into_person_id: null
    - claim:
        id: c_lJB8T-rwG2pdAFkWIJUl9h
        subject_person_id: p_rn5bs45vsLNkK5gzRaTQ98
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RqzUcvrQLUybQHh3FDEV3e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YOk07v9CjGw2WU-bhT5qmJ
          claim_id: c_lJB8T-rwG2pdAFkWIJUl9h
          source_id: s_Hqoq_CH0_wza-ffFg2C195
          stance: supports
          locator: CBDB：兄弟 王炳衡（126591）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王炳樞 与 王炳衡 为同胞（CBDB 记「兄」），王炳衡 之父／母即 王炳樞 之父／母。
          source:
            id: s_Hqoq_CH0_wza-ffFg2C195
            source_type: api_record
            title: 中国历代人物传记资料库：王炳樞（CBDB 210108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210108&o=json
            external_identifier: CBDB:210108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RqzUcvrQLUybQHh3FDEV3e
        status: active
        display_name: 王炳樞
        merged_into_person_id: null
    - claim:
        id: c_HfXlaeFcZw-suQeHx_fLLp
        subject_person_id: p_rn5bs45vsLNkK5gzRaTQ98
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kC7UYqzhkM8DWhWWVUYZMJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S2a0BwqN6zdLufaag1D3Ci
          claim_id: c_HfXlaeFcZw-suQeHx_fLLp
          source_id: s_aSmsO1uut14O6ap4yD-nUP
          stance: supports
          locator: CBDB：兄弟 王炳衡（126591）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王炳魁 与 王炳衡 为同胞（CBDB 记「兄」），王炳衡 之父／母即 王炳魁 之父／母。
          source:
            id: s_aSmsO1uut14O6ap4yD-nUP
            source_type: api_record
            title: 中国历代人物传记资料库：王炳魁（CBDB 210111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210111&o=json
            external_identifier: CBDB:210111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kC7UYqzhkM8DWhWWVUYZMJ
        status: active
        display_name: 王炳魁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王法

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王法 | accepted |
| bio.summary | 王法，明人物。隆慶五年進士，籍贯崑山，入仕監生。（中国历代人物传记资料库 CBDB 210101） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8fDiA64i7XEi5BnTAt9qhu | 王炳衡 | accepted |
| children | p_BSK3JVZbYgKQNPmF9hrz5q | 王炳璿 | accepted |
| children | p_1VJSjVyXEnau58kJ2u5mhW | 王炳輔 | accepted |
| children | p_3McrPk5i4DFURJJMpaJ4Ns | 王炳斗 | accepted |
| children | p_FuECHtEuruGsfL43Q42Giy | 王炳昂 | accepted |
| children | p_M4sMGFN7u37UT1UMQi22nH | 王炳權 | accepted |
| children | p_RDqZJF6KLmYwStUbKLPpxB | 王炳陽 | accepted |
| children | p_RqzUcvrQLUybQHh3FDEV3e | 王炳樞 | accepted |
| children | p_kC7UYqzhkM8DWhWWVUYZMJ | 王炳魁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王炳昂（CBDB 210109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210109&o=json)
- [中国历代人物传记资料库：王炳斗（CBDB 213353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213353&o=json)
- [中国历代人物传记资料库：王炳輔（CBDB 213346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213346&o=json)
- [中国历代人物传记资料库：王炳魁（CBDB 210111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210111&o=json)
- [中国历代人物传记资料库：王炳權（CBDB 210110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210110&o=json)
- [中国历代人物传记资料库：王炳樞（CBDB 210108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210108&o=json)
- [中国历代人物传记资料库：王炳陽（CBDB 210107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210107&o=json)
- [中国历代人物传记资料库：王法（CBDB 210101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210101&o=json)
