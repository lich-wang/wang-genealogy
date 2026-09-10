---
schema: wang-person/v1
id: p_1CVjWfj6Z4oLLDvpZ3BxLu
status: active
merged_into: null
display_name: 王元會
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dMqj8xWUpcu5D4jy8P9oap
        subject_person_id: p_1CVjWfj6Z4oLLDvpZ3BxLu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4d8XHPcntLYPvrngdYUj1G
          claim_id: c_dMqj8xWUpcu5D4jy8P9oap
          source_id: s_JidsmKBhW2oNyBdGpKxpkj
          stance: supports
          locator: CBDB:190307
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190307）
          source: &a1
            id: s_JidsmKBhW2oNyBdGpKxpkj
            source_type: api_record
            title: 中国历代人物传记资料库：王元會（CBDB 190307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190307&o=json
            external_identifier: CBDB:190307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.281Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_N1HoiQEvPzoVa7bP7iA6mz
        subject_person_id: p_1CVjWfj6Z4oLLDvpZ3BxLu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 869年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7UENrJ4Xi1T93wMg9kQ71L
          claim_id: c_N1HoiQEvPzoVa7bP7iA6mz
          source_id: s_JidsmKBhW2oNyBdGpKxpkj
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
        id: c_CuDTKP6uT55n7aUmB713JL
        subject_person_id: p_1CVjWfj6Z4oLLDvpZ3BxLu
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
        - id: cs_99ftCGuchvWEPjYSqfTr4p
          claim_id: c_CuDTKP6uT55n7aUmB713JL
          source_id: s_JidsmKBhW2oNyBdGpKxpkj
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
        id: c_N2fRUmT8U5qp4pI3ZupT4c
        subject_person_id: p_iExwTUSihbBvbcDkEjipqk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1CVjWfj6Z4oLLDvpZ3BxLu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p7K1svdua5gnuyV2M2UAf2
          claim_id: c_N2fRUmT8U5qp4pI3ZupT4c
          source_id: s_JidsmKBhW2oNyBdGpKxpkj
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 28647：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iExwTUSihbBvbcDkEjipqk
        status: active
        display_name: 王珍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元會 | accepted |
| death.date | 869年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iExwTUSihbBvbcDkEjipqk | 王珍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元會（CBDB 190307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190307&o=json)
