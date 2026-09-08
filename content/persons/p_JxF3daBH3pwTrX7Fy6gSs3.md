---
schema: wang-person/v1
id: p_JxF3daBH3pwTrX7Fy6gSs3
status: active
merged_into: null
display_name: 王昌
cbdb_id: 149913
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PqwCJY6LH18qcd6QNwABeq
        subject_person_id: p_JxF3daBH3pwTrX7Fy6gSs3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌，唐人物。CBDB 记录其籍贯记录为洛陽，曾任縣尉。中国历代人物传记资料库（CBDB）以人物编号 149913 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_QrZDFShTH8aPwtHFHsyWJX
          claim_id: c_PqwCJY6LH18qcd6QNwABeq
          source_id: s_FoCEsyDiBznfHCWDrQUK2F
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FoCEsyDiBznfHCWDrQUK2F
            source_type: api_record
            title: 维基数据：王昌（Q45671769）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45671769
            external_identifier: Q45671769
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:51.276Z
            metadata_json: null
        - id: cs_ZOkNluIqjzICOKxA3GA5fG
          claim_id: c_PqwCJY6LH18qcd6QNwABeq
          source_id: s_eRMWwRf1HyvMruD7vbC3uX
          stance: supports
          locator: CBDB:149913
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_eRMWwRf1HyvMruD7vbC3uX
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昌（149913）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149913&o=json
            external_identifier: CBDB:149913
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:51.441Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_p99utXN8MK2fbFgjqEKhdQ
        subject_person_id: p_JxF3daBH3pwTrX7Fy6gSs3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3yweQR52PWBkM8fgRDZhaa
          claim_id: c_p99utXN8MK2fbFgjqEKhdQ
          source_id: s_eRMWwRf1HyvMruD7vbC3uX
          stance: supports
          locator: Q45671769
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_RzhPmYcoCVmwHBEfH9umY5
          claim_id: c_p99utXN8MK2fbFgjqEKhdQ
          source_id: s_FoCEsyDiBznfHCWDrQUK2F
          stance: supports
          locator: Q45671769
          quotation: null
          interpretation_note: null
          source:
            id: s_FoCEsyDiBznfHCWDrQUK2F
            source_type: api_record
            title: 维基数据：王昌（Q45671769）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45671769
            external_identifier: Q45671769
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:51.276Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_y86HE6tnjNnPpojvDFcNSH
        subject_person_id: p_GMCTq5KrktL4A6wV97QsyN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JxF3daBH3pwTrX7Fy6gSs3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_D7QKoPQwCNZpbvv6koCWrc
          claim_id: c_y86HE6tnjNnPpojvDFcNSH
          source_id: s_CJRovFBNPpkBucw7sNMmvK
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_CJRovFBNPpkBucw7sNMmvK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王德表（92112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92112&o=json
            external_identifier: CBDB:92112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:23.640Z
            metadata_json: null
        - id: cs_oEUFjGcnbqzx2N7y4RRyn7
          claim_id: c_y86HE6tnjNnPpojvDFcNSH
          source_id: s_CURwrKyQEGB2YySmUVnJvG
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CURwrKyQEGB2YySmUVnJvG
            source_type: api_record
            title: 维基数据：王德表（Q45447026）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45447026
            external_identifier: Q45447026
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:23.482Z
            metadata_json: null
        - id: cs_Y5P49RugY1K7D3p4pKc31i
          claim_id: c_y86HE6tnjNnPpojvDFcNSH
          source_id: s_FoCEsyDiBznfHCWDrQUK2F
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_FoCEsyDiBznfHCWDrQUK2F
            source_type: api_record
            title: 维基数据：王昌（Q45671769）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45671769
            external_identifier: Q45671769
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:51.276Z
            metadata_json: null
        - id: cs_DKCAWGnuEjBuEqCCNRPPVy
          claim_id: c_y86HE6tnjNnPpojvDFcNSH
          source_id: s_eRMWwRf1HyvMruD7vbC3uX
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_eRMWwRf1HyvMruD7vbC3uX
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昌（149913）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149913&o=json
            external_identifier: CBDB:149913
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:51.441Z
            metadata_json: null
      object_person:
        id: p_GMCTq5KrktL4A6wV97QsyN
        status: active
        display_name: 王德表
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昌，唐人物。CBDB 记录其籍贯记录为洛陽，曾任縣尉。中国历代人物传记资料库（CBDB）以人物编号 149913 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王昌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GMCTq5KrktL4A6wV97QsyN | 王德表 | accepted |

## 外部来源

- [维基数据：王昌（Q45671769）](https://www.wikidata.org/wiki/Q45671769)
- [维基数据：王德表（Q45447026）](https://www.wikidata.org/wiki/Q45447026)
- [CBDB 中国历代人物传记资料库：王昌（149913）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149913&o=json)
- [CBDB 中国历代人物传记资料库：王德表（92112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92112&o=json)
