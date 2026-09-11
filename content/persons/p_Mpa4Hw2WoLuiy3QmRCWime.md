---
schema: wang-person/v1
id: p_Mpa4Hw2WoLuiy3QmRCWime
status: active
merged_into: null
display_name: 王恂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YBQJ38urGFWJCUY6xxPJLx
        subject_person_id: p_Mpa4Hw2WoLuiy3QmRCWime
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L15G7vcP5G7682nSqRusdv
          claim_id: c_YBQJ38urGFWJCUY6xxPJLx
          source_id: s_YMDqUMB9CiFQuuHKpfHxdB
          stance: supports
          locator: CBDB:71139
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71139）
          source: &a1
            id: s_YMDqUMB9CiFQuuHKpfHxdB
            source_type: api_record
            title: 中国历代人物传记资料库：王恂（CBDB 71139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71139&o=json
            external_identifier: CBDB:71139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.416Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hNobHQLv55MEQ3d1pNpqEo
        subject_person_id: p_Mpa4Hw2WoLuiy3QmRCWime
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1785年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7RE3crRTQvvdFwNBSCmWVM
          claim_id: c_hNobHQLv55MEQ3d1pNpqEo
          source_id: s_YMDqUMB9CiFQuuHKpfHxdB
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
        id: c_CbVRKAQLU8dn88MBMCyoa4
        subject_person_id: p_Mpa4Hw2WoLuiy3QmRCWime
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恂（生于1785年），清人物。籍贯大荔。（中国历代人物传记资料库 CBDB 71139）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yR7T4_v06Ed0_1aFkG98OK
          claim_id: c_CbVRKAQLU8dn88MBMCyoa4
          source_id: s_YMDqUMB9CiFQuuHKpfHxdB
          stance: supports
          locator: CBDB:71139
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

# 王恂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恂 | accepted |
| birth.date | 1785年 | accepted |
| bio.summary | 王恂（生于1785年），清人物。籍贯大荔。（中国历代人物传记资料库 CBDB 71139） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恂（CBDB 71139）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71139&o=json)
