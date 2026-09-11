---
schema: wang-person/v1
id: p_3Q3HvcLsmxqfDq9R1nBQXi
status: active
merged_into: null
display_name: 王振
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RSAjwJYBoAQW4qT7gbZanm
        subject_person_id: p_3Q3HvcLsmxqfDq9R1nBQXi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xtBE23LxP7HKerJA1V9cPE
          claim_id: c_RSAjwJYBoAQW4qT7gbZanm
          source_id: s_Bi4MKHXFWwTnY4wZFRhfrS
          stance: supports
          locator: CBDB:141655
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141655）
          source: &a1
            id: s_Bi4MKHXFWwTnY4wZFRhfrS
            source_type: api_record
            title: 中国历代人物传记资料库：王振（CBDB 141655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141655&o=json
            external_identifier: CBDB:141655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QWbey5LEC5igXyoGXJGTU9
        subject_person_id: p_3Q3HvcLsmxqfDq9R1nBQXi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 768年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SAtDLzL8hrMEJ6hFmYLhsn
          claim_id: c_QWbey5LEC5igXyoGXJGTU9
          source_id: s_Bi4MKHXFWwTnY4wZFRhfrS
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
        id: c_DyWHBh57eQX6rPQNXY9maS
        subject_person_id: p_3Q3HvcLsmxqfDq9R1nBQXi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 833年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qAmyd8dT6pz2uLTWuJLMNx
          claim_id: c_DyWHBh57eQX6rPQNXY9maS
          source_id: s_Bi4MKHXFWwTnY4wZFRhfrS
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
        id: c_W7hDsEDYQ8mEzUDZYEoR8g
        subject_person_id: p_3Q3HvcLsmxqfDq9R1nBQXi
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
        - id: cs_TYBtMs2RTBLSemNKMie8Wp
          claim_id: c_W7hDsEDYQ8mEzUDZYEoR8g
          source_id: s_Bi4MKHXFWwTnY4wZFRhfrS
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
        id: c_rg_HD3o5zPDd7eGEUp6_24
        subject_person_id: p_8UyANM2GBXjr9jxhXoQcrc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3Q3HvcLsmxqfDq9R1nBQXi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dqQLWjppSTkoFDA3lNDdz-
          claim_id: c_rg_HD3o5zPDd7eGEUp6_24
          source_id: s_Bi4MKHXFWwTnY4wZFRhfrS
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 75：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8UyANM2GBXjr9jxhXoQcrc
        status: active
        display_name: 王陵
        merged_into_person_id: null
  children:
    - claim:
        id: c_4dDFuyFllut9Qup9YbzDo4
        subject_person_id: p_3Q3HvcLsmxqfDq9R1nBQXi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j5mqwaCp9Qo2k1UFKbqGgU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ClEw1VUzGqON98FpZ1NOyK
          claim_id: c_4dDFuyFllut9Qup9YbzDo4
          source_id: s_Bi4MKHXFWwTnY4wZFRhfrS
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_j5mqwaCp9Qo2k1UFKbqGgU
        status: active
        display_name: 王師宗
        merged_into_person_id: null
    - claim:
        id: c_KcUtFnTrHv6h-8cAsW-yiL
        subject_person_id: p_3Q3HvcLsmxqfDq9R1nBQXi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dsXeCdixBd7wnFMniHFZso
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LNrfwuM2avqknCKpAxIifx
          claim_id: c_KcUtFnTrHv6h-8cAsW-yiL
          source_id: s_Bi4MKHXFWwTnY4wZFRhfrS
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dsXeCdixBd7wnFMniHFZso
        status: active
        display_name: 王師度
        merged_into_person_id: null
    - claim:
        id: c_rsxLfcEbFCrJByLxpDxGJ2
        subject_person_id: p_3Q3HvcLsmxqfDq9R1nBQXi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gwjvmcHwrpEP7ryHpxu7qQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qYOnnDv62yGdQljL9Vvkcg
          claim_id: c_rsxLfcEbFCrJByLxpDxGJ2
          source_id: s_Bi4MKHXFWwTnY4wZFRhfrS
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gwjvmcHwrpEP7ryHpxu7qQ
        status: active
        display_name: 王師德
        merged_into_person_id: null
    - claim:
        id: c_YbrXzU0q9Y9msvktoUfCL8
        subject_person_id: p_3Q3HvcLsmxqfDq9R1nBQXi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xCrY66mWsiGhokBBhC5UHk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bZWUWKPNjpXgUQ_z5c_pkb
          claim_id: c_YbrXzU0q9Y9msvktoUfCL8
          source_id: s_Bi4MKHXFWwTnY4wZFRhfrS
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xCrY66mWsiGhokBBhC5UHk
        status: active
        display_name: 王師禮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_kvEYwmGVY9gGPGz6Tb0E2E
        subject_person_id: p_3Q3HvcLsmxqfDq9R1nBQXi
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_dD9CHA7r5W52krGSH3kiYD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lRGACoecQqssBHLhOAi9R5
          claim_id: c_kvEYwmGVY9gGPGz6Tb0E2E
          source_id: s_f4nYB7roJ-4zRGp9-F9FG2
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 75：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_f4nYB7roJ-4zRGp9-F9FG2
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王振妻)（CBDB 157990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157990&o=json
            external_identifier: CBDB:157990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dD9CHA7r5W52krGSH3kiYD
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王振

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振 | accepted |
| birth.date | 768年 | accepted |
| death.date | 833年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8UyANM2GBXjr9jxhXoQcrc | 王陵 | accepted |
| children | p_j5mqwaCp9Qo2k1UFKbqGgU | 王師宗 | accepted |
| children | p_dsXeCdixBd7wnFMniHFZso | 王師度 | accepted |
| children | p_gwjvmcHwrpEP7ryHpxu7qQ | 王師德 | accepted |
| children | p_xCrY66mWsiGhokBBhC5UHk | 王師禮 | accepted |
| spouses | p_dD9CHA7r5W52krGSH3kiYD | 張氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王振（CBDB 141655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141655&o=json)
- [中国历代人物传记资料库：張氏(王振妻)（CBDB 157990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157990&o=json)
