---
schema: wang-person/v1
id: p_oDJrgyjrEYvhubApKjGFeM
status: active
merged_into: null
display_name: 王元績
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vqsw23HjC9HGkmEbJk9Dc4
        subject_person_id: p_oDJrgyjrEYvhubApKjGFeM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元績
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5JFdGwPhACNzuMNtKU4YEo
          claim_id: c_Vqsw23HjC9HGkmEbJk9Dc4
          source_id: s_8XpFFNP318m7rgLRY5W177
          stance: supports
          locator: CBDB:526949
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526949）
          source: &a1
            id: s_8XpFFNP318m7rgLRY5W177
            source_type: api_record
            title: 中国历代人物传记资料库：王元績（CBDB 526949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526949&o=json
            external_identifier: CBDB:526949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8iVyEuDRpBFPVwkroDjLK8
        subject_person_id: p_oDJrgyjrEYvhubApKjGFeM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元績，史料所见人物。本项目依据《中国历代人物传记资料库：王元績（CBDB 526949）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ttoCt1q-Be0Q3ivPgK5iTq
          claim_id: c_8iVyEuDRpBFPVwkroDjLK8
          source_id: s_8XpFFNP318m7rgLRY5W177
          stance: supports
          locator: CBDB:526949
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__bca2nQINf0ay0EH8QdKGm
        subject_person_id: p_oDJrgyjrEYvhubApKjGFeM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9XtatSzbUAUbGKWh823XDp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jol9YUAWRFG_D9fyx6nIL-
          claim_id: c__bca2nQINf0ay0EH8QdKGm
          source_id: s_AR6R7vvgs7N84GQDgobf6U
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13128：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AR6R7vvgs7N84GQDgobf6U
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 69422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69422&o=json
            external_identifier: CBDB:69422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9XtatSzbUAUbGKWh823XDp
        status: active
        display_name: 王瑤
        merged_into_person_id: null
    - claim:
        id: c_XoW7MoNtoJeE5wI-y1eus8
        subject_person_id: p_oDJrgyjrEYvhubApKjGFeM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1Lsa9UN1bD8CJ8v7Xu8mvJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RdcFAO7uLs1NIFRS5ofO7y
          claim_id: c_XoW7MoNtoJeE5wI-y1eus8
          source_id: s_VCNNIS5dw9IjhWsfFiNGWM
          stance: supports
          locator: CBDB：兄弟 王瑤（69422）之父／母 王元績
          quotation: null
          interpretation_note: 由兄弟关系推断：王璥 与 王瑤 为同胞（CBDB 记「兄」），王瑤 之父／母即 王璥 之父／母。
          source:
            id: s_VCNNIS5dw9IjhWsfFiNGWM
            source_type: api_record
            title: 中国历代人物传记资料库：王璥（CBDB 526955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526955&o=json
            external_identifier: CBDB:526955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1Lsa9UN1bD8CJ8v7Xu8mvJ
        status: active
        display_name: 王璥
        merged_into_person_id: null
    - claim:
        id: c_YTeIgzCJzSMubu8JIGzRim
        subject_person_id: p_oDJrgyjrEYvhubApKjGFeM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7LrKUrHHQT3sBDmDUz6ofY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bXWhF3i7n3dQPwQw64VJpS
          claim_id: c_YTeIgzCJzSMubu8JIGzRim
          source_id: s_AIA3bKvzBlTGBN6ZIgbmKC
          stance: supports
          locator: CBDB：兄弟 王瑤（69422）之父／母 王元績
          quotation: null
          interpretation_note: 由兄弟关系推断：王玿 与 王瑤 为同胞（CBDB 记「兄」），王瑤 之父／母即 王玿 之父／母。
          source:
            id: s_AIA3bKvzBlTGBN6ZIgbmKC
            source_type: api_record
            title: 中国历代人物传记资料库：王玿（CBDB 526953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526953&o=json
            external_identifier: CBDB:526953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7LrKUrHHQT3sBDmDUz6ofY
        status: active
        display_name: 王玿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元績

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元績 | accepted |
| bio.summary | 王元績，史料所见人物。本项目依据《中国历代人物传记资料库：王元績（CBDB 526949）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9XtatSzbUAUbGKWh823XDp | 王瑤 | accepted |
| children | p_1Lsa9UN1bD8CJ8v7Xu8mvJ | 王璥 | accepted |
| children | p_7LrKUrHHQT3sBDmDUz6ofY | 王玿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璥（CBDB 526955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526955&o=json)
- [中国历代人物传记资料库：王玿（CBDB 526953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526953&o=json)
- [中国历代人物传记资料库：王瑤（CBDB 69422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69422&o=json)
- [中国历代人物传记资料库：王元績（CBDB 526949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526949&o=json)
