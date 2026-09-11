---
schema: wang-person/v1
id: p_beLcc3u3HHSNBu25K2X5Wh
status: active
merged_into: null
display_name: 王漢臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8E5vhcJn5S9eZ4Xbcs1RK4
        subject_person_id: p_beLcc3u3HHSNBu25K2X5Wh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BCkSe846dCGBo4MHZT8hiC
          claim_id: c_8E5vhcJn5S9eZ4Xbcs1RK4
          source_id: s_QRifs9hGrWSqxwo3mJvmER
          stance: supports
          locator: CBDB:38298
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38298）
          source: &a1
            id: s_QRifs9hGrWSqxwo3mJvmER
            source_type: api_record
            title: 中国历代人物传记资料库：王漢臣（CBDB 38298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38298&o=json
            external_identifier: CBDB:38298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PPZzoAbrHKwKinXoAM4xFB
        subject_person_id: p_beLcc3u3HHSNBu25K2X5Wh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1236年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AjoSNJ4id5DhTaHNxsjRbP
          claim_id: c_PPZzoAbrHKwKinXoAM4xFB
          source_id: s_QRifs9hGrWSqxwo3mJvmER
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
        id: c_FndE1TgMhNgnJLPFNJ66yy
        subject_person_id: p_beLcc3u3HHSNBu25K2X5Wh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢臣（卒于1236年），史料所见人物。本项目依据《中国历代人物传记资料库：王漢臣（CBDB 38298）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-L7JCFDkBMpoXyoL4jBfmK
          claim_id: c_FndE1TgMhNgnJLPFNJ66yy
          source_id: s_QRifs9hGrWSqxwo3mJvmER
          stance: supports
          locator: CBDB:38298
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王漢臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漢臣 | accepted |
| death.date | 1236年 | accepted |
| bio.summary | 王漢臣（卒于1236年），史料所见人物。本项目依据《中国历代人物传记资料库：王漢臣（CBDB 38298）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王漢臣（CBDB 38298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38298&o=json)
