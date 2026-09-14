---
schema: wang-person/v1
id: p_auKShgYLoKGMUZrPg2akKL
status: active
merged_into: null
display_name: 王仲儀
cbdb_id: 236848
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cfD3Y2BMDEiwSySGKQK1F7
        subject_person_id: p_auKShgYLoKGMUZrPg2akKL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲儀，明人物。正統四年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 236848）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_7oAAz40FgI4n_6lJsFedZ-
          claim_id: c_cfD3Y2BMDEiwSySGKQK1F7
          source_id: s_DKtKhM4cyoTprDBVFHAb91
          stance: supports
          locator: CBDB:236848
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DKtKhM4cyoTprDBVFHAb91
            source_type: api_record
            title: 中国历代人物传记资料库：王仲儀（CBDB 236848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236848&o=json
            external_identifier: CBDB:236848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8ZALpgqH4RHZPoDKYy9rCJ
        subject_person_id: p_auKShgYLoKGMUZrPg2akKL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mjrW6CvS4AKGuQicM2i78e
          claim_id: c_8ZALpgqH4RHZPoDKYy9rCJ
          source_id: s_DKtKhM4cyoTprDBVFHAb91
          stance: supports
          locator: CBDB:236848
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cFSbD-4JcMgALrm5QVTO1d
        subject_person_id: p_CgEKz1NoAXQAHTMt7rq26j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_auKShgYLoKGMUZrPg2akKL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M7HyPqm1SlpC0V816iTc_8
          claim_id: c_cFSbD-4JcMgALrm5QVTO1d
          source_id: s_y_BoKGL8gFY1UxRuPuWbPg
          stance: supports
          locator: CBDB：兄弟 王宇（66976）之父／母 王希哲
          quotation: null
          interpretation_note: 由兄弟关系推断：王仲儀 与 王宇 为同胞（CBDB 记「弟」），王宇 之父／母即 王仲儀 之父／母。
          source:
            id: s_y_BoKGL8gFY1UxRuPuWbPg
            source_type: api_record
            title: 中国历代人物传记资料库：王仲儀（CBDB 236848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236848&o=json
            external_identifier: CBDB:236848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CgEKz1NoAXQAHTMt7rq26j
        status: active
        display_name: 王希哲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_9jnOIHdePdd1rLaC68omHZ
        subject_person_id: p_AfDGGh6h4aUB2seMFJ2w8R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_auKShgYLoKGMUZrPg2akKL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_26qQOJQfxWbQf0kYNzaiTp
          claim_id: c_9jnOIHdePdd1rLaC68omHZ
          source_id: s_y_BoKGL8gFY1UxRuPuWbPg
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 66976 王宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_y_BoKGL8gFY1UxRuPuWbPg
            source_type: api_record
            title: 中国历代人物传记资料库：王仲儀（CBDB 236848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236848&o=json
            external_identifier: CBDB:236848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AfDGGh6h4aUB2seMFJ2w8R
        status: active
        display_name: 王宇
        merged_into_person_id: null
---

# 王仲儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲儀，明人物。正統四年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 236848） | accepted |
| name.primary | 王仲儀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CgEKz1NoAXQAHTMt7rq26j | 王希哲 | accepted |
| other | p_AfDGGh6h4aUB2seMFJ2w8R | 王宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲儀（CBDB 236848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236848&o=json)
