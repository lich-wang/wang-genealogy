---
schema: wang-person/v1
id: p_EbVdf7fPcTeQw4FZ7FN4MC
status: active
merged_into: null
display_name: 王曜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5s58wXhw1ARtaf45JQ8kvN
        subject_person_id: p_EbVdf7fPcTeQw4FZ7FN4MC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RmTmNYdcmBU3NVGqqtPkRN
          claim_id: c_5s58wXhw1ARtaf45JQ8kvN
          source_id: s_1mt6rSyi44o1uprGHZS8iA
          stance: supports
          locator: CBDB:71298
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71298）
          source: &a1
            id: s_1mt6rSyi44o1uprGHZS8iA
            source_type: api_record
            title: 中国历代人物传记资料库：王曜（CBDB 71298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71298&o=json
            external_identifier: CBDB:71298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.579Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iPa1SoguuDwFSekBPJmnpk
        subject_person_id: p_EbVdf7fPcTeQw4FZ7FN4MC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1826年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BYeh4PE5qJ2FpCWHoWEhCA
          claim_id: c_iPa1SoguuDwFSekBPJmnpk
          source_id: s_1mt6rSyi44o1uprGHZS8iA
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
        id: c_LosC3VLY7vNTXcHiMpBPBX
        subject_person_id: p_EbVdf7fPcTeQw4FZ7FN4MC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1888年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J2T4V29ih7hQMtDcvCyqer
          claim_id: c_LosC3VLY7vNTXcHiMpBPBX
          source_id: s_1mt6rSyi44o1uprGHZS8iA
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
        id: c_c1Q3Cp2tYKMZX2Ajd6TiFh
        subject_person_id: p_EbVdf7fPcTeQw4FZ7FN4MC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曜（1826年—1888年），清人物。籍贯祥符。（中国历代人物传记资料库 CBDB 71298）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hBIPG5Mx6OgS2KVUNP6dUf
          claim_id: c_c1Q3Cp2tYKMZX2Ajd6TiFh
          source_id: s_1mt6rSyi44o1uprGHZS8iA
          stance: supports
          locator: CBDB:71298
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

# 王曜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曜 | accepted |
| birth.date | 1826年 | accepted |
| death.date | 1888年 | accepted |
| bio.summary | 王曜（1826年—1888年），清人物。籍贯祥符。（中国历代人物传记资料库 CBDB 71298） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曜（CBDB 71298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71298&o=json)
