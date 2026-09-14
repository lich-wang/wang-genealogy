---
schema: wang-person/v1
id: p_psDTG8148fihHUZuCyHaw2
status: active
merged_into: null
display_name: 王昊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JrXdSoiSBUFBxSKKeRLh2A
        subject_person_id: p_psDTG8148fihHUZuCyHaw2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bpRyN8dFFhEjD73N8ygLWg
          claim_id: c_JrXdSoiSBUFBxSKKeRLh2A
          source_id: s_R33sRFYRybEF9UBTjwUar4
          stance: supports
          locator: CBDB:268966
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（268966）
          source: &a1
            id: s_R33sRFYRybEF9UBTjwUar4
            source_type: api_record
            title: 中国历代人物传记资料库：王昊（CBDB 268966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268966&o=json
            external_identifier: CBDB:268966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.804Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nAFcc8QfDyk21EfFfn3Twb
        subject_person_id: p_psDTG8148fihHUZuCyHaw2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昊，明人物。弘治九年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 268966）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dPotrAq83VniQcLjivvFS2
          claim_id: c_nAFcc8QfDyk21EfFfn3Twb
          source_id: s_R33sRFYRybEF9UBTjwUar4
          stance: supports
          locator: CBDB:268966
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_elirIPhxJAMK3ivLH-h3ti
        subject_person_id: p_h6BmB86zBMykMHbjPtNFFj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_psDTG8148fihHUZuCyHaw2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fiiHxxnEEJvLMvdfwVRw-2
          claim_id: c_elirIPhxJAMK3ivLH-h3ti
          source_id: s_C3dCSdA7OlD8SlbSaMAqfQ
          stance: supports
          locator: CBDB：兄弟 王士昭（201216）之父／母 王傑
          quotation: null
          interpretation_note: 由兄弟关系推断：王昊 与 王士昭 为同胞（CBDB 记「兄」），王士昭 之父／母即 王昊 之父／母。
          source:
            id: s_C3dCSdA7OlD8SlbSaMAqfQ
            source_type: api_record
            title: 中国历代人物传记资料库：王昊（CBDB 268966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268966&o=json
            external_identifier: CBDB:268966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h6BmB86zBMykMHbjPtNFFj
        status: active
        display_name: 王傑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_W6Cv2AxdG2kURZZmumRCjp
        subject_person_id: p_aE8BJNQJMvShc1BQ8KJMip
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_psDTG8148fihHUZuCyHaw2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2aLL4y_XzKjGdxI1T6mA-B
          claim_id: c_W6Cv2AxdG2kURZZmumRCjp
          source_id: s_C3dCSdA7OlD8SlbSaMAqfQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201216 王士昭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_C3dCSdA7OlD8SlbSaMAqfQ
            source_type: api_record
            title: 中国历代人物传记资料库：王昊（CBDB 268966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268966&o=json
            external_identifier: CBDB:268966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aE8BJNQJMvShc1BQ8KJMip
        status: active
        display_name: 王士昭
        merged_into_person_id: null
---

# 王昊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昊 | accepted |
| bio.summary | 王昊，明人物。弘治九年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 268966） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_h6BmB86zBMykMHbjPtNFFj | 王傑 | accepted |
| other | p_aE8BJNQJMvShc1BQ8KJMip | 王士昭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昊（CBDB 268966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268966&o=json)
