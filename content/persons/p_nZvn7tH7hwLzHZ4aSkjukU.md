---
schema: wang-person/v1
id: p_nZvn7tH7hwLzHZ4aSkjukU
status: active
merged_into: null
display_name: 王充榮
cbdb_id: 238213
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YJRBHBJUU5piTLBRG4JCiC
        subject_person_id: p_nZvn7tH7hwLzHZ4aSkjukU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王充榮，史料所见人物。本项目依据《中国历代人物传记资料库：王充榮（CBDB 238213）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_99SigLENCAiaLxDqs0mC7z
          claim_id: c_YJRBHBJUU5piTLBRG4JCiC
          source_id: s_XQnmq5EdgFNnnHw1p4a2xS
          stance: supports
          locator: CBDB:238213
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_XQnmq5EdgFNnnHw1p4a2xS
            source_type: api_record
            title: 中国历代人物传记资料库：王充榮（CBDB 238213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238213&o=json
            external_identifier: CBDB:238213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LoxyWtwuWxqPQtCESe6TRU
        subject_person_id: p_nZvn7tH7hwLzHZ4aSkjukU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王充榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UeYepUkLWNsaW7eHnQjY1B
          claim_id: c_LoxyWtwuWxqPQtCESe6TRU
          source_id: s_XQnmq5EdgFNnnHw1p4a2xS
          stance: supports
          locator: CBDB:238213
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_uz8_RIU-zWviff7nQMIRCf
        subject_person_id: p_nZvn7tH7hwLzHZ4aSkjukU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UigxC39qu348GRPzwB2VV6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NESmuYePDZ-MeudOh5OwBV
          claim_id: c_uz8_RIU-zWviff7nQMIRCf
          source_id: s_ePBk9yjtryp6Aok3sJ2P9k
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第二十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ePBk9yjtryp6Aok3sJ2P9k
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 126681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126681&o=json
            external_identifier: CBDB:126681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.118Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UigxC39qu348GRPzwB2VV6
        status: active
        display_name: 王理
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王充榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王充榮，史料所见人物。本项目依据《中国历代人物传记资料库：王充榮（CBDB 238213）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王充榮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UigxC39qu348GRPzwB2VV6 | 王理 | accepted |

## 外部来源

- [中国历代人物传记资料库：王充榮（CBDB 238213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238213&o=json)
- [中国历代人物传记资料库：王理（CBDB 126681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126681&o=json)
