---
schema: wang-person/v1
id: p_AXamSgwf97zhzK183EkDQr
status: active
merged_into: null
display_name: 王國文
cbdb_id: 191567
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CaSJpRYEwFqPb5rrsRqFSU
        subject_person_id: p_AXamSgwf97zhzK183EkDQr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國文（卒于834年），史料所见人物。本项目依据《中国历代人物传记资料库：王國文（CBDB 191567）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_cD5fmo80fvRbYuFHEvnOj7
          claim_id: c_CaSJpRYEwFqPb5rrsRqFSU
          source_id: s_VC3qjP64CSPChsLoTgKJau
          stance: supports
          locator: CBDB:191567
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_VC3qjP64CSPChsLoTgKJau
            source_type: api_record
            title: 中国历代人物传记资料库：王國文（CBDB 191567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191567&o=json
            external_identifier: CBDB:191567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Ro3vXtsnMwe1G3QvJryuPC
        subject_person_id: p_AXamSgwf97zhzK183EkDQr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 834年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0834-01-01
            latest: 0834-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E9k4gQzSEeGjBgsB6vHmnG
          claim_id: c_Ro3vXtsnMwe1G3QvJryuPC
          source_id: s_VC3qjP64CSPChsLoTgKJau
          stance: supports
          locator: CBDB:191567
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 834
          source:
            id: s_VC3qjP64CSPChsLoTgKJau
            source_type: api_record
            title: 中国历代人物传记资料库：王國文（CBDB 191567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191567&o=json
            external_identifier: CBDB:191567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RHZoDqeTtwMBHCbL51WgMD
        subject_person_id: p_AXamSgwf97zhzK183EkDQr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_P1rJfSxV9zSZA1zakuVUJs
          claim_id: c_RHZoDqeTtwMBHCbL51WgMD
          source_id: s_VC3qjP64CSPChsLoTgKJau
          stance: supports
          locator: CBDB:191567
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 834
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NWnFSEGxA_fIAXMuaoHgNF
        subject_person_id: p_GYZYeCEFAABsTQwFy7Lrmg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AXamSgwf97zhzK183EkDQr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jrzD5VbLbZ-rat-DuESACr
          claim_id: c_NWnFSEGxA_fIAXMuaoHgNF
          source_id: s_VC3qjP64CSPChsLoTgKJau
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VC3qjP64CSPChsLoTgKJau
            source_type: api_record
            title: 中国历代人物传记资料库：王國文（CBDB 191567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191567&o=json
            external_identifier: CBDB:191567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_GYZYeCEFAABsTQwFy7Lrmg
        status: active
        display_name: 王希遷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王國文（卒于834年），史料所见人物。本项目依据《中国历代人物传记资料库：王國文（CBDB 191567）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 834年 | accepted |
| name.primary | 王國文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GYZYeCEFAABsTQwFy7Lrmg | 王希遷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國文（CBDB 191567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191567&o=json)
