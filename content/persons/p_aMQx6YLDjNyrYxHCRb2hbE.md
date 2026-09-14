---
schema: wang-person/v1
id: p_aMQx6YLDjNyrYxHCRb2hbE
status: active
merged_into: null
display_name: 王賓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_36WJEm2r8Qzp8cHH73WHiG
        subject_person_id: p_aMQx6YLDjNyrYxHCRb2hbE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cTYypwa8MX1gpyoUVWNCGc
          claim_id: c_36WJEm2r8Qzp8cHH73WHiG
          source_id: s_MRU6evRjyaQ1ccnhfqjk53
          stance: supports
          locator: CBDB:245406
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245406）
          source: &a1
            id: s_MRU6evRjyaQ1ccnhfqjk53
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 245406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245406&o=json
            external_identifier: CBDB:245406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.066Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xTExmvfTgN7ZCtAQFF1hiZ
        subject_person_id: p_aMQx6YLDjNyrYxHCRb2hbE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓，明人物。成化八年進士，籍贯新淦。（中国历代人物传记资料库 CBDB 245406）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0FJ9f99RoxeUghlvWquJOr
          claim_id: c_xTExmvfTgN7ZCtAQFF1hiZ
          source_id: s_MRU6evRjyaQ1ccnhfqjk53
          stance: supports
          locator: CBDB:245406
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1WcRApsMofYrOfaq6tI8GF
        subject_person_id: p_2jbUSp9pUyEuUdReswY15E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aMQx6YLDjNyrYxHCRb2hbE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7e1S56aZI7GO_v3NcEvqld
          claim_id: c_1WcRApsMofYrOfaq6tI8GF
          source_id: s_S9C0ccqyZGEBPFzcrYqnLD
          stance: supports
          locator: CBDB：兄弟 王宜（199464）之父／母 王載錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王賓 与 王宜 为同胞（CBDB 记「弟」），王宜 之父／母即 王賓 之父／母。
          source:
            id: s_S9C0ccqyZGEBPFzcrYqnLD
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 245406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245406&o=json
            external_identifier: CBDB:245406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2jbUSp9pUyEuUdReswY15E
        status: active
        display_name: 王載錫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_J8OWhvwMQDhrub8nW2Y6Cy
        subject_person_id: p_aMQx6YLDjNyrYxHCRb2hbE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oQRajD9oDBfYHERmWbMNcH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x46gGR5EDCSjNRlIu1FddQ
          claim_id: c_J8OWhvwMQDhrub8nW2Y6Cy
          source_id: s_S9C0ccqyZGEBPFzcrYqnLD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199464 王宜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_S9C0ccqyZGEBPFzcrYqnLD
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 245406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245406&o=json
            external_identifier: CBDB:245406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oQRajD9oDBfYHERmWbMNcH
        status: active
        display_name: 王宜
        merged_into_person_id: null
---

# 王賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賓 | accepted |
| bio.summary | 王賓，明人物。成化八年進士，籍贯新淦。（中国历代人物传记资料库 CBDB 245406） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2jbUSp9pUyEuUdReswY15E | 王載錫 | accepted |
| other | p_oQRajD9oDBfYHERmWbMNcH | 王宜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 245406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245406&o=json)
