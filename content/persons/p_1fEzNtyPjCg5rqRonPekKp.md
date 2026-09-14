---
schema: wang-person/v1
id: p_1fEzNtyPjCg5rqRonPekKp
status: active
merged_into: null
display_name: 王澤
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x845ZJZ4RwRHmQg4beJSFu
        subject_person_id: p_1fEzNtyPjCg5rqRonPekKp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YHDMYnkHz8E2SsKoL1LKUV
          claim_id: c_x845ZJZ4RwRHmQg4beJSFu
          source_id: s_oRCAgNvVuPRjjqBzMZFSP8
          stance: supports
          locator: CBDB:257073
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257073）
          source: &a1
            id: s_oRCAgNvVuPRjjqBzMZFSP8
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 257073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257073&o=json
            external_identifier: CBDB:257073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.407Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_38PREy6m5ZH5qQnJfSUqtF
        subject_person_id: p_1fEzNtyPjCg5rqRonPekKp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤，明人物。成化十七年進士，籍贯靈璧，曾任紀善。（中国历代人物传记资料库 CBDB 257073）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XXBe9Cdid5e-KmEoZgByKO
          claim_id: c_38PREy6m5ZH5qQnJfSUqtF
          source_id: s_oRCAgNvVuPRjjqBzMZFSP8
          stance: supports
          locator: CBDB:257073
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7RQ6feULIK9k1Q0Cs9uzK6
        subject_person_id: p_1fEzNtyPjCg5rqRonPekKp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FebULYZ1Mok5osGeZL97Vp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rstty4MlXzkGFr_YovmD7t
          claim_id: c_7RQ6feULIK9k1Q0Cs9uzK6
          source_id: s_oRCAgNvVuPRjjqBzMZFSP8
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百五十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FebULYZ1Mok5osGeZL97Vp
        status: active
        display_name: 王嶽
        merged_into_person_id: null
    - claim:
        id: c_RDRDDTUjrsqGd1-StLBJef
        subject_person_id: p_1fEzNtyPjCg5rqRonPekKp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vDzf6isJ8G9fr8y7scc2fq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wMWrkP_oDMFCnUeZLmgrTe
          claim_id: c_RDRDDTUjrsqGd1-StLBJef
          source_id: s_oRCAgNvVuPRjjqBzMZFSP8
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第四十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vDzf6isJ8G9fr8y7scc2fq
        status: active
        display_name: 王崑
        merged_into_person_id: null
    - claim:
        id: c_7WcyCZ-_1b5NpKjdfZIHDc
        subject_person_id: p_1fEzNtyPjCg5rqRonPekKp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_786rPa2cye1V5UjnNigPhV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NDGw_iYAOY-i8X0aachsze
          claim_id: c_7WcyCZ-_1b5NpKjdfZIHDc
          source_id: s_I93RjexzBWrCyZEEg9xv6h
          stance: supports
          locator: CBDB：兄弟 王嶽（200389）之父／母 王澤
          quotation: null
          interpretation_note: 由兄弟关系推断：王崙 与 王嶽 为同胞（CBDB 记「兄」），王嶽 之父／母即 王崙 之父／母。
          source:
            id: s_I93RjexzBWrCyZEEg9xv6h
            source_type: api_record
            title: 中国历代人物传记资料库：王崙（CBDB 257078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257078&o=json
            external_identifier: CBDB:257078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_786rPa2cye1V5UjnNigPhV
        status: active
        display_name: 王崙
        merged_into_person_id: null
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
        id: p_8TvUMMPffQgp4RCcfKc6UW
        status: active
        display_name: 王嶧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤 | accepted |
| bio.summary | 王澤，明人物。成化十七年進士，籍贯靈璧，曾任紀善。（中国历代人物传记资料库 CBDB 257073） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_FebULYZ1Mok5osGeZL97Vp | 王嶽 | accepted |
| children | p_vDzf6isJ8G9fr8y7scc2fq | 王崑 | accepted |
| children | p_786rPa2cye1V5UjnNigPhV | 王崙 | accepted |
| children | p_8TvUMMPffQgp4RCcfKc6UW | 王嶧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崙（CBDB 257078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257078&o=json)
- [中国历代人物传记资料库：王嶧（CBDB 281110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281110&o=json)
- [中国历代人物传记资料库：王澤（CBDB 257073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257073&o=json)
