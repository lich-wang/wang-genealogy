---
schema: wang-person/v1
id: p_9bZqf3V2npm9dP9beXpthm
status: active
merged_into: null
display_name: 王貞
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UJa1VwPrhQ1MHmCBJWJy8k
        subject_person_id: p_9bZqf3V2npm9dP9beXpthm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jA51Gpt3wnLpBzF9KCEpPS
          claim_id: c_UJa1VwPrhQ1MHmCBJWJy8k
          source_id: s_HvRSsBxdG6NJtZAaP8roh9
          stance: supports
          locator: CBDB:140909
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140909）
          source: &a1
            id: s_HvRSsBxdG6NJtZAaP8roh9
            source_type: api_record
            title: 中国历代人物传记资料库：王貞（CBDB 140909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140909&o=json
            external_identifier: CBDB:140909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.538Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_V6GF5KiDZENqnRG7Tmy7gm
        subject_person_id: p_9bZqf3V2npm9dP9beXpthm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 676年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UHjBeZ9ie7hBsYH6xBYNiH
          claim_id: c_V6GF5KiDZENqnRG7Tmy7gm
          source_id: s_HvRSsBxdG6NJtZAaP8roh9
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
        id: c_LE3sjimwX1XeSnP1CAEuGE
        subject_person_id: p_9bZqf3V2npm9dP9beXpthm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 747年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SaTGdMqreZCBaWdgoq3xuv
          claim_id: c_LE3sjimwX1XeSnP1CAEuGE
          source_id: s_HvRSsBxdG6NJtZAaP8roh9
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
        id: c_GDu9NEutZbrrmGgJALW6ZG
        subject_person_id: p_9bZqf3V2npm9dP9beXpthm
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
        - id: cs_YZoxxKWD1UnDjmyHrRGCNc
          claim_id: c_GDu9NEutZbrrmGgJALW6ZG
          source_id: s_HvRSsBxdG6NJtZAaP8roh9
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
        id: c_Gf5fUxYn4b1NLd5G7vu_eY
        subject_person_id: p_4mS26N2oYH39nwrnfB57sM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9bZqf3V2npm9dP9beXpthm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bRqHWUYEtcUNdc7T4I6umM
          claim_id: c_Gf5fUxYn4b1NLd5G7vu_eY
          source_id: s_m8KCRyQTVRM1m264DHEkd9
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 104：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_m8KCRyQTVRM1m264DHEkd9
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 153716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153716&o=json
            external_identifier: CBDB:153716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4mS26N2oYH39nwrnfB57sM
        status: active
        display_name: 王弼
        merged_into_person_id: null
  children:
    - claim:
        id: c_vBPKlGl0JfNKvuF7QmxCe6
        subject_person_id: p_9bZqf3V2npm9dP9beXpthm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6GXTkNcoLVkzyUhbuJTziS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AsO-LOE_Z36TMyewdA_sxV
          claim_id: c_vBPKlGl0JfNKvuF7QmxCe6
          source_id: s_FPwWQpg2SwsettYYuB4bZ7
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 104：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FPwWQpg2SwsettYYuB4bZ7
            source_type: api_record
            title: 中国历代人物传记资料库：王思宗（CBDB 153719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153719&o=json
            external_identifier: CBDB:153719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.864Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6GXTkNcoLVkzyUhbuJTziS
        status: active
        display_name: 王思宗
        merged_into_person_id: null
    - claim:
        id: c_RJRFE5fmyF8nuuMMzSx9CV
        subject_person_id: p_9bZqf3V2npm9dP9beXpthm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8jYo1fdfFX4BDATotixjbF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HuUJsUZA4OldGJc5TDY3UZ
          claim_id: c_RJRFE5fmyF8nuuMMzSx9CV
          source_id: s_E3AWhX54cxP3bUx2F4sXd1
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 104：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E3AWhX54cxP3bUx2F4sXd1
            source_type: api_record
            title: 中国历代人物传记资料库：王承賓（CBDB 153718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153718&o=json
            external_identifier: CBDB:153718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_8jYo1fdfFX4BDATotixjbF
        status: active
        display_name: 王承賓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貞 | accepted |
| birth.date | 676年 | accepted |
| death.date | 747年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4mS26N2oYH39nwrnfB57sM | 王弼 | accepted |
| children | p_6GXTkNcoLVkzyUhbuJTziS | 王思宗 | accepted |
| children | p_8jYo1fdfFX4BDATotixjbF | 王承賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 153716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153716&o=json)
- [中国历代人物传记资料库：王承賓（CBDB 153718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153718&o=json)
- [中国历代人物传记资料库：王思宗（CBDB 153719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153719&o=json)
- [中国历代人物传记资料库：王貞（CBDB 140909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140909&o=json)
