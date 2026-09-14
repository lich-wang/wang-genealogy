---
schema: wang-person/v1
id: p_xXSR8uBFHqUzBi2gqK2tw2
status: active
merged_into: null
display_name: 王惟恕
cbdb_id: 203695
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xkVev24RWDEwc288B1xEUY
        subject_person_id: p_xXSR8uBFHqUzBi2gqK2tw2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟恕（生于1521年），明人物。明清進士進士，籍贯長泰，入仕進士。（中国历代人物传记资料库 CBDB 203695）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_NIuO8NmxzoZsx7qZfN5CHA
          claim_id: c_xkVev24RWDEwc288B1xEUY
          source_id: s_P3naASeqksmjKxbBpm8jK7
          stance: supports
          locator: CBDB:203695
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_P3naASeqksmjKxbBpm8jK7
            source_type: api_record
            title: 中国历代人物传记资料库：王惟恕（CBDB 203695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203695&o=json
            external_identifier: CBDB:203695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6B94THGZxAN8HeS3PR4YJ4
        subject_person_id: p_xXSR8uBFHqUzBi2gqK2tw2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1521年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1521-01-01
            latest: 1521-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ExX3GRReWjWPGziLhdKAX5
          claim_id: c_6B94THGZxAN8HeS3PR4YJ4
          source_id: s_P3naASeqksmjKxbBpm8jK7
          stance: supports
          locator: CBDB:203695
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1521
          source:
            id: s_P3naASeqksmjKxbBpm8jK7
            source_type: api_record
            title: 中国历代人物传记资料库：王惟恕（CBDB 203695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203695&o=json
            external_identifier: CBDB:203695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RTVdGLqgzK1aXKmi4bGh23
        subject_person_id: p_xXSR8uBFHqUzBi2gqK2tw2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5fwciCNnDa5deBdS9BdgTS
          claim_id: c_RTVdGLqgzK1aXKmi4bGh23
          source_id: s_P3naASeqksmjKxbBpm8jK7
          stance: supports
          locator: CBDB:203695
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1521
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dOrLV_pG9mXO3DAKXFybo8
        subject_person_id: p_8r5zcHcdRUFJXRuzwFCDPp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xXSR8uBFHqUzBi2gqK2tw2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fmPtn4opHsTmd_dLQYS930
          claim_id: c_dOrLV_pG9mXO3DAKXFybo8
          source_id: s_N9P6JPNVouCZm66ku6vXfJ
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_N9P6JPNVouCZm66ku6vXfJ
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩之（CBDB 308699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308699&o=json
            external_identifier: CBDB:308699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_8r5zcHcdRUFJXRuzwFCDPp
        status: active
        display_name: 王瑩之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_tmPiO-P1kVcEgARlwOw-CE
        subject_person_id: p_98PafcwBqQVKP2h5jChxCd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xXSR8uBFHqUzBi2gqK2tw2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hMXj9B0ojVr2_zJmBskAVf
          claim_id: c_tmPiO-P1kVcEgARlwOw-CE
          source_id: s_MLL26snfQXaQimJz399gsR
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MLL26snfQXaQimJz399gsR
            source_type: api_record
            title: 中国历代人物传记资料库：王廷表（CBDB 308698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308698&o=json
            external_identifier: CBDB:308698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_98PafcwBqQVKP2h5jChxCd
        status: active
        display_name: 王廷表
        merged_into_person_id: null
    - claim:
        id: c_QgbOdgvyHWClO2IBTmoGlt
        subject_person_id: p_zDTc9bKmkz18U1SKVRc2v1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xXSR8uBFHqUzBi2gqK2tw2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Oz-tBcSyOnxaIna_eIFbCb
          claim_id: c_QgbOdgvyHWClO2IBTmoGlt
          source_id: s_cU98BqvHPZ85UXyVbLN5zu
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cU98BqvHPZ85UXyVbLN5zu
            source_type: api_record
            title: 中国历代人物传记资料库：王光重（CBDB 308697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308697&o=json
            external_identifier: CBDB:308697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_zDTc9bKmkz18U1SKVRc2v1
        status: active
        display_name: 王光重
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_jZiexos37WxaFju1bjK6WW
        subject_person_id: p_HDCYSdtJbYwV1MTMryabN6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xXSR8uBFHqUzBi2gqK2tw2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2NGF16gMZhOEha0ZPwbUoH
          claim_id: c_jZiexos37WxaFju1bjK6WW
          source_id: s_XEx1RPQOaue0Sq_xL1c5a0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203695 王惟恕）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XEx1RPQOaue0Sq_xL1c5a0
            source_type: api_record
            title: 中国历代人物传记资料库：王惟惠（CBDB 308702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308702&o=json
            external_identifier: CBDB:308702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HDCYSdtJbYwV1MTMryabN6
        status: active
        display_name: 王惟惠
        merged_into_person_id: null
    - claim:
        id: c_HOGTxkK97R9Bxycs8fE7ac
        subject_person_id: p_LoPnz34XhBVwFF38rXs3DF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xXSR8uBFHqUzBi2gqK2tw2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ynM9mWN_Qs6iUJ_D3cxChi
          claim_id: c_HOGTxkK97R9Bxycs8fE7ac
          source_id: s_IrRkIszc21pBzoujCwrk9H
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203695 王惟恕）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IrRkIszc21pBzoujCwrk9H
            source_type: api_record
            title: 中国历代人物传记资料库：王惟懋（CBDB 308704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308704&o=json
            external_identifier: CBDB:308704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LoPnz34XhBVwFF38rXs3DF
        status: active
        display_name: 王惟懋
        merged_into_person_id: null
    - claim:
        id: c_y5c4t8SWLLh-bE1LN7pE4y
        subject_person_id: p_WBFv7tKTFZKmC5GW8afgRZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xXSR8uBFHqUzBi2gqK2tw2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3mx5uSvQfv3OCCWVAU4IoO
          claim_id: c_y5c4t8SWLLh-bE1LN7pE4y
          source_id: s_JphRc9bwop-MsnP8Vzhg4F
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203695 王惟恕）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JphRc9bwop-MsnP8Vzhg4F
            source_type: api_record
            title: 中国历代人物传记资料库：王惟應（CBDB 308705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308705&o=json
            external_identifier: CBDB:308705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WBFv7tKTFZKmC5GW8afgRZ
        status: active
        display_name: 王惟應
        merged_into_person_id: null
    - claim:
        id: c_2_A2xXuhfapbqe6OUAPc1b
        subject_person_id: p_pKkLW1uBtTf3sCihfyksSx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xXSR8uBFHqUzBi2gqK2tw2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_klW14fWR6GwJ6eUglK4XqL
          claim_id: c_2_A2xXuhfapbqe6OUAPc1b
          source_id: s_zuC4TuU2ir5_6Dx2T7wrlV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203695 王惟恕）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zuC4TuU2ir5_6Dx2T7wrlV
            source_type: api_record
            title: 中国历代人物传记资料库：王惟憑（CBDB 308703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308703&o=json
            external_identifier: CBDB:308703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pKkLW1uBtTf3sCihfyksSx
        status: active
        display_name: 王惟憑
        merged_into_person_id: null
---

# 王惟恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惟恕（生于1521年），明人物。明清進士進士，籍贯長泰，入仕進士。（中国历代人物传记资料库 CBDB 203695） | accepted |
| birth.date | 1521年 | accepted |
| name.primary | 王惟恕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8r5zcHcdRUFJXRuzwFCDPp | 王瑩之 | accepted |
| ancestors | p_98PafcwBqQVKP2h5jChxCd | 王廷表 | accepted |
| ancestors | p_zDTc9bKmkz18U1SKVRc2v1 | 王光重 | accepted |
| other | p_HDCYSdtJbYwV1MTMryabN6 | 王惟惠 | accepted |
| other | p_LoPnz34XhBVwFF38rXs3DF | 王惟懋 | accepted |
| other | p_WBFv7tKTFZKmC5GW8afgRZ | 王惟應 | accepted |
| other | p_pKkLW1uBtTf3sCihfyksSx | 王惟憑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光重（CBDB 308697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308697&o=json)
- [中国历代人物传记资料库：王廷表（CBDB 308698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308698&o=json)
- [中国历代人物传记资料库：王惟惠（CBDB 308702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308702&o=json)
- [中国历代人物传记资料库：王惟懋（CBDB 308704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308704&o=json)
- [中国历代人物传记资料库：王惟憑（CBDB 308703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308703&o=json)
- [中国历代人物传记资料库：王惟恕（CBDB 203695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203695&o=json)
- [中国历代人物传记资料库：王惟應（CBDB 308705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308705&o=json)
- [中国历代人物传记资料库：王瑩之（CBDB 308699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308699&o=json)
