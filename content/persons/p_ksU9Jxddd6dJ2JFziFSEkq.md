---
schema: wang-person/v1
id: p_ksU9Jxddd6dJ2JFziFSEkq
status: active
merged_into: null
display_name: 王箴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aXXnaHEe2G715H9yjC2FZc
        subject_person_id: p_ksU9Jxddd6dJ2JFziFSEkq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王箴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jxDYhNbRKjstxhQy15nD2D
          claim_id: c_aXXnaHEe2G715H9yjC2FZc
          source_id: s_W2KTM3zxf81ksD6DkMCNFF
          stance: supports
          locator: CBDB:19226
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19226）
          source: &a1
            id: s_W2KTM3zxf81ksD6DkMCNFF
            source_type: api_record
            title: 中国历代人物传记资料库：王箴（CBDB 19226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19226&o=json
            external_identifier: CBDB:19226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.731Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7Kt9XoGPAscizeeYJw98np
        subject_person_id: p_ksU9Jxddd6dJ2JFziFSEkq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1049年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C5JhPrb7786zLGZ1V9Q76R
          claim_id: c_7Kt9XoGPAscizeeYJw98np
          source_id: s_W2KTM3zxf81ksD6DkMCNFF
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
        id: c_YKRFDVjMWgWUkp2W33wwt5
        subject_person_id: p_ksU9Jxddd6dJ2JFziFSEkq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1101年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tGU4misCNDZsunTvoCuTqy
          claim_id: c_YKRFDVjMWgWUkp2W33wwt5
          source_id: s_W2KTM3zxf81ksD6DkMCNFF
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
        id: c_nJp14HdPH5XtUNQpXSdXZJ
        subject_person_id: p_ksU9Jxddd6dJ2JFziFSEkq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王箴（1049年—1101年），宋人物。籍贯眉山，身份为士人、拒絕出仕。（中国历代人物传记资料库 CBDB 19226）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_b1D8EPdmsGpyIxci5g3WY6
          claim_id: c_nJp14HdPH5XtUNQpXSdXZJ
          source_id: s_W2KTM3zxf81ksD6DkMCNFF
          stance: supports
          locator: CBDB:19226
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

# 王箴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王箴 | accepted |
| birth.date | 1049年 | accepted |
| death.date | 1101年 | accepted |
| bio.summary | 王箴（1049年—1101年），宋人物。籍贯眉山，身份为士人、拒絕出仕。（中国历代人物传记资料库 CBDB 19226） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王箴（CBDB 19226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19226&o=json)
