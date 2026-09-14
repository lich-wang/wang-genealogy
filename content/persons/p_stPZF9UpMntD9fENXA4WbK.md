---
schema: wang-person/v1
id: p_stPZF9UpMntD9fENXA4WbK
status: active
merged_into: null
display_name: 王瓊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JosoB4bQyeS4RzUawskHBu
        subject_person_id: p_stPZF9UpMntD9fENXA4WbK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MRQzaGDC2rFyV8PCErQ3GV
          claim_id: c_JosoB4bQyeS4RzUawskHBu
          source_id: s_9832GwXCJjW5qWL2wZA8ee
          stance: supports
          locator: CBDB:284065
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284065）
          source: &a1
            id: s_9832GwXCJjW5qWL2wZA8ee
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 284065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284065&o=json
            external_identifier: CBDB:284065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.172Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v5VAV42XN94EXp7B3KVjt6
        subject_person_id: p_stPZF9UpMntD9fENXA4WbK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊，明人物。天順元年進士，籍贯襄陽。（中国历代人物传记资料库 CBDB 284065）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TGPNCFHqLN2EHbxqpHggoc
          claim_id: c_v5VAV42XN94EXp7B3KVjt6
          source_id: s_9832GwXCJjW5qWL2wZA8ee
          stance: supports
          locator: CBDB:284065
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i7gMCs7VBkKofDnSvW0znQ
        subject_person_id: p_XjzxeCwh2jc3G7T2sJ2fKN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_stPZF9UpMntD9fENXA4WbK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gT0GE4tI63xSHsTKetdalk
          claim_id: c_i7gMCs7VBkKofDnSvW0znQ
          source_id: s_85qWxGgSKAtxLICs15QtQX
          stance: supports
          locator: CBDB：兄弟 王瑤（198525）之父／母 王淙
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓊 与 王瑤 为同胞（CBDB 记「弟」），王瑤 之父／母即 王瓊 之父／母。
          source:
            id: s_85qWxGgSKAtxLICs15QtQX
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 284065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284065&o=json
            external_identifier: CBDB:284065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XjzxeCwh2jc3G7T2sJ2fKN
        status: active
        display_name: 王淙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_3F4ITb7U8Ag3Y9KRk4fll3
        subject_person_id: p_6qZv86jCoBwmThHEXBGAvS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_stPZF9UpMntD9fENXA4WbK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_up_3YE0ANYD2pG7bb5BWVs
          claim_id: c_3F4ITb7U8Ag3Y9KRk4fll3
          source_id: s_85qWxGgSKAtxLICs15QtQX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198525 王瑤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_85qWxGgSKAtxLICs15QtQX
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 284065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284065&o=json
            external_identifier: CBDB:284065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6qZv86jCoBwmThHEXBGAvS
        status: active
        display_name: 王瑤
        merged_into_person_id: null
---

# 王瓊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓊 | accepted |
| bio.summary | 王瓊，明人物。天順元年進士，籍贯襄陽。（中国历代人物传记资料库 CBDB 284065） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XjzxeCwh2jc3G7T2sJ2fKN | 王淙 | accepted |
| other | p_6qZv86jCoBwmThHEXBGAvS | 王瑤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓊（CBDB 284065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284065&o=json)
