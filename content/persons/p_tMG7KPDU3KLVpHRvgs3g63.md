---
schema: wang-person/v1
id: p_tMG7KPDU3KLVpHRvgs3g63
status: active
merged_into: null
display_name: 王會
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4yhs8q9GEJP8VQRnFxUtsQ
        subject_person_id: p_tMG7KPDU3KLVpHRvgs3g63
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yE1oLfxTi8LPBQoAQ7Q2NA
          claim_id: c_4yhs8q9GEJP8VQRnFxUtsQ
          source_id: s_9PZ9aM2qNHM86NeMCMkt4e
          stance: supports
          locator: CBDB:190091
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190091）
          source: &a1
            id: s_9PZ9aM2qNHM86NeMCMkt4e
            source_type: api_record
            title: 中国历代人物传记资料库：王會（CBDB 190091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190091&o=json
            external_identifier: CBDB:190091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QebK8wqWXvFn8yFTEAMuYv
        subject_person_id: p_tMG7KPDU3KLVpHRvgs3g63
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 831年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ckb5R4oVZZc3vMNm3jY6AF
          claim_id: c_QebK8wqWXvFn8yFTEAMuYv
          source_id: s_9PZ9aM2qNHM86NeMCMkt4e
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
        id: c_jG4TZ3F2Fx59LmC2DLK99X
        subject_person_id: p_tMG7KPDU3KLVpHRvgs3g63
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會（卒于831年），唐人物。籍贯洛陽，曾任衛大將軍。（中国历代人物传记资料库 CBDB 190091）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_74PLlFhSvG0M11XsKTcAjv
          claim_id: c_jG4TZ3F2Fx59LmC2DLK99X
          source_id: s_9PZ9aM2qNHM86NeMCMkt4e
          stance: supports
          locator: CBDB:190091
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ru3djlhU1z3GxfKv5dIlaT
        subject_person_id: p_11iWb9gejmcDFDWm3HpHGM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tMG7KPDU3KLVpHRvgs3g63
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EnRmGM50Z5zPZvA8akMNFK
          claim_id: c_ru3djlhU1z3GxfKv5dIlaT
          source_id: s_JwJg4KSdMxVaso6UMnYtH5
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 27872：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JwJg4KSdMxVaso6UMnYtH5
            source_type: api_record
            title: 中国历代人物传记资料库：王彪（CBDB 190092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190092&o=json
            external_identifier: CBDB:190092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_11iWb9gejmcDFDWm3HpHGM
        status: active
        display_name: 王彪
        merged_into_person_id: null
  children:
    - claim:
        id: c_zI9fT_rWAbQtdX98v4PoOU
        subject_person_id: p_tMG7KPDU3KLVpHRvgs3g63
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B4g9ZTU3Y9aTiDR5uH3rn2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J3UNL3VbjLIJUionMiYMes
          claim_id: c_zI9fT_rWAbQtdX98v4PoOU
          source_id: s_4S8Kd5TDMrbhTNCMBEsEfc
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4S8Kd5TDMrbhTNCMBEsEfc
            source_type: api_record
            title: 中国历代人物传记资料库：王融（CBDB 145104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145104&o=json
            external_identifier: CBDB:145104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_B4g9ZTU3Y9aTiDR5uH3rn2
        status: active
        display_name: 王融
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會 | accepted |
| death.date | 831年 | accepted |
| bio.summary | 王會（卒于831年），唐人物。籍贯洛陽，曾任衛大將軍。（中国历代人物传记资料库 CBDB 190091） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_11iWb9gejmcDFDWm3HpHGM | 王彪 | accepted |
| children | p_B4g9ZTU3Y9aTiDR5uH3rn2 | 王融 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彪（CBDB 190092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190092&o=json)
- [中国历代人物传记资料库：王會（CBDB 190091）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190091&o=json)
- [中国历代人物传记资料库：王融（CBDB 145104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145104&o=json)
