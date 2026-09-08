---
schema: wang-person/v1
id: p_G6TTy42oGuEaEe7C4FnKVc
status: active
merged_into: null
display_name: 陈玉
cbdb_id: 100029
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4HoSrZ0awKMhbSXnxO9-9a
        subject_person_id: p_G6TTy42oGuEaEe7C4FnKVc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈玉，清人物。中国历代人物传记资料库（CBDB）以人物编号 100029 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wnG7dfO0PWfk8hWtV9Mc4c
          claim_id: c_4HoSrZ0awKMhbSXnxO9-9a
          source_id: s_Cj8bPn2vFwwXM8em8h2ayZ
          stance: supports
          locator: CBDB:100029
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Cj8bPn2vFwwXM8em8h2ayZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：陳玉（100029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100029&o=json
            external_identifier: CBDB:100029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:17.869Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3t5recXkVtQq3EWivJvXRu
        subject_person_id: p_G6TTy42oGuEaEe7C4FnKVc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈玉
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ljda3F218NjzmLBkRa7vyV
          claim_id: c_3t5recXkVtQq3EWivJvXRu
          source_id: s_Cj8bPn2vFwwXM8em8h2ayZ
          stance: supports
          locator: Q45611291
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_MHYHuCTS3YdCgL7zSMQR4X
          claim_id: c_3t5recXkVtQq3EWivJvXRu
          source_id: s_WiYg6V21HqmxK3FU1ZaNig
          stance: supports
          locator: Q45611291
          quotation: null
          interpretation_note: null
          source:
            id: s_WiYg6V21HqmxK3FU1ZaNig
            source_type: api_record
            title: 维基数据：陈玉（Q45611291）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45611291
            external_identifier: Q45611291
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:17.691Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Nx9aAmA1ozAuETQqfaWyj4
        subject_person_id: p_G6TTy42oGuEaEe7C4FnKVc
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_hCN4NHH11HG3cmPwcyPC1j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1na91dGQr1LeEK4tmE9bBm
          claim_id: c_Nx9aAmA1ozAuETQqfaWyj4
          source_id: s_UPCADAz2HRhT6HbMVjbUEt
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_UPCADAz2HRhT6HbMVjbUEt
            source_type: api_record
            title: 维基数据：王鸣盛（Q11573252）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573252
            external_identifier: Q11573252
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:00.477Z
            metadata_json: null
        - id: cs_A8QV2j5x2vHmAswDgAyyzp
          claim_id: c_Nx9aAmA1ozAuETQqfaWyj4
          source_id: s_WiYg6V21HqmxK3FU1ZaNig
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_WiYg6V21HqmxK3FU1ZaNig
            source_type: api_record
            title: 维基数据：陈玉（Q45611291）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45611291
            external_identifier: Q45611291
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:17.691Z
            metadata_json: null
      object_person:
        id: p_hCN4NHH11HG3cmPwcyPC1j
        status: active
        display_name: 王鸣盛
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陈玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陈玉，清人物。中国历代人物传记资料库（CBDB）以人物编号 100029 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 陈玉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_hCN4NHH11HG3cmPwcyPC1j | 王鸣盛 | accepted |

## 外部来源

- [维基数据：陈玉（Q45611291）](https://www.wikidata.org/wiki/Q45611291)
- [维基数据：王鸣盛（Q11573252）](https://www.wikidata.org/wiki/Q11573252)
- [CBDB 中国历代人物传记资料库：陳玉（100029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100029&o=json)
