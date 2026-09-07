---
schema: wang-person/v1
id: p_Ji6uf48BPmwCS3ik42iRg6
status: active
merged_into: null
display_name: 王氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_weF6gEfnQT5f8Z9hFs2qaS
        subject_person_id: p_Ji6uf48BPmwCS3ik42iRg6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏，沈瓚繼妻。维基数据以独立条目 Q65832507 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_-K310vSn6d_9uB-5zzipg6
          claim_id: c_weF6gEfnQT5f8Z9hFs2qaS
          source_id: s_m1TKJNLw3Z58D4pD5w3sRw
          stance: supports
          locator: Q65832507
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_m1TKJNLw3Z58D4pD5w3sRw
            source_type: api_record
            title: 维基数据：王氏（Q65832507）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65832507
            external_identifier: Q65832507
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:40:20.804Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_odX2xgvAZS5nTNhvBYVf8N
        subject_person_id: p_Ji6uf48BPmwCS3ik42iRg6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FevxrNVQfGT3kW1sUNwzFw
          claim_id: c_odX2xgvAZS5nTNhvBYVf8N
          source_id: s_UYJr2ASoCJzioeXWTq1K2i
          stance: supports
          locator: Q65832507
          quotation: null
          interpretation_note: null
          source:
            id: s_UYJr2ASoCJzioeXWTq1K2i
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（228811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228811&o=json
            external_identifier: CBDB:228811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:40:20.992Z
            metadata_json: null
        - id: cs_xVJdc11TfbTCZEttJiUfEd
          claim_id: c_odX2xgvAZS5nTNhvBYVf8N
          source_id: s_m1TKJNLw3Z58D4pD5w3sRw
          stance: supports
          locator: Q65832507
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_uo1PBxfhiq5FJ4QVFFR9Bu
        subject_person_id: p_8Dvbg89PXkBEbBJAzYBkNw
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Ji6uf48BPmwCS3ik42iRg6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_KUjDVXPyVgr4oKFBSUduXR
          claim_id: c_uo1PBxfhiq5FJ4QVFFR9Bu
          source_id: s_sMGGGQaTDVjkqfScfjPKDm
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_sMGGGQaTDVjkqfScfjPKDm
            source_type: api_record
            title: 维基数据：沈瓒（Q45482599）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45482599
            external_identifier: Q45482599
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:59.359Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E6%B2%88%E7%93%9A_(%E8%90%AC%E6%9B%86%E9%80%B2%E5%A3%AB)
        - id: cs_wkoPMaPnqWJqncHtw3Fzna
          claim_id: c_uo1PBxfhiq5FJ4QVFFR9Bu
          source_id: s_DZa1yjt1v6UD3XfUvudCZU
          stance: supports
          locator: 亲属关系：第二任妻
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆丙戌科進士同年總錄
          source:
            id: s_DZa1yjt1v6UD3XfUvudCZU
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：沈瓚（136038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136038&o=json
            external_identifier: CBDB:136038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:31:59.519Z
            metadata_json: null
        - id: cs_vUvidsG323jWDy88BwzFWt
          claim_id: c_uo1PBxfhiq5FJ4QVFFR9Bu
          source_id: s_m1TKJNLw3Z58D4pD5w3sRw
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_m1TKJNLw3Z58D4pD5w3sRw
            source_type: api_record
            title: 维基数据：王氏（Q65832507）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65832507
            external_identifier: Q65832507
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:40:20.804Z
            metadata_json: null
        - id: cs_oQp6Cjxf46MTUrxARggiPE
          claim_id: c_uo1PBxfhiq5FJ4QVFFR9Bu
          source_id: s_UYJr2ASoCJzioeXWTq1K2i
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆丙戌科進士同年總錄
          source:
            id: s_UYJr2ASoCJzioeXWTq1K2i
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（228811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228811&o=json
            external_identifier: CBDB:228811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:40:20.992Z
            metadata_json: null
        - id: cs_6zWZVqPemNkSUotqwtPsdN
          claim_id: c_uo1PBxfhiq5FJ4QVFFR9Bu
          source_id: s_dPn42oDnHbHNyUvyT81587
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 配偶 = 娶周氏，继娶王氏、顾氏
          interpretation_note: null
          source:
            id: s_dPn42oDnHbHNyUvyT81587
            source_type: website
            title: 中文维基百科：沈瓚 (萬曆進士)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E6%B2%88%E7%93%9A_(%E8%90%AC%E6%9B%86%E9%80%B2%E5%A3%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:54.010Z
            metadata_json: null
      object_person:
        id: p_8Dvbg89PXkBEbBJAzYBkNw
        status: active
        display_name: 沈瓒
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氏，沈瓚繼妻。维基数据以独立条目 Q65832507 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_8Dvbg89PXkBEbBJAzYBkNw | 沈瓒 | accepted |

## 外部来源

- [维基数据：沈瓒（Q45482599）](https://www.wikidata.org/wiki/Q45482599)
- [维基数据：王氏（Q65832507）](https://www.wikidata.org/wiki/Q65832507)
- [中文维基百科：沈瓚 (萬曆進士)](https://zh.wikipedia.org/wiki/%E6%B2%88%E7%93%9A_(%E8%90%AC%E6%9B%86%E9%80%B2%E5%A3%AB))
- [CBDB 中国历代人物传记资料库：沈瓚（136038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136038&o=json)
- [CBDB 中国历代人物传记资料库：王氏（228811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228811&o=json)
