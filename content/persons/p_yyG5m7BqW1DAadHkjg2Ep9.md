---
schema: wang-person/v1
id: p_yyG5m7BqW1DAadHkjg2Ep9
status: active
merged_into: null
display_name: 王擇從
cbdb_id: 158493
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7Zid5M2Dox3LdCninaxHyi
        subject_person_id: p_yyG5m7BqW1DAadHkjg2Ep9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王擇從，唐人物。籍贯杜陵，曾任府士曹參軍。（中国历代人物传记资料库 CBDB 158493）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_6Vc4f7pRfDsbcI-TwQ7uFU
          claim_id: c_7Zid5M2Dox3LdCninaxHyi
          source_id: s_6Kg8shV8f3EF4PJChqk5RW
          stance: supports
          locator: CBDB:158493
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6Kg8shV8f3EF4PJChqk5RW
            source_type: api_record
            title: 中国历代人物传记资料库：王擇從（CBDB 158493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158493&o=json
            external_identifier: CBDB:158493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SLRkHEo7D3Dct64NMVmr7F
        subject_person_id: p_yyG5m7BqW1DAadHkjg2Ep9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王擇從
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CujiVDMQizar5rtZjfANic
          claim_id: c_SLRkHEo7D3Dct64NMVmr7F
          source_id: s_6Kg8shV8f3EF4PJChqk5RW
          stance: supports
          locator: CBDB:158493
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JpofRAO9DOLfDmUuIaEfsd
        subject_person_id: p_WG4LcJdg2iBTqvpZQpDp9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yyG5m7BqW1DAadHkjg2Ep9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pn3xjT6f-4aLpSjSpIS94g
          claim_id: c_JpofRAO9DOLfDmUuIaEfsd
          source_id: s_P9wQqFz1g9NPy4Aq7kAejE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P9wQqFz1g9NPy4Aq7kAejE
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 175940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175940&o=json
            external_identifier: CBDB:175940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.210Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WG4LcJdg2iBTqvpZQpDp9o
        status: active
        display_name: 王慶
        merged_into_person_id: null
  children:
    - claim:
        id: c_ZtSU0yYt-yxHPqwFxestYf
        subject_person_id: p_yyG5m7BqW1DAadHkjg2Ep9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9GLd9Perr5iNSkDQLQhB21
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j2JYjLRdE-TlCUFC164fJP
          claim_id: c_ZtSU0yYt-yxHPqwFxestYf
          source_id: s_AfinoeDHqwKerF7A5FERYE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AfinoeDHqwKerF7A5FERYE
            source_type: api_record
            title: 中国历代人物传记资料库：王察（CBDB 175952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175952&o=json
            external_identifier: CBDB:175952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.215Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9GLd9Perr5iNSkDQLQhB21
        status: active
        display_name: 王察
        merged_into_person_id: null
    - claim:
        id: c_DjzCCu72FQvZG9NxvXzXQm
        subject_person_id: p_yyG5m7BqW1DAadHkjg2Ep9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NtjqGjuyLxfaZuGR1PCVjh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IcZ9caGnldqK2ZNq4eke7c
          claim_id: c_DjzCCu72FQvZG9NxvXzXQm
          source_id: s_9yFcVPeLWjYawJn54TYyAm
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9yFcVPeLWjYawJn54TYyAm
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 158494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158494&o=json
            external_identifier: CBDB:158494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NtjqGjuyLxfaZuGR1PCVjh
        status: active
        display_name: 王宣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王擇從

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王擇從，唐人物。籍贯杜陵，曾任府士曹參軍。（中国历代人物传记资料库 CBDB 158493） | accepted |
| name.primary | 王擇從 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WG4LcJdg2iBTqvpZQpDp9o | 王慶 | accepted |
| children | p_9GLd9Perr5iNSkDQLQhB21 | 王察 | accepted |
| children | p_NtjqGjuyLxfaZuGR1PCVjh | 王宣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王察（CBDB 175952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175952&o=json)
- [中国历代人物传记资料库：王慶（CBDB 175940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175940&o=json)
- [中国历代人物传记资料库：王宣（CBDB 158494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158494&o=json)
- [中国历代人物传记资料库：王擇從（CBDB 158493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158493&o=json)
