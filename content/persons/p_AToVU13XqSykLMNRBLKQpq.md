---
schema: wang-person/v1
id: p_AToVU13XqSykLMNRBLKQpq
status: active
merged_into: null
display_name: 王夔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uu1BEHAcUjtaYrfSSK8Kkn
        subject_person_id: p_AToVU13XqSykLMNRBLKQpq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zysnq22CV3X2MoMqT2oWPt
          claim_id: c_uu1BEHAcUjtaYrfSSK8Kkn
          source_id: s_Ky9gNqM2BMoGNf1YvoaHjy
          stance: supports
          locator: CBDB:292178
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292178）
          source: &a1
            id: s_Ky9gNqM2BMoGNf1YvoaHjy
            source_type: api_record
            title: 中国历代人物传记资料库：王夔（CBDB 292178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292178&o=json
            external_identifier: CBDB:292178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.390Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7RGgJBD64BE9dqKUztQgqH
        subject_person_id: p_AToVU13XqSykLMNRBLKQpq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夔，明人物。嘉靖十一年進士，籍贯南充，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 292178）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eZ1TvzV-xdUtF0dXY2y1xP
          claim_id: c_7RGgJBD64BE9dqKUztQgqH
          source_id: s_Ky9gNqM2BMoGNf1YvoaHjy
          stance: supports
          locator: CBDB:292178
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5eiV4NoaKuPqVBDxJGuRWq
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AToVU13XqSykLMNRBLKQpq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_spGRScciKaLMuMiegeCr7u
          claim_id: c_5eiV4NoaKuPqVBDxJGuRWq
          source_id: s_kP2fo4gTYAXq-LOSSgbTOL
          stance: supports
          locator: CBDB：兄弟 王繼宗（126879）之父／母 王汾
          quotation: null
          interpretation_note: 由兄弟关系推断：王夔 与 王繼宗 为同胞（CBDB 记「兄」），王繼宗 之父／母即 王夔 之父／母。
          source:
            id: s_kP2fo4gTYAXq-LOSSgbTOL
            source_type: api_record
            title: 中国历代人物传记资料库：王夔（CBDB 292178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292178&o=json
            external_identifier: CBDB:292178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AjJ9D9hYYBcRjzGCjrMcoe
        status: active
        display_name: 王汾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tUeKmDsdPjIs1akO05t4Eh
        subject_person_id: p_AToVU13XqSykLMNRBLKQpq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fn0ZD3y3bzTN6mqHGLeRcx
          claim_id: c_tUeKmDsdPjIs1akO05t4Eh
          source_id: s_kP2fo4gTYAXq-LOSSgbTOL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126879 王繼宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kP2fo4gTYAXq-LOSSgbTOL
            source_type: api_record
            title: 中国历代人物传记资料库：王夔（CBDB 292178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292178&o=json
            external_identifier: CBDB:292178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        status: active
        display_name: 王繼宗
        merged_into_person_id: null
---

# 王夔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夔 | accepted |
| bio.summary | 王夔，明人物。嘉靖十一年進士，籍贯南充，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 292178） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AjJ9D9hYYBcRjzGCjrMcoe | 王汾 | accepted |
| other | p_tJDfPMXaXoCJ7dnxXR4ZsL | 王繼宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夔（CBDB 292178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292178&o=json)
