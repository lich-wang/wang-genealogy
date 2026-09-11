---
schema: wang-person/v1
id: p_vMiD6FB1Cy832KqFKcTkPa
status: active
merged_into: null
display_name: 王文元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F3g29PPFM2zsLSUL8U6UKm
        subject_person_id: p_vMiD6FB1Cy832KqFKcTkPa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iZS5Hh6pjd9XJrGaFmXmh2
          claim_id: c_F3g29PPFM2zsLSUL8U6UKm
          source_id: s_f7MS34BNrQCDE2vfGD1KmT
          stance: supports
          locator: CBDB:638214
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638214）
          source: &a1
            id: s_f7MS34BNrQCDE2vfGD1KmT
            source_type: api_record
            title: 中国历代人物传记资料库：王文元（CBDB 638214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638214&o=json
            external_identifier: CBDB:638214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.628Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uXkhV7AjDEv4xL3VS1j6pL
        subject_person_id: p_vMiD6FB1Cy832KqFKcTkPa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文元，清人物。籍贯冀州直隸州直轄地方，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638214）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7w6Qlq9nPYYL8XufEMsWDJ
          claim_id: c_uXkhV7AjDEv4xL3VS1j6pL
          source_id: s_f7MS34BNrQCDE2vfGD1KmT
          stance: supports
          locator: CBDB:638214
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

# 王文元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文元 | accepted |
| bio.summary | 王文元，清人物。籍贯冀州直隸州直轄地方，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638214） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文元（CBDB 638214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638214&o=json)
