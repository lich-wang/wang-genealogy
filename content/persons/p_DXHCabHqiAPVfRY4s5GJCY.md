---
schema: wang-person/v1
id: p_DXHCabHqiAPVfRY4s5GJCY
status: active
merged_into: null
display_name: 王敬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AM54sGWG7MFwWdGbfALBzq
        subject_person_id: p_DXHCabHqiAPVfRY4s5GJCY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Dez2sajDzeKg87QnShS4Ce
          claim_id: c_AM54sGWG7MFwWdGbfALBzq
          source_id: s_MmehzZX93GxJjEo1vWTkDQ
          stance: supports
          locator: CBDB:142720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142720）
          source: &a1
            id: s_MmehzZX93GxJjEo1vWTkDQ
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 142720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142720&o=json
            external_identifier: CBDB:142720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_c1T5VNtri2ViZ2tYsji81p
        subject_person_id: p_DXHCabHqiAPVfRY4s5GJCY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 599年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QCNP81xvX9xJLEyVXqwC83
          claim_id: c_c1T5VNtri2ViZ2tYsji81p
          source_id: s_MmehzZX93GxJjEo1vWTkDQ
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
        id: c_zKBHGXcuNAhXGNStmVnppU
        subject_person_id: p_DXHCabHqiAPVfRY4s5GJCY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 638年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MHad9Nvn5MQ6AvpJT18Nn4
          claim_id: c_zKBHGXcuNAhXGNStmVnppU
          source_id: s_MmehzZX93GxJjEo1vWTkDQ
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
        id: c_6VHPu9cbSeoHnUTaLsi5DN
        subject_person_id: p_DXHCabHqiAPVfRY4s5GJCY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sR7dEBFMQFr4WkDoRuRPdU
          claim_id: c_6VHPu9cbSeoHnUTaLsi5DN
          source_id: s_MmehzZX93GxJjEo1vWTkDQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ssJt_E_VfndOIf1Y8oAgqe
        subject_person_id: p_RhB5HQ32Fj1Dq1FEySG5dM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DXHCabHqiAPVfRY4s5GJCY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xdqhyj-zJ34EOGBJKDw2tJ
          claim_id: c_ssJt_E_VfndOIf1Y8oAgqe
          source_id: s_MmehzZX93GxJjEo1vWTkDQ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Chuigong8：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RhB5HQ32Fj1Dq1FEySG5dM
        status: active
        display_name: 王貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬 | accepted |
| birth.date | 599年 | accepted |
| death.date | 638年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RhB5HQ32Fj1Dq1FEySG5dM | 王貴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬（CBDB 142720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142720&o=json)
