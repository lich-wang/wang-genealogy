---
schema: wang-person/v1
id: p_CuRhibkL6B7uRpyoNUdWAQ
status: active
merged_into: null
display_name: 王婉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fdBkTeJ57taP81QJwMnrfr
        subject_person_id: p_CuRhibkL6B7uRpyoNUdWAQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王婉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AaKdRxeenRjT8WNQjk6izi
          claim_id: c_fdBkTeJ57taP81QJwMnrfr
          source_id: s_NPrvVgDz9QjuqRq2Pd1kqU
          stance: supports
          locator: CBDB:139607
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139607）
          source: &a1
            id: s_NPrvVgDz9QjuqRq2Pd1kqU
            source_type: api_record
            title: 中国历代人物传记资料库：王婉（CBDB 139607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139607&o=json
            external_identifier: CBDB:139607
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.428Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HzJ3wLQzsKDgH2ioHZ52o6
        subject_person_id: p_CuRhibkL6B7uRpyoNUdWAQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 591年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5vUbQ1tZD6uWDVCMAhHwPE
          claim_id: c_HzJ3wLQzsKDgH2ioHZ52o6
          source_id: s_NPrvVgDz9QjuqRq2Pd1kqU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jFS5zUrFkQTWQf9D7fegUY
        subject_person_id: p_CuRhibkL6B7uRpyoNUdWAQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 670年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HQrkYjyxxE61AAYBvQaHbK
          claim_id: c_jFS5zUrFkQTWQf9D7fegUY
          source_id: s_NPrvVgDz9QjuqRq2Pd1kqU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_adA8N9Nopd1VZY8z1UeJND
        subject_person_id: p_CuRhibkL6B7uRpyoNUdWAQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王婉（591年—670年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 139607）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h2CltJlSUS4G4_UIigb3Fd
          claim_id: c_adA8N9Nopd1VZY8z1UeJND
          source_id: s_NPrvVgDz9QjuqRq2Pd1kqU
          stance: supports
          locator: CBDB:139607
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_PulWSfFhDaNBAnXcXbcpbs
        subject_person_id: p_CuRhibkL6B7uRpyoNUdWAQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_rQwCFFw1hJzTB8rstWNnzG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6oVeoA8TYpLq6UFvgkDuKt
          claim_id: c_PulWSfFhDaNBAnXcXbcpbs
          source_id: s_xM2VJbaxG1fRrIwgflH4MH
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 27：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xM2VJbaxG1fRrIwgflH4MH
            source_type: api_record
            title: 中国历代人物传记资料库：李府君(王婉夫)（CBDB 148509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148509&o=json
            external_identifier: CBDB:148509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rQwCFFw1hJzTB8rstWNnzG
        status: active
        display_name: 李府君
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王婉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王婉 | accepted |
| birth.date | 591年 | accepted |
| death.date | 670年 | accepted |
| bio.summary | 王婉（591年—670年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 139607） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_rQwCFFw1hJzTB8rstWNnzG | 李府君 | accepted |

## 外部来源

- [中国历代人物传记资料库：李府君(王婉夫)（CBDB 148509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148509&o=json)
- [中国历代人物传记资料库：王婉（CBDB 139607）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139607&o=json)
