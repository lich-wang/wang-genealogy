---
schema: wang-person/v1
id: p_3pSaFHyMm5yw3ojGhQJnMx
status: active
merged_into: null
display_name: 王瓉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F7hx93z5i2hbNZhrySNQSe
        subject_person_id: p_3pSaFHyMm5yw3ojGhQJnMx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_exrJsWjQfVqjum3VHH7UDV
          claim_id: c_F7hx93z5i2hbNZhrySNQSe
          source_id: s_TPiKwP8XAnSM51Vxv5egqs
          stance: supports
          locator: CBDB:246755
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（246755）
          source: &a1
            id: s_TPiKwP8XAnSM51Vxv5egqs
            source_type: api_record
            title: 中国历代人物传记资料库：王瓉（CBDB 246755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246755&o=json
            external_identifier: CBDB:246755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.089Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6T6HDdxf7JjcYHmD49ChPF
        subject_person_id: p_3pSaFHyMm5yw3ojGhQJnMx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓉，明人物。成化八年進士，籍贯沂州。（中国历代人物传记资料库 CBDB 246755）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cgh3HUQLq96VgqARDxZmPT
          claim_id: c_6T6HDdxf7JjcYHmD49ChPF
          source_id: s_TPiKwP8XAnSM51Vxv5egqs
          stance: supports
          locator: CBDB:246755
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wwMW--VmtO-lhwiIdocnef
        subject_person_id: p_sw3d858SSyyvRPzeeoi5f5
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_3pSaFHyMm5yw3ojGhQJnMx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xpbxOoQaqSa3hAYcBjKJ5U
          claim_id: c_wwMW--VmtO-lhwiIdocnef
          source_id: s_pGr3-bAH0j8zlWpY0GRjY7
          stance: supports
          locator: CBDB：兄弟 王璟（67987）之父／母 王纲
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓉 与 王璟 为同胞（CBDB 记「弟」），王璟 之父／母即 王瓉 之父／母。
          source:
            id: s_pGr3-bAH0j8zlWpY0GRjY7
            source_type: api_record
            title: 中国历代人物传记资料库：王瓉（CBDB 246755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246755&o=json
            external_identifier: CBDB:246755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sw3d858SSyyvRPzeeoi5f5
        status: active
        display_name: 王纲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_VFv0lvW2Lrmh_6k10NV52B
        subject_person_id: p_3pSaFHyMm5yw3ojGhQJnMx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_7koQzcggkeDLYupbQwieGE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-1Y9lhwkwVCpN-hO6A9TZn
          claim_id: c_VFv0lvW2Lrmh_6k10NV52B
          source_id: s_pGr3-bAH0j8zlWpY0GRjY7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67987 王璟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pGr3-bAH0j8zlWpY0GRjY7
            source_type: api_record
            title: 中国历代人物传记资料库：王瓉（CBDB 246755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246755&o=json
            external_identifier: CBDB:246755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7koQzcggkeDLYupbQwieGE
        status: active
        display_name: 王璟
        merged_into_person_id: null
---

# 王瓉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓉 | accepted |
| bio.summary | 王瓉，明人物。成化八年進士，籍贯沂州。（中国历代人物传记资料库 CBDB 246755） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sw3d858SSyyvRPzeeoi5f5 | 王纲 | accepted |
| other | p_7koQzcggkeDLYupbQwieGE | 王璟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓉（CBDB 246755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246755&o=json)
