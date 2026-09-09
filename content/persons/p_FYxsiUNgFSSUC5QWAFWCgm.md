---
schema: wang-person/v1
id: p_FYxsiUNgFSSUC5QWAFWCgm
status: active
merged_into: null
display_name: 王鈞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HqtwY66s5kydHSEB2ycbid
        subject_person_id: p_FYxsiUNgFSSUC5QWAFWCgm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K4FvkaMarea7FezDNKNaV9
          claim_id: c_HqtwY66s5kydHSEB2ycbid
          source_id: s_N6ASJSekVCYPahwo5QKHAx
          stance: supports
          locator: CBDB:65799
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（65799）
          source: &a1
            id: s_N6ASJSekVCYPahwo5QKHAx
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞（CBDB 65799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65799&o=json
            external_identifier: CBDB:65799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.940Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MNPas5o6MBosEaJDPajNSC
        subject_person_id: p_FYxsiUNgFSSUC5QWAFWCgm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1740年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gwVc4obyXUr9u2mCrWhpv8
          claim_id: c_MNPas5o6MBosEaJDPajNSC
          source_id: s_N6ASJSekVCYPahwo5QKHAx
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
        id: c_MecqPPRp259hodqfPnRu9W
        subject_person_id: p_FYxsiUNgFSSUC5QWAFWCgm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CAJ7E4gpQ7qYcPfoisTuNa
          claim_id: c_MecqPPRp259hodqfPnRu9W
          source_id: s_N6ASJSekVCYPahwo5QKHAx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王鈞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈞 | accepted |
| death.date | 1740年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鈞（CBDB 65799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65799&o=json)
