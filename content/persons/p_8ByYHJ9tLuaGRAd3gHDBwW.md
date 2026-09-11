---
schema: wang-person/v1
id: p_8ByYHJ9tLuaGRAd3gHDBwW
status: active
merged_into: null
display_name: 葉氏
revision: 1
cbdb_id: 555802
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XZpkp9Xr5-Uq3VRkbZtH0T
        subject_person_id: p_8ByYHJ9tLuaGRAd3gHDBwW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 葉氏，宋人物。籍贯麗水。（中国历代人物传记资料库 CBDB 555802）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jiejoJ1cSwrix1s4QThM3l
          claim_id: c_XZpkp9Xr5-Uq3VRkbZtH0T
          source_id: s_QnNDFgvlhn7nq6fL0KB6oi
          stance: supports
          locator: CBDB:555802
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QnNDFgvlhn7nq6fL0KB6oi
            source_type: api_record
            title: 中国历代人物传记资料库：葉氏(葉宗魯之女)（CBDB 555802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555802&o=json
            external_identifier: CBDB:555802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nsyT9BELQC7obE49k5qIaq
        subject_person_id: p_8ByYHJ9tLuaGRAd3gHDBwW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 葉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gTJsvELrju3ogJwRTu6Tgr
          claim_id: c_nsyT9BELQC7obE49k5qIaq
          source_id: s_QnNDFgvlhn7nq6fL0KB6oi
          stance: supports
          locator: CBDB:555802
          quotation: null
          interpretation_note: CBDB 明确记录的王侑配偶
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
        id: c_corCED8AHPx5Szlkx3VGhb
        subject_person_id: p_6ezuFcCP9M43QTPSk7tw3L
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8ByYHJ9tLuaGRAd3gHDBwW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L_PLXZxfdKnA29kGOuOUMv
          claim_id: c_corCED8AHPx5Szlkx3VGhb
          source_id: s_QnNDFgvlhn7nq6fL0KB6oi
          stance: supports
          locator: 麗水宋元墓誌集録，66：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6ezuFcCP9M43QTPSk7tw3L
        status: active
        display_name: 王侑
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 葉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 葉氏，宋人物。籍贯麗水。（中国历代人物传记资料库 CBDB 555802） | accepted |
| name.primary | 葉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_6ezuFcCP9M43QTPSk7tw3L | 王侑 | accepted |

## 外部来源

- [中国历代人物传记资料库：葉氏(葉宗魯之女)（CBDB 555802）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555802&o=json)
