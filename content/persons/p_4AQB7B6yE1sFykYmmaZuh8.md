---
schema: wang-person/v1
id: p_4AQB7B6yE1sFykYmmaZuh8
status: active
merged_into: null
display_name: 王道光
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T6w4YUdfrXAVrQwHs9uTwG
        subject_person_id: p_4AQB7B6yE1sFykYmmaZuh8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Sq745t2Sju3xaMKoS6bBuN
          claim_id: c_T6w4YUdfrXAVrQwHs9uTwG
          source_id: s_wEoYHAq7oQPpjnuMCPqcSE
          stance: supports
          locator: CBDB:193395
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（193395）
          source: &a1
            id: s_wEoYHAq7oQPpjnuMCPqcSE
            source_type: api_record
            title: 中国历代人物传记资料库：王道光（CBDB 193395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193395&o=json
            external_identifier: CBDB:193395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_suNDwbPaaDCPeEwSjDj1bK
        subject_person_id: p_4AQB7B6yE1sFykYmmaZuh8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 751年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gmyha14hD4sK5noUA6EBUz
          claim_id: c_suNDwbPaaDCPeEwSjDj1bK
          source_id: s_wEoYHAq7oQPpjnuMCPqcSE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y7MjUe3JW66TUnn1rhbzrh
        subject_person_id: p_4AQB7B6yE1sFykYmmaZuh8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道光（卒于751年），唐人物。籍贯萬年，曾任州司馬。（中国历代人物传记资料库 CBDB 193395）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_crsJYkDJsp8CDpPzGRTT4C
          claim_id: c_Y7MjUe3JW66TUnn1rhbzrh
          source_id: s_wEoYHAq7oQPpjnuMCPqcSE
          stance: supports
          locator: CBDB:193395
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aiM24aExe_cH0zOn7YicnN
        subject_person_id: p_NP2A5pkQy4Coy8RvLsFQwk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4AQB7B6yE1sFykYmmaZuh8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5-dTscf9gb0ebsZwRemV3Y
          claim_id: c_aiM24aExe_cH0zOn7YicnN
          source_id: s_wEoYHAq7oQPpjnuMCPqcSE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NP2A5pkQy4Coy8RvLsFQwk
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  children:
    - claim:
        id: c_0SOsYqglj8_ihQuhSerecB
        subject_person_id: p_4AQB7B6yE1sFykYmmaZuh8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BXKs3dQXJSQDNmc22PJorR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ir2kG4Ztf8DCqQtwpCjXx5
          claim_id: c_0SOsYqglj8_ihQuhSerecB
          source_id: s_wEoYHAq7oQPpjnuMCPqcSE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BXKs3dQXJSQDNmc22PJorR
        status: active
        display_name: 王說
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王道光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道光 | accepted |
| death.date | 751年 | accepted |
| bio.summary | 王道光（卒于751年），唐人物。籍贯萬年，曾任州司馬。（中国历代人物传记资料库 CBDB 193395） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NP2A5pkQy4Coy8RvLsFQwk | 王瓚 | accepted |
| children | p_BXKs3dQXJSQDNmc22PJorR | 王說 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道光（CBDB 193395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193395&o=json)
