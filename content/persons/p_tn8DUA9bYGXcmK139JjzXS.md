---
schema: wang-person/v1
id: p_tn8DUA9bYGXcmK139JjzXS
status: active
merged_into: null
display_name: 王少華
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iY9nibLQp3hxbHqTbH6SNt
        subject_person_id: p_tn8DUA9bYGXcmK139JjzXS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王少華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uLYfYHJfoNZStNzAjz9vfR
          claim_id: c_iY9nibLQp3hxbHqTbH6SNt
          source_id: s_r23iQ39bnk1Sxvw5JQGBHE
          stance: supports
          locator: CBDB:120316
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（120316）
          source: &a1
            id: s_r23iQ39bnk1Sxvw5JQGBHE
            source_type: api_record
            title: 中国历代人物传记资料库：王少華（CBDB 120316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120316&o=json
            external_identifier: CBDB:120316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zEDVAWXMpHAKkqaHY4k8MJ
        subject_person_id: p_tn8DUA9bYGXcmK139JjzXS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王少華，史料所见人物。本项目依据《中国历代人物传记资料库：王少華（CBDB 120316）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kzdtwvT51kcknNcyaIKo7E
          claim_id: c_zEDVAWXMpHAKkqaHY4k8MJ
          source_id: s_r23iQ39bnk1Sxvw5JQGBHE
          stance: supports
          locator: CBDB:120316
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_m77YLszXa2pfZhsQhwEWRp
        subject_person_id: p_pfkAJ6LT6dUqP7JHbgQTA7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tn8DUA9bYGXcmK139JjzXS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AfzmjB8QGLGBuMlUycQI-7
          claim_id: c_m77YLszXa2pfZhsQhwEWRp
          source_id: s_r23iQ39bnk1Sxvw5JQGBHE
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3623, HuWenKai #230：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pfkAJ6LT6dUqP7JHbgQTA7
        status: active
        display_name: 王廷言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_V7t79LmzsPYLaOmHkAqsF3
        subject_person_id: p_tn8DUA9bYGXcmK139JjzXS
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6gTciDBdkDFQABCEfo74CJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VTz6-D7_DV1dlgbFEzODnl
          claim_id: c_V7t79LmzsPYLaOmHkAqsF3
          source_id: s_KNlZZSaRuAGCbl6MYbkKhm
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3623, HuWenKai #230：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KNlZZSaRuAGCbl6MYbkKhm
            source_type: api_record
            title: 中国历代人物传记资料库：陳其松（CBDB 120323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120323&o=json
            external_identifier: CBDB:120323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6gTciDBdkDFQABCEfo74CJ
        status: active
        display_name: 陳其松
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王少華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王少華 | accepted |
| bio.summary | 王少華，史料所见人物。本项目依据《中国历代人物传记资料库：王少華（CBDB 120316）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pfkAJ6LT6dUqP7JHbgQTA7 | 王廷言 | accepted |
| spouses | p_6gTciDBdkDFQABCEfo74CJ | 陳其松 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳其松（CBDB 120323）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120323&o=json)
- [中国历代人物传记资料库：王少華（CBDB 120316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120316&o=json)
