---
schema: wang-person/v1
id: p_SVYPn11QesoDqbAm8eYf67
status: active
merged_into: null
display_name: 王象某
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fuMsKE2oDREy6voqCGpmbC
        subject_person_id: p_SVYPn11QesoDqbAm8eYf67
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nc35tkJ725vJY5JhryW8DG
          claim_id: c_fuMsKE2oDREy6voqCGpmbC
          source_id: s_mw5rBZfrNA4PT98Mf9tDqX
          stance: supports
          locator: CBDB:235526
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（235526）
          source: &a1
            id: s_mw5rBZfrNA4PT98Mf9tDqX
            source_type: api_record
            title: 中国历代人物传记资料库：王象某（CBDB 235526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235526&o=json
            external_identifier: CBDB:235526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.762Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K436mcEiqgKf131CSLVHuR
        subject_person_id: p_SVYPn11QesoDqbAm8eYf67
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象某，明人物。籍贯新城。（中国历代人物传记资料库 CBDB 235526）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KrPqMDChcQX0nzx3rrYLpG
          claim_id: c_K436mcEiqgKf131CSLVHuR
          source_id: s_mw5rBZfrNA4PT98Mf9tDqX
          stance: supports
          locator: CBDB:235526
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XMcsKsHqWalynJkOsaKq_L
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SVYPn11QesoDqbAm8eYf67
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oclNKXAuQPmzX39UyAKk33
          claim_id: c_XMcsKsHqWalynJkOsaKq_L
          source_id: s_DDg90mzsOSy5d4cBiv_HAP
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象某 与 王象春 为同胞（CBDB 记「弟」），王象春 之父／母即 王象某 之父／母。
          source:
            id: s_DDg90mzsOSy5d4cBiv_HAP
            source_type: api_record
            title: 中国历代人物传记资料库：王象某（CBDB 235526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235526&o=json
            external_identifier: CBDB:235526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5r1wESpKqnWgbhR5AChbjE
        status: active
        display_name: 王之猷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_KUyeNEx-ycnCbpPey2eCru
        subject_person_id: p_1vwHH8EjSEP1q2oifpwF8P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SVYPn11QesoDqbAm8eYf67
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nfIEnVQ40AoWUkklIZwRmA
          claim_id: c_KUyeNEx-ycnCbpPey2eCru
          source_id: s_DDg90mzsOSy5d4cBiv_HAP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126731 王象春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DDg90mzsOSy5d4cBiv_HAP
            source_type: api_record
            title: 中国历代人物传记资料库：王象某（CBDB 235526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235526&o=json
            external_identifier: CBDB:235526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1vwHH8EjSEP1q2oifpwF8P
        status: active
        display_name: 王象春
        merged_into_person_id: null
---

# 王象某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象某 | accepted |
| bio.summary | 王象某，明人物。籍贯新城。（中国历代人物传记资料库 CBDB 235526） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5r1wESpKqnWgbhR5AChbjE | 王之猷 | accepted |
| other | p_1vwHH8EjSEP1q2oifpwF8P | 王象春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象某（CBDB 235526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235526&o=json)
