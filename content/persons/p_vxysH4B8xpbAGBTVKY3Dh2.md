---
schema: wang-person/v1
id: p_vxysH4B8xpbAGBTVKY3Dh2
status: active
merged_into: null
display_name: 王原道
cbdb_id: 333144
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LWHxvKNvnR4hbabmJpYxKi
        subject_person_id: p_vxysH4B8xpbAGBTVKY3Dh2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原道，明人物。天順八年進士。（中国历代人物传记资料库 CBDB 333144）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_tv1q3zFRFHNBrv8deLgP2q
          claim_id: c_LWHxvKNvnR4hbabmJpYxKi
          source_id: s_FjWPqUA5b5EfEwFHzckW5s
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_FjWPqUA5b5EfEwFHzckW5s
            source_type: api_record
            title: 维基数据：王原道（Q45560451）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45560451
            external_identifier: Q45560451
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:58.883Z
            metadata_json: null
        - id: cs_GG_ZYmmdZCSy8-FygOBJqR
          claim_id: c_LWHxvKNvnR4hbabmJpYxKi
          source_id: s_7fxnVGQ4K4t5Q65SgmoGKa
          stance: supports
          locator: CBDB:333144
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7fxnVGQ4K4t5Q65SgmoGKa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王原道（333144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333144&o=json
            external_identifier: CBDB:333144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:59.060Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CZS2d1ta785jcv2BS9n2Mp
        subject_person_id: p_vxysH4B8xpbAGBTVKY3Dh2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原道
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Az76jhikuA2KoXqPhSMZ45
          claim_id: c_CZS2d1ta785jcv2BS9n2Mp
          source_id: s_FjWPqUA5b5EfEwFHzckW5s
          stance: supports
          locator: Q45560451
          quotation: null
          interpretation_note: null
          source:
            id: s_FjWPqUA5b5EfEwFHzckW5s
            source_type: api_record
            title: 维基数据：王原道（Q45560451）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45560451
            external_identifier: Q45560451
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:58.883Z
            metadata_json: null
        - id: cs_HRCEHPBUMEseDji866fEPF
          claim_id: c_CZS2d1ta785jcv2BS9n2Mp
          source_id: s_7fxnVGQ4K4t5Q65SgmoGKa
          stance: supports
          locator: Q45560451
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_y8vFRMh9nQ15RaRbnb2usH
        subject_person_id: p_s2Sv6MvyL71fwz1JqSBrir
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vxysH4B8xpbAGBTVKY3Dh2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8cuHWvYHhDu7jz6fBJNSxH
          claim_id: c_y8vFRMh9nQ15RaRbnb2usH
          source_id: s_FjWPqUA5b5EfEwFHzckW5s
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_ANBRxQS2aq3UMsGdu3fDLz
          claim_id: c_y8vFRMh9nQ15RaRbnb2usH
          source_id: s_deDQTbNfsYKav1xFqRqE6d
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_deDQTbNfsYKav1xFqRqE6d
            source_type: api_record
            title: 维基数据：王仁（Q45559885）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45559885
            external_identifier: Q45559885
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_s2Sv6MvyL71fwz1JqSBrir
        status: active
        display_name: 王仁
        merged_into_person_id: null
  children:
    - claim:
        id: c_ditAnJAA3G8xFDxrcAiDNR
        subject_person_id: p_vxysH4B8xpbAGBTVKY3Dh2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7Tia4RakEpFHiC5SDiDZSG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JArabU3KGRTYmNWE2ai1kM
          claim_id: c_ditAnJAA3G8xFDxrcAiDNR
          source_id: s_E8MK8EbyhqXYE21WkXB53z
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_E8MK8EbyhqXYE21WkXB53z
            source_type: api_record
            title: 维基数据：王让（Q45561003）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45561003
            external_identifier: Q45561003
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.608Z
            metadata_json: null
        - id: cs_TY7SDDcLga4yTBMS4rQKJZ
          claim_id: c_ditAnJAA3G8xFDxrcAiDNR
          source_id: s_FjWPqUA5b5EfEwFHzckW5s
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_7Tia4RakEpFHiC5SDiDZSG
        status: active
        display_name: 王让
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_0jCFZJZSgeFydVRtxv_SYt
        subject_person_id: p_vxysH4B8xpbAGBTVKY3Dh2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8kvzu18KWCHGBJbrWxW4b9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s2ohmAhsfsZrh0PxPv1WV0
          claim_id: c_0jCFZJZSgeFydVRtxv_SYt
          source_id: s_dizqWBK4gRWFn4mBpUaSGR
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dizqWBK4gRWFn4mBpUaSGR
            source_type: api_record
            title: 中国历代人物传记资料库：王軾（CBDB 67466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67466&o=json
            external_identifier: CBDB:67466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8kvzu18KWCHGBJbrWxW4b9
        status: active
        display_name: 王軾
        merged_into_person_id: null
  other: []
---

# 王原道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王原道，明人物。天順八年進士。（中国历代人物传记资料库 CBDB 333144） | accepted |
| name.primary | 王原道 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_s2Sv6MvyL71fwz1JqSBrir | 王仁 | accepted |
| children | p_7Tia4RakEpFHiC5SDiDZSG | 王让 | accepted |
| descendants | p_8kvzu18KWCHGBJbrWxW4b9 | 王軾 | accepted |

## 外部来源

- [维基数据：王让（Q45561003）](https://www.wikidata.org/wiki/Q45561003)
- [维基数据：王仁（Q45559885）](https://www.wikidata.org/wiki/Q45559885)
- [维基数据：王原道（Q45560451）](https://www.wikidata.org/wiki/Q45560451)
- [中国历代人物传记资料库：王軾（CBDB 67466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67466&o=json)
- [CBDB 中国历代人物传记资料库：王原道（333144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333144&o=json)
