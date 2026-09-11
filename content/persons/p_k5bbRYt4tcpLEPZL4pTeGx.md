---
schema: wang-person/v1
id: p_k5bbRYt4tcpLEPZL4pTeGx
status: active
merged_into: null
display_name: 王旦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HJedyiewitQUdRHCT45dgC
        subject_person_id: p_k5bbRYt4tcpLEPZL4pTeGx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kpGddTpDbNKWDbn17ppPht
          claim_id: c_HJedyiewitQUdRHCT45dgC
          source_id: s_MuHA6HU1x55iMkFc8HyXf9
          stance: supports
          locator: CBDB:153809
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（153809）
          source: &a1
            id: s_MuHA6HU1x55iMkFc8HyXf9
            source_type: api_record
            title: 中国历代人物传记资料库：王旦（CBDB 153809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153809&o=json
            external_identifier: CBDB:153809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.864Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cNS6JvbGSAEWNAQLSWr1Mf
        subject_person_id: p_k5bbRYt4tcpLEPZL4pTeGx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旦，唐人物。籍贯琅琊。（中国历代人物传记资料库 CBDB 153809）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nxWb9Es30pZWVJ7rfG42mo
          claim_id: c_cNS6JvbGSAEWNAQLSWr1Mf
          source_id: s_MuHA6HU1x55iMkFc8HyXf9
          stance: supports
          locator: CBDB:153809
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

# 王旦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旦 | accepted |
| bio.summary | 王旦，唐人物。籍贯琅琊。（中国历代人物传记资料库 CBDB 153809） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王旦（CBDB 153809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153809&o=json)
