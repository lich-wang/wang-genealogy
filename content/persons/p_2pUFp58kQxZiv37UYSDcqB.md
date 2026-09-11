---
schema: wang-person/v1
id: p_2pUFp58kQxZiv37UYSDcqB
status: active
merged_into: null
display_name: 王天
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_61kgQrr597NiAuo8jSQB5Q
        subject_person_id: p_2pUFp58kQxZiv37UYSDcqB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9yAQ6QG2HSL5GAhiLwGjgc
          claim_id: c_61kgQrr597NiAuo8jSQB5Q
          source_id: s_EfXWDpLrLMEyYjyZRb9EJ5
          stance: supports
          locator: CBDB:139941
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139941）
          source: &a1
            id: s_EfXWDpLrLMEyYjyZRb9EJ5
            source_type: api_record
            title: 中国历代人物传记资料库：王天（CBDB 139941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139941&o=json
            external_identifier: CBDB:139941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.197Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Ht6ju4nHqN9qsqK2Lu9rBZ
        subject_person_id: p_2pUFp58kQxZiv37UYSDcqB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 623年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DwoLsp59T6BchEC9B7r6nj
          claim_id: c_Ht6ju4nHqN9qsqK2Lu9rBZ
          source_id: s_EfXWDpLrLMEyYjyZRb9EJ5
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
        id: c_1oRNjkN2i3tPhGW9pdP9r6
        subject_person_id: p_2pUFp58kQxZiv37UYSDcqB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 706年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xL4a7WCySJD9S7ua4ikgcQ
          claim_id: c_1oRNjkN2i3tPhGW9pdP9r6
          source_id: s_EfXWDpLrLMEyYjyZRb9EJ5
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
        id: c_yZMQJsUxyKNccGGAfz9V2a
        subject_person_id: p_2pUFp58kQxZiv37UYSDcqB
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
        - id: cs_8aYRBuet31i8C8M1Mu2u6s
          claim_id: c_yZMQJsUxyKNccGGAfz9V2a
          source_id: s_EfXWDpLrLMEyYjyZRb9EJ5
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
        id: c_smUPS_Nid28ARb--7SLMnf
        subject_person_id: p_N6PhY9mfw2dgNWgqVAXnLj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2pUFp58kQxZiv37UYSDcqB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ecCZrimtbA8ByWlkEManum
          claim_id: c_smUPS_Nid28ARb--7SLMnf
          source_id: s_EfXWDpLrLMEyYjyZRb9EJ5
          stance: supports
          locator: 唐代墓誌匯編:二卷，Taiji 5：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_N6PhY9mfw2dgNWgqVAXnLj
        status: active
        display_name: 王君卿
        merged_into_person_id: null
  children:
    - claim:
        id: c_zLSs4xp_6sDG5L051FLfT6
        subject_person_id: p_2pUFp58kQxZiv37UYSDcqB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T6nczdJ6Q6Poy35FebKBVA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tdsc2I44-yfoPukyeqsKEK
          claim_id: c_zLSs4xp_6sDG5L051FLfT6
          source_id: s_EfXWDpLrLMEyYjyZRb9EJ5
          stance: supports
          locator: 唐代墓誌匯編:二卷，Taiji 5：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_T6nczdJ6Q6Poy35FebKBVA
        status: active
        display_name: 王惟儉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_oQUQeFwQaLHCltSx7iGpwc
        subject_person_id: p_2pUFp58kQxZiv37UYSDcqB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_mscZAMy6yLCF29jhsF9xgf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xz1ehuinT1hTlgWZTadMcy
          claim_id: c_oQUQeFwQaLHCltSx7iGpwc
          source_id: s_H-MkJ1dZ-B-P_tWUsm7I6t
          stance: supports
          locator: 唐代墓誌匯編:二卷，Taiji 5：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_H-MkJ1dZ-B-P_tWUsm7I6t
            source_type: api_record
            title: 中国历代人物传记资料库：雍氏(王天妻)（CBDB 150998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150998&o=json
            external_identifier: CBDB:150998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mscZAMy6yLCF29jhsF9xgf
        status: active
        display_name: 雍氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王天

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天 | accepted |
| birth.date | 623年 | accepted |
| death.date | 706年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N6PhY9mfw2dgNWgqVAXnLj | 王君卿 | accepted |
| children | p_T6nczdJ6Q6Poy35FebKBVA | 王惟儉 | accepted |
| spouses | p_mscZAMy6yLCF29jhsF9xgf | 雍氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王天（CBDB 139941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139941&o=json)
- [中国历代人物传记资料库：雍氏(王天妻)（CBDB 150998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150998&o=json)
