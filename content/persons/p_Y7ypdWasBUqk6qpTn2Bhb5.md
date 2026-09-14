---
schema: wang-person/v1
id: p_Y7ypdWasBUqk6qpTn2Bhb5
status: active
merged_into: null
display_name: 王璐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jVfEvGmqd1adUDpK4qsjiA
        subject_person_id: p_Y7ypdWasBUqk6qpTn2Bhb5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1oRip7Sa37tpuS54Ya6LEL
          claim_id: c_jVfEvGmqd1adUDpK4qsjiA
          source_id: s_NDt9PS11Z4CRqqYPDXioV3
          stance: supports
          locator: CBDB:255910
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255910）
          source: &a1
            id: s_NDt9PS11Z4CRqqYPDXioV3
            source_type: api_record
            title: 中国历代人物传记资料库：王璐（CBDB 255910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255910&o=json
            external_identifier: CBDB:255910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.369Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n6N23Nox82QbLx242tvFij
        subject_person_id: p_Y7ypdWasBUqk6qpTn2Bhb5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璐，明人物。成化十七年進士，籍贯鄞縣。（中国历代人物传记资料库 CBDB 255910）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R1M8zQbfA8hg297SKzQMIC
          claim_id: c_n6N23Nox82QbLx242tvFij
          source_id: s_NDt9PS11Z4CRqqYPDXioV3
          stance: supports
          locator: CBDB:255910
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_S2YXJjqn-zZh6AoGj_2Tem
        subject_person_id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y7ypdWasBUqk6qpTn2Bhb5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KqCkRGVxsXGM-ENNlQuEyv
          claim_id: c_S2YXJjqn-zZh6AoGj_2Tem
          source_id: s_y9AevbnsJ59UAGU0e4B7HF
          stance: supports
          locator: CBDB：兄弟 王瑫（126779）之父／母 王鞏謙
          quotation: null
          interpretation_note: 由兄弟关系推断：王璐 与 王瑫 为同胞（CBDB 记「兄」），王瑫 之父／母即 王璐 之父／母。
          source:
            id: s_y9AevbnsJ59UAGU0e4B7HF
            source_type: api_record
            title: 中国历代人物传记资料库：王璐（CBDB 255910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255910&o=json
            external_identifier: CBDB:255910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        status: active
        display_name: 王鞏謙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_DyyAPgyFyhhbBeVrnPXBVj
        subject_person_id: p_2Loswb2HqViVcQmQ8rSFe9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Y7ypdWasBUqk6qpTn2Bhb5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GyGZpLkb8dEwaCWvehtjHa
          claim_id: c_DyyAPgyFyhhbBeVrnPXBVj
          source_id: s_y9AevbnsJ59UAGU0e4B7HF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126779 王瑫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_y9AevbnsJ59UAGU0e4B7HF
            source_type: api_record
            title: 中国历代人物传记资料库：王璐（CBDB 255910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255910&o=json
            external_identifier: CBDB:255910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2Loswb2HqViVcQmQ8rSFe9
        status: active
        display_name: 王瑫
        merged_into_person_id: null
---

# 王璐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璐 | accepted |
| bio.summary | 王璐，明人物。成化十七年進士，籍贯鄞縣。（中国历代人物传记资料库 CBDB 255910） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vi9ZDtvEhQ6sUw3P3TjQzS | 王鞏謙 | accepted |
| other | p_2Loswb2HqViVcQmQ8rSFe9 | 王瑫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璐（CBDB 255910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255910&o=json)
