---
schema: wang-person/v1
id: p_fTKKWyZ4tsB4z3Yh6eZTJi
status: active
merged_into: null
display_name: 王錫琛
cbdb_id: 376046
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RsJc2eJJUTRRRsQGs25sZb
        subject_person_id: p_fTKKWyZ4tsB4z3Yh6eZTJi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫琛，清人物。中国历代人物传记资料库（CBDB）以人物编号 376046 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_dcs3MrzNzBxT5JvSOVY100
          claim_id: c_RsJc2eJJUTRRRsQGs25sZb
          source_id: s_EnDEPNLm17G3aCYfMXjQW2
          stance: supports
          locator: CBDB:376046
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_EnDEPNLm17G3aCYfMXjQW2
            source_type: api_record
            title: 中国历代人物传记资料库：王錫琛（CBDB 376046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376046&o=json
            external_identifier: CBDB:376046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:19.877Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4k73wQVjiH5KVEeNiuJzAK
        subject_person_id: p_fTKKWyZ4tsB4z3Yh6eZTJi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫琛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_j1NU6TQDv7x2csSyKQtKyg
          claim_id: c_4k73wQVjiH5KVEeNiuJzAK
          source_id: s_EnDEPNLm17G3aCYfMXjQW2
          stance: supports
          locator: CBDB:376046
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4701-4800）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_EnDEPNLm17G3aCYfMXjQW2
            source_type: api_record
            title: 中国历代人物传记资料库：王錫琛（CBDB 376046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376046&o=json
            external_identifier: CBDB:376046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:19.877Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ScNK7gFCd_1UZfX882P5BO
        subject_person_id: p_fTKKWyZ4tsB4z3Yh6eZTJi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aKzqvNK69JVAWyY43CLQPK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PVAlZUJo-bLB2c4p3fGW-K
          claim_id: c_ScNK7gFCd_1UZfX882P5BO
          source_id: s_9KGuFfQuJ6KcB58sh7o7n2
          stance: supports
          locator: 明清婦女著作數據庫，4632：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9KGuFfQuJ6KcB58sh7o7n2
            source_type: api_record
            title: 中国历代人物传记资料库：王靜儀（CBDB 122194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122194&o=json
            external_identifier: CBDB:122194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aKzqvNK69JVAWyY43CLQPK
        status: active
        display_name: 王靜儀
        merged_into_person_id: null
    - claim:
        id: c_bQZfi49UkM10rbwzMNjV2n
        subject_person_id: p_fTKKWyZ4tsB4z3Yh6eZTJi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bdBYdAwGEQps4VzzUZtuJT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wawyzmCGCKjtK4J-iOTqjm
          claim_id: c_bQZfi49UkM10rbwzMNjV2n
          source_id: s_UFVNrvQWFQHsaBmTaEkZ4o
          stance: supports
          locator: 敬孚類稿，卷一三：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UFVNrvQWFQHsaBmTaEkZ4o
            source_type: api_record
            title: 中国历代人物传记资料库：王貞儀（CBDB 55530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55530&o=json
            external_identifier: CBDB:55530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.742Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bdBYdAwGEQps4VzzUZtuJT
        status: active
        display_name: 王貞儀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王錫琛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王錫琛，清人物。中国历代人物传记资料库（CBDB）以人物编号 376046 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王錫琛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aKzqvNK69JVAWyY43CLQPK | 王靜儀 | accepted |
| children | p_bdBYdAwGEQps4VzzUZtuJT | 王貞儀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王靜儀（CBDB 122194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122194&o=json)
- [中国历代人物传记资料库：王錫琛（CBDB 376046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=376046&o=json)
- [中国历代人物传记资料库：王貞儀（CBDB 55530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55530&o=json)
