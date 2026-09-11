---
schema: wang-person/v1
id: p_CujNgTNvRvtrE99hAKTybZ
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 555197
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AOLB_xBr0j-gh4AcTaz6Hu
        subject_person_id: p_CujNgTNvRvtrE99hAKTybZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gdnd-TJ14JTRJf8xTEMOOo
          claim_id: c_AOLB_xBr0j-gh4AcTaz6Hu
          source_id: s_tMdZyYFkAObQoeawUkoEfn
          stance: supports
          locator: CBDB:555197
          quotation: null
          interpretation_note: CBDB 明确记录的王永祥配偶
          source: &a1
            id: s_tMdZyYFkAObQoeawUkoEfn
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王永祥妻)（CBDB 555197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555197&o=json
            external_identifier: CBDB:555197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_cQ-ikdh22ST-ySqEQZF7B8
        subject_person_id: p_6a7N8sTJtEC3LEsE7YcT52
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CujNgTNvRvtrE99hAKTybZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_agn_ZWZ0iAU-5i9fH_jOdj
          claim_id: c_cQ-ikdh22ST-ySqEQZF7B8
          source_id: s_tMdZyYFkAObQoeawUkoEfn
          stance: supports
          locator: 南陽府志，lgid=878688：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6a7N8sTJtEC3LEsE7YcT52
        status: active
        display_name: 王永祥
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_6a7N8sTJtEC3LEsE7YcT52 | 王永祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王永祥妻)（CBDB 555197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555197&o=json)
