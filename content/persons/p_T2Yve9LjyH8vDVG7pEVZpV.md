---
schema: wang-person/v1
id: p_T2Yve9LjyH8vDVG7pEVZpV
status: active
merged_into: null
display_name: 王徽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d5qhRQhmakyPoagjPL3t7N
        subject_person_id: p_T2Yve9LjyH8vDVG7pEVZpV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T6Xqi4avTMKEhKm63b2pZQ
          claim_id: c_d5qhRQhmakyPoagjPL3t7N
          source_id: s_BDsHG9gsaZhenHFziNQsnh
          stance: supports
          locator: CBDB:237580
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237580）
          source: &a1
            id: s_BDsHG9gsaZhenHFziNQsnh
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 237580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237580&o=json
            external_identifier: CBDB:237580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.848Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7TN91SMBuvxPCD6S6gopZS
        subject_person_id: p_T2Yve9LjyH8vDVG7pEVZpV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽，明人物。正统七年進士，籍贯固安。（中国历代人物传记资料库 CBDB 237580）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_litSD2BrdZ7OBruChyr_4x
          claim_id: c_7TN91SMBuvxPCD6S6gopZS
          source_id: s_BDsHG9gsaZhenHFziNQsnh
          stance: supports
          locator: CBDB:237580
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pjEy4LzxX4HnpPbR0AeN3j
        subject_person_id: p_pgR8SLxunnSi6qPKCxtHNt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T2Yve9LjyH8vDVG7pEVZpV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YWGjln5R7xi0zgWc31iaGz
          claim_id: c_pjEy4LzxX4HnpPbR0AeN3j
          source_id: s_HlvYwmQTaSW6bpWFicX4lp
          stance: supports
          locator: CBDB：兄弟 王復（67655）之父／母 王騏
          quotation: null
          interpretation_note: 由兄弟关系推断：王徽 与 王復 为同胞（CBDB 记「弟」），王復 之父／母即 王徽 之父／母。
          source:
            id: s_HlvYwmQTaSW6bpWFicX4lp
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 237580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237580&o=json
            external_identifier: CBDB:237580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pgR8SLxunnSi6qPKCxtHNt
        status: active
        display_name: 王騏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_unZfayKFB9LEZBS7t80vJj
        subject_person_id: p_Koi5WJ5jcXbBAKpaCrntSB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_T2Yve9LjyH8vDVG7pEVZpV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Grgi513s9ENR51uJ6F2Ewx
          claim_id: c_unZfayKFB9LEZBS7t80vJj
          source_id: s_HlvYwmQTaSW6bpWFicX4lp
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67655 王復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HlvYwmQTaSW6bpWFicX4lp
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 237580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237580&o=json
            external_identifier: CBDB:237580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Koi5WJ5jcXbBAKpaCrntSB
        status: active
        display_name: 王復
        merged_into_person_id: null
---

# 王徽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王徽 | accepted |
| bio.summary | 王徽，明人物。正统七年進士，籍贯固安。（中国历代人物传记资料库 CBDB 237580） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pgR8SLxunnSi6qPKCxtHNt | 王騏 | accepted |
| other | p_Koi5WJ5jcXbBAKpaCrntSB | 王復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王徽（CBDB 237580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237580&o=json)
