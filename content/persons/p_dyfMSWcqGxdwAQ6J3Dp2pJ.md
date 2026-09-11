---
schema: wang-person/v1
id: p_dyfMSWcqGxdwAQ6J3Dp2pJ
status: active
merged_into: null
display_name: 王銘臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QUWtzgDayBhfmx6Fq8H55G
        subject_person_id: p_dyfMSWcqGxdwAQ6J3Dp2pJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VBu7uJENv84CTbZBPpiXu6
          claim_id: c_QUWtzgDayBhfmx6Fq8H55G
          source_id: s_5AQsEDXYjFFYVeL33oNv37
          stance: supports
          locator: CBDB:573886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573886）
          source: &a1
            id: s_5AQsEDXYjFFYVeL33oNv37
            source_type: api_record
            title: 中国历代人物传记资料库：王銘臣（CBDB 573886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573886&o=json
            external_identifier: CBDB:573886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.666Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ynaxJvccz8Au1J1GGfnn8d
        subject_person_id: p_dyfMSWcqGxdwAQ6J3Dp2pJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘臣，清人物。籍贯漢陽，入仕貢生 = 貢監生 (明清賓貢,功貢)。（中国历代人物传记资料库 CBDB 573886）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vRcJ7Fsl2kVvtajEoyW4jW
          claim_id: c_ynaxJvccz8Au1J1GGfnn8d
          source_id: s_5AQsEDXYjFFYVeL33oNv37
          stance: supports
          locator: CBDB:573886
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

# 王銘臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銘臣 | accepted |
| bio.summary | 王銘臣，清人物。籍贯漢陽，入仕貢生 = 貢監生 (明清賓貢,功貢)。（中国历代人物传记资料库 CBDB 573886） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銘臣（CBDB 573886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573886&o=json)
