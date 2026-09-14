---
schema: wang-person/v1
id: p_i5dG8b9pvYuJ3HDsxVEXt3
status: active
merged_into: null
display_name: 王宗武
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pxeQyH3Mz7qattdfjEeqDS
        subject_person_id: p_i5dG8b9pvYuJ3HDsxVEXt3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cjF4PduUp56DcADs8qot5B
          claim_id: c_pxeQyH3Mz7qattdfjEeqDS
          source_id: s_GT5pkYSFZVmdLo2bFf5S1Y
          stance: supports
          locator: CBDB:305542
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（305542）
          source: &a1
            id: s_GT5pkYSFZVmdLo2bFf5S1Y
            source_type: api_record
            title: 中国历代人物传记资料库：王宗武（CBDB 305542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305542&o=json
            external_identifier: CBDB:305542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.742Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8ssd1nE6QBjm9WuBFxW3jn
        subject_person_id: p_i5dG8b9pvYuJ3HDsxVEXt3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗武，明人物。嘉靖二十三年進士，籍贯富順。（中国历代人物传记资料库 CBDB 305542）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iE7P_CwKCWj7t4zHzZ9WjW
          claim_id: c_8ssd1nE6QBjm9WuBFxW3jn
          source_id: s_GT5pkYSFZVmdLo2bFf5S1Y
          stance: supports
          locator: CBDB:305542
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rF20fmaxoXrPeoX_JZ6H_W
        subject_person_id: p_3w9KiL5k9du8Z7UbUeRxEe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i5dG8b9pvYuJ3HDsxVEXt3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WWIKU_ICBCUrQ7R9_YyLgc
          claim_id: c_rF20fmaxoXrPeoX_JZ6H_W
          source_id: s_VtBwgtMaKbMT-yonmHiQwm
          stance: supports
          locator: CBDB：兄弟 王宗堯（203496）之父／母 王楚鳳
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗武 与 王宗堯 为同胞（CBDB 记「弟」），王宗堯 之父／母即 王宗武 之父／母。
          source:
            id: s_VtBwgtMaKbMT-yonmHiQwm
            source_type: api_record
            title: 中国历代人物传记资料库：王宗武（CBDB 305542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305542&o=json
            external_identifier: CBDB:305542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3w9KiL5k9du8Z7UbUeRxEe
        status: active
        display_name: 王楚鳳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2b6nIRmiUCY2Kk8_bOnAL8
        subject_person_id: p_MM7KWyMsCLLasX9X9VAU7R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_i5dG8b9pvYuJ3HDsxVEXt3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OxHWi4qgGjphqtu1egHKZQ
          claim_id: c_2b6nIRmiUCY2Kk8_bOnAL8
          source_id: s_VtBwgtMaKbMT-yonmHiQwm
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203496 王宗堯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VtBwgtMaKbMT-yonmHiQwm
            source_type: api_record
            title: 中国历代人物传记资料库：王宗武（CBDB 305542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305542&o=json
            external_identifier: CBDB:305542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MM7KWyMsCLLasX9X9VAU7R
        status: active
        display_name: 王宗堯
        merged_into_person_id: null
---

# 王宗武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗武 | accepted |
| bio.summary | 王宗武，明人物。嘉靖二十三年進士，籍贯富順。（中国历代人物传记资料库 CBDB 305542） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3w9KiL5k9du8Z7UbUeRxEe | 王楚鳳 | accepted |
| other | p_MM7KWyMsCLLasX9X9VAU7R | 王宗堯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗武（CBDB 305542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305542&o=json)
