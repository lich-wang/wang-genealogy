---
schema: wang-person/v1
id: p_vx3T8VwhpKz6o448Z5Jm7Z
status: active
merged_into: null
display_name: 王禮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YEojLBBbepLgTaB3KEAAb7
        subject_person_id: p_vx3T8VwhpKz6o448Z5Jm7Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qAuAJCEqcWg3Hb8QQDLEAs
          claim_id: c_YEojLBBbepLgTaB3KEAAb7
          source_id: s_AxSrW7xAi78eMTiD9LsiLM
          stance: supports
          locator: CBDB:245781
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245781）
          source: &a1
            id: s_AxSrW7xAi78eMTiD9LsiLM
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 245781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245781&o=json
            external_identifier: CBDB:245781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.076Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7DZcEmmW6hq8UHMdR3vFmt
        subject_person_id: p_vx3T8VwhpKz6o448Z5Jm7Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮，明人物。成化八年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 245781）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_inCeWdX3HmqyXZbeZDyI6j
          claim_id: c_7DZcEmmW6hq8UHMdR3vFmt
          source_id: s_AxSrW7xAi78eMTiD9LsiLM
          stance: supports
          locator: CBDB:245781
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oXKgTE0qbbdOvNCj4-OoV5
        subject_person_id: p_t5oHeornqu2QNuT9xayaao
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vx3T8VwhpKz6o448Z5Jm7Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_91LIET9u47azUaEYpNPpIK
          claim_id: c_oXKgTE0qbbdOvNCj4-OoV5
          source_id: s_KHJ_qKqIae5YG7SYlR6CUF
          stance: supports
          locator: CBDB：兄弟 王祿（199491）之父／母 王英
          quotation: null
          interpretation_note: 由兄弟关系推断：王禮 与 王祿 为同胞（CBDB 记「兄」），王祿 之父／母即 王禮 之父／母。
          source:
            id: s_KHJ_qKqIae5YG7SYlR6CUF
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 245781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245781&o=json
            external_identifier: CBDB:245781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_t5oHeornqu2QNuT9xayaao
        status: active
        display_name: 王英
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_cONz0mMpvWfruJ0Uq0HDT1
        subject_person_id: p_5CduZYd3M32UzBRfFgkTNy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vx3T8VwhpKz6o448Z5Jm7Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cVbtmWr2uRbn3pQjRtsIcY
          claim_id: c_cONz0mMpvWfruJ0Uq0HDT1
          source_id: s_KHJ_qKqIae5YG7SYlR6CUF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199491 王祿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KHJ_qKqIae5YG7SYlR6CUF
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 245781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245781&o=json
            external_identifier: CBDB:245781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5CduZYd3M32UzBRfFgkTNy
        status: active
        display_name: 王祿
        merged_into_person_id: null
---

# 王禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禮 | accepted |
| bio.summary | 王禮，明人物。成化八年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 245781） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_t5oHeornqu2QNuT9xayaao | 王英 | accepted |
| other | p_5CduZYd3M32UzBRfFgkTNy | 王祿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王禮（CBDB 245781）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245781&o=json)
