---
schema: wang-person/v1
id: p_6e5ELnuv2E5KGPsNrAysQX
status: active
merged_into: null
display_name: 王庾
cbdb_id: 126670
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c7u6ggCGNdH9rCmLiL95nG
        subject_person_id: p_6e5ELnuv2E5KGPsNrAysQX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庾，史料所见人物。本项目依据《中国历代人物传记资料库：王庾（CBDB 126670）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_AHJpCq0iXEDcrTLO48UcBQ
          claim_id: c_c7u6ggCGNdH9rCmLiL95nG
          source_id: s_RGkBbWncf83V3qXrsE4wZ4
          stance: supports
          locator: CBDB:126670
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_RGkBbWncf83V3qXrsE4wZ4
            source_type: api_record
            title: 中国历代人物传记资料库：王庾（CBDB 126670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126670&o=json
            external_identifier: CBDB:126670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SSfks1PAt7ZqNYrGxnJEk3
        subject_person_id: p_6e5ELnuv2E5KGPsNrAysQX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MARJ8h9sqApYSs2L2i8YsD
          claim_id: c_SSfks1PAt7ZqNYrGxnJEk3
          source_id: s_RGkBbWncf83V3qXrsE4wZ4
          stance: supports
          locator: CBDB:126670
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_06NWinUPXcWTG09jJRSWPN
        subject_person_id: p_gjG6yS82eJN4fARf6aE7Hv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6e5ELnuv2E5KGPsNrAysQX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M2Gt4Mp-UjHKJoqpVBWSxW
          claim_id: c_06NWinUPXcWTG09jJRSWPN
          source_id: s_r5QLrookMKsQP56opUdBRr
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第三十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r5QLrookMKsQP56opUdBRr
            source_type: api_record
            title: 中国历代人物传记资料库：王文貴（CBDB 238293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238293&o=json
            external_identifier: CBDB:238293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gjG6yS82eJN4fARf6aE7Hv
        status: active
        display_name: 王文貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_0NYVW5YpKM2xLKhyPG5UGt
        subject_person_id: p_HXRtUkq7ZLsLxnqSaK3d44
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6e5ELnuv2E5KGPsNrAysQX
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mCwuq9Y0PsxkEsri6IYGd2
          claim_id: c_0NYVW5YpKM2xLKhyPG5UGt
          source_id: s_WMHDG8g6S2DBBmC6n9R6zt
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第三十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WMHDG8g6S2DBBmC6n9R6zt
            source_type: api_record
            title: 中国历代人物传记资料库：王庭濟（CBDB 238291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238291&o=json
            external_identifier: CBDB:238291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_HXRtUkq7ZLsLxnqSaK3d44
        status: active
        display_name: 王庭濟
        merged_into_person_id: null
    - claim:
        id: c_sgtNn570pspSsY0sOLkKiF
        subject_person_id: p_qsFykwEkn331sniP7xaPke
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6e5ELnuv2E5KGPsNrAysQX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SMujzUtJwxVxY9Tda1jpcO
          claim_id: c_sgtNn570pspSsY0sOLkKiF
          source_id: s_UDXxgsipSBNx4E2g13e3Tv
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第三十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UDXxgsipSBNx4E2g13e3Tv
            source_type: api_record
            title: 中国历代人物传记资料库：王添祥（CBDB 238292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238292&o=json
            external_identifier: CBDB:238292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_qsFykwEkn331sniP7xaPke
        status: active
        display_name: 王添祥
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王庾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王庾，史料所见人物。本项目依据《中国历代人物传记资料库：王庾（CBDB 126670）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王庾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gjG6yS82eJN4fARf6aE7Hv | 王文貴 | accepted |
| ancestors | p_HXRtUkq7ZLsLxnqSaK3d44 | 王庭濟 | accepted |
| ancestors | p_qsFykwEkn331sniP7xaPke | 王添祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王添祥（CBDB 238292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238292&o=json)
- [中国历代人物传记资料库：王庭濟（CBDB 238291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238291&o=json)
- [中国历代人物传记资料库：王文貴（CBDB 238293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238293&o=json)
- [中国历代人物传记资料库：王庾（CBDB 126670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126670&o=json)
