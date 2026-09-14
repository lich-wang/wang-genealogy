---
schema: wang-person/v1
id: p_AGQQjmY7TL9o4Ez2u4HPFV
status: active
merged_into: null
display_name: 王亮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vkUYRJEw5zqAQkAKbngY6o
        subject_person_id: p_AGQQjmY7TL9o4Ez2u4HPFV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YFei4dQUDvq8ozYzT9D7j6
          claim_id: c_vkUYRJEw5zqAQkAKbngY6o
          source_id: s_Z6R4EEqEN8C3zNnxTQuhUC
          stance: supports
          locator: CBDB:241293
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241293）
          source: &a1
            id: s_Z6R4EEqEN8C3zNnxTQuhUC
            source_type: api_record
            title: 中国历代人物传记资料库：王亮（CBDB 241293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241293&o=json
            external_identifier: CBDB:241293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.951Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_68qVp3Vxjnw7dNq3kPgfqR
        subject_person_id: p_AGQQjmY7TL9o4Ez2u4HPFV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮，明人物。正統十三年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 241293）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZVAx-5NoU9g4yIlbo-Y0Qm
          claim_id: c_68qVp3Vxjnw7dNq3kPgfqR
          source_id: s_Z6R4EEqEN8C3zNnxTQuhUC
          stance: supports
          locator: CBDB:241293
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1xxZXr6oQtLXEGnO0z_MuZ
        subject_person_id: p_jCmvSEJEzMCfHNSXJ1XAo8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AGQQjmY7TL9o4Ez2u4HPFV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pU0QErWGOy15b2uh4epk_n
          claim_id: c_1xxZXr6oQtLXEGnO0z_MuZ
          source_id: s_VILHOYz-3Bykr7Fx9gJW90
          stance: supports
          locator: CBDB：兄弟 王豪（208164）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王亮 与 王豪 为同胞（CBDB 记「弟」），王豪 之父／母即 王亮 之父／母。
          source:
            id: s_VILHOYz-3Bykr7Fx9gJW90
            source_type: api_record
            title: 中国历代人物传记资料库：王亮（CBDB 241293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241293&o=json
            external_identifier: CBDB:241293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jCmvSEJEzMCfHNSXJ1XAo8
        status: active
        display_name: 王寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_IbCaCp65IlzbQR_vKpZyeP
        subject_person_id: p_AGQQjmY7TL9o4Ez2u4HPFV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CwH6PHR1XzMwocJ8ZwHSPP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__5UEm_aAKsqdkwxrAHF4lx
          claim_id: c_IbCaCp65IlzbQR_vKpZyeP
          source_id: s_VILHOYz-3Bykr7Fx9gJW90
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 208164 王豪）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VILHOYz-3Bykr7Fx9gJW90
            source_type: api_record
            title: 中国历代人物传记资料库：王亮（CBDB 241293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241293&o=json
            external_identifier: CBDB:241293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CwH6PHR1XzMwocJ8ZwHSPP
        status: active
        display_name: 王豪
        merged_into_person_id: null
---

# 王亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亮 | accepted |
| bio.summary | 王亮，明人物。正統十三年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 241293） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jCmvSEJEzMCfHNSXJ1XAo8 | 王寧 | accepted |
| other | p_CwH6PHR1XzMwocJ8ZwHSPP | 王豪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亮（CBDB 241293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241293&o=json)
