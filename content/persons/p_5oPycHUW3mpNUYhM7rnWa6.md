---
schema: wang-person/v1
id: p_5oPycHUW3mpNUYhM7rnWa6
status: active
merged_into: null
display_name: 王伯慶
cbdb_id: 137717
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1mhJ51vTNBh1x8yhKZR5jb
        subject_person_id: p_5oPycHUW3mpNUYhM7rnWa6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯慶，史料所见人物。本项目依据《中国历代人物传记资料库：王伯慶（CBDB 137717）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_nGNaybUaRgBfHp0v82MSko
          claim_id: c_1mhJ51vTNBh1x8yhKZR5jb
          source_id: s_YB5YacsWW1KSsY9LBY8sp9
          stance: supports
          locator: CBDB:137717
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_YB5YacsWW1KSsY9LBY8sp9
            source_type: api_record
            title: 中国历代人物传记资料库：王伯慶（CBDB 137717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137717&o=json
            external_identifier: CBDB:137717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RFf8fRc65pz9PFZZXG4zhp
        subject_person_id: p_5oPycHUW3mpNUYhM7rnWa6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QEiBne2cZqCZzLuWNcfmFZ
          claim_id: c_RFf8fRc65pz9PFZZXG4zhp
          source_id: s_YB5YacsWW1KSsY9LBY8sp9
          stance: supports
          locator: CBDB:137717
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_4WnN8z2RGfoTRzHiPm1Uiy
        subject_person_id: p_5oPycHUW3mpNUYhM7rnWa6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pPxxCTs7pEHku8hoGnoeUy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Iq1ga8sHO9PB0E0CNHmvD
          claim_id: c_4WnN8z2RGfoTRzHiPm1Uiy
          source_id: s_R6tRGPoV3UAVPW52WwNCeZ
          stance: supports
          locator: 寶祐登科錄：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_R6tRGPoV3UAVPW52WwNCeZ
            source_type: api_record
            title: 中国历代人物传记资料库：王龍應（CBDB 38435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38435&o=json
            external_identifier: CBDB:38435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pPxxCTs7pEHku8hoGnoeUy
        status: active
        display_name: 王龍應
        merged_into_person_id: null
    - claim:
        id: c_f4IssrwIoG-iZ8ZkYcUJ28
        subject_person_id: p_5oPycHUW3mpNUYhM7rnWa6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tBCH7j3dLnxMnYFDQ9ShZT
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fhboMf-EdQ-r3MP8nY56rw
          claim_id: c_f4IssrwIoG-iZ8ZkYcUJ28
          source_id: s_tjVEFhKvPL6w4Xsy9JKa7L
          stance: supports
          locator: 寶祐登科錄：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tjVEFhKvPL6w4Xsy9JKa7L
            source_type: api_record
            title: 中国历代人物传记资料库：王以寧（CBDB 136277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136277&o=json
            external_identifier: CBDB:136277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.343Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tBCH7j3dLnxMnYFDQ9ShZT
        status: active
        display_name: 王以寧
        merged_into_person_id: null
  other: []
---

# 王伯慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伯慶，史料所见人物。本项目依据《中国历代人物传记资料库：王伯慶（CBDB 137717）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王伯慶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_pPxxCTs7pEHku8hoGnoeUy | 王龍應 | accepted |
| descendants | p_tBCH7j3dLnxMnYFDQ9ShZT | 王以寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯慶（CBDB 137717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137717&o=json)
- [中国历代人物传记资料库：王龍應（CBDB 38435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38435&o=json)
- [中国历代人物传记资料库：王以寧（CBDB 136277）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136277&o=json)
