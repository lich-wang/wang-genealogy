---
schema: wang-person/v1
id: p_TXJvtdFRgZUQXsFzGvjCnR
status: active
merged_into: null
display_name: 王世规
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KDAytzq8pygJyavCW8M4RN
        subject_person_id: p_TXJvtdFRgZUQXsFzGvjCnR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世规，宋人物。CBDB 记录其籍贯记录为德安，身份包括地方士人/鄉紳，入仕记录为封贈。中国历代人物传记资料库（CBDB）以人物编号 17818 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_m85dA86ESaRSJrrbr17FcN
          claim_id: c_KDAytzq8pygJyavCW8M4RN
          source_id: s_UPzHqSAS1LsGaC1U81Firc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_UPzHqSAS1LsGaC1U81Firc
            source_type: api_record
            title: 维基数据：王世规（Q45387330）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387330
            external_identifier: Q45387330
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:59.236Z
            metadata_json: null
        - id: cs_d_ajjCtKazHtaA3myDVvG-
          claim_id: c_KDAytzq8pygJyavCW8M4RN
          source_id: s_HjaMgtangcVgf3VCL8yuSe
          stance: supports
          locator: CBDB:17818
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HjaMgtangcVgf3VCL8yuSe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世規（17818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17818&o=json
            external_identifier: CBDB:17818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:59.406Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oZ8FUmi4ParDvo6iRQHSxk
        subject_person_id: p_TXJvtdFRgZUQXsFzGvjCnR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世规
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1qCX1KauJ7JwR5rJa4TSF1
          claim_id: c_oZ8FUmi4ParDvo6iRQHSxk
          source_id: s_UPzHqSAS1LsGaC1U81Firc
          stance: supports
          locator: Q45387330
          quotation: null
          interpretation_note: null
          source:
            id: s_UPzHqSAS1LsGaC1U81Firc
            source_type: api_record
            title: 维基数据：王世规（Q45387330）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387330
            external_identifier: Q45387330
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:59.236Z
            metadata_json: null
        - id: cs_aYo3n4sgFvXr6qvBGFNGKr
          claim_id: c_oZ8FUmi4ParDvo6iRQHSxk
          source_id: s_HjaMgtangcVgf3VCL8yuSe
          stance: supports
          locator: Q45387330
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_N6oLgPuKBNPjzKpgoP3XC6
        subject_person_id: p_TXJvtdFRgZUQXsFzGvjCnR
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_5QEFg5NX8fdCTZoicRnKAT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7oU8TBN5wMRJ7DC6NM1YHJ
          claim_id: c_N6oLgPuKBNPjzKpgoP3XC6
          source_id: s_AMCEA11HjgWEugGDaB86eR
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_AMCEA11HjgWEugGDaB86eR
            source_type: api_record
            title: 维基数据：王韶（Q10417893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10417893
            external_identifier: Q10417893
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:53.940Z
            metadata_json: null
        - id: cs_7tk6ScBkNU6fpc3nVyHH8N
          claim_id: c_N6oLgPuKBNPjzKpgoP3XC6
          source_id: s_UPzHqSAS1LsGaC1U81Firc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_UPzHqSAS1LsGaC1U81Firc
            source_type: api_record
            title: 维基数据：王世规（Q45387330）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387330
            external_identifier: Q45387330
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:59.236Z
            metadata_json: null
      object_person:
        id: p_5QEFg5NX8fdCTZoicRnKAT
        status: active
        display_name: 王韶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世规

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世规，宋人物。CBDB 记录其籍贯记录为德安，身份包括地方士人/鄉紳，入仕记录为封贈。中国历代人物传记资料库（CBDB）以人物编号 17818 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王世规 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5QEFg5NX8fdCTZoicRnKAT | 王韶 | accepted |

## 外部来源

- [维基数据：王韶（Q10417893）](https://www.wikidata.org/wiki/Q10417893)
- [维基数据：王世规（Q45387330）](https://www.wikidata.org/wiki/Q45387330)
- [CBDB 中国历代人物传记资料库：王世規（17818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17818&o=json)
