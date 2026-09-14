---
schema: wang-person/v1
id: p_o8mnqwhxLHXVyozNvVaaCQ
status: active
merged_into: null
display_name: 王順
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HDs6BDw7PxcXwm4cvXicWC
        subject_person_id: p_o8mnqwhxLHXVyozNvVaaCQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BMW8y43NvLb1RUiEdRpZwW
          claim_id: c_HDs6BDw7PxcXwm4cvXicWC
          source_id: s_2KUHxKt8a5XnbCUL3NACoE
          stance: supports
          locator: CBDB:242216
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242216）
          source: &a1
            id: s_2KUHxKt8a5XnbCUL3NACoE
            source_type: api_record
            title: 中国历代人物传记资料库：王順（CBDB 242216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242216&o=json
            external_identifier: CBDB:242216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jzMJ6tswc8mq58yCBT4qhZ
        subject_person_id: p_o8mnqwhxLHXVyozNvVaaCQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順，明人物。成化二年進士，籍贯洛川。（中国历代人物传记资料库 CBDB 242216）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r2XjlvRiFYdbWFCZ-usY5m
          claim_id: c_jzMJ6tswc8mq58yCBT4qhZ
          source_id: s_2KUHxKt8a5XnbCUL3NACoE
          stance: supports
          locator: CBDB:242216
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GWdwVsrkbOJ_HF-G3m0Y6x
        subject_person_id: p_ZSdmaffBtX3DKbv12A8Zie
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o8mnqwhxLHXVyozNvVaaCQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wfZlklzugEUjZP0rt1pccd
          claim_id: c_GWdwVsrkbOJ_HF-G3m0Y6x
          source_id: s_CP0qYXJIKUvv7bPJkEne2f
          stance: supports
          locator: CBDB：兄弟 王義（199241）之父／母 王輝
          quotation: null
          interpretation_note: 由兄弟关系推断：王順 与 王義 为同胞（CBDB 记「兄」），王義 之父／母即 王順 之父／母。
          source:
            id: s_CP0qYXJIKUvv7bPJkEne2f
            source_type: api_record
            title: 中国历代人物传记资料库：王順（CBDB 242216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242216&o=json
            external_identifier: CBDB:242216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZSdmaffBtX3DKbv12A8Zie
        status: active
        display_name: 王輝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_J7wpCcwTGpPiY3wPzHu_yx
        subject_person_id: p_J9NadhxFwxWfp7AyRarwGS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_o8mnqwhxLHXVyozNvVaaCQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xI6KQV4KPrHgvoyeH-yJsA
          claim_id: c_J7wpCcwTGpPiY3wPzHu_yx
          source_id: s_CP0qYXJIKUvv7bPJkEne2f
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199241 王義）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CP0qYXJIKUvv7bPJkEne2f
            source_type: api_record
            title: 中国历代人物传记资料库：王順（CBDB 242216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242216&o=json
            external_identifier: CBDB:242216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_J9NadhxFwxWfp7AyRarwGS
        status: active
        display_name: 王義
        merged_into_person_id: null
---

# 王順

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王順 | accepted |
| bio.summary | 王順，明人物。成化二年進士，籍贯洛川。（中国历代人物传记资料库 CBDB 242216） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZSdmaffBtX3DKbv12A8Zie | 王輝 | accepted |
| other | p_J9NadhxFwxWfp7AyRarwGS | 王義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王順（CBDB 242216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242216&o=json)
