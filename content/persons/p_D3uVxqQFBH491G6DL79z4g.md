---
schema: wang-person/v1
id: p_D3uVxqQFBH491G6DL79z4g
status: active
merged_into: null
display_name: 王应桢
cbdb_id: 294872
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bwd7GKKCiPDtBaNbXuR8i8
        subject_person_id: p_D3uVxqQFBH491G6DL79z4g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王应桢，明人物。嘉靖十一年進士，籍贯山陰，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 294872）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_qry3vP8kbf7r6okRaZDozR
          claim_id: c_bwd7GKKCiPDtBaNbXuR8i8
          source_id: s_91xFukRX26asLRNMy3yByp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_91xFukRX26asLRNMy3yByp
            source_type: api_record
            title: 维基数据：王应桢（Q45510958）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45510958
            external_identifier: Q45510958
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:15.427Z
            metadata_json: null
        - id: cs_XgTNWbq63O6q0Ik_kjAkpV
          claim_id: c_bwd7GKKCiPDtBaNbXuR8i8
          source_id: s_a17eQX1cUDwJwmRVnQj2MU
          stance: supports
          locator: CBDB:294872
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_a17eQX1cUDwJwmRVnQj2MU
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王應楨（294872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294872&o=json
            external_identifier: CBDB:294872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:15.571Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rvNXMctR6TrfKYwDCTDESg
        subject_person_id: p_D3uVxqQFBH491G6DL79z4g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王应桢
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EfC2KyDPqPQs5thxJA77E1
          claim_id: c_rvNXMctR6TrfKYwDCTDESg
          source_id: s_a17eQX1cUDwJwmRVnQj2MU
          stance: supports
          locator: Q45510958
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_o2XjKBcMQALFxb1jwR6oak
          claim_id: c_rvNXMctR6TrfKYwDCTDESg
          source_id: s_91xFukRX26asLRNMy3yByp
          stance: supports
          locator: Q45510958
          quotation: null
          interpretation_note: null
          source:
            id: s_91xFukRX26asLRNMy3yByp
            source_type: api_record
            title: 维基数据：王应桢（Q45510958）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45510958
            external_identifier: Q45510958
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:15.427Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qsu5DQ82CjMUb18HK8kNu9
        subject_person_id: p_aXikAW5GmUNHUB4Mexh2vK
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_D3uVxqQFBH491G6DL79z4g
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FFGebPmUTYJPTnaZxBvTEb
          claim_id: c_qsu5DQ82CjMUb18HK8kNu9
          source_id: s_2AbfFEGVf6njE9MhrfSvXE
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖十一年進士登科錄:一卷
          source:
            id: s_2AbfFEGVf6njE9MhrfSvXE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王畿（126814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126814&o=json
            external_identifier: CBDB:126814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:50.309Z
            metadata_json: null
        - id: cs_Lhk7VM21u66qLff8q1FWDc
          claim_id: c_qsu5DQ82CjMUb18HK8kNu9
          source_id: s_91xFukRX26asLRNMy3yByp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_91xFukRX26asLRNMy3yByp
            source_type: api_record
            title: 维基数据：王应桢（Q45510958）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45510958
            external_identifier: Q45510958
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:15.427Z
            metadata_json: null
        - id: cs_zREMPKg2wZKW1HQNsD9U71
          claim_id: c_qsu5DQ82CjMUb18HK8kNu9
          source_id: s_uzM4rHi8qUhyHDCqSDb8qM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uzM4rHi8qUhyHDCqSDb8qM
            source_type: api_record
            title: 维基数据：王龙溪（Q11573179）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573179
            external_identifier: Q11573179
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:20.610Z
            metadata_json: null
      object_person:
        id: p_aXikAW5GmUNHUB4Mexh2vK
        status: active
        display_name: 王龙溪
        merged_into_person_id: null
    - claim:
        id: c_888FzvLEYSpB4IdTtDiJVM
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D3uVxqQFBH491G6DL79z4g
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YC4qV6kz5UEg2nvkQYRP_b
          claim_id: c_888FzvLEYSpB4IdTtDiJVM
          source_id: s_a17eQX1cUDwJwmRVnQj2MU
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百二十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_netpjn2vvpbP4gRNZK5nnW
        status: active
        display_name: 王畿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王应桢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王应桢，明人物。嘉靖十一年進士，籍贯山陰，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 294872） | accepted |
| name.primary | 王应桢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aXikAW5GmUNHUB4Mexh2vK | 王龙溪 | accepted |
| parents | p_netpjn2vvpbP4gRNZK5nnW | 王畿 | accepted |

## 外部来源

- [维基数据：王龙溪（Q11573179）](https://www.wikidata.org/wiki/Q11573179)
- [维基数据：王应桢（Q45510958）](https://www.wikidata.org/wiki/Q45510958)
- [CBDB 中国历代人物传记资料库：王畿（126814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126814&o=json)
- [CBDB 中国历代人物传记资料库：王應楨（294872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294872&o=json)
