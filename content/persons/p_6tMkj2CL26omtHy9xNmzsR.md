---
schema: wang-person/v1
id: p_6tMkj2CL26omtHy9xNmzsR
status: active
merged_into: null
display_name: 王孟
cbdb_id: 18554
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uSzMdqeDA8emSLFFvGP618
        subject_person_id: p_6tMkj2CL26omtHy9xNmzsR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟，宋人物。CBDB 记录其籍贯记录为臨川。中国历代人物传记资料库（CBDB）以人物编号 18554 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6DjBia3XBEgS37HvstGsH8
          claim_id: c_uSzMdqeDA8emSLFFvGP618
          source_id: s_xHjZH9uaiSs1Y3gZRpHfZV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_xHjZH9uaiSs1Y3gZRpHfZV
            source_type: api_record
            title: 维基数据：王孟（Q45389725）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389725
            external_identifier: Q45389725
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:04.733Z
            metadata_json: null
        - id: cs_qYpVXPzMuUHA3Cj_3d-btF
          claim_id: c_uSzMdqeDA8emSLFFvGP618
          source_id: s_ZNjq99n8DMYP51AJQv4FQe
          stance: supports
          locator: CBDB:18554
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZNjq99n8DMYP51AJQv4FQe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王孟（18554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18554&o=json
            external_identifier: CBDB:18554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:04.917Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sYZG4Y6otBW78pcC8gHf7E
        subject_person_id: p_6tMkj2CL26omtHy9xNmzsR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6Q2DfxxEKtrxLRUHGBnfvh
          claim_id: c_sYZG4Y6otBW78pcC8gHf7E
          source_id: s_ZNjq99n8DMYP51AJQv4FQe
          stance: supports
          locator: Q45389725
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_NMPvUqyoiCWLJtqJu633bR
          claim_id: c_sYZG4Y6otBW78pcC8gHf7E
          source_id: s_xHjZH9uaiSs1Y3gZRpHfZV
          stance: supports
          locator: Q45389725
          quotation: null
          interpretation_note: null
          source:
            id: s_xHjZH9uaiSs1Y3gZRpHfZV
            source_type: api_record
            title: 维基数据：王孟（Q45389725）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389725
            external_identifier: Q45389725
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:04.733Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dEhhpaXsEBW23ALJBG1KeA
        subject_person_id: p_qhr63u6HvGLzGzcHEvaWtZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6tMkj2CL26omtHy9xNmzsR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_P1zVm4MYS5MMsWdnftLESJ
          claim_id: c_dEhhpaXsEBW23ALJBG1KeA
          source_id: s_bf7i3HJ55dCKhrKsK4HAr1
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bf7i3HJ55dCKhrKsK4HAr1
            source_type: api_record
            title: 维基数据：王用之（Q45389721）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389721
            external_identifier: Q45389721
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:18.559Z
            metadata_json: null
        - id: cs_nXDAH6ZnQKbTG1deXziPGn
          claim_id: c_dEhhpaXsEBW23ALJBG1KeA
          source_id: s_nN8U88v6ioGd6Vn7FnijMg
          stance: supports
          locator: 亲属关系：五子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_nN8U88v6ioGd6Vn7FnijMg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王用之（18553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18553&o=json
            external_identifier: CBDB:18553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:18.692Z
            metadata_json: null
        - id: cs_XMLG6vz6qeLWfJQJASYB1E
          claim_id: c_dEhhpaXsEBW23ALJBG1KeA
          source_id: s_xHjZH9uaiSs1Y3gZRpHfZV
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_xHjZH9uaiSs1Y3gZRpHfZV
            source_type: api_record
            title: 维基数据：王孟（Q45389725）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389725
            external_identifier: Q45389725
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:04.733Z
            metadata_json: null
        - id: cs_aRb8hjPVY81YC42KSc3o3s
          claim_id: c_dEhhpaXsEBW23ALJBG1KeA
          source_id: s_ZNjq99n8DMYP51AJQv4FQe
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_ZNjq99n8DMYP51AJQv4FQe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王孟（18554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18554&o=json
            external_identifier: CBDB:18554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:04.917Z
            metadata_json: null
      object_person:
        id: p_qhr63u6HvGLzGzcHEvaWtZ
        status: active
        display_name: 王用之
        merged_into_person_id: null
  children:
    - claim:
        id: c_d4A8zs79qCeDXPfYGDzM72
        subject_person_id: p_6tMkj2CL26omtHy9xNmzsR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NLL1hUn6YKoVjVKSBAAZHa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LJn4bnFiLP8bi77iY1N5TP
          claim_id: c_d4A8zs79qCeDXPfYGDzM72
          source_id: s_ZNjq99n8DMYP51AJQv4FQe
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_ZNjq99n8DMYP51AJQv4FQe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王孟（18554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18554&o=json
            external_identifier: CBDB:18554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:04.917Z
            metadata_json: null
        - id: cs_MHqH38UzJBukwTPq8ZsuwR
          claim_id: c_d4A8zs79qCeDXPfYGDzM72
          source_id: s_xHjZH9uaiSs1Y3gZRpHfZV
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_xHjZH9uaiSs1Y3gZRpHfZV
            source_type: api_record
            title: 维基数据：王孟（Q45389725）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389725
            external_identifier: Q45389725
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:04.733Z
            metadata_json: null
        - id: cs_bvy4M5YPKqW8uozQQfRwjJ
          claim_id: c_d4A8zs79qCeDXPfYGDzM72
          source_id: s_u9y8pohGe9K4HE96B2DyNM
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_u9y8pohGe9K4HE96B2DyNM
            source_type: api_record
            title: 维基数据：王沆（Q45389730）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45389730
            external_identifier: Q45389730
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:43.281Z
            metadata_json: null
        - id: cs_85VSzcn9Jqh8TwE8WsvTEA
          claim_id: c_d4A8zs79qCeDXPfYGDzM72
          source_id: s_rAQrh2kETq4NyWviq1sNFL
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_rAQrh2kETq4NyWviq1sNFL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王沆（18555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18555&o=json
            external_identifier: CBDB:18555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:43.454Z
            metadata_json: null
      object_person:
        id: p_NLL1hUn6YKoVjVKSBAAZHa
        status: active
        display_name: 王沆
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孟，宋人物。CBDB 记录其籍贯记录为臨川。中国历代人物传记资料库（CBDB）以人物编号 18554 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王孟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qhr63u6HvGLzGzcHEvaWtZ | 王用之 | accepted |
| children | p_NLL1hUn6YKoVjVKSBAAZHa | 王沆 | accepted |

## 外部来源

- [维基数据：王沆（Q45389730）](https://www.wikidata.org/wiki/Q45389730)
- [维基数据：王孟（Q45389725）](https://www.wikidata.org/wiki/Q45389725)
- [维基数据：王用之（Q45389721）](https://www.wikidata.org/wiki/Q45389721)
- [CBDB 中国历代人物传记资料库：王沆（18555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18555&o=json)
- [CBDB 中国历代人物传记资料库：王孟（18554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18554&o=json)
- [CBDB 中国历代人物传记资料库：王用之（18553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18553&o=json)
