---
schema: wang-person/v1
id: p_a6jmb3ajVms3ePYfHKWKGp
status: active
merged_into: null
display_name: 王綱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MQUXGoHiEKYgPNby9VogwL
        subject_person_id: p_a6jmb3ajVms3ePYfHKWKGp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vJ7B5ZScAErbXNbTNZnDg8
          claim_id: c_MQUXGoHiEKYgPNby9VogwL
          source_id: s_ML9FjNANmmG3EfnYzWQVQd
          stance: supports
          locator: CBDB:161931
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（161931）
          source: &a1
            id: s_ML9FjNANmmG3EfnYzWQVQd
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 161931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161931&o=json
            external_identifier: CBDB:161931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AfFWziWgi8AwKPvJ36NVDi
        subject_person_id: p_a6jmb3ajVms3ePYfHKWKGp
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
        - id: cs_PbgfxqMZmGHMGtD5d1DtcF
          claim_id: c_AfFWziWgi8AwKPvJ36NVDi
          source_id: s_ML9FjNANmmG3EfnYzWQVQd
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
        id: c_Pw4q_9yFOsyTmhuoAgjAWy
        subject_person_id: p_a6jmb3ajVms3ePYfHKWKGp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NkAbTJ9d5SmH3apwzG6XBB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m253hcn4W_U2U1uacMk5JF
          claim_id: c_Pw4q_9yFOsyTmhuoAgjAWy
          source_id: s_ML9FjNANmmG3EfnYzWQVQd
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Zhenguan25：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NkAbTJ9d5SmH3apwzG6XBB
        status: active
        display_name: 王靈仙
        merged_into_person_id: null
  other: []
---

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_NkAbTJ9d5SmH3apwzG6XBB | 王靈仙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 161931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161931&o=json)
