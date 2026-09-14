---
schema: wang-person/v1
id: p_s6y4se8DCW4eukcpENqdMJ
status: active
merged_into: null
display_name: 王鳳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2BW6T3H82YhqAFTz8Gc7S5
        subject_person_id: p_s6y4se8DCW4eukcpENqdMJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KqSmk3oJLzg2XE2DYnUnYo
          claim_id: c_2BW6T3H82YhqAFTz8Gc7S5
          source_id: s_Y3yZAQfGritNDUmC5Cxd4J
          stance: supports
          locator: CBDB:271839
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271839）
          source: &a1
            id: s_Y3yZAQfGritNDUmC5Cxd4J
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳（CBDB 271839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271839&o=json
            external_identifier: CBDB:271839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_35nY6CR4LH2EKyJRM3oLWJ
        subject_person_id: p_s6y4se8DCW4eukcpENqdMJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳，明人物。景泰五年進士，籍贯密雲。（中国历代人物传记资料库 CBDB 271839）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qoRWIiqy_YsJIy8SgT5KWf
          claim_id: c_35nY6CR4LH2EKyJRM3oLWJ
          source_id: s_Y3yZAQfGritNDUmC5Cxd4J
          stance: supports
          locator: CBDB:271839
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5Rnug0Vg72vg-zDC29ZW6H
        subject_person_id: p_LHuTnNyG1C6YMk7ahAUHo3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s6y4se8DCW4eukcpENqdMJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G5uXMZSOD9QZSFqJrO1Ub4
          claim_id: c_5Rnug0Vg72vg-zDC29ZW6H
          source_id: s_csG_l9GVk1kI3wch7n2-Gz
          stance: supports
          locator: CBDB：兄弟 王昇（198437）之父／母 王俊
          quotation: null
          interpretation_note: 由兄弟关系推断：王鳳 与 王昇 为同胞（CBDB 记「兄」），王昇 之父／母即 王鳳 之父／母。
          source:
            id: s_csG_l9GVk1kI3wch7n2-Gz
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳（CBDB 271839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271839&o=json
            external_identifier: CBDB:271839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LHuTnNyG1C6YMk7ahAUHo3
        status: active
        display_name: 王俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_MDjZLMGZKUE4Noz96cAOg4
        subject_person_id: p_s6y4se8DCW4eukcpENqdMJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_stHoVQftjNFmSu9T7T3WAa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f3W3hKTQhE19bFUqc05_0f
          claim_id: c_MDjZLMGZKUE4Noz96cAOg4
          source_id: s_csG_l9GVk1kI3wch7n2-Gz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198437 王昇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_csG_l9GVk1kI3wch7n2-Gz
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳（CBDB 271839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271839&o=json
            external_identifier: CBDB:271839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_stHoVQftjNFmSu9T7T3WAa
        status: active
        display_name: 王昇
        merged_into_person_id: null
---

# 王鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳 | accepted |
| bio.summary | 王鳳，明人物。景泰五年進士，籍贯密雲。（中国历代人物传记资料库 CBDB 271839） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LHuTnNyG1C6YMk7ahAUHo3 | 王俊 | accepted |
| other | p_stHoVQftjNFmSu9T7T3WAa | 王昇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳳（CBDB 271839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271839&o=json)
