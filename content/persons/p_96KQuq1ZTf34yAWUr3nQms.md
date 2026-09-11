---
schema: wang-person/v1
id: p_96KQuq1ZTf34yAWUr3nQms
status: active
merged_into: null
display_name: 王思訥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2FTN5nQEoij7iqwoCiNQd7
        subject_person_id: p_96KQuq1ZTf34yAWUr3nQms
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思訥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BGtXdYoYVj3LUoHfFdT3aL
          claim_id: c_2FTN5nQEoij7iqwoCiNQd7
          source_id: s_qyXWu18LpCH4nNUUHkbWpk
          stance: supports
          locator: CBDB:139983
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139983）
          source: &a1
            id: s_qyXWu18LpCH4nNUUHkbWpk
            source_type: api_record
            title: 中国历代人物传记资料库：王思訥（CBDB 139983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139983&o=json
            external_identifier: CBDB:139983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_tKRym76sGCjB58AqdD5rEd
        subject_person_id: p_96KQuq1ZTf34yAWUr3nQms
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 695年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TGeh2MaPodNpo7LNxD8jqQ
          claim_id: c_tKRym76sGCjB58AqdD5rEd
          source_id: s_qyXWu18LpCH4nNUUHkbWpk
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
        id: c_ovkgamBdMCEQ6BXwsuucS6
        subject_person_id: p_96KQuq1ZTf34yAWUr3nQms
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思訥（卒于695年），唐人物。籍贯太原，曾任文林郎、治中、檢校果毅。（中国历代人物传记资料库 CBDB 139983）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sa7zHbz5kdUXsIg61Y9hRA
          claim_id: c_ovkgamBdMCEQ6BXwsuucS6
          source_id: s_qyXWu18LpCH4nNUUHkbWpk
          stance: supports
          locator: CBDB:139983
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4pjvCUx4iXVNp5bYgEMKG6
        subject_person_id: p_c4R798ngEpyNwG9UaAoSHg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_96KQuq1ZTf34yAWUr3nQms
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SJRiM2w_5PRcG2a9FtGsNQ
          claim_id: c_4pjvCUx4iXVNp5bYgEMKG6
          source_id: s_qyXWu18LpCH4nNUUHkbWpk
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tiancewansui 6：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_c4R798ngEpyNwG9UaAoSHg
        status: active
        display_name: 王本
        merged_into_person_id: null
  children:
    - claim:
        id: c_q3_KSzYz81XLWbkAqv2tGW
        subject_person_id: p_96KQuq1ZTf34yAWUr3nQms
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SLR3RXBx2oCuYBB1Jap45C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RaUuwJ2WnoAekuOOhYBK7Y
          claim_id: c_q3_KSzYz81XLWbkAqv2tGW
          source_id: s_qyXWu18LpCH4nNUUHkbWpk
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tiancewansui 6：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SLR3RXBx2oCuYBB1Jap45C
        status: active
        display_name: 王庭芝
        merged_into_person_id: null
    - claim:
        id: c_ywE0IdC3u0I7j7bWQfCaDf
        subject_person_id: p_96KQuq1ZTf34yAWUr3nQms
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RVRNrX9rKNd1gaaY5iE462
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pIavnUzMS9krLm5xcTftjD
          claim_id: c_ywE0IdC3u0I7j7bWQfCaDf
          source_id: s_qyXWu18LpCH4nNUUHkbWpk
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tiancewansui 6：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RVRNrX9rKNd1gaaY5iE462
        status: active
        display_name: 王庭訓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Quh7SQE7TjiLIYYKMPEtlo
        subject_person_id: p_96KQuq1ZTf34yAWUr3nQms
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_kCvdkCev6MXX2UUhu4oAwE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jAxI5IFbe7szBm7KT3hXuV
          claim_id: c_Quh7SQE7TjiLIYYKMPEtlo
          source_id: s_LmNy77ur_R5NGdbfm0VdVt
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tiancewansui 6：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LmNy77ur_R5NGdbfm0VdVt
            source_type: api_record
            title: 中国历代人物传记资料库：乙婁氏(王思訥妻)（CBDB 149838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149838&o=json
            external_identifier: CBDB:149838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kCvdkCev6MXX2UUhu4oAwE
        status: active
        display_name: 乙婁氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王思訥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思訥 | accepted |
| death.date | 695年 | accepted |
| bio.summary | 王思訥（卒于695年），唐人物。籍贯太原，曾任文林郎、治中、檢校果毅。（中国历代人物传记资料库 CBDB 139983） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_c4R798ngEpyNwG9UaAoSHg | 王本 | accepted |
| children | p_SLR3RXBx2oCuYBB1Jap45C | 王庭芝 | accepted |
| children | p_RVRNrX9rKNd1gaaY5iE462 | 王庭訓 | accepted |
| spouses | p_kCvdkCev6MXX2UUhu4oAwE | 乙婁氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思訥（CBDB 139983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139983&o=json)
- [中国历代人物传记资料库：乙婁氏(王思訥妻)（CBDB 149838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149838&o=json)
