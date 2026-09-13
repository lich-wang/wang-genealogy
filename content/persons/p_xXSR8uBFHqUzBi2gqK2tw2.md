---
schema: wang-person/v1
id: p_xXSR8uBFHqUzBi2gqK2tw2
status: active
merged_into: null
display_name: 王惟恕
cbdb_id: 203695
revision: 4
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
  other: []
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

## 外部来源

- [中国历代人物传记资料库：王光重（CBDB 308697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308697&o=json)
- [中国历代人物传记资料库：王廷表（CBDB 308698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308698&o=json)
- [中国历代人物传记资料库：王惟恕（CBDB 203695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203695&o=json)
- [中国历代人物传记资料库：王瑩之（CBDB 308699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308699&o=json)
