---
schema: wang-person/v1
id: p_QFDDtWcAnS5HdHiHH9q3dC
status: active
merged_into: null
display_name: 王琰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uus26QGpcqQV5RBiQGoqXN
        subject_person_id: p_QFDDtWcAnS5HdHiHH9q3dC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QEqjoT971eqrFzLJGUBJhw
          claim_id: c_uus26QGpcqQV5RBiQGoqXN
          source_id: s_WBJ8F42FBcQJRt6ZQwSaUR
          stance: supports
          locator: CBDB:123376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（123376）
          source: &a1
            id: s_WBJ8F42FBcQJRt6ZQwSaUR
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 123376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123376&o=json
            external_identifier: CBDB:123376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.931Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ct6bLTmGWUE4tQed8Knj4S
        subject_person_id: p_QFDDtWcAnS5HdHiHH9q3dC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琰，清人物。籍贯蘇州府。（中国历代人物传记资料库 CBDB 123376）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4mWT8BgpNUb13E3SWKA5hx
          claim_id: c_Ct6bLTmGWUE4tQed8Knj4S
          source_id: s_WBJ8F42FBcQJRt6ZQwSaUR
          stance: supports
          locator: CBDB:123376
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mIJMZYL5prJuSgt93dRykn
        subject_person_id: p_hTT6d7doKQ4jf6rzjj598s
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QFDDtWcAnS5HdHiHH9q3dC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ksgaSlDRJBYkA2G1KN1Qod
          claim_id: c_mIJMZYL5prJuSgt93dRykn
          source_id: s_WBJ8F42FBcQJRt6ZQwSaUR
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #5174：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hTT6d7doKQ4jf6rzjj598s
        status: active
        display_name: 王長卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_TQaCdpKPTj1Oa6Qz9mFqFB
        subject_person_id: p_QFDDtWcAnS5HdHiHH9q3dC
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ToupUjJL68ruwfuGBFLp2R
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fvYbLl8iBwzIpXG1v0trJh
          claim_id: c_TQaCdpKPTj1Oa6Qz9mFqFB
          source_id: s_DU71a-qLCC2KGoLEKqE_LA
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #517：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DU71a-qLCC2KGoLEKqE_LA
            source_type: api_record
            title: 中国历代人物传记资料库：蘇敏（CBDB 123378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123378&o=json
            external_identifier: CBDB:123378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ToupUjJL68ruwfuGBFLp2R
        status: active
        display_name: 蘇敏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王琰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琰 | accepted |
| bio.summary | 王琰，清人物。籍贯蘇州府。（中国历代人物传记资料库 CBDB 123376） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hTT6d7doKQ4jf6rzjj598s | 王長卿 | accepted |
| spouses | p_ToupUjJL68ruwfuGBFLp2R | 蘇敏 | accepted |

## 外部来源

- [中国历代人物传记资料库：蘇敏（CBDB 123378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123378&o=json)
- [中国历代人物传记资料库：王琰（CBDB 123376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123376&o=json)
