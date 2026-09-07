---
schema: wang-person/v1
id: p_MTk1zakKvoc4HW2SfG5Ese
status: active
merged_into: null
display_name: 王渎
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a5yKEkPsx7c2aeXyj9NLnP
        subject_person_id: p_MTk1zakKvoc4HW2SfG5Ese
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王渎，宋人物。CBDB 记录其籍贯记录为虞城，入仕记录为科舉: 進士(籠統)，曾任門下省給事中、上輕車都尉。中国历代人物传记资料库（CBDB）以人物编号 3986 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_47EadKC5g93v3onjNQm3se
          claim_id: c_a5yKEkPsx7c2aeXyj9NLnP
          source_id: s_9haVnYnB1Mu8a5ABupm314
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_9haVnYnB1Mu8a5ABupm314
            source_type: api_record
            title: 维基数据：王渎（Q45363040）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363040
            external_identifier: Q45363040
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:12.061Z
            metadata_json: null
        - id: cs_awZMdv8ZJ1v4Lf1JRRJGY0
          claim_id: c_a5yKEkPsx7c2aeXyj9NLnP
          source_id: s_nTUESHyNaXX4A6ufpnau6R
          stance: supports
          locator: CBDB:3986
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nTUESHyNaXX4A6ufpnau6R
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王瀆（3986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3986&o=json
            external_identifier: CBDB:3986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:12.219Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_B9UXn3Cd3oRUVrsZ5EybRb
        subject_person_id: p_MTk1zakKvoc4HW2SfG5Ese
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渎
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_e3VBBvATs2inVLRpcEuKZE
          claim_id: c_B9UXn3Cd3oRUVrsZ5EybRb
          source_id: s_nTUESHyNaXX4A6ufpnau6R
          stance: supports
          locator: Q45363040
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_weh65RDpVGH4JyUQckMSso
          claim_id: c_B9UXn3Cd3oRUVrsZ5EybRb
          source_id: s_9haVnYnB1Mu8a5ABupm314
          stance: supports
          locator: Q45363040
          quotation: null
          interpretation_note: null
          source:
            id: s_9haVnYnB1Mu8a5ABupm314
            source_type: api_record
            title: 维基数据：王渎（Q45363040）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363040
            external_identifier: Q45363040
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:12.061Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王渎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王渎，宋人物。CBDB 记录其籍贯记录为虞城，入仕记录为科舉: 進士(籠統)，曾任門下省給事中、上輕車都尉。中国历代人物传记资料库（CBDB）以人物编号 3986 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王渎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王渎（Q45363040）](https://www.wikidata.org/wiki/Q45363040)
- [CBDB 中国历代人物传记资料库：王瀆（3986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3986&o=json)
