---
schema: wang-person/v1
id: p_JYG8DFP3tAaxLEowfTz3F5
status: active
merged_into: null
display_name: 王宗誠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pCpU1UGbjmFm1cNgvH5qtP
        subject_person_id: p_JYG8DFP3tAaxLEowfTz3F5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iRGxVzDpQJNnKeQpYAiF3j
          claim_id: c_pCpU1UGbjmFm1cNgvH5qtP
          source_id: s_wNMcEB4h3A9ehHGhT9QmZ6
          stance: supports
          locator: CBDB:57134
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57134）
          source: &a1
            id: s_wNMcEB4h3A9ehHGhT9QmZ6
            source_type: api_record
            title: 中国历代人物传记资料库：王宗誠（CBDB 57134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57134&o=json
            external_identifier: CBDB:57134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.787Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Rgt7Eiv6m9eVvUgvSfLD4H
        subject_person_id: p_JYG8DFP3tAaxLEowfTz3F5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1764年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DLr3fJ4tV8ib4sAUH5Tkk6
          claim_id: c_Rgt7Eiv6m9eVvUgvSfLD4H
          source_id: s_wNMcEB4h3A9ehHGhT9QmZ6
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
        id: c_ZoRL1rfhy7TteRhQNXxiDW
        subject_person_id: p_JYG8DFP3tAaxLEowfTz3F5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1837年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MhbmASk7mpAjJnRKvKCXq9
          claim_id: c_ZoRL1rfhy7TteRhQNXxiDW
          source_id: s_wNMcEB4h3A9ehHGhT9QmZ6
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
        id: c_J9j93Gn17VYDtR3vutxCqr
        subject_person_id: p_JYG8DFP3tAaxLEowfTz3F5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗誠（1764年—1837年），清人物。明清進士進士，籍贯青陽，入仕進士，曾任編修、會試考官、禮部侍郎。（中国历代人物传记资料库 CBDB 57134）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IaVMOLSxi_vlXGZZuDxfwj
          claim_id: c_J9j93Gn17VYDtR3vutxCqr
          source_id: s_wNMcEB4h3A9ehHGhT9QmZ6
          stance: supports
          locator: CBDB:57134
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

# 王宗誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗誠 | accepted |
| birth.date | 1764年 | accepted |
| death.date | 1837年 | accepted |
| bio.summary | 王宗誠（1764年—1837年），清人物。明清進士進士，籍贯青陽，入仕進士，曾任編修、會試考官、禮部侍郎。（中国历代人物传记资料库 CBDB 57134） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗誠（CBDB 57134）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57134&o=json)
