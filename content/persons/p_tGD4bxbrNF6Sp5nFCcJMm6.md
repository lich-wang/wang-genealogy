---
schema: wang-person/v1
id: p_tGD4bxbrNF6Sp5nFCcJMm6
status: active
merged_into: null
display_name: 王宗泰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ECvAJ6ZFoqEWXxu8monTce
        subject_person_id: p_tGD4bxbrNF6Sp5nFCcJMm6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_odxV3aMtXRfiVNzwaZKkdL
          claim_id: c_ECvAJ6ZFoqEWXxu8monTce
          source_id: s_xvN62bhRd81QJMdkKEeqc7
          stance: supports
          locator: CBDB:226567
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（226567）
          source: &a1
            id: s_xvN62bhRd81QJMdkKEeqc7
            source_type: api_record
            title: 中国历代人物传记资料库：王宗泰（CBDB 226567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226567&o=json
            external_identifier: CBDB:226567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LXxcHGFMM2hx5PXE19EumQ
        subject_person_id: p_tGD4bxbrNF6Sp5nFCcJMm6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗泰，明人物。萬曆丙戌科進士進士，籍贯京山，入仕庠生。（中国历代人物传记资料库 CBDB 226567）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tCCLAJvkMRhQDK1pC13030
          claim_id: c_LXxcHGFMM2hx5PXE19EumQ
          source_id: s_xvN62bhRd81QJMdkKEeqc7
          stance: supports
          locator: CBDB:226567
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uaWfsufDOw21s2BYv3DTRS
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tGD4bxbrNF6Sp5nFCcJMm6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IMAx-jOYPuHien4MP7Kz0g
          claim_id: c_uaWfsufDOw21s2BYv3DTRS
          source_id: s_MjHQCkcT0JtKTffiRY3DW2
          stance: supports
          locator: CBDB：兄弟 王宗蓁（207031）之父／母 王桥
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗泰 与 王宗蓁 为同胞（CBDB 记「弟」），王宗蓁 之父／母即 王宗泰 之父／母。
          source:
            id: s_MjHQCkcT0JtKTffiRY3DW2
            source_type: api_record
            title: 中国历代人物传记资料库：王宗泰（CBDB 226567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226567&o=json
            external_identifier: CBDB:226567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qbWcARBwiNzFhFH7v3oZN5
        status: active
        display_name: 王桥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fqv6M5yvH3oM5rFfdIH-1K
        subject_person_id: p_YcgZGHB8b41JUksSD6hCbG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tGD4bxbrNF6Sp5nFCcJMm6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UBHTc3OcmAD0W7ac5afFqZ
          claim_id: c_fqv6M5yvH3oM5rFfdIH-1K
          source_id: s_MjHQCkcT0JtKTffiRY3DW2
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207031 王宗蓁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MjHQCkcT0JtKTffiRY3DW2
            source_type: api_record
            title: 中国历代人物传记资料库：王宗泰（CBDB 226567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226567&o=json
            external_identifier: CBDB:226567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YcgZGHB8b41JUksSD6hCbG
        status: active
        display_name: 王宗蓁
        merged_into_person_id: null
---

# 王宗泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗泰 | accepted |
| bio.summary | 王宗泰，明人物。萬曆丙戌科進士進士，籍贯京山，入仕庠生。（中国历代人物传记资料库 CBDB 226567） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qbWcARBwiNzFhFH7v3oZN5 | 王桥 | accepted |
| other | p_YcgZGHB8b41JUksSD6hCbG | 王宗蓁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗泰（CBDB 226567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226567&o=json)
