---
schema: wang-person/v1
id: p_6KbJs3N5Cvfq1CqSLe4C49
status: active
merged_into: null
display_name: 朱斗兒
revision: 1
cbdb_id: 122406
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mBfuIv416HRNfYGE9yVynl
        subject_person_id: p_6KbJs3N5Cvfq1CqSLe4C49
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱斗兒，史料所见人物。本项目依据《中国历代人物传记资料库：朱斗兒（CBDB 122406）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JuKDhSOeyRj1q674eaCjs0
          claim_id: c_mBfuIv416HRNfYGE9yVynl
          source_id: s_9XiE7Mrotdc4kXNkRdT8Zi
          stance: supports
          locator: CBDB:122406
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_9XiE7Mrotdc4kXNkRdT8Zi
            source_type: api_record
            title: 中国历代人物传记资料库：朱斗兒（CBDB 122406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122406&o=json
            external_identifier: CBDB:122406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7czNSv6eJE4v2tDJoft3RO
        subject_person_id: p_6KbJs3N5Cvfq1CqSLe4C49
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱斗兒
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IkZ_tTFcUc_8FYZ1shRkI8
          claim_id: c_7czNSv6eJE4v2tDJoft3RO
          source_id: s_9XiE7Mrotdc4kXNkRdT8Zi
          stance: supports
          locator: CBDB:122406
          quotation: null
          interpretation_note: CBDB 明确记录的王光祿配偶
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
        id: c_F-cA5AuMMIuI083x5ZXob6
        subject_person_id: p_Fw3G7Y3USspNP5jJG7nRKq
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6KbJs3N5Cvfq1CqSLe4C49
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MHWlxDaFOTZ98P7UeOlVBn
          claim_id: c_F-cA5AuMMIuI083x5ZXob6
          source_id: s_9XiE7Mrotdc4kXNkRdT8Zi
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4461, HuWenKai #94：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Fw3G7Y3USspNP5jJG7nRKq
        status: active
        display_name: 王光祿
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 朱斗兒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 朱斗兒，史料所见人物。本项目依据《中国历代人物传记资料库：朱斗兒（CBDB 122406）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 朱斗兒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Fw3G7Y3USspNP5jJG7nRKq | 王光祿 | accepted |

## 外部来源

- [中国历代人物传记资料库：朱斗兒（CBDB 122406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122406&o=json)
