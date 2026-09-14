---
schema: wang-person/v1
id: p_jmPkyeZkLCgqyQZAUfD7mt
status: active
merged_into: null
display_name: 王伟之
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GvePNiiwtC8MZZuusEFkAN
        subject_person_id: p_jmPkyeZkLCgqyQZAUfD7mt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉之，東晉琅邪臨沂人，驃騎將軍王廙曾孫，王韶之之父，官至本國郎中令、烏程令（《宋書·卷六十·王韶之傳》：父偉之，本國郎中令）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_yDGtGCs84mtBFK3oLlhYGx
          claim_id: c_GvePNiiwtC8MZZuusEFkAN
          source_id: s_PfH0DzsstU7EWlhBKstpt4
          stance: supports
          locator: 宋書/卷60·王伟之
          quotation: null
          interpretation_note: 依正史传主列传中点名的亲属记载补写简介。
          source:
            id: s_PfH0DzsstU7EWlhBKstpt4
            source_type: website
            title: 维基文库：宋書/卷60·王伟之
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/宋書/卷60
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:14:35.000Z
            metadata_json: null
        - id: cs_YZK0sOT4qHtNIyPQ78p-ID
          claim_id: c_GvePNiiwtC8MZZuusEFkAN
          source_id: s_VKa4tB4SnbfLR1kZ6e9NC6
          stance: supports
          locator: Q22814802
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source:
            id: s_VKa4tB4SnbfLR1kZ6e9NC6
            source_type: api_record
            title: 维基数据：王伟之（Q22814802）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814802
            external_identifier: Q22814802
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:41.839Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iBLqQQYEKkZ63rmmgxXyEh
        subject_person_id: p_jmPkyeZkLCgqyQZAUfD7mt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伟之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_P6SAdCQeKKZTX1C9SyuKqC
          claim_id: c_iBLqQQYEKkZ63rmmgxXyEh
          source_id: s_VKa4tB4SnbfLR1kZ6e9NC6
          stance: supports
          locator: Q22814802
          quotation: null
          interpretation_note: null
          source:
            id: s_VKa4tB4SnbfLR1kZ6e9NC6
            source_type: api_record
            title: 维基数据：王伟之（Q22814802）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814802
            external_identifier: Q22814802
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:41.839Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_H6DUGGG8S5c5iqprNp4Jw9
        subject_person_id: p_tvxspDevCFDe9RfbqL4x9n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jmPkyeZkLCgqyQZAUfD7mt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2cRTEyQ1Qc3kfZjn2Q2G9Z
          claim_id: c_H6DUGGG8S5c5iqprNp4Jw9
          source_id: s_GQTkPopLBKvnLdsMHMoTGi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_GQTkPopLBKvnLdsMHMoTGi
            source_type: api_record
            title: 维基数据：王羡之（Q22814801）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814801
            external_identifier: Q22814801
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:01.328Z
            metadata_json: null
        - id: cs_QFuzQJQbsgTrEqio177cZS
          claim_id: c_H6DUGGG8S5c5iqprNp4Jw9
          source_id: s_VKa4tB4SnbfLR1kZ6e9NC6
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_VKa4tB4SnbfLR1kZ6e9NC6
            source_type: api_record
            title: 维基数据：王伟之（Q22814802）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814802
            external_identifier: Q22814802
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:41.839Z
            metadata_json: null
      object_person:
        id: p_tvxspDevCFDe9RfbqL4x9n
        status: active
        display_name: 王羡之
        merged_into_person_id: null
  children:
    - claim:
        id: c_UGLcDtGtwADNZ577JnhKRM
        subject_person_id: p_jmPkyeZkLCgqyQZAUfD7mt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ReWCPkgDWJMMDu2Mcji449
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2KL3mvDU2iH59wcTzFeVVt
          claim_id: c_UGLcDtGtwADNZ577JnhKRM
          source_id: s_VKa4tB4SnbfLR1kZ6e9NC6
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_VKa4tB4SnbfLR1kZ6e9NC6
            source_type: api_record
            title: 维基数据：王伟之（Q22814802）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814802
            external_identifier: Q22814802
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:41.839Z
            metadata_json: null
        - id: cs_LSDt4aqug5t8CV5CqP7rqh
          claim_id: c_UGLcDtGtwADNZ577JnhKRM
          source_id: s_bjna9qv4WdKySeV4RHFk3H
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_bjna9qv4WdKySeV4RHFk3H
            source_type: api_record
            title: 维基数据：王韶之（Q5212674）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q5212674
            external_identifier: Q5212674
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:03.216Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E4%B9%8B
      object_person:
        id: p_ReWCPkgDWJMMDu2Mcji449
        status: active
        display_name: 王韶之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伟之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王偉之，東晉琅邪臨沂人，驃騎將軍王廙曾孫，王韶之之父，官至本國郎中令、烏程令（《宋書·卷六十·王韶之傳》：父偉之，本國郎中令）。 | accepted |
| name.primary | 王伟之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tvxspDevCFDe9RfbqL4x9n | 王羡之 | accepted |
| children | p_ReWCPkgDWJMMDu2Mcji449 | 王韶之 | accepted |

## 外部来源

- [维基数据：王韶之（Q5212674）](https://www.wikidata.org/wiki/Q5212674)
- [维基数据：王伟之（Q22814802）](https://www.wikidata.org/wiki/Q22814802)
- [维基数据：王羡之（Q22814801）](https://www.wikidata.org/wiki/Q22814801)
- [维基文库：宋書/卷60·王伟之](https://zh.wikisource.org/wiki/宋書/卷60)
