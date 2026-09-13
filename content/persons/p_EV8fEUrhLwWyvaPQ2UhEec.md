---
schema: wang-person/v1
id: p_EV8fEUrhLwWyvaPQ2UhEec
status: active
merged_into: null
display_name: 王君儒
cbdb_id: 151070
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oaVfkejmgRqzaehHkX2pwx
        subject_person_id: p_EV8fEUrhLwWyvaPQ2UhEec
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君儒，南北朝人物。籍贯晉陽，曾任御史中丞。（中国历代人物传记资料库 CBDB 151070）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_QiwpgX0lJEZuIfnL4cjrQS
          claim_id: c_oaVfkejmgRqzaehHkX2pwx
          source_id: s_5KfF6oEm5XBePQsAH2yKBp
          stance: supports
          locator: CBDB:151070
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5KfF6oEm5XBePQsAH2yKBp
            source_type: api_record
            title: 中国历代人物传记资料库：王君儒（CBDB 151070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151070&o=json
            external_identifier: CBDB:151070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PfBsdtT8hkrD4sb5pCbMEV
        subject_person_id: p_EV8fEUrhLwWyvaPQ2UhEec
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ix5ioAkgQzxd67Y72ByMZ9
          claim_id: c_PfBsdtT8hkrD4sb5pCbMEV
          source_id: s_5KfF6oEm5XBePQsAH2yKBp
          stance: supports
          locator: CBDB:151070
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 南北朝
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Yn9R-zduPM77TY_INlm2ls
        subject_person_id: p_wg9SbiU6iuiiEMCXTr6z5i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EV8fEUrhLwWyvaPQ2UhEec
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cg-AJ33AQ9PRi1mFWNiFo-
          claim_id: c_Yn9R-zduPM77TY_INlm2ls
          source_id: s_5KfF6oEm5XBePQsAH2yKBp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a2
            id: s_5KfF6oEm5XBePQsAH2yKBp
            source_type: api_record
            title: 中国历代人物传记资料库：王君儒（CBDB 151070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151070&o=json
            external_identifier: CBDB:151070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_wg9SbiU6iuiiEMCXTr6z5i
        status: active
        display_name: 王野父
        merged_into_person_id: null
  children:
    - claim:
        id: c_UoQGsQnv3zIqjkdvHNrAP8
        subject_person_id: p_EV8fEUrhLwWyvaPQ2UhEec
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_25r3CJHZNkQEGEuVBhWUVs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JfV-xoD9aZ80FUjGVoTy8D
          claim_id: c_UoQGsQnv3zIqjkdvHNrAP8
          source_id: s_CfBgvGA6FYSyfBUU6oAfJj
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CfBgvGA6FYSyfBUU6oAfJj
            source_type: api_record
            title: 中国历代人物传记资料库：王孝幹（CBDB 175765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175765&o=json
            external_identifier: CBDB:175765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.113Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_25r3CJHZNkQEGEuVBhWUVs
        status: active
        display_name: 王孝幹
        merged_into_person_id: null
    - claim:
        id: c_dGWJRNuD7va9hcBePjLK_h
        subject_person_id: p_EV8fEUrhLwWyvaPQ2UhEec
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tneJQvKK7NPkwfNwUhfwqV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ttxqd7rZEqGh12irY-7o68
          claim_id: c_dGWJRNuD7va9hcBePjLK_h
          source_id: s_P4PcPxcheiEx26Wv36v5Mk
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P4PcPxcheiEx26Wv36v5Mk
            source_type: api_record
            title: 中国历代人物传记资料库：王孝倫（CBDB 175773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175773&o=json
            external_identifier: CBDB:175773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tneJQvKK7NPkwfNwUhfwqV
        status: active
        display_name: 王孝倫
        merged_into_person_id: null
    - claim:
        id: c_S4Jxi56K7EqhAG3G1qJStr
        subject_person_id: p_EV8fEUrhLwWyvaPQ2UhEec
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Fqf98231G66GDJtjxHT3fS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KVmIp-EzeO6yj9YSRkJpHd
          claim_id: c_S4Jxi56K7EqhAG3G1qJStr
          source_id: s_5KfF6oEm5XBePQsAH2yKBp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_Fqf98231G66GDJtjxHT3fS
        status: active
        display_name: 王孝遠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王君儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王君儒，南北朝人物。籍贯晉陽，曾任御史中丞。（中国历代人物传记资料库 CBDB 151070） | accepted |
| name.primary | 王君儒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wg9SbiU6iuiiEMCXTr6z5i | 王野父 | accepted |
| children | p_25r3CJHZNkQEGEuVBhWUVs | 王孝幹 | accepted |
| children | p_tneJQvKK7NPkwfNwUhfwqV | 王孝倫 | accepted |
| children | p_Fqf98231G66GDJtjxHT3fS | 王孝遠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王君儒（CBDB 151070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151070&o=json)
- [中国历代人物传记资料库：王孝幹（CBDB 175765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175765&o=json)
- [中国历代人物传记资料库：王孝倫（CBDB 175773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175773&o=json)
