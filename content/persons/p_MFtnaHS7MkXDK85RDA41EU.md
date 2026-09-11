---
schema: wang-person/v1
id: p_MFtnaHS7MkXDK85RDA41EU
status: active
merged_into: null
display_name: 王欲美
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YqDF23Vt2YLX3LGQuNf2J3
        subject_person_id: p_MFtnaHS7MkXDK85RDA41EU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欲美
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9K3e2jjESXBdx1NWLnAjKn
          claim_id: c_YqDF23Vt2YLX3LGQuNf2J3
          source_id: s_UjZkuXHY2npas74VCQp4N7
          stance: supports
          locator: CBDB:638883
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638883）
          source: &a1
            id: s_UjZkuXHY2npas74VCQp4N7
            source_type: api_record
            title: 中国历代人物传记资料库：王欲美（CBDB 638883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638883&o=json
            external_identifier: CBDB:638883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.779Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AxJ58vvsHKzmMBmwnCsVdz
        subject_person_id: p_MFtnaHS7MkXDK85RDA41EU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欲美，清人物。籍贯行唐，曾任復設訓導。（中国历代人物传记资料库 CBDB 638883）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xgDDzMFsiLC2IHg9M7zT7P
          claim_id: c_AxJ58vvsHKzmMBmwnCsVdz
          source_id: s_UjZkuXHY2npas74VCQp4N7
          stance: supports
          locator: CBDB:638883
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

# 王欲美

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欲美 | accepted |
| bio.summary | 王欲美，清人物。籍贯行唐，曾任復設訓導。（中国历代人物传记资料库 CBDB 638883） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王欲美（CBDB 638883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638883&o=json)
