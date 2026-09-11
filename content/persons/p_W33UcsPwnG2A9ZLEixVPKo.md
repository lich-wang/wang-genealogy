---
schema: wang-person/v1
id: p_W33UcsPwnG2A9ZLEixVPKo
status: active
merged_into: null
display_name: 王滋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ACwTxJ8GjG5UW43UBBQNNN
        subject_person_id: p_W33UcsPwnG2A9ZLEixVPKo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nihWgL21F7xayDNniN78QW
          claim_id: c_ACwTxJ8GjG5UW43UBBQNNN
          source_id: s_2xT2Pqbp9S8xjrMo7gSCZP
          stance: supports
          locator: CBDB:38564
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38564）
          source: &a1
            id: s_2xT2Pqbp9S8xjrMo7gSCZP
            source_type: api_record
            title: 中国历代人物传记资料库：王滋（CBDB 38564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38564&o=json
            external_identifier: CBDB:38564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.512Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5TWMk45bFRk1iMjnznPKTW
        subject_person_id: p_W33UcsPwnG2A9ZLEixVPKo
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
        - id: cs_QmRmnj5Pdnbq2Y6MV197Dg
          claim_id: c_5TWMk45bFRk1iMjnznPKTW
          source_id: s_2xT2Pqbp9S8xjrMo7gSCZP
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
        id: c_aVO98uy2SmnMdEVoBAvyAk
        subject_person_id: p_W33UcsPwnG2A9ZLEixVPKo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hfCGYE9t8CZi8LEbQZDGpq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UjWAK-ZypXzaXQ-jq5jwDe
          claim_id: c_aVO98uy2SmnMdEVoBAvyAk
          source_id: s_iWdwSXWC2jGtBLDcXJa14B
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iWdwSXWC2jGtBLDcXJa14B
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 38557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38557&o=json
            external_identifier: CBDB:38557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.511Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hfCGYE9t8CZi8LEbQZDGpq
        status: active
        display_name: 王復
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王滋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滋 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hfCGYE9t8CZi8LEbQZDGpq | 王復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王復（CBDB 38557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38557&o=json)
- [中国历代人物传记资料库：王滋（CBDB 38564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38564&o=json)
