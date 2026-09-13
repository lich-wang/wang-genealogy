---
schema: wang-person/v1
id: p_LLsxFDHQDQXtfR5CnXXEVt
status: active
merged_into: null
display_name: 王璞
cbdb_id: 20096
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9Ay7X3aTDGZLkq88j528ph
        subject_person_id: p_LLsxFDHQDQXtfR5CnXXEVt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璞，宋人物。籍贯長溪，入仕進士，曾任禮儀院、太常寺博士、太常寺丞。（中国历代人物传记资料库 CBDB 20096）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_yuoptUyrJHQSb36QjLsXtm
          claim_id: c_9Ay7X3aTDGZLkq88j528ph
          source_id: s_zEC6v5jrHHJCkKDoPZJDN3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_zEC6v5jrHHJCkKDoPZJDN3
            source_type: api_record
            title: 维基数据：王璞（Q45394270）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45394270
            external_identifier: Q45394270
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:10.721Z
            metadata_json: null
        - id: cs_DVzVA0p8Wb7XJuKO0PD0tA
          claim_id: c_9Ay7X3aTDGZLkq88j528ph
          source_id: s_VywFYzYspFkCrv2HaKLX32
          stance: supports
          locator: CBDB:20096
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VywFYzYspFkCrv2HaKLX32
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王璞（20096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20096&o=json
            external_identifier: CBDB:20096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:10.881Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9EMF3TcsLYcSbN5hcYRuxR
        subject_person_id: p_LLsxFDHQDQXtfR5CnXXEVt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璞
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7AAhGLMmXukKAE7C1gPQRB
          claim_id: c_9EMF3TcsLYcSbN5hcYRuxR
          source_id: s_zEC6v5jrHHJCkKDoPZJDN3
          stance: supports
          locator: Q45394270
          quotation: null
          interpretation_note: null
          source:
            id: s_zEC6v5jrHHJCkKDoPZJDN3
            source_type: api_record
            title: 维基数据：王璞（Q45394270）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45394270
            external_identifier: Q45394270
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:10.721Z
            metadata_json: null
        - id: cs_t3bCESVp6pRKt4WUF8utUy
          claim_id: c_9EMF3TcsLYcSbN5hcYRuxR
          source_id: s_VywFYzYspFkCrv2HaKLX32
          stance: supports
          locator: Q45394270
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Th5NzWuGxc9M4qVA5VRNqE
        subject_person_id: p_hEEpn7U7EKTTeFP3ixWWbm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LLsxFDHQDQXtfR5CnXXEVt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gvhspAJPPpe5GL3Z7w85H1
          claim_id: c_Th5NzWuGxc9M4qVA5VRNqE
          source_id: s_zEC6v5jrHHJCkKDoPZJDN3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_mNbQeLSGFdoaunPdhVnT9y
          claim_id: c_Th5NzWuGxc9M4qVA5VRNqE
          source_id: s_eNFZcfGseG5DPkoAbM2fBY
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eNFZcfGseG5DPkoAbM2fBY
            source_type: api_record
            title: 维基数据：王禔（Q45386120）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386120
            external_identifier: Q45386120
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:59.236Z
            metadata_json: null
        - id: cs_SjmohoigYEzT9GUoTwbNgS
          claim_id: c_Th5NzWuGxc9M4qVA5VRNqE
          source_id: s_gfqA28v8u8pwjz4LJh8Cct
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_gfqA28v8u8pwjz4LJh8Cct
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王禔（20093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20093&o=json
            external_identifier: CBDB:20093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:59.405Z
            metadata_json: null
      object_person:
        id: p_hEEpn7U7EKTTeFP3ixWWbm
        status: active
        display_name: 王禔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王璞，宋人物。籍贯長溪，入仕進士，曾任禮儀院、太常寺博士、太常寺丞。（中国历代人物传记资料库 CBDB 20096） | accepted |
| name.primary | 王璞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hEEpn7U7EKTTeFP3ixWWbm | 王禔 | accepted |

## 外部来源

- [维基数据：王璞（Q45394270）](https://www.wikidata.org/wiki/Q45394270)
- [维基数据：王禔（Q45386120）](https://www.wikidata.org/wiki/Q45386120)
- [CBDB 中国历代人物传记资料库：王璞（20096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20096&o=json)
- [CBDB 中国历代人物传记资料库：王禔（20093）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20093&o=json)
