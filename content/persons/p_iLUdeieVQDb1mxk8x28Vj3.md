---
schema: wang-person/v1
id: p_iLUdeieVQDb1mxk8x28Vj3
status: active
merged_into: null
display_name: 王正路
cbdb_id: 20886
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2CKEd48A23GvPEKceRMUL1
        subject_person_id: p_iLUdeieVQDb1mxk8x28Vj3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正路，宋人物。籍贯臨城，曾任龍圖閣待制、太常寺太祝、比部郎中。（中国历代人物传记资料库 CBDB 20886）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Te4FFtE4uKzkRQtam_3aIC
          claim_id: c_2CKEd48A23GvPEKceRMUL1
          source_id: s_CMZcK641eTNgmjPg4N5kVw
          stance: supports
          locator: CBDB:20886
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CMZcK641eTNgmjPg4N5kVw
            source_type: api_record
            title: 中国历代人物传记资料库：王正路（CBDB 20886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20886&o=json
            external_identifier: CBDB:20886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UGXKMxXdVB1yNbyEdR4PM6
        subject_person_id: p_iLUdeieVQDb1mxk8x28Vj3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正路
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6RipABVFCa5pMSN4MbMvrN
          claim_id: c_UGXKMxXdVB1yNbyEdR4PM6
          source_id: s_CMZcK641eTNgmjPg4N5kVw
          stance: supports
          locator: CBDB:20886
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_10oLT2iOOghOiQFn7H_76E
        subject_person_id: p_9epbfLViLxzdJRKQE2V4dh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iLUdeieVQDb1mxk8x28Vj3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4GBC5nNbZd9wW3KE7E4oHX
          claim_id: c_10oLT2iOOghOiQFn7H_76E
          source_id: s_MRaTnYLLP1EZjec7BF8yEM
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1338;1339：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MRaTnYLLP1EZjec7BF8yEM
            source_type: api_record
            title: 中国历代人物传记资料库：王鬷（CBDB 1903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1903&o=json
            external_identifier: CBDB:1903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_9epbfLViLxzdJRKQE2V4dh
        status: active
        display_name: 王鬷
        merged_into_person_id: null
  children:
    - claim:
        id: c_CcE0jREa-am6mY15yCg462
        subject_person_id: p_iLUdeieVQDb1mxk8x28Vj3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5hHZn4JdRNtDFps6R7FtjP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_alD8etKLWTaePZhT5MAVqq
          claim_id: c_CcE0jREa-am6mY15yCg462
          source_id: s_7u8LEwRZVt8iwM41G9ihj7
          stance: supports
          locator: CBDB 双向互证（父 王正路 ⇄ 子 王遹）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_7u8LEwRZVt8iwM41G9ihj7
            source_type: api_record
            title: 中国历代人物传记资料库：王遹（CBDB 22215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22215&o=json
            external_identifier: CBDB:22215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.851Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5hHZn4JdRNtDFps6R7FtjP
        status: active
        display_name: 王遹
        merged_into_person_id: null
    - claim:
        id: c_uqHRr1587NZijSsJ4DuQU1
        subject_person_id: p_iLUdeieVQDb1mxk8x28Vj3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5LNrAt3UFBAa5AMw5eaSEJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oi3psiXaGJ99rcn6u81QLi
          claim_id: c_uqHRr1587NZijSsJ4DuQU1
          source_id: s_ueB9ZHJQCPPPwYRoVNUksZ
          stance: supports
          locator: CBDB 双向互证（父 王正路 ⇄ 子 王蘧）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_ueB9ZHJQCPPPwYRoVNUksZ
            source_type: api_record
            title: 中国历代人物传记资料库：王蘧（CBDB 23564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23564&o=json
            external_identifier: CBDB:23564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5LNrAt3UFBAa5AMw5eaSEJ
        status: active
        display_name: 王蘧
        merged_into_person_id: null
    - claim:
        id: c_PnVKLZzQf_ZA3jP20SDFvT
        subject_person_id: p_iLUdeieVQDb1mxk8x28Vj3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tNxDF9RNAwjuxwXQbHswdX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H-h0fN1l2wCpAflqVD9U5F
          claim_id: c_PnVKLZzQf_ZA3jP20SDFvT
          source_id: s_RupQmYq6XJuF2vexT3Cb38
          stance: supports
          locator: CBDB 双向互证（父 王正路 ⇄ 子 王適）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_RupQmYq6XJuF2vexT3Cb38
            source_type: api_record
            title: 中国历代人物传记资料库：王適（CBDB 22214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22214&o=json
            external_identifier: CBDB:22214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.849Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tNxDF9RNAwjuxwXQbHswdX
        status: active
        display_name: 王適
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王正路

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王正路，宋人物。籍贯臨城，曾任龍圖閣待制、太常寺太祝、比部郎中。（中国历代人物传记资料库 CBDB 20886） | accepted |
| name.primary | 王正路 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9epbfLViLxzdJRKQE2V4dh | 王鬷 | accepted |
| children | p_5hHZn4JdRNtDFps6R7FtjP | 王遹 | accepted |
| children | p_5LNrAt3UFBAa5AMw5eaSEJ | 王蘧 | accepted |
| children | p_tNxDF9RNAwjuxwXQbHswdX | 王適 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蘧（CBDB 23564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23564&o=json)
- [中国历代人物传记资料库：王適（CBDB 22214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22214&o=json)
- [中国历代人物传记资料库：王遹（CBDB 22215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22215&o=json)
- [中国历代人物传记资料库：王正路（CBDB 20886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20886&o=json)
- [中国历代人物传记资料库：王鬷（CBDB 1903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1903&o=json)
