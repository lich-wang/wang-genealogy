---
schema: wang-person/v1
id: p_JXm31kwqKFMSmpFR9t6BD6
status: active
merged_into: null
display_name: 王雲鳳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d4aDzjeG7oQi72erEn61n6
        subject_person_id: p_JXm31kwqKFMSmpFR9t6BD6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HWUELbviKo8eLA4Gsbh2eo
          claim_id: c_d4aDzjeG7oQi72erEn61n6
          source_id: s_DkhjwDV5RPMNoaLnEvVGHW
          stance: supports
          locator: CBDB:71385
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71385）
          source: &a1
            id: s_DkhjwDV5RPMNoaLnEvVGHW
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鳳（CBDB 71385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71385&o=json
            external_identifier: CBDB:71385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.629Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ney2HjiAyw7EBw6LE5umkC
        subject_person_id: p_JXm31kwqKFMSmpFR9t6BD6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1638年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4i6KC6QqfgpEnE2M2ujxLE
          claim_id: c_ney2HjiAyw7EBw6LE5umkC
          source_id: s_DkhjwDV5RPMNoaLnEvVGHW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XQDufW3298MqqH6kk7F1xi
        subject_person_id: p_JXm31kwqKFMSmpFR9t6BD6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲鳳（生于1638年），清人物。籍贯崑山。（中国历代人物传记资料库 CBDB 71385）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZC_EQzAzmSU27ro5BBfKKF
          claim_id: c_XQDufW3298MqqH6kk7F1xi
          source_id: s_DkhjwDV5RPMNoaLnEvVGHW
          stance: supports
          locator: CBDB:71385
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

# 王雲鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲鳳 | accepted |
| birth.date | 1638年 | accepted |
| bio.summary | 王雲鳳（生于1638年），清人物。籍贯崑山。（中国历代人物传记资料库 CBDB 71385） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲鳳（CBDB 71385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71385&o=json)
