---
schema: wang-person/v1
id: p_arWg97Pk8q4gsFhEmPc2dz
status: active
merged_into: null
display_name: 王鏞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ldcn6VwzEbBuU5D2VYA8Z9
        subject_person_id: p_arWg97Pk8q4gsFhEmPc2dz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MZd7gN5SdtTeTr51qTnKJT
          claim_id: c_Ldcn6VwzEbBuU5D2VYA8Z9
          source_id: s_BiwHSmFEYYiWWqpBgCFsBb
          stance: supports
          locator: CBDB:219874
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（219874）
          source: &a1
            id: s_BiwHSmFEYYiWWqpBgCFsBb
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 219874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219874&o=json
            external_identifier: CBDB:219874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.293Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4pNq4VmDginH1D1G8kF14e
        subject_person_id: p_arWg97Pk8q4gsFhEmPc2dz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏞，明人物。萬曆八年進士，籍贯忻州。（中国历代人物传记资料库 CBDB 219874）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KR8WGNBwuzLH7rAVMZXqij
          claim_id: c_4pNq4VmDginH1D1G8kF14e
          source_id: s_BiwHSmFEYYiWWqpBgCFsBb
          stance: supports
          locator: CBDB:219874
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kK9e2zvEAxEZ7k4cBE9h1E
        subject_person_id: p_VT8a4dGzV3YZgqDrEEd9JE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_arWg97Pk8q4gsFhEmPc2dz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z-8UCQZZ1NBXr3UtTfHxzY
          claim_id: c_kK9e2zvEAxEZ7k4cBE9h1E
          source_id: s_ioj6FfRq9_kE0lrwCysqpd
          stance: supports
          locator: CBDB：兄弟 王鑰（206568）之父／母 王應官
          quotation: null
          interpretation_note: 由兄弟关系推断：王鏞 与 王鑰 为同胞（CBDB 记「兄」），王鑰 之父／母即 王鏞 之父／母。
          source:
            id: s_ioj6FfRq9_kE0lrwCysqpd
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 219874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219874&o=json
            external_identifier: CBDB:219874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VT8a4dGzV3YZgqDrEEd9JE
        status: active
        display_name: 王應官
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nUzMby7ApqQJ6Y0IUMozJM
        subject_person_id: p_Hq41nXPS6acQQdhAZabmC1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_arWg97Pk8q4gsFhEmPc2dz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6rYVfQpDjugm1u9XAG1jVJ
          claim_id: c_nUzMby7ApqQJ6Y0IUMozJM
          source_id: s_ioj6FfRq9_kE0lrwCysqpd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206568 王鑰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ioj6FfRq9_kE0lrwCysqpd
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 219874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219874&o=json
            external_identifier: CBDB:219874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hq41nXPS6acQQdhAZabmC1
        status: active
        display_name: 王鑰
        merged_into_person_id: null
---

# 王鏞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏞 | accepted |
| bio.summary | 王鏞，明人物。萬曆八年進士，籍贯忻州。（中国历代人物传记资料库 CBDB 219874） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VT8a4dGzV3YZgqDrEEd9JE | 王應官 | accepted |
| other | p_Hq41nXPS6acQQdhAZabmC1 | 王鑰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鏞（CBDB 219874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219874&o=json)
