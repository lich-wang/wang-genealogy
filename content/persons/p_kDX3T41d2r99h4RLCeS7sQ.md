---
schema: wang-person/v1
id: p_kDX3T41d2r99h4RLCeS7sQ
status: active
merged_into: null
display_name: 王時
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jCyN8e1ALiz52XuUbAgC5h
        subject_person_id: p_kDX3T41d2r99h4RLCeS7sQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Tws1Yk4sWHix2CxyHSJNna
          claim_id: c_jCyN8e1ALiz52XuUbAgC5h
          source_id: s_dR9N8i43nx25vbnEpm7qRc
          stance: supports
          locator: CBDB:638354
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638354）
          source: &a1
            id: s_dR9N8i43nx25vbnEpm7qRc
            source_type: api_record
            title: 中国历代人物传记资料库：王時（CBDB 638354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638354&o=json
            external_identifier: CBDB:638354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.671Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g8SSjQBvLeYZniM53Uy5H7
        subject_person_id: p_kDX3T41d2r99h4RLCeS7sQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ze6wpxvZz54mQxdZDs1sTF
          claim_id: c_g8SSjQBvLeYZniM53Uy5H7
          source_id: s_dR9N8i43nx25vbnEpm7qRc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時（CBDB 638354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638354&o=json)
