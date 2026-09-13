---
schema: wang-person/v1
id: p_jJ8CBW1eQx8HAeDCP6Kxoi
status: active
merged_into: null
display_name: 王勉學
cbdb_id: 214954
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D5EBdusJLKjnwfqMt9M8DD
        subject_person_id: p_jJ8CBW1eQx8HAeDCP6Kxoi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉學，史料所见人物。本项目依据《中国历代人物传记资料库：王勉學（CBDB 214954）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Awev73JsO-eubux3fJHfsu
          claim_id: c_D5EBdusJLKjnwfqMt9M8DD
          source_id: s_9h4rgB3biLSeN3h49QvQgX
          stance: supports
          locator: CBDB:214954
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_9h4rgB3biLSeN3h49QvQgX
            source_type: api_record
            title: 中国历代人物传记资料库：王勉學（CBDB 214954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214954&o=json
            external_identifier: CBDB:214954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9PmjWSdqTU2VLkGQfr2DgP
        subject_person_id: p_jJ8CBW1eQx8HAeDCP6Kxoi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ncdgQ9VU6JrPMLdLeF8msU
          claim_id: c_9PmjWSdqTU2VLkGQfr2DgP
          source_id: s_9h4rgB3biLSeN3h49QvQgX
          stance: supports
          locator: CBDB:214954
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_MyDZ3V1xP_VAN0M19Wsvn_
        subject_person_id: p_jJ8CBW1eQx8HAeDCP6Kxoi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hCaEhKRsvc7eH6eDHWHssK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Si1fVG34fou-v5n51h97rE
          claim_id: c_MyDZ3V1xP_VAN0M19Wsvn_
          source_id: s_9h4rgB3biLSeN3h49QvQgX
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百七十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9h4rgB3biLSeN3h49QvQgX
            source_type: api_record
            title: 中国历代人物传记资料库：王勉學（CBDB 214954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214954&o=json
            external_identifier: CBDB:214954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_hCaEhKRsvc7eH6eDHWHssK
        status: active
        display_name: 王國祚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王勉學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王勉學，史料所见人物。本项目依据《中国历代人物传记资料库：王勉學（CBDB 214954）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王勉學 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hCaEhKRsvc7eH6eDHWHssK | 王國祚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勉學（CBDB 214954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214954&o=json)
