---
schema: wang-person/v1
id: p_iZ69y9vDhnbreU1oyJS9ia
status: active
merged_into: null
display_name: 王衡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WNSzsj9qrXffBnapmyN6PW
        subject_person_id: p_iZ69y9vDhnbreU1oyJS9ia
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aszi5tazZ3DBuuLpiUbcQV
          claim_id: c_WNSzsj9qrXffBnapmyN6PW
          source_id: s_tr74vPSVmYrAwRE8E5wP2m
          stance: supports
          locator: CBDB:121146
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（121146）
          source: &a1
            id: s_tr74vPSVmYrAwRE8E5wP2m
            source_type: api_record
            title: 中国历代人物传记资料库：王衡（CBDB 121146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121146&o=json
            external_identifier: CBDB:121146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FNbR7kPRwHG7hBeSd2TuxD
        subject_person_id: p_iZ69y9vDhnbreU1oyJS9ia
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cZ7FL1pxTFQ4dxoSBhcjBF
          claim_id: c_FNbR7kPRwHG7hBeSd2TuxD
          source_id: s_tr74vPSVmYrAwRE8E5wP2m
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_slY9_fnO5gIhWva0dhprwB
        subject_person_id: p_iZ69y9vDhnbreU1oyJS9ia
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_viWSZF9xCvq6eT1p9j3Gqg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yXeC7awpPcgqNRAUH2EZfV
          claim_id: c_slY9_fnO5gIhWva0dhprwB
          source_id: s_VF5O0ZDOebSckYamoFpGN4
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4272, HuWenKai #800：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VF5O0ZDOebSckYamoFpGN4
            source_type: api_record
            title: 中国历代人物传记资料库：蘇織雲（CBDB 121144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121144&o=json
            external_identifier: CBDB:121144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_viWSZF9xCvq6eT1p9j3Gqg
        status: active
        display_name: 蘇織雲
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衡 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_viWSZF9xCvq6eT1p9j3Gqg | 蘇織雲 | accepted |

## 外部来源

- [中国历代人物传记资料库：蘇織雲（CBDB 121144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121144&o=json)
- [中国历代人物传记资料库：王衡（CBDB 121146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121146&o=json)
