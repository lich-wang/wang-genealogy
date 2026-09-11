---
schema: wang-person/v1
id: p_oDJrgyjrEYvhubApKjGFeM
status: active
merged_into: null
display_name: 王元績
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vqsw23HjC9HGkmEbJk9Dc4
        subject_person_id: p_oDJrgyjrEYvhubApKjGFeM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元績
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5JFdGwPhACNzuMNtKU4YEo
          claim_id: c_Vqsw23HjC9HGkmEbJk9Dc4
          source_id: s_8XpFFNP318m7rgLRY5W177
          stance: supports
          locator: CBDB:526949
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526949）
          source: &a1
            id: s_8XpFFNP318m7rgLRY5W177
            source_type: api_record
            title: 中国历代人物传记资料库：王元績（CBDB 526949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526949&o=json
            external_identifier: CBDB:526949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8iVyEuDRpBFPVwkroDjLK8
        subject_person_id: p_oDJrgyjrEYvhubApKjGFeM
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
        - id: cs_TbLxTzADYmV7fKTSDwhrw3
          claim_id: c_8iVyEuDRpBFPVwkroDjLK8
          source_id: s_8XpFFNP318m7rgLRY5W177
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
        id: c__bca2nQINf0ay0EH8QdKGm
        subject_person_id: p_oDJrgyjrEYvhubApKjGFeM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9XtatSzbUAUbGKWh823XDp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jol9YUAWRFG_D9fyx6nIL-
          claim_id: c__bca2nQINf0ay0EH8QdKGm
          source_id: s_AR6R7vvgs7N84GQDgobf6U
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13128：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AR6R7vvgs7N84GQDgobf6U
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 69422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69422&o=json
            external_identifier: CBDB:69422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9XtatSzbUAUbGKWh823XDp
        status: active
        display_name: 王瑤
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元績

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元績 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9XtatSzbUAUbGKWh823XDp | 王瑤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑤（CBDB 69422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69422&o=json)
- [中国历代人物传记资料库：王元績（CBDB 526949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526949&o=json)
