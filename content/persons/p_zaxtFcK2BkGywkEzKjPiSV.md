---
schema: wang-person/v1
id: p_zaxtFcK2BkGywkEzKjPiSV
status: active
merged_into: null
display_name: 王國棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BGSn9VbP2msDHE5dNLCRG6
        subject_person_id: p_zaxtFcK2BkGywkEzKjPiSV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tB1WJ4F59a15BC4kczoZA3
          claim_id: c_BGSn9VbP2msDHE5dNLCRG6
          source_id: s_KnVTPKWcHSJ34Uzp6SJvEY
          stance: supports
          locator: CBDB:57174
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57174）
          source: &a1
            id: s_KnVTPKWcHSJ34Uzp6SJvEY
            source_type: api_record
            title: 中国历代人物传记资料库：王國棟（CBDB 57174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57174&o=json
            external_identifier: CBDB:57174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.796Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4w12mJE9p67HDMfqtttA4k
        subject_person_id: p_zaxtFcK2BkGywkEzKjPiSV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1735年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dFkmYqicn16Lpi8zPDA1Nd
          claim_id: c_4w12mJE9p67HDMfqtttA4k
          source_id: s_KnVTPKWcHSJ34Uzp6SJvEY
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
        id: c_ce3F6L2o4L2jLKuuPHALB5
        subject_person_id: p_zaxtFcK2BkGywkEzKjPiSV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國棟（卒于1735年），清人物。明清進士進士，籍贯奉天府，身份为良吏;循吏，入仕進士。（中国历代人物传记资料库 CBDB 57174）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hv-sNhA8Yk6j3NXioqh_n5
          claim_id: c_ce3F6L2o4L2jLKuuPHALB5
          source_id: s_KnVTPKWcHSJ34Uzp6SJvEY
          stance: supports
          locator: CBDB:57174
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

# 王國棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國棟 | accepted |
| death.date | 1735年 | accepted |
| bio.summary | 王國棟（卒于1735年），清人物。明清進士進士，籍贯奉天府，身份为良吏;循吏，入仕進士。（中国历代人物传记资料库 CBDB 57174） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國棟（CBDB 57174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57174&o=json)
