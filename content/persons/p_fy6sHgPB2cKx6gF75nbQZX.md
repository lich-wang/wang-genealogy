---
schema: wang-person/v1
id: p_fy6sHgPB2cKx6gF75nbQZX
status: active
merged_into: null
display_name: 王雄
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_akc7dTj1tc5Pk4ZG9XYkwR
        subject_person_id: p_fy6sHgPB2cKx6gF75nbQZX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Re9V96Wx2Xtw1BGVNnE6AW
          claim_id: c_akc7dTj1tc5Pk4ZG9XYkwR
          source_id: s_FqypgYmxCeYyd7jdcoS6We
          stance: supports
          locator: CBDB:273793
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273793）
          source: &a1
            id: s_FqypgYmxCeYyd7jdcoS6We
            source_type: api_record
            title: 中国历代人物传记资料库：王雄（CBDB 273793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273793&o=json
            external_identifier: CBDB:273793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zuiXpo6DboJGP4mLVtBPGo
        subject_person_id: p_fy6sHgPB2cKx6gF75nbQZX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雄，明人物。弘治十八年進士，籍贯徐州，曾任百戶。（中国历代人物传记资料库 CBDB 273793）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__meI7vu6xB_6v0u7IzglTo
          claim_id: c_zuiXpo6DboJGP4mLVtBPGo
          source_id: s_FqypgYmxCeYyd7jdcoS6We
          stance: supports
          locator: CBDB:273793
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YJ0Y0E2sMIBaELQKBDg2FP
        subject_person_id: p_j2iruMugSZPepsD4KQYC8f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fy6sHgPB2cKx6gF75nbQZX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qdLb9b3P4O3Tgvit7MfSCB
          claim_id: c_YJ0Y0E2sMIBaELQKBDg2FP
          source_id: s_npLc0tVbQs6i3wf78y0R_r
          stance: supports
          locator: CBDB：兄弟 王鏜（201524）之父／母 王林
          quotation: null
          interpretation_note: 由兄弟关系推断：王雄 与 王鏜 为同胞（CBDB 记「弟」），王鏜 之父／母即 王雄 之父／母。
          source:
            id: s_npLc0tVbQs6i3wf78y0R_r
            source_type: api_record
            title: 中国历代人物传记资料库：王雄（CBDB 273793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273793&o=json
            external_identifier: CBDB:273793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j2iruMugSZPepsD4KQYC8f
        status: active
        display_name: 王林
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NvhOrakH1fAEACVXK3SlwW
        subject_person_id: p_fy6sHgPB2cKx6gF75nbQZX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oUoF6dRdhe6WLHeR9E6Mai
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OrP2UzVxGiArv0V2fUc0Fa
          claim_id: c_NvhOrakH1fAEACVXK3SlwW
          source_id: s_npLc0tVbQs6i3wf78y0R_r
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201524 王鏜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_npLc0tVbQs6i3wf78y0R_r
            source_type: api_record
            title: 中国历代人物传记资料库：王雄（CBDB 273793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273793&o=json
            external_identifier: CBDB:273793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oUoF6dRdhe6WLHeR9E6Mai
        status: active
        display_name: 王鏜
        merged_into_person_id: null
---

# 王雄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雄 | accepted |
| bio.summary | 王雄，明人物。弘治十八年進士，籍贯徐州，曾任百戶。（中国历代人物传记资料库 CBDB 273793） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_j2iruMugSZPepsD4KQYC8f | 王林 | accepted |
| other | p_oUoF6dRdhe6WLHeR9E6Mai | 王鏜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王雄（CBDB 273793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273793&o=json)
