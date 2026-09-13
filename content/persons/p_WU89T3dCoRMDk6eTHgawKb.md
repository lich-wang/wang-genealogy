---
schema: wang-person/v1
id: p_WU89T3dCoRMDk6eTHgawKb
status: merged
merged_into: p_Hy3oL9P7FfBor4frFk5Jm5
display_name: 王拱辰
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w4vPa8iiADRSiDnWw5hHph
        subject_person_id: p_WU89T3dCoRMDk6eTHgawKb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱辰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GV8gUYCvAnZPbd9HUZwAFw
          claim_id: c_w4vPa8iiADRSiDnWw5hHph
          source_id: s_K58g1dFPD1BQpDPDwmjsyE
          stance: supports
          locator: CBDB:1847
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1847）
          source: &a1
            id: s_K58g1dFPD1BQpDPDwmjsyE
            source_type: api_record
            title: 中国历代人物传记资料库：王拱辰（CBDB 1847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1847&o=json
            external_identifier: CBDB:1847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QeiPWV9rRH6PwuVy7KJVaB
        subject_person_id: p_WU89T3dCoRMDk6eTHgawKb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1012年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3SNKZm9aZqnggLBu8i5adr
          claim_id: c_QeiPWV9rRH6PwuVy7KJVaB
          source_id: s_K58g1dFPD1BQpDPDwmjsyE
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
        id: c_msYPbADTbYWBLAb6z7fQVb
        subject_person_id: p_WU89T3dCoRMDk6eTHgawKb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1085年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nELw4ahMnS4u5xGus69ZMP
          claim_id: c_msYPbADTbYWBLAb6z7fQVb
          source_id: s_K58g1dFPD1BQpDPDwmjsyE
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
        id: c_2w85ZK37DtGrWJU5RadXMp
        subject_person_id: p_WU89T3dCoRMDk6eTHgawKb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱辰（1012年—1085年），宋人物。籍贯咸平，入仕進士，曾任三司都磨勘司、將作監丞、三司使。（中国历代人物传记资料库 CBDB 1847）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UiFkKfVYagZ-0iBJffsMVI
          claim_id: c_2w85ZK37DtGrWJU5RadXMp
          source_id: s_K58g1dFPD1BQpDPDwmjsyE
          stance: supports
          locator: CBDB:1847
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

# 王拱辰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王拱辰 | accepted |
| birth.date | 1012年 | accepted |
| death.date | 1085年 | accepted |
| bio.summary | 王拱辰（1012年—1085年），宋人物。籍贯咸平，入仕進士，曾任三司都磨勘司、將作監丞、三司使。（中国历代人物传记资料库 CBDB 1847） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王拱辰（CBDB 1847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1847&o=json)
