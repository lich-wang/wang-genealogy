---
schema: wang-person/v1
id: p_9B5ANk8vxa7D7phY5dTTsm
status: active
merged_into: null
display_name: 王恭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wMqF1gAt57BdCKHW2WvP7Y
        subject_person_id: p_9B5ANk8vxa7D7phY5dTTsm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WZD3udqLxGAQ8zRZPNELt2
          claim_id: c_wMqF1gAt57BdCKHW2WvP7Y
          source_id: s_F4AnebQmkt32k7zkvanzLD
          stance: supports
          locator: CBDB:145741
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145741）
          source: &a1
            id: s_F4AnebQmkt32k7zkvanzLD
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 145741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145741&o=json
            external_identifier: CBDB:145741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TWXdfR5Yayf6Abnzdk7HLE
        subject_person_id: p_9B5ANk8vxa7D7phY5dTTsm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 732年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z12PkDV4QMJRgaQ78K6A9P
          claim_id: c_TWXdfR5Yayf6Abnzdk7HLE
          source_id: s_F4AnebQmkt32k7zkvanzLD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_cCc2X7Zv5QsKGjKxpAxSBC
        subject_person_id: p_9B5ANk8vxa7D7phY5dTTsm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 804年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q8ShfCGswR4TJfcQz5BrhM
          claim_id: c_cCc2X7Zv5QsKGjKxpAxSBC
          source_id: s_F4AnebQmkt32k7zkvanzLD
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
        id: c_Pm6gQBx6f6QXrAGy5i19oj
        subject_person_id: p_9B5ANk8vxa7D7phY5dTTsm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭（732年—804年），唐人物。籍贯昌平，曾任上柱國、太子舍人、州司馬。（中国历代人物传记资料库 CBDB 145741）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xDjL8pRjRSaLEpiVGjq-1F
          claim_id: c_Pm6gQBx6f6QXrAGy5i19oj
          source_id: s_F4AnebQmkt32k7zkvanzLD
          stance: supports
          locator: CBDB:145741
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_md45y1yFWAcX00admrY1qt
        subject_person_id: p_D1uiKtejcBKo45taEXSY3A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9B5ANk8vxa7D7phY5dTTsm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jh0vVtRy7Bv2ovBQRpdYOK
          claim_id: c_md45y1yFWAcX00admrY1qt
          source_id: s_F4AnebQmkt32k7zkvanzLD
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_D1uiKtejcBKo45taEXSY3A
        status: active
        display_name: 王某順
        merged_into_person_id: null
  children:
    - claim:
        id: c_8A4qLOITTOR45_pSSIoQ9_
        subject_person_id: p_9B5ANk8vxa7D7phY5dTTsm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oRDvznu4syTic9ZyER4cPh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gTxGpMOKrYkHfjaIblT2qI
          claim_id: c_8A4qLOITTOR45_pSSIoQ9_
          source_id: s_F4AnebQmkt32k7zkvanzLD
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oRDvznu4syTic9ZyER4cPh
        status: active
        display_name: 王性演
        merged_into_person_id: null
    - claim:
        id: c_Gl0hdPj8I1cTz-oqlTscS_
        subject_person_id: p_9B5ANk8vxa7D7phY5dTTsm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DTdjsS6QERsLdYy57NhSNT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xZk-Czq3hsh9br-fy9ByNh
          claim_id: c_Gl0hdPj8I1cTz-oqlTscS_
          source_id: s_F4AnebQmkt32k7zkvanzLD
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DTdjsS6QERsLdYy57NhSNT
        status: active
        display_name: 王恆輳
        merged_into_person_id: null
    - claim:
        id: c_5epqliEF4tYxuFO8SNgtx3
        subject_person_id: p_9B5ANk8vxa7D7phY5dTTsm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cPVM8ZBfFuRRTuH1YzPFBc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1asqFxBYmSqqm9H0I5XNiv
          claim_id: c_5epqliEF4tYxuFO8SNgtx3
          source_id: s_F4AnebQmkt32k7zkvanzLD
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cPVM8ZBfFuRRTuH1YzPFBc
        status: active
        display_name: 王恆巖
        merged_into_person_id: null
    - claim:
        id: c_AqSlnQ6EUoQVxdRes69-rw
        subject_person_id: p_9B5ANk8vxa7D7phY5dTTsm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rgk4fmEhMoSgMaFR2n8Pwk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tJNz6zlIpqFUMzlnjcokkw
          claim_id: c_AqSlnQ6EUoQVxdRes69-rw
          source_id: s_F4AnebQmkt32k7zkvanzLD
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rgk4fmEhMoSgMaFR2n8Pwk
        status: active
        display_name: 王恆某
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恭 | accepted |
| birth.date | 732年 | accepted |
| death.date | 804年 | accepted |
| bio.summary | 王恭（732年—804年），唐人物。籍贯昌平，曾任上柱國、太子舍人、州司馬。（中国历代人物传记资料库 CBDB 145741） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_D1uiKtejcBKo45taEXSY3A | 王某順 | accepted |
| children | p_oRDvznu4syTic9ZyER4cPh | 王性演 | accepted |
| children | p_DTdjsS6QERsLdYy57NhSNT | 王恆輳 | accepted |
| children | p_cPVM8ZBfFuRRTuH1YzPFBc | 王恆巖 | accepted |
| children | p_rgk4fmEhMoSgMaFR2n8Pwk | 王恆某 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恭（CBDB 145741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145741&o=json)
