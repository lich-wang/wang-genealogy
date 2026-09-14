---
schema: wang-person/v1
id: p_8TvUMMPffQgp4RCcfKc6UW
status: active
merged_into: null
display_name: 王嶧
cbdb_id: 281110
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EVuiA2RW3pr3Gxnb2FTB7A
        subject_person_id: p_8TvUMMPffQgp4RCcfKc6UW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶧，明人物。正德十二年進士，籍贯靈璧。（中国历代人物传记资料库 CBDB 281110）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_BpaY5Nv2CpL_LZuucGnOdS
          claim_id: c_EVuiA2RW3pr3Gxnb2FTB7A
          source_id: s_wWShzBvj4ttZigQxYLotds
          stance: supports
          locator: CBDB:281110
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wWShzBvj4ttZigQxYLotds
            source_type: api_record
            title: 中国历代人物传记资料库：王嶧（CBDB 281110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281110&o=json
            external_identifier: CBDB:281110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NDg4ZEkCoypFYrz5iDcGNt
        subject_person_id: p_8TvUMMPffQgp4RCcfKc6UW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Pzu5Gup5eM6AfSgHgGSFgB
          claim_id: c_NDg4ZEkCoypFYrz5iDcGNt
          source_id: s_wWShzBvj4ttZigQxYLotds
          stance: supports
          locator: CBDB:281110
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TTMRgZc09vJ68jGILDWlsP
        subject_person_id: p_1fEzNtyPjCg5rqRonPekKp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8TvUMMPffQgp4RCcfKc6UW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hdWAdaY7XeJI4QxrllQ5gA
          claim_id: c_TTMRgZc09vJ68jGILDWlsP
          source_id: s_ee3Ly-Bb_sn5nWIkoXS0JI
          stance: supports
          locator: CBDB：兄弟 王崑（201957）之父／母 王澤
          quotation: null
          interpretation_note: 由兄弟关系推断：王嶧 与 王崑 为同胞（CBDB 记「兄」），王崑 之父／母即 王嶧 之父／母。
          source:
            id: s_ee3Ly-Bb_sn5nWIkoXS0JI
            source_type: api_record
            title: 中国历代人物传记资料库：王嶧（CBDB 281110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281110&o=json
            external_identifier: CBDB:281110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1fEzNtyPjCg5rqRonPekKp
        status: active
        display_name: 王澤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qxgj20RdOwapRgGxeXxtMj
        subject_person_id: p_8TvUMMPffQgp4RCcfKc6UW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vDzf6isJ8G9fr8y7scc2fq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uEt_gltN4z214E-5CsJPxx
          claim_id: c_qxgj20RdOwapRgGxeXxtMj
          source_id: s_ee3Ly-Bb_sn5nWIkoXS0JI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201957 王崑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ee3Ly-Bb_sn5nWIkoXS0JI
            source_type: api_record
            title: 中国历代人物传记资料库：王嶧（CBDB 281110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281110&o=json
            external_identifier: CBDB:281110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vDzf6isJ8G9fr8y7scc2fq
        status: active
        display_name: 王崑
        merged_into_person_id: null
---

# 王嶧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嶧，明人物。正德十二年進士，籍贯靈璧。（中国历代人物传记资料库 CBDB 281110） | accepted |
| name.primary | 王嶧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1fEzNtyPjCg5rqRonPekKp | 王澤 | accepted |
| other | p_vDzf6isJ8G9fr8y7scc2fq | 王崑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嶧（CBDB 281110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281110&o=json)
