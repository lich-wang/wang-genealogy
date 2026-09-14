---
schema: wang-person/v1
id: p_QJg85sEDy4nhnMULVKcQ96
status: active
merged_into: null
display_name: 王祐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iU1HzREs3QH62PLnwt6CmZ
        subject_person_id: p_QJg85sEDy4nhnMULVKcQ96
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qU7AU5GrQ6GBAWZMKtAEu8
          claim_id: c_iU1HzREs3QH62PLnwt6CmZ
          source_id: s_E8LNLoJx4gWAgQULZYu2KC
          stance: supports
          locator: CBDB:245779
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245779）
          source: &a1
            id: s_E8LNLoJx4gWAgQULZYu2KC
            source_type: api_record
            title: 中国历代人物传记资料库：王祐（CBDB 245779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245779&o=json
            external_identifier: CBDB:245779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.075Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ww64sPiB6W6tWPwzNPJWLq
        subject_person_id: p_QJg85sEDy4nhnMULVKcQ96
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祐，明人物。成化八年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 245779）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-vSBVEJrFSDQTv3NsqkjYR
          claim_id: c_Ww64sPiB6W6tWPwzNPJWLq
          source_id: s_E8LNLoJx4gWAgQULZYu2KC
          stance: supports
          locator: CBDB:245779
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W-Xwyawy4RCijTw0FDYLCI
        subject_person_id: p_t5oHeornqu2QNuT9xayaao
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QJg85sEDy4nhnMULVKcQ96
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DNwjggSqme_0qIXF4Q-r_c
          claim_id: c_W-Xwyawy4RCijTw0FDYLCI
          source_id: s_6jELS3TAFgp8NLAmVtnLey
          stance: supports
          locator: CBDB：兄弟 王祿（199491）之父／母 王英
          quotation: null
          interpretation_note: 由兄弟关系推断：王祐 与 王祿 为同胞（CBDB 记「兄」），王祿 之父／母即 王祐 之父／母。
          source:
            id: s_6jELS3TAFgp8NLAmVtnLey
            source_type: api_record
            title: 中国历代人物传记资料库：王祐（CBDB 245779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245779&o=json
            external_identifier: CBDB:245779
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
        id: c_kivh5s8myvbEcK2K7ujsth
        subject_person_id: p_5CduZYd3M32UzBRfFgkTNy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QJg85sEDy4nhnMULVKcQ96
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K_2ZoOm4fuAVl388u1K5c0
          claim_id: c_kivh5s8myvbEcK2K7ujsth
          source_id: s_6jELS3TAFgp8NLAmVtnLey
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199491 王祿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6jELS3TAFgp8NLAmVtnLey
            source_type: api_record
            title: 中国历代人物传记资料库：王祐（CBDB 245779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245779&o=json
            external_identifier: CBDB:245779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5CduZYd3M32UzBRfFgkTNy
        status: active
        display_name: 王祿
        merged_into_person_id: null
---

# 王祐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祐 | accepted |
| bio.summary | 王祐，明人物。成化八年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 245779） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_t5oHeornqu2QNuT9xayaao | 王英 | accepted |
| other | p_5CduZYd3M32UzBRfFgkTNy | 王祿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祐（CBDB 245779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245779&o=json)
