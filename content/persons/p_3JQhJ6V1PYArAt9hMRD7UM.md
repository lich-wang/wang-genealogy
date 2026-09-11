---
schema: wang-person/v1
id: p_3JQhJ6V1PYArAt9hMRD7UM
status: active
merged_into: null
display_name: 王鍊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U9aGZuWs1RTDUFYbVFXE1B
        subject_person_id: p_3JQhJ6V1PYArAt9hMRD7UM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_erEU4u9J51ZzZUU8HVaPRi
          claim_id: c_U9aGZuWs1RTDUFYbVFXE1B
          source_id: s_9cH4Wz7cVkGPVnRJQsf5ei
          stance: supports
          locator: CBDB:145376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145376）
          source: &a1
            id: s_9cH4Wz7cVkGPVnRJQsf5ei
            source_type: api_record
            title: 中国历代人物传记资料库：王鍊（CBDB 145376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145376&o=json
            external_identifier: CBDB:145376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.669Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_J1bNtpjB1JpnT1R7V8F4k3
        subject_person_id: p_3JQhJ6V1PYArAt9hMRD7UM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 747年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gkv7ptjeyc1cuiJ4LYB34L
          claim_id: c_J1bNtpjB1JpnT1R7V8F4k3
          source_id: s_9cH4Wz7cVkGPVnRJQsf5ei
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
        id: c_ZnKMw6GadLf1o1h52VHg1V
        subject_person_id: p_3JQhJ6V1PYArAt9hMRD7UM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 801年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ur4L4qnTr9NQWtajC1toLM
          claim_id: c_ZnKMw6GadLf1o1h52VHg1V
          source_id: s_9cH4Wz7cVkGPVnRJQsf5ei
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
        id: c_zF26h3MS7wZAwXWwA48Ax4
        subject_person_id: p_3JQhJ6V1PYArAt9hMRD7UM
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
        - id: cs_7RM3WY3y8guVMCvm9ibiVC
          claim_id: c_zF26h3MS7wZAwXWwA48Ax4
          source_id: s_9cH4Wz7cVkGPVnRJQsf5ei
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
        id: c_L3Bmhab-YsAxmoN0Q1_dpc
        subject_person_id: p_3sZPWogK9QRQPhpNWt3jQB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3JQhJ6V1PYArAt9hMRD7UM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E51HxyG3cYQl-UhmmQsCAt
          claim_id: c_L3Bmhab-YsAxmoN0Q1_dpc
          source_id: s_9cH4Wz7cVkGPVnRJQsf5ei
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3sZPWogK9QRQPhpNWt3jQB
        status: active
        display_name: 王穎
        merged_into_person_id: null
  children:
    - claim:
        id: c_hk4BHK6lST4mDMtdoQrmdJ
        subject_person_id: p_3JQhJ6V1PYArAt9hMRD7UM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_roxoRSVD56KUF4GGHzN446
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HXFAl6DFRpKX3CLQN2JFGi
          claim_id: c_hk4BHK6lST4mDMtdoQrmdJ
          source_id: s_9cH4Wz7cVkGPVnRJQsf5ei
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_roxoRSVD56KUF4GGHzN446
        status: active
        display_name: 王仲言
        merged_into_person_id: null
    - claim:
        id: c_mGrFK6Qts53mfk8wQy3KBQ
        subject_person_id: p_3JQhJ6V1PYArAt9hMRD7UM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z1gwfCLwJCD1A14uZpgWBV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x5PMeSnIAFZ69wgW9MiLon
          claim_id: c_mGrFK6Qts53mfk8wQy3KBQ
          source_id: s_9cH4Wz7cVkGPVnRJQsf5ei
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_z1gwfCLwJCD1A14uZpgWBV
        status: active
        display_name: 王仲武
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_BUbnmi20O7DWEnQ0NMkKwg
        subject_person_id: p_3JQhJ6V1PYArAt9hMRD7UM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_C26pFhNM5tfh1M49m56p9M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OjwuSo8lis1JhZ8dmUakYB
          claim_id: c_BUbnmi20O7DWEnQ0NMkKwg
          source_id: s_kNzGvRWzofYxaGhmXXwvTO
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kNzGvRWzofYxaGhmXXwvTO
            source_type: api_record
            title: 中国历代人物传记资料库：李洞真（CBDB 145145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145145&o=json
            external_identifier: CBDB:145145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C26pFhNM5tfh1M49m56p9M
        status: active
        display_name: 李洞真
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王鍊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍊 | accepted |
| birth.date | 747年 | accepted |
| death.date | 801年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3sZPWogK9QRQPhpNWt3jQB | 王穎 | accepted |
| children | p_roxoRSVD56KUF4GGHzN446 | 王仲言 | accepted |
| children | p_z1gwfCLwJCD1A14uZpgWBV | 王仲武 | accepted |
| spouses | p_C26pFhNM5tfh1M49m56p9M | 李洞真 | accepted |

## 外部来源

- [中国历代人物传记资料库：李洞真（CBDB 145145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145145&o=json)
- [中国历代人物传记资料库：王鍊（CBDB 145376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145376&o=json)
