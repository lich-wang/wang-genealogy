---
schema: wang-person/v1
id: p_Xu92b8cxwkLcecDZkXEDZ2
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 5137
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RuFLVT8MAgbjaLBylDlnY6
        subject_person_id: p_Xu92b8cxwkLcecDZkXEDZ2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏（1020—1089），宋人物。籍贯開封，入仕封贈。（中国历代人物传记资料库 CBDB 5137）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KZ9Puxft2yQawDmO5Pc1ed
          claim_id: c_RuFLVT8MAgbjaLBylDlnY6
          source_id: s_HazqEQgd7gC5sUaqSi6Mjv
          stance: supports
          locator: CBDB:5137
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HazqEQgd7gC5sUaqSi6Mjv
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王毖妻)（CBDB 5137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5137&o=json
            external_identifier: CBDB:5137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_H8Yb4xQiXG0zdEOlyuibgF
        subject_person_id: p_Xu92b8cxwkLcecDZkXEDZ2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m0PHu1QdubaHYUE9tgrcma
          claim_id: c_H8Yb4xQiXG0zdEOlyuibgF
          source_id: s_HazqEQgd7gC5sUaqSi6Mjv
          stance: supports
          locator: CBDB:5137
          quotation: null
          interpretation_note: CBDB 明确记录的王毖配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_wMpQhWn33ZGv7h8cYoWP0E
        subject_person_id: p_7rpnCYqdWhRQZr89MWvuA9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Xu92b8cxwkLcecDZkXEDZ2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jfM_DKA-odeLfyUg387G-b
          claim_id: c_wMpQhWn33ZGv7h8cYoWP0E
          source_id: s_HazqEQgd7gC5sUaqSi6Mjv
          stance: supports
          locator: 宋人傳記資料索引(電子版)，779;780：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7rpnCYqdWhRQZr89MWvuA9
        status: active
        display_name: 王毖
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏（1020—1089），宋人物。籍贯開封，入仕封贈。（中国历代人物传记资料库 CBDB 5137） | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7rpnCYqdWhRQZr89MWvuA9 | 王毖 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王毖妻)（CBDB 5137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5137&o=json)
