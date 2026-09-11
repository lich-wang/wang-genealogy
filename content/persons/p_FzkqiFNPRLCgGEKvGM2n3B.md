---
schema: wang-person/v1
id: p_FzkqiFNPRLCgGEKvGM2n3B
status: active
merged_into: null
display_name: 王書賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nKgbPpeZ898EHoi1j2fyCs
        subject_person_id: p_FzkqiFNPRLCgGEKvGM2n3B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王書賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZXP4jWUGsbMFBpPBZV8zSw
          claim_id: c_nKgbPpeZ898EHoi1j2fyCs
          source_id: s_KPEidFvYAa15ppb1ZJGv17
          stance: supports
          locator: CBDB:638550
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638550）
          source: &a1
            id: s_KPEidFvYAa15ppb1ZJGv17
            source_type: api_record
            title: 中国历代人物传记资料库：王書賢（CBDB 638550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638550&o=json
            external_identifier: CBDB:638550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.670Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_REQgyHrkRFVPH8z4MKyK7X
        subject_person_id: p_FzkqiFNPRLCgGEKvGM2n3B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王書賢，清人物。籍贯綿州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 638550）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3Crf01oQcDmH8dtl7wbf22
          claim_id: c_REQgyHrkRFVPH8z4MKyK7X
          source_id: s_KPEidFvYAa15ppb1ZJGv17
          stance: supports
          locator: CBDB:638550
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

# 王書賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王書賢 | accepted |
| bio.summary | 王書賢，清人物。籍贯綿州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 638550） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王書賢（CBDB 638550）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638550&o=json)
