---
schema: wang-person/v1
id: p_ravgfjXGiaQZ4i5Za49kKt
status: active
merged_into: null
display_name: 王澡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_62yBSkv1N89GchgyhGe66K
        subject_person_id: p_ravgfjXGiaQZ4i5Za49kKt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HHB733RQPPDZTBUG56cKqp
          claim_id: c_62yBSkv1N89GchgyhGe66K
          source_id: s_KodE4UUFL6fGoboddr9aqC
          stance: supports
          locator: CBDB:37820
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37820）
          source: &a1
            id: s_KodE4UUFL6fGoboddr9aqC
            source_type: api_record
            title: 中国历代人物传记资料库：王澡（CBDB 37820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37820&o=json
            external_identifier: CBDB:37820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.262Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9X51LYppzQMJ2meBCLZsmF
        subject_person_id: p_ravgfjXGiaQZ4i5Za49kKt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1166年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z4DyRSgCShVkFGiLjYpCxz
          claim_id: c_9X51LYppzQMJ2meBCLZsmF
          source_id: s_KodE4UUFL6fGoboddr9aqC
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
        id: c_xnMXrP3rXe1jkQvNMe1DXB
        subject_person_id: p_ravgfjXGiaQZ4i5Za49kKt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澡（生于1166年），宋人物。籍贯明州，入仕進士，曾任國子監博士、太常寺博士、通判。（中国历代人物传记资料库 CBDB 37820）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GIDQmIqX3Eake9k_KACj-H
          claim_id: c_xnMXrP3rXe1jkQvNMe1DXB
          source_id: s_KodE4UUFL6fGoboddr9aqC
          stance: supports
          locator: CBDB:37820
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

# 王澡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澡 | accepted |
| birth.date | 1166年 | accepted |
| bio.summary | 王澡（生于1166年），宋人物。籍贯明州，入仕進士，曾任國子監博士、太常寺博士、通判。（中国历代人物传记资料库 CBDB 37820） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澡（CBDB 37820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37820&o=json)
