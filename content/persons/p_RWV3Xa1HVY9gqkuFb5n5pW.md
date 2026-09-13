---
schema: wang-person/v1
id: p_RWV3Xa1HVY9gqkuFb5n5pW
status: active
merged_into: null
display_name: 王宇樂
cbdb_id: 71628
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4nQULmEx31KJiGws96y8Mm
        subject_person_id: p_RWV3Xa1HVY9gqkuFb5n5pW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇樂（生于1686年），清人物。明清進士進士，籍贯鍾祥，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 71628）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_YFAI9mcYez5S_r0CGZCLpH
          claim_id: c_4nQULmEx31KJiGws96y8Mm
          source_id: s_84Yk4HhNPCWNQFY6tuKCt4
          stance: supports
          locator: CBDB:71628
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_84Yk4HhNPCWNQFY6tuKCt4
            source_type: api_record
            title: 中国历代人物传记资料库：王宇樂（CBDB 71628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71628&o=json
            external_identifier: CBDB:71628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gNDyXFNHJ53imTevJRn3UZ
        subject_person_id: p_RWV3Xa1HVY9gqkuFb5n5pW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1686年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1686-01-01
            latest: 1686-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4btvVeJ6cCHo1XLAv9G47T
          claim_id: c_gNDyXFNHJ53imTevJRn3UZ
          source_id: s_84Yk4HhNPCWNQFY6tuKCt4
          stance: supports
          locator: CBDB:71628
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1686
          source:
            id: s_84Yk4HhNPCWNQFY6tuKCt4
            source_type: api_record
            title: 中国历代人物传记资料库：王宇樂（CBDB 71628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71628&o=json
            external_identifier: CBDB:71628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vbbc3Jy9NALpAM1Yw39eTw
        subject_person_id: p_RWV3Xa1HVY9gqkuFb5n5pW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇樂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pYxa2u5f2Jo7cvJDuicB5p
          claim_id: c_Vbbc3Jy9NALpAM1Yw39eTw
          source_id: s_84Yk4HhNPCWNQFY6tuKCt4
          stance: supports
          locator: CBDB:71628
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1686
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

# 王宇樂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宇樂（生于1686年），清人物。明清進士進士，籍贯鍾祥，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 71628） | accepted |
| birth.date | 1686年 | accepted |
| name.primary | 王宇樂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宇樂（CBDB 71628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71628&o=json)
