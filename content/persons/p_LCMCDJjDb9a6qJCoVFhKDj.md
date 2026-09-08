---
schema: wang-person/v1
id: p_LCMCDJjDb9a6qJCoVFhKDj
status: active
merged_into: null
display_name: 王延客
cbdb_id: 175641
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_62d3CJYTDFhkHuTrN2AGXK
        subject_person_id: p_LCMCDJjDb9a6qJCoVFhKDj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延客（卒于709年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175641 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CJxS9GJ13s2cfVSatia8gG
          claim_id: c_62d3CJYTDFhkHuTrN2AGXK
          source_id: s_iUAeZXEmwcLPDzTwhVDNaR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_iUAeZXEmwcLPDzTwhVDNaR
            source_type: api_record
            title: 维基数据：王延客（Q45670529）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670529
            external_identifier: Q45670529
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:41.402Z
            metadata_json: null
        - id: cs_6uNxy13TqM_Ja9qUZL2sex
          claim_id: c_62d3CJYTDFhkHuTrN2AGXK
          source_id: s_rzMHLpw8x7DtywuyoVNk94
          stance: supports
          locator: CBDB:175641
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rzMHLpw8x7DtywuyoVNk94
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王延客（175641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175641&o=json
            external_identifier: CBDB:175641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:41.561Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_q4r3wutPGAUGhhEuEgPBAw
        subject_person_id: p_LCMCDJjDb9a6qJCoVFhKDj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 709年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0709-01-01
            latest: 0709-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qHhb9j8f5yrtVd3LCrKs2o
          claim_id: c_q4r3wutPGAUGhhEuEgPBAw
          source_id: s_iUAeZXEmwcLPDzTwhVDNaR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_iUAeZXEmwcLPDzTwhVDNaR
            source_type: api_record
            title: 维基数据：王延客（Q45670529）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670529
            external_identifier: Q45670529
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:41.402Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8pxdDabYntzhoJnrJ52g4G
        subject_person_id: p_LCMCDJjDb9a6qJCoVFhKDj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延客
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YktZ5SAtQfW8v3ESC1kxiY
          claim_id: c_8pxdDabYntzhoJnrJ52g4G
          source_id: s_iUAeZXEmwcLPDzTwhVDNaR
          stance: supports
          locator: Q45670529
          quotation: null
          interpretation_note: null
          source:
            id: s_iUAeZXEmwcLPDzTwhVDNaR
            source_type: api_record
            title: 维基数据：王延客（Q45670529）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670529
            external_identifier: Q45670529
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:41.402Z
            metadata_json: null
        - id: cs_g5Lab89Tv3RT7MbhAPTjmV
          claim_id: c_8pxdDabYntzhoJnrJ52g4G
          source_id: s_rzMHLpw8x7DtywuyoVNk94
          stance: supports
          locator: Q45670529
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GAgSkM26tMNMb7zgbaB4mc
        subject_person_id: p_XV6a2hg1TuFRVjTmdEuUxN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LCMCDJjDb9a6qJCoVFhKDj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1NaLL8pcny1Zo4JfPzj3ZH
          claim_id: c_GAgSkM26tMNMb7zgbaB4mc
          source_id: s_Ybw1LY6QHMDhc1st8K7zBH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Ybw1LY6QHMDhc1st8K7zBH
            source_type: api_record
            title: 维基数据：王绲（Q45670390）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670390
            external_identifier: Q45670390
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:23.431Z
            metadata_json: null
        - id: cs_c1vrNQNWFvfPwg328vVeJy
          claim_id: c_GAgSkM26tMNMb7zgbaB4mc
          source_id: s_H2XFc3X8pxfVKZRAnj8c8H
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_H2XFc3X8pxfVKZRAnj8c8H
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王緄（175638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175638&o=json
            external_identifier: CBDB:175638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:23.596Z
            metadata_json: null
        - id: cs_7Db9DDg5Aq4LxzBPEDsyCH
          claim_id: c_GAgSkM26tMNMb7zgbaB4mc
          source_id: s_iUAeZXEmwcLPDzTwhVDNaR
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_iUAeZXEmwcLPDzTwhVDNaR
            source_type: api_record
            title: 维基数据：王延客（Q45670529）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670529
            external_identifier: Q45670529
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:41.402Z
            metadata_json: null
        - id: cs_CzAxaGNrqDmBJZtcAsbcc5
          claim_id: c_GAgSkM26tMNMb7zgbaB4mc
          source_id: s_rzMHLpw8x7DtywuyoVNk94
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_rzMHLpw8x7DtywuyoVNk94
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王延客（175641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175641&o=json
            external_identifier: CBDB:175641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:41.561Z
            metadata_json: null
      object_person:
        id: p_XV6a2hg1TuFRVjTmdEuUxN
        status: active
        display_name: 王绲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王延客

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王延客（卒于709年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175641 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 709年 | accepted |
| name.primary | 王延客 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XV6a2hg1TuFRVjTmdEuUxN | 王绲 | accepted |

## 外部来源

- [维基数据：王绲（Q45670390）](https://www.wikidata.org/wiki/Q45670390)
- [维基数据：王延客（Q45670529）](https://www.wikidata.org/wiki/Q45670529)
- [CBDB 中国历代人物传记资料库：王緄（175638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175638&o=json)
- [CBDB 中国历代人物传记资料库：王延客（175641）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175641&o=json)
