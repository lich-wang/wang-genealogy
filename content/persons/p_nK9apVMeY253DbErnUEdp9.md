---
schema: wang-person/v1
id: p_nK9apVMeY253DbErnUEdp9
status: active
merged_into: null
display_name: 王翼
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AhTiUQLoYpbYUd2VthoHvN
        subject_person_id: p_nK9apVMeY253DbErnUEdp9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oLyfMS1cPpFpU86ZoQKBJ7
          claim_id: c_AhTiUQLoYpbYUd2VthoHvN
          source_id: s_bVmbR8kH1i5NZa5gpCFKZi
          stance: supports
          locator: CBDB:141645
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141645）
          source: &a1
            id: s_bVmbR8kH1i5NZa5gpCFKZi
            source_type: api_record
            title: 中国历代人物传记资料库：王翼（CBDB 141645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141645&o=json
            external_identifier: CBDB:141645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9DsWKHrkACqNL34R6PDDvy
        subject_person_id: p_nK9apVMeY253DbErnUEdp9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 748年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jzQ9fiiFZ1yJXhtq4pZbXu
          claim_id: c_9DsWKHrkACqNL34R6PDDvy
          source_id: s_bVmbR8kH1i5NZa5gpCFKZi
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
        id: c_PP42DGyaLiNfrp8AmurXgR
        subject_person_id: p_nK9apVMeY253DbErnUEdp9
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
        - id: cs_LUjHM1uiJWxH59bjcA2rJf
          claim_id: c_PP42DGyaLiNfrp8AmurXgR
          source_id: s_bVmbR8kH1i5NZa5gpCFKZi
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
        id: c_5ZvX7n5xaZ7qmaXfAnW51v
        subject_person_id: p_nK9apVMeY253DbErnUEdp9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翼（748年—833年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 141645）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XNGg9BYjpcvCyE7FqLRBoR
          claim_id: c_5ZvX7n5xaZ7qmaXfAnW51v
          source_id: s_bVmbR8kH1i5NZa5gpCFKZi
          stance: supports
          locator: CBDB:141645
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_inFvqEL-8NZ6BxwhAugHle
        subject_person_id: p_xz2i3ijCN6yWhdomSwkBZS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nK9apVMeY253DbErnUEdp9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_npJqaXYgsQ5drIOYiKKSbx
          claim_id: c_inFvqEL-8NZ6BxwhAugHle
          source_id: s_bVmbR8kH1i5NZa5gpCFKZi
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 65：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xz2i3ijCN6yWhdomSwkBZS
        status: active
        display_name: 王智溫
        merged_into_person_id: null
  children:
    - claim:
        id: c_m8zvVP-nz_4s8kMA3Puzok
        subject_person_id: p_nK9apVMeY253DbErnUEdp9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LBemnLQC7Me24TEorZJGE6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aRwhoAC6Xbw6_-oFmuCgC8
          claim_id: c_m8zvVP-nz_4s8kMA3Puzok
          source_id: s_bVmbR8kH1i5NZa5gpCFKZi
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 65：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LBemnLQC7Me24TEorZJGE6
        status: active
        display_name: 王仲伸
        merged_into_person_id: null
    - claim:
        id: c_dplgMKXjDTMm38KJPGNntp
        subject_person_id: p_nK9apVMeY253DbErnUEdp9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y1n9ZJ2U1r4W4A8FKLq4u7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0MPeNjI8xF3IHFiHeRG3Ps
          claim_id: c_dplgMKXjDTMm38KJPGNntp
          source_id: s_bVmbR8kH1i5NZa5gpCFKZi
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 65：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Y1n9ZJ2U1r4W4A8FKLq4u7
        status: active
        display_name: 王仲儒
        merged_into_person_id: null
    - claim:
        id: c_dowNncXV_XShaqM8q1uHSG
        subject_person_id: p_nK9apVMeY253DbErnUEdp9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YwiGQqDTRdSkEKV786SaKA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ljCd5XcEQu3NGLkta716LM
          claim_id: c_dowNncXV_XShaqM8q1uHSG
          source_id: s_bVmbR8kH1i5NZa5gpCFKZi
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 65：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YwiGQqDTRdSkEKV786SaKA
        status: active
        display_name: 王仲武
        merged_into_person_id: null
    - claim:
        id: c_ltY7mX_Szm9BK8bixKubWH
        subject_person_id: p_nK9apVMeY253DbErnUEdp9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rLC7PUAc3zy8aqLzbNSQL5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LtJZzsX93Oamje9m_zCrq6
          claim_id: c_ltY7mX_Szm9BK8bixKubWH
          source_id: s_bVmbR8kH1i5NZa5gpCFKZi
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 65：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rLC7PUAc3zy8aqLzbNSQL5
        status: active
        display_name: 王仲連
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_RVkKMkC7lX30yp8lt5F9Wx
        subject_person_id: p_nK9apVMeY253DbErnUEdp9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_EhDqCgMUj2biEy4eEDmUbU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PjfFdkfoG5IJbozMbxljEf
          claim_id: c_RVkKMkC7lX30yp8lt5F9Wx
          source_id: s_kARWmutGnM9iQuTkd-xqZA
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 65：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kARWmutGnM9iQuTkd-xqZA
            source_type: api_record
            title: 中国历代人物传记资料库：高氏(王翼妻)（CBDB 157931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157931&o=json
            external_identifier: CBDB:157931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EhDqCgMUj2biEy4eEDmUbU
        status: active
        display_name: 高氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_XZ1OHylQJv_zAVNlOjPcR7
        subject_person_id: p_JqP7tTBXa3J64HEAAAchh1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nK9apVMeY253DbErnUEdp9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k43Y0ELf4-ahcUR2agehNq
          claim_id: c_XZ1OHylQJv_zAVNlOjPcR7
          source_id: s_bVmbR8kH1i5NZa5gpCFKZi
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 65：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JqP7tTBXa3J64HEAAAchh1
        status: active
        display_name: 王師襲
        merged_into_person_id: null
    - claim:
        id: c_j_8eVJ-y9vnphUrtwKzsM8
        subject_person_id: p_a3b4xpmtfkDqmManPEL8yB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nK9apVMeY253DbErnUEdp9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2HgXBC-phxWL-dP-r4Uswf
          claim_id: c_j_8eVJ-y9vnphUrtwKzsM8
          source_id: s_bVmbR8kH1i5NZa5gpCFKZi
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 65：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_a3b4xpmtfkDqmManPEL8yB
        status: active
        display_name: 王待仙
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王翼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翼 | accepted |
| birth.date | 748年 | accepted |
| death.date | 833年 | accepted |
| bio.summary | 王翼（748年—833年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 141645） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xz2i3ijCN6yWhdomSwkBZS | 王智溫 | accepted |
| children | p_LBemnLQC7Me24TEorZJGE6 | 王仲伸 | accepted |
| children | p_Y1n9ZJ2U1r4W4A8FKLq4u7 | 王仲儒 | accepted |
| children | p_YwiGQqDTRdSkEKV786SaKA | 王仲武 | accepted |
| children | p_rLC7PUAc3zy8aqLzbNSQL5 | 王仲連 | accepted |
| spouses | p_EhDqCgMUj2biEy4eEDmUbU | 高氏 | accepted |
| ancestors | p_JqP7tTBXa3J64HEAAAchh1 | 王師襲 | accepted |
| ancestors | p_a3b4xpmtfkDqmManPEL8yB | 王待仙 | accepted |

## 外部来源

- [中国历代人物传记资料库：高氏(王翼妻)（CBDB 157931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157931&o=json)
- [中国历代人物传记资料库：王翼（CBDB 141645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141645&o=json)
