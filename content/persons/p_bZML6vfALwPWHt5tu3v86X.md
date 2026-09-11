---
schema: wang-person/v1
id: p_bZML6vfALwPWHt5tu3v86X
status: active
merged_into: null
display_name: 王真臣
cbdb_id: 17884
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MCR7T5D9Jsd4fwBmHBMaTk
        subject_person_id: p_bZML6vfALwPWHt5tu3v86X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王真臣，宋人物。中国历代人物传记资料库（CBDB）以人物编号 17884 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_PxUPoWYpx-klyUwaAheBHd
          claim_id: c_MCR7T5D9Jsd4fwBmHBMaTk
          source_id: s_B4JJoP8RAZPYMAwzG1q47o
          stance: supports
          locator: CBDB:17884
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_B4JJoP8RAZPYMAwzG1q47o
            source_type: api_record
            title: 中国历代人物传记资料库：王真臣（CBDB 17884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17884&o=json
            external_identifier: CBDB:17884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YVtw8vacSFGCpZRq77fZBv
        subject_person_id: p_bZML6vfALwPWHt5tu3v86X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王真臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_weJFRFcWeFYCKxu584ZHKQ
          claim_id: c_YVtw8vacSFGCpZRq77fZBv
          source_id: s_B4JJoP8RAZPYMAwzG1q47o
          stance: supports
          locator: CBDB:17884
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_B4JJoP8RAZPYMAwzG1q47o
            source_type: api_record
            title: 中国历代人物传记资料库：王真臣（CBDB 17884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17884&o=json
            external_identifier: CBDB:17884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9vmhwb9Jv4S9IazqhkcXoI
        subject_person_id: p_VbtK8ca4wEkyE5i9wXDKgj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bZML6vfALwPWHt5tu3v86X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NFknCvwWmJFtg3tdakLxmz
          claim_id: c_9vmhwb9Jv4S9IazqhkcXoI
          source_id: s_m8gLFS3draMBkGBcgYjfQE
          stance: supports
          locator: CBDB 双向互证（子 王真臣 ⇄ 父 王景章）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_m8gLFS3draMBkGBcgYjfQE
            source_type: api_record
            title: 中国历代人物传记资料库：王景章（CBDB 17883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17883&o=json
            external_identifier: CBDB:17883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VbtK8ca4wEkyE5i9wXDKgj
        status: active
        display_name: 王景章
        merged_into_person_id: null
  children:
    - claim:
        id: c_FEbADOyaOuiwv-Nckl8lv3
        subject_person_id: p_bZML6vfALwPWHt5tu3v86X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c13t1gAnQni4prMz3DPJbk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6SKXGJhImN7JoPOlXUybqt
          claim_id: c_FEbADOyaOuiwv-Nckl8lv3
          source_id: s_vBkKyzpaPfffzvS2LjjmEL
          stance: supports
          locator: CBDB 双向互证（父 王真臣 ⇄ 子 王俁）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_vBkKyzpaPfffzvS2LjjmEL
            source_type: api_record
            title: 中国历代人物传记资料库：王俁（CBDB 1932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1932&o=json
            external_identifier: CBDB:1932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.410Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_c13t1gAnQni4prMz3DPJbk
        status: active
        display_name: 王俁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王真臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王真臣，宋人物。中国历代人物传记资料库（CBDB）以人物编号 17884 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王真臣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VbtK8ca4wEkyE5i9wXDKgj | 王景章 | accepted |
| children | p_c13t1gAnQni4prMz3DPJbk | 王俁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景章（CBDB 17883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17883&o=json)
- [中国历代人物传记资料库：王俁（CBDB 1932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1932&o=json)
- [中国历代人物传记资料库：王真臣（CBDB 17884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17884&o=json)
