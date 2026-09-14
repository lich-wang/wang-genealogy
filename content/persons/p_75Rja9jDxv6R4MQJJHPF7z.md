---
schema: wang-person/v1
id: p_75Rja9jDxv6R4MQJJHPF7z
status: active
merged_into: null
display_name: 王仲坰
cbdb_id: 155795
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8PZTBu5pHFwPViLu3fxTq2
        subject_person_id: p_75Rja9jDxv6R4MQJJHPF7z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲坰，史料所见人物。本项目依据《中国历代人物传记资料库：王仲坰（CBDB 155795）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_a-RXJqnBAn1CWlDR7e8K9W
          claim_id: c_8PZTBu5pHFwPViLu3fxTq2
          source_id: s_woDZ1HcTPJdbR74tGgfC5V
          stance: supports
          locator: CBDB:155795
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_woDZ1HcTPJdbR74tGgfC5V
            source_type: api_record
            title: 中国历代人物传记资料库：王仲坰（CBDB 155795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155795&o=json
            external_identifier: CBDB:155795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4cQfVZe8tcEQxnd2RVYZL3
        subject_person_id: p_75Rja9jDxv6R4MQJJHPF7z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲坰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bcXfKzc7NmXmFui1yyq1BW
          claim_id: c_4cQfVZe8tcEQxnd2RVYZL3
          source_id: s_woDZ1HcTPJdbR74tGgfC5V
          stance: supports
          locator: CBDB:155795
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kNb5-a_ztoqUK21OqLbXAV
        subject_person_id: p_V1WNcEWFyMKGiDwCARFKJg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_75Rja9jDxv6R4MQJJHPF7z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hWBizdvvgVI3GHF3iHnZAR
          claim_id: c_kNb5-a_ztoqUK21OqLbXAV
          source_id: s_Sxq1JiaFXZXUieBKELWcrM
          stance: supports
          locator: CBDB：兄弟 王仲堪（141326）之父／母 王令仙
          quotation: null
          interpretation_note: 由兄弟关系推断：王仲坰 与 王仲堪 为同胞（CBDB 记「兄」），王仲堪 之父／母即 王仲坰 之父／母。
          source:
            id: s_Sxq1JiaFXZXUieBKELWcrM
            source_type: api_record
            title: 中国历代人物传记资料库：王仲坰（CBDB 155795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155795&o=json
            external_identifier: CBDB:155795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V1WNcEWFyMKGiDwCARFKJg
        status: active
        display_name: 王令仙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OjCy29cTWO9xkwM_QajjiI
        subject_person_id: p_75Rja9jDxv6R4MQJJHPF7z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_R1RF133N5mwNT6YsnkkDcE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nQFZ88kT280ybUkie0SFDg
          claim_id: c_OjCy29cTWO9xkwM_QajjiI
          source_id: s_Sxq1JiaFXZXUieBKELWcrM
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 141326 王仲堪）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Sxq1JiaFXZXUieBKELWcrM
            source_type: api_record
            title: 中国历代人物传记资料库：王仲坰（CBDB 155795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155795&o=json
            external_identifier: CBDB:155795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_R1RF133N5mwNT6YsnkkDcE
        status: active
        display_name: 王仲堪
        merged_into_person_id: null
---

# 王仲坰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲坰，史料所见人物。本项目依据《中国历代人物传记资料库：王仲坰（CBDB 155795）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王仲坰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_V1WNcEWFyMKGiDwCARFKJg | 王令仙 | accepted |
| other | p_R1RF133N5mwNT6YsnkkDcE | 王仲堪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲坰（CBDB 155795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155795&o=json)
