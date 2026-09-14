---
schema: wang-person/v1
id: p_WB4oNw1ycyU9xM4j8SWNsC
status: active
merged_into: null
display_name: 王孜
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_937BKzMqgRU3PS1KXQ47dV
        subject_person_id: p_WB4oNw1ycyU9xM4j8SWNsC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6xCkHknEfM43q9W5giJih8
          claim_id: c_937BKzMqgRU3PS1KXQ47dV
          source_id: s_5hEEf6D7RFNurJeGsiAkSD
          stance: supports
          locator: CBDB:299650
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（299650）
          source: &a1
            id: s_5hEEf6D7RFNurJeGsiAkSD
            source_type: api_record
            title: 中国历代人物传记资料库：王孜（CBDB 299650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299650&o=json
            external_identifier: CBDB:299650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.607Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7qPrLjLGQydFGSGpYvnHwn
        subject_person_id: p_WB4oNw1ycyU9xM4j8SWNsC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孜，明人物。嘉靖十七年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 299650）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_shgkfu77mSy8leelrESPZh
          claim_id: c_7qPrLjLGQydFGSGpYvnHwn
          source_id: s_5hEEf6D7RFNurJeGsiAkSD
          stance: supports
          locator: CBDB:299650
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_salU_QXwNeWb-zyFTrIYmg
        subject_person_id: p_WB4oNw1ycyU9xM4j8SWNsC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pg2fYMa25vFJ1qFwgpCHBx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5j9RqxGFR__gQg0zYiwo-B
          claim_id: c_salU_QXwNeWb-zyFTrIYmg
          source_id: s_5hEEf6D7RFNurJeGsiAkSD
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第九十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pg2fYMa25vFJ1qFwgpCHBx
        status: active
        display_name: 王嘉謨
        merged_into_person_id: null
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
        id: p_3yC6vhxnG8uVdkeuYLsPjZ
        status: active
        display_name: 王存義
        merged_into_person_id: null
    - claim:
        id: c_T4XPpQQ4c3w5Sf31pAtQyM
        subject_person_id: p_WB4oNw1ycyU9xM4j8SWNsC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AeFBLZC4o62jtbUSeCCdXo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K8pyiFkG7iQ1QUaJ8d88tm
          claim_id: c_T4XPpQQ4c3w5Sf31pAtQyM
          source_id: s_JIvlwfgLwoffqzsyrNgH3w
          stance: supports
          locator: CBDB：兄弟 王嘉謨（203092）之父／母 王孜
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉言 与 王嘉謨 为同胞（CBDB 记「弟」），王嘉謨 之父／母即 王嘉言 之父／母。
          source:
            id: s_JIvlwfgLwoffqzsyrNgH3w
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉言（CBDB 299655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299655&o=json
            external_identifier: CBDB:299655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AeFBLZC4o62jtbUSeCCdXo
        status: active
        display_name: 王嘉言
        merged_into_person_id: null
    - claim:
        id: c_ekFQXbcVJtljVS_p_p0L7z
        subject_person_id: p_WB4oNw1ycyU9xM4j8SWNsC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T2XuKsQTFHWEJK185Z8N3M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CsoxHg2fGjrTUsYOzIUq_T
          claim_id: c_ekFQXbcVJtljVS_p_p0L7z
          source_id: s_SlE25spWskTIz5Qd-Xs8_0
          stance: supports
          locator: CBDB：兄弟 王嘉謨（203092）之父／母 王孜
          quotation: null
          interpretation_note: 由兄弟关系推断：王存仁 与 王嘉謨 为同胞（CBDB 记「弟」），王嘉謨 之父／母即 王存仁 之父／母。
          source:
            id: s_SlE25spWskTIz5Qd-Xs8_0
            source_type: api_record
            title: 中国历代人物传记资料库：王存仁（CBDB 299653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299653&o=json
            external_identifier: CBDB:299653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_T2XuKsQTFHWEJK185Z8N3M
        status: active
        display_name: 王存仁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孜 | accepted |
| bio.summary | 王孜，明人物。嘉靖十七年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 299650） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_pg2fYMa25vFJ1qFwgpCHBx | 王嘉謨 | accepted |
| children | p_3yC6vhxnG8uVdkeuYLsPjZ | 王存義 | accepted |
| children | p_AeFBLZC4o62jtbUSeCCdXo | 王嘉言 | accepted |
| children | p_T2XuKsQTFHWEJK185Z8N3M | 王存仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王存仁（CBDB 299653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299653&o=json)
- [中国历代人物传记资料库：王存義（CBDB 299654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299654&o=json)
- [中国历代人物传记资料库：王嘉言（CBDB 299655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299655&o=json)
- [中国历代人物传记资料库：王孜（CBDB 299650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299650&o=json)
