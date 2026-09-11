---
schema: wang-person/v1
id: p_LaN7hTgUoNQbyqGUidTS8A
status: active
merged_into: null
display_name: 王棨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_99z3tDTvY3G6mLiXApUGiJ
        subject_person_id: p_LaN7hTgUoNQbyqGUidTS8A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iugGaAN8BHmm52FKLHiHKQ
          claim_id: c_99z3tDTvY3G6mLiXApUGiJ
          source_id: s_JwrEyYHCGpeHiZo3p14aPu
          stance: supports
          locator: CBDB:4204
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（4204）
          source: &a1
            id: s_JwrEyYHCGpeHiZo3p14aPu
            source_type: api_record
            title: 中国历代人物传记资料库：王棨（CBDB 4204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=4204&o=json
            external_identifier: CBDB:4204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DUaXUPQViDqqReKLzZ38Cv
        subject_person_id: p_LaN7hTgUoNQbyqGUidTS8A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7F74eUrUE4Yd85uv8LLsPs
          claim_id: c_DUaXUPQViDqqReKLzZ38Cv
          source_id: s_JwrEyYHCGpeHiZo3p14aPu
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
  descendants:
    - claim:
        id: c_q2z7KsnLzTsAaobauJU14w
        subject_person_id: p_LaN7hTgUoNQbyqGUidTS8A
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sMs1sh8RxZBVXLuidE5udf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4DI_4IF5lLG7id4RHNxZwh
          claim_id: c_q2z7KsnLzTsAaobauJU14w
          source_id: s_JwrEyYHCGpeHiZo3p14aPu
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王仁僓 ⇄ 曾祖 王棨）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_sMs1sh8RxZBVXLuidE5udf
        status: active
        display_name: 王仁僓
        merged_into_person_id: null
  other: []
---

# 王棨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棨 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_sMs1sh8RxZBVXLuidE5udf | 王仁僓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棨（CBDB 4204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=4204&o=json)
