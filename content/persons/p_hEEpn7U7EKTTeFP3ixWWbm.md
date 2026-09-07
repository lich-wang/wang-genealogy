---
schema: wang-person/v1
id: p_hEEpn7U7EKTTeFP3ixWWbm
status: active
merged_into: null
display_name: 王禔
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5Lqus1Jg7KpKg4Lpi6RT1C
        subject_person_id: p_hEEpn7U7EKTTeFP3ixWWbm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王禔，宋人物。CBDB 记录其籍贯记录为長溪，入仕记录为科舉: 特奏名進士、特奏名諸科 、大挑，曾任府、太子太師。中国历代人物传记资料库（CBDB）以人物编号 20093 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_JoDu7zPNa5LPPTNyn1GUQM
          claim_id: c_5Lqus1Jg7KpKg4Lpi6RT1C
          source_id: s_eNFZcfGseG5DPkoAbM2fBY
          stance: supports
          locator: null
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
        - id: cs__OyvrmctQ0I7dMT1jBWvEj
          claim_id: c_5Lqus1Jg7KpKg4Lpi6RT1C
          source_id: s_gfqA28v8u8pwjz4LJh8Cct
          stance: supports
          locator: CBDB:20093
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5nwUP5EaEULjvBwT4KXxDR
        subject_person_id: p_hEEpn7U7EKTTeFP3ixWWbm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禔
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_B18GJhJCVPCVG8E59dMfFS
          claim_id: c_5nwUP5EaEULjvBwT4KXxDR
          source_id: s_gfqA28v8u8pwjz4LJh8Cct
          stance: supports
          locator: Q45386120
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_K6AG2xrhTJ88oo4okxyAu9
          claim_id: c_5nwUP5EaEULjvBwT4KXxDR
          source_id: s_eNFZcfGseG5DPkoAbM2fBY
          stance: supports
          locator: Q45386120
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
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_SJv1fzwhFi4btwQLT2si6Z
        subject_person_id: p_hEEpn7U7EKTTeFP3ixWWbm
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_4Ggi24K5h2C2ehfArZY8Pm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_76sBHovzxbanNQGY2Puyo6
          claim_id: c_SJv1fzwhFi4btwQLT2si6Z
          source_id: s_N8J87U9e5LKKFKtnTF4GL7
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_N8J87U9e5LKKFKtnTF4GL7
            source_type: api_record
            title: 维基数据：王次翁（Q10415243）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10415243
            external_identifier: Q10415243
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:46.417Z
            metadata_json: null
        - id: cs_MsbS9BqoJnRpdNfQ9hgLah
          claim_id: c_SJv1fzwhFi4btwQLT2si6Z
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
        - id: cs_xgVSGF7UMb9e6Yo1HQJPxc
          claim_id: c_SJv1fzwhFi4btwQLT2si6Z
          source_id: s_gfqA28v8u8pwjz4LJh8Cct
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
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
        id: p_4Ggi24K5h2C2ehfArZY8Pm
        status: active
        display_name: 王次翁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王禔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王禔，宋人物。CBDB 记录其籍贯记录为長溪，入仕记录为科舉: 特奏名進士、特奏名諸科 、大挑，曾任府、太子太師。中国历代人物传记资料库（CBDB）以人物编号 20093 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王禔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4Ggi24K5h2C2ehfArZY8Pm | 王次翁 | accepted |

## 外部来源

- [维基数据：王次翁（Q10415243）](https://www.wikidata.org/wiki/Q10415243)
- [维基数据：王禔（Q45386120）](https://www.wikidata.org/wiki/Q45386120)
- [CBDB 中国历代人物传记资料库：王禔（20093）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20093&o=json)
