---
schema: wang-person/v1
id: p_BUS29tQVgJAvsFs4gD2rfi
status: active
merged_into: null
display_name: 王匹雲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y4SNts4JRFjdFdQkCbE3fy
        subject_person_id: p_BUS29tQVgJAvsFs4gD2rfi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王匹雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2epCZEf1zgu8jxiMofXHUq
          claim_id: c_y4SNts4JRFjdFdQkCbE3fy
          source_id: s_59Hjh1aoWUJdQDTz5kDtpR
          stance: supports
          locator: CBDB:568685
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568685）
          source: &a1
            id: s_59Hjh1aoWUJdQDTz5kDtpR
            source_type: api_record
            title: 中国历代人物传记资料库：王匹雲（CBDB 568685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568685&o=json
            external_identifier: CBDB:568685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.596Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MfKvNRgzsMGbuGBW4RkDpv
        subject_person_id: p_BUS29tQVgJAvsFs4gD2rfi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王匹雲，清人物。籍贯射洪。（中国历代人物传记资料库 CBDB 568685）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gqC26hy5mh1xRX54eJ1Ls4
          claim_id: c_MfKvNRgzsMGbuGBW4RkDpv
          source_id: s_59Hjh1aoWUJdQDTz5kDtpR
          stance: supports
          locator: CBDB:568685
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

# 王匹雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王匹雲 | accepted |
| bio.summary | 王匹雲，清人物。籍贯射洪。（中国历代人物传记资料库 CBDB 568685） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王匹雲（CBDB 568685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568685&o=json)
