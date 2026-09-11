---
schema: wang-person/v1
id: p_buHPPD7o3Zg7opBbsnKMQ6
status: active
merged_into: null
display_name: 王公素
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BU9KyNJ5z95uNFQCkbCsL6
        subject_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cAb8xBxAfMGK1wypAF6UWK
          claim_id: c_BU9KyNJ5z95uNFQCkbCsL6
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
          stance: supports
          locator: CBDB:141742
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141742）
          source: &a1
            id: s_996GfbKAQ5DEPwFZuhv8rv
            source_type: api_record
            title: 中国历代人物传记资料库：王公素（CBDB 141742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141742&o=json
            external_identifier: CBDB:141742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bwQJfi3y5pb1ShFs5X4bJD
        subject_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 787年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P3q4keR71bbNFZEyKQ3NTE
          claim_id: c_bwQJfi3y5pb1ShFs5X4bJD
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
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
        id: c_ktCgWDLvrue4DoJ6G4Qjh2
        subject_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1VgnLLgpa9q9htkyAYpdLS
          claim_id: c_ktCgWDLvrue4DoJ6G4Qjh2
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
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
        id: c_FM5HJWXhBdDYkXKcuNNDD1
        subject_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
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
        - id: cs_RNqrGXanqvAbD1vomZ7KhM
          claim_id: c_FM5HJWXhBdDYkXKcuNNDD1
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
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
        id: c_qgpBNeM3BUCg8vQRNGa0rc
        subject_person_id: p_gBZQ9PfF6PdVeXmVgxzFes
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XqI4RAvotPRMpcUNKTvY6w
          claim_id: c_qgpBNeM3BUCg8vQRNGa0rc
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 148：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gBZQ9PfF6PdVeXmVgxzFes
        status: active
        display_name: 王進
        merged_into_person_id: null
  children:
    - claim:
        id: c_Rck6j7rwvm7iT9bGK3t80b
        subject_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mgvYR7QnqLqNgeRoj7P6LC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tHvk5n24lkCkzOlB4mlmuE
          claim_id: c_Rck6j7rwvm7iT9bGK3t80b
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 148：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mgvYR7QnqLqNgeRoj7P6LC
        status: active
        display_name: 王惟實
        merged_into_person_id: null
    - claim:
        id: c_z6sstwPudT3K8REfrcwnsW
        subject_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Qf2G5mNP8vcGWueDU9wCt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8OsBF-SNZ32ezILC-UdNcx
          claim_id: c_z6sstwPudT3K8REfrcwnsW
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 148：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2Qf2G5mNP8vcGWueDU9wCt
        status: active
        display_name: 王惟昌
        merged_into_person_id: null
    - claim:
        id: c_XVbQrKRy4IaftGGIquvgul
        subject_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GzJFJ5xqWWra94Hs5J3DBk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dLIhlZi-HYyN_PAtTbkKU7
          claim_id: c_XVbQrKRy4IaftGGIquvgul
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 148：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GzJFJ5xqWWra94Hs5J3DBk
        status: active
        display_name: 王惟質
        merged_into_person_id: null
    - claim:
        id: c_QMefSgUmg8VETnZZtoc4mS
        subject_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rTKm9gKXpEpEKKBbMQ8SEt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AjH3-jfrTmlDnalXxr7ptI
          claim_id: c_QMefSgUmg8VETnZZtoc4mS
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 148：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rTKm9gKXpEpEKKBbMQ8SEt
        status: active
        display_name: 王惟贊
        merged_into_person_id: null
    - claim:
        id: c_FBAusfwFecKGR321xsvPBS
        subject_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MWs6EEW7FHY4TkKq1iWt4F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CN4ujr-keZ0u5GCkswrtP-
          claim_id: c_FBAusfwFecKGR321xsvPBS
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 148：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MWs6EEW7FHY4TkKq1iWt4F
        status: active
        display_name: 王惟昪
        merged_into_person_id: null
    - claim:
        id: c__iKOhwRYbTTOgjHecyYG2m
        subject_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jk9Z8FdFoJezZyQrk9vAuQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NoWqjdR1wEPtL3PZAo4wRA
          claim_id: c__iKOhwRYbTTOgjHecyYG2m
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 148：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Jk9Z8FdFoJezZyQrk9vAuQ
        status: active
        display_name: 王惟乂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_hotDnTRPO_dSrBfedzKyiy
        subject_person_id: p_H8RkaRsCSo1M7nJtrw5SYf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8KMd_wfA1sA6S7DzhLUm8e
          claim_id: c_hotDnTRPO_dSrBfedzKyiy
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 148：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_H8RkaRsCSo1M7nJtrw5SYf
        status: active
        display_name: 王簡
        merged_into_person_id: null
    - claim:
        id: c_QaXOCj4EOeXX7TWAPxHa-K
        subject_person_id: p_SA68oKcizV46xwsBi5gVeS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_78K-yYp2oo6-QcM31OEFAh
          claim_id: c_QaXOCj4EOeXX7TWAPxHa-K
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 148：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SA68oKcizV46xwsBi5gVeS
        status: active
        display_name: 王瑤
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王公素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公素 | accepted |
| birth.date | 787年 | accepted |
| death.date | 857年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gBZQ9PfF6PdVeXmVgxzFes | 王進 | accepted |
| children | p_mgvYR7QnqLqNgeRoj7P6LC | 王惟實 | accepted |
| children | p_2Qf2G5mNP8vcGWueDU9wCt | 王惟昌 | accepted |
| children | p_GzJFJ5xqWWra94Hs5J3DBk | 王惟質 | accepted |
| children | p_rTKm9gKXpEpEKKBbMQ8SEt | 王惟贊 | accepted |
| children | p_MWs6EEW7FHY4TkKq1iWt4F | 王惟昪 | accepted |
| children | p_Jk9Z8FdFoJezZyQrk9vAuQ | 王惟乂 | accepted |
| ancestors | p_H8RkaRsCSo1M7nJtrw5SYf | 王簡 | accepted |
| ancestors | p_SA68oKcizV46xwsBi5gVeS | 王瑤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公素（CBDB 141742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141742&o=json)
