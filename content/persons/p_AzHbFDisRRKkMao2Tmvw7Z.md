---
schema: wang-person/v1
id: p_AzHbFDisRRKkMao2Tmvw7Z
status: active
merged_into: null
display_name: 王庭諫
cbdb_id: 218644
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xjG3jtx1F1iyLEnU1eTHvp
        subject_person_id: p_AzHbFDisRRKkMao2Tmvw7Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭諫，明人物。萬曆八年進士，籍贯華州。（中国历代人物传记资料库 CBDB 218644）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Rc1tZvDFB7Us8XDd0hIggH
          claim_id: c_xjG3jtx1F1iyLEnU1eTHvp
          source_id: s_9V5KW8voqNsTQbGm9vEahT
          stance: supports
          locator: CBDB:218644
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9V5KW8voqNsTQbGm9vEahT
            source_type: api_record
            title: 中国历代人物传记资料库：王庭諫（CBDB 218644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218644&o=json
            external_identifier: CBDB:218644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RPAWpW8S6AcD4Hn62yB5AU
        subject_person_id: p_AzHbFDisRRKkMao2Tmvw7Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭諫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mz2e9G4oeheMzy3FHnQ5Y5
          claim_id: c_RPAWpW8S6AcD4Hn62yB5AU
          source_id: s_9V5KW8voqNsTQbGm9vEahT
          stance: supports
          locator: CBDB:218644
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5tpAiqX07CuqdtpiVTiVxh
        subject_person_id: p_tdX8aT3u5znQ3z4tHKtVu8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AzHbFDisRRKkMao2Tmvw7Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KhNgT0xGZJU9krq7bzfFS3
          claim_id: c_5tpAiqX07CuqdtpiVTiVxh
          source_id: s_e7FwaFP2_oNAUMba5Q8btV
          stance: supports
          locator: CBDB：兄弟 王庭譔（126634）之父／母 王吉兆
          quotation: null
          interpretation_note: 由兄弟关系推断：王庭諫 与 王庭譔 为同胞（CBDB 记「兄」），王庭譔 之父／母即 王庭諫 之父／母。
          source:
            id: s_e7FwaFP2_oNAUMba5Q8btV
            source_type: api_record
            title: 中国历代人物传记资料库：王庭諫（CBDB 218644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218644&o=json
            external_identifier: CBDB:218644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tdX8aT3u5znQ3z4tHKtVu8
        status: active
        display_name: 王吉兆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_RZepDom45bPwZ6_g9DnmzP
        subject_person_id: p_9KoQkJpzmuFGWSKkeqbZoc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AzHbFDisRRKkMao2Tmvw7Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-bxhdv04cqZKAGce1cdl2f
          claim_id: c_RZepDom45bPwZ6_g9DnmzP
          source_id: s_e7FwaFP2_oNAUMba5Q8btV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126634 王庭譔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_e7FwaFP2_oNAUMba5Q8btV
            source_type: api_record
            title: 中国历代人物传记资料库：王庭諫（CBDB 218644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218644&o=json
            external_identifier: CBDB:218644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9KoQkJpzmuFGWSKkeqbZoc
        status: active
        display_name: 王庭譔
        merged_into_person_id: null
    - claim:
        id: c_1nm39pvJe78TX6mJU84kli
        subject_person_id: p_AzHbFDisRRKkMao2Tmvw7Z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_BehY6enP6cGJBMEXqAzGFc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9y8vGhrmmA-vR69O7gKII4
          claim_id: c_1nm39pvJe78TX6mJU84kli
          source_id: s_e7FwaFP2_oNAUMba5Q8btV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206637 王庭諭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_e7FwaFP2_oNAUMba5Q8btV
            source_type: api_record
            title: 中国历代人物传记资料库：王庭諫（CBDB 218644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218644&o=json
            external_identifier: CBDB:218644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BehY6enP6cGJBMEXqAzGFc
        status: active
        display_name: 王庭諭
        merged_into_person_id: null
---

# 王庭諫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王庭諫，明人物。萬曆八年進士，籍贯華州。（中国历代人物传记资料库 CBDB 218644） | accepted |
| name.primary | 王庭諫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tdX8aT3u5znQ3z4tHKtVu8 | 王吉兆 | accepted |
| other | p_9KoQkJpzmuFGWSKkeqbZoc | 王庭譔 | accepted |
| other | p_BehY6enP6cGJBMEXqAzGFc | 王庭諭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王庭諫（CBDB 218644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218644&o=json)
