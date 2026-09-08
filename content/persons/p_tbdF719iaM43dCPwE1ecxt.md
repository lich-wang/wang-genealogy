---
schema: wang-person/v1
id: p_tbdF719iaM43dCPwE1ecxt
status: active
merged_into: null
display_name: 王敬同
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5xKmJSR1g97mdKmqk4ydZo
        subject_person_id: p_tbdF719iaM43dCPwE1ecxt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬同（卒于736年），唐人物。CBDB 记录其籍贯记录为河南府，曾任令。中国历代人物传记资料库（CBDB）以人物编号 186696 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_jNPuyQK28ACc6MM7aosPah
          claim_id: c_5xKmJSR1g97mdKmqk4ydZo
          source_id: s_FgpvqCoh8L8fGQoXHABRtp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_FgpvqCoh8L8fGQoXHABRtp
            source_type: api_record
            title: 维基数据：王敬同（Q45685614）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685614
            external_identifier: Q45685614
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:04.029Z
            metadata_json: null
        - id: cs_V86J7ic8Hwf6SNZfUR2RvG
          claim_id: c_5xKmJSR1g97mdKmqk4ydZo
          source_id: s_zpxw217cCUckzoPxDKmgCL
          stance: supports
          locator: CBDB:186696
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zpxw217cCUckzoPxDKmgCL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王敬同（186696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186696&o=json
            external_identifier: CBDB:186696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:04.183Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_zwh62AeyFqD79L6ndzUShK
        subject_person_id: p_tbdF719iaM43dCPwE1ecxt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 736年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0736-01-01
            latest: 0736-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DsHB2rvTq1fNT2zSg7EFtD
          claim_id: c_zwh62AeyFqD79L6ndzUShK
          source_id: s_FgpvqCoh8L8fGQoXHABRtp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FgpvqCoh8L8fGQoXHABRtp
            source_type: api_record
            title: 维基数据：王敬同（Q45685614）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685614
            external_identifier: Q45685614
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:04.029Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FPePRUKWJahDWD9a8Zsj33
        subject_person_id: p_tbdF719iaM43dCPwE1ecxt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬同
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nhGtf6xBLVZ2NEyGMBGw1H
          claim_id: c_FPePRUKWJahDWD9a8Zsj33
          source_id: s_zpxw217cCUckzoPxDKmgCL
          stance: supports
          locator: Q45685614
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_yGnAcee6ge1i8j8iw5V9Ay
          claim_id: c_FPePRUKWJahDWD9a8Zsj33
          source_id: s_FgpvqCoh8L8fGQoXHABRtp
          stance: supports
          locator: Q45685614
          quotation: null
          interpretation_note: null
          source:
            id: s_FgpvqCoh8L8fGQoXHABRtp
            source_type: api_record
            title: 维基数据：王敬同（Q45685614）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685614
            external_identifier: Q45685614
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:04.029Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HPkHefnoYQwULKSZdJpg5v
        subject_person_id: p_raJNU9XFaTjQCkPaDGyZMr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tbdF719iaM43dCPwE1ecxt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GYLmgKDxbHmSUUtqYRVViW
          claim_id: c_HPkHefnoYQwULKSZdJpg5v
          source_id: s_FgpvqCoh8L8fGQoXHABRtp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_NRj8AkQXMUcqQPDV9JdDdF
          claim_id: c_HPkHefnoYQwULKSZdJpg5v
          source_id: s_tgyG95rqwPvRUevbNmfHnA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_tgyG95rqwPvRUevbNmfHnA
            source_type: api_record
            title: 维基数据：王仁表（Q45685646）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685646
            external_identifier: Q45685646
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_raJNU9XFaTjQCkPaDGyZMr
        status: active
        display_name: 王仁表
        merged_into_person_id: null
  children:
    - claim:
        id: c_ePSiQZRqtHF5MwoEmiyge4
        subject_person_id: p_tbdF719iaM43dCPwE1ecxt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c8C8PQBtyD8TinfV8tVU4U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iAR8PhKX3xfxwuqNdb62AC
          claim_id: c_ePSiQZRqtHF5MwoEmiyge4
          source_id: s_wjVLxMLRqXwKjCian14tbq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_wjVLxMLRqXwKjCian14tbq
            source_type: api_record
            title: 维基数据：王澄（Q45685584）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685584
            external_identifier: Q45685584
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
        - id: cs_3Fx22fFVGTRr88tKJL2zFn
          claim_id: c_ePSiQZRqtHF5MwoEmiyge4
          source_id: s_FgpvqCoh8L8fGQoXHABRtp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_4UANigwrGFEeGdU1oDupBQ
          claim_id: c_ePSiQZRqtHF5MwoEmiyge4
          source_id: s_zpxw217cCUckzoPxDKmgCL
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source: *a1
      object_person:
        id: p_c8C8PQBtyD8TinfV8tVU4U
        status: active
        display_name: 王澄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敬同

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王敬同（卒于736年），唐人物。CBDB 记录其籍贯记录为河南府，曾任令。中国历代人物传记资料库（CBDB）以人物编号 186696 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 736年 | accepted |
| name.primary | 王敬同 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_raJNU9XFaTjQCkPaDGyZMr | 王仁表 | accepted |
| children | p_c8C8PQBtyD8TinfV8tVU4U | 王澄 | accepted |

## 外部来源

- [维基数据：王澄（Q45685584）](https://www.wikidata.org/wiki/Q45685584)
- [维基数据：王敬同（Q45685614）](https://www.wikidata.org/wiki/Q45685614)
- [维基数据：王仁表（Q45685646）](https://www.wikidata.org/wiki/Q45685646)
- [CBDB 中国历代人物传记资料库：王敬同（186696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186696&o=json)
