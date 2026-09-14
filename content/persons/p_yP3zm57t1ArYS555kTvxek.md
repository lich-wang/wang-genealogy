---
schema: wang-person/v1
id: p_yP3zm57t1ArYS555kTvxek
status: active
merged_into: null
display_name: 王立中
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_erZBiVGyCTP8N6xKVLS27b
        subject_person_id: p_yP3zm57t1ArYS555kTvxek
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SBTr9KDmwFdFh1j1GPH7hY
          claim_id: c_erZBiVGyCTP8N6xKVLS27b
          source_id: s_itcd7uFSxBoAhApQtUAufk
          stance: supports
          locator: CBDB:550752
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550752）
          source: &a1
            id: s_itcd7uFSxBoAhApQtUAufk
            source_type: api_record
            title: 中国历代人物传记资料库：王立中（CBDB 550752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550752&o=json
            external_identifier: CBDB:550752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.567Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xRHnp6kjduoufaW7FosPVt
        subject_person_id: p_yP3zm57t1ArYS555kTvxek
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立中，明人物。籍贯蘇州，曾任散府知府或府尹、縣尉。（中国历代人物传记资料库 CBDB 550752）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RknrWgjzWHqKNWCWtSr9xl
          claim_id: c_xRHnp6kjduoufaW7FosPVt
          source_id: s_itcd7uFSxBoAhApQtUAufk
          stance: supports
          locator: CBDB:550752
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_oPO6EvSvGUSJO2dWJ2r5bO
        subject_person_id: p_yP3zm57t1ArYS555kTvxek
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2ikP4x5v4Dn6VEoAAJy53Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d1nkZ-KruohZMiRUEaAw5A
          claim_id: c_oPO6EvSvGUSJO2dWJ2r5bO
          source_id: s_1KpQN7kM94ZaSMB6MNtr2m
          stance: supports
          locator: 滸墅關志，176453：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1KpQN7kM94ZaSMB6MNtr2m
            source_type: api_record
            title: 中国历代人物传记资料库：王汝玉（CBDB 126499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126499&o=json
            external_identifier: CBDB:126499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.987Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2ikP4x5v4Dn6VEoAAJy53Z
        status: active
        display_name: 王汝玉
        merged_into_person_id: null
    - claim:
        id: c_gY7VGGAeGIudlRTmTQbbf9
        subject_person_id: p_yP3zm57t1ArYS555kTvxek
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KD2EuMHQRQgQgZacHzwvRz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LVD7C_m1PZTs1QbYsPUy2D
          claim_id: c_gY7VGGAeGIudlRTmTQbbf9
          source_id: s_sC7P_a4qwxjA4delef7x7L
          stance: supports
          locator: CBDB：兄弟 王汝玉（126499）之父／母 王立中
          quotation: null
          interpretation_note: 由兄弟关系推断：王璉 与 王汝玉 为同胞（CBDB 记「弟」），王汝玉 之父／母即 王璉 之父／母。
          source:
            id: s_sC7P_a4qwxjA4delef7x7L
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 550751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550751&o=json
            external_identifier: CBDB:550751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KD2EuMHQRQgQgZacHzwvRz
        status: active
        display_name: 王璉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王立中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立中 | accepted |
| bio.summary | 王立中，明人物。籍贯蘇州，曾任散府知府或府尹、縣尉。（中国历代人物传记资料库 CBDB 550752） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2ikP4x5v4Dn6VEoAAJy53Z | 王汝玉 | accepted |
| children | p_KD2EuMHQRQgQgZacHzwvRz | 王璉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王立中（CBDB 550752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550752&o=json)
- [中国历代人物传记资料库：王璉（CBDB 550751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550751&o=json)
- [中国历代人物传记资料库：王汝玉（CBDB 126499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126499&o=json)
