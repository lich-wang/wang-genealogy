---
schema: wang-person/v1
id: p_m3ZaszmXMYNEpqJBcUTT1L
status: active
merged_into: null
display_name: 蔡卞
cbdb_id: 8131
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b8LojipvYKry8ApAYTtU5N
        subject_person_id: p_m3ZaszmXMYNEpqJBcUTT1L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "蔡卞，宋人物。CBDB 记录其籍贯记录为仙遊，入仕记录为科舉: 進士(籠統)，曾任知樞密院事、朝奉郎。中国历代人物传记资料库（CBDB）以人物编号 8131 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DBTI-_4w-iM7aqmcrlqMxI
          claim_id: c_b8LojipvYKry8ApAYTtU5N
          source_id: s_JLMmSf3V24KKkZ9mZknGrq
          stance: supports
          locator: CBDB:8131
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JLMmSf3V24KKkZ9mZknGrq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：蔡卞（8131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8131&o=json
            external_identifier: CBDB:8131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T00:46:30.840Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nYb264G5ddqb7xvDLbsHLN
        subject_person_id: p_m3ZaszmXMYNEpqJBcUTT1L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蔡卞
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TUB6pv4cUDEcbG4CcWzRjM
          claim_id: c_nYb264G5ddqb7xvDLbsHLN
          source_id: s_JLMmSf3V24KKkZ9mZknGrq
          stance: supports
          locator: Q4391249
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_gibTDQSp2oZu7KG2FuH4v9
          claim_id: c_nYb264G5ddqb7xvDLbsHLN
          source_id: s_H4i1budjUUBriE5uAeSH3U
          stance: supports
          locator: Q4391249
          quotation: null
          interpretation_note: null
          source:
            id: s_H4i1budjUUBriE5uAeSH3U
            source_type: api_record
            title: 维基数据：蔡卞（Q4391249）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4391249
            external_identifier: Q4391249
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:46:30.695Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%94%A1%E5%8D%9E
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_F44CgtB7DdXw8WHgfgusye
        subject_person_id: p_E9kT5jEzU388HxnFt4wY8k
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_m3ZaszmXMYNEpqJBcUTT1L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PqheEhFWDn1wHDULFqLkr2
          claim_id: c_F44CgtB7DdXw8WHgfgusye
          source_id: s_H4i1budjUUBriE5uAeSH3U
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_H4i1budjUUBriE5uAeSH3U
            source_type: api_record
            title: 维基数据：蔡卞（Q4391249）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4391249
            external_identifier: Q4391249
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:46:30.695Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%94%A1%E5%8D%9E
        - id: cs_ntRFWV44QPqjgjCKPiKL46
          claim_id: c_F44CgtB7DdXw8WHgfgusye
          source_id: s_8DGrmqJ7HkaASjju5cd8mF
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_8DGrmqJ7HkaASjju5cd8mF
            source_type: api_record
            title: 维基数据：王氏 (福國夫人)（Q141259120）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q141259120
            external_identifier: Q141259120
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:01.055Z
            metadata_json: null
      object_person:
        id: p_E9kT5jEzU388HxnFt4wY8k
        status: active
        display_name: 王氏 (福國夫人)
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蔡卞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 蔡卞，宋人物。CBDB 记录其籍贯记录为仙遊，入仕记录为科舉: 進士(籠統)，曾任知樞密院事、朝奉郎。中国历代人物传记资料库（CBDB）以人物编号 8131 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 蔡卞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_E9kT5jEzU388HxnFt4wY8k | 王氏 (福國夫人) | accepted |

## 外部来源

- [维基数据：蔡卞（Q4391249）](https://www.wikidata.org/wiki/Q4391249)
- [维基数据：王氏 (福國夫人)（Q141259120）](https://www.wikidata.org/wiki/Q141259120)
- [CBDB 中国历代人物传记资料库：蔡卞（8131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8131&o=json)
