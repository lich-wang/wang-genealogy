---
schema: wang-person/v1
id: p_ARknwHLDtDNeZVf48qiF3F
status: active
merged_into: null
display_name: 王诏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2EcMcPXWvGNUNcrjHTFtoz
        subject_person_id: p_ARknwHLDtDNeZVf48qiF3F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王诏（1428年—1491年），天順進士。维基数据以独立条目 Q15928211 收录该人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Ujro79qQurib0YynQgAfJL
          claim_id: c_2EcMcPXWvGNUNcrjHTFtoz
          source_id: s_cbBNC69nJo7iA6xbFpqp97
          stance: supports
          locator: Q15928211
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_cbBNC69nJo7iA6xbFpqp97
            source_type: api_record
            title: 维基数据：王诏（Q15928211）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15928211
            external_identifier: Q15928211
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:33.776Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6t76tpWVQ2i3kGXUiKVMq9
        subject_person_id: p_ARknwHLDtDNeZVf48qiF3F
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1428年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1428-01-01
            latest: 1428-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xkngeEeP4aecV2WraKDu63
          claim_id: c_6t76tpWVQ2i3kGXUiKVMq9
          source_id: s_cbBNC69nJo7iA6xbFpqp97
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_cbBNC69nJo7iA6xbFpqp97
            source_type: api_record
            title: 维基数据：王诏（Q15928211）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15928211
            external_identifier: Q15928211
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:33.776Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_AhP35F7gRdrpkYs8sfeME1
        subject_person_id: p_ARknwHLDtDNeZVf48qiF3F
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1491年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1491-01-01
            latest: 1491-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Zc6n5KNzAhJ5tGREq11v1y
          claim_id: c_AhP35F7gRdrpkYs8sfeME1
          source_id: s_cbBNC69nJo7iA6xbFpqp97
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_cbBNC69nJo7iA6xbFpqp97
            source_type: api_record
            title: 维基数据：王诏（Q15928211）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15928211
            external_identifier: Q15928211
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:33.776Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2dBcMRzjTnsFFk2EfRQv3N
        subject_person_id: p_ARknwHLDtDNeZVf48qiF3F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王诏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vx9PyyjMyi5nLfYgvSbREg
          claim_id: c_2dBcMRzjTnsFFk2EfRQv3N
          source_id: s_cbBNC69nJo7iA6xbFpqp97
          stance: supports
          locator: Q15928211
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EWDf3BS8qKzXQvpNRt1sdj
        subject_person_id: p_mkEUUStA3H6zxa8Vzv7LyH
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ARknwHLDtDNeZVf48qiF3F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2B7RoVrEL8VA4r4hnM8auJ
          claim_id: c_EWDf3BS8qKzXQvpNRt1sdj
          source_id: s_cbBNC69nJo7iA6xbFpqp97
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_cbBNC69nJo7iA6xbFpqp97
            source_type: api_record
            title: 维基数据：王诏（Q15928211）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15928211
            external_identifier: Q15928211
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:33.776Z
            metadata_json: null
        - id: cs_ENCPCzVkLVPaWsgx77b9A9
          claim_id: c_EWDf3BS8qKzXQvpNRt1sdj
          source_id: s_S71Vwi2CwFX8kSRHwTPyST
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_S71Vwi2CwFX8kSRHwTPyST
            source_type: api_record
            title: 维基数据：王昂（Q45539296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45539296
            external_identifier: Q45539296
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
      object_person:
        id: p_mkEUUStA3H6zxa8Vzv7LyH
        status: active
        display_name: 王昂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_AFCBe4q2R9GogZqtCrcJjV
        subject_person_id: p_ARknwHLDtDNeZVf48qiF3F
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_hPJPD72anHdssJJebWQ769
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LVnPdDVhEJ3AVqxGSHd8qf
          claim_id: c_AFCBe4q2R9GogZqtCrcJjV
          source_id: s_cbBNC69nJo7iA6xbFpqp97
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_cbBNC69nJo7iA6xbFpqp97
            source_type: api_record
            title: 维基数据：王诏（Q15928211）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15928211
            external_identifier: Q15928211
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:33.776Z
            metadata_json: null
        - id: cs_ciri566y1SLX8HGwsYroPn
          claim_id: c_AFCBe4q2R9GogZqtCrcJjV
          source_id: s_8YsYgW69KkcMNHQDs4eAPm
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：天順八年進士登科錄:一卷
          source:
            id: s_8YsYgW69KkcMNHQDs4eAPm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王詔（67938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67938&o=json
            external_identifier: CBDB:67938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:40.308Z
            metadata_json: null
        - id: cs_sbqm7CcDAgsoHQ6ZN5qRKC
          claim_id: c_AFCBe4q2R9GogZqtCrcJjV
          source_id: s_ij8tm52HrnxALnn8HHWq3T
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_ij8tm52HrnxALnn8HHWq3T
            source_type: api_record
            title: 维基数据：曹氏（Q65865711）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65865711
            external_identifier: Q65865711
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:55.359Z
            metadata_json: null
      object_person:
        id: p_hPJPD72anHdssJJebWQ769
        status: active
        display_name: 曹氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王诏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王诏（1428年—1491年），天順進士。维基数据以独立条目 Q15928211 收录该人物。 | accepted |
| birth.date | 1428年 | accepted |
| death.date | 1491年 | accepted |
| name.primary | 王诏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mkEUUStA3H6zxa8Vzv7LyH | 王昂 | accepted |
| spouses | p_hPJPD72anHdssJJebWQ769 | 曹氏 | accepted |

## 外部来源

- [维基数据：曹氏（Q65865711）](https://www.wikidata.org/wiki/Q65865711)
- [维基数据：王昂（Q45539296）](https://www.wikidata.org/wiki/Q45539296)
- [维基数据：王诏（Q15928211）](https://www.wikidata.org/wiki/Q15928211)
- [CBDB 中国历代人物传记资料库：王詔（67938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67938&o=json)
