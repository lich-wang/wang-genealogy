---
schema: wang-person/v1
id: p_qYbHrFaVm7aZKdVMAZgyL1
status: active
merged_into: null
display_name: 王应斌
cbdb_id: 294875
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PD7pNRNVFE3korsmJxtHwr
        subject_person_id: p_qYbHrFaVm7aZKdVMAZgyL1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王应斌，明人物。嘉靖十一年進士，籍贯山陰，入仕武舉人，曾任都司。（中国历代人物传记资料库 CBDB 294875）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_2W2vxjzUnZF8KZqew3YgmA
          claim_id: c_PD7pNRNVFE3korsmJxtHwr
          source_id: s_ecwrmMvoLwB9nwq7sDNaHG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ecwrmMvoLwB9nwq7sDNaHG
            source_type: api_record
            title: 维基数据：王应斌（Q45511084）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45511084
            external_identifier: Q45511084
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:17.691Z
            metadata_json: null
        - id: cs_FbPamvxNLr-iqY2FOtFkG2
          claim_id: c_PD7pNRNVFE3korsmJxtHwr
          source_id: s_mrfXStHXQ7Kbkh4qZLKXEz
          stance: supports
          locator: CBDB:294875
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mrfXStHXQ7Kbkh4qZLKXEz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王應斌（294875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294875&o=json
            external_identifier: CBDB:294875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:17.857Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_X67RaDEm1TJY6GuWZepAYW
        subject_person_id: p_qYbHrFaVm7aZKdVMAZgyL1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王应斌
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_F7v1dLT3HjvXjhnCpQW4yZ
          claim_id: c_X67RaDEm1TJY6GuWZepAYW
          source_id: s_ecwrmMvoLwB9nwq7sDNaHG
          stance: supports
          locator: Q45511084
          quotation: null
          interpretation_note: null
          source:
            id: s_ecwrmMvoLwB9nwq7sDNaHG
            source_type: api_record
            title: 维基数据：王应斌（Q45511084）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45511084
            external_identifier: Q45511084
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:17.691Z
            metadata_json: null
        - id: cs_vA3gScR9o1nyMfUWTmSC53
          claim_id: c_X67RaDEm1TJY6GuWZepAYW
          source_id: s_mrfXStHXQ7Kbkh4qZLKXEz
          stance: supports
          locator: Q45511084
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LDXA3jyUwnA1aAExuBiDw2
        subject_person_id: p_aXikAW5GmUNHUB4Mexh2vK
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_qYbHrFaVm7aZKdVMAZgyL1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Gmurp6sFXHEJmK5Gp7C8UW
          claim_id: c_LDXA3jyUwnA1aAExuBiDw2
          source_id: s_ecwrmMvoLwB9nwq7sDNaHG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ecwrmMvoLwB9nwq7sDNaHG
            source_type: api_record
            title: 维基数据：王应斌（Q45511084）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45511084
            external_identifier: Q45511084
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:17.691Z
            metadata_json: null
        - id: cs_nZxGPAmMcEQjLduQrPBBro
          claim_id: c_LDXA3jyUwnA1aAExuBiDw2
          source_id: s_2AbfFEGVf6njE9MhrfSvXE
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖十一年進士登科錄:一卷
          source:
            id: s_2AbfFEGVf6njE9MhrfSvXE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王畿（126814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126814&o=json
            external_identifier: CBDB:126814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:50.309Z
            metadata_json: null
        - id: cs_qb7BuJrQaKLQybF8uBHHrd
          claim_id: c_LDXA3jyUwnA1aAExuBiDw2
          source_id: s_uzM4rHi8qUhyHDCqSDb8qM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uzM4rHi8qUhyHDCqSDb8qM
            source_type: api_record
            title: 维基数据：王龙溪（Q11573179）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573179
            external_identifier: Q11573179
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:20.610Z
            metadata_json: null
      object_person:
        id: p_aXikAW5GmUNHUB4Mexh2vK
        status: active
        display_name: 王龙溪
        merged_into_person_id: null
    - claim:
        id: c_7_E6u0J-AQIq7qs5vsze8x
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qYbHrFaVm7aZKdVMAZgyL1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i70kvsS1MjhQK0ifRY1rsi
          claim_id: c_7_E6u0J-AQIq7qs5vsze8x
          source_id: s_mrfXStHXQ7Kbkh4qZLKXEz
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百二十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_netpjn2vvpbP4gRNZK5nnW
        status: active
        display_name: 王畿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王应斌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王应斌，明人物。嘉靖十一年進士，籍贯山陰，入仕武舉人，曾任都司。（中国历代人物传记资料库 CBDB 294875） | accepted |
| name.primary | 王应斌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aXikAW5GmUNHUB4Mexh2vK | 王龙溪 | accepted |
| parents | p_netpjn2vvpbP4gRNZK5nnW | 王畿 | accepted |

## 外部来源

- [维基数据：王龙溪（Q11573179）](https://www.wikidata.org/wiki/Q11573179)
- [维基数据：王应斌（Q45511084）](https://www.wikidata.org/wiki/Q45511084)
- [CBDB 中国历代人物传记资料库：王畿（126814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126814&o=json)
- [CBDB 中国历代人物传记资料库：王應斌（294875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294875&o=json)
