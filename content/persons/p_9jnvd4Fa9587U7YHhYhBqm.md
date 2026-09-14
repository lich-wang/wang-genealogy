---
schema: wang-person/v1
id: p_9jnvd4Fa9587U7YHhYhBqm
status: active
merged_into: null
display_name: 王逸
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mPbSUWG2XoXq8py3DsCf2n
        subject_person_id: p_9jnvd4Fa9587U7YHhYhBqm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EvQe3M5VfLscUXcNqMsYDm
          claim_id: c_mPbSUWG2XoXq8py3DsCf2n
          source_id: s_q1CPrBKUaWyV4qTEFCr3v4
          stance: supports
          locator: CBDB:35619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35619）
          source: &a1
            id: s_q1CPrBKUaWyV4qTEFCr3v4
            source_type: api_record
            title: 中国历代人物传记资料库：王逸（CBDB 35619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35619&o=json
            external_identifier: CBDB:35619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.145Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MUnf5aPT2bJKTs4akuiB4e
        subject_person_id: p_9jnvd4Fa9587U7YHhYhBqm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逸，宋人物。籍贯長洲。（中国历代人物传记资料库 CBDB 35619）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g9i9TRXLZa0sUiVksVuWlf
          claim_id: c_MUnf5aPT2bJKTs4akuiB4e
          source_id: s_q1CPrBKUaWyV4qTEFCr3v4
          stance: supports
          locator: CBDB:35619
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6po49X7MJCi5LAh0FZChRI
        subject_person_id: p_KvaDyJMUHzeGStoEsTh4se
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9jnvd4Fa9587U7YHhYhBqm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i9XLz8-H5myRM2jBLIrJUJ
          claim_id: c_6po49X7MJCi5LAh0FZChRI
          source_id: s_6lY7wI06HmGoIXchHPgn-0
          stance: supports
          locator: CBDB 亲属：父（KinPerson 8178）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_6lY7wI06HmGoIXchHPgn-0
            source_type: api_record
            title: 中国历代人物传记资料库：王逸（CBDB 35619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35619&o=json
            external_identifier: CBDB:35619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KvaDyJMUHzeGStoEsTh4se
        status: active
        display_name: 王倫
        merged_into_person_id: null
  children:
    - claim:
        id: c_CW8rvgjHq32IJ276l4urCf
        subject_person_id: p_9jnvd4Fa9587U7YHhYhBqm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F1B51W9KojACS243SPHMon
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YPd0j0g9HOtqXNhTBycI2W
          claim_id: c_CW8rvgjHq32IJ276l4urCf
          source_id: s_Zc1nG06qBXhWi_PUbOQm1d
          stance: supports
          locator: CBDB 亲属：父（KinPerson 35619）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_Zc1nG06qBXhWi_PUbOQm1d
            source_type: api_record
            title: 中国历代人物传记资料库：王機（CBDB 35625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35625&o=json
            external_identifier: CBDB:35625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F1B51W9KojACS243SPHMon
        status: active
        display_name: 王機
        merged_into_person_id: null
    - claim:
        id: c_ga5V0mV75ejDf1fCBCw7wC
        subject_person_id: p_9jnvd4Fa9587U7YHhYhBqm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FhQSUFAukj86AtDqTj82JH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tDMyImpZSqX3ZlJJcYebL5
          claim_id: c_ga5V0mV75ejDf1fCBCw7wC
          source_id: s_liIAJYa2CMoSa4KXC0lw4P
          stance: supports
          locator: CBDB 亲属：父（KinPerson 35619）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_liIAJYa2CMoSa4KXC0lw4P
            source_type: api_record
            title: 中国历代人物传记资料库：王枃（CBDB 35627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35627&o=json
            external_identifier: CBDB:35627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FhQSUFAukj86AtDqTj82JH
        status: active
        display_name: 王枃
        merged_into_person_id: null
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
        id: p_JXA1Eo157nDpJAmXMcXyuw
        status: active
        display_name: 王棠
        merged_into_person_id: null
    - claim:
        id: c_GTSnOLzQf_4irOIy-22spN
        subject_person_id: p_9jnvd4Fa9587U7YHhYhBqm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f2JZeLkhTkTg8WmMiG8z3u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hzBIehghqjBDfOeS499h_h
          claim_id: c_GTSnOLzQf_4irOIy-22spN
          source_id: s_a2gsezIDh6g9uvXm7xqYgj
          stance: supports
          locator: CBDB 亲属：父（KinPerson 35619）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_a2gsezIDh6g9uvXm7xqYgj
            source_type: api_record
            title: 中国历代人物传记资料库：王梓（CBDB 35624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35624&o=json
            external_identifier: CBDB:35624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_f2JZeLkhTkTg8WmMiG8z3u
        status: active
        display_name: 王梓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王逸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逸 | accepted |
| bio.summary | 王逸，宋人物。籍贯長洲。（中国历代人物传记资料库 CBDB 35619） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KvaDyJMUHzeGStoEsTh4se | 王倫 | accepted |
| children | p_F1B51W9KojACS243SPHMon | 王機 | accepted |
| children | p_FhQSUFAukj86AtDqTj82JH | 王枃 | accepted |
| children | p_JXA1Eo157nDpJAmXMcXyuw | 王棠 | accepted |
| children | p_f2JZeLkhTkTg8WmMiG8z3u | 王梓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王機（CBDB 35625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35625&o=json)
- [中国历代人物传记资料库：王枃（CBDB 35627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35627&o=json)
- [中国历代人物传记资料库：王棠（CBDB 35626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35626&o=json)
- [中国历代人物传记资料库：王逸（CBDB 35619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35619&o=json)
- [中国历代人物传记资料库：王梓（CBDB 35624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35624&o=json)
