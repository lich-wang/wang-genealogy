---
schema: wang-person/v1
id: p_Xp222EZ4zEgdHMmcJdaP7M
status: active
merged_into: null
display_name: 王绚
cbdb_id: 157875
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UFqG2ASwHupjLWZx3wHNAt
        subject_person_id: p_Xp222EZ4zEgdHMmcJdaP7M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绚，唐人物。籍贯臨湍，曾任未詳。（中国历代人物传记资料库 CBDB 157875）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_a3uu9ELFDYkF2TvfgrEdRE
          claim_id: c_UFqG2ASwHupjLWZx3wHNAt
          source_id: s_JSks6AAAd1bWq4AXQ1AJ5y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_JSks6AAAd1bWq4AXQ1AJ5y
            source_type: api_record
            title: 维基数据：王绚（Q45538869）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45538869
            external_identifier: Q45538869
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:48.907Z
            metadata_json: null
        - id: cs_m0gYt2Yw20gWbXcC8L2l2T
          claim_id: c_UFqG2ASwHupjLWZx3wHNAt
          source_id: s_Y6FyAUEWBv2RbDfDPr36Jg
          stance: supports
          locator: CBDB:157875
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Y6FyAUEWBv2RbDfDPr36Jg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王絢（157875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157875&o=json
            external_identifier: CBDB:157875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:49.067Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9oBrjkwmo2gfJUTpxSW4bx
        subject_person_id: p_Xp222EZ4zEgdHMmcJdaP7M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绚
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AfBJbdB47rLeY743hY4vJb
          claim_id: c_9oBrjkwmo2gfJUTpxSW4bx
          source_id: s_JSks6AAAd1bWq4AXQ1AJ5y
          stance: supports
          locator: Q45538869
          quotation: null
          interpretation_note: null
          source:
            id: s_JSks6AAAd1bWq4AXQ1AJ5y
            source_type: api_record
            title: 维基数据：王绚（Q45538869）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45538869
            external_identifier: Q45538869
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:48.907Z
            metadata_json: null
        - id: cs_x8s9YpoRUZGCqaFn69DpBU
          claim_id: c_9oBrjkwmo2gfJUTpxSW4bx
          source_id: s_Y6FyAUEWBv2RbDfDPr36Jg
          stance: supports
          locator: Q45538869
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HcJjNF8CPKiD4BbWEVJYEZ
        subject_person_id: p_Z5BPr9m4u9GFwUQLtaQNNb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Xp222EZ4zEgdHMmcJdaP7M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_28K5jUFbhStZPBKU14priK
          claim_id: c_HcJjNF8CPKiD4BbWEVJYEZ
          source_id: s_jMfGGAf4XMHLRJzhikBhoq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_jMfGGAf4XMHLRJzhikBhoq
            source_type: api_record
            title: 维基数据：王袞（Q45537271）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45537271
            external_identifier: Q45537271
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:06.374Z
            metadata_json: null
        - id: cs_ntRU6Y2B96xGGQoy4JRrJP
          claim_id: c_HcJjNF8CPKiD4BbWEVJYEZ
          source_id: s_dE8bRYtyV2HpwTy6Hstwm4
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_dE8bRYtyV2HpwTy6Hstwm4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王袞（141634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141634&o=json
            external_identifier: CBDB:141634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:06.517Z
            metadata_json: null
        - id: cs_Fpk54Zc2QZLguccG5QiK84
          claim_id: c_HcJjNF8CPKiD4BbWEVJYEZ
          source_id: s_JSks6AAAd1bWq4AXQ1AJ5y
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_JSks6AAAd1bWq4AXQ1AJ5y
            source_type: api_record
            title: 维基数据：王绚（Q45538869）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45538869
            external_identifier: Q45538869
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:48.907Z
            metadata_json: null
        - id: cs_KEY499EQBeUfQrrz339dNT
          claim_id: c_HcJjNF8CPKiD4BbWEVJYEZ
          source_id: s_Y6FyAUEWBv2RbDfDPr36Jg
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_Y6FyAUEWBv2RbDfDPr36Jg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王絢（157875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157875&o=json
            external_identifier: CBDB:157875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:49.067Z
            metadata_json: null
      object_person:
        id: p_Z5BPr9m4u9GFwUQLtaQNNb
        status: active
        display_name: 王袞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王绚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王绚，唐人物。籍贯臨湍，曾任未詳。（中国历代人物传记资料库 CBDB 157875） | accepted |
| name.primary | 王绚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Z5BPr9m4u9GFwUQLtaQNNb | 王袞 | accepted |

## 外部来源

- [维基数据：王袞（Q45537271）](https://www.wikidata.org/wiki/Q45537271)
- [维基数据：王绚（Q45538869）](https://www.wikidata.org/wiki/Q45538869)
- [CBDB 中国历代人物传记资料库：王袞（141634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141634&o=json)
- [CBDB 中国历代人物传记资料库：王絢（157875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157875&o=json)
