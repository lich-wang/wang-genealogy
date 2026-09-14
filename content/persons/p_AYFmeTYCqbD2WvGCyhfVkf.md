---
schema: wang-person/v1
id: p_AYFmeTYCqbD2WvGCyhfVkf
status: active
merged_into: null
display_name: 王珪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w4CAMJ1TnxXwan5qnD2yXy
        subject_person_id: p_AYFmeTYCqbD2WvGCyhfVkf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RBNQ7NrFmkrrqUmQmCepi1
          claim_id: c_w4CAMJ1TnxXwan5qnD2yXy
          source_id: s_PnhBW3yfEhGDvNEVDuuYHP
          stance: supports
          locator: CBDB:283198
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283198）
          source: &a1
            id: s_PnhBW3yfEhGDvNEVDuuYHP
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 283198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283198&o=json
            external_identifier: CBDB:283198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.129Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_98bCEp233jZCrH1DrLRX5A
        subject_person_id: p_AYFmeTYCqbD2WvGCyhfVkf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪，明人物。景泰二年進士，籍贯仁和。（中国历代人物传记资料库 CBDB 283198）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fx1BCQ8wjn7pNpwhiRGizv
          claim_id: c_98bCEp233jZCrH1DrLRX5A
          source_id: s_PnhBW3yfEhGDvNEVDuuYHP
          stance: supports
          locator: CBDB:283198
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2FnuLyZA6_0jqimd8onG55
        subject_person_id: p_do7sRWRkXm9HbF91DJTFWy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AYFmeTYCqbD2WvGCyhfVkf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SE83jVxbalhCoy8CkSxsqZ
          claim_id: c_2FnuLyZA6_0jqimd8onG55
          source_id: s_vriS7AYK-Y9hutKshPM_g5
          stance: supports
          locator: CBDB：兄弟 王獻（126875）之父／母 王智
          quotation: null
          interpretation_note: 由兄弟关系推断：王珪 与 王獻 为同胞（CBDB 记「兄」），王獻 之父／母即 王珪 之父／母。
          source:
            id: s_vriS7AYK-Y9hutKshPM_g5
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 283198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283198&o=json
            external_identifier: CBDB:283198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_do7sRWRkXm9HbF91DJTFWy
        status: active
        display_name: 王智
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_CgWK7Ddp_q5TftAc7FvPjX
        subject_person_id: p_AYFmeTYCqbD2WvGCyhfVkf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YyEev9vZmvMQtF-hG6S1GN
          claim_id: c_CgWK7Ddp_q5TftAc7FvPjX
          source_id: s_vriS7AYK-Y9hutKshPM_g5
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126875 王獻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vriS7AYK-Y9hutKshPM_g5
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 283198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283198&o=json
            external_identifier: CBDB:283198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_G4qJhuZsQYn7A9yfHcTR6Z
        status: active
        display_name: 王獻
        merged_into_person_id: null
---

# 王珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珪 | accepted |
| bio.summary | 王珪，明人物。景泰二年進士，籍贯仁和。（中国历代人物传记资料库 CBDB 283198） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_do7sRWRkXm9HbF91DJTFWy | 王智 | accepted |
| other | p_G4qJhuZsQYn7A9yfHcTR6Z | 王獻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 283198）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283198&o=json)
