---
schema: wang-person/v1
id: p_2Q1dVYomcAnmT39HuisWTS
status: active
merged_into: null
display_name: 曾兆鳌
cbdb_id: 374642
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2Hwu5GWONcfLnn9vghfRwA
        subject_person_id: p_2Q1dVYomcAnmT39HuisWTS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "曾兆鳌，清人物。CBDB 记录其籍贯记录为閩縣，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 374642 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_bw_paPPukaa2nxT6Gyu_sZ
          claim_id: c_2Hwu5GWONcfLnn9vghfRwA
          source_id: s_QP9pPPcVQLWxesHHGF8ELF
          stance: supports
          locator: CBDB:374642
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QP9pPPcVQLWxesHHGF8ELF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：曾兆鼇（374642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=374642&o=json
            external_identifier: CBDB:374642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:25.566Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_X6fNpS1Cu2dX2qcJJ6Nadk
        subject_person_id: p_2Q1dVYomcAnmT39HuisWTS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曾兆鳌
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FMbpQEP8r25N8zDM876A6N
          claim_id: c_X6fNpS1Cu2dX2qcJJ6Nadk
          source_id: s_yNn792qXxw8Z3JT1HypSze
          stance: supports
          locator: Q11091415
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_yNn792qXxw8Z3JT1HypSze
            source_type: api_record
            title: 维基数据：曾兆鳌（Q11091415）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11091415
            external_identifier: Q11091415
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:25.389Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E6%9B%BE%E5%85%86%E9%BC%87
        - id: cs_L5CDQk3FVxDLEb9GApa7Ut
          claim_id: c_X6fNpS1Cu2dX2qcJJ6Nadk
          source_id: s_QP9pPPcVQLWxesHHGF8ELF
          stance: supports
          locator: Q11091415
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
        id: c_NyEQmnvMdJnKX6sBNKEp9T
        subject_person_id: p_2Q1dVYomcAnmT39HuisWTS
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_rS43g15uFE9NE2ATs6hXvh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a96BCNj43U2QEtB3WtCybA
          claim_id: c_NyEQmnvMdJnKX6sBNKEp9T
          source_id: s_6wubF99G6Gw6DbeDfxggcu
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_6wubF99G6Gw6DbeDfxggcu
            source_type: api_record
            title: 维基数据：王氏（Q13690230）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13690230
            external_identifier: Q13690230
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:23.617Z
            metadata_json: null
        - id: cs_wZSCxAehcXNyVM2zs9jHwp
          claim_id: c_NyEQmnvMdJnKX6sBNKEp9T
          source_id: s_yNn792qXxw8Z3JT1HypSze
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_rS43g15uFE9NE2ATs6hXvh
        status: active
        display_name: 王氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 曾兆鳌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 曾兆鳌，清人物。CBDB 记录其籍贯记录为閩縣，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 374642 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 曾兆鳌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_rS43g15uFE9NE2ATs6hXvh | 王氏 | accepted |

## 外部来源

- [维基数据：曾兆鳌（Q11091415）](https://www.wikidata.org/wiki/Q11091415)
- [维基数据：王氏（Q13690230）](https://www.wikidata.org/wiki/Q13690230)
- [CBDB 中国历代人物传记资料库：曾兆鼇（374642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=374642&o=json)
