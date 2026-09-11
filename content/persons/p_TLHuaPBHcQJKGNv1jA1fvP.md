---
schema: wang-person/v1
id: p_TLHuaPBHcQJKGNv1jA1fvP
status: active
merged_into: null
display_name: 王璠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wti5s5vzKJyUgNHAZWo4ME
        subject_person_id: p_TLHuaPBHcQJKGNv1jA1fvP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MC5NovPo8Ww4qSKqdjE7X1
          claim_id: c_wti5s5vzKJyUgNHAZWo4ME
          source_id: s_mwK4rp8i5aNr3AqxaSZwca
          stance: supports
          locator: CBDB:100962
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100962）
          source: &a1
            id: s_mwK4rp8i5aNr3AqxaSZwca
            source_type: api_record
            title: 中国历代人物传记资料库：王璠（CBDB 100962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100962&o=json
            external_identifier: CBDB:100962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.602Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WruA9GDeHWAy9uPjpKm9ss
        subject_person_id: p_TLHuaPBHcQJKGNv1jA1fvP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UuPvDpC61KdSYzKKFzmZbg
          claim_id: c_WruA9GDeHWAy9uPjpKm9ss
          source_id: s_mwK4rp8i5aNr3AqxaSZwca
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
        id: c_anUc8rQWEoK5LbTZ_FdlSO
        subject_person_id: p_3nNajgdtHYgwCw19NCKxAP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TLHuaPBHcQJKGNv1jA1fvP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TLPOMbyAHrYjJAI_qP1PnJ
          claim_id: c_anUc8rQWEoK5LbTZ_FdlSO
          source_id: s_9Wd1oSxvVo9yM28EkLuQ3o
          stance: supports
          locator: 元人傳記資料索引，788：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9Wd1oSxvVo9yM28EkLuQ3o
            source_type: api_record
            title: 中国历代人物传记资料库：王泰亨（CBDB 101315）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101315&o=json
            external_identifier: CBDB:101315
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.797Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3nNajgdtHYgwCw19NCKxAP
        status: active
        display_name: 王泰亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璠 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3nNajgdtHYgwCw19NCKxAP | 王泰亨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璠（CBDB 100962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100962&o=json)
- [中国历代人物传记资料库：王泰亨（CBDB 101315）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101315&o=json)
