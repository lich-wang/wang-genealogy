---
schema: wang-person/v1
id: p_VP8x2mAqSpnsTMAqqMPMLM
status: active
merged_into: null
display_name: 王至
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L2CZZsuWGSwszCExwNFqT1
        subject_person_id: p_VP8x2mAqSpnsTMAqqMPMLM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王至
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LzSb4ApU3PnrFVpAYiYE2s
          claim_id: c_L2CZZsuWGSwszCExwNFqT1
          source_id: s_9YdwFm2rtPtPWAqQJMo2RE
          stance: supports
          locator: CBDB:227299
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227299）
          source: &a1
            id: s_9YdwFm2rtPtPWAqQJMo2RE
            source_type: api_record
            title: 中国历代人物传记资料库：王至（CBDB 227299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227299&o=json
            external_identifier: CBDB:227299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.493Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hdNTg8J9CyvU22oyGHU4eS
        subject_person_id: p_VP8x2mAqSpnsTMAqqMPMLM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王至，明人物。萬曆丙戌科進士進士，籍贯臨清。（中国历代人物传记资料库 CBDB 227299）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__H2pgNznZR-YiRFR2dEqCd
          claim_id: c_hdNTg8J9CyvU22oyGHU4eS
          source_id: s_9YdwFm2rtPtPWAqQJMo2RE
          stance: supports
          locator: CBDB:227299
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
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王至

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王至 | accepted |
| bio.summary | 王至，明人物。萬曆丙戌科進士進士，籍贯臨清。（中国历代人物传记资料库 CBDB 227299） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王至（CBDB 227299）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227299&o=json)
