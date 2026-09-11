---
schema: wang-person/v1
id: p_xKp328cBdGXMmWXxUBPEFZ
status: active
merged_into: null
display_name: 王繡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jn3TA1EjHRGuXHSo3v8NXB
        subject_person_id: p_xKp328cBdGXMmWXxUBPEFZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G8eH9wWwthtQUcL9CHKgvU
          claim_id: c_Jn3TA1EjHRGuXHSo3v8NXB
          source_id: s_Bz67NBcRhEQpzfhzzbR81K
          stance: supports
          locator: CBDB:71180
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71180）
          source: &a1
            id: s_Bz67NBcRhEQpzfhzzbR81K
            source_type: api_record
            title: 中国历代人物传记资料库：王繡（CBDB 71180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71180&o=json
            external_identifier: CBDB:71180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.458Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_D2GkNN62iNXkEQTtGsKdWB
        subject_person_id: p_xKp328cBdGXMmWXxUBPEFZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1621年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dC3vt3S2YAGFH76hkMN4E8
          claim_id: c_D2GkNN62iNXkEQTtGsKdWB
          source_id: s_Bz67NBcRhEQpzfhzzbR81K
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
        id: c_oFCuLcKE4P7rgDLPn7HvEB
        subject_person_id: p_xKp328cBdGXMmWXxUBPEFZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繡（生于1621年），清人物。籍贯淄川。（中国历代人物传记资料库 CBDB 71180）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bxgUMxkWzLNgFqsPzG7UDp
          claim_id: c_oFCuLcKE4P7rgDLPn7HvEB
          source_id: s_Bz67NBcRhEQpzfhzzbR81K
          stance: supports
          locator: CBDB:71180
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

# 王繡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繡 | accepted |
| birth.date | 1621年 | accepted |
| bio.summary | 王繡（生于1621年），清人物。籍贯淄川。（中国历代人物传记资料库 CBDB 71180） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繡（CBDB 71180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71180&o=json)
