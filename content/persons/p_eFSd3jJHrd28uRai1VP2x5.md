---
schema: wang-person/v1
id: p_eFSd3jJHrd28uRai1VP2x5
status: active
merged_into: null
display_name: 王氏
cbdb_id: 143692
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fzJz7juDygJ8XddT8Dr9YR
        subject_person_id: p_eFSd3jJHrd28uRai1VP2x5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hT6x3Zis8ZDL7DPekCXSJ5
          claim_id: c_fzJz7juDygJ8XddT8Dr9YR
          source_id: s_MnF4hbFMrVzvCRMB1pDcN8
          stance: supports
          locator: Q65803664
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_MnF4hbFMrVzvCRMB1pDcN8
            source_type: api_record
            title: 维基数据：王氏（Q65803664）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65803664
            external_identifier: Q65803664
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_CxETcQGmGG7pzNA75a99tb
          claim_id: c_fzJz7juDygJ8XddT8Dr9YR
          source_id: s_TNB6guUUMc1oa7o8EMZJuE
          stance: supports
          locator: CBDB:143692
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_TNB6guUUMc1oa7o8EMZJuE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（143692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143692&o=json
            external_identifier: CBDB:143692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qojT3sMy3dtkXCeuqU8DJo
        subject_person_id: p_eFSd3jJHrd28uRai1VP2x5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏，史料所见人物。本项目依据《王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_biQl23BAb-q_zMRZkgDr2F
          claim_id: c_qojT3sMy3dtkXCeuqU8DJo
          source_id: s_MnF4hbFMrVzvCRMB1pDcN8
          stance: supports
          locator: Q65803664
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5JLQhUEM6qMCYkvVNbGNtG
        subject_person_id: p_eY8EfR1RNk6RwbouvBQCRd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eFSd3jJHrd28uRai1VP2x5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nqZXGUaLtTJcSBeMNJmypi
          claim_id: c_5JLQhUEM6qMCYkvVNbGNtG
          source_id: s_B3DgWR2fHr7eJGLbWkQ9BD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_B3DgWR2fHr7eJGLbWkQ9BD
            source_type: api_record
            title: 维基数据：王承宗（Q7967386）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7967386
            external_identifier: Q7967386
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:22.442Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%89%BF%E5%AE%97
        - id: cs_N1MpY4bpCh2Ji6CWmvvYj2
          claim_id: c_5JLQhUEM6qMCYkvVNbGNtG
          source_id: s_MnF4hbFMrVzvCRMB1pDcN8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_SfJri3pzW9VNWf1AQ3n3Ln
          claim_id: c_5JLQhUEM6qMCYkvVNbGNtG
          source_id: s_k7j5o648JbsKc9SZWnKL5x
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌彙編續集
          source:
            id: s_k7j5o648JbsKc9SZWnKL5x
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王承宗（169026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169026&o=json
            external_identifier: CBDB:169026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:22.583Z
            metadata_json: null
      object_person:
        id: p_eY8EfR1RNk6RwbouvBQCRd
        status: active
        display_name: 王承宗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王氏 | accepted |
| bio.summary | 王氏，史料所见人物。本项目依据《王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eY8EfR1RNk6RwbouvBQCRd | 王承宗 | accepted |

## 外部来源

- [维基数据：王承宗（Q7967386）](https://www.wikidata.org/wiki/Q7967386)
- [维基数据：王氏（Q65803664）](https://www.wikidata.org/wiki/Q65803664)
- [CBDB 中国历代人物传记资料库：王承宗（169026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169026&o=json)
- [CBDB 中国历代人物传记资料库：王氏（143692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143692&o=json)
