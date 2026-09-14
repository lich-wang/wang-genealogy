---
schema: wang-person/v1
id: p_fPJwmGWrhtJ8YLkoJibPJm
status: active
merged_into: null
display_name: 王佐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jb1FbbFjcGR3b7eRrjzoSA
        subject_person_id: p_fPJwmGWrhtJ8YLkoJibPJm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8kB5FgPSc9Bx5P1jQEpweU
          claim_id: c_Jb1FbbFjcGR3b7eRrjzoSA
          source_id: s_MdBgRx6bcua2MQZJpC1Zbu
          stance: supports
          locator: CBDB:212512
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212512）
          source: &a1
            id: s_MdBgRx6bcua2MQZJpC1Zbu
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 212512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212512&o=json
            external_identifier: CBDB:212512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.088Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LarNBcAJ4GVyS6fqGmuaev
        subject_person_id: p_fPJwmGWrhtJ8YLkoJibPJm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐，明人物。萬曆二年進士，籍贯潼川州。（中国历代人物传记资料库 CBDB 212512）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OhMuVGaF99gb59i1s_1Wma
          claim_id: c_LarNBcAJ4GVyS6fqGmuaev
          source_id: s_MdBgRx6bcua2MQZJpC1Zbu
          stance: supports
          locator: CBDB:212512
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_48N27dX8Uleiy6NJcVZ3re
        subject_person_id: p_pB9feMR4mAN6R6ug8Qd7tH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fPJwmGWrhtJ8YLkoJibPJm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QGGcl_O6jPt0x2n_exsQNn
          claim_id: c_48N27dX8Uleiy6NJcVZ3re
          source_id: s_nMCZBuUan8JEW9bk9xz6nv
          stance: supports
          locator: CBDB：兄弟 王任（206037）之父／母 王汝善
          quotation: null
          interpretation_note: 由兄弟关系推断：王佐 与 王任 为同胞（CBDB 记「兄」），王任 之父／母即 王佐 之父／母。
          source:
            id: s_nMCZBuUan8JEW9bk9xz6nv
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 212512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212512&o=json
            external_identifier: CBDB:212512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pB9feMR4mAN6R6ug8Qd7tH
        status: active
        display_name: 王汝善
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_e5xy2_28gZ48VoFqaygfFI
        subject_person_id: p_A4DQB8jxPM4hHSSP72EbgN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fPJwmGWrhtJ8YLkoJibPJm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RfqZ8tyaq8fAjAe0h9t_Qw
          claim_id: c_e5xy2_28gZ48VoFqaygfFI
          source_id: s_nMCZBuUan8JEW9bk9xz6nv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206037 王任）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_nMCZBuUan8JEW9bk9xz6nv
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 212512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212512&o=json
            external_identifier: CBDB:212512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A4DQB8jxPM4hHSSP72EbgN
        status: active
        display_name: 王任
        merged_into_person_id: null
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | 王佐，明人物。萬曆二年進士，籍贯潼川州。（中国历代人物传记资料库 CBDB 212512） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pB9feMR4mAN6R6ug8Qd7tH | 王汝善 | accepted |
| other | p_A4DQB8jxPM4hHSSP72EbgN | 王任 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 212512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212512&o=json)
