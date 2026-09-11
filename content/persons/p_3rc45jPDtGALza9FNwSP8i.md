---
schema: wang-person/v1
id: p_3rc45jPDtGALza9FNwSP8i
status: active
merged_into: null
display_name: 王旧钫符
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N5JPdpxxNrMkwPmjCRgaBL
        subject_person_id: p_3rc45jPDtGALza9FNwSP8i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旧钫符
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2P6X1Q3tGwy7KBK7y2QQYd
          claim_id: c_N5JPdpxxNrMkwPmjCRgaBL
          source_id: s_S1RUNknLQ8d4SRAjGrH3wc
          stance: supports
          locator: CBDB:69405
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69405）
          source: &a1
            id: s_S1RUNknLQ8d4SRAjGrH3wc
            source_type: api_record
            title: 中国历代人物传记资料库：王旧钫符（CBDB 69405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69405&o=json
            external_identifier: CBDB:69405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.257Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZCT1WnLmdZiGrpmLq8Lw4J
        subject_person_id: p_3rc45jPDtGALza9FNwSP8i
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1667年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4XwVv9HMcypgKv5WhiYGCa
          claim_id: c_ZCT1WnLmdZiGrpmLq8Lw4J
          source_id: s_S1RUNknLQ8d4SRAjGrH3wc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jndxDdkywbfV4HVf4Hp4Ds
        subject_person_id: p_3rc45jPDtGALza9FNwSP8i
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1742年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6DbMg6W4eAiqQadjAqEL8E
          claim_id: c_jndxDdkywbfV4HVf4Hp4Ds
          source_id: s_S1RUNknLQ8d4SRAjGrH3wc
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
        id: c_5YsXq6cZwgWhazCLwkiwEz
        subject_person_id: p_3rc45jPDtGALza9FNwSP8i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王旧钫符（1667年—1742年），清人物。籍贯福山，入仕監生: 例監(附監生)，曾任知府、知州。（中国历代人物传记资料库 CBDB 69405）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zFSIvsSic8IhSunH88MArf
          claim_id: c_5YsXq6cZwgWhazCLwkiwEz
          source_id: s_S1RUNknLQ8d4SRAjGrH3wc
          stance: supports
          locator: CBDB:69405
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

# 王旧钫符

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旧钫符 | accepted |
| birth.date | 1667年 | accepted |
| death.date | 1742年 | accepted |
| bio.summary | 王旧钫符（1667年—1742年），清人物。籍贯福山，入仕監生: 例監(附監生)，曾任知府、知州。（中国历代人物传记资料库 CBDB 69405） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王旧钫符（CBDB 69405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69405&o=json)
