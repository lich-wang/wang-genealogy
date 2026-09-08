---
schema: wang-person/v1
id: p_oREgSd4itdA3Mz6Mp8dkNX
status: active
merged_into: null
display_name: 晁氏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aeAULarHQ2D57thGVXvJ8N
        subject_person_id: p_oREgSd4itdA3Mz6Mp8dkNX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 晁氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WZzo2WotAeFCSMvccxkXYT
          claim_id: c_aeAULarHQ2D57thGVXvJ8N
          source_id: s_at2ZoyCvBXEeUvFDA5yL2N
          stance: supports
          locator: Q45431885
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_at2ZoyCvBXEeUvFDA5yL2N
            source_type: api_record
            title: 维基数据：晁氏（Q45431885）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45431885
            external_identifier: Q45431885
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_SzDdRDV3Ft1bPo256rGMWC
          claim_id: c_aeAULarHQ2D57thGVXvJ8N
          source_id: s_xSCYJCLb3tccVfVM9nThj9
          stance: supports
          locator: CBDB:37788
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_xSCYJCLb3tccVfVM9nThj9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：晁氏（37788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37788&o=json
            external_identifier: CBDB:37788
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
        id: c_yGcqdAut811KyQb21oeqyX
        subject_person_id: p_A4y88KqDgYC7CBnr5hYZf3
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_oREgSd4itdA3Mz6Mp8dkNX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yU1kXnVsNd9JPr5bHweTJ1
          claim_id: c_yGcqdAut811KyQb21oeqyX
          source_id: s_at2ZoyCvBXEeUvFDA5yL2N
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_q7znJRKTwUB2phrHgDcGEx
          claim_id: c_yGcqdAut811KyQb21oeqyX
          source_id: s_A1pNF93BAFFMVDiK7DKDPc
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_A1pNF93BAFFMVDiK7DKDPc
            source_type: api_record
            title: 维基数据：王龜齡（Q45411116）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45411116
            external_identifier: Q45411116
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:23.183Z
            metadata_json: null
        - id: cs_XafQVRaHZyEkB5E9Eu8Fzc
          claim_id: c_yGcqdAut811KyQb21oeqyX
          source_id: s_HXN7BQmdXuFJfNDC4o6fnZ
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_HXN7BQmdXuFJfNDC4o6fnZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王龜齡（26988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26988&o=json
            external_identifier: CBDB:26988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:23.359Z
            metadata_json: null
      object_person:
        id: p_A4y88KqDgYC7CBnr5hYZf3
        status: active
        display_name: 王龜齡
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 晁氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 晁氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_A4y88KqDgYC7CBnr5hYZf3 | 王龜齡 | accepted |

## 外部来源

- [维基数据：晁氏（Q45431885）](https://www.wikidata.org/wiki/Q45431885)
- [维基数据：王龜齡（Q45411116）](https://www.wikidata.org/wiki/Q45411116)
- [CBDB 中国历代人物传记资料库：晁氏（37788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37788&o=json)
- [CBDB 中国历代人物传记资料库：王龜齡（26988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26988&o=json)
