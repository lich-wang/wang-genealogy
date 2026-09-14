---
schema: wang-person/v1
id: p_MMVTsoArzwCSm5R3kdpHoL
status: active
merged_into: null
display_name: 王元德
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mrprGsNJEL4SELQTp6inVv
        subject_person_id: p_MMVTsoArzwCSm5R3kdpHoL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RRn123NLEmv3m5zm1ScEjV
          claim_id: c_mrprGsNJEL4SELQTp6inVv
          source_id: s_5yeHhgmuCmczD3Nr457C4L
          stance: supports
          locator: CBDB:323260
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（323260）
          source: &a1
            id: s_5yeHhgmuCmczD3Nr457C4L
            source_type: api_record
            title: 中国历代人物传记资料库：王元德（CBDB 323260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323260&o=json
            external_identifier: CBDB:323260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.140Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kZmFmnRU3EAvN8nfQWMyL5
        subject_person_id: p_MMVTsoArzwCSm5R3kdpHoL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元德，明人物。嘉靖三十八年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 323260）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DY__kvEeDlF-DqytqSXlJj
          claim_id: c_kZmFmnRU3EAvN8nfQWMyL5
          source_id: s_5yeHhgmuCmczD3Nr457C4L
          stance: supports
          locator: CBDB:323260
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_a73nI255WvF1_qwHIBpbvI
        subject_person_id: p_Xkz67ssYdvVFhpUXFfA7PF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MMVTsoArzwCSm5R3kdpHoL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AVya7qZRODy2RnxkpbY6Bm
          claim_id: c_a73nI255WvF1_qwHIBpbvI
          source_id: s_YEBo8fSW5yz0JqUYpIDWK5
          stance: supports
          locator: CBDB：兄弟 王元敬（126472）之父／母 王碩
          quotation: null
          interpretation_note: 由兄弟关系推断：王元德 与 王元敬 为同胞（CBDB 记「弟」），王元敬 之父／母即 王元德 之父／母。
          source:
            id: s_YEBo8fSW5yz0JqUYpIDWK5
            source_type: api_record
            title: 中国历代人物传记资料库：王元德（CBDB 323260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323260&o=json
            external_identifier: CBDB:323260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Xkz67ssYdvVFhpUXFfA7PF
        status: active
        display_name: 王碩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OrWkTH4qpoKlUymCHqtae_
        subject_person_id: p_466nsxZ3JM344kFn5S3u9k
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MMVTsoArzwCSm5R3kdpHoL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a-GhDCqRBQFfp275ft0YAw
          claim_id: c_OrWkTH4qpoKlUymCHqtae_
          source_id: s_YEBo8fSW5yz0JqUYpIDWK5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126472 王元敬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YEBo8fSW5yz0JqUYpIDWK5
            source_type: api_record
            title: 中国历代人物传记资料库：王元德（CBDB 323260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323260&o=json
            external_identifier: CBDB:323260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_466nsxZ3JM344kFn5S3u9k
        status: active
        display_name: 王元敬
        merged_into_person_id: null
---

# 王元德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元德 | accepted |
| bio.summary | 王元德，明人物。嘉靖三十八年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 323260） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xkz67ssYdvVFhpUXFfA7PF | 王碩 | accepted |
| other | p_466nsxZ3JM344kFn5S3u9k | 王元敬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元德（CBDB 323260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323260&o=json)
