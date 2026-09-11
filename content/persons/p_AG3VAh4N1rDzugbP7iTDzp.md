---
schema: wang-person/v1
id: p_AG3VAh4N1rDzugbP7iTDzp
status: active
merged_into: null
display_name: 王制
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FNMpqLHwRNc7jxPoMwv5tr
        subject_person_id: p_AG3VAh4N1rDzugbP7iTDzp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王制
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SuKBh89sAGXeFZC6abN5AW
          claim_id: c_FNMpqLHwRNc7jxPoMwv5tr
          source_id: s_wQ7Q1oyEAoAnuHESMNYkEs
          stance: supports
          locator: CBDB:693425
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693425）
          source: &a1
            id: s_wQ7Q1oyEAoAnuHESMNYkEs
            source_type: api_record
            title: 中国历代人物传记资料库：王制（CBDB 693425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693425&o=json
            external_identifier: CBDB:693425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.657Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5ZK6gvbxdFuT2H4LEwTZxo
        subject_person_id: p_AG3VAh4N1rDzugbP7iTDzp
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
        - id: cs_VQMTzoBHGfEbBd3xKLPo5B
          claim_id: c_5ZK6gvbxdFuT2H4LEwTZxo
          source_id: s_wQ7Q1oyEAoAnuHESMNYkEs
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
        id: c_HAMc2BwIVnhpX3W1sZDisJ
        subject_person_id: p_AG3VAh4N1rDzugbP7iTDzp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pxsLeQ6oMGEE8B96sx5qgA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fsSJ0EpwUf8xgWbhhmfYiV
          claim_id: c_HAMc2BwIVnhpX3W1sZDisJ
          source_id: s_wQ7Q1oyEAoAnuHESMNYkEs
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294000：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pxsLeQ6oMGEE8B96sx5qgA
        status: active
        display_name: 王元佐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王制

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王制 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_pxsLeQ6oMGEE8B96sx5qgA | 王元佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王制（CBDB 693425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693425&o=json)
