---
schema: wang-person/v1
id: p_d7se9UivDFXRMfVXTck1VV
status: active
merged_into: null
display_name: 王今伯
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rfKEsXCHNksxLQRF7BhsRn
        subject_person_id: p_d7se9UivDFXRMfVXTck1VV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王今伯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4E6SQhcfNEPdLQYtneRP9u
          claim_id: c_rfKEsXCHNksxLQRF7BhsRn
          source_id: s_F28UihzCfhYnWH1QBp29iu
          stance: supports
          locator: CBDB:169557
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169557）
          source: &a1
            id: s_F28UihzCfhYnWH1QBp29iu
            source_type: api_record
            title: 中国历代人物传记资料库：王今伯（CBDB 169557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169557&o=json
            external_identifier: CBDB:169557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.232Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EQwzPwmSAPhXgyVssfKyqY
        subject_person_id: p_d7se9UivDFXRMfVXTck1VV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 740年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CdaYfQvM14Gdc9vgfZZNad
          claim_id: c_EQwzPwmSAPhXgyVssfKyqY
          source_id: s_F28UihzCfhYnWH1QBp29iu
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
        id: c_tXgFMU8HPLNnrX28XXGZ1f
        subject_person_id: p_d7se9UivDFXRMfVXTck1VV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王今伯（卒于740年），唐人物。籍贯廣州，曾任令。（中国历代人物传记资料库 CBDB 169557）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_163QkcSRTBBrxfyuY0zJki
          claim_id: c_tXgFMU8HPLNnrX28XXGZ1f
          source_id: s_F28UihzCfhYnWH1QBp29iu
          stance: supports
          locator: CBDB:169557
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rdVUGm--wi0bedOxQ8Gm4p
        subject_person_id: p_uTkvzk6QHh8QoakbQmViKF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_d7se9UivDFXRMfVXTck1VV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lWzXkpKHdELGZEUFlQkLwW
          claim_id: c_rdVUGm--wi0bedOxQ8Gm4p
          source_id: s_F28UihzCfhYnWH1QBp29iu
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uTkvzk6QHh8QoakbQmViKF
        status: active
        display_name: 王仙期
        merged_into_person_id: null
  children:
    - claim:
        id: c_2IkXXkjyHMZBik4URNl4uX
        subject_person_id: p_d7se9UivDFXRMfVXTck1VV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ByByjCwT9Wgwc6nJLBGiit
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vjBf2sveA_j_GMFiZ6Fv4I
          claim_id: c_2IkXXkjyHMZBik4URNl4uX
          source_id: s_THPAtfVam3t7CKGtujFwbi
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_THPAtfVam3t7CKGtujFwbi
            source_type: api_record
            title: 中国历代人物传记资料库：王臧（CBDB 169091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169091&o=json
            external_identifier: CBDB:169091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.228Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ByByjCwT9Wgwc6nJLBGiit
        status: active
        display_name: 王臧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王今伯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王今伯 | accepted |
| death.date | 740年 | accepted |
| bio.summary | 王今伯（卒于740年），唐人物。籍贯廣州，曾任令。（中国历代人物传记资料库 CBDB 169557） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uTkvzk6QHh8QoakbQmViKF | 王仙期 | accepted |
| children | p_ByByjCwT9Wgwc6nJLBGiit | 王臧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王今伯（CBDB 169557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169557&o=json)
- [中国历代人物传记资料库：王臧（CBDB 169091）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169091&o=json)
