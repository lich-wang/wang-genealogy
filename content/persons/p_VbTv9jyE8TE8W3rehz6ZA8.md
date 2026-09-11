---
schema: wang-person/v1
id: p_VbTv9jyE8TE8W3rehz6ZA8
status: active
merged_into: null
display_name: 王義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TPxJZ9DTwNCdnjBYEySSce
        subject_person_id: p_VbTv9jyE8TE8W3rehz6ZA8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ETFh2ZgrB3JXrqUGrY2G7U
          claim_id: c_TPxJZ9DTwNCdnjBYEySSce
          source_id: s_buN1prT6gLGm5dKqQvLawV
          stance: supports
          locator: CBDB:153847
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（153847）
          source: &a1
            id: s_buN1prT6gLGm5dKqQvLawV
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 153847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153847&o=json
            external_identifier: CBDB:153847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XRoXd2RwmAjvuxPJcNw6XD
        subject_person_id: p_VbTv9jyE8TE8W3rehz6ZA8
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
        - id: cs_hqAzTiEakTsqGDTrPEeJfx
          claim_id: c_XRoXd2RwmAjvuxPJcNw6XD
          source_id: s_buN1prT6gLGm5dKqQvLawV
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
        id: c_jX0Wb4XDmsvrvF4ZGwpvA9
        subject_person_id: p_VbTv9jyE8TE8W3rehz6ZA8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UE1q4HTiHr6dP2UxKLMoFA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bSw3eW5-EjuAImL2yb31-G
          claim_id: c_jX0Wb4XDmsvrvF4ZGwpvA9
          source_id: s_5ZZNZR6VKb5bbwhoTrqg8B
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 127：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5ZZNZR6VKb5bbwhoTrqg8B
            source_type: api_record
            title: 中国历代人物传记资料库：王元泰（CBDB 140931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140931&o=json
            external_identifier: CBDB:140931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.538Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UE1q4HTiHr6dP2UxKLMoFA
        status: active
        display_name: 王元泰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UE1q4HTiHr6dP2UxKLMoFA | 王元泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王義（CBDB 153847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153847&o=json)
- [中国历代人物传记资料库：王元泰（CBDB 140931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140931&o=json)
