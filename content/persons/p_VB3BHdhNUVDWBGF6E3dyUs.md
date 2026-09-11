---
schema: wang-person/v1
id: p_VB3BHdhNUVDWBGF6E3dyUs
status: active
merged_into: null
display_name: 王浩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ThzwSD9659W5uYHkLEQbWq
        subject_person_id: p_VB3BHdhNUVDWBGF6E3dyUs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GHdN3a7r63DJpozg4GuNAb
          claim_id: c_ThzwSD9659W5uYHkLEQbWq
          source_id: s_XBAMpgKucKAjHHyA62dJwQ
          stance: supports
          locator: CBDB:71172
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71172）
          source: &a1
            id: s_XBAMpgKucKAjHHyA62dJwQ
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 71172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71172&o=json
            external_identifier: CBDB:71172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.451Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UtZHdTuv3DMvZMKPT7fjMr
        subject_person_id: p_VB3BHdhNUVDWBGF6E3dyUs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1894年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RQuLo3S5DkK2V1co6HFY3j
          claim_id: c_UtZHdTuv3DMvZMKPT7fjMr
          source_id: s_XBAMpgKucKAjHHyA62dJwQ
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
        id: c_7nrVFz9ex33tRdkBkkmtkv
        subject_person_id: p_VB3BHdhNUVDWBGF6E3dyUs
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1923年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FSzEywGcdR75LESspqGFL7
          claim_id: c_7nrVFz9ex33tRdkBkkmtkv
          source_id: s_XBAMpgKucKAjHHyA62dJwQ
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
        id: c_4EuWUQLc43GpVECfxv4vQR
        subject_person_id: p_VB3BHdhNUVDWBGF6E3dyUs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩（1894年—1923年），中華民國人物。籍贯南昌。（中国历代人物传记资料库 CBDB 71172）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RnyatbTErFTRsp2O-qJyoD
          claim_id: c_4EuWUQLc43GpVECfxv4vQR
          source_id: s_XBAMpgKucKAjHHyA62dJwQ
          stance: supports
          locator: CBDB:71172
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

# 王浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浩 | accepted |
| birth.date | 1894年 | accepted |
| death.date | 1923年 | accepted |
| bio.summary | 王浩（1894年—1923年），中華民國人物。籍贯南昌。（中国历代人物传记资料库 CBDB 71172） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王浩（CBDB 71172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71172&o=json)
