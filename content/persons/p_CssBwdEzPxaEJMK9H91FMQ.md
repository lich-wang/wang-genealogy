---
schema: wang-person/v1
id: p_CssBwdEzPxaEJMK9H91FMQ
status: active
merged_into: null
display_name: 王云
cbdb_id: 257532
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vdUR49JBBL9GVBrzXajcWE
        subject_person_id: p_CssBwdEzPxaEJMK9H91FMQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王云
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Meu9TrJ7B2CeKWfouQpERr
          claim_id: c_vdUR49JBBL9GVBrzXajcWE
          source_id: s_rjRAs59DSneY65g9D1nKaZ
          stance: supports
          locator: Q45491686
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
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
        - id: cs_EqPxWbCDZeeKVH3Hnt4VhM
          claim_id: c_vdUR49JBBL9GVBrzXajcWE
          source_id: s_bArSiao4yC2E1DUMgeQxjT
          stance: supports
          locator: CBDB:257532
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_bArSiao4yC2E1DUMgeQxjT
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王雲（257532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257532&o=json
            external_identifier: CBDB:257532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x9JVyLpJ7hk7DKQx2sGMw7
        subject_person_id: p_CssBwdEzPxaEJMK9H91FMQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王云，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 257532）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nxdxGryu9XDSDjCVDMgb2E
          claim_id: c_x9JVyLpJ7hk7DKQx2sGMw7
          source_id: s_rjRAs59DSneY65g9D1nKaZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
        - id: cs_z-LZk_3w7J3fdcrT7tWsJc
          claim_id: c_x9JVyLpJ7hk7DKQx2sGMw7
          source_id: s_bArSiao4yC2E1DUMgeQxjT
          stance: supports
          locator: CBDB:257532
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a2
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
        - id: cs_CvRDwqXCFU8guyg1yWJX4W
          claim_id: c_1CgNRuWYNfA5p7LyymRog9
          source_id: s_zRCWanQ9G8TMGENN7UWk8v
          stance: supports
          locator: P22（父）
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
      object_person:
        id: p_Ns4Cdmr9SZRQforztCwkrA
        status: active
        display_name: 王成
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c__v1UHQsTUsVZZ_DJjxDwZ4
        subject_person_id: p_CssBwdEzPxaEJMK9H91FMQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bwdhzsnM77a9YN3tYyTmwB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iMb3PAhNXWt7n9nr85LA0S
          claim_id: c__v1UHQsTUsVZZ_DJjxDwZ4
          source_id: s_D1Q1PMjTF3hG8x2zM1xYbq
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第八名：曾祖
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

# 王云

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王云 | accepted |
| bio.summary | 王云，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 257532） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Ns4Cdmr9SZRQforztCwkrA | 王成 | accepted |
| descendants | p_bwdhzsnM77a9YN3tYyTmwB | 王鴻儒 | accepted |

## 外部来源

- [维基数据：王成（Q45491751）](https://www.wikidata.org/wiki/Q45491751)
- [维基数据：王云（Q45491686）](https://www.wikidata.org/wiki/Q45491686)
- [中国历代人物传记资料库：王鴻儒（CBDB 33864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33864&o=json)
- [CBDB 中国历代人物传记资料库：王雲（257532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257532&o=json)
