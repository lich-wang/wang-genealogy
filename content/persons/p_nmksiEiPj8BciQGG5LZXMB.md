---
schema: wang-person/v1
id: p_nmksiEiPj8BciQGG5LZXMB
status: active
merged_into: null
display_name: 王理
cbdb_id: 337964
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_12vnWK6Yj9biMMTkPB9aCU
        subject_person_id: p_nmksiEiPj8BciQGG5LZXMB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理，明人物。天順八年進士，曾任判官。（中国历代人物传记资料库 CBDB 337964）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_1CQfJjVUDQsyKFvUyfxsEs
          claim_id: c_12vnWK6Yj9biMMTkPB9aCU
          source_id: s_pYzRbbN51bzA3eo9bup8B9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_pYzRbbN51bzA3eo9bup8B9
            source_type: api_record
            title: 维基数据：王理（Q45538785）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45538785
            external_identifier: Q45538785
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:58.883Z
            metadata_json: null
        - id: cs_cCz9r0gMffiIiXR80jXhLJ
          claim_id: c_12vnWK6Yj9biMMTkPB9aCU
          source_id: s_QzD9YgKQN9tnyqiz6zvP7V
          stance: supports
          locator: CBDB:337964
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QzD9YgKQN9tnyqiz6zvP7V
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王理（337964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337964&o=json
            external_identifier: CBDB:337964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:59.054Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zf2ky3uFk9K2nnovsYeyFT
        subject_person_id: p_nmksiEiPj8BciQGG5LZXMB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jhNwWhQxuNKh8bGepKZ3fc
          claim_id: c_Zf2ky3uFk9K2nnovsYeyFT
          source_id: s_pYzRbbN51bzA3eo9bup8B9
          stance: supports
          locator: Q45538785
          quotation: null
          interpretation_note: null
          source:
            id: s_pYzRbbN51bzA3eo9bup8B9
            source_type: api_record
            title: 维基数据：王理（Q45538785）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45538785
            external_identifier: Q45538785
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:58.883Z
            metadata_json: null
        - id: cs_t65yM68zkoYiyVt55kMHr7
          claim_id: c_Zf2ky3uFk9K2nnovsYeyFT
          source_id: s_QzD9YgKQN9tnyqiz6zvP7V
          stance: supports
          locator: Q45538785
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Mvgc5Nz431jfUntcNL5HkT
        subject_person_id: p_1a4kV9bnUd3Gc32RqHYR8N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nmksiEiPj8BciQGG5LZXMB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pgcQjAtPM35ZAZYdLgPr5U
          claim_id: c_Mvgc5Nz431jfUntcNL5HkT
          source_id: s_pYzRbbN51bzA3eo9bup8B9
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_CN38XvyH4rSQ4F2VZ4VaBo
          claim_id: c_Mvgc5Nz431jfUntcNL5HkT
          source_id: s_2xPmNcsS15tNrXDCEVj1CL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_2xPmNcsS15tNrXDCEVj1CL
            source_type: api_record
            title: 维基数据：王思义（Q45538216）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45538216
            external_identifier: Q45538216
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_1a4kV9bnUd3Gc32RqHYR8N
        status: active
        display_name: 王思义
        merged_into_person_id: null
  children:
    - claim:
        id: c_VSa8bmyZeUaA3r7ANBiLTH
        subject_person_id: p_nmksiEiPj8BciQGG5LZXMB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mkEUUStA3H6zxa8Vzv7LyH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q3nWLyYjjBEH6aVbNkJTfL
          claim_id: c_VSa8bmyZeUaA3r7ANBiLTH
          source_id: s_S71Vwi2CwFX8kSRHwTPyST
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_S71Vwi2CwFX8kSRHwTPyST
            source_type: api_record
            title: 维基数据：王昂（Q45539296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45539296
            external_identifier: Q45539296
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
        - id: cs_LySYqmLNkh6gHPWSDUMeX7
          claim_id: c_VSa8bmyZeUaA3r7ANBiLTH
          source_id: s_pYzRbbN51bzA3eo9bup8B9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_mkEUUStA3H6zxa8Vzv7LyH
        status: active
        display_name: 王昂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_prsKYW53kMMS3zjdZvrhy-
        subject_person_id: p_nmksiEiPj8BciQGG5LZXMB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aU0kJ8MgQOAffymZBZm1xy
          claim_id: c_prsKYW53kMMS3zjdZvrhy-
          source_id: s_pFJEtZMtXSRxJbNHTJPiqT
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第六十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pFJEtZMtXSRxJbNHTJPiqT
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 67938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67938&o=json
            external_identifier: CBDB:67938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.033Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3NK6EhTAXgAtmFG5Dkqh4A
        status: active
        display_name: 王詔
        merged_into_person_id: null
  other: []
---

# 王理

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王理，明人物。天順八年進士，曾任判官。（中国历代人物传记资料库 CBDB 337964） | accepted |
| name.primary | 王理 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1a4kV9bnUd3Gc32RqHYR8N | 王思义 | accepted |
| children | p_mkEUUStA3H6zxa8Vzv7LyH | 王昂 | accepted |
| descendants | p_3NK6EhTAXgAtmFG5Dkqh4A | 王詔 | accepted |

## 外部来源

- [维基数据：王昂（Q45539296）](https://www.wikidata.org/wiki/Q45539296)
- [维基数据：王理（Q45538785）](https://www.wikidata.org/wiki/Q45538785)
- [维基数据：王思义（Q45538216）](https://www.wikidata.org/wiki/Q45538216)
- [中国历代人物传记资料库：王詔（CBDB 67938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67938&o=json)
- [CBDB 中国历代人物传记资料库：王理（337964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337964&o=json)
