---
schema: wang-person/v1
id: p_jMQq3YUY1rS9x8GMhcsfGD
status: active
merged_into: null
display_name: 王一德
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UynFMKaWaNrvJR4yRVHgEt
        subject_person_id: p_jMQq3YUY1rS9x8GMhcsfGD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DzXAsSy6MQ12FVtmFWX7zF
          claim_id: c_UynFMKaWaNrvJR4yRVHgEt
          source_id: s_GptL8GRYFcEFSy6s6UhTwQ
          stance: supports
          locator: CBDB:306150
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306150）
          source: &a1
            id: s_GptL8GRYFcEFSy6s6UhTwQ
            source_type: api_record
            title: 中国历代人物传记资料库：王一德（CBDB 306150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306150&o=json
            external_identifier: CBDB:306150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CQ8g91k7yKfj14V9PDMWHq
        subject_person_id: p_jMQq3YUY1rS9x8GMhcsfGD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一德，明人物。嘉靖二十三年進士，籍贯江都。（中国历代人物传记资料库 CBDB 306150）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yWdh8kHwy5F7BNbU5Uc5hN
          claim_id: c_CQ8g91k7yKfj14V9PDMWHq
          source_id: s_GptL8GRYFcEFSy6s6UhTwQ
          stance: supports
          locator: CBDB:306150
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Gkc_QlmBHM8aaqhf4FpS0Y
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jMQq3YUY1rS9x8GMhcsfGD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a-EMkUdjXhUnHdkB7FpKAP
          claim_id: c_Gkc_QlmBHM8aaqhf4FpS0Y
          source_id: s__QU12oxhUJ4y7zjD_akKjo
          stance: supports
          locator: CBDB：兄弟 王一陽（203535）之父／母 王遷
          quotation: null
          interpretation_note: 由兄弟关系推断：王一德 与 王一陽 为同胞（CBDB 记「兄」），王一陽 之父／母即 王一德 之父／母。
          source:
            id: s__QU12oxhUJ4y7zjD_akKjo
            source_type: api_record
            title: 中国历代人物传记资料库：王一德（CBDB 306150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306150&o=json
            external_identifier: CBDB:306150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_toP613bi74YEw4TLd3hMCu
        status: active
        display_name: 王遷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tQdjLcKo6qFuf4rbabYnO1
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jMQq3YUY1rS9x8GMhcsfGD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R8RYhVNTRdqdiHdl8gjzHq
          claim_id: c_tQdjLcKo6qFuf4rbabYnO1
          source_id: s__QU12oxhUJ4y7zjD_akKjo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203535 王一陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__QU12oxhUJ4y7zjD_akKjo
            source_type: api_record
            title: 中国历代人物传记资料库：王一德（CBDB 306150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306150&o=json
            external_identifier: CBDB:306150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4epX45r9bJPqQLoodeDXss
        status: active
        display_name: 王一陽
        merged_into_person_id: null
---

# 王一德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一德 | accepted |
| bio.summary | 王一德，明人物。嘉靖二十三年進士，籍贯江都。（中国历代人物传记资料库 CBDB 306150） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_toP613bi74YEw4TLd3hMCu | 王遷 | accepted |
| other | p_4epX45r9bJPqQLoodeDXss | 王一陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一德（CBDB 306150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306150&o=json)
