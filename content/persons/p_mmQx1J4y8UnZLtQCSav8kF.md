---
schema: wang-person/v1
id: p_mmQx1J4y8UnZLtQCSav8kF
status: active
merged_into: null
display_name: 王倫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9UD4tt1G88d5Q6L9gWa8Mh
        subject_person_id: p_mmQx1J4y8UnZLtQCSav8kF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LEK9M8XvWWgJT15MAoQ3qE
          claim_id: c_9UD4tt1G88d5Q6L9gWa8Mh
          source_id: s_AWpVt5TuARyLFkFVd5Nwxn
          stance: supports
          locator: CBDB:167849
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（167849）
          source: &a1
            id: s_AWpVt5TuARyLFkFVd5Nwxn
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 167849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167849&o=json
            external_identifier: CBDB:167849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.997Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9s81iZv19Y51LBUJGh3GoZ
        subject_person_id: p_mmQx1J4y8UnZLtQCSav8kF
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
        - id: cs_QNo7pPxwYCqAkKRyad2KQw
          claim_id: c_9s81iZv19Y51LBUJGh3GoZ
          source_id: s_AWpVt5TuARyLFkFVd5Nwxn
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
        id: c_iZBTetvvNi4fZL6mGItOR8
        subject_person_id: p_8GNjf5izAa158YnKAGoxLG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mmQx1J4y8UnZLtQCSav8kF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IBPyFlUSzKla4kex7qHbmy
          claim_id: c_iZBTetvvNi4fZL6mGItOR8
          source_id: s_ARcm6C9TjKCnfPiPEkDJr3
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ARcm6C9TjKCnfPiPEkDJr3
            source_type: api_record
            title: 中国历代人物传记资料库：王閏（CBDB 167848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167848&o=json
            external_identifier: CBDB:167848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.996Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8GNjf5izAa158YnKAGoxLG
        status: active
        display_name: 王閏
        merged_into_person_id: null
  children:
    - claim:
        id: c_WGYm-amp-USu42OHTLkoA0
        subject_person_id: p_mmQx1J4y8UnZLtQCSav8kF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eaxKRF27W5M5FTybJCBEHr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lv3Fuw_gjezl8AgihTUmZK
          claim_id: c_WGYm-amp-USu42OHTLkoA0
          source_id: s_5XFNrogpMvwKJ5HtqVKsc5
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5XFNrogpMvwKJ5HtqVKsc5
            source_type: api_record
            title: 中国历代人物传记资料库：王澧（CBDB 167850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167850&o=json
            external_identifier: CBDB:167850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.998Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eaxKRF27W5M5FTybJCBEHr
        status: active
        display_name: 王澧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倫 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8GNjf5izAa158YnKAGoxLG | 王閏 | accepted |
| children | p_eaxKRF27W5M5FTybJCBEHr | 王澧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澧（CBDB 167850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167850&o=json)
- [中国历代人物传记资料库：王倫（CBDB 167849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167849&o=json)
- [中国历代人物传记资料库：王閏（CBDB 167848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167848&o=json)
