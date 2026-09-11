---
schema: wang-person/v1
id: p_JFQHkPEwEAq8jJVUaH1sob
status: active
merged_into: null
display_name: 李氏
cbdb_id: 5209
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TrorhBDNVvS2iR9JRyhTpn
        subject_person_id: p_JFQHkPEwEAq8jJVUaH1sob
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，王代恕妻。维基数据以独立条目 Q45364337 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_HYvktnN_QKQBu8wS5KhjXo
          claim_id: c_TrorhBDNVvS2iR9JRyhTpn
          source_id: s_4jmgQkE9YE83WSJTSSGnn5
          stance: supports
          locator: Q45364337
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_4jmgQkE9YE83WSJTSSGnn5
            source_type: api_record
            title: 维基数据：李氏（Q45364337）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364337
            external_identifier: Q45364337
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:00.249Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xb76ZZReYbieCLfAFECy6n
        subject_person_id: p_JFQHkPEwEAq8jJVUaH1sob
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VpuQPnKgzto1xn1FYL6WQv
          claim_id: c_Xb76ZZReYbieCLfAFECy6n
          source_id: s_8BQ9yVvbv6wTsDsk1Wki7f
          stance: supports
          locator: Q45364337
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_8BQ9yVvbv6wTsDsk1Wki7f
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：李氏（5209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5209&o=json
            external_identifier: CBDB:5209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:00.418Z
            metadata_json: null
        - id: cs_c3MYjrAHL8Nf3negS7itc2
          claim_id: c_Xb76ZZReYbieCLfAFECy6n
          source_id: s_4jmgQkE9YE83WSJTSSGnn5
          stance: supports
          locator: Q45364337
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
        id: c_ZzxJHFASBooMDDw1trMegg
        subject_person_id: p_JFQHkPEwEAq8jJVUaH1sob
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_a9s6qMS7fehs4Q1KsCtRbY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C22UBmwTmT48UJAtH7hnFN
          claim_id: c_ZzxJHFASBooMDDw1trMegg
          source_id: s_FzTeTYi39DpiCN8KWWcGqD
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_FzTeTYi39DpiCN8KWWcGqD
            source_type: api_record
            title: 维基数据：王代恕（Q45375705）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45375705
            external_identifier: Q45375705
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:17.656Z
            metadata_json: null
        - id: cs_PzcAt5bT9qFfY7qmAYraap
          claim_id: c_ZzxJHFASBooMDDw1trMegg
          source_id: s_k4sES6DQb3wrUV1XHp4bBj
          stance: supports
          locator: 亲属关系：第二任妻
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_k4sES6DQb3wrUV1XHp4bBj
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王代恕（12850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12850&o=json
            external_identifier: CBDB:12850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:46.745Z
            metadata_json: null
        - id: cs_eXesxdPMzyLaQP2zWWcDmE
          claim_id: c_ZzxJHFASBooMDDw1trMegg
          source_id: s_4jmgQkE9YE83WSJTSSGnn5
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_4jmgQkE9YE83WSJTSSGnn5
            source_type: api_record
            title: 维基数据：李氏（Q45364337）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364337
            external_identifier: Q45364337
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:00.249Z
            metadata_json: null
      object_person:
        id: p_a9s6qMS7fehs4Q1KsCtRbY
        status: active
        display_name: 王代恕
        merged_into_person_id: null
    - claim:
        id: c_Mhit7TvC0h83nJKBCLImI8
        subject_person_id: p_JFQHkPEwEAq8jJVUaH1sob
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_H3E5VxBaQfqgvzveq3gJSK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3FPjBuYjSPR8RAPoR1aIz2
          claim_id: c_Mhit7TvC0h83nJKBCLImI8
          source_id: s_8BQ9yVvbv6wTsDsk1Wki7f
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1514;1515：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_H3E5VxBaQfqgvzveq3gJSK
        status: active
        display_name: 王代恕
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，王代恕妻。维基数据以独立条目 Q45364337 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_a9s6qMS7fehs4Q1KsCtRbY | 王代恕 | accepted |
| spouses | p_H3E5VxBaQfqgvzveq3gJSK | 王代恕 | accepted |

## 外部来源

- [维基数据：李氏（Q45364337）](https://www.wikidata.org/wiki/Q45364337)
- [维基数据：王代恕（Q45375705）](https://www.wikidata.org/wiki/Q45375705)
- [CBDB 中国历代人物传记资料库：李氏（5209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5209&o=json)
- [CBDB 中国历代人物传记资料库：王代恕（12850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12850&o=json)
