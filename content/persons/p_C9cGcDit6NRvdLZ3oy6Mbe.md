---
schema: wang-person/v1
id: p_C9cGcDit6NRvdLZ3oy6Mbe
status: active
merged_into: null
display_name: 王一治
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BjeRV96HfJYuGyiLFJFW82
        subject_person_id: p_C9cGcDit6NRvdLZ3oy6Mbe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LFZknJJspFx2K4cSBhwzvH
          claim_id: c_BjeRV96HfJYuGyiLFJFW82
          source_id: s_ojc1Nx2sKvUhzNK6QBShJA
          stance: supports
          locator: CBDB:205461
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205461）
          source: &a1
            id: s_ojc1Nx2sKvUhzNK6QBShJA
            source_type: api_record
            title: 中国历代人物传记资料库：王一治（CBDB 205461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205461&o=json
            external_identifier: CBDB:205461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.862Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xVCgvFF2moBHYJJe3YfHZW
        subject_person_id: p_C9cGcDit6NRvdLZ3oy6Mbe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1517年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UrXQcoAWdKUx2pR6un4Jc6
          claim_id: c_xVCgvFF2moBHYJJe3YfHZW
          source_id: s_ojc1Nx2sKvUhzNK6QBShJA
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
        id: c_m9255mPJtLhowAtKBYHKJi
        subject_person_id: p_C9cGcDit6NRvdLZ3oy6Mbe
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
        - id: cs_1qX8E9AAVviSLKsW1GdC62
          claim_id: c_m9255mPJtLhowAtKBYHKJi
          source_id: s_ojc1Nx2sKvUhzNK6QBShJA
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
        id: c_oG59-G_6yAb8_be1WkHeMg
        subject_person_id: p_sMgCZ6QJhNBHyTJLQw3P1S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C9cGcDit6NRvdLZ3oy6Mbe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SI5tQ8vLfNYf1i3zcfiIeh
          claim_id: c_oG59-G_6yAb8_be1WkHeMg
          source_id: s_ojc1Nx2sKvUhzNK6QBShJA
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第三百一十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sMgCZ6QJhNBHyTJLQw3P1S
        status: active
        display_name: 王朝聘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_7YDpqlfXv1jUOVD7htabvC
        subject_person_id: p_C9cGcDit6NRvdLZ3oy6Mbe
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Q4gKYhbuyH9T6X1bHC7nXA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ew5s0JO6VqMZ19dMAExvy3
          claim_id: c_7YDpqlfXv1jUOVD7htabvC
          source_id: s_LfIwjZ59tiZBVdiQjmGWnH
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第三百一十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LfIwjZ59tiZBVdiQjmGWnH
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王一治妻)（CBDB 333528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333528&o=json
            external_identifier: CBDB:333528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Q4gKYhbuyH9T6X1bHC7nXA
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_7_uj86wXDp55zfExW_vbvn
        subject_person_id: p_Fv6Y9VHXqQMoiEDU1qENe6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_C9cGcDit6NRvdLZ3oy6Mbe
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T96D3iBAKlKjUMeIfvkwgv
          claim_id: c_7_uj86wXDp55zfExW_vbvn
          source_id: s_ojc1Nx2sKvUhzNK6QBShJA
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第三百一十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Fv6Y9VHXqQMoiEDU1qENe6
        status: active
        display_name: 王清
        merged_into_person_id: null
    - claim:
        id: c_uIiN07pXJzhJrrqT4-r88I
        subject_person_id: p_eTRLQJg6viP8NBivGDaNPo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_C9cGcDit6NRvdLZ3oy6Mbe
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wFLoh_Ez9zBc2rsYV8JBfn
          claim_id: c_uIiN07pXJzhJrrqT4-r88I
          source_id: s_ojc1Nx2sKvUhzNK6QBShJA
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第三百一十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eTRLQJg6viP8NBivGDaNPo
        status: active
        display_name: 王用
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王一治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一治 | accepted |
| birth.date | 1517年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sMgCZ6QJhNBHyTJLQw3P1S | 王朝聘 | accepted |
| spouses | p_Q4gKYhbuyH9T6X1bHC7nXA | 李氏 | accepted |
| ancestors | p_Fv6Y9VHXqQMoiEDU1qENe6 | 王清 | accepted |
| ancestors | p_eTRLQJg6viP8NBivGDaNPo | 王用 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王一治妻)（CBDB 333528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333528&o=json)
- [中国历代人物传记资料库：王一治（CBDB 205461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205461&o=json)
