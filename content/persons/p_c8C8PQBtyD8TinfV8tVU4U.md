---
schema: wang-person/v1
id: p_c8C8PQBtyD8TinfV8tVU4U
status: active
merged_into: null
display_name: 王澄
cbdb_id: 186695
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n49WMgn13NAp6A5USJPL1D
        subject_person_id: p_c8C8PQBtyD8TinfV8tVU4U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄（卒于773年），唐人物。CBDB 记录其籍贯记录为河南府，曾任州司馬。中国历代人物传记资料库（CBDB）以人物编号 186695 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_jbemo1Gxo3QgmaJ9rquZnT
          claim_id: c_n49WMgn13NAp6A5USJPL1D
          source_id: s_wjVLxMLRqXwKjCian14tbq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_wjVLxMLRqXwKjCian14tbq
            source_type: api_record
            title: 维基数据：王澄（Q45685584）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685584
            external_identifier: Q45685584
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
        - id: cs_S9bkF95OBk4spn0nXdUOFf
          claim_id: c_n49WMgn13NAp6A5USJPL1D
          source_id: s_HmJsV2rPiCVdpEMRJrZ3CS
          stance: supports
          locator: CBDB:186695
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HmJsV2rPiCVdpEMRJrZ3CS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澄（186695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186695&o=json
            external_identifier: CBDB:186695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:53.735Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2RQhJrFhZfvm1C6YX8iq3V
        subject_person_id: p_c8C8PQBtyD8TinfV8tVU4U
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 773年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0773-01-01
            latest: 0773-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Kysnrcs4L5MydgH8HTwGA2
          claim_id: c_2RQhJrFhZfvm1C6YX8iq3V
          source_id: s_wjVLxMLRqXwKjCian14tbq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_wjVLxMLRqXwKjCian14tbq
            source_type: api_record
            title: 维基数据：王澄（Q45685584）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685584
            external_identifier: Q45685584
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oQGqj5ap6dXupEYJ3N7CxJ
        subject_person_id: p_c8C8PQBtyD8TinfV8tVU4U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8xuitByL8ytX7CKJw5a29S
          claim_id: c_oQGqj5ap6dXupEYJ3N7CxJ
          source_id: s_wjVLxMLRqXwKjCian14tbq
          stance: supports
          locator: Q45685584
          quotation: null
          interpretation_note: null
          source:
            id: s_wjVLxMLRqXwKjCian14tbq
            source_type: api_record
            title: 维基数据：王澄（Q45685584）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685584
            external_identifier: Q45685584
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
        - id: cs_TDs1uLVM2aJsA5yEMWbbD9
          claim_id: c_oQGqj5ap6dXupEYJ3N7CxJ
          source_id: s_HmJsV2rPiCVdpEMRJrZ3CS
          stance: supports
          locator: Q45685584
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ePSiQZRqtHF5MwoEmiyge4
        subject_person_id: p_tbdF719iaM43dCPwE1ecxt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c8C8PQBtyD8TinfV8tVU4U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iAR8PhKX3xfxwuqNdb62AC
          claim_id: c_ePSiQZRqtHF5MwoEmiyge4
          source_id: s_wjVLxMLRqXwKjCian14tbq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_wjVLxMLRqXwKjCian14tbq
            source_type: api_record
            title: 维基数据：王澄（Q45685584）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685584
            external_identifier: Q45685584
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
        - id: cs_3Fx22fFVGTRr88tKJL2zFn
          claim_id: c_ePSiQZRqtHF5MwoEmiyge4
          source_id: s_FgpvqCoh8L8fGQoXHABRtp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FgpvqCoh8L8fGQoXHABRtp
            source_type: api_record
            title: 维基数据：王敬同（Q45685614）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685614
            external_identifier: Q45685614
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:04.029Z
            metadata_json: null
        - id: cs_4UANigwrGFEeGdU1oDupBQ
          claim_id: c_ePSiQZRqtHF5MwoEmiyge4
          source_id: s_zpxw217cCUckzoPxDKmgCL
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_zpxw217cCUckzoPxDKmgCL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王敬同（186696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186696&o=json
            external_identifier: CBDB:186696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:04.183Z
            metadata_json: null
      object_person:
        id: p_tbdF719iaM43dCPwE1ecxt
        status: active
        display_name: 王敬同
        merged_into_person_id: null
  children:
    - claim:
        id: c_Wf8xLWgFANB7PCWuCHnwmf
        subject_person_id: p_c8C8PQBtyD8TinfV8tVU4U
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ThZ1fLjfnyC98szbw3tnMJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7nrZiUmTqwwnsrs7dbK7GB
          claim_id: c_Wf8xLWgFANB7PCWuCHnwmf
          source_id: s_wjVLxMLRqXwKjCian14tbq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_wjVLxMLRqXwKjCian14tbq
            source_type: api_record
            title: 维基数据：王澄（Q45685584）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685584
            external_identifier: Q45685584
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
        - id: cs_mBKVm2gQP9YH97mK36jZsM
          claim_id: c_Wf8xLWgFANB7PCWuCHnwmf
          source_id: s_HyZfx6k7iCsH8eAv7nQ9vx
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HyZfx6k7iCsH8eAv7nQ9vx
            source_type: api_record
            title: 维基数据：王锷（Q15930590）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15930590
            external_identifier: Q15930590
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:39.483Z
            metadata_json: null
      object_person:
        id: p_ThZ1fLjfnyC98szbw3tnMJ
        status: active
        display_name: 王锷
        merged_into_person_id: null
    - claim:
        id: c_H3CKCf9jmCUJzmtGPEKehL
        subject_person_id: p_c8C8PQBtyD8TinfV8tVU4U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FkG1TtDRuH3sDgFUz4V9Z7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ws9GzGP3equdVnVCQd4wup
          claim_id: c_H3CKCf9jmCUJzmtGPEKehL
          source_id: s_wjVLxMLRqXwKjCian14tbq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_JUL1YwHkFxbpiuRSjV2v39
          claim_id: c_H3CKCf9jmCUJzmtGPEKehL
          source_id: s_PTsQuwWX6iChr4rf66ZztN
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_PTsQuwWX6iChr4rf66ZztN
            source_type: api_record
            title: 维基数据：王氏（Q65803780）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65803780
            external_identifier: Q65803780
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:04.029Z
            metadata_json: null
        - id: cs_YQucbG3n9hiwnLeHVv8cba
          claim_id: c_H3CKCf9jmCUJzmtGPEKehL
          source_id: s_HmJsV2rPiCVdpEMRJrZ3CS
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source: *a1
      object_person:
        id: p_FkG1TtDRuH3sDgFUz4V9Z7
        status: active
        display_name: 王氏
        merged_into_person_id: null
    - claim:
        id: c_1sVdvNTZ88wj9oMMcnFfE4
        subject_person_id: p_c8C8PQBtyD8TinfV8tVU4U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cFrrQD9w9e7DqR4q2v5s6z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XHuKsPK3WYCE7aJXJq6spz
          claim_id: c_1sVdvNTZ88wj9oMMcnFfE4
          source_id: s_wjVLxMLRqXwKjCian14tbq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_xRCghxNFKiEhVW8qjPjzJW
          claim_id: c_1sVdvNTZ88wj9oMMcnFfE4
          source_id: s_ELbYmvnAeXE2jBrVG7SHyn
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ELbYmvnAeXE2jBrVG7SHyn
            source_type: api_record
            title: 维基数据：王氏（Q65803842）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65803842
            external_identifier: Q65803842
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:04.029Z
            metadata_json: null
        - id: cs_DMrksE3HJqgNzomT8p88VJ
          claim_id: c_1sVdvNTZ88wj9oMMcnFfE4
          source_id: s_HmJsV2rPiCVdpEMRJrZ3CS
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source: *a1
      object_person:
        id: p_cFrrQD9w9e7DqR4q2v5s6z
        status: active
        display_name: 王氏
        merged_into_person_id: null
    - claim:
        id: c_G8nJ2KXx6BW2muG95gGDkk
        subject_person_id: p_c8C8PQBtyD8TinfV8tVU4U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1N6xv9M4BsN9VGrAgKCpoh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aYq5ang9w8HLtQTsx2PLh6
          claim_id: c_G8nJ2KXx6BW2muG95gGDkk
          source_id: s_YAFebhncBhZ8NameaQ8RjH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_YAFebhncBhZ8NameaQ8RjH
            source_type: api_record
            title: 维基数据：王某（Q45587690）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45587690
            external_identifier: Q45587690
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:00.338Z
            metadata_json: null
        - id: cs_zgNEy9FvXJCtavJ8obD9kL
          claim_id: c_G8nJ2KXx6BW2muG95gGDkk
          source_id: s_wjVLxMLRqXwKjCian14tbq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_wjVLxMLRqXwKjCian14tbq
            source_type: api_record
            title: 维基数据：王澄（Q45685584）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685584
            external_identifier: Q45685584
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
      object_person:
        id: p_1N6xv9M4BsN9VGrAgKCpoh
        status: active
        display_name: 王某
        merged_into_person_id: null
    - claim:
        id: c_LaM1voPhnKCKLtIYa-0UBG
        subject_person_id: p_c8C8PQBtyD8TinfV8tVU4U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9QM78GueqiL1n7BJtefGvD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vuv_ZSHGyalGy-lyXyL2Nv
          claim_id: c_LaM1voPhnKCKLtIYa-0UBG
          source_id: s_LdSZNBpapSqUq4XVEG5rri
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LdSZNBpapSqUq4XVEG5rri
            source_type: api_record
            title: 中国历代人物传记资料库：王鍔（CBDB 186698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186698&o=json
            external_identifier: CBDB:186698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.283Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9QM78GueqiL1n7BJtefGvD
        status: active
        display_name: 王鍔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王澄（卒于773年），唐人物。CBDB 记录其籍贯记录为河南府，曾任州司馬。中国历代人物传记资料库（CBDB）以人物编号 186695 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 773年 | accepted |
| name.primary | 王澄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tbdF719iaM43dCPwE1ecxt | 王敬同 | accepted |
| children | p_ThZ1fLjfnyC98szbw3tnMJ | 王锷 | accepted |
| children | p_FkG1TtDRuH3sDgFUz4V9Z7 | 王氏 | accepted |
| children | p_cFrrQD9w9e7DqR4q2v5s6z | 王氏 | accepted |
| children | p_1N6xv9M4BsN9VGrAgKCpoh | 王某 | accepted |
| children | p_9QM78GueqiL1n7BJtefGvD | 王鍔 | accepted |

## 外部来源

- [维基数据：王澄（Q45685584）](https://www.wikidata.org/wiki/Q45685584)
- [维基数据：王锷（Q15930590）](https://www.wikidata.org/wiki/Q15930590)
- [维基数据：王敬同（Q45685614）](https://www.wikidata.org/wiki/Q45685614)
- [维基数据：王某（Q45587690）](https://www.wikidata.org/wiki/Q45587690)
- [维基数据：王氏（Q65803780）](https://www.wikidata.org/wiki/Q65803780)
- [维基数据：王氏（Q65803842）](https://www.wikidata.org/wiki/Q65803842)
- [中国历代人物传记资料库：王鍔（CBDB 186698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186698&o=json)
- [CBDB 中国历代人物传记资料库：王澄（186695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186695&o=json)
- [CBDB 中国历代人物传记资料库：王敬同（186696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186696&o=json)
