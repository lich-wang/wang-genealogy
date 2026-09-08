---
schema: wang-person/v1
id: p_diPVGy9BzMjoKiUc6icH9N
status: active
merged_into: null
display_name: 王化
cbdb_id: 15747
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dvnngSGyjS31MVdL1EFvQp
        subject_person_id: p_diPVGy9BzMjoKiUc6icH9N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化，宋人物。CBDB 记录其籍贯记录为虞城，身份包括地方士人/鄉紳，入仕记录为封贈。中国历代人物传记资料库（CBDB）以人物编号 15747 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9QRmhMVdDnwzAXLGXfyUpo
          claim_id: c_dvnngSGyjS31MVdL1EFvQp
          source_id: s_gUKLxhVWyMb8FFrDMHt15y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_gUKLxhVWyMb8FFrDMHt15y
            source_type: api_record
            title: 维基数据：王化（Q45381148）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381148
            external_identifier: Q45381148
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:14.100Z
            metadata_json: null
        - id: cs_rkcYTeNJrNk3Oy7zB9fw5m
          claim_id: c_dvnngSGyjS31MVdL1EFvQp
          source_id: s_pQVBrrHKLnxGfctpqEstQY
          stance: supports
          locator: CBDB:15747
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_pQVBrrHKLnxGfctpqEstQY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王化（15747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15747&o=json
            external_identifier: CBDB:15747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:14.252Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NdkCXGiNNd1BN1VZ655sC5
        subject_person_id: p_diPVGy9BzMjoKiUc6icH9N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Lnki4fAuMymsi7wVCbGdbe
          claim_id: c_NdkCXGiNNd1BN1VZ655sC5
          source_id: s_gUKLxhVWyMb8FFrDMHt15y
          stance: supports
          locator: Q45381148
          quotation: null
          interpretation_note: null
          source:
            id: s_gUKLxhVWyMb8FFrDMHt15y
            source_type: api_record
            title: 维基数据：王化（Q45381148）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381148
            external_identifier: Q45381148
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:14.100Z
            metadata_json: null
        - id: cs_fu8AcuCHuHaq2LN8yUSJdN
          claim_id: c_NdkCXGiNNd1BN1VZ655sC5
          source_id: s_pQVBrrHKLnxGfctpqEstQY
          stance: supports
          locator: Q45381148
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DpWq7PNoLF93cWrmuuKmXP
        subject_person_id: p_Xfkv2uu5fBfnJ5YyvgE4da
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_diPVGy9BzMjoKiUc6icH9N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sL8ZPWB4xM5oL86pZAgxPn
          claim_id: c_DpWq7PNoLF93cWrmuuKmXP
          source_id: s_N1f3ehi66pennWQUvGkhCa
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_N1f3ehi66pennWQUvGkhCa
            source_type: api_record
            title: 维基数据：王厚（Q45381147）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381147
            external_identifier: Q45381147
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_ujm1Qui2vAVr4bF2a2mH8a
          claim_id: c_DpWq7PNoLF93cWrmuuKmXP
          source_id: s_gUKLxhVWyMb8FFrDMHt15y
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_Xfkv2uu5fBfnJ5YyvgE4da
        status: active
        display_name: 王厚
        merged_into_person_id: null
  children:
    - claim:
        id: c_P1rzAToioYiMEaWp9iVTER
        subject_person_id: p_diPVGy9BzMjoKiUc6icH9N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VKst8B2d5tWwdYZpMbjXpF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4kxiYMQW42xETGpYTmdCeG
          claim_id: c_P1rzAToioYiMEaWp9iVTER
          source_id: s_cEzQFMJKfXkebXkBavgjxf
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_cEzQFMJKfXkebXkBavgjxf
            source_type: api_record
            title: 维基数据：王砺（Q45381094）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381094
            external_identifier: Q45381094
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:00.249Z
            metadata_json: null
        - id: cs_iEd9BmZp1muex6WGQ4Hr9q
          claim_id: c_P1rzAToioYiMEaWp9iVTER
          source_id: s_gUKLxhVWyMb8FFrDMHt15y
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_L8V1HMrJdDeF4bj8dE1PZJ
          claim_id: c_P1rzAToioYiMEaWp9iVTER
          source_id: s_pQVBrrHKLnxGfctpqEstQY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_VKst8B2d5tWwdYZpMbjXpF
        status: active
        display_name: 王砺
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王化，宋人物。CBDB 记录其籍贯记录为虞城，身份包括地方士人/鄉紳，入仕记录为封贈。中国历代人物传记资料库（CBDB）以人物编号 15747 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王化 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xfkv2uu5fBfnJ5YyvgE4da | 王厚 | accepted |
| children | p_VKst8B2d5tWwdYZpMbjXpF | 王砺 | accepted |

## 外部来源

- [维基数据：王厚（Q45381147）](https://www.wikidata.org/wiki/Q45381147)
- [维基数据：王化（Q45381148）](https://www.wikidata.org/wiki/Q45381148)
- [维基数据：王砺（Q45381094）](https://www.wikidata.org/wiki/Q45381094)
- [CBDB 中国历代人物传记资料库：王化（15747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15747&o=json)
