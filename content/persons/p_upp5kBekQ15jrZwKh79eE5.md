---
schema: wang-person/v1
id: p_upp5kBekQ15jrZwKh79eE5
status: active
merged_into: null
display_name: 王如瓚
cbdb_id: 210790
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5RDGoozYACk9m8K4LV811h
        subject_person_id: p_upp5kBekQ15jrZwKh79eE5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如瓚，史料所见人物。本项目依据《中国历代人物传记资料库：王如瓚（CBDB 210790）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_l77AFD5DGBIsOjIJgtwfEL
          claim_id: c_5RDGoozYACk9m8K4LV811h
          source_id: s_bM6UrKeZhSuBoe5GUAz6iz
          stance: supports
          locator: CBDB:210790
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_bM6UrKeZhSuBoe5GUAz6iz
            source_type: api_record
            title: 中国历代人物传记资料库：王如瓚（CBDB 210790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210790&o=json
            external_identifier: CBDB:210790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YvwReqbt9tc6a2mTC1Khf3
        subject_person_id: p_upp5kBekQ15jrZwKh79eE5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9ZYLPGrKq13b6Rj8MAeef4
          claim_id: c_YvwReqbt9tc6a2mTC1Khf3
          source_id: s_bM6UrKeZhSuBoe5GUAz6iz
          stance: supports
          locator: CBDB:210790
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_y1a9i_qIc_66nkjp_M7Hyr
        subject_person_id: p_upp5kBekQ15jrZwKh79eE5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DDFA2NLfrQKM4TnFh33EoF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XiSMyrMCkl8ig2vAmPA6B6
          claim_id: c_y1a9i_qIc_66nkjp_M7Hyr
          source_id: s_bM6UrKeZhSuBoe5GUAz6iz
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bM6UrKeZhSuBoe5GUAz6iz
            source_type: api_record
            title: 中国历代人物传记资料库：王如瓚（CBDB 210790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210790&o=json
            external_identifier: CBDB:210790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_DDFA2NLfrQKM4TnFh33EoF
        status: active
        display_name: 王一乾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王如瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王如瓚，史料所见人物。本项目依据《中国历代人物传记资料库：王如瓚（CBDB 210790）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王如瓚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DDFA2NLfrQKM4TnFh33EoF | 王一乾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王如瓚（CBDB 210790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210790&o=json)
