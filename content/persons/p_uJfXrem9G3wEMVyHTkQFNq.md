---
schema: wang-person/v1
id: p_uJfXrem9G3wEMVyHTkQFNq
status: active
merged_into: null
display_name: 王怡
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iV6JAmpgt2risVMJM3JsJq
        subject_person_id: p_uJfXrem9G3wEMVyHTkQFNq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dB4RwvPXXeUwbrY4RwQpYt
          claim_id: c_iV6JAmpgt2risVMJM3JsJq
          source_id: s_3GaHS1ECRcHQK9EFZPTU1j
          stance: supports
          locator: CBDB:155509
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（155509）
          source: &a1
            id: s_3GaHS1ECRcHQK9EFZPTU1j
            source_type: api_record
            title: 中国历代人物传记资料库：王怡（CBDB 155509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155509&o=json
            external_identifier: CBDB:155509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DHcyR6aFC8CckFkPs583JA
        subject_person_id: p_uJfXrem9G3wEMVyHTkQFNq
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
        - id: cs_SoJ2QvJ4GNH2fcJ1BRHbqw
          claim_id: c_DHcyR6aFC8CckFkPs583JA
          source_id: s_3GaHS1ECRcHQK9EFZPTU1j
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
        id: c_wM8b1m_1isSsa5MmR4Hhdc
        subject_person_id: p_C7eYfrtD1sG9FF7HN88qPm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uJfXrem9G3wEMVyHTkQFNq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zEaD165AyyVslqVQuam35G
          claim_id: c_wM8b1m_1isSsa5MmR4Hhdc
          source_id: s_y5FDuDfz8uDi72hRpwp643
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_y5FDuDfz8uDi72hRpwp643
            source_type: api_record
            title: 中国历代人物传记资料库：王子真（CBDB 157163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157163&o=json
            external_identifier: CBDB:157163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C7eYfrtD1sG9FF7HN88qPm
        status: active
        display_name: 王子真
        merged_into_person_id: null
  children:
    - claim:
        id: c_EMPwVATmXJM5jR1WOWLfz7
        subject_person_id: p_uJfXrem9G3wEMVyHTkQFNq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MvDkTEyoxt1BiLsscV6A64
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bi8Sgi5cJyPdprGZTlYOg7
          claim_id: c_EMPwVATmXJM5jR1WOWLfz7
          source_id: s_JP8PybnUAEo8FTevLB34jW
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JP8PybnUAEo8FTevLB34jW
            source_type: api_record
            title: 中国历代人物传记资料库：王毗（CBDB 155510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155510&o=json
            external_identifier: CBDB:155510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_MvDkTEyoxt1BiLsscV6A64
        status: active
        display_name: 王毗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王怡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王怡 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_C7eYfrtD1sG9FF7HN88qPm | 王子真 | accepted |
| children | p_MvDkTEyoxt1BiLsscV6A64 | 王毗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王毗（CBDB 155510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155510&o=json)
- [中国历代人物传记资料库：王怡（CBDB 155509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155509&o=json)
- [中国历代人物传记资料库：王子真（CBDB 157163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157163&o=json)
