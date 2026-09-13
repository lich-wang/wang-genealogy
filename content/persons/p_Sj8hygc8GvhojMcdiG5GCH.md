---
schema: wang-person/v1
id: p_Sj8hygc8GvhojMcdiG5GCH
status: active
merged_into: null
display_name: 王槐起
cbdb_id: 123340
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pporYbrzn7bN3DdYLkP36q
        subject_person_id: p_Sj8hygc8GvhojMcdiG5GCH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐起，清人物。籍贯山陰。（中国历代人物传记资料库 CBDB 123340）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_LnALzkNs1FPUt7BSBsgkCy
          claim_id: c_pporYbrzn7bN3DdYLkP36q
          source_id: s_fkB7x3AEr3j4xZJ4A1BA3K
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_fkB7x3AEr3j4xZJ4A1BA3K
            source_type: api_record
            title: 维基数据：王槐起（Q45675252）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45675252
            external_identifier: Q45675252
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:14.436Z
            metadata_json: null
        - id: cs_TwliWz0YtAXQ7TpcfZBVG0
          claim_id: c_pporYbrzn7bN3DdYLkP36q
          source_id: s_Mzx6GHSLqTuVLs67XBw7DL
          stance: supports
          locator: CBDB:123340
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Mzx6GHSLqTuVLs67XBw7DL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王槐起（123340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123340&o=json
            external_identifier: CBDB:123340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:14.657Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SpvXf4FLfdb2mJyKhc7UTM
        subject_person_id: p_Sj8hygc8GvhojMcdiG5GCH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐起
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QQfFLH55VbCoKPayfb61a1
          claim_id: c_SpvXf4FLfdb2mJyKhc7UTM
          source_id: s_fkB7x3AEr3j4xZJ4A1BA3K
          stance: supports
          locator: Q45675252
          quotation: null
          interpretation_note: null
          source:
            id: s_fkB7x3AEr3j4xZJ4A1BA3K
            source_type: api_record
            title: 维基数据：王槐起（Q45675252）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45675252
            external_identifier: Q45675252
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:14.436Z
            metadata_json: null
        - id: cs_uGL5tho7Jpp64DZPY4U7kw
          claim_id: c_SpvXf4FLfdb2mJyKhc7UTM
          source_id: s_Mzx6GHSLqTuVLs67XBw7DL
          stance: supports
          locator: Q45675252
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4W2p7w8wrMEK9tc1s8uC9u
        subject_person_id: p_WgJjrR3eV8FZmEbV9t77oX
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Sj8hygc8GvhojMcdiG5GCH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B8caGpZjpQxLPB4iJDXsn1
          claim_id: c_4W2p7w8wrMEK9tc1s8uC9u
          source_id: s_Xiup79Q6rjsrG4SdhBjp36
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_Xiup79Q6rjsrG4SdhBjp36
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思任（71875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71875&o=json
            external_identifier: CBDB:71875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:52.726Z
            metadata_json: null
        - id: cs_JzxCS9E2EjtBFb6PZ1MzNM
          claim_id: c_4W2p7w8wrMEK9tc1s8uC9u
          source_id: s_tSz5UtgEYXRtEWdwBQvTsR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_tSz5UtgEYXRtEWdwBQvTsR
            source_type: api_record
            title: 维基数据：王思任（Q15938368）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15938368
            external_identifier: Q15938368
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:36.824Z
            metadata_json: null
        - id: cs_TnD4S1Pk1815WKZpNKDX3i
          claim_id: c_4W2p7w8wrMEK9tc1s8uC9u
          source_id: s_fkB7x3AEr3j4xZJ4A1BA3K
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_fkB7x3AEr3j4xZJ4A1BA3K
            source_type: api_record
            title: 维基数据：王槐起（Q45675252）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45675252
            external_identifier: Q45675252
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:14.436Z
            metadata_json: null
      object_person:
        id: p_WgJjrR3eV8FZmEbV9t77oX
        status: active
        display_name: 王思任
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_BPbetayxYtdFTSL7rF2asE
        subject_person_id: p_C8S76xL9QeVY84yBo32FLj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Sj8hygc8GvhojMcdiG5GCH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GgJFPcN4Jcsni2Jiw9jMtw
          claim_id: c_BPbetayxYtdFTSL7rF2asE
          source_id: s_fkB7x3AEr3j4xZJ4A1BA3K
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_BVYdDRKeGQAiSp44pSAd4H
          claim_id: c_BPbetayxYtdFTSL7rF2asE
          source_id: s_hDze6Q7hSboGoHCJDzDSQB
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_hDze6Q7hSboGoHCJDzDSQB
            source_type: api_record
            title: 维基数据：陈德卿（Q45675173）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45675173
            external_identifier: Q45675173
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:21.813Z
            metadata_json: null
        - id: cs_GRv9WT99dHE5sbUkFxWV43
          claim_id: c_BPbetayxYtdFTSL7rF2asE
          source_id: s_Mzx6GHSLqTuVLs67XBw7DL
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source: *a1
      object_person:
        id: p_C8S76xL9QeVY84yBo32FLj
        status: active
        display_name: 陈德卿
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王槐起

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王槐起，清人物。籍贯山陰。（中国历代人物传记资料库 CBDB 123340） | accepted |
| name.primary | 王槐起 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WgJjrR3eV8FZmEbV9t77oX | 王思任 | accepted |
| spouses | p_C8S76xL9QeVY84yBo32FLj | 陈德卿 | accepted |

## 外部来源

- [维基数据：陈德卿（Q45675173）](https://www.wikidata.org/wiki/Q45675173)
- [维基数据：王槐起（Q45675252）](https://www.wikidata.org/wiki/Q45675252)
- [维基数据：王思任（Q15938368）](https://www.wikidata.org/wiki/Q15938368)
- [CBDB 中国历代人物传记资料库：王槐起（123340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123340&o=json)
- [CBDB 中国历代人物传记资料库：王思任（71875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71875&o=json)
