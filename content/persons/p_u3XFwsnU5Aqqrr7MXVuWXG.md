---
schema: wang-person/v1
id: p_u3XFwsnU5Aqqrr7MXVuWXG
status: active
merged_into: null
display_name: 王克賡
cbdb_id: 513577
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_veGxPbeos_k8FNHDlbU-bi
        subject_person_id: p_u3XFwsnU5Aqqrr7MXVuWXG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克賡，史料所见人物。本项目依据《CBDB 中国历代人物传记资料库：王克賡（513577）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6yMEjXYXmAuYdiHl-MPB-D
          claim_id: c_veGxPbeos_k8FNHDlbU-bi
          source_id: s_jRkPAuaTZ6G68ZwhWJiH8M
          stance: supports
          locator: CBDB:513577
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_jRkPAuaTZ6G68ZwhWJiH8M
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王克賡（513577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513577&o=json
            external_identifier: CBDB:513577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:23.183Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_C1gdWwtND7Erc57WeMGKSj
        subject_person_id: p_u3XFwsnU5Aqqrr7MXVuWXG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克賡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rGE2REnXCLr6wU6FnPii1D
          claim_id: c_C1gdWwtND7Erc57WeMGKSj
          source_id: s_jRkPAuaTZ6G68ZwhWJiH8M
          stance: supports
          locator: CBDB:513577
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4bhtUWQB1b3d1qjYbm4MLW
        subject_person_id: p_tebqY22pd9wZzkQFGZaaDe
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_u3XFwsnU5Aqqrr7MXVuWXG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ncGtqZpp8J2Lrj18P4GBvV
          claim_id: c_4bhtUWQB1b3d1qjYbm4MLW
          source_id: s_48LqQaDxdZaKx1Y5S35tbe
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：人名權威資料（中央研究院歷史語言研究所）
          source:
            id: s_48LqQaDxdZaKx1Y5S35tbe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王熙（56873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56873&o=json
            external_identifier: CBDB:56873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:21.685Z
            metadata_json: null
      object_person:
        id: p_tebqY22pd9wZzkQFGZaaDe
        status: active
        display_name: 王熙
        merged_into_person_id: null
    - claim:
        id: c_BN8f_R96QNYS9EqAUKuDEy
        subject_person_id: p_tebqY22pd9wZzkQFGZaaDe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_u3XFwsnU5Aqqrr7MXVuWXG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wwHGp4ZC95zhhWFxmOPlhm
          claim_id: c_BN8f_R96QNYS9EqAUKuDEy
          source_id: s_48LqQaDxdZaKx1Y5S35tbe
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），71：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_48LqQaDxdZaKx1Y5S35tbe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王熙（56873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56873&o=json
            external_identifier: CBDB:56873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:21.685Z
            metadata_json: null
      object_person:
        id: p_tebqY22pd9wZzkQFGZaaDe
        status: active
        display_name: 王熙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王克賡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王克賡，史料所见人物。本项目依据《CBDB 中国历代人物传记资料库：王克賡（513577）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王克賡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tebqY22pd9wZzkQFGZaaDe | 王熙 | accepted |
| parents | p_tebqY22pd9wZzkQFGZaaDe | 王熙 | accepted |

## 外部来源

- [CBDB 中国历代人物传记资料库：王克賡（513577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513577&o=json)
- [CBDB 中国历代人物传记资料库：王熙（56873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56873&o=json)
