---
schema: wang-person/v1
id: p_5DMdSYspiH3PNgp1QAC2Ax
status: active
merged_into: null
display_name: 王存夫
cbdb_id: 157874
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X5i48yKHKnTqLoBnhAvM7P
        subject_person_id: p_5DMdSYspiH3PNgp1QAC2Ax
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存夫，唐人物。籍贯臨湍，曾任挽郎。（中国历代人物传记资料库 CBDB 157874）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_FBsHjcmg4ktSGqFp48XFgd
          claim_id: c_X5i48yKHKnTqLoBnhAvM7P
          source_id: s_nPq77MeVm486f98dhYHHRa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_nPq77MeVm486f98dhYHHRa
            source_type: api_record
            title: 维基数据：王存夫（Q45538806）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45538806
            external_identifier: Q45538806
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:48.907Z
            metadata_json: null
        - id: cs_xpssOKB4hrPkLJagTz568M
          claim_id: c_X5i48yKHKnTqLoBnhAvM7P
          source_id: s_f5RhYApu4yQBEPrag6fYfk
          stance: supports
          locator: CBDB:157874
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_f5RhYApu4yQBEPrag6fYfk
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王存夫（157874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157874&o=json
            external_identifier: CBDB:157874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:49.074Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tBuHSiLavrW5CBN5AgF9f2
        subject_person_id: p_5DMdSYspiH3PNgp1QAC2Ax
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存夫
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4NuwnqXX3GWgWVn1eNUaMM
          claim_id: c_tBuHSiLavrW5CBN5AgF9f2
          source_id: s_f5RhYApu4yQBEPrag6fYfk
          stance: supports
          locator: Q45538806
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_s18x2gmW3YN19GdXYMYnaW
          claim_id: c_tBuHSiLavrW5CBN5AgF9f2
          source_id: s_nPq77MeVm486f98dhYHHRa
          stance: supports
          locator: Q45538806
          quotation: null
          interpretation_note: null
          source:
            id: s_nPq77MeVm486f98dhYHHRa
            source_type: api_record
            title: 维基数据：王存夫（Q45538806）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45538806
            external_identifier: Q45538806
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:48.907Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DAnL3EXnvmjfEHuBwG46YB
        subject_person_id: p_Z5BPr9m4u9GFwUQLtaQNNb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5DMdSYspiH3PNgp1QAC2Ax
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_HGkmY91NHsRNuEqHQxQAK6
          claim_id: c_DAnL3EXnvmjfEHuBwG46YB
          source_id: s_dE8bRYtyV2HpwTy6Hstwm4
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_dE8bRYtyV2HpwTy6Hstwm4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王袞（141634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141634&o=json
            external_identifier: CBDB:141634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:06.517Z
            metadata_json: null
        - id: cs_LCcNgHzV3ecZMm5zRVsD6P
          claim_id: c_DAnL3EXnvmjfEHuBwG46YB
          source_id: s_jMfGGAf4XMHLRJzhikBhoq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_jMfGGAf4XMHLRJzhikBhoq
            source_type: api_record
            title: 维基数据：王袞（Q45537271）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45537271
            external_identifier: Q45537271
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:06.374Z
            metadata_json: null
        - id: cs_5pEsxDdr3qXtGWE7EaYAH6
          claim_id: c_DAnL3EXnvmjfEHuBwG46YB
          source_id: s_nPq77MeVm486f98dhYHHRa
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_nPq77MeVm486f98dhYHHRa
            source_type: api_record
            title: 维基数据：王存夫（Q45538806）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45538806
            external_identifier: Q45538806
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:48.907Z
            metadata_json: null
        - id: cs_sSu8ADJV9v1nJbTiquwTvA
          claim_id: c_DAnL3EXnvmjfEHuBwG46YB
          source_id: s_f5RhYApu4yQBEPrag6fYfk
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_f5RhYApu4yQBEPrag6fYfk
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王存夫（157874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157874&o=json
            external_identifier: CBDB:157874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:49.074Z
            metadata_json: null
      object_person:
        id: p_Z5BPr9m4u9GFwUQLtaQNNb
        status: active
        display_name: 王袞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王存夫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王存夫，唐人物。籍贯臨湍，曾任挽郎。（中国历代人物传记资料库 CBDB 157874） | accepted |
| name.primary | 王存夫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Z5BPr9m4u9GFwUQLtaQNNb | 王袞 | accepted |

## 外部来源

- [维基数据：王存夫（Q45538806）](https://www.wikidata.org/wiki/Q45538806)
- [维基数据：王袞（Q45537271）](https://www.wikidata.org/wiki/Q45537271)
- [CBDB 中国历代人物传记资料库：王存夫（157874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157874&o=json)
- [CBDB 中国历代人物传记资料库：王袞（141634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141634&o=json)
