---
schema: wang-person/v1
id: p_ZCSBH1ggTRGGXUtKo7xUdv
status: active
merged_into: null
display_name: 王聘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wDJcVTwFqhoi5JUSrDh92v
        subject_person_id: p_ZCSBH1ggTRGGXUtKo7xUdv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6SLyZbLVwkwC5ggKRD1bPE
          claim_id: c_wDJcVTwFqhoi5JUSrDh92v
          source_id: s_c9UhPQo1j8tVkJ68mAJe42
          stance: supports
          locator: CBDB:324430
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324430）
          source: &a1
            id: s_c9UhPQo1j8tVkJ68mAJe42
            source_type: api_record
            title: 中国历代人物传记资料库：王聘（CBDB 324430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324430&o=json
            external_identifier: CBDB:324430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.185Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oeaoi4S1S3fC7L8FvFLJ6i
        subject_person_id: p_ZCSBH1ggTRGGXUtKo7xUdv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聘，明人物。嘉靖三十八年進士，籍贯涪州。（中国历代人物传记资料库 CBDB 324430）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Zunhh_pa-j149dAb-N2VoT
          claim_id: c_oeaoi4S1S3fC7L8FvFLJ6i
          source_id: s_c9UhPQo1j8tVkJ68mAJe42
          stance: supports
          locator: CBDB:324430
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iBeflbJopUv3ulXOcd1G7R
        subject_person_id: p_DcTxGi4fs4wDZZw4QNf6x3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZCSBH1ggTRGGXUtKo7xUdv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7aDGPrJ2sB3HoWEfRyzKyf
          claim_id: c_iBeflbJopUv3ulXOcd1G7R
          source_id: s_UoW__hYdSEsOICbIrjgE2i
          stance: supports
          locator: CBDB：兄弟 王堂（204814）之父／母 王本雚
          quotation: null
          interpretation_note: 由兄弟关系推断：王聘 与 王堂 为同胞（CBDB 记「弟」），王堂 之父／母即 王聘 之父／母。
          source:
            id: s_UoW__hYdSEsOICbIrjgE2i
            source_type: api_record
            title: 中国历代人物传记资料库：王聘（CBDB 324430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324430&o=json
            external_identifier: CBDB:324430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DcTxGi4fs4wDZZw4QNf6x3
        status: active
        display_name: 王本雚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2Yx3pvxaCTvwBc9Hc9G77N
        subject_person_id: p_R77qQWn6AaKWcHuNaQWCy2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZCSBH1ggTRGGXUtKo7xUdv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_liPQsFHi8cH0ebHhk1Mr5L
          claim_id: c_2Yx3pvxaCTvwBc9Hc9G77N
          source_id: s_UoW__hYdSEsOICbIrjgE2i
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204814 王堂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UoW__hYdSEsOICbIrjgE2i
            source_type: api_record
            title: 中国历代人物传记资料库：王聘（CBDB 324430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324430&o=json
            external_identifier: CBDB:324430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_R77qQWn6AaKWcHuNaQWCy2
        status: active
        display_name: 王堂
        merged_into_person_id: null
---

# 王聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聘 | accepted |
| bio.summary | 王聘，明人物。嘉靖三十八年進士，籍贯涪州。（中国历代人物传记资料库 CBDB 324430） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DcTxGi4fs4wDZZw4QNf6x3 | 王本雚 | accepted |
| other | p_R77qQWn6AaKWcHuNaQWCy2 | 王堂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聘（CBDB 324430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324430&o=json)
