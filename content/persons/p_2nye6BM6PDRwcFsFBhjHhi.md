---
schema: wang-person/v1
id: p_2nye6BM6PDRwcFsFBhjHhi
status: active
merged_into: null
display_name: 王喬年
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ygxmiYnrtVijRYrjqQoi7x
        subject_person_id: p_2nye6BM6PDRwcFsFBhjHhi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喬年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JrAM5RETXBHmX9AxYvViTw
          claim_id: c_ygxmiYnrtVijRYrjqQoi7x
          source_id: s_R9ZkNLKEiYYCq9c61QBFJ6
          stance: supports
          locator: CBDB:204111
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204111）
          source: &a1
            id: s_R9ZkNLKEiYYCq9c61QBFJ6
            source_type: api_record
            title: 中国历代人物传记资料库：王喬年（CBDB 204111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204111&o=json
            external_identifier: CBDB:204111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dTfJ3HSq3JFWjV2uncc5NM
        subject_person_id: p_2nye6BM6PDRwcFsFBhjHhi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1525年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dWgyunzcxh7WcxTFT9QjPf
          claim_id: c_dTfJ3HSq3JFWjV2uncc5NM
          source_id: s_R9ZkNLKEiYYCq9c61QBFJ6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_836EYm9jU3Z8t93Xar1W4G
        subject_person_id: p_2nye6BM6PDRwcFsFBhjHhi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JeBm8uxej8KmWmVkYCWmD8
          claim_id: c_836EYm9jU3Z8t93Xar1W4G
          source_id: s_R9ZkNLKEiYYCq9c61QBFJ6
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
        id: c_dTHSMyh8PxVeX8fD0vgzjt
        subject_person_id: p_UnD9iZ6MiH4KnEMHzKtDfC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2nye6BM6PDRwcFsFBhjHhi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XF5rt4C38zqFKWm3e9nCMR
          claim_id: c_dTHSMyh8PxVeX8fD0vgzjt
          source_id: s_Z656JzqQ8FojQ7wiQF4nvM
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百八十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z656JzqQ8FojQ7wiQF4nvM
            source_type: api_record
            title: 中国历代人物传记资料库：王邦憲（CBDB 314564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314564&o=json
            external_identifier: CBDB:314564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UnD9iZ6MiH4KnEMHzKtDfC
        status: active
        display_name: 王邦憲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ybKB612LV8dU5IwwZqqke2
        subject_person_id: p_1z9SjjmStg9myNnfG5GYgP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2nye6BM6PDRwcFsFBhjHhi
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_olhH87El4MOAQ38R3Z76PU
          claim_id: c_ybKB612LV8dU5IwwZqqke2
          source_id: s_tHZJzNegEDE2yTpVeQ4v8J
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百八十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tHZJzNegEDE2yTpVeQ4v8J
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 314563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314563&o=json
            external_identifier: CBDB:314563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1z9SjjmStg9myNnfG5GYgP
        status: active
        display_name: 王輔
        merged_into_person_id: null
    - claim:
        id: c_2cikwp3cmOvzjhIfnI2_c2
        subject_person_id: p_8CRhEiT8Pich4ngDid6FVh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2nye6BM6PDRwcFsFBhjHhi
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RxqVw4q_-E1RPX0EH7N2E9
          claim_id: c_2cikwp3cmOvzjhIfnI2_c2
          source_id: s_RM7sWFPvHdYjzMjTX1kjd7
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百八十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RM7sWFPvHdYjzMjTX1kjd7
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 314561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314561&o=json
            external_identifier: CBDB:314561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8CRhEiT8Pich4ngDid6FVh
        status: active
        display_name: 王仁
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王喬年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王喬年 | accepted |
| birth.date | 1525年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UnD9iZ6MiH4KnEMHzKtDfC | 王邦憲 | accepted |
| ancestors | p_1z9SjjmStg9myNnfG5GYgP | 王輔 | accepted |
| ancestors | p_8CRhEiT8Pich4ngDid6FVh | 王仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邦憲（CBDB 314564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314564&o=json)
- [中国历代人物传记资料库：王輔（CBDB 314563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314563&o=json)
- [中国历代人物传记资料库：王喬年（CBDB 204111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204111&o=json)
- [中国历代人物传记资料库：王仁（CBDB 314561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314561&o=json)
