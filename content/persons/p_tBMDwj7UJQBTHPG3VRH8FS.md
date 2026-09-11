---
schema: wang-person/v1
id: p_tBMDwj7UJQBTHPG3VRH8FS
status: active
merged_into: null
display_name: 王邦璽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PYDFfe4vuNGQdkyakKvMsz
        subject_person_id: p_tBMDwj7UJQBTHPG3VRH8FS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fv1BtHzQ3x7ArqzGe8oCpV
          claim_id: c_PYDFfe4vuNGQdkyakKvMsz
          source_id: s_kE3PyNgCJ6qRxD5zpdbDHJ
          stance: supports
          locator: CBDB:61487
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61487）
          source: &a1
            id: s_kE3PyNgCJ6qRxD5zpdbDHJ
            source_type: api_record
            title: 中国历代人物传记资料库：王邦璽（CBDB 61487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61487&o=json
            external_identifier: CBDB:61487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YV6DN4SxyA5xLEQ9ye8J8V
        subject_person_id: p_tBMDwj7UJQBTHPG3VRH8FS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1852年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xzyCQRaVxzMkg19TBRC3b2
          claim_id: c_YV6DN4SxyA5xLEQ9ye8J8V
          source_id: s_kE3PyNgCJ6qRxD5zpdbDHJ
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
        id: c_3mkzt1hHKSe8KjJkxWS5xs
        subject_person_id: p_tBMDwj7UJQBTHPG3VRH8FS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦璽（生于1852年），清人物。籍贯安福，曾任國子監司業。（中国历代人物传记资料库 CBDB 61487）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MZDX2rBywm5Ep25kWKhiIW
          claim_id: c_3mkzt1hHKSe8KjJkxWS5xs
          source_id: s_kE3PyNgCJ6qRxD5zpdbDHJ
          stance: supports
          locator: CBDB:61487
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

# 王邦璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦璽 | accepted |
| birth.date | 1852年 | accepted |
| bio.summary | 王邦璽（生于1852年），清人物。籍贯安福，曾任國子監司業。（中国历代人物传记资料库 CBDB 61487） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王邦璽（CBDB 61487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61487&o=json)
