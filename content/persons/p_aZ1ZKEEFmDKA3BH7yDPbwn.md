---
schema: wang-person/v1
id: p_aZ1ZKEEFmDKA3BH7yDPbwn
status: active
merged_into: null
display_name: 王训
cbdb_id: 305709
revision: 9
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W7GcsPPvVyPSM7xPBXqUBu
        subject_person_id: p_aZ1ZKEEFmDKA3BH7yDPbwn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王训，明人物。嘉靖二十三年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 305709）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_bWLbD4GugqQiLgYdNLUeUi
          claim_id: c_W7GcsPPvVyPSM7xPBXqUBu
          source_id: s_gBCYsYXeEkQEzdXgKakyEi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_gBCYsYXeEkQEzdXgKakyEi
            source_type: api_record
            title: 维基数据：王训（Q45513566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45513566
            external_identifier: Q45513566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:38.937Z
            metadata_json: null
        - id: cs_eMyvz3DHN-J0AXXP4tM7gR
          claim_id: c_W7GcsPPvVyPSM7xPBXqUBu
          source_id: s_Ujx5eoXq93uMqfFyALE9ET
          stance: supports
          locator: CBDB:305709
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Ujx5eoXq93uMqfFyALE9ET
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王訓（305709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305709&o=json
            external_identifier: CBDB:305709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:39.081Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2CcALJyzxDDmfomsBuVVTP
        subject_person_id: p_aZ1ZKEEFmDKA3BH7yDPbwn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王训
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FrJoAZEnH2EWCHLgpCF9HD
          claim_id: c_2CcALJyzxDDmfomsBuVVTP
          source_id: s_gBCYsYXeEkQEzdXgKakyEi
          stance: supports
          locator: Q45513566
          quotation: null
          interpretation_note: null
          source:
            id: s_gBCYsYXeEkQEzdXgKakyEi
            source_type: api_record
            title: 维基数据：王训（Q45513566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45513566
            external_identifier: Q45513566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:38.937Z
            metadata_json: null
        - id: cs_N4yQ2c7Vaaa7gBFnwqghU7
          claim_id: c_2CcALJyzxDDmfomsBuVVTP
          source_id: s_Ujx5eoXq93uMqfFyALE9ET
          stance: supports
          locator: Q45513566
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SekJdk1RCpXuNnnLos18sU
        subject_person_id: p_GNLnPFw1Dr1HJibhmrHDQH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aZ1ZKEEFmDKA3BH7yDPbwn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gwNFW4axAxQhH8DGCtmTDu
          claim_id: c_SekJdk1RCpXuNnnLos18sU
          source_id: s_gBCYsYXeEkQEzdXgKakyEi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_QxFAZ6kXtMNHEJK61ZFZqe
          claim_id: c_SekJdk1RCpXuNnnLos18sU
          source_id: s_5ypbt5HJwbj6QL1P1yo9cx
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_5ypbt5HJwbj6QL1P1yo9cx
            source_type: api_record
            title: 维基数据：王逸卿（Q45513501）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45513501
            external_identifier: Q45513501
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:57.484Z
            metadata_json: null
      object_person:
        id: p_GNLnPFw1Dr1HJibhmrHDQH
        status: active
        display_name: 王逸卿
        merged_into_person_id: null
  children:
    - claim:
        id: c_csDo2M3VXbk43Wtb6rRb7V
        subject_person_id: p_aZ1ZKEEFmDKA3BH7yDPbwn
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_trUE1ub3cUR7dMLX7JC1NK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J2y5aA3qoBiEUJqxH2BQF5
          claim_id: c_csDo2M3VXbk43Wtb6rRb7V
          source_id: s_gBCYsYXeEkQEzdXgKakyEi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_gBCYsYXeEkQEzdXgKakyEi
            source_type: api_record
            title: 维基数据：王训（Q45513566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45513566
            external_identifier: Q45513566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:38.937Z
            metadata_json: null
        - id: cs_hriuSiC2HKZC4bEHwa4ALq
          claim_id: c_csDo2M3VXbk43Wtb6rRb7V
          source_id: s_1BiHuNh6H5KWNtwUrGwhWa
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_1BiHuNh6H5KWNtwUrGwhWa
            source_type: api_record
            title: 维基数据：王宗沐（Q15916933）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15916933
            external_identifier: Q15916933
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:20.057Z
            metadata_json: null
      object_person:
        id: p_trUE1ub3cUR7dMLX7JC1NK
        status: active
        display_name: 王宗沐
        merged_into_person_id: null
    - claim:
        id: c_tkFM2So8w4RpMG7Qjim0Cn
        subject_person_id: p_aZ1ZKEEFmDKA3BH7yDPbwn
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_3F4tUNNkku3vfja1G5JLt6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x2zmSsgW5Vpiplae0GzGBX
          claim_id: c_tkFM2So8w4RpMG7Qjim0Cn
          source_id: s_0XPf_MTY6XL4IaV8QsG1Hm
          stance: supports
          locator: CBDB：兄弟 王宗沐（35065）之父／母 王训
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗浹 与 王宗沐 为同胞（CBDB 记「兄」），王宗沐 之父／母即 王宗浹 之父／母。
          source:
            id: s_0XPf_MTY6XL4IaV8QsG1Hm
            source_type: api_record
            title: 中国历代人物传记资料库：王宗浹（CBDB 305715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305715&o=json
            external_identifier: CBDB:305715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3F4tUNNkku3vfja1G5JLt6
        status: active
        display_name: 王宗浹
        merged_into_person_id: null
    - claim:
        id: c_SG_3aWY7hQl3-kRBFPQ14W
        subject_person_id: p_aZ1ZKEEFmDKA3BH7yDPbwn
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_54oQ2MCjugcwbRktPkU239
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZmzowV8tf5ArPM5O09bC_d
          claim_id: c_SG_3aWY7hQl3-kRBFPQ14W
          source_id: s_Ia3YMAQRfIhqdlDTUQxIO_
          stance: supports
          locator: CBDB：兄弟 王宗沐（35065）之父／母 王训
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗洛 与 王宗沐 为同胞（CBDB 记「兄」），王宗沐 之父／母即 王宗洛 之父／母。
          source:
            id: s_Ia3YMAQRfIhqdlDTUQxIO_
            source_type: api_record
            title: 中国历代人物传记资料库：王宗洛（CBDB 305716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305716&o=json
            external_identifier: CBDB:305716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_54oQ2MCjugcwbRktPkU239
        status: active
        display_name: 王宗洛
        merged_into_person_id: null
    - claim:
        id: c_swnRtv9VMr6zuMMw_Rfazg
        subject_person_id: p_aZ1ZKEEFmDKA3BH7yDPbwn
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_GpQKQxT9zUBFQw4vdP3nNA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_35ciKV4diewOOrx8G9ITmn
          claim_id: c_swnRtv9VMr6zuMMw_Rfazg
          source_id: s_bY-k51yH56EGmkFDYjvf5l
          stance: supports
          locator: CBDB：兄弟 王宗沐（35065）之父／母 王训
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗淵 与 王宗沐 为同胞（CBDB 记「弟」），王宗沐 之父／母即 王宗淵 之父／母。
          source:
            id: s_bY-k51yH56EGmkFDYjvf5l
            source_type: api_record
            title: 中国历代人物传记资料库：王宗淵（CBDB 305712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305712&o=json
            external_identifier: CBDB:305712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GpQKQxT9zUBFQw4vdP3nNA
        status: active
        display_name: 王宗淵
        merged_into_person_id: null
    - claim:
        id: c_bM6ovGC6fe9lS8g65NwmCS
        subject_person_id: p_aZ1ZKEEFmDKA3BH7yDPbwn
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_JC7xE3RoD3x2pAoc8aYDdU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0odw9UrDgwdfgukb3JBLGx
          claim_id: c_bM6ovGC6fe9lS8g65NwmCS
          source_id: s_VolEw2rBWHhbAytAMpTkSN
          stance: supports
          locator: CBDB：兄弟 王宗沐（35065）之父／母 王训
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗汜 与 王宗沐 为同胞（CBDB 记「兄」），王宗沐 之父／母即 王宗汜 之父／母。
          source:
            id: s_VolEw2rBWHhbAytAMpTkSN
            source_type: api_record
            title: 中国历代人物传记资料库：王宗汜（CBDB 305714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305714&o=json
            external_identifier: CBDB:305714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JC7xE3RoD3x2pAoc8aYDdU
        status: active
        display_name: 王宗汜
        merged_into_person_id: null
    - claim:
        id: c_jm2oocmuJn5p-PTiHTOa4j
        subject_person_id: p_aZ1ZKEEFmDKA3BH7yDPbwn
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_vFzC6LMCUJFE1NE3LQd2v3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ITXKeFTSYQNZOM21eU0hOv
          claim_id: c_jm2oocmuJn5p-PTiHTOa4j
          source_id: s_0iN03tOhjm18lBcUHFnAS0
          stance: supports
          locator: CBDB：兄弟 王宗沐（35065）之父／母 王训
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗湋 与 王宗沐 为同胞（CBDB 记「兄」），王宗沐 之父／母即 王宗湋 之父／母。
          source:
            id: s_0iN03tOhjm18lBcUHFnAS0
            source_type: api_record
            title: 中国历代人物传记资料库：王宗湋（CBDB 305713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305713&o=json
            external_identifier: CBDB:305713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vFzC6LMCUJFE1NE3LQd2v3
        status: active
        display_name: 王宗湋
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王训

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王训，明人物。嘉靖二十三年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 305709） | accepted |
| name.primary | 王训 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GNLnPFw1Dr1HJibhmrHDQH | 王逸卿 | accepted |
| children | p_trUE1ub3cUR7dMLX7JC1NK | 王宗沐 | accepted |
| children | p_3F4tUNNkku3vfja1G5JLt6 | 王宗浹 | accepted |
| children | p_54oQ2MCjugcwbRktPkU239 | 王宗洛 | accepted |
| children | p_GpQKQxT9zUBFQw4vdP3nNA | 王宗淵 | accepted |
| children | p_JC7xE3RoD3x2pAoc8aYDdU | 王宗汜 | accepted |
| children | p_vFzC6LMCUJFE1NE3LQd2v3 | 王宗湋 | accepted |

## 外部来源

- [维基数据：王训（Q45513566）](https://www.wikidata.org/wiki/Q45513566)
- [维基数据：王逸卿（Q45513501）](https://www.wikidata.org/wiki/Q45513501)
- [维基数据：王宗沐（Q15916933）](https://www.wikidata.org/wiki/Q15916933)
- [中国历代人物传记资料库：王宗浹（CBDB 305715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305715&o=json)
- [中国历代人物传记资料库：王宗洛（CBDB 305716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305716&o=json)
- [中国历代人物传记资料库：王宗汜（CBDB 305714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305714&o=json)
- [中国历代人物传记资料库：王宗湋（CBDB 305713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305713&o=json)
- [中国历代人物传记资料库：王宗淵（CBDB 305712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305712&o=json)
- [CBDB 中国历代人物传记资料库：王訓（305709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305709&o=json)
