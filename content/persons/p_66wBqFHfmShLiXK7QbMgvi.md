---
schema: wang-person/v1
id: p_66wBqFHfmShLiXK7QbMgvi
status: active
merged_into: null
display_name: 王邦佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aYMpYuBLEsEsZbNsAwUSur
        subject_person_id: p_66wBqFHfmShLiXK7QbMgvi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NB1C2Hkv5JhKugyL6HHqR7
          claim_id: c_aYMpYuBLEsEsZbNsAwUSur
          source_id: s_UAv1QrcmqvtN6EgfpwpzcP
          stance: supports
          locator: CBDB:640478
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640478）
          source: &a1
            id: s_UAv1QrcmqvtN6EgfpwpzcP
            source_type: api_record
            title: 中国历代人物传记资料库：王邦佐（CBDB 640478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640478&o=json
            external_identifier: CBDB:640478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cESQRAAT2Acr5eVeWXVvF7
        subject_person_id: p_66wBqFHfmShLiXK7QbMgvi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦佐，清人物。籍贯平陽，曾任訓導。（中国历代人物传记资料库 CBDB 640478）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mg8ozqs644OTtCvpldO-2K
          claim_id: c_cESQRAAT2Acr5eVeWXVvF7
          source_id: s_UAv1QrcmqvtN6EgfpwpzcP
          stance: supports
          locator: CBDB:640478
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

# 王邦佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦佐 | accepted |
| bio.summary | 王邦佐，清人物。籍贯平陽，曾任訓導。（中国历代人物传记资料库 CBDB 640478） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王邦佐（CBDB 640478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640478&o=json)
