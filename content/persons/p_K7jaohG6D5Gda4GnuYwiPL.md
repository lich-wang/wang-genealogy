---
schema: wang-person/v1
id: p_K7jaohG6D5Gda4GnuYwiPL
status: active
merged_into: null
display_name: 王昆
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5QGAM8t2612ffKSWNKDuNn
        subject_person_id: p_K7jaohG6D5Gda4GnuYwiPL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1ov2f8xD9sfbjRdvjN9adH
          claim_id: c_5QGAM8t2612ffKSWNKDuNn
          source_id: s_2suhF4tQH1QPcGCaM83CHG
          stance: supports
          locator: CBDB:257028
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257028）
          source: &a1
            id: s_2suhF4tQH1QPcGCaM83CHG
            source_type: api_record
            title: 中国历代人物传记资料库：王昆（CBDB 257028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257028&o=json
            external_identifier: CBDB:257028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.400Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KbAEJW1713Cdsq8ysJC7sR
        subject_person_id: p_K7jaohG6D5Gda4GnuYwiPL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昆，明人物。成化十七年進士，籍贯龍泉。（中国历代人物传记资料库 CBDB 257028）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vPRZHPFW_uIdunxlJirzQ_
          claim_id: c_KbAEJW1713Cdsq8ysJC7sR
          source_id: s_2suhF4tQH1QPcGCaM83CHG
          stance: supports
          locator: CBDB:257028
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3qFFUgCawtWFvhfYwaBl0b
        subject_person_id: p_sQKFgBKrX6N7mKYfJwtry2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K7jaohG6D5Gda4GnuYwiPL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EBGKYtFo0cVZ22pIJM-eg4
          claim_id: c_3qFFUgCawtWFvhfYwaBl0b
          source_id: s_NlIth9kNDT99n1tRRgD8cG
          stance: supports
          locator: CBDB：兄弟 王杲（200384）之父／母 王洪
          quotation: null
          interpretation_note: 由兄弟关系推断：王昆 与 王杲 为同胞（CBDB 记「兄」），王杲 之父／母即 王昆 之父／母。
          source:
            id: s_NlIth9kNDT99n1tRRgD8cG
            source_type: api_record
            title: 中国历代人物传记资料库：王昆（CBDB 257028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257028&o=json
            external_identifier: CBDB:257028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sQKFgBKrX6N7mKYfJwtry2
        status: active
        display_name: 王洪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_80xzXbEaye8jyRtu9vikBX
        subject_person_id: p_K7jaohG6D5Gda4GnuYwiPL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Y6fRdWmSHjB68krJYq7FPT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_enQwl_0yAovZ-LpLfSD1NT
          claim_id: c_80xzXbEaye8jyRtu9vikBX
          source_id: s_NlIth9kNDT99n1tRRgD8cG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200384 王杲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NlIth9kNDT99n1tRRgD8cG
            source_type: api_record
            title: 中国历代人物传记资料库：王昆（CBDB 257028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257028&o=json
            external_identifier: CBDB:257028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y6fRdWmSHjB68krJYq7FPT
        status: active
        display_name: 王杲
        merged_into_person_id: null
---

# 王昆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昆 | accepted |
| bio.summary | 王昆，明人物。成化十七年進士，籍贯龍泉。（中国历代人物传记资料库 CBDB 257028） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sQKFgBKrX6N7mKYfJwtry2 | 王洪 | accepted |
| other | p_Y6fRdWmSHjB68krJYq7FPT | 王杲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昆（CBDB 257028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257028&o=json)
