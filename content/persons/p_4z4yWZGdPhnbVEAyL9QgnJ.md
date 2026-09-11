---
schema: wang-person/v1
id: p_4z4yWZGdPhnbVEAyL9QgnJ
status: active
merged_into: null
display_name: 王爌
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HYS8c7S4SwDyNXpJrz9dby
        subject_person_id: p_4z4yWZGdPhnbVEAyL9QgnJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4bEALtqnKz8zUy7KNc1tFQ
          claim_id: c_HYS8c7S4SwDyNXpJrz9dby
          source_id: s_pEHa4FnT3Kov9E6g1pbwEs
          stance: supports
          locator: CBDB:68280
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68280）
          source: &a1
            id: s_pEHa4FnT3Kov9E6g1pbwEs
            source_type: api_record
            title: 中国历代人物传记资料库：王爌（CBDB 68280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68280&o=json
            external_identifier: CBDB:68280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4SNHttEUAbtk4L5tvgDMM4
        subject_person_id: p_4z4yWZGdPhnbVEAyL9QgnJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1554年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oRyood8jLN6QZNJhoy2tM5
          claim_id: c_4SNHttEUAbtk4L5tvgDMM4
          source_id: s_pEHa4FnT3Kov9E6g1pbwEs
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
        id: c_g4uic6t2sjfDqn9E6z1F2K
        subject_person_id: p_4z4yWZGdPhnbVEAyL9QgnJ
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
        - id: cs_X1zCKJEbYiPQ1fHzn4xxdo
          claim_id: c_g4uic6t2sjfDqn9E6z1F2K
          source_id: s_pEHa4FnT3Kov9E6g1pbwEs
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
        id: c_iVm2hYt35AEOamwPXCnU3q
        subject_person_id: p_Zc7mv2e4ZRM13rfjpkZkya
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4z4yWZGdPhnbVEAyL9QgnJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R7uuTaYqBkzFpFUjaB4Fy3
          claim_id: c_iVm2hYt35AEOamwPXCnU3q
          source_id: s_G6mDRfhyCyky3TvhbbKYUw
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百四十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_G6mDRfhyCyky3TvhbbKYUw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王玼（272144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272144&o=json
            external_identifier: CBDB:272144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:50.134Z
            metadata_json: null
      object_person:
        id: p_Zc7mv2e4ZRM13rfjpkZkya
        status: active
        display_name: 王玼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_0cxvDewgxn1R927gAG9Bm9
        subject_person_id: p_wx8pV5FXm9qYnA5ZT1tswN
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4z4yWZGdPhnbVEAyL9QgnJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pfyhLnndMFXrkXD2KNbT1U
          claim_id: c_0cxvDewgxn1R927gAG9Bm9
          source_id: s_4MaWeKY4dNjyyMrfWPZQkB
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百四十三名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4MaWeKY4dNjyyMrfWPZQkB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：葛氏（272146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272146&o=json
            external_identifier: CBDB:272146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:56.528Z
            metadata_json: null
      object_person:
        id: p_wx8pV5FXm9qYnA5ZT1tswN
        status: active
        display_name: 葛氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_8ZbBl87L0x1rhqVfPt74LQ
        subject_person_id: p_N27zaVAVE31vavnkwj7Dft
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4z4yWZGdPhnbVEAyL9QgnJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K_MQq7AFr6haiC_L6HKAnJ
          claim_id: c_8ZbBl87L0x1rhqVfPt74LQ
          source_id: s_Xu4hHeWSyLA3aEvJiaoiG8
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百四十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Xu4hHeWSyLA3aEvJiaoiG8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王伯永（272142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272142&o=json
            external_identifier: CBDB:272142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_N27zaVAVE31vavnkwj7Dft
        status: active
        display_name: 王伯永
        merged_into_person_id: null
    - claim:
        id: c_nJOH_US3r_8RAvghJsFtCR
        subject_person_id: p_255t2nDMrWzFXS93NLqNE3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4z4yWZGdPhnbVEAyL9QgnJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OQtg2n3ZUUUMkqOjPXAlEk
          claim_id: c_nJOH_US3r_8RAvghJsFtCR
          source_id: s_6XS5Co8u91VCyFVu7gyaLx
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百四十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6XS5Co8u91VCyFVu7gyaLx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宗（272143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272143&o=json
            external_identifier: CBDB:272143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:56.181Z
            metadata_json: null
      object_person:
        id: p_255t2nDMrWzFXS93NLqNE3
        status: active
        display_name: 王宗
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王爌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爌 | accepted |
| death.date | 1554年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Zc7mv2e4ZRM13rfjpkZkya | 王玼 | accepted |
| spouses | p_wx8pV5FXm9qYnA5ZT1tswN | 葛氏 | accepted |
| ancestors | p_N27zaVAVE31vavnkwj7Dft | 王伯永 | accepted |
| ancestors | p_255t2nDMrWzFXS93NLqNE3 | 王宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王爌（CBDB 68280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68280&o=json)
- [CBDB 中国历代人物传记资料库：葛氏（272146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272146&o=json)
- [CBDB 中国历代人物传记资料库：王伯永（272142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272142&o=json)
- [CBDB 中国历代人物传记资料库：王玼（272144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272144&o=json)
- [CBDB 中国历代人物传记资料库：王宗（272143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272143&o=json)
