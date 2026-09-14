---
schema: wang-person/v1
id: p_BzGsAVd9TumPWKG2eq2hgp
status: active
merged_into: null
display_name: 王應
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NsCeaYhBhu3VEeeVxwA9t2
        subject_person_id: p_BzGsAVd9TumPWKG2eq2hgp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PwgspqeEj2RtGKFNjubCGp
          claim_id: c_NsCeaYhBhu3VEeeVxwA9t2
          source_id: s_7VJbYP6ZhNdYw7Gj552Ka8
          stance: supports
          locator: CBDB:250482
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（250482）
          source: &a1
            id: s_7VJbYP6ZhNdYw7Gj552Ka8
            source_type: api_record
            title: 中国历代人物传记资料库：王應（CBDB 250482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250482&o=json
            external_identifier: CBDB:250482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.225Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jJUcXfnbP8QDntquAUXi6G
        subject_person_id: p_BzGsAVd9TumPWKG2eq2hgp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應，明人物。成化十一年進士，籍贯南城。（中国历代人物传记资料库 CBDB 250482）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TA74M-szVS8r_FJyvzr3v3
          claim_id: c_jJUcXfnbP8QDntquAUXi6G
          source_id: s_7VJbYP6ZhNdYw7Gj552Ka8
          stance: supports
          locator: CBDB:250482
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0VKLEEK3krV_4ze-1xq-rK
        subject_person_id: p_dSXaHGfxZk39n9qckAbpLw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BzGsAVd9TumPWKG2eq2hgp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u6tzCNMWd7kTKmQoyneNo1
          claim_id: c_0VKLEEK3krV_4ze-1xq-rK
          source_id: s_1-3ywJjjF4X27_3U_SFRao
          stance: supports
          locator: CBDB：兄弟 王華（199850）之父／母 王用政
          quotation: null
          interpretation_note: 由兄弟关系推断：王應 与 王華 为同胞（CBDB 记「弟」），王華 之父／母即 王應 之父／母。
          source:
            id: s_1-3ywJjjF4X27_3U_SFRao
            source_type: api_record
            title: 中国历代人物传记资料库：王應（CBDB 250482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250482&o=json
            external_identifier: CBDB:250482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dSXaHGfxZk39n9qckAbpLw
        status: active
        display_name: 王用政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_MnBArYPoIkRClP_9GzCP6h
        subject_person_id: p_6EMaiK2d7QYsew9Vg9gPZP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_BzGsAVd9TumPWKG2eq2hgp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xSipkldqzFE4GfJJYJUQiW
          claim_id: c_MnBArYPoIkRClP_9GzCP6h
          source_id: s_1-3ywJjjF4X27_3U_SFRao
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199850 王華）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1-3ywJjjF4X27_3U_SFRao
            source_type: api_record
            title: 中国历代人物传记资料库：王應（CBDB 250482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250482&o=json
            external_identifier: CBDB:250482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6EMaiK2d7QYsew9Vg9gPZP
        status: active
        display_name: 王華
        merged_into_person_id: null
---

# 王應

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應 | accepted |
| bio.summary | 王應，明人物。成化十一年進士，籍贯南城。（中国历代人物传记资料库 CBDB 250482） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dSXaHGfxZk39n9qckAbpLw | 王用政 | accepted |
| other | p_6EMaiK2d7QYsew9Vg9gPZP | 王華 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應（CBDB 250482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250482&o=json)
