---
schema: wang-person/v1
id: p_kLmDgP69qeuoA6HRjsHa4K
status: active
merged_into: null
display_name: 王映
cbdb_id: 22007
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jMKFKdp37GzqNaKCuXFPWJ
        subject_person_id: p_kLmDgP69qeuoA6HRjsHa4K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王映，宋人物。中国历代人物传记资料库（CBDB）以人物编号 22007 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_vsrb9_j6KZnSJNY9GJOU7Q
          claim_id: c_jMKFKdp37GzqNaKCuXFPWJ
          source_id: s_5JnnW3sNGmaLbL3HXsmh8P
          stance: supports
          locator: CBDB:22007
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_5JnnW3sNGmaLbL3HXsmh8P
            source_type: api_record
            title: 中国历代人物传记资料库：王映（CBDB 22007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22007&o=json
            external_identifier: CBDB:22007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vrzoiyA8Xp4NFfGkBvW249
        subject_person_id: p_kLmDgP69qeuoA6HRjsHa4K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王映
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9BnWYfnjcbQEiPDrvRU88D
          claim_id: c_vrzoiyA8Xp4NFfGkBvW249
          source_id: s_5JnnW3sNGmaLbL3HXsmh8P
          stance: supports
          locator: CBDB:22007
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_5JnnW3sNGmaLbL3HXsmh8P
            source_type: api_record
            title: 中国历代人物传记资料库：王映（CBDB 22007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22007&o=json
            external_identifier: CBDB:22007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BlFyY_354AHJdG706djC3t
        subject_person_id: p_V7ycLeFaKcwDLu6Nqpp4GD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kLmDgP69qeuoA6HRjsHa4K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_23zlxle736UQ7CIl7ZdDLi
          claim_id: c_BlFyY_354AHJdG706djC3t
          source_id: s_DVJNegumBNKCf9uv11urxN
          stance: supports
          locator: CBDB 双向互证（子 王映 ⇄ 父 王仲山）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_DVJNegumBNKCf9uv11urxN
            source_type: api_record
            title: 中国历代人物传记资料库：王仲山（CBDB 7081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7081&o=json
            external_identifier: CBDB:7081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.470Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_V7ycLeFaKcwDLu6Nqpp4GD
        status: active
        display_name: 王仲山
        merged_into_person_id: null
  children:
    - claim:
        id: c_mAQ6sX1lnW--lNAMe_SLaQ
        subject_person_id: p_kLmDgP69qeuoA6HRjsHa4K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cZXGTSdbtYHNAD6x3Cqywz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-tbD3Bfa9kEvRGvGn4x_0G
          claim_id: c_mAQ6sX1lnW--lNAMe_SLaQ
          source_id: s_KRQ42VJU8wi11qF4K6b8sv
          stance: supports
          locator: CBDB 双向互证（父 王映 ⇄ 子 王子治）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_KRQ42VJU8wi11qF4K6b8sv
            source_type: api_record
            title: 中国历代人物传记资料库：王子治（CBDB 22008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22008&o=json
            external_identifier: CBDB:22008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_cZXGTSdbtYHNAD6x3Cqywz
        status: active
        display_name: 王子治
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王映

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王映，宋人物。中国历代人物传记资料库（CBDB）以人物编号 22007 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王映 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_V7ycLeFaKcwDLu6Nqpp4GD | 王仲山 | accepted |
| children | p_cZXGTSdbtYHNAD6x3Cqywz | 王子治 | accepted |

## 外部来源

- [中国历代人物传记资料库：王映（CBDB 22007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22007&o=json)
- [中国历代人物传记资料库：王仲山（CBDB 7081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7081&o=json)
- [中国历代人物传记资料库：王子治（CBDB 22008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22008&o=json)
