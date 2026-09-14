---
schema: wang-person/v1
id: p_PeAPXHeFa7NUdx4rwt4PMH
status: active
merged_into: null
display_name: 王夢驥
cbdb_id: 224187
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SPwbv33ZscmQBrbMf9mCoa
        subject_person_id: p_PeAPXHeFa7NUdx4rwt4PMH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢驥，明人物。萬曆十一年進士，籍贯掖縣。（中国历代人物传记资料库 CBDB 224187）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ufILcz9QndcDh_lqCPUqMz
          claim_id: c_SPwbv33ZscmQBrbMf9mCoa
          source_id: s_1Sc5WV4nkZ12isSaRFEa1N
          stance: supports
          locator: CBDB:224187
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1Sc5WV4nkZ12isSaRFEa1N
            source_type: api_record
            title: 中国历代人物传记资料库：王夢驥（CBDB 224187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224187&o=json
            external_identifier: CBDB:224187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9GyftuRVP5zV2VtPN34H15
        subject_person_id: p_PeAPXHeFa7NUdx4rwt4PMH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢驥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FUF93wedZ1A5JTMBpyEEpn
          claim_id: c_9GyftuRVP5zV2VtPN34H15
          source_id: s_1Sc5WV4nkZ12isSaRFEa1N
          stance: supports
          locator: CBDB:224187
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lAplLu29T2vlBbD8nG31ss
        subject_person_id: p_tA8L9oJKVbRZ4sRbvb6FuX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PeAPXHeFa7NUdx4rwt4PMH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7rNNz-zWVgTRTedfDRUlyp
          claim_id: c_lAplLu29T2vlBbD8nG31ss
          source_id: s_TSrHZoPHHciqWvRVoNUAbu
          stance: supports
          locator: CBDB：兄弟 王夢鯉（206856）之父／母 王三重
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢驥 与 王夢鯉 为同胞（CBDB 记「兄」），王夢鯉 之父／母即 王夢驥 之父／母。
          source:
            id: s_TSrHZoPHHciqWvRVoNUAbu
            source_type: api_record
            title: 中国历代人物传记资料库：王夢驥（CBDB 224187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224187&o=json
            external_identifier: CBDB:224187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tA8L9oJKVbRZ4sRbvb6FuX
        status: active
        display_name: 王三重
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_IaY_7bPgGB0trAjarrKbzQ
        subject_person_id: p_PeAPXHeFa7NUdx4rwt4PMH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_peUehXHPLMte3L7YPhiTwo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pg91GTy4GtJfJeW_TQJVfA
          claim_id: c_IaY_7bPgGB0trAjarrKbzQ
          source_id: s_TSrHZoPHHciqWvRVoNUAbu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206856 王夢鯉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TSrHZoPHHciqWvRVoNUAbu
            source_type: api_record
            title: 中国历代人物传记资料库：王夢驥（CBDB 224187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224187&o=json
            external_identifier: CBDB:224187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_peUehXHPLMte3L7YPhiTwo
        status: active
        display_name: 王夢鯉
        merged_into_person_id: null
---

# 王夢驥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王夢驥，明人物。萬曆十一年進士，籍贯掖縣。（中国历代人物传记资料库 CBDB 224187） | accepted |
| name.primary | 王夢驥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tA8L9oJKVbRZ4sRbvb6FuX | 王三重 | accepted |
| other | p_peUehXHPLMte3L7YPhiTwo | 王夢鯉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢驥（CBDB 224187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224187&o=json)
