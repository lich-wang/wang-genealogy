---
schema: wang-person/v1
id: p_b2BNKpQqMbC3xJGHf9un3N
status: active
merged_into: null
display_name: 王明
cbdb_id: 1855
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ycs4hXDvcHLdKkN3YGKqZ4
        subject_person_id: p_b2BNKpQqMbC3xJGHf9un3N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cU9EfddYpgvb432ZUX8eQC
          claim_id: c_Ycs4hXDvcHLdKkN3YGKqZ4
          source_id: s_t5T7QqzwbxL6UN7UN4KHKs
          stance: supports
          locator: Q28414907
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_t5T7QqzwbxL6UN7UN4KHKs
            source_type: api_record
            title: 维基数据：王明（Q28414907）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q28414907
            external_identifier: Q28414907
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%8E_(%E5%AE%8B%E6%9C%9D)
        - id: cs_5DR3T725FDVgYMggANJCLy
          claim_id: c_Ycs4hXDvcHLdKkN3YGKqZ4
          source_id: s_aL4EcP94aV8eKfMQDR86hi
          stance: supports
          locator: CBDB:1855
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_aL4EcP94aV8eKfMQDR86hi
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王明（1855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1855&o=json
            external_identifier: CBDB:1855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1eWpBpJ1CaTXLo3qGC77fX
        subject_person_id: p_b2BNKpQqMbC3xJGHf9un3N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明（919年—991年），宋人物。籍贯成安，入仕薦舉 (保任,保舉)，曾任三司使、刺史、禮部侍郎。（中国历代人物传记资料库 CBDB 1855）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ofKM1M4wQWzdbZZSZGMrwq
          claim_id: c_1eWpBpJ1CaTXLo3qGC77fX
          source_id: s_t5T7QqzwbxL6UN7UN4KHKs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
        - id: cs_oWUeqX3gLO5Pap_b4Q_o_I
          claim_id: c_1eWpBpJ1CaTXLo3qGC77fX
          source_id: s_aL4EcP94aV8eKfMQDR86hi
          stance: supports
          locator: CBDB:1855
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a2
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kWbBnx9o6M12n7FT6eNatt
        subject_person_id: p_b2BNKpQqMbC3xJGHf9un3N
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 919年
            calendar_note: 维基数据 P569 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EVTowrKYkCjwR7MBRduFKB
          claim_id: c_kWbBnx9o6M12n7FT6eNatt
          source_id: s_t5T7QqzwbxL6UN7UN4KHKs
          stance: supports
          locator: P569（出生日期）
          quotation: null
          interpretation_note: 维基数据 P569
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8trQ4QPYRHPpXkDL9pRyev
        subject_person_id: p_b2BNKpQqMbC3xJGHf9un3N
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 991年
            calendar_note: 维基数据 P570 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rT83eRHpBVQKdnA9VV9n7Y
          claim_id: c_8trQ4QPYRHPpXkDL9pRyev
          source_id: s_t5T7QqzwbxL6UN7UN4KHKs
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_37zCJ9VjZY3tN6P8t4KNq9
        subject_person_id: p_b2BNKpQqMbC3xJGHf9un3N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Myr7yL2y4NUdhUtw1bG9bq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K7tGWWiechKBzwJdLBFWKG
          claim_id: c_37zCJ9VjZY3tN6P8t4KNq9
          source_id: s_ZkMbPRZGMEwFHB19ascjGD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZkMbPRZGMEwFHB19ascjGD
            source_type: api_record
            title: 维基数据：王扶（Q45359463）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359463
            external_identifier: Q45359463
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:20.290Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%89%B6_(%E5%8C%97%E5%AE%8B)
        - id: cs_ABN7LMe3bF2XAoQurtMuap
          claim_id: c_37zCJ9VjZY3tN6P8t4KNq9
          source_id: s_t5T7QqzwbxL6UN7UN4KHKs
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_Myr7yL2y4NUdhUtw1bG9bq
        status: active
        display_name: 王扶
        merged_into_person_id: null
    - claim:
        id: c_tFeyhgZkyRa9wCzYzxqz3s
        subject_person_id: p_b2BNKpQqMbC3xJGHf9un3N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5iw33cL248sw6QfTEUKPQC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9lzLUCVmw3FGUnmKDjvrr8
          claim_id: c_tFeyhgZkyRa9wCzYzxqz3s
          source_id: s_1773FMqJV6f26ykoAZKMiD
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1773FMqJV6f26ykoAZKMiD
            source_type: api_record
            title: 中国历代人物传记资料库：王掞（CBDB 37906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37906&o=json
            external_identifier: CBDB:37906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5iw33cL248sw6QfTEUKPQC
        status: active
        display_name: 王掞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_zxLYWcZTXh82PsZ7FHlhGW
        subject_person_id: p_b2BNKpQqMbC3xJGHf9un3N
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tmq6Wnq1CjinFj62NTxvnd
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JTpQj-CGS36_5IbFv2z1Xh
          claim_id: c_zxLYWcZTXh82PsZ7FHlhGW
          source_id: s_aL4EcP94aV8eKfMQDR86hi
          stance: supports
          locator: 宋史，0：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_tmq6Wnq1CjinFj62NTxvnd
        status: active
        display_name: 王师颜
        merged_into_person_id: null
    - claim:
        id: c_3la2I3JtQYE0Qz7uqtrTmA
        subject_person_id: p_b2BNKpQqMbC3xJGHf9un3N
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LFjdt9p5AsmDgzGet1fXc3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lzrVxvxVsFL6H1R3HlFoZL
          claim_id: c_3la2I3JtQYE0Qz7uqtrTmA
          source_id: s_aL4EcP94aV8eKfMQDR86hi
          stance: supports
          locator: 宋史：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_LFjdt9p5AsmDgzGet1fXc3
        status: active
        display_name: 王广渊
        merged_into_person_id: null
  other: []
---

# 王明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明 | accepted |
| bio.summary | 王明（919年—991年），宋人物。籍贯成安，入仕薦舉 (保任,保舉)，曾任三司使、刺史、禮部侍郎。（中国历代人物传记资料库 CBDB 1855） | accepted |
| birth.date | 919年 | accepted |
| death.date | 991年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Myr7yL2y4NUdhUtw1bG9bq | 王扶 | accepted |
| children | p_5iw33cL248sw6QfTEUKPQC | 王掞 | accepted |
| descendants | p_tmq6Wnq1CjinFj62NTxvnd | 王师颜 | accepted |
| descendants | p_LFjdt9p5AsmDgzGet1fXc3 | 王广渊 | accepted |

## 外部来源

- [维基数据：王扶（Q45359463）](https://www.wikidata.org/wiki/Q45359463)
- [维基数据：王明（Q28414907）](https://www.wikidata.org/wiki/Q28414907)
- [中国历代人物传记资料库：王掞（CBDB 37906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37906&o=json)
- [CBDB 中国历代人物传记资料库：王明（1855）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1855&o=json)
