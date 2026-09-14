---
schema: wang-person/v1
id: p_NwL4A3Z1LNjwm9mt2PVtDW
status: active
merged_into: null
display_name: 王尚忠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GWVDuhgei9QnZGXLq9GUKr
        subject_person_id: p_NwL4A3Z1LNjwm9mt2PVtDW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5Wc57URrUEbD5wuSaw8bz2
          claim_id: c_GWVDuhgei9QnZGXLq9GUKr
          source_id: s_zMBJ2NHtuwXfaJBP3LkFn9
          stance: supports
          locator: CBDB:269871
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（269871）
          source: &a1
            id: s_zMBJ2NHtuwXfaJBP3LkFn9
            source_type: api_record
            title: 中国历代人物传记资料库：王尚忠（CBDB 269871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269871&o=json
            external_identifier: CBDB:269871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.821Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E2Aeh37o48QkBUq59Kuzv2
        subject_person_id: p_NwL4A3Z1LNjwm9mt2PVtDW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚忠，明人物。弘治十五年進士，籍贯郟縣。（中国历代人物传记资料库 CBDB 269871）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RCfbAWdci-9O-iUi_drEyY
          claim_id: c_E2Aeh37o48QkBUq59Kuzv2
          source_id: s_zMBJ2NHtuwXfaJBP3LkFn9
          stance: supports
          locator: CBDB:269871
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mYrlBP5M9ZrL-89laQSjbS
        subject_person_id: p_BGWgef2Z8E8vPL41NM62UK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NwL4A3Z1LNjwm9mt2PVtDW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_stAWkWKRbAZNSrmxIUeH33
          claim_id: c_mYrlBP5M9ZrL-89laQSjbS
          source_id: s_dvAoqSuIw0MPKAK4llL0Vl
          stance: supports
          locator: CBDB：兄弟 王尚絅（126574）之父／母 王璇
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚忠 与 王尚絅 为同胞（CBDB 记「弟」），王尚絅 之父／母即 王尚忠 之父／母。
          source:
            id: s_dvAoqSuIw0MPKAK4llL0Vl
            source_type: api_record
            title: 中国历代人物传记资料库：王尚忠（CBDB 269871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269871&o=json
            external_identifier: CBDB:269871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BGWgef2Z8E8vPL41NM62UK
        status: active
        display_name: 王璇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_331r2YQl9eeU7ufN8CRvhj
        subject_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NwL4A3Z1LNjwm9mt2PVtDW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_86MPLXvn9HfdTK_8cwu4tD
          claim_id: c_331r2YQl9eeU7ufN8CRvhj
          source_id: s_dvAoqSuIw0MPKAK4llL0Vl
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126574 王尚絅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dvAoqSuIw0MPKAK4llL0Vl
            source_type: api_record
            title: 中国历代人物传记资料库：王尚忠（CBDB 269871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269871&o=json
            external_identifier: CBDB:269871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ec1dckj7YLUcRUGq2Dbkdc
        status: active
        display_name: 王尚絅
        merged_into_person_id: null
---

# 王尚忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚忠 | accepted |
| bio.summary | 王尚忠，明人物。弘治十五年進士，籍贯郟縣。（中国历代人物传记资料库 CBDB 269871） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BGWgef2Z8E8vPL41NM62UK | 王璇 | accepted |
| other | p_Ec1dckj7YLUcRUGq2Dbkdc | 王尚絅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚忠（CBDB 269871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269871&o=json)
