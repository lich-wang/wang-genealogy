---
schema: wang-person/v1
id: p_mkEUUStA3H6zxa8Vzv7LyH
status: active
merged_into: null
display_name: 王昂
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mCn5YavoiKNP4fM21nfeLx
        subject_person_id: p_mkEUUStA3H6zxa8Vzv7LyH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昂，明人物。CBDB 记录其籍贯记录为寧晉。中国历代人物传记资料库（CBDB）以人物编号 337975 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fbC5XKL6kKCBA5CL5v22U4
          claim_id: c_mCn5YavoiKNP4fM21nfeLx
          source_id: s_S71Vwi2CwFX8kSRHwTPyST
          stance: supports
          locator: null
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
        - id: cs_4XEa4yHNGQxP2fyWbE8qEP
          claim_id: c_mCn5YavoiKNP4fM21nfeLx
          source_id: s_LNXrSAMEKqgcXBznQXD7vt
          stance: supports
          locator: CBDB:337975
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LNXrSAMEKqgcXBznQXD7vt
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昂（337975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337975&o=json
            external_identifier: CBDB:337975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:52.238Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Td7bAs6UqC2hYgiy39r76C
        subject_person_id: p_mkEUUStA3H6zxa8Vzv7LyH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昂
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7jqYjTwK2n9CburgEbqaq3
          claim_id: c_Td7bAs6UqC2hYgiy39r76C
          source_id: s_S71Vwi2CwFX8kSRHwTPyST
          stance: supports
          locator: Q45539296
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
        - id: cs_xzjzvBjFWq6kC5Dpo9qp4H
          claim_id: c_Td7bAs6UqC2hYgiy39r76C
          source_id: s_LNXrSAMEKqgcXBznQXD7vt
          stance: supports
          locator: Q45539296
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
        id: p_ARknwHLDtDNeZVf48qiF3F
        status: active
        display_name: 王诏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昂，明人物。CBDB 记录其籍贯记录为寧晉。中国历代人物传记资料库（CBDB）以人物编号 337975 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王昂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ARknwHLDtDNeZVf48qiF3F | 王诏 | accepted |

## 外部来源

- [维基数据：王昂（Q45539296）](https://www.wikidata.org/wiki/Q45539296)
- [维基数据：王诏（Q15928211）](https://www.wikidata.org/wiki/Q15928211)
- [CBDB 中国历代人物传记资料库：王昂（337975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337975&o=json)
