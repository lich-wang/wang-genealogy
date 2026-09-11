---
schema: wang-person/v1
id: p_V2V8T19kit7kSV7NWUMBHL
status: active
merged_into: null
display_name: 王同仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4BSbqPt2Fk9HGwjZeRhi56
        subject_person_id: p_V2V8T19kit7kSV7NWUMBHL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1284D1wMXXTeF9TGRYK3H8
          claim_id: c_4BSbqPt2Fk9HGwjZeRhi56
          source_id: s_gC457Xbm1tMbedghNeexSH
          stance: supports
          locator: CBDB:221774
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221774）
          source: &a1
            id: s_gC457Xbm1tMbedghNeexSH
            source_type: api_record
            title: 中国历代人物传记资料库：王同仁（CBDB 221774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221774&o=json
            external_identifier: CBDB:221774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.339Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EUdKrMRuPLPTbw8UqqgFFr
        subject_person_id: p_V2V8T19kit7kSV7NWUMBHL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同仁，明人物。萬曆八年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 221774）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AuV2o_GJFY8zMFEFmpX3DB
          claim_id: c_EUdKrMRuPLPTbw8UqqgFFr
          source_id: s_gC457Xbm1tMbedghNeexSH
          stance: supports
          locator: CBDB:221774
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

# 王同仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同仁 | accepted |
| bio.summary | 王同仁，明人物。萬曆八年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 221774） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王同仁（CBDB 221774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221774&o=json)
