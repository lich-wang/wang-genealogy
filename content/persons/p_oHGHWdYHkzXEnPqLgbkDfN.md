---
schema: wang-person/v1
id: p_oHGHWdYHkzXEnPqLgbkDfN
status: active
merged_into: null
display_name: 王親賢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rMq8gfbAUBhMMr7atmJLJz
        subject_person_id: p_oHGHWdYHkzXEnPqLgbkDfN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王親賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FQ7BvivsrWYy8idpCuaU7J
          claim_id: c_rMq8gfbAUBhMMr7atmJLJz
          source_id: s_1uqPwikQvokPVPBXgkmJTc
          stance: supports
          locator: CBDB:285855
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285855）
          source: &a1
            id: s_1uqPwikQvokPVPBXgkmJTc
            source_type: api_record
            title: 中国历代人物传记资料库：王親賢（CBDB 285855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285855&o=json
            external_identifier: CBDB:285855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.222Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fRrS37KBnNvWrk7YdWCrit
        subject_person_id: p_oHGHWdYHkzXEnPqLgbkDfN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王親賢，明人物。正德十六年進士，籍贯交河。（中国历代人物传记资料库 CBDB 285855）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UkeQtrHH87Kb61md_cUx6P
          claim_id: c_fRrS37KBnNvWrk7YdWCrit
          source_id: s_1uqPwikQvokPVPBXgkmJTc
          stance: supports
          locator: CBDB:285855
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tIzcXkR-JWNy2GeOyn8ZWI
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oHGHWdYHkzXEnPqLgbkDfN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5J73Q8dM_4GD3j2K09O9g1
          claim_id: c_tIzcXkR-JWNy2GeOyn8ZWI
          source_id: s_XtKLfuAgeZp20UosqPtD4_
          stance: supports
          locator: CBDB：兄弟 王重賢（202269）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王親賢 与 王重賢 为同胞（CBDB 记「兄」），王重賢 之父／母即 王親賢 之父／母。
          source:
            id: s_XtKLfuAgeZp20UosqPtD4_
            source_type: api_record
            title: 中国历代人物传记资料库：王親賢（CBDB 285855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285855&o=json
            external_identifier: CBDB:285855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yeJtEcC7cBaU9sVyVGy7xj
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_yu-8TG_8PXNKZNM7snzMRH
        subject_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oHGHWdYHkzXEnPqLgbkDfN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j-Bp6gvoFn6DwEzeXwGZ8Y
          claim_id: c_yu-8TG_8PXNKZNM7snzMRH
          source_id: s_XtKLfuAgeZp20UosqPtD4_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202269 王重賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XtKLfuAgeZp20UosqPtD4_
            source_type: api_record
            title: 中国历代人物传记资料库：王親賢（CBDB 285855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285855&o=json
            external_identifier: CBDB:285855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HgaWqM5nscyN4tzrPQd5UX
        status: active
        display_name: 王重賢
        merged_into_person_id: null
---

# 王親賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王親賢 | accepted |
| bio.summary | 王親賢，明人物。正德十六年進士，籍贯交河。（中国历代人物传记资料库 CBDB 285855） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yeJtEcC7cBaU9sVyVGy7xj | 王鉞 | accepted |
| other | p_HgaWqM5nscyN4tzrPQd5UX | 王重賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王親賢（CBDB 285855）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285855&o=json)
