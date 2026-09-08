---
schema: wang-person/v1
id: p_HN9dL1QZo7ng1X3WPN8EcR
status: active
merged_into: null
display_name: 丘氏
cbdb_id: 38574
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eMDCoz92LNJzDRSi3xJYJB
        subject_person_id: p_HN9dL1QZo7ng1X3WPN8EcR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 丘氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_exQgb99x4Cu86yrcyjkkQJ
          claim_id: c_eMDCoz92LNJzDRSi3xJYJB
          source_id: s_5gNFY2WxZYmo4JswXvHa9P
          stance: supports
          locator: Q45431034
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_5gNFY2WxZYmo4JswXvHa9P
            source_type: api_record
            title: 维基数据：丘氏（Q45431034）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45431034
            external_identifier: Q45431034
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_hdSrVikmDf1XA3wgBA3Nv8
          claim_id: c_eMDCoz92LNJzDRSi3xJYJB
          source_id: s_phx6v1WRRw5pRY98qUnDbm
          stance: supports
          locator: CBDB:38574
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_phx6v1WRRw5pRY98qUnDbm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：丘氏（38574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38574&o=json
            external_identifier: CBDB:38574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ZeN9zqVb73eMRCviGozeM5
        subject_person_id: p_4Hjde84UDSxNby7XrvDD1E
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HN9dL1QZo7ng1X3WPN8EcR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5FSuBhi7vb4ryp5HsYDbQM
          claim_id: c_ZeN9zqVb73eMRCviGozeM5
          source_id: s_5gNFY2WxZYmo4JswXvHa9P
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_zxv3KfdnFgLAqdGUzmWhJQ
          claim_id: c_ZeN9zqVb73eMRCviGozeM5
          source_id: s_vRaCPeuuKnxFV9tq7HyLW3
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_vRaCPeuuKnxFV9tq7HyLW3
            source_type: api_record
            title: 维基数据：王寂（Q45386119）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386119
            external_identifier: Q45386119
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:10.721Z
            metadata_json: null
        - id: cs_9tJiqWAbXjiyYxyLaMQ2D3
          claim_id: c_ZeN9zqVb73eMRCviGozeM5
          source_id: s_LYQVz212NDq8PUvaBty1BP
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_LYQVz212NDq8PUvaBty1BP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寂（17425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17425&o=json
            external_identifier: CBDB:17425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:10.884Z
            metadata_json: null
      object_person:
        id: p_4Hjde84UDSxNby7XrvDD1E
        status: active
        display_name: 王寂
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 丘氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 丘氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4Hjde84UDSxNby7XrvDD1E | 王寂 | accepted |

## 外部来源

- [维基数据：丘氏（Q45431034）](https://www.wikidata.org/wiki/Q45431034)
- [维基数据：王寂（Q45386119）](https://www.wikidata.org/wiki/Q45386119)
- [CBDB 中国历代人物传记资料库：丘氏（38574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38574&o=json)
- [CBDB 中国历代人物传记资料库：王寂（17425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17425&o=json)
