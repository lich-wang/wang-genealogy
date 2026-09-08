---
schema: wang-person/v1
id: p_ofwfED7cGNaG45dVNWJBNj
status: active
merged_into: null
display_name: 王䪧
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XMArqDnBZFD8KV6zjGuQAj
        subject_person_id: p_ofwfED7cGNaG45dVNWJBNj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王䪧，明人物。CBDB 记录其曾任壽官。中国历代人物传记资料库（CBDB）以人物编号 277429 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_NT2DfbeF1qij7gxbyutQwJ
          claim_id: c_XMArqDnBZFD8KV6zjGuQAj
          source_id: s_SYCC4D3gpxEXf8QPU9rNwS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_SYCC4D3gpxEXf8QPU9rNwS
            source_type: api_record
            title: 维基数据：王䪧（Q45663719）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663719
            external_identifier: Q45663719
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:02.160Z
            metadata_json: null
        - id: cs_huP1QZuaXpdYs8wnVDK_as
          claim_id: c_XMArqDnBZFD8KV6zjGuQAj
          source_id: s_8CgC8aDPZCSgGPCQ2Gv74E
          stance: supports
          locator: CBDB:277429
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8CgC8aDPZCSgGPCQ2Gv74E
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王音也（277429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277429&o=json
            external_identifier: CBDB:277429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:02.332Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KTQUMGUrWgAB68wah14xLg
        subject_person_id: p_ofwfED7cGNaG45dVNWJBNj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王䪧
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kEQJM4KCDR5Jw4aQ7yzmMf
          claim_id: c_KTQUMGUrWgAB68wah14xLg
          source_id: s_SYCC4D3gpxEXf8QPU9rNwS
          stance: supports
          locator: Q45663719
          quotation: null
          interpretation_note: null
          source:
            id: s_SYCC4D3gpxEXf8QPU9rNwS
            source_type: api_record
            title: 维基数据：王䪧（Q45663719）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663719
            external_identifier: Q45663719
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:02.160Z
            metadata_json: null
        - id: cs_nKBX4hw4GF6KaP376CJFsm
          claim_id: c_KTQUMGUrWgAB68wah14xLg
          source_id: s_8CgC8aDPZCSgGPCQ2Gv74E
          stance: supports
          locator: Q45663719
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uUj1SaJ2iYwRALc29ZFv1P
        subject_person_id: p_xJsRqYi6bQ21m8ncMBogv4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ofwfED7cGNaG45dVNWJBNj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_twUQmMV7QkhSRr1tVKSEDm
          claim_id: c_uUj1SaJ2iYwRALc29ZFv1P
          source_id: s_SYCC4D3gpxEXf8QPU9rNwS
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_4U2MgUptuF1VTZ8xDQ4z86
          claim_id: c_uUj1SaJ2iYwRALc29ZFv1P
          source_id: s_L2JMk13QEy17HsL24NGnjn
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_L2JMk13QEy17HsL24NGnjn
            source_type: api_record
            title: 维基数据：王民（Q45663662）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663662
            external_identifier: Q45663662
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_xJsRqYi6bQ21m8ncMBogv4
        status: active
        display_name: 王民
        merged_into_person_id: null
  children:
    - claim:
        id: c_zcM7p63JNv8oUDLiuTDSYn
        subject_person_id: p_ofwfED7cGNaG45dVNWJBNj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BdmxytotV7zqZnEBKrEUyP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GYUMbWHdZ15MJ29UQpRFsb
          claim_id: c_zcM7p63JNv8oUDLiuTDSYn
          source_id: s_jwpL4YCme3VDd3qJnCQEE4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jwpL4YCme3VDd3qJnCQEE4
            source_type: api_record
            title: 维基数据：王纶（Q45663776）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663776
            external_identifier: Q45663776
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.609Z
            metadata_json: null
        - id: cs_X98ycHrTXxUuc6MENJ15NT
          claim_id: c_zcM7p63JNv8oUDLiuTDSYn
          source_id: s_SYCC4D3gpxEXf8QPU9rNwS
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_BdmxytotV7zqZnEBKrEUyP
        status: active
        display_name: 王纶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王䪧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王䪧，明人物。CBDB 记录其曾任壽官。中国历代人物传记资料库（CBDB）以人物编号 277429 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王䪧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xJsRqYi6bQ21m8ncMBogv4 | 王民 | accepted |
| children | p_BdmxytotV7zqZnEBKrEUyP | 王纶 | accepted |

## 外部来源

- [维基数据：王纶（Q45663776）](https://www.wikidata.org/wiki/Q45663776)
- [维基数据：王民（Q45663662）](https://www.wikidata.org/wiki/Q45663662)
- [维基数据：王䪧（Q45663719）](https://www.wikidata.org/wiki/Q45663719)
- [CBDB 中国历代人物传记资料库：王音也（277429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277429&o=json)
