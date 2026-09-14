---
schema: wang-person/v1
id: p_DtFsSKP86GUtExRKKocfLK
status: active
merged_into: null
display_name: 王伋
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_22z9scWsNKVYKQZkTuACy4
        subject_person_id: p_DtFsSKP86GUtExRKKocfLK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V6Vi9P2ysUcePMV3jTqpz4
          claim_id: c_22z9scWsNKVYKQZkTuACy4
          source_id: s_49oXEcK9a2z67VRBjnMdtm
          stance: supports
          locator: CBDB:213752
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213752）
          source: &a1
            id: s_49oXEcK9a2z67VRBjnMdtm
            source_type: api_record
            title: 中国历代人物传记资料库：王伋（CBDB 213752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213752&o=json
            external_identifier: CBDB:213752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.125Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kmusg1hyf6EiGqvqHp4BAL
        subject_person_id: p_DtFsSKP86GUtExRKKocfLK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伋，明人物。萬曆二年進士，籍贯太原府。（中国历代人物传记资料库 CBDB 213752）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_09KfKHQF5p064O6anam-59
          claim_id: c_Kmusg1hyf6EiGqvqHp4BAL
          source_id: s_49oXEcK9a2z67VRBjnMdtm
          stance: supports
          locator: CBDB:213752
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fXH7JPddsdRPKb5DRoxJ4E
        subject_person_id: p_QEEDRgkTG1gPE2Q7oYF5FU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DtFsSKP86GUtExRKKocfLK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y8RJgxVkigEEDoPnvoifQH
          claim_id: c_fXH7JPddsdRPKb5DRoxJ4E
          source_id: s_OuKsIokBcNQQn7Gm4Bxl1i
          stance: supports
          locator: CBDB：兄弟 王儒（206132）之父／母 王雲鵬
          quotation: null
          interpretation_note: 由兄弟关系推断：王伋 与 王儒 为同胞（CBDB 记「兄」），王儒 之父／母即 王伋 之父／母。
          source:
            id: s_OuKsIokBcNQQn7Gm4Bxl1i
            source_type: api_record
            title: 中国历代人物传记资料库：王伋（CBDB 213752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213752&o=json
            external_identifier: CBDB:213752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QEEDRgkTG1gPE2Q7oYF5FU
        status: active
        display_name: 王雲鵬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_icuIi9r5OYzKp7S9MARQKk
        subject_person_id: p_DtFsSKP86GUtExRKKocfLK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vzt49mQ7898sBQeKmR1Czu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I7rka0ZnYJEiDuOzjtaYSV
          claim_id: c_icuIi9r5OYzKp7S9MARQKk
          source_id: s_OuKsIokBcNQQn7Gm4Bxl1i
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206132 王儒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OuKsIokBcNQQn7Gm4Bxl1i
            source_type: api_record
            title: 中国历代人物传记资料库：王伋（CBDB 213752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213752&o=json
            external_identifier: CBDB:213752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vzt49mQ7898sBQeKmR1Czu
        status: active
        display_name: 王儒
        merged_into_person_id: null
---

# 王伋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伋 | accepted |
| bio.summary | 王伋，明人物。萬曆二年進士，籍贯太原府。（中国历代人物传记资料库 CBDB 213752） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QEEDRgkTG1gPE2Q7oYF5FU | 王雲鵬 | accepted |
| other | p_vzt49mQ7898sBQeKmR1Czu | 王儒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伋（CBDB 213752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213752&o=json)
