---
schema: wang-person/v1
id: p_92Q8Er9mM6EGgtSMmLeCqJ
status: active
merged_into: null
display_name: 王家屛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gQFTYE5hCkYdM7726J9T7E
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家屛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JQyRqsz7iD9yiUQEc3qM9X
          claim_id: c_gQFTYE5hCkYdM7726J9T7E
          source_id: s_RZ3fqWGaHLG4UgCtfgP2Lk
          stance: supports
          locator: CBDB:126627
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126627）
          source: &a1
            id: s_RZ3fqWGaHLG4UgCtfgP2Lk
            source_type: api_record
            title: 中国历代人物传记资料库：王家屛（CBDB 126627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126627&o=json
            external_identifier: CBDB:126627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.179Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NQByziVWHJN74bnq4tx4US
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1536年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mNoSCJjRL7KAr6uk4Uh8XY
          claim_id: c_NQByziVWHJN74bnq4tx4US
          source_id: s_RZ3fqWGaHLG4UgCtfgP2Lk
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
        id: c_FgQMMyWkssVNfb5JgiWKPM
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1603年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i8sWtPXnLfCZuNzXSTUTLz
          claim_id: c_FgQMMyWkssVNfb5JgiWKPM
          source_id: s_RZ3fqWGaHLG4UgCtfgP2Lk
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
        id: c_hj34etLaoKjzea1jD1scF2
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
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
        - id: cs_8Uf2pk43S9T1nPx33fzbgG
          claim_id: c_hj34etLaoKjzea1jD1scF2
          source_id: s_RZ3fqWGaHLG4UgCtfgP2Lk
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
        id: c_udLfwxu6waoA5ummIGkrfu
        subject_person_id: p_wJnAf1dPfK6NuX3j1aUKFG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5G1UsT6u6OFHJIgvyRYMrk
          claim_id: c_udLfwxu6waoA5ummIGkrfu
          source_id: s_RZ3fqWGaHLG4UgCtfgP2Lk
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wJnAf1dPfK6NuX3j1aUKFG
        status: active
        display_name: 王宪武
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_DgFygS516dQxQ0vVNWvsb6
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_XviG699Sb6fixCgUv7GBKK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XPXPeZehLWDmnIaPvWeN4e
          claim_id: c_DgFygS516dQxQ0vVNWvsb6
          source_id: s_RZ3fqWGaHLG4UgCtfgP2Lk
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XviG699Sb6fixCgUv7GBKK
        status: active
        display_name: 霍氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_Y3adLCWm94z5SwSwNM6ckW
        subject_person_id: p_JCJBEueLs72MMGKKFXSBqw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E3VIf-OUkYx7AQ6NCz5dwX
          claim_id: c_Y3adLCWm94z5SwSwNM6ckW
          source_id: s_RZ3fqWGaHLG4UgCtfgP2Lk
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JCJBEueLs72MMGKKFXSBqw
        status: active
        display_name: 王缙
        merged_into_person_id: null
    - claim:
        id: c_rz3AG3hLxrsX4Gtu-zIQ6V
        subject_person_id: p_n8gJ8LAH7u4tCjt15ALE93
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BMN9nhrpQ0-W58lq2h4ycy
          claim_id: c_rz3AG3hLxrsX4Gtu-zIQ6V
          source_id: s_RZ3fqWGaHLG4UgCtfgP2Lk
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_n8gJ8LAH7u4tCjt15ALE93
        status: active
        display_name: 王朝用
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王家屛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家屛 | accepted |
| birth.date | 1536年 | accepted |
| death.date | 1603年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wJnAf1dPfK6NuX3j1aUKFG | 王宪武 | accepted |
| spouses | p_XviG699Sb6fixCgUv7GBKK | 霍氏 | accepted |
| ancestors | p_JCJBEueLs72MMGKKFXSBqw | 王缙 | accepted |
| ancestors | p_n8gJ8LAH7u4tCjt15ALE93 | 王朝用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家屛（CBDB 126627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126627&o=json)
