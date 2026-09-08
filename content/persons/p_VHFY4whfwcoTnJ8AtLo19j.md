---
schema: wang-person/v1
id: p_VHFY4whfwcoTnJ8AtLo19j
status: active
merged_into: null
display_name: 王II
cbdb_id: 27111
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oPW3LMZmduZ1qAPqpy6csz
        subject_person_id: p_VHFY4whfwcoTnJ8AtLo19j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王II，宋人物。CBDB 记录其籍贯记录为臨川。中国历代人物传记资料库（CBDB）以人物编号 27111 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_tY8GFYHMAAVUybAWHvKZBH
          claim_id: c_oPW3LMZmduZ1qAPqpy6csz
          source_id: s_493CPhcJdFGczoi1HNVAJQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_493CPhcJdFGczoi1HNVAJQ
            source_type: api_record
            title: 维基数据：王II（Q45411362）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45411362
            external_identifier: Q45411362
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:06.504Z
            metadata_json: null
        - id: cs_ceglUzpSfVQrVg9ACNlw3W
          claim_id: c_oPW3LMZmduZ1qAPqpy6csz
          source_id: s_hPSD1MyEF6LB8rbEsrQX4M
          stance: supports
          locator: CBDB:27111
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hPSD1MyEF6LB8rbEsrQX4M
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王II（27111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27111&o=json
            external_identifier: CBDB:27111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:06.685Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tjg25RE3F5FKFn1h4Wx45R
        subject_person_id: p_VHFY4whfwcoTnJ8AtLo19j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王II
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2hySPmmSQcgK8aeJ8N793u
          claim_id: c_tjg25RE3F5FKFn1h4Wx45R
          source_id: s_493CPhcJdFGczoi1HNVAJQ
          stance: supports
          locator: Q45411362
          quotation: null
          interpretation_note: null
          source:
            id: s_493CPhcJdFGczoi1HNVAJQ
            source_type: api_record
            title: 维基数据：王II（Q45411362）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45411362
            external_identifier: Q45411362
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:06.504Z
            metadata_json: null
        - id: cs_LSbm8ZmDmQCqGLDCFNW9My
          claim_id: c_tjg25RE3F5FKFn1h4Wx45R
          source_id: s_hPSD1MyEF6LB8rbEsrQX4M
          stance: supports
          locator: Q45411362
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tuYLm3gv9Mvh8g8aXbRAKZ
        subject_person_id: p_qhr63u6HvGLzGzcHEvaWtZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VHFY4whfwcoTnJ8AtLo19j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_QMX974fYctHcwcyYqHGG4V
          claim_id: c_tuYLm3gv9Mvh8g8aXbRAKZ
          source_id: s_nN8U88v6ioGd6Vn7FnijMg
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_nN8U88v6ioGd6Vn7FnijMg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王用之（18553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18553&o=json
            external_identifier: CBDB:18553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:18.692Z
            metadata_json: null
        - id: cs_j53TM4cNXaRzGyp7Yuf8yR
          claim_id: c_tuYLm3gv9Mvh8g8aXbRAKZ
          source_id: s_bf7i3HJ55dCKhrKsK4HAr1
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bf7i3HJ55dCKhrKsK4HAr1
            source_type: api_record
            title: 维基数据：王用之（Q45389721）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389721
            external_identifier: Q45389721
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:18.559Z
            metadata_json: null
        - id: cs_7o59m6QDqV9a4NoPUj89VV
          claim_id: c_tuYLm3gv9Mvh8g8aXbRAKZ
          source_id: s_493CPhcJdFGczoi1HNVAJQ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_493CPhcJdFGczoi1HNVAJQ
            source_type: api_record
            title: 维基数据：王II（Q45411362）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45411362
            external_identifier: Q45411362
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:06.504Z
            metadata_json: null
        - id: cs_KEwwwKfYQgCX2ArG3JidQW
          claim_id: c_tuYLm3gv9Mvh8g8aXbRAKZ
          source_id: s_hPSD1MyEF6LB8rbEsrQX4M
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_hPSD1MyEF6LB8rbEsrQX4M
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王II（27111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27111&o=json
            external_identifier: CBDB:27111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:06.685Z
            metadata_json: null
      object_person:
        id: p_qhr63u6HvGLzGzcHEvaWtZ
        status: active
        display_name: 王用之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王II

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王II，宋人物。CBDB 记录其籍贯记录为臨川。中国历代人物传记资料库（CBDB）以人物编号 27111 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王II | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qhr63u6HvGLzGzcHEvaWtZ | 王用之 | accepted |

## 外部来源

- [维基数据：王用之（Q45389721）](https://www.wikidata.org/wiki/Q45389721)
- [维基数据：王II（Q45411362）](https://www.wikidata.org/wiki/Q45411362)
- [CBDB 中国历代人物传记资料库：王用之（18553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18553&o=json)
- [CBDB 中国历代人物传记资料库：王II（27111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27111&o=json)
