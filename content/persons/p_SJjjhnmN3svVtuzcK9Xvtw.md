---
schema: wang-person/v1
id: p_SJjjhnmN3svVtuzcK9Xvtw
status: active
merged_into: null
display_name: 王維熊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fdxiCMr7FFDq6JL4veLt4Z
        subject_person_id: p_SJjjhnmN3svVtuzcK9Xvtw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維熊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k8KJn5JLfHNvEU9B479dJf
          claim_id: c_fdxiCMr7FFDq6JL4veLt4Z
          source_id: s_7Hav2vEbZQvwrTycCtdiUP
          stance: supports
          locator: CBDB:309659
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309659）
          source: &a1
            id: s_7Hav2vEbZQvwrTycCtdiUP
            source_type: api_record
            title: 中国历代人物传记资料库：王維熊（CBDB 309659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309659&o=json
            external_identifier: CBDB:309659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.827Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4xkjuvEhAH18NdyMpUJ9ei
        subject_person_id: p_SJjjhnmN3svVtuzcK9Xvtw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維熊，明人物。嘉靖二十六年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 309659）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CwOck2RyDd6wQHJjQtBD4L
          claim_id: c_4xkjuvEhAH18NdyMpUJ9ei
          source_id: s_7Hav2vEbZQvwrTycCtdiUP
          stance: supports
          locator: CBDB:309659
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TueSM049g1RvRb0idSv0p0
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SJjjhnmN3svVtuzcK9Xvtw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uZVmEEASLERVwPGCnF6Y8x
          claim_id: c_TueSM049g1RvRb0idSv0p0
          source_id: s_Ztds3bwolP9ty4HdqVhdU9
          stance: supports
          locator: CBDB：兄弟 王樵（34720）之父／母 王臬
          quotation: null
          interpretation_note: 由兄弟关系推断：王維熊 与 王樵 为同胞（CBDB 记「兄」），王樵 之父／母即 王維熊 之父／母。
          source:
            id: s_Ztds3bwolP9ty4HdqVhdU9
            source_type: api_record
            title: 中国历代人物传记资料库：王維熊（CBDB 309659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309659&o=json
            external_identifier: CBDB:309659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vpzDXBrQjqPJnEN64LCsPF
        status: active
        display_name: 王臬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZYrGOyHrR18Vhcs9EYAsQ5
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SJjjhnmN3svVtuzcK9Xvtw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3KbaR31zMZL-cDPLKfIU7g
          claim_id: c_ZYrGOyHrR18Vhcs9EYAsQ5
          source_id: s_Ztds3bwolP9ty4HdqVhdU9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34720 王樵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ztds3bwolP9ty4HdqVhdU9
            source_type: api_record
            title: 中国历代人物传记资料库：王維熊（CBDB 309659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309659&o=json
            external_identifier: CBDB:309659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_923xZ5qSMZFGgS46h7nLWU
        status: active
        display_name: 王樵
        merged_into_person_id: null
---

# 王維熊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維熊 | accepted |
| bio.summary | 王維熊，明人物。嘉靖二十六年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 309659） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vpzDXBrQjqPJnEN64LCsPF | 王臬 | accepted |
| other | p_923xZ5qSMZFGgS46h7nLWU | 王樵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王維熊（CBDB 309659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309659&o=json)
