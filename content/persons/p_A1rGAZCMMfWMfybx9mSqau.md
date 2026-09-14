---
schema: wang-person/v1
id: p_A1rGAZCMMfWMfybx9mSqau
status: active
merged_into: null
display_name: 王錥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PkiMQUJRFbPjA9Gxgyno4C
        subject_person_id: p_A1rGAZCMMfWMfybx9mSqau
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D9zZyMWE8xB5Kp5jegCLom
          claim_id: c_PkiMQUJRFbPjA9Gxgyno4C
          source_id: s_1LN62T7X9LhhD3A34TNRV4
          stance: supports
          locator: CBDB:247848
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247848）
          source: &a1
            id: s_1LN62T7X9LhhD3A34TNRV4
            source_type: api_record
            title: 中国历代人物传记资料库：王錥（CBDB 247848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247848&o=json
            external_identifier: CBDB:247848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.145Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1Y3fB86YPHSe8DPBR2VmQ7
        subject_person_id: p_A1rGAZCMMfWMfybx9mSqau
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錥，明人物。成化十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 247848）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2bAXXqnKyJtUh9ezP0fxou
          claim_id: c_1Y3fB86YPHSe8DPBR2VmQ7
          source_id: s_1LN62T7X9LhhD3A34TNRV4
          stance: supports
          locator: CBDB:247848
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__OWSUkeDDwX-O_dUsCTd43
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A1rGAZCMMfWMfybx9mSqau
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Xwa1dG3FnK0ltRVSzqyor
          claim_id: c__OWSUkeDDwX-O_dUsCTd43
          source_id: s_-TZhrlz-iC40Fr3UoADRsN
          stance: supports
          locator: CBDB：兄弟 王鍃（199647）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王錥 与 王鍃 为同胞（CBDB 记「兄」），王鍃 之父／母即 王錥 之父／母。
          source:
            id: s_-TZhrlz-iC40Fr3UoADRsN
            source_type: api_record
            title: 中国历代人物传记资料库：王錥（CBDB 247848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247848&o=json
            external_identifier: CBDB:247848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gyKQYKFYiRFh2ZMNQQhCtN
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rnu7zDcoTgwInhpuZwQdYg
        subject_person_id: p_A1rGAZCMMfWMfybx9mSqau
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZjuF9BMneyLuUjQuike359
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8dWrsXAOBDnJ02at_Ky1oS
          claim_id: c_rnu7zDcoTgwInhpuZwQdYg
          source_id: s_-TZhrlz-iC40Fr3UoADRsN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199647 王鍃）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-TZhrlz-iC40Fr3UoADRsN
            source_type: api_record
            title: 中国历代人物传记资料库：王錥（CBDB 247848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247848&o=json
            external_identifier: CBDB:247848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZjuF9BMneyLuUjQuike359
        status: active
        display_name: 王鍃
        merged_into_person_id: null
---

# 王錥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錥 | accepted |
| bio.summary | 王錥，明人物。成化十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 247848） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gyKQYKFYiRFh2ZMNQQhCtN | 王鼎 | accepted |
| other | p_ZjuF9BMneyLuUjQuike359 | 王鍃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錥（CBDB 247848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247848&o=json)
