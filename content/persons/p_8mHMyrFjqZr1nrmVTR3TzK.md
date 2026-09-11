---
schema: wang-person/v1
id: p_8mHMyrFjqZr1nrmVTR3TzK
status: active
merged_into: null
display_name: 王詔
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JVNYvvkYfropT6HfCXner1
        subject_person_id: p_8mHMyrFjqZr1nrmVTR3TzK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2Wz29TyyedVR1nCVmcH12Q
          claim_id: c_JVNYvvkYfropT6HfCXner1
          source_id: s_DXMXvfCuuComCHUn4wVjqF
          stance: supports
          locator: CBDB:1773
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1773）
          source: &a1
            id: s_DXMXvfCuuComCHUn4wVjqF
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 1773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1773&o=json
            external_identifier: CBDB:1773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.229Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iSzFPs8qaszPEkdRtEFave
        subject_person_id: p_8mHMyrFjqZr1nrmVTR3TzK
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
        - id: cs_MEX6iQ9pAmoABdBjPLr4HH
          claim_id: c_iSzFPs8qaszPEkdRtEFave
          source_id: s_DXMXvfCuuComCHUn4wVjqF
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
        id: c_OGq-Yfj3S73sD4H2pC0odc
        subject_person_id: p_VUWtL4RpgKpesMNxN9rT23
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8mHMyrFjqZr1nrmVTR3TzK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A9EfnzkH0eZOTOtJhtcEzA
          claim_id: c_OGq-Yfj3S73sD4H2pC0odc
          source_id: s_ZJHgcTr8owf2bLZ3MEytK9
          stance: supports
          locator: 宋人傳記資料索引(電子版)，950：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZJHgcTr8owf2bLZ3MEytK9
            source_type: api_record
            title: 中国历代人物传记资料库：王舉元（CBDB 1795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1795&o=json
            external_identifier: CBDB:1795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_VUWtL4RpgKpesMNxN9rT23
        status: active
        display_name: 王舉元
        merged_into_person_id: null
  children:
    - claim:
        id: c_RjlIGDRsE5_Z-j6FEzL82F
        subject_person_id: p_8mHMyrFjqZr1nrmVTR3TzK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PMxPh6YFaGgPp7KZmoPJPf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FnRay85q23EwBPGQth91_x
          claim_id: c_RjlIGDRsE5_Z-j6FEzL82F
          source_id: s_DXMXvfCuuComCHUn4wVjqF
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1268：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PMxPh6YFaGgPp7KZmoPJPf
        status: active
        display_name: 王璹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_88vRWvkXc1iB1sNb7GOvWK
        subject_person_id: p_WJHP8YxtLrW6oyDrhKZ1wB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8mHMyrFjqZr1nrmVTR3TzK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8oGC3JZx-isz2ZolfqMlfA
          claim_id: c_88vRWvkXc1iB1sNb7GOvWK
          source_id: s_DXMXvfCuuComCHUn4wVjqF
          stance: supports
          locator: CBDB 双向互证（祖父 王化基 ⇄ 孫 王詔）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_WJHP8YxtLrW6oyDrhKZ1wB
        status: active
        display_name: 王化基
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詔 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VUWtL4RpgKpesMNxN9rT23 | 王舉元 | accepted |
| children | p_PMxPh6YFaGgPp7KZmoPJPf | 王璹 | accepted |
| ancestors | p_WJHP8YxtLrW6oyDrhKZ1wB | 王化基 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舉元（CBDB 1795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1795&o=json)
- [中国历代人物传记资料库：王詔（CBDB 1773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1773&o=json)
