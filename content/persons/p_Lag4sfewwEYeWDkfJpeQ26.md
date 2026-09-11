---
schema: wang-person/v1
id: p_Lag4sfewwEYeWDkfJpeQ26
status: active
merged_into: null
display_name: 王廷槐
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U5MdzJHhpLEcyL9FpmKDLi
        subject_person_id: p_Lag4sfewwEYeWDkfJpeQ26
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W1JxmDRVKdEaaf969g4uEd
          claim_id: c_U5MdzJHhpLEcyL9FpmKDLi
          source_id: s_m4J6mUCHHiniUJRgqG5mS4
          stance: supports
          locator: CBDB:703784
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703784）
          source: &a1
            id: s_m4J6mUCHHiniUJRgqG5mS4
            source_type: api_record
            title: 中国历代人物传记资料库：王廷槐（CBDB 703784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703784&o=json
            external_identifier: CBDB:703784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9iXNCK9DgeY8bkBj1ykq4K
        subject_person_id: p_Lag4sfewwEYeWDkfJpeQ26
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5smUpgjnEmnFoajWip9y1R
          claim_id: c_9iXNCK9DgeY8bkBj1ykq4K
          source_id: s_m4J6mUCHHiniUJRgqG5mS4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6Fj16txCxsSC3q40Nknmn1
        subject_person_id: p_Lag4sfewwEYeWDkfJpeQ26
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sgFwSYG2RsvjHFjEuyLwo4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_heYntW0MOmQEaqIn8KbAhE
          claim_id: c_6Fj16txCxsSC3q40Nknmn1
          source_id: s_m4J6mUCHHiniUJRgqG5mS4
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160984：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sgFwSYG2RsvjHFjEuyLwo4
        status: active
        display_name: 王煜文
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_dsM74jlk53AWe_RmCKoe1E
        subject_person_id: p_Lag4sfewwEYeWDkfJpeQ26
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8uNUQvi293HuAyjPDSunag
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6943FBaylj8RyDkdZ_itrz
          claim_id: c_dsM74jlk53AWe_RmCKoe1E
          source_id: s_QztKYy3xASZdxQsrCDfZS8
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160984：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QztKYy3xASZdxQsrCDfZS8
            source_type: api_record
            title: 中国历代人物传记资料库：王應超（CBDB 551389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551389&o=json
            external_identifier: CBDB:551389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8uNUQvi293HuAyjPDSunag
        status: active
        display_name: 王應超
        merged_into_person_id: null
    - claim:
        id: c_GstSo3gCnnN3f8JDYYCm_q
        subject_person_id: p_Lag4sfewwEYeWDkfJpeQ26
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eab83fhKiYdmkqRbFKa9Kk
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fIPnJtZ6lJcb0xGr_Kv5vR
          claim_id: c_GstSo3gCnnN3f8JDYYCm_q
          source_id: s_VQuitjz7w9KkjRgmPHWUPa
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160984：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VQuitjz7w9KkjRgmPHWUPa
            source_type: api_record
            title: 中国历代人物传记资料库：王應科（CBDB 551388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551388&o=json
            external_identifier: CBDB:551388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eab83fhKiYdmkqRbFKa9Kk
        status: active
        display_name: 王應科
        merged_into_person_id: null
    - claim:
        id: c_e54OEEwl_9HObLbttdH8JB
        subject_person_id: p_Lag4sfewwEYeWDkfJpeQ26
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MeL4Zz5JgqsPqBgfGWaL7k
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1SuDBwwYqowQHlGl2dr_Rx
          claim_id: c_e54OEEwl_9HObLbttdH8JB
          source_id: s_m4J6mUCHHiniUJRgqG5mS4
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160984：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MeL4Zz5JgqsPqBgfGWaL7k
        status: active
        display_name: 王應瑜
        merged_into_person_id: null
  other: []
---

# 王廷槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷槐 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_sgFwSYG2RsvjHFjEuyLwo4 | 王煜文 | accepted |
| descendants | p_8uNUQvi293HuAyjPDSunag | 王應超 | accepted |
| descendants | p_eab83fhKiYdmkqRbFKa9Kk | 王應科 | accepted |
| descendants | p_MeL4Zz5JgqsPqBgfGWaL7k | 王應瑜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷槐（CBDB 703784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703784&o=json)
- [中国历代人物传记资料库：王應超（CBDB 551389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551389&o=json)
- [中国历代人物传记资料库：王應科（CBDB 551388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551388&o=json)
