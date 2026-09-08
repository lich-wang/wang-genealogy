---
schema: wang-person/v1
id: p_p67X5jLwzT8c9HGCZxfSPM
status: active
merged_into: null
display_name: 吴氏
cbdb_id: 229790
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SgOXV9ntOFioFkD7iefas5
        subject_person_id: p_p67X5jLwzT8c9HGCZxfSPM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吴氏，王士昌妻。维基数据以独立条目 Q65833363 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Fpc7rnwzsvIAn8CTWeZSm3
          claim_id: c_SgOXV9ntOFioFkD7iefas5
          source_id: s_5hNJBSQqRZAFYqPJdrg7y8
          stance: supports
          locator: Q65833363
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_5hNJBSQqRZAFYqPJdrg7y8
            source_type: api_record
            title: 维基数据：吴氏（Q65833363）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65833363
            external_identifier: Q65833363
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:06.713Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_v7AFHmgs6vMwyJku4Xz1fq
        subject_person_id: p_p67X5jLwzT8c9HGCZxfSPM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吴氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FHtzb3Lvv6uMAVevZnmUgf
          claim_id: c_v7AFHmgs6vMwyJku4Xz1fq
          source_id: s_gTbfSgeY7M4hDzwgyfS8g8
          stance: supports
          locator: Q65833363
          quotation: null
          interpretation_note: null
          source:
            id: s_gTbfSgeY7M4hDzwgyfS8g8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：吳氏（229790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229790&o=json
            external_identifier: CBDB:229790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:06.872Z
            metadata_json: null
        - id: cs_kX5iEUUdDd9LeNqZmXd1wh
          claim_id: c_v7AFHmgs6vMwyJku4Xz1fq
          source_id: s_5hNJBSQqRZAFYqPJdrg7y8
          stance: supports
          locator: Q65833363
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_SrXwn6FLJQU5NtEibtTJY9
        subject_person_id: p_2upGeiN52eY6RGi8eXqg1R
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_p67X5jLwzT8c9HGCZxfSPM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ftf1yA412eJcu9CY2iUUnc
          claim_id: c_SrXwn6FLJQU5NtEibtTJY9
          source_id: s_hv33tRvBGoTiGFKYSfqn28
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_hv33tRvBGoTiGFKYSfqn28
            source_type: api_record
            title: 维基数据：王士昌（Q15950979）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15950979
            external_identifier: Q15950979
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:44.084Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E6%98%8C
        - id: cs_EW7eA8CkqCfaKMsaTQj8e1
          claim_id: c_SrXwn6FLJQU5NtEibtTJY9
          source_id: s_5hNJBSQqRZAFYqPJdrg7y8
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_vxHwadvZFMAELH4T4rSAK5
          claim_id: c_SrXwn6FLJQU5NtEibtTJY9
          source_id: s_QDf5bGrRNUHiV2PX3ECFrx
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆丙戌科進士同年總錄
          source:
            id: s_QDf5bGrRNUHiV2PX3ECFrx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士昌（35069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35069&o=json
            external_identifier: CBDB:35069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:44.229Z
            metadata_json: null
      object_person:
        id: p_2upGeiN52eY6RGi8eXqg1R
        status: active
        display_name: 王士昌
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 吴氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 吴氏，王士昌妻。维基数据以独立条目 Q65833363 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 吴氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2upGeiN52eY6RGi8eXqg1R | 王士昌 | accepted |

## 外部来源

- [维基数据：王士昌（Q15950979）](https://www.wikidata.org/wiki/Q15950979)
- [维基数据：吴氏（Q65833363）](https://www.wikidata.org/wiki/Q65833363)
- [CBDB 中国历代人物传记资料库：王士昌（35069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35069&o=json)
- [CBDB 中国历代人物传记资料库：吳氏（229790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229790&o=json)
