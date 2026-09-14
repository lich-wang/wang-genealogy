---
schema: wang-person/v1
id: p_3yC6vhxnG8uVdkeuYLsPjZ
status: active
merged_into: null
display_name: 王存義
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GmPDJZBjwH9e7f6YSsJxup
        subject_person_id: p_3yC6vhxnG8uVdkeuYLsPjZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W8Q8nn21gLS9j4vrHxUtQt
          claim_id: c_GmPDJZBjwH9e7f6YSsJxup
          source_id: s_vybuzRreYBsq1kXXZZ2SHw
          stance: supports
          locator: CBDB:299654
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（299654）
          source: &a1
            id: s_vybuzRreYBsq1kXXZZ2SHw
            source_type: api_record
            title: 中国历代人物传记资料库：王存義（CBDB 299654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299654&o=json
            external_identifier: CBDB:299654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.609Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PxLKvv9rsCPzF14UxE7Cu8
        subject_person_id: p_3yC6vhxnG8uVdkeuYLsPjZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存義，明人物。嘉靖十七年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 299654）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wG6zr4zQmkngGSRwce8qBf
          claim_id: c_PxLKvv9rsCPzF14UxE7Cu8
          source_id: s_vybuzRreYBsq1kXXZZ2SHw
          stance: supports
          locator: CBDB:299654
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qkvYWLly5yfUfpxaArs4sh
        subject_person_id: p_WB4oNw1ycyU9xM4j8SWNsC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3yC6vhxnG8uVdkeuYLsPjZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iic8HmGtH4tyg9jbQTpgoJ
          claim_id: c_qkvYWLly5yfUfpxaArs4sh
          source_id: s_KYL76OLBlIVtPQbawCjP-n
          stance: supports
          locator: CBDB：兄弟 王嘉謨（203092）之父／母 王孜
          quotation: null
          interpretation_note: 由兄弟关系推断：王存義 与 王嘉謨 为同胞（CBDB 记「弟」），王嘉謨 之父／母即 王存義 之父／母。
          source:
            id: s_KYL76OLBlIVtPQbawCjP-n
            source_type: api_record
            title: 中国历代人物传记资料库：王存義（CBDB 299654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299654&o=json
            external_identifier: CBDB:299654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WB4oNw1ycyU9xM4j8SWNsC
        status: active
        display_name: 王孜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_pCVZZgrMPW4ckmuNcr0oMq
        subject_person_id: p_3yC6vhxnG8uVdkeuYLsPjZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pg2fYMa25vFJ1qFwgpCHBx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zW1ypCGdlouyLu1nmG8OEJ
          claim_id: c_pCVZZgrMPW4ckmuNcr0oMq
          source_id: s_KYL76OLBlIVtPQbawCjP-n
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203092 王嘉謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KYL76OLBlIVtPQbawCjP-n
            source_type: api_record
            title: 中国历代人物传记资料库：王存義（CBDB 299654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299654&o=json
            external_identifier: CBDB:299654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pg2fYMa25vFJ1qFwgpCHBx
        status: active
        display_name: 王嘉謨
        merged_into_person_id: null
---

# 王存義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王存義 | accepted |
| bio.summary | 王存義，明人物。嘉靖十七年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 299654） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WB4oNw1ycyU9xM4j8SWNsC | 王孜 | accepted |
| other | p_pg2fYMa25vFJ1qFwgpCHBx | 王嘉謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王存義（CBDB 299654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299654&o=json)
