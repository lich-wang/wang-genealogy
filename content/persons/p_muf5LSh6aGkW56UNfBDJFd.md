---
schema: wang-person/v1
id: p_muf5LSh6aGkW56UNfBDJFd
status: active
merged_into: null
display_name: 王锡
cbdb_id: 175477
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b62Rmyyu9Hm6G1yy7S8ra8
        subject_person_id: p_muf5LSh6aGkW56UNfBDJFd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王锡（卒于857年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175477）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Qu5gThHx6DNzm578z36vFJ
          claim_id: c_b62Rmyyu9Hm6G1yy7S8ra8
          source_id: s_WdfoqDExZ36pYmQmWydMP9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_WdfoqDExZ36pYmQmWydMP9
            source_type: api_record
            title: 维基数据：王锡（Q45661985）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661985
            external_identifier: Q45661985
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:48.183Z
            metadata_json: null
        - id: cs_y5qS22bf2zExRMdU1jSyQa
          claim_id: c_b62Rmyyu9Hm6G1yy7S8ra8
          source_id: s_JBxNvLUnRisg9z4d6Zawdj
          stance: supports
          locator: CBDB:175477
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JBxNvLUnRisg9z4d6Zawdj
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王錫（175477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175477&o=json
            external_identifier: CBDB:175477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:48.328Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_U92dfhKR3YKRVDmRYPvF8y
        subject_person_id: p_muf5LSh6aGkW56UNfBDJFd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0857-01-01
            latest: 0857-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yERVMzR2AX9WarEMRzE8LN
          claim_id: c_U92dfhKR3YKRVDmRYPvF8y
          source_id: s_WdfoqDExZ36pYmQmWydMP9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_WdfoqDExZ36pYmQmWydMP9
            source_type: api_record
            title: 维基数据：王锡（Q45661985）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661985
            external_identifier: Q45661985
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:48.183Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pgEn34475PMpC8dqTs9ex6
        subject_person_id: p_muf5LSh6aGkW56UNfBDJFd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王锡
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HSW3o84iMbnHMEhujLvVdU
          claim_id: c_pgEn34475PMpC8dqTs9ex6
          source_id: s_WdfoqDExZ36pYmQmWydMP9
          stance: supports
          locator: Q45661985
          quotation: null
          interpretation_note: null
          source:
            id: s_WdfoqDExZ36pYmQmWydMP9
            source_type: api_record
            title: 维基数据：王锡（Q45661985）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661985
            external_identifier: Q45661985
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:48.183Z
            metadata_json: null
        - id: cs_f8gs6MATsPy4V14GwgLyBH
          claim_id: c_pgEn34475PMpC8dqTs9ex6
          source_id: s_JBxNvLUnRisg9z4d6Zawdj
          stance: supports
          locator: Q45661985
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9afGkeX7y7M3i7qPMGUg52
        subject_person_id: p_dWczLwq2nt4NbhEboLi4hv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_muf5LSh6aGkW56UNfBDJFd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_k3pmPsPNLrvWnQheHdRuAX
          claim_id: c_9afGkeX7y7M3i7qPMGUg52
          source_id: s_BZNF1EvpB2BuXDND8wBw9s
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_BZNF1EvpB2BuXDND8wBw9s
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逵（158714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158714&o=json
            external_identifier: CBDB:158714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:22.737Z
            metadata_json: null
        - id: cs_nFD1WF9LCaimAVXyWTp7r2
          claim_id: c_9afGkeX7y7M3i7qPMGUg52
          source_id: s_JQDw4kqPSC6ASxARvw3uXR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_JQDw4kqPSC6ASxARvw3uXR
            source_type: api_record
            title: 维基数据：王逵（Q45576024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45576024
            external_identifier: Q45576024
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:22.595Z
            metadata_json: null
        - id: cs_sRm3yrkDNu5tJnDgfVmVHY
          claim_id: c_9afGkeX7y7M3i7qPMGUg52
          source_id: s_WdfoqDExZ36pYmQmWydMP9
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_WdfoqDExZ36pYmQmWydMP9
            source_type: api_record
            title: 维基数据：王锡（Q45661985）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661985
            external_identifier: Q45661985
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:48.183Z
            metadata_json: null
        - id: cs_74FYLr3KjvQcBfUXgjL3fz
          claim_id: c_9afGkeX7y7M3i7qPMGUg52
          source_id: s_JBxNvLUnRisg9z4d6Zawdj
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_JBxNvLUnRisg9z4d6Zawdj
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王錫（175477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175477&o=json
            external_identifier: CBDB:175477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:48.328Z
            metadata_json: null
      object_person:
        id: p_dWczLwq2nt4NbhEboLi4hv
        status: active
        display_name: 王逵
        merged_into_person_id: null
  children:
    - claim:
        id: c_awWN9PYQxSL867HU5KXd5J
        subject_person_id: p_muf5LSh6aGkW56UNfBDJFd
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_HWmbLaLd4nMxsDMWXhWfNF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LhqUmWJG8x3dfEGGdo279k
          claim_id: c_awWN9PYQxSL867HU5KXd5J
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系图
          quotation: 王锡 → 王涉
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person:
        id: p_HWmbLaLd4nMxsDMWXhWfNF
        status: active
        display_name: 王涉
        merged_into_person_id: null
    - claim:
        id: c_tQ2eT7M7rDpCp3u8Q3pCwf
        subject_person_id: p_muf5LSh6aGkW56UNfBDJFd
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_2oDD9dEkRUp5DqLof6VuPN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QZv7mYsUMGyvimtHZWpMy5
          claim_id: c_tQ2eT7M7rDpCp3u8Q3pCwf
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王锡 → 王湜
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person:
        id: p_2oDD9dEkRUp5DqLof6VuPN
        status: active
        display_name: 王湜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王锡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王锡（卒于857年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175477） | accepted |
| death.date | 857年 | accepted |
| name.primary | 王锡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dWczLwq2nt4NbhEboLi4hv | 王逵 | accepted |
| children | p_HWmbLaLd4nMxsDMWXhWfNF | 王涉 | accepted |
| children | p_2oDD9dEkRUp5DqLof6VuPN | 王湜 | accepted |

## 外部来源

- [维基数据：王逵（Q45576024）](https://www.wikidata.org/wiki/Q45576024)
- [维基数据：王锡（Q45661985）](https://www.wikidata.org/wiki/Q45661985)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [CBDB 中国历代人物传记资料库：王逵（158714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158714&o=json)
- [CBDB 中国历代人物传记资料库：王錫（175477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175477&o=json)
