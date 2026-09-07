---
schema: wang-person/v1
id: p_bAEpCu377ogzP69HEb81Bs
status: active
merged_into: null
display_name: 王超
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bQTWTPAznog4kpWAfuxTKL
        subject_person_id: p_bAEpCu377ogzP69HEb81Bs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王超，北宋時期將領。维基数据以独立条目 Q16077506 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_CFGwdovhG418avZRHVFBCu
          claim_id: c_bQTWTPAznog4kpWAfuxTKL
          source_id: s_zDkWjZZtLbX6M9LxBcAf7Z
          stance: supports
          locator: Q16077506
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_zDkWjZZtLbX6M9LxBcAf7Z
            source_type: api_record
            title: 维基数据：王超（Q16077506）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077506
            external_identifier: Q16077506
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:55.754Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B6%85_(%E5%8C%97%E5%AE%8B)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_h316L9eSWQ3q6Jnt3GDYjB
        subject_person_id: p_bAEpCu377ogzP69HEb81Bs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王超
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_E7agYyibSBjkoTu2hVTAiG
          claim_id: c_h316L9eSWQ3q6Jnt3GDYjB
          source_id: s_6Ns8JKYpFsSxcN4rRQ74oj
          stance: supports
          locator: Q16077506
          quotation: null
          interpretation_note: null
          source:
            id: s_6Ns8JKYpFsSxcN4rRQ74oj
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王超（7077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7077&o=json
            external_identifier: CBDB:7077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:55.919Z
            metadata_json: null
        - id: cs_PPp3QWUJHnEXfrsKskzDbX
          claim_id: c_h316L9eSWQ3q6Jnt3GDYjB
          source_id: s_zDkWjZZtLbX6M9LxBcAf7Z
          stance: supports
          locator: Q16077506
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_PQGKNA1pFjUCmdxBiDdFg9
        subject_person_id: p_bAEpCu377ogzP69HEb81Bs
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_mDQwQDowHukUUJhyJA2Q4Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2XhnEJ7SaRggjFeBoRTLD6
          claim_id: c_PQGKNA1pFjUCmdxBiDdFg9
          source_id: s_zDkWjZZtLbX6M9LxBcAf7Z
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_zDkWjZZtLbX6M9LxBcAf7Z
            source_type: api_record
            title: 维基数据：王超（Q16077506）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077506
            external_identifier: Q16077506
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:55.754Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B6%85_(%E5%8C%97%E5%AE%8B)
        - id: cs_DiXm1WUAo4n6KcXRZFLcxR
          claim_id: c_PQGKNA1pFjUCmdxBiDdFg9
          source_id: s_81a22jZyFPFGnFLoTT9eP3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_81a22jZyFPFGnFLoTT9eP3
            source_type: api_record
            title: 维基数据：王德用（Q10414172）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10414172
            external_identifier: Q10414172
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:43.212Z
            metadata_json: null
        - id: cs_hpwtfdmVHQMgk9CyFcg8Lb
          claim_id: c_PQGKNA1pFjUCmdxBiDdFg9
          source_id: s_6Ns8JKYpFsSxcN4rRQ74oj
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_6Ns8JKYpFsSxcN4rRQ74oj
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王超（7077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7077&o=json
            external_identifier: CBDB:7077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:55.919Z
            metadata_json: null
      object_person:
        id: p_mDQwQDowHukUUJhyJA2Q4Z
        status: active
        display_name: 王德用
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王超

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王超，北宋時期將領。维基数据以独立条目 Q16077506 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王超 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_mDQwQDowHukUUJhyJA2Q4Z | 王德用 | accepted |

## 外部来源

- [维基数据：王超（Q16077506）](https://www.wikidata.org/wiki/Q16077506)
- [维基数据：王德用（Q10414172）](https://www.wikidata.org/wiki/Q10414172)
- [CBDB 中国历代人物传记资料库：王超（7077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7077&o=json)
