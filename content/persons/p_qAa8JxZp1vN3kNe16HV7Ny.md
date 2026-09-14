---
schema: wang-person/v1
id: p_qAa8JxZp1vN3kNe16HV7Ny
status: active
merged_into: null
display_name: 王佑
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7f9dAHaGNPMKGayaWuUaY6
        subject_person_id: p_qAa8JxZp1vN3kNe16HV7Ny
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q7SwN6dgv85E319sRaQNie
          claim_id: c_7f9dAHaGNPMKGayaWuUaY6
          source_id: s_4QZfBNeaWPMT7pivSxSyCM
          stance: supports
          locator: CBDB:236834
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236834）
          source: &a1
            id: s_4QZfBNeaWPMT7pivSxSyCM
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 236834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236834&o=json
            external_identifier: CBDB:236834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.806Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GFv5rpm35tp88KBxVAcE29
        subject_person_id: p_qAa8JxZp1vN3kNe16HV7Ny
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑，明人物。正統四年進士，籍贯銅梁。（中国历代人物传记资料库 CBDB 236834）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7qQ0ZI_8vkAmfiDKREQK5A
          claim_id: c_GFv5rpm35tp88KBxVAcE29
          source_id: s_4QZfBNeaWPMT7pivSxSyCM
          stance: supports
          locator: CBDB:236834
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aCF_GOpS5jtkrqEvcBnWU9
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qAa8JxZp1vN3kNe16HV7Ny
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OnHDaA3F6B_ZbqkoRGuuDY
          claim_id: c_aCF_GOpS5jtkrqEvcBnWU9
          source_id: s_v9DfxNZ6f9Fw8mA3cUh-CU
          stance: supports
          locator: CBDB：兄弟 王億（199236）之父／母 王仲亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王佑 与 王億 为同胞（CBDB 记「弟」），王億 之父／母即 王佑 之父／母。
          source:
            id: s_v9DfxNZ6f9Fw8mA3cUh-CU
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 236834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236834&o=json
            external_identifier: CBDB:236834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4C5VKRVzuAvr67X2BV8fCM
        status: active
        display_name: 王仲亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_xqBCBrvDCUrsNUa1wFPD3M
        subject_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qAa8JxZp1vN3kNe16HV7Ny
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oeeizgCVcskgHh2Ty1vlk-
          claim_id: c_xqBCBrvDCUrsNUa1wFPD3M
          source_id: s_v9DfxNZ6f9Fw8mA3cUh-CU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199236 王億）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_v9DfxNZ6f9Fw8mA3cUh-CU
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 236834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236834&o=json
            external_identifier: CBDB:236834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zv9iBHh6zJnNFQipkrhq3H
        status: active
        display_name: 王億
        merged_into_person_id: null
    - claim:
        id: c_K1fDL7qMEHvMLAbL1aJ43P
        subject_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qAa8JxZp1vN3kNe16HV7Ny
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y247M5EhFwCATM6FAX40jo
          claim_id: c_K1fDL7qMEHvMLAbL1aJ43P
          source_id: s_v9DfxNZ6f9Fw8mA3cUh-CU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207835 王儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_v9DfxNZ6f9Fw8mA3cUh-CU
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 236834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236834&o=json
            external_identifier: CBDB:236834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        status: active
        display_name: 王儉
        merged_into_person_id: null
---

# 王佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佑 | accepted |
| bio.summary | 王佑，明人物。正統四年進士，籍贯銅梁。（中国历代人物传记资料库 CBDB 236834） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4C5VKRVzuAvr67X2BV8fCM | 王仲亨 | accepted |
| other | p_Zv9iBHh6zJnNFQipkrhq3H | 王億 | accepted |
| other | p_gVNWQ2fsh1sB6kRPqwK7Rn | 王儉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佑（CBDB 236834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236834&o=json)
