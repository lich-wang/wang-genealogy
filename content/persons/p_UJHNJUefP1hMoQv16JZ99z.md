---
schema: wang-person/v1
id: p_UJHNJUefP1hMoQv16JZ99z
status: active
merged_into: null
display_name: 王師愈
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ARwmw9BZEAVbFXHjCNaZ5Y
        subject_person_id: p_UJHNJUefP1hMoQv16JZ99z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師愈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UgWN2Kk3nuveZeb3V1PYbA
          claim_id: c_ARwmw9BZEAVbFXHjCNaZ5Y
          source_id: s_LypwDE4h1BkpQGFHZNCbHw
          stance: supports
          locator: CBDB:10702
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10702）
          source: &a1
            id: s_LypwDE4h1BkpQGFHZNCbHw
            source_type: api_record
            title: 中国历代人物传记资料库：王師愈（CBDB 10702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10702&o=json
            external_identifier: CBDB:10702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.549Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_eR6JNgibsZ8SCSbDrrQ1Cs
        subject_person_id: p_UJHNJUefP1hMoQv16JZ99z
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1122年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_31HGebBNcwPie9WrsUcRdk
          claim_id: c_eR6JNgibsZ8SCSbDrrQ1Cs
          source_id: s_LypwDE4h1BkpQGFHZNCbHw
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
        id: c_i5eP6d8joZdjP3g6VjGQLA
        subject_person_id: p_UJHNJUefP1hMoQv16JZ99z
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1190年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pHD1dop2MYg3qKwW45iV5J
          claim_id: c_i5eP6d8joZdjP3g6VjGQLA
          source_id: s_LypwDE4h1BkpQGFHZNCbHw
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
        id: c_1cGn9vdgDGuPEFJGMkdg7L
        subject_person_id: p_UJHNJUefP1hMoQv16JZ99z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師愈（1122年—1190年），宋人物。籍贯金華，入仕進士，曾任左奉議郎、路提點刑獄公事、中奉大夫。（中国历代人物传记资料库 CBDB 10702）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Aoa6AkwxOYxSJRypREF_dy
          claim_id: c_1cGn9vdgDGuPEFJGMkdg7L
          source_id: s_LypwDE4h1BkpQGFHZNCbHw
          stance: supports
          locator: CBDB:10702
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_krFE6fkyxU8io1D7R9EMrI
        subject_person_id: p_2E4LCv8Nov8DxpvHNn8a4U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UJHNJUefP1hMoQv16JZ99z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SThC1di8SjvUzuoaCrZkPC
          claim_id: c_krFE6fkyxU8io1D7R9EMrI
          source_id: s_yujo92cz27U8dwZherbwgg
          stance: supports
          locator: 王氏一原世譜，24a：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yujo92cz27U8dwZherbwgg
            source_type: api_record
            title: 中国历代人物传记资料库：王景文（CBDB 23216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23216&o=json
            external_identifier: CBDB:23216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.871Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2E4LCv8Nov8DxpvHNn8a4U
        status: active
        display_name: 王景文
        merged_into_person_id: null
  children:
    - claim:
        id: c_v7URt69nu_mwEvGnI7yo3o
        subject_person_id: p_UJHNJUefP1hMoQv16JZ99z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5dcsDxDKEpK12rMtB5o7pc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AmagCfq20xC6s5p1GUSB63
          claim_id: c_v7URt69nu_mwEvGnI7yo3o
          source_id: s_zDhdJOdKYbFJQR613OXTgt
          stance: supports
          locator: CBDB 亲属：父（KinPerson 10702）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_zDhdJOdKYbFJQR613OXTgt
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 10704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10704&o=json
            external_identifier: CBDB:10704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5dcsDxDKEpK12rMtB5o7pc
        status: active
        display_name: 王瀚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_3xp1NkqsMJBxOT3KD4BRrF
        subject_person_id: p_UJHNJUefP1hMoQv16JZ99z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3voEFztyjE9gBvRFtzzihf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wMUsiWPzqUZOHv7q_37MLW
          claim_id: c_3xp1NkqsMJBxOT3KD4BRrF
          source_id: s_pZFYSGMqe3azKLTFMuud9u
          stance: supports
          locator: 宋人傳記資料索引(電子版)：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pZFYSGMqe3azKLTFMuud9u
            source_type: api_record
            title: 中国历代人物传记资料库：王柏（CBDB 10706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10706&o=json
            external_identifier: CBDB:10706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.552Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3voEFztyjE9gBvRFtzzihf
        status: active
        display_name: 王柏
        merged_into_person_id: null
  other: []
---

# 王師愈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師愈 | accepted |
| birth.date | 1122年 | accepted |
| death.date | 1190年 | accepted |
| bio.summary | 王師愈（1122年—1190年），宋人物。籍贯金華，入仕進士，曾任左奉議郎、路提點刑獄公事、中奉大夫。（中国历代人物传记资料库 CBDB 10702） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2E4LCv8Nov8DxpvHNn8a4U | 王景文 | accepted |
| children | p_5dcsDxDKEpK12rMtB5o7pc | 王瀚 | accepted |
| descendants | p_3voEFztyjE9gBvRFtzzihf | 王柏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王柏（CBDB 10706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10706&o=json)
- [中国历代人物传记资料库：王瀚（CBDB 10704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10704&o=json)
- [中国历代人物传记资料库：王景文（CBDB 23216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23216&o=json)
- [中国历代人物传记资料库：王師愈（CBDB 10702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10702&o=json)
