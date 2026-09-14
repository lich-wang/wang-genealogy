---
schema: wang-person/v1
id: p_fG2ZSSsFcXdaZWCtjXUkRA
status: active
merged_into: null
display_name: 王朝卿
revision: 13
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G6vL43pmq5Ga85HJXjKpw2
        subject_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xVShXc3dcCn6WKfGEdxeCv
          claim_id: c_G6vL43pmq5Ga85HJXjKpw2
          source_id: s_prHAYHF5ZUqZLkryxyDc5L
          stance: supports
          locator: CBDB:201090
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201090）
          source: &a1
            id: s_prHAYHF5ZUqZLkryxyDc5L
            source_type: api_record
            title: 中国历代人物传记资料库：王朝卿（CBDB 201090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201090&o=json
            external_identifier: CBDB:201090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.652Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_W23qVGSdkBPxzDkHFaafCL
        subject_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1478年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2wf7SC5qbSBajDzMjgQkas
          claim_id: c_W23qVGSdkBPxzDkHFaafCL
          source_id: s_prHAYHF5ZUqZLkryxyDc5L
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
        id: c_hx5Bb1P9pYc9WR9uw9JAh9
        subject_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝卿（生于1478年），明人物。明清進士進士，籍贯臨海，入仕進士。（中国历代人物传记资料库 CBDB 201090）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Rhmg7S_CQ3wh38fuAlP-Dg
          claim_id: c_hx5Bb1P9pYc9WR9uw9JAh9
          source_id: s_prHAYHF5ZUqZLkryxyDc5L
          stance: supports
          locator: CBDB:201090
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ea0Na1NdvVvMraA0ZnWa2P
        subject_person_id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_msZo5tFpgNTaJpxtvNXTse
          claim_id: c_ea0Na1NdvVvMraA0ZnWa2P
          source_id: s_7dQp2P8fLbfxicMWn9gZ66
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7dQp2P8fLbfxicMWn9gZ66
            source_type: api_record
            title: 中国历代人物传记资料库：王久壽（CBDB 266956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266956&o=json
            external_identifier: CBDB:266956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        status: active
        display_name: 王久壽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_t1xgSZ9vqhk5UxW1JcxNqP
        subject_person_id: p_BUfZ9JvByTmN3dTk3K7qux
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DZ6FyirY0Q5lbpnwH6EyPd
          claim_id: c_t1xgSZ9vqhk5UxW1JcxNqP
          source_id: s_79xeNUZKjnBKVh6wiLnYun
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_79xeNUZKjnBKVh6wiLnYun
            source_type: api_record
            title: 中国历代人物传记资料库：王日新（CBDB 266954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266954&o=json
            external_identifier: CBDB:266954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.743Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BUfZ9JvByTmN3dTk3K7qux
        status: active
        display_name: 王日新
        merged_into_person_id: null
    - claim:
        id: c_HiceCJ_bAH381bVgzNO6-A
        subject_person_id: p_V45WbqCNMktzeMrC6QJpfq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y5MBeWZ8dxXVGHrOtyUA2H
          claim_id: c_HiceCJ_bAH381bVgzNO6-A
          source_id: s_XGB9gC8r39Aj1xFmkkAGHP
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XGB9gC8r39Aj1xFmkkAGHP
            source_type: api_record
            title: 中国历代人物传记资料库：王穩（CBDB 266955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266955&o=json
            external_identifier: CBDB:266955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.744Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_V45WbqCNMktzeMrC6QJpfq
        status: active
        display_name: 王穩
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_a82aCxtUW9SfMlG0BmciLo
        subject_person_id: p_1BKfTJiBz51ebHCxW5AFPm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j_OW1Pp-gcdOcDfjzZHB96
          claim_id: c_a82aCxtUW9SfMlG0BmciLo
          source_id: s_xoeR75NosPWOUARULJcnKt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201090 王朝卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xoeR75NosPWOUARULJcnKt
            source_type: api_record
            title: 中国历代人物传记资料库：王韶（CBDB 266968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266968&o=json
            external_identifier: CBDB:266968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1BKfTJiBz51ebHCxW5AFPm
        status: active
        display_name: 王韶
        merged_into_person_id: null
    - claim:
        id: c_tD1o6tTnMwD56QJShPVs1S
        subject_person_id: p_42gsojvkfoeFS6qHcH6ULC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mEDLr5akYc-VA7LqYkqXV4
          claim_id: c_tD1o6tTnMwD56QJShPVs1S
          source_id: s_8l1dj5lNRnTR4sQGUi44Ja
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201090 王朝卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8l1dj5lNRnTR4sQGUi44Ja
            source_type: api_record
            title: 中国历代人物传记资料库：王普（CBDB 266967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266967&o=json
            external_identifier: CBDB:266967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_42gsojvkfoeFS6qHcH6ULC
        status: active
        display_name: 王普
        merged_into_person_id: null
    - claim:
        id: c_7WQzNiYB_7rD_Q2B1Jxpf8
        subject_person_id: p_C2sTveXs6BhE19m7kUNc2c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ssMC79FXuKVeJU2501MMsc
          claim_id: c_7WQzNiYB_7rD_Q2B1Jxpf8
          source_id: s_jlmQ3GK-ePhMR_shjHHbUf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201090 王朝卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jlmQ3GK-ePhMR_shjHHbUf
            source_type: api_record
            title: 中国历代人物传记资料库：王音（CBDB 266964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266964&o=json
            external_identifier: CBDB:266964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C2sTveXs6BhE19m7kUNc2c
        status: active
        display_name: 王音
        merged_into_person_id: null
    - claim:
        id: c_5_zwlguowt2bWlic8Rchi2
        subject_person_id: p_H3A3KMiqpJBDGt27XxvqdB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MUiSZ88PDVFPmWhdyTyiMt
          claim_id: c_5_zwlguowt2bWlic8Rchi2
          source_id: s_Cxv9xygH5yZuBY67kyE-1j
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201090 王朝卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Cxv9xygH5yZuBY67kyE-1j
            source_type: api_record
            title: 中国历代人物传记资料库：王洵（CBDB 266962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266962&o=json
            external_identifier: CBDB:266962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H3A3KMiqpJBDGt27XxvqdB
        status: active
        display_name: 王洵
        merged_into_person_id: null
    - claim:
        id: c_O4207a33QMU4Hzvxrd-PGr
        subject_person_id: p_MP2P4k57hDGCdXLg6gG8RF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oYDR6yjrZ--aZsMxrtvi7g
          claim_id: c_O4207a33QMU4Hzvxrd-PGr
          source_id: s_f8HhIbzuJ8V_FTzy6jt3dS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201090 王朝卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_f8HhIbzuJ8V_FTzy6jt3dS
            source_type: api_record
            title: 中国历代人物传记资料库：王諧（CBDB 266963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266963&o=json
            external_identifier: CBDB:266963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MP2P4k57hDGCdXLg6gG8RF
        status: active
        display_name: 王諧
        merged_into_person_id: null
    - claim:
        id: c_maiX2xCk4xbEbHEDGiKMJK
        subject_person_id: p_SXMFkMTXno8UGBAM79cP6F
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p_tlFYwowl380bg8q-qlnm
          claim_id: c_maiX2xCk4xbEbHEDGiKMJK
          source_id: s_1DfWr9NSzIlkaj7oWxCj03
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201090 王朝卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1DfWr9NSzIlkaj7oWxCj03
            source_type: api_record
            title: 中国历代人物传记资料库：王暐（CBDB 266969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266969&o=json
            external_identifier: CBDB:266969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SXMFkMTXno8UGBAM79cP6F
        status: active
        display_name: 王暐
        merged_into_person_id: null
    - claim:
        id: c_IjC-z3lwyO95yBs9Aj3BzA
        subject_person_id: p_XtwgMf2W7VY3M5MUgLU5Mo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bnXuqDK2qMmLF13lIq5-7R
          claim_id: c_IjC-z3lwyO95yBs9Aj3BzA
          source_id: s_Dnl7y7URLni-OsS87n7g0w
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201090 王朝卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Dnl7y7URLni-OsS87n7g0w
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 266966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266966&o=json
            external_identifier: CBDB:266966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XtwgMf2W7VY3M5MUgLU5Mo
        status: active
        display_name: 王縉
        merged_into_person_id: null
    - claim:
        id: c_ja6AW1zpkdgEJpj74ROs3m
        subject_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hNu3dxf53AXqHMNKTHYTAW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3UiqGjkCkhD62aTvM_iyBI
          claim_id: c_ja6AW1zpkdgEJpj74ROs3m
          source_id: s_uWp0l0BDO1BH4seF20MWpT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201090 王朝卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uWp0l0BDO1BH4seF20MWpT
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 266965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266965&o=json
            external_identifier: CBDB:266965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hNu3dxf53AXqHMNKTHYTAW
        status: active
        display_name: 王昱
        merged_into_person_id: null
    - claim:
        id: c_zKM8oSWn_53loSzfAXqMoW
        subject_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rMsByWGo2P9HDb14KoWb8t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yu1Nl_iTJeQjL54G4ZE7uT
          claim_id: c_zKM8oSWn_53loSzfAXqMoW
          source_id: s__H7J3IgRBXZY2Ri4l8yCHf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201090 王朝卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__H7J3IgRBXZY2Ri4l8yCHf
            source_type: api_record
            title: 中国历代人物传记资料库：王元卿（CBDB 266961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266961&o=json
            external_identifier: CBDB:266961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rMsByWGo2P9HDb14KoWb8t
        status: active
        display_name: 王元卿
        merged_into_person_id: null
---

# 王朝卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝卿 | accepted |
| birth.date | 1478年 | accepted |
| bio.summary | 王朝卿（生于1478年），明人物。明清進士進士，籍贯臨海，入仕進士。（中国历代人物传记资料库 CBDB 201090） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ax72Y4zqcv4L6DYQUb7Eu1 | 王久壽 | accepted |
| ancestors | p_BUfZ9JvByTmN3dTk3K7qux | 王日新 | accepted |
| ancestors | p_V45WbqCNMktzeMrC6QJpfq | 王穩 | accepted |
| other | p_1BKfTJiBz51ebHCxW5AFPm | 王韶 | accepted |
| other | p_42gsojvkfoeFS6qHcH6ULC | 王普 | accepted |
| other | p_C2sTveXs6BhE19m7kUNc2c | 王音 | accepted |
| other | p_H3A3KMiqpJBDGt27XxvqdB | 王洵 | accepted |
| other | p_MP2P4k57hDGCdXLg6gG8RF | 王諧 | accepted |
| other | p_SXMFkMTXno8UGBAM79cP6F | 王暐 | accepted |
| other | p_XtwgMf2W7VY3M5MUgLU5Mo | 王縉 | accepted |
| other | p_hNu3dxf53AXqHMNKTHYTAW | 王昱 | accepted |
| other | p_rMsByWGo2P9HDb14KoWb8t | 王元卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝卿（CBDB 201090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201090&o=json)
- [中国历代人物传记资料库：王縉（CBDB 266966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266966&o=json)
- [中国历代人物传记资料库：王久壽（CBDB 266956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266956&o=json)
- [中国历代人物传记资料库：王普（CBDB 266967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266967&o=json)
- [中国历代人物传记资料库：王日新（CBDB 266954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266954&o=json)
- [中国历代人物传记资料库：王韶（CBDB 266968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266968&o=json)
- [中国历代人物传记资料库：王暐（CBDB 266969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266969&o=json)
- [中国历代人物传记资料库：王穩（CBDB 266955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266955&o=json)
- [中国历代人物传记资料库：王諧（CBDB 266963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266963&o=json)
- [中国历代人物传记资料库：王洵（CBDB 266962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266962&o=json)
- [中国历代人物传记资料库：王音（CBDB 266964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266964&o=json)
- [中国历代人物传记资料库：王昱（CBDB 266965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266965&o=json)
- [中国历代人物传记资料库：王元卿（CBDB 266961）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266961&o=json)
