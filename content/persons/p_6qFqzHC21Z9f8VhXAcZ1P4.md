---
schema: wang-person/v1
id: p_6qFqzHC21Z9f8VhXAcZ1P4
status: active
merged_into: null
display_name: 王舉正
cbdb_id: 8145
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AhcYnGm5MZbnoP7KrtjkJR
        subject_person_id: p_6qFqzHC21Z9f8VhXAcZ1P4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉正，宋人物。中国历代人物传记资料库（CBDB）以人物编号 8145 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_hrEKEonzmJZyxjNT8za8F0
          claim_id: c_AhcYnGm5MZbnoP7KrtjkJR
          source_id: s_2epzYKD53i1MPLgj9PNNF1
          stance: supports
          locator: CBDB:8145
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2epzYKD53i1MPLgj9PNNF1
            source_type: api_record
            title: 中国历代人物传记资料库：王舉正（CBDB 8145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8145&o=json
            external_identifier: CBDB:8145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qQP1G53stKAXPU5CtshZeC
        subject_person_id: p_6qFqzHC21Z9f8VhXAcZ1P4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7raXEEHNZ1D2FJ2wC4UiH9
          claim_id: c_qQP1G53stKAXPU5CtshZeC
          source_id: s_2epzYKD53i1MPLgj9PNNF1
          stance: supports
          locator: CBDB:8145
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_2epzYKD53i1MPLgj9PNNF1
            source_type: api_record
            title: 中国历代人物传记资料库：王舉正（CBDB 8145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8145&o=json
            external_identifier: CBDB:8145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mYspRvYkc5DuMlDxqz-y1N
        subject_person_id: p_WJHP8YxtLrW6oyDrhKZ1wB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6qFqzHC21Z9f8VhXAcZ1P4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5vBY0e8l51p1c86jEV--UL
          claim_id: c_mYspRvYkc5DuMlDxqz-y1N
          source_id: s_2epzYKD53i1MPLgj9PNNF1
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1473：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WJHP8YxtLrW6oyDrhKZ1wB
        status: active
        display_name: 王化基
        merged_into_person_id: null
  children:
    - claim:
        id: c_EzbnHtCN6aSzuHQY3GD_sK
        subject_person_id: p_6qFqzHC21Z9f8VhXAcZ1P4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HwMVovcNzpxWF4GaJygxAX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_smYZt_VyPafuQOnp14VDYt
          claim_id: c_EzbnHtCN6aSzuHQY3GD_sK
          source_id: s_2epzYKD53i1MPLgj9PNNF1
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1113：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HwMVovcNzpxWF4GaJygxAX
        status: active
        display_name: 王誨
        merged_into_person_id: null
    - claim:
        id: c_wckfM50vaIQjbvskX881Tw
        subject_person_id: p_6qFqzHC21Z9f8VhXAcZ1P4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tK8MZ6JQNdfqFgybNcLcuk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RThJSY4sD9K2aV70-Xv-yh
          claim_id: c_wckfM50vaIQjbvskX881Tw
          source_id: s_2epzYKD53i1MPLgj9PNNF1
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1998：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tK8MZ6JQNdfqFgybNcLcuk
        status: active
        display_name: 王誨說
        merged_into_person_id: null
    - claim:
        id: c_NUXT46MN0kZDlCLLP13191
        subject_person_id: p_6qFqzHC21Z9f8VhXAcZ1P4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rZc2qEJdizKjfm6aY4AiLt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PZ5p5vrQSec11BvyLuD3oy
          claim_id: c_NUXT46MN0kZDlCLLP13191
          source_id: s_61utLnCZSPkp4e64CRFKuH
          stance: supports
          locator: CBDB 双向互证（父 王舉正 ⇄ 子 王說）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_61utLnCZSPkp4e64CRFKuH
            source_type: api_record
            title: 中国历代人物传记资料库：王說（CBDB 1933）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1933&o=json
            external_identifier: CBDB:1933
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.411Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rZc2qEJdizKjfm6aY4AiLt
        status: active
        display_name: 王說
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王舉正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王舉正，宋人物。中国历代人物传记资料库（CBDB）以人物编号 8145 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王舉正 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WJHP8YxtLrW6oyDrhKZ1wB | 王化基 | accepted |
| children | p_HwMVovcNzpxWF4GaJygxAX | 王誨 | accepted |
| children | p_tK8MZ6JQNdfqFgybNcLcuk | 王誨說 | accepted |
| children | p_rZc2qEJdizKjfm6aY4AiLt | 王說 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舉正（CBDB 8145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8145&o=json)
- [中国历代人物传记资料库：王說（CBDB 1933）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1933&o=json)
