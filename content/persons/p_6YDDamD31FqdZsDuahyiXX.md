---
schema: wang-person/v1
id: p_6YDDamD31FqdZsDuahyiXX
status: active
merged_into: null
display_name: 王恕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y72Nz5f6EwuXBgEZG1MHpj
        subject_person_id: p_6YDDamD31FqdZsDuahyiXX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cXKnypE22mcR71F1QsYc7B
          claim_id: c_Y72Nz5f6EwuXBgEZG1MHpj
          source_id: s_mdsYqnaUWb8rvkx4qY5hGx
          stance: supports
          locator: CBDB:145608
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145608）
          source: &a1
            id: s_mdsYqnaUWb8rvkx4qY5hGx
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 145608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145608&o=json
            external_identifier: CBDB:145608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.684Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_95XwMTB98Kq7GLitP5XUAP
        subject_person_id: p_6YDDamD31FqdZsDuahyiXX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 723年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xhf7HgEWq3uRYhTjJf3zN5
          claim_id: c_95XwMTB98Kq7GLitP5XUAP
          source_id: s_mdsYqnaUWb8rvkx4qY5hGx
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
        id: c_Ya3WTmCht4gBCcf7LYZ2i6
        subject_person_id: p_6YDDamD31FqdZsDuahyiXX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 784年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VvQ6QpN6tBSh8HH6g1gdHv
          claim_id: c_Ya3WTmCht4gBCcf7LYZ2i6
          source_id: s_mdsYqnaUWb8rvkx4qY5hGx
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
        id: c_5oaQuyYN4cJ23LZ4xT3j8Y
        subject_person_id: p_6YDDamD31FqdZsDuahyiXX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕（723年—784年），唐人物。籍贯富平，曾任倉曹參軍。（中国历代人物传记资料库 CBDB 145608）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j2CIuOA9u2iP7Zm_n8deSq
          claim_id: c_5oaQuyYN4cJ23LZ4xT3j8Y
          source_id: s_mdsYqnaUWb8rvkx4qY5hGx
          stance: supports
          locator: CBDB:145608
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f2qoN5eOUeWPjPMjS1Vaq1
        subject_person_id: p_ABhP9dLJkoCKUQ61Qu5HUw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6YDDamD31FqdZsDuahyiXX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XSj6GBFjPBumSlK4MHA9Qj
          claim_id: c_f2qoN5eOUeWPjPMjS1Vaq1
          source_id: s_mdsYqnaUWb8rvkx4qY5hGx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ABhP9dLJkoCKUQ61Qu5HUw
        status: active
        display_name: 王昪
        merged_into_person_id: null
  children:
    - claim:
        id: c_qc0G9b0U9hdcctYO7sX_08
        subject_person_id: p_6YDDamD31FqdZsDuahyiXX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6RPHj2j4cH1L4YTjuMhCpn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j9ya77Tohvpr9ZTIuXQ7Hv
          claim_id: c_qc0G9b0U9hdcctYO7sX_08
          source_id: s_QZUQfDNG45gtkNvmB8J354
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QZUQfDNG45gtkNvmB8J354
            source_type: api_record
            title: 中国历代人物传记资料库：王起（CBDB 92061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92061&o=json
            external_identifier: CBDB:92061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.110Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6RPHj2j4cH1L4YTjuMhCpn
        status: active
        display_name: 王起
        merged_into_person_id: null
    - claim:
        id: c_0fCIyzTTzB13jax4fu3kLQ
        subject_person_id: p_6YDDamD31FqdZsDuahyiXX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UkukK9jtGHA5Nb8R5pgnpm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SZ8HnIfaoEpJEuN_g4KCSl
          claim_id: c_0fCIyzTTzB13jax4fu3kLQ
          source_id: s_mdsYqnaUWb8rvkx4qY5hGx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UkukK9jtGHA5Nb8R5pgnpm
        status: active
        display_name: 王播
        merged_into_person_id: null
    - claim:
        id: c_VWwXM_N-A7Ay4cjWAx7CSJ
        subject_person_id: p_6YDDamD31FqdZsDuahyiXX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NY9FvB3yAdnE8DMFcVHXxx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O52vG0vxG6OvbhRW6FYPN0
          claim_id: c_VWwXM_N-A7Ay4cjWAx7CSJ
          source_id: s_mdsYqnaUWb8rvkx4qY5hGx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NY9FvB3yAdnE8DMFcVHXxx
        status: active
        display_name: 王炎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恕 | accepted |
| birth.date | 723年 | accepted |
| death.date | 784年 | accepted |
| bio.summary | 王恕（723年—784年），唐人物。籍贯富平，曾任倉曹參軍。（中国历代人物传记资料库 CBDB 145608） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ABhP9dLJkoCKUQ61Qu5HUw | 王昪 | accepted |
| children | p_6RPHj2j4cH1L4YTjuMhCpn | 王起 | accepted |
| children | p_UkukK9jtGHA5Nb8R5pgnpm | 王播 | accepted |
| children | p_NY9FvB3yAdnE8DMFcVHXxx | 王炎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王起（CBDB 92061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92061&o=json)
- [中国历代人物传记资料库：王恕（CBDB 145608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145608&o=json)
