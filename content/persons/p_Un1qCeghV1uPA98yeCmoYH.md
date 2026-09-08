---
schema: wang-person/v1
id: p_Un1qCeghV1uPA98yeCmoYH
status: active
merged_into: null
display_name: 王晏韬
cbdb_id: 184948
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vuT9LCQDHdoFDw9VU6NeFo
        subject_person_id: p_Un1qCeghV1uPA98yeCmoYH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏韬（卒于854年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 184948 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GfjDAiAXmSz69ACAqynCSV
          claim_id: c_vuT9LCQDHdoFDw9VU6NeFo
          source_id: s_5rxPhLzwuoKL3pvKpB4AUq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_5rxPhLzwuoKL3pvKpB4AUq
            source_type: api_record
            title: 维基数据：王晏韬（Q45603856）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603856
            external_identifier: Q45603856
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:44.307Z
            metadata_json: null
        - id: cs_ORrVlKg2v-1DoB5H80iRsa
          claim_id: c_vuT9LCQDHdoFDw9VU6NeFo
          source_id: s_MvAwH3DZtx2NLsULJaZ2hc
          stance: supports
          locator: CBDB:184948
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MvAwH3DZtx2NLsULJaZ2hc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晏韜（184948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184948&o=json
            external_identifier: CBDB:184948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:44.493Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DEZKCCkURNDfBYL6kS2eKG
        subject_person_id: p_Un1qCeghV1uPA98yeCmoYH
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
        - id: cs_oSzBfDBsnewqYxkw5AqUyi
          claim_id: c_DEZKCCkURNDfBYL6kS2eKG
          source_id: s_5rxPhLzwuoKL3pvKpB4AUq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_5rxPhLzwuoKL3pvKpB4AUq
            source_type: api_record
            title: 维基数据：王晏韬（Q45603856）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603856
            external_identifier: Q45603856
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:44.307Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BM78rm7wBRGgQL75kg8MPc
        subject_person_id: p_Un1qCeghV1uPA98yeCmoYH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏韬
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9MS228fy1ofgRE7qdYd33i
          claim_id: c_BM78rm7wBRGgQL75kg8MPc
          source_id: s_MvAwH3DZtx2NLsULJaZ2hc
          stance: supports
          locator: Q45603856
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_p9s47VAg2tUU7APorwT8KR
          claim_id: c_BM78rm7wBRGgQL75kg8MPc
          source_id: s_5rxPhLzwuoKL3pvKpB4AUq
          stance: supports
          locator: Q45603856
          quotation: null
          interpretation_note: null
          source:
            id: s_5rxPhLzwuoKL3pvKpB4AUq
            source_type: api_record
            title: 维基数据：王晏韬（Q45603856）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603856
            external_identifier: Q45603856
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:44.307Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5rNvdZFkprG56UKdQqDnjm
        subject_person_id: p_6BymFd7sw6j7GAmg7erqPj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Un1qCeghV1uPA98yeCmoYH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DRf7kLxnPNDq4uvQfSkzzZ
          claim_id: c_5rNvdZFkprG56UKdQqDnjm
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
        - id: cs_sHoyT2PH3P8ems1Lbear5v
          claim_id: c_5rNvdZFkprG56UKdQqDnjm
          source_id: s_5rxPhLzwuoKL3pvKpB4AUq
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
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晏韬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晏韬（卒于854年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 184948 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 854年 | accepted |
| name.primary | 王晏韬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6BymFd7sw6j7GAmg7erqPj | 王智兴 | accepted |

## 外部来源

- [维基数据：王晏韬（Q45603856）](https://www.wikidata.org/wiki/Q45603856)
- [维基数据：王智兴（Q7967776）](https://www.wikidata.org/wiki/Q7967776)
- [CBDB 中国历代人物传记资料库：王晏韜（184948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184948&o=json)
