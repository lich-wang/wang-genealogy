---
schema: wang-person/v1
id: p_9t9xEsSkQNveNEN37UF5T9
status: active
merged_into: null
display_name: 王日杏
cbdb_id: 69078
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Gp9ZoGjr3hwiZiR2F1aR4X
        subject_person_id: p_9t9xEsSkQNveNEN37UF5T9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日杏（卒于1773年），清人物。中国历代人物传记资料库（CBDB）以人物编号 69078 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_TIY1jG3ncnNm6oPN3PbARa
          claim_id: c_Gp9ZoGjr3hwiZiR2F1aR4X
          source_id: s_BKsNokYw6ocgdmVdhGA1F5
          stance: supports
          locator: CBDB:69078
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_BKsNokYw6ocgdmVdhGA1F5
            source_type: api_record
            title: 中国历代人物传记资料库：王日杏（CBDB 69078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69078&o=json
            external_identifier: CBDB:69078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Kn6EXvKwNkKB7ssa6TGE3K
        subject_person_id: p_9t9xEsSkQNveNEN37UF5T9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1773年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1773-01-01
            latest: 1773-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DVHNN8qpvsHxqHJi1ZX3Go
          claim_id: c_Kn6EXvKwNkKB7ssa6TGE3K
          source_id: s_BKsNokYw6ocgdmVdhGA1F5
          stance: supports
          locator: CBDB:69078
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1773
          source:
            id: s_BKsNokYw6ocgdmVdhGA1F5
            source_type: api_record
            title: 中国历代人物传记资料库：王日杏（CBDB 69078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69078&o=json
            external_identifier: CBDB:69078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EpJknAK8DrPN6n85hsoctJ
        subject_person_id: p_9t9xEsSkQNveNEN37UF5T9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日杏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_z5Yw472Dw2hE8cED1MBft7
          claim_id: c_EpJknAK8DrPN6n85hsoctJ
          source_id: s_BKsNokYw6ocgdmVdhGA1F5
          stance: supports
          locator: CBDB:69078
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1773
          source:
            id: s_BKsNokYw6ocgdmVdhGA1F5
            source_type: api_record
            title: 中国历代人物传记资料库：王日杏（CBDB 69078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69078&o=json
            external_identifier: CBDB:69078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZrnndE9oY948zDdc8k31uv
        subject_person_id: p_9t9xEsSkQNveNEN37UF5T9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1YSBHW2jxXLTmetsFUjG83
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MFCy1cocldXzFsIp7RQQ_l
          claim_id: c_ZrnndE9oY948zDdc8k31uv
          source_id: s_f6qDAkCA5qPDbWvLe8y7eH
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12775：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_f6qDAkCA5qPDbWvLe8y7eH
            source_type: api_record
            title: 中国历代人物传记资料库：王光顯（CBDB 526688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526688&o=json
            external_identifier: CBDB:526688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_1YSBHW2jxXLTmetsFUjG83
        status: active
        display_name: 王光顯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王日杏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王日杏（卒于1773年），清人物。中国历代人物传记资料库（CBDB）以人物编号 69078 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 1773年 | accepted |
| name.primary | 王日杏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1YSBHW2jxXLTmetsFUjG83 | 王光顯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光顯（CBDB 526688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526688&o=json)
- [中国历代人物传记资料库：王日杏（CBDB 69078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69078&o=json)
