---
schema: wang-person/v1
id: p_zW6uEskKDNP99M3eZ26Rmd
status: active
merged_into: null
display_name: 王文宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pau6yRamCgFEDXdEGzM4uv
        subject_person_id: p_zW6uEskKDNP99M3eZ26Rmd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WsRpXvvc6Zn5tcE9zK6yr5
          claim_id: c_Pau6yRamCgFEDXdEGzM4uv
          source_id: s_A5aeXQSAmZ65Qo3EDqQjLS
          stance: supports
          locator: CBDB:576687
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576687）
          source: &a1
            id: s_A5aeXQSAmZ65Qo3EDqQjLS
            source_type: api_record
            title: 中国历代人物传记资料库：王文宗（CBDB 576687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576687&o=json
            external_identifier: CBDB:576687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.961Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xPJSXr8GJ2W8UPY9FZnV9a
        subject_person_id: p_zW6uEskKDNP99M3eZ26Rmd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1867年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q7viUDrDLKwqfK3QFY832U
          claim_id: c_xPJSXr8GJ2W8UPY9FZnV9a
          source_id: s_A5aeXQSAmZ65Qo3EDqQjLS
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
        id: c_hja987KPrETzvM7JcmYJaZ
        subject_person_id: p_zW6uEskKDNP99M3eZ26Rmd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1894年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_14usNHEt1qH6ZPr6yCEmYK
          claim_id: c_hja987KPrETzvM7JcmYJaZ
          source_id: s_A5aeXQSAmZ65Qo3EDqQjLS
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
        id: c_ETzgfphUVFGdVyDer7d4BK
        subject_person_id: p_zW6uEskKDNP99M3eZ26Rmd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文宗（1867年—1894年），清人物。籍贯上海。（中国历代人物传记资料库 CBDB 576687）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M6odQgVoeqCuDsz0owxDQI
          claim_id: c_ETzgfphUVFGdVyDer7d4BK
          source_id: s_A5aeXQSAmZ65Qo3EDqQjLS
          stance: supports
          locator: CBDB:576687
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

# 王文宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文宗 | accepted |
| birth.date | 1867年 | accepted |
| death.date | 1894年 | accepted |
| bio.summary | 王文宗（1867年—1894年），清人物。籍贯上海。（中国历代人物传记资料库 CBDB 576687） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文宗（CBDB 576687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576687&o=json)
