---
schema: wang-person/v1
id: p_iVXKWi9f5gNuEVGc79EzBF
status: active
merged_into: null
display_name: 王晏宝
cbdb_id: 184943
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bHvq2y7QNMXuB6W46gcTCQ
        subject_person_id: p_iVXKWi9f5gNuEVGc79EzBF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏宝（卒于854年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 184943 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Up8fQUQvdFjtDym1E9CGb8
          claim_id: c_bHvq2y7QNMXuB6W46gcTCQ
          source_id: s_64XeMFRrpqodXsZKs2NNK9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_64XeMFRrpqodXsZKs2NNK9
            source_type: api_record
            title: 维基数据：王晏宝（Q45603535）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603535
            external_identifier: Q45603535
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:40.541Z
            metadata_json: null
        - id: cs_k80qRx9atCuU66pnvFy3HM
          claim_id: c_bHvq2y7QNMXuB6W46gcTCQ
          source_id: s_yNY1NrAj3295GrzhL3CDMT
          stance: supports
          locator: CBDB:184943
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yNY1NrAj3295GrzhL3CDMT
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏寶（184943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184943&o=json
            external_identifier: CBDB:184943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:40.709Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QFzEkterEQrkVVhH1ZdLzz
        subject_person_id: p_iVXKWi9f5gNuEVGc79EzBF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 854年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0854-01-01
            latest: 0854-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_23d8uJ38ayDvoemYmasv4P
          claim_id: c_QFzEkterEQrkVVhH1ZdLzz
          source_id: s_64XeMFRrpqodXsZKs2NNK9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_64XeMFRrpqodXsZKs2NNK9
            source_type: api_record
            title: 维基数据：王晏宝（Q45603535）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603535
            external_identifier: Q45603535
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:40.541Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PrAhPXXdxcCkwja98F5JW3
        subject_person_id: p_iVXKWi9f5gNuEVGc79EzBF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏宝
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_J8t6CVQqnoP2DZYk5KdhHW
          claim_id: c_PrAhPXXdxcCkwja98F5JW3
          source_id: s_64XeMFRrpqodXsZKs2NNK9
          stance: supports
          locator: Q45603535
          quotation: null
          interpretation_note: null
          source:
            id: s_64XeMFRrpqodXsZKs2NNK9
            source_type: api_record
            title: 维基数据：王晏宝（Q45603535）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603535
            external_identifier: Q45603535
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:40.541Z
            metadata_json: null
        - id: cs_qkQyt7b8LTaq3vcNDKQyma
          claim_id: c_PrAhPXXdxcCkwja98F5JW3
          source_id: s_yNY1NrAj3295GrzhL3CDMT
          stance: supports
          locator: Q45603535
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sXn8d6QyevbFAstEWTjrZC
        subject_person_id: p_6BymFd7sw6j7GAmg7erqPj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iVXKWi9f5gNuEVGc79EzBF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8dCaCHvE76S94LX6jPnxKF
          claim_id: c_sXn8d6QyevbFAstEWTjrZC
          source_id: s_YtiuJ4x6oyDJbCvjY9nQK7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_YtiuJ4x6oyDJbCvjY9nQK7
            source_type: api_record
            title: 维基数据：王智兴（Q7967776）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7967776
            external_identifier: Q7967776
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:24.494Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%BA%E8%88%88
        - id: cs_w9aAxAcvMPDKHv2geMWVtt
          claim_id: c_sXn8d6QyevbFAstEWTjrZC
          source_id: s_64XeMFRrpqodXsZKs2NNK9
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_6BymFd7sw6j7GAmg7erqPj
        status: active
        display_name: 王智兴
        merged_into_person_id: null
    - claim:
        id: c_jH78Cz-PM1h3u3ZSHxZAA_
        subject_person_id: p_1HLRDPP5GEjvYAj6jfrJ31
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iVXKWi9f5gNuEVGc79EzBF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8-_7zl8Oao9DtIc6DymMJ3
          claim_id: c_jH78Cz-PM1h3u3ZSHxZAA_
          source_id: s_yNY1NrAj3295GrzhL3CDMT
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1HLRDPP5GEjvYAj6jfrJ31
        status: merged
        display_name: 王智興
        merged_into_person_id: p_6BymFd7sw6j7GAmg7erqPj
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晏宝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晏宝（卒于854年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 184943 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 854年 | accepted |
| name.primary | 王晏宝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6BymFd7sw6j7GAmg7erqPj | 王智兴 | accepted |
| parents | p_1HLRDPP5GEjvYAj6jfrJ31 | 王智興 | accepted |

## 外部来源

- [维基数据：王晏宝（Q45603535）](https://www.wikidata.org/wiki/Q45603535)
- [维基数据：王智兴（Q7967776）](https://www.wikidata.org/wiki/Q7967776)
- [CBDB 中国历代人物传记资料库：王晏寶（184943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184943&o=json)
