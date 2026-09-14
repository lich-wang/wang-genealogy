---
schema: wang-person/v1
id: p_suJYySM6Uc1DV5xUJi1SZW
status: active
merged_into: null
display_name: 王之梅
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wPqU5kTXrT7HMJ1cn5fDYS
        subject_person_id: p_suJYySM6Uc1DV5xUJi1SZW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之梅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MyrBtLCS2oNbDBp8XbwqAD
          claim_id: c_wPqU5kTXrT7HMJ1cn5fDYS
          source_id: s_p5eN6JbmsoWbeXeXkKsu4E
          stance: supports
          locator: CBDB:223430
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（223430）
          source: &a1
            id: s_p5eN6JbmsoWbeXeXkKsu4E
            source_type: api_record
            title: 中国历代人物传记资料库：王之梅（CBDB 223430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223430&o=json
            external_identifier: CBDB:223430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.412Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tBCUzJfukMcfG3vti3jmNV
        subject_person_id: p_suJYySM6Uc1DV5xUJi1SZW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之梅，明人物。萬曆十一年進士，籍贯寧晉。（中国历代人物传记资料库 CBDB 223430）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y-e4c4yepJSdwxYTWsIdfd
          claim_id: c_tBCUzJfukMcfG3vti3jmNV
          source_id: s_p5eN6JbmsoWbeXeXkKsu4E
          stance: supports
          locator: CBDB:223430
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3iCVdqJ88bUNVAajnrVPfl
        subject_person_id: p_jEBuZsCrqAXDchh52wkHw1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_suJYySM6Uc1DV5xUJi1SZW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gumuXX9iUasN1_RRALh7QV
          claim_id: c_3iCVdqJ88bUNVAajnrVPfl
          source_id: s_cfYJVV9JPYRy5pjdbZy6UK
          stance: supports
          locator: CBDB：兄弟 王之棟（206799）之父／母 王克慎
          quotation: null
          interpretation_note: 由兄弟关系推断：王之梅 与 王之棟 为同胞（CBDB 记「兄」），王之棟 之父／母即 王之梅 之父／母。
          source:
            id: s_cfYJVV9JPYRy5pjdbZy6UK
            source_type: api_record
            title: 中国历代人物传记资料库：王之梅（CBDB 223430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223430&o=json
            external_identifier: CBDB:223430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jEBuZsCrqAXDchh52wkHw1
        status: active
        display_name: 王克慎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Grjbksm298P4P8Gni2a_fA
        subject_person_id: p_3D1ztFEygAVyyfATLEVR1H
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_suJYySM6Uc1DV5xUJi1SZW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5A52VDZHHpYo0D_1ykwpER
          claim_id: c_Grjbksm298P4P8Gni2a_fA
          source_id: s_cfYJVV9JPYRy5pjdbZy6UK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206799 王之棟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cfYJVV9JPYRy5pjdbZy6UK
            source_type: api_record
            title: 中国历代人物传记资料库：王之梅（CBDB 223430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223430&o=json
            external_identifier: CBDB:223430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3D1ztFEygAVyyfATLEVR1H
        status: active
        display_name: 王之棟
        merged_into_person_id: null
---

# 王之梅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之梅 | accepted |
| bio.summary | 王之梅，明人物。萬曆十一年進士，籍贯寧晉。（中国历代人物传记资料库 CBDB 223430） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jEBuZsCrqAXDchh52wkHw1 | 王克慎 | accepted |
| other | p_3D1ztFEygAVyyfATLEVR1H | 王之棟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之梅（CBDB 223430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223430&o=json)
