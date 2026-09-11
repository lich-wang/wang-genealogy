---
schema: wang-person/v1
id: p_8eUNyzhUpjzoTbu8wMtdiN
status: active
merged_into: null
display_name: 李湘芝
revision: 1
cbdb_id: 100220
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wezsKt2vdct75oqx33esNA
        subject_person_id: p_8eUNyzhUpjzoTbu8wMtdiN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李湘芝
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mMMGqApFsIzrzFoJ1Plm_1
          claim_id: c_wezsKt2vdct75oqx33esNA
          source_id: s_c1H5-sTMOo8X207asZfbiq
          stance: supports
          locator: CBDB:100220
          quotation: null
          interpretation_note: CBDB 明确记录的王初桐配偶
          source: &a1
            id: s_c1H5-sTMOo8X207asZfbiq
            source_type: api_record
            title: 中国历代人物传记资料库：李湘芝（CBDB 100220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100220&o=json
            external_identifier: CBDB:100220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_zYEZkarRuA2Tg50mf_miWA
        subject_person_id: p_xPXXSuoC2vsos6zKj5NVuB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8eUNyzhUpjzoTbu8wMtdiN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VQEn-J4PhNewi_7zdzeOpu
          claim_id: c_zYEZkarRuA2Tg50mf_miWA
          source_id: s_c1H5-sTMOo8X207asZfbiq
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1874, HuWenKai #338：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xPXXSuoC2vsos6zKj5NVuB
        status: active
        display_name: 王初桐
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李湘芝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 李湘芝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_xPXXSuoC2vsos6zKj5NVuB | 王初桐 | accepted |

## 外部来源

- [中国历代人物传记资料库：李湘芝（CBDB 100220）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100220&o=json)
