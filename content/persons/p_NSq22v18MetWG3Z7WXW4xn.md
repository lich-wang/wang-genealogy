---
schema: wang-person/v1
id: p_NSq22v18MetWG3Z7WXW4xn
status: active
merged_into: null
display_name: 王山輝
cbdb_id: 151017
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LfCsgea2ixCQ1JbDWX3EvD
        subject_person_id: p_NSq22v18MetWG3Z7WXW4xn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王山輝，唐人物。籍贯吉州，曾任州刺史。（中国历代人物传记资料库 CBDB 151017）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_dPKM56OMdymSugZEV08vMR
          claim_id: c_LfCsgea2ixCQ1JbDWX3EvD
          source_id: s_bdAHHmEe6HYDXA84a2NbBp
          stance: supports
          locator: CBDB:151017
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bdAHHmEe6HYDXA84a2NbBp
            source_type: api_record
            title: 中国历代人物传记资料库：王山輝（CBDB 151017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151017&o=json
            external_identifier: CBDB:151017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aPrU9gP9PoQcDEGWwLE7r3
        subject_person_id: p_NSq22v18MetWG3Z7WXW4xn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王山輝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1E1DAFdPVdJajro7ebXnXL
          claim_id: c_aPrU9gP9PoQcDEGWwLE7r3
          source_id: s_bdAHHmEe6HYDXA84a2NbBp
          stance: supports
          locator: CBDB:151017
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_MYg1MLtlVmnQmXn4NED-S1
        subject_person_id: p_NSq22v18MetWG3Z7WXW4xn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q8F1bACUG5zjQFJrLyFbx6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cdPqNNlsMr3lGxG7tNGfqf
          claim_id: c_MYg1MLtlVmnQmXn4NED-S1
          source_id: s_cdfksD3yCjTL9mQdv2rZ7K
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantian 2：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cdfksD3yCjTL9mQdv2rZ7K
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 139946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139946&o=json
            external_identifier: CBDB:139946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.459Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Q8F1bACUG5zjQFJrLyFbx6
        status: active
        display_name: 王傑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王山輝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王山輝，唐人物。籍贯吉州，曾任州刺史。（中国历代人物传记资料库 CBDB 151017） | accepted |
| name.primary | 王山輝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Q8F1bACUG5zjQFJrLyFbx6 | 王傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 139946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139946&o=json)
- [中国历代人物传记资料库：王山輝（CBDB 151017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151017&o=json)
