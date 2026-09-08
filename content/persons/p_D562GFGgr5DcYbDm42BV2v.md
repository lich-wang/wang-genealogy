---
schema: wang-person/v1
id: p_D562GFGgr5DcYbDm42BV2v
status: active
merged_into: null
display_name: 桃叶
cbdb_id: 135442
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WDpDmbgF4LGVE2MvuvASMq
        subject_person_id: p_D562GFGgr5DcYbDm42BV2v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 桃叶，東晉人物。中国历代人物传记资料库（CBDB）以人物编号 135442 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IwrSiCRdLJZmlS-bMxLtES
          claim_id: c_WDpDmbgF4LGVE2MvuvASMq
          source_id: s_myQeEEFabNEHwRWbKUSQAD
          stance: supports
          locator: CBDB:135442
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_myQeEEFabNEHwRWbKUSQAD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：桃葉（135442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135442&o=json
            external_identifier: CBDB:135442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:30.737Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RZki7RQShXimU6XJBrLHst
        subject_person_id: p_D562GFGgr5DcYbDm42BV2v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 桃叶
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PtWDko7n9K4FK6T7Yn2AXQ
          claim_id: c_RZki7RQShXimU6XJBrLHst
          source_id: s_ndcPC4hK1eLjEXLyFh7rTt
          stance: supports
          locator: Q45472880
          quotation: null
          interpretation_note: null
          source:
            id: s_ndcPC4hK1eLjEXLyFh7rTt
            source_type: api_record
            title: 维基数据：桃叶（Q45472880）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45472880
            external_identifier: Q45472880
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:30.579Z
            metadata_json: null
        - id: cs_xzm2SmgKke2aDcNfEgNB7K
          claim_id: c_RZki7RQShXimU6XJBrLHst
          source_id: s_myQeEEFabNEHwRWbKUSQAD
          stance: supports
          locator: Q45472880
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
        id: c_Bwcbmb6jTr27rDY6sdHUVK
        subject_person_id: p_9kvwNC8EwFdL41MBGhg7HG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_D562GFGgr5DcYbDm42BV2v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Ke3iXgS9336qa5N5ZgD5r3
          claim_id: c_Bwcbmb6jTr27rDY6sdHUVK
          source_id: s_dypc2T3zk15WKQ7XHyCLp1
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_dypc2T3zk15WKQ7XHyCLp1
            source_type: api_record
            title: 維基數據：王獻之（Q559425）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q559425
            external_identifier: Q559425
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:47.659Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8C%AE%E4%B9%8B
        - id: cs_yyRGm8MtQCVm72zkavYj7Z
          claim_id: c_Bwcbmb6jTr27rDY6sdHUVK
          source_id: s_ndcPC4hK1eLjEXLyFh7rTt
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_ndcPC4hK1eLjEXLyFh7rTt
            source_type: api_record
            title: 维基数据：桃叶（Q45472880）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45472880
            external_identifier: Q45472880
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:30.579Z
            metadata_json: null
        - id: cs_78dS6qhXkpSnSeJN6xEj6E
          claim_id: c_Bwcbmb6jTr27rDY6sdHUVK
          source_id: s_myQeEEFabNEHwRWbKUSQAD
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
            id: s_myQeEEFabNEHwRWbKUSQAD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：桃葉（135442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135442&o=json
            external_identifier: CBDB:135442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:30.737Z
            metadata_json: null
      object_person:
        id: p_9kvwNC8EwFdL41MBGhg7HG
        status: active
        display_name: 王獻之
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 桃叶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 桃叶，東晉人物。中国历代人物传记资料库（CBDB）以人物编号 135442 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 桃叶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_9kvwNC8EwFdL41MBGhg7HG | 王獻之 | accepted |

## 外部来源

- [维基数据：桃叶（Q45472880）](https://www.wikidata.org/wiki/Q45472880)
- [維基數據：王獻之（Q559425）](https://www.wikidata.org/wiki/Q559425)
- [CBDB 中国历代人物传记资料库：桃葉（135442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135442&o=json)
