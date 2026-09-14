---
schema: wang-person/v1
id: p_fQRM5daE8Wp7q6E4q4CiyU
status: active
merged_into: null
display_name: 王整
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NqAQXapAY4QkvPWhUxdP5q
        subject_person_id: p_fQRM5daE8Wp7q6E4q4CiyU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王整
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YJPSG2DmA33gpra3QrKDrJ
          claim_id: c_NqAQXapAY4QkvPWhUxdP5q
          source_id: s_YKpBZT3wCJyrDyQ2N39GfG
          stance: supports
          locator: CBDB:266730
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266730）
          source: &a1
            id: s_YKpBZT3wCJyrDyQ2N39GfG
            source_type: api_record
            title: 中国历代人物传记资料库：王整（CBDB 266730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266730&o=json
            external_identifier: CBDB:266730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.727Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rYw48qr182dcLn4BYDGKeR
        subject_person_id: p_fQRM5daE8Wp7q6E4q4CiyU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王整，明人物。弘治六年進士，籍贯邢臺。（中国历代人物传记资料库 CBDB 266730）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__J3r2UcEPiStdZjkgiKsMx
          claim_id: c_rYw48qr182dcLn4BYDGKeR
          source_id: s_YKpBZT3wCJyrDyQ2N39GfG
          stance: supports
          locator: CBDB:266730
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TeRMUtfPwpqfP-P-ERQclt
        subject_person_id: p_fQRM5daE8Wp7q6E4q4CiyU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WSXXxlRTEVXXf54rUmqiYJ
          claim_id: c_TeRMUtfPwpqfP-P-ERQclt
          source_id: s_YKpBZT3wCJyrDyQ2N39GfG
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二百零四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xF6zkmGrf6YvrKuUEphBZ1
        status: active
        display_name: 王震
        merged_into_person_id: null
    - claim:
        id: c_S4m8OtUYZ0rv7v-xu9L-1h
        subject_person_id: p_fQRM5daE8Wp7q6E4q4CiyU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7o6MoVWfZSBkk89ag743vC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5mcS6nb0WS9_-Z8-1mqHAM
          claim_id: c_S4m8OtUYZ0rv7v-xu9L-1h
          source_id: s_LDhjQpBmIBDM65hNu72He5
          stance: supports
          locator: CBDB：兄弟 王震（126809）之父／母 王整
          quotation: null
          interpretation_note: 由兄弟关系推断：王章 与 王震 为同胞（CBDB 记「弟」），王震 之父／母即 王章 之父／母。
          source:
            id: s_LDhjQpBmIBDM65hNu72He5
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 266735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266735&o=json
            external_identifier: CBDB:266735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7o6MoVWfZSBkk89ag743vC
        status: active
        display_name: 王章
        merged_into_person_id: null
    - claim:
        id: c_J3Mq8dCvJprhxBvsJi-Lcl
        subject_person_id: p_fQRM5daE8Wp7q6E4q4CiyU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FwLUw3WrXjg5xLjoaFQBBj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wBYrCdwwwoZssZQMj6Oh0K
          claim_id: c_J3Mq8dCvJprhxBvsJi-Lcl
          source_id: s_6s8tdOKbXvhb9gxUgD8J5I
          stance: supports
          locator: CBDB：兄弟 王震（126809）之父／母 王整
          quotation: null
          interpretation_note: 由兄弟关系推断：王文 与 王震 为同胞（CBDB 记「弟」），王震 之父／母即 王文 之父／母。
          source:
            id: s_6s8tdOKbXvhb9gxUgD8J5I
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 266734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266734&o=json
            external_identifier: CBDB:266734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FwLUw3WrXjg5xLjoaFQBBj
        status: active
        display_name: 王文
        merged_into_person_id: null
    - claim:
        id: c_zfKYMNl-M8klHRvLPVpT82
        subject_person_id: p_fQRM5daE8Wp7q6E4q4CiyU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZsSNiK6UcNHHYbJBdBk4eu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YW4JL8GclUk4zq4xQ1WUKz
          claim_id: c_zfKYMNl-M8klHRvLPVpT82
          source_id: s_IWu45BsEXgR6nH6xzdGvTx
          stance: supports
          locator: CBDB：兄弟 王震（126809）之父／母 王整
          quotation: null
          interpretation_note: 由兄弟关系推断：王滿 与 王震 为同胞（CBDB 记「弟」），王震 之父／母即 王滿 之父／母。
          source:
            id: s_IWu45BsEXgR6nH6xzdGvTx
            source_type: api_record
            title: 中国历代人物传记资料库：王滿（CBDB 266736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266736&o=json
            external_identifier: CBDB:266736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZsSNiK6UcNHHYbJBdBk4eu
        status: active
        display_name: 王滿
        merged_into_person_id: null
    - claim:
        id: c_srRs6cmgoSnH1SmVDpjmuz
        subject_person_id: p_fQRM5daE8Wp7q6E4q4CiyU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r4Cy1HGiZGHkqrn2f4ov9w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ho7Fvk9RhWOLpAUStnQ22-
          claim_id: c_srRs6cmgoSnH1SmVDpjmuz
          source_id: s_B2vwCBrHX4nnzHXf53QB9r
          stance: supports
          locator: CBDB：兄弟 王震（126809）之父／母 王整
          quotation: null
          interpretation_note: 由兄弟关系推断：王霆 与 王震 为同胞（CBDB 记「兄」），王震 之父／母即 王霆 之父／母。
          source:
            id: s_B2vwCBrHX4nnzHXf53QB9r
            source_type: api_record
            title: 中国历代人物传记资料库：王霆（CBDB 266739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266739&o=json
            external_identifier: CBDB:266739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_r4Cy1HGiZGHkqrn2f4ov9w
        status: active
        display_name: 王霆
        merged_into_person_id: null
    - claim:
        id: c_eCD9NDKzIIVZgqFZ2yWECG
        subject_person_id: p_fQRM5daE8Wp7q6E4q4CiyU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_teLLsXwDtjSE9mGHPHRvQu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QCuI9It2dsV2MaRicfID2u
          claim_id: c_eCD9NDKzIIVZgqFZ2yWECG
          source_id: s_jW0JjznTQQmaP0dMBZ36cv
          stance: supports
          locator: CBDB：兄弟 王震（126809）之父／母 王整
          quotation: null
          interpretation_note: 由兄弟关系推断：王霓 与 王震 为同胞（CBDB 记「兄」），王震 之父／母即 王霓 之父／母。
          source:
            id: s_jW0JjznTQQmaP0dMBZ36cv
            source_type: api_record
            title: 中国历代人物传记资料库：王霓（CBDB 266738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266738&o=json
            external_identifier: CBDB:266738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_teLLsXwDtjSE9mGHPHRvQu
        status: active
        display_name: 王霓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王整

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王整 | accepted |
| bio.summary | 王整，明人物。弘治六年進士，籍贯邢臺。（中国历代人物传记资料库 CBDB 266730） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xF6zkmGrf6YvrKuUEphBZ1 | 王震 | accepted |
| children | p_7o6MoVWfZSBkk89ag743vC | 王章 | accepted |
| children | p_FwLUw3WrXjg5xLjoaFQBBj | 王文 | accepted |
| children | p_ZsSNiK6UcNHHYbJBdBk4eu | 王滿 | accepted |
| children | p_r4Cy1HGiZGHkqrn2f4ov9w | 王霆 | accepted |
| children | p_teLLsXwDtjSE9mGHPHRvQu | 王霓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王滿（CBDB 266736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266736&o=json)
- [中国历代人物传记资料库：王霓（CBDB 266738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266738&o=json)
- [中国历代人物传记资料库：王霆（CBDB 266739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266739&o=json)
- [中国历代人物传记资料库：王文（CBDB 266734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266734&o=json)
- [中国历代人物传记资料库：王章（CBDB 266735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266735&o=json)
- [中国历代人物传记资料库：王整（CBDB 266730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266730&o=json)
