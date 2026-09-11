---
schema: wang-person/v1
id: p_1J8t9MKe5FE8aJP2Fkpe8U
status: active
merged_into: null
display_name: 王邈
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P53rXV4HtPt5Z46djibjac
        subject_person_id: p_1J8t9MKe5FE8aJP2Fkpe8U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zx7bBM11CiCPeG32YCqzsj
          claim_id: c_P53rXV4HtPt5Z46djibjac
          source_id: s_Mau2Mn1HLEUqgAPqcgnyVL
          stance: supports
          locator: CBDB:175782
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175782）
          source: &a1
            id: s_Mau2Mn1HLEUqgAPqcgnyVL
            source_type: api_record
            title: 中国历代人物传记资料库：王邈（CBDB 175782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175782&o=json
            external_identifier: CBDB:175782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_xMkVhhoMuceZiFj7uhJ7Xi
        subject_person_id: p_1J8t9MKe5FE8aJP2Fkpe8U
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 715年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wKu7YiNgjxh16MF41Qncc2
          claim_id: c_xMkVhhoMuceZiFj7uhJ7Xi
          source_id: s_Mau2Mn1HLEUqgAPqcgnyVL
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
        id: c_jxr1XY8635nWF5TVjdCqPM
        subject_person_id: p_1J8t9MKe5FE8aJP2Fkpe8U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邈（卒于715年），唐人物。籍贯丹徒，曾任州司馬。（中国历代人物传记资料库 CBDB 175782）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ejdpZ8R02YCNMv0VMTYQ6V
          claim_id: c_jxr1XY8635nWF5TVjdCqPM
          source_id: s_Mau2Mn1HLEUqgAPqcgnyVL
          stance: supports
          locator: CBDB:175782
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kufRydlN78PUulVNDcWahD
        subject_person_id: p_uQaNbqHDcDVAcDy4Fuqf6C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1J8t9MKe5FE8aJP2Fkpe8U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vNHV40BKhFy5S8JobuxNIX
          claim_id: c_kufRydlN78PUulVNDcWahD
          source_id: s_Mau2Mn1HLEUqgAPqcgnyVL
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 8187：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uQaNbqHDcDVAcDy4Fuqf6C
        status: active
        display_name: 王世鼎
        merged_into_person_id: null
  children:
    - claim:
        id: c__On3y-cebYpSR8LjmKZmLa
        subject_person_id: p_1J8t9MKe5FE8aJP2Fkpe8U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VDf1VMyeJKw9LagGGQBEiq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pfhOcgW3J5AsJ2yJm_La9u
          claim_id: c__On3y-cebYpSR8LjmKZmLa
          source_id: s_Mau2Mn1HLEUqgAPqcgnyVL
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 8188：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VDf1VMyeJKw9LagGGQBEiq
        status: active
        display_name: 王彧
        merged_into_person_id: null
    - claim:
        id: c_TyxNuyMr7L08NXAiXhxoh_
        subject_person_id: p_1J8t9MKe5FE8aJP2Fkpe8U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Mjc5KuDDLMFhnVhbisua4F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BTMe6cUTH-T-NXaAc2wbO7
          claim_id: c_TyxNuyMr7L08NXAiXhxoh_
          source_id: s_Mau2Mn1HLEUqgAPqcgnyVL
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 8189：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Mjc5KuDDLMFhnVhbisua4F
        status: active
        display_name: 王罃
        merged_into_person_id: null
    - claim:
        id: c_xS5x5vdcYGnvc0HPPp71Uk
        subject_person_id: p_1J8t9MKe5FE8aJP2Fkpe8U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9MiuL48tXcQ7r5ofDRarNF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6I-0-t2DEXDkp7OHn8EtIm
          claim_id: c_xS5x5vdcYGnvc0HPPp71Uk
          source_id: s_Mau2Mn1HLEUqgAPqcgnyVL
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 8191：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9MiuL48tXcQ7r5ofDRarNF
        status: active
        display_name: 王佶
        merged_into_person_id: null
    - claim:
        id: c_OnfUxPXCpEIzJIJH7H77DM
        subject_person_id: p_1J8t9MKe5FE8aJP2Fkpe8U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Sp1efvSxPCWU7BKWKPjn4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fx8iFKiQKsJ01tFM-x-jti
          claim_id: c_OnfUxPXCpEIzJIJH7H77DM
          source_id: s_Mau2Mn1HLEUqgAPqcgnyVL
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 8192：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8Sp1efvSxPCWU7BKWKPjn4
        status: active
        display_name: 王璉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王邈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邈 | accepted |
| death.date | 715年 | accepted |
| bio.summary | 王邈（卒于715年），唐人物。籍贯丹徒，曾任州司馬。（中国历代人物传记资料库 CBDB 175782） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uQaNbqHDcDVAcDy4Fuqf6C | 王世鼎 | accepted |
| children | p_VDf1VMyeJKw9LagGGQBEiq | 王彧 | accepted |
| children | p_Mjc5KuDDLMFhnVhbisua4F | 王罃 | accepted |
| children | p_9MiuL48tXcQ7r5ofDRarNF | 王佶 | accepted |
| children | p_8Sp1efvSxPCWU7BKWKPjn4 | 王璉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邈（CBDB 175782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175782&o=json)
