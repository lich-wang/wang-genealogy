---
schema: wang-person/v1
id: p_7MpLgUGSue2W6Ccsh9gfNb
status: active
merged_into: null
display_name: 王日就
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G9VNDZHQsHsuTwHdNcui2w
        subject_person_id: p_7MpLgUGSue2W6Ccsh9gfNb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日就
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SwZQLnnof6TM645M9LZBHi
          claim_id: c_G9VNDZHQsHsuTwHdNcui2w
          source_id: s_rZJWnUa2z8Emu46wDh3zmm
          stance: supports
          locator: CBDB:38137
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38137）
          source: &a1
            id: s_rZJWnUa2z8Emu46wDh3zmm
            source_type: api_record
            title: 中国历代人物传记资料库：王日就（CBDB 38137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38137&o=json
            external_identifier: CBDB:38137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.077Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tVfZX7X2fPjh6vfgXEroBa
        subject_person_id: p_7MpLgUGSue2W6Ccsh9gfNb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1109年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MroeA6vuPCyFvZHJXWorLk
          claim_id: c_tVfZX7X2fPjh6vfgXEroBa
          source_id: s_rZJWnUa2z8Emu46wDh3zmm
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
        id: c_jTpXHENgeHfsiT8mGQw4XT
        subject_person_id: p_7MpLgUGSue2W6Ccsh9gfNb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1174年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WHoAFLiEsqY4BKhezPHpmL
          claim_id: c_jTpXHENgeHfsiT8mGQw4XT
          source_id: s_rZJWnUa2z8Emu46wDh3zmm
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
        id: c_548dKG817BqTKwk13TaRgg
        subject_person_id: p_7MpLgUGSue2W6Ccsh9gfNb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KtgTV42RKKQkY5HgrPDxLq
          claim_id: c_548dKG817BqTKwk13TaRgg
          source_id: s_rZJWnUa2z8Emu46wDh3zmm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_gDmYixlsQ-TOfCu4aTAIW9
        subject_person_id: p_7MpLgUGSue2W6Ccsh9gfNb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EJoYUDSpGy9qXR9GD9MGoz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n1IcJqN8kSYUqxqAvJ_JRG
          claim_id: c_gDmYixlsQ-TOfCu4aTAIW9
          source_id: s_rZJWnUa2z8Emu46wDh3zmm
          stance: supports
          locator: 呂祖謙全集，11.175：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EJoYUDSpGy9qXR9GD9MGoz
        status: active
        display_name: 王偊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_8JtAwaFK1kWGLtoYvsdRxI
        subject_person_id: p_7MpLgUGSue2W6Ccsh9gfNb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XgVNfnbjDhs17LibMkTB9W
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EWWouB40KmgqXDwsfB4efh
          claim_id: c_8JtAwaFK1kWGLtoYvsdRxI
          source_id: s_rZJWnUa2z8Emu46wDh3zmm
          stance: supports
          locator: 宋人傳記資料索引(電子版)：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XgVNfnbjDhs17LibMkTB9W
        status: active
        display_name: 王中孚
        merged_into_person_id: null
    - claim:
        id: c_i5XEZz3CUVFjlU9Z2xGlit
        subject_person_id: p_7MpLgUGSue2W6Ccsh9gfNb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gYNKCExs3QMdfmbcBBVu57
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MY-3Cyje7SyC6krbYIqImi
          claim_id: c_i5XEZz3CUVFjlU9Z2xGlit
          source_id: s_rZJWnUa2z8Emu46wDh3zmm
          stance: supports
          locator: 呂祖謙全集，11.175：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gYNKCExs3QMdfmbcBBVu57
        status: active
        display_name: 王中實
        merged_into_person_id: null
  other: []
---

# 王日就

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王日就 | accepted |
| birth.date | 1109年 | accepted |
| death.date | 1174年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EJoYUDSpGy9qXR9GD9MGoz | 王偊 | accepted |
| descendants | p_XgVNfnbjDhs17LibMkTB9W | 王中孚 | accepted |
| descendants | p_gYNKCExs3QMdfmbcBBVu57 | 王中實 | accepted |

## 外部来源

- [中国历代人物传记资料库：王日就（CBDB 38137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38137&o=json)
