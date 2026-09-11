---
schema: wang-person/v1
id: p_1XLNfRiDAQG1jeNLog7rHV
status: active
merged_into: null
display_name: 王煥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7Fjw76TDGi1KfWWDRYH8v5
        subject_person_id: p_1XLNfRiDAQG1jeNLog7rHV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9JE2QqfWmh49etPNGnEKcg
          claim_id: c_7Fjw76TDGi1KfWWDRYH8v5
          source_id: s_45JC3rMvbrBETLdFp221Ko
          stance: supports
          locator: CBDB:206011
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206011）
          source: &a1
            id: s_45JC3rMvbrBETLdFp221Ko
            source_type: api_record
            title: 中国历代人物传记资料库：王煥（CBDB 206011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206011&o=json
            external_identifier: CBDB:206011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GfkXJmhmVJ4mpv7AujKBPG
        subject_person_id: p_1XLNfRiDAQG1jeNLog7rHV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1533年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KSwTEv56HzDGjkaCAR8U2t
          claim_id: c_GfkXJmhmVJ4mpv7AujKBPG
          source_id: s_45JC3rMvbrBETLdFp221Ko
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
        id: c_JJv9YpsxXekndpGHwiWcTn
        subject_person_id: p_1XLNfRiDAQG1jeNLog7rHV
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
        - id: cs_WYFtXRUehiHhLMtLBcuL9L
          claim_id: c_JJv9YpsxXekndpGHwiWcTn
          source_id: s_45JC3rMvbrBETLdFp221Ko
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
        id: c_eRmuj6ClTWKqMKstrNZk8X
        subject_person_id: p_jknx5y8EMt4htEH5Jaj242
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1XLNfRiDAQG1jeNLog7rHV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cTmtCwnKYq9yVtxn25KT3c
          claim_id: c_eRmuj6ClTWKqMKstrNZk8X
          source_id: s_45JC3rMvbrBETLdFp221Ko
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jknx5y8EMt4htEH5Jaj242
        status: active
        display_name: 王獻箴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_rhMwuMUAIX3B2UBFO04_9P
        subject_person_id: p_1XLNfRiDAQG1jeNLog7rHV
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JZ9sa9wQLMVqCAy8XLfNy6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ayw5sPkt9pafidcIjilHpr
          claim_id: c_rhMwuMUAIX3B2UBFO04_9P
          source_id: s_2mf35hMwizD_w_0ayy5rMk
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2mf35hMwizD_w_0ayy5rMk
            source_type: api_record
            title: 中国历代人物传记资料库：錢氏(王煥妻)（CBDB 212078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212078&o=json
            external_identifier: CBDB:212078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JZ9sa9wQLMVqCAy8XLfNy6
        status: active
        display_name: 錢氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_FF7_UarYgh67z2y8eu9iUR
        subject_person_id: p_F4C3RHk7ajq8Arq9LumZLd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1XLNfRiDAQG1jeNLog7rHV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A7F7mBuMDCuUkGFl9dcCz1
          claim_id: c_FF7_UarYgh67z2y8eu9iUR
          source_id: s_45JC3rMvbrBETLdFp221Ko
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_F4C3RHk7ajq8Arq9LumZLd
        status: active
        display_name: 王勝鑑
        merged_into_person_id: null
    - claim:
        id: c_OMs-Iv3qjfNzppBKnLYLbF
        subject_person_id: p_CFFUHRDXtKo3BiEuj6axMj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1XLNfRiDAQG1jeNLog7rHV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aYR1QxHLdlrDGn8VXSfpMd
          claim_id: c_OMs-Iv3qjfNzppBKnLYLbF
          source_id: s_45JC3rMvbrBETLdFp221Ko
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CFFUHRDXtKo3BiEuj6axMj
        status: active
        display_name: 王祺
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王煥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煥 | accepted |
| birth.date | 1533年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jknx5y8EMt4htEH5Jaj242 | 王獻箴 | accepted |
| spouses | p_JZ9sa9wQLMVqCAy8XLfNy6 | 錢氏 | accepted |
| ancestors | p_F4C3RHk7ajq8Arq9LumZLd | 王勝鑑 | accepted |
| ancestors | p_CFFUHRDXtKo3BiEuj6axMj | 王祺 | accepted |

## 外部来源

- [中国历代人物传记资料库：錢氏(王煥妻)（CBDB 212078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212078&o=json)
- [中国历代人物传记资料库：王煥（CBDB 206011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206011&o=json)
