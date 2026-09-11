---
schema: wang-person/v1
id: p_KEMTN6ndQ9Z1bg5Bwj3C5e
status: active
merged_into: null
display_name: 王壽昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pqJZdPy9LmKgDS9JC7hpdz
        subject_person_id: p_KEMTN6ndQ9Z1bg5Bwj3C5e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w6YpPsYwrAabeDGzNqA5xr
          claim_id: c_pqJZdPy9LmKgDS9JC7hpdz
          source_id: s_phemAL5si77dBW4GNmX6k9
          stance: supports
          locator: CBDB:61944
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61944）
          source: &a1
            id: s_phemAL5si77dBW4GNmX6k9
            source_type: api_record
            title: 中国历代人物传记资料库：王壽昌（CBDB 61944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61944&o=json
            external_identifier: CBDB:61944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jYup5LjFDeZu69XTCk7ZES
        subject_person_id: p_KEMTN6ndQ9Z1bg5Bwj3C5e
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1792年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k8FRgVVXGigPCafG9FWkv8
          claim_id: c_jYup5LjFDeZu69XTCk7ZES
          source_id: s_phemAL5si77dBW4GNmX6k9
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
        id: c_EBMh5z8TQh4HLAJuyn6JpX
        subject_person_id: p_KEMTN6ndQ9Z1bg5Bwj3C5e
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1845年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RDPP6e2CkH96FS5AWFxKG4
          claim_id: c_EBMh5z8TQh4HLAJuyn6JpX
          source_id: s_phemAL5si77dBW4GNmX6k9
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
        id: c_J5L8q2bZB2sHZw2SZGmmfY
        subject_person_id: p_KEMTN6ndQ9Z1bg5Bwj3C5e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王壽昌（1792年—1845年），清人物。籍贯高郵州，入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)，曾任知府。（中国历代人物传记资料库 CBDB 61944）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UGFWnUjOT0SQ97vUdLFxPj
          claim_id: c_J5L8q2bZB2sHZw2SZGmmfY
          source_id: s_phemAL5si77dBW4GNmX6k9
          stance: supports
          locator: CBDB:61944
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

# 王壽昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽昌 | accepted |
| birth.date | 1792年 | accepted |
| death.date | 1845年 | accepted |
| bio.summary | 王壽昌（1792年—1845年），清人物。籍贯高郵州，入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)，曾任知府。（中国历代人物传记资料库 CBDB 61944） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽昌（CBDB 61944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61944&o=json)
