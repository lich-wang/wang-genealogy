---
schema: wang-person/v1
id: p_4XWri83FG2z9S8DFbEsTuR
status: active
merged_into: null
display_name: 王圍
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_83KigT661YMaVCDK9MWWsq
        subject_person_id: p_4XWri83FG2z9S8DFbEsTuR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6oPS3Nx9RnxCBHyd1PKmDB
          claim_id: c_83KigT661YMaVCDK9MWWsq
          source_id: s_C9mD5hgnHp4F7hDNw9HpqS
          stance: supports
          locator: CBDB:228112
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（228112）
          source: &a1
            id: s_C9mD5hgnHp4F7hDNw9HpqS
            source_type: api_record
            title: 中国历代人物传记资料库：王圍（CBDB 228112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228112&o=json
            external_identifier: CBDB:228112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.553Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_weLRbwrhfCVw9D3iFXLKRH
        subject_person_id: p_4XWri83FG2z9S8DFbEsTuR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圍，明人物。萬曆丙戌科進士進士，籍贯耀州。（中国历代人物传记资料库 CBDB 228112）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FH4d48jwjWDEmW6l6yGTrZ
          claim_id: c_weLRbwrhfCVw9D3iFXLKRH
          source_id: s_C9mD5hgnHp4F7hDNw9HpqS
          stance: supports
          locator: CBDB:228112
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_utcYn1-3eVjQQmlSH9dvCI
        subject_person_id: p_q3ewFUkH4tvUNYqQiNKdGz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4XWri83FG2z9S8DFbEsTuR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ypL3xwijDio8_6oF8tO3wj
          claim_id: c_utcYn1-3eVjQQmlSH9dvCI
          source_id: s_WC0fbPO8C-0TBy1F6Hewwu
          stance: supports
          locator: CBDB：兄弟 王圖（123710）之父／母 王邦憲
          quotation: null
          interpretation_note: 由兄弟关系推断：王圍 与 王圖 为同胞（CBDB 记「兄」），王圖 之父／母即 王圍 之父／母。
          source:
            id: s_WC0fbPO8C-0TBy1F6Hewwu
            source_type: api_record
            title: 中国历代人物传记资料库：王圍（CBDB 228112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228112&o=json
            external_identifier: CBDB:228112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q3ewFUkH4tvUNYqQiNKdGz
        status: active
        display_name: 王邦憲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ywB3YhxXg8Sf-8r3FlgXGv
        subject_person_id: p_4XWri83FG2z9S8DFbEsTuR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h3Q7yK4WppDDdJLx2W9dJW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jHWx4Tb_v3QN8zHm7TrlBJ
          claim_id: c_ywB3YhxXg8Sf-8r3FlgXGv
          source_id: s_WC0fbPO8C-0TBy1F6Hewwu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 123710 王圖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WC0fbPO8C-0TBy1F6Hewwu
            source_type: api_record
            title: 中国历代人物传记资料库：王圍（CBDB 228112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228112&o=json
            external_identifier: CBDB:228112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h3Q7yK4WppDDdJLx2W9dJW
        status: active
        display_name: 王圖
        merged_into_person_id: null
---

# 王圍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王圍 | accepted |
| bio.summary | 王圍，明人物。萬曆丙戌科進士進士，籍贯耀州。（中国历代人物传记资料库 CBDB 228112） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_q3ewFUkH4tvUNYqQiNKdGz | 王邦憲 | accepted |
| other | p_h3Q7yK4WppDDdJLx2W9dJW | 王圖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王圍（CBDB 228112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228112&o=json)
