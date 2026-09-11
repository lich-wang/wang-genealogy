---
schema: wang-person/v1
id: p_RPnqxzfk9EzknP84279KDY
status: active
merged_into: null
display_name: 王標
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gedyN2oPPVgqw1PFDeutxe
        subject_person_id: p_RPnqxzfk9EzknP84279KDY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王標
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JEeMaZ2xDk3bYQJMmQr5oB
          claim_id: c_gedyN2oPPVgqw1PFDeutxe
          source_id: s_AjFCNBwCLuzGm1A7cVSNWe
          stance: supports
          locator: CBDB:575366
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（575366）
          source: &a1
            id: s_AjFCNBwCLuzGm1A7cVSNWe
            source_type: api_record
            title: 中国历代人物传记资料库：王標（CBDB 575366）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575366&o=json
            external_identifier: CBDB:575366
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xY9oU4y5w62FqhvBchAgZZ
        subject_person_id: p_RPnqxzfk9EzknP84279KDY
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
        - id: cs_upULYM1ekdH7fL8TUAYug5
          claim_id: c_xY9oU4y5w62FqhvBchAgZZ
          source_id: s_AjFCNBwCLuzGm1A7cVSNWe
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
        id: c_WgyXiswuVivakTFMEYX_iR
        subject_person_id: p_zrXaaDsWqxxFV2uHJhKDmc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RPnqxzfk9EzknP84279KDY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IEkUjngPTzoTtoO7p7Q0el
          claim_id: c_WgyXiswuVivakTFMEYX_iR
          source_id: s_AjFCNBwCLuzGm1A7cVSNWe
          stance: supports
          locator: 雲和縣志，lgid=369323：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zrXaaDsWqxxFV2uHJhKDmc
        status: active
        display_name: 王海澄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王標

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王標 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zrXaaDsWqxxFV2uHJhKDmc | 王海澄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王標（CBDB 575366）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575366&o=json)
