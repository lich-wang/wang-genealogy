---
schema: wang-person/v1
id: p_Ns4Cdmr9SZRQforztCwkrA
status: active
merged_into: null
display_name: 王成
cbdb_id: 257533
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L74B5cHhShBLVC6x3CPBmW
        subject_person_id: p_Ns4Cdmr9SZRQforztCwkrA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 257533）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_2tqPDT6MLKTKvJp3TU7pTv
          claim_id: c_L74B5cHhShBLVC6x3CPBmW
          source_id: s_zRCWanQ9G8TMGENN7UWk8v
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_zRCWanQ9G8TMGENN7UWk8v
            source_type: api_record
            title: 维基数据：王成（Q45491751）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45491751
            external_identifier: Q45491751
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:19.152Z
            metadata_json: null
        - id: cs_PqYJVpwop6XvP4MAfw_Apy
          claim_id: c_L74B5cHhShBLVC6x3CPBmW
          source_id: s_SGcWxpLKkFv3wzzLKySpzm
          stance: supports
          locator: CBDB:257533
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_SGcWxpLKkFv3wzzLKySpzm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王成（257533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257533&o=json
            external_identifier: CBDB:257533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:19.320Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GvK17xnjiiFDQZouVGMBum
        subject_person_id: p_Ns4Cdmr9SZRQforztCwkrA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Z4DJeyvkwSh2m8ag9YYZBr
          claim_id: c_GvK17xnjiiFDQZouVGMBum
          source_id: s_SGcWxpLKkFv3wzzLKySpzm
          stance: supports
          locator: Q45491751
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_zN3uHPf5oFPJLihNaNkAhc
          claim_id: c_GvK17xnjiiFDQZouVGMBum
          source_id: s_zRCWanQ9G8TMGENN7UWk8v
          stance: supports
          locator: Q45491751
          quotation: null
          interpretation_note: null
          source:
            id: s_zRCWanQ9G8TMGENN7UWk8v
            source_type: api_record
            title: 维基数据：王成（Q45491751）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45491751
            external_identifier: Q45491751
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:19.152Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1CgNRuWYNfA5p7LyymRog9
        subject_person_id: p_CssBwdEzPxaEJMK9H91FMQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ns4Cdmr9SZRQforztCwkrA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EsV4MpDSbRVm6PYgD8azUG
          claim_id: c_1CgNRuWYNfA5p7LyymRog9
          source_id: s_rjRAs59DSneY65g9D1nKaZ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_rjRAs59DSneY65g9D1nKaZ
            source_type: api_record
            title: 维基数据：王云（Q45491686）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45491686
            external_identifier: Q45491686
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_CvRDwqXCFU8guyg1yWJX4W
          claim_id: c_1CgNRuWYNfA5p7LyymRog9
          source_id: s_zRCWanQ9G8TMGENN7UWk8v
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_CssBwdEzPxaEJMK9H91FMQ
        status: active
        display_name: 王云
        merged_into_person_id: null
  children:
    - claim:
        id: c_4eUrHznUMarW3ZsgmTEqYc
        subject_person_id: p_Ns4Cdmr9SZRQforztCwkrA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PAQnJKUX1HHCzAwrFTb5md
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dKrMgpU6xcFnV47UJToCX7
          claim_id: c_4eUrHznUMarW3ZsgmTEqYc
          source_id: s_aBqYKXy4FB34Qb4CoTKgaT
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_aBqYKXy4FB34Qb4CoTKgaT
            source_type: api_record
            title: 维基数据：王本（Q45491815）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45491815
            external_identifier: Q45491815
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
        - id: cs_Qb6orh3u7VqCDZbkGPHgGQ
          claim_id: c_4eUrHznUMarW3ZsgmTEqYc
          source_id: s_zRCWanQ9G8TMGENN7UWk8v
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_PAQnJKUX1HHCzAwrFTb5md
        status: active
        display_name: 王本
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_s2gdO8jr4QiSf3GbblIusI
        subject_person_id: p_Ns4Cdmr9SZRQforztCwkrA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bwdhzsnM77a9YN3tYyTmwB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cnmwS6h4FsTBioLkwiike-
          claim_id: c_s2gdO8jr4QiSf3GbblIusI
          source_id: s_D1Q1PMjTF3hG8x2zM1xYbq
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D1Q1PMjTF3hG8x2zM1xYbq
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻儒（CBDB 33864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33864&o=json
            external_identifier: CBDB:33864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bwdhzsnM77a9YN3tYyTmwB
        status: active
        display_name: 王鴻儒
        merged_into_person_id: null
  other: []
---

# 王成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王成，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 257533） | accepted |
| name.primary | 王成 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CssBwdEzPxaEJMK9H91FMQ | 王云 | accepted |
| children | p_PAQnJKUX1HHCzAwrFTb5md | 王本 | accepted |
| descendants | p_bwdhzsnM77a9YN3tYyTmwB | 王鴻儒 | accepted |

## 外部来源

- [维基数据：王本（Q45491815）](https://www.wikidata.org/wiki/Q45491815)
- [维基数据：王成（Q45491751）](https://www.wikidata.org/wiki/Q45491751)
- [维基数据：王云（Q45491686）](https://www.wikidata.org/wiki/Q45491686)
- [中国历代人物传记资料库：王鴻儒（CBDB 33864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33864&o=json)
- [CBDB 中国历代人物传记资料库：王成（257533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257533&o=json)
