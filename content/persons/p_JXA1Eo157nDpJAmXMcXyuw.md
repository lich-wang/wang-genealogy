---
schema: wang-person/v1
id: p_JXA1Eo157nDpJAmXMcXyuw
status: active
merged_into: null
display_name: 王棠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vsVn1L9aSVR6qTrWCyyU9X
        subject_person_id: p_JXA1Eo157nDpJAmXMcXyuw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qg6TzFmAvtN6HiKWXc1bYT
          claim_id: c_vsVn1L9aSVR6qTrWCyyU9X
          source_id: s_ZiV724C4P9yvMtKLcwKGn5
          stance: supports
          locator: CBDB:35626
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35626）
          source: &a1
            id: s_ZiV724C4P9yvMtKLcwKGn5
            source_type: api_record
            title: 中国历代人物传记资料库：王棠（CBDB 35626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35626&o=json
            external_identifier: CBDB:35626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.154Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FuFxbwWh3iLxsv9NhDZoKh
        subject_person_id: p_JXA1Eo157nDpJAmXMcXyuw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棠，宋人物。籍贯長洲，曾任承議郎。（中国历代人物传记资料库 CBDB 35626）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Gi4t0RvGjm6eMSTo0Uxei7
          claim_id: c_FuFxbwWh3iLxsv9NhDZoKh
          source_id: s_ZiV724C4P9yvMtKLcwKGn5
          stance: supports
          locator: CBDB:35626
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2Cbv6Ss66xcxD1dpmI5ctW
        subject_person_id: p_9jnvd4Fa9587U7YHhYhBqm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JXA1Eo157nDpJAmXMcXyuw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Eq6MElSlTav5KuiHQNELo3
          claim_id: c_2Cbv6Ss66xcxD1dpmI5ctW
          source_id: s_XKiVvUpAkTyyVL4UAQNLnZ
          stance: supports
          locator: CBDB 亲属：父（KinPerson 35619）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_XKiVvUpAkTyyVL4UAQNLnZ
            source_type: api_record
            title: 中国历代人物传记资料库：王棠（CBDB 35626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35626&o=json
            external_identifier: CBDB:35626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9jnvd4Fa9587U7YHhYhBqm
        status: active
        display_name: 王逸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王棠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棠 | accepted |
| bio.summary | 王棠，宋人物。籍贯長洲，曾任承議郎。（中国历代人物传记资料库 CBDB 35626） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9jnvd4Fa9587U7YHhYhBqm | 王逸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棠（CBDB 35626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35626&o=json)
