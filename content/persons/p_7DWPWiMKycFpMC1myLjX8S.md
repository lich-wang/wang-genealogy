---
schema: wang-person/v1
id: p_7DWPWiMKycFpMC1myLjX8S
status: active
merged_into: null
display_name: 王琰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GZETPePExmFjMVQNAbauT5
        subject_person_id: p_7DWPWiMKycFpMC1myLjX8S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QiSNfHdLhgAyaPfgb6V72e
          claim_id: c_GZETPePExmFjMVQNAbauT5
          source_id: s_KJFMtM6YShk352NoLv4A9t
          stance: supports
          locator: CBDB:555477
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555477）
          source: &a1
            id: s_KJFMtM6YShk352NoLv4A9t
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 555477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555477&o=json
            external_identifier: CBDB:555477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.644Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yP3rf11ARrqNya3wQsAXL8
        subject_person_id: p_7DWPWiMKycFpMC1myLjX8S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琰，史料所见人物。本项目依据《中国历代人物传记资料库：王琰（CBDB 555477）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TQ27on7cjBRwJGJcHWBeT5
          claim_id: c_yP3rf11ARrqNya3wQsAXL8
          source_id: s_KJFMtM6YShk352NoLv4A9t
          stance: supports
          locator: CBDB:555477
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_P3R0Pe5L9gVPWWZ6c1dwy4
        subject_person_id: p_v2aXxqS4dS7Mb5HadzZaWo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7DWPWiMKycFpMC1myLjX8S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tvuZ8pyCCejv5nHinX8bxC
          claim_id: c_P3R0Pe5L9gVPWWZ6c1dwy4
          source_id: s_KJFMtM6YShk352NoLv4A9t
          stance: supports
          locator: 麗水宋元墓誌集録，59：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_v2aXxqS4dS7Mb5HadzZaWo
        status: active
        display_name: 王騊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琰 | accepted |
| bio.summary | 王琰，史料所见人物。本项目依据《中国历代人物传记资料库：王琰（CBDB 555477）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_v2aXxqS4dS7Mb5HadzZaWo | 王騊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琰（CBDB 555477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555477&o=json)
