---
schema: wang-person/v1
id: p_CfuPVhQbMWC9BHasnXLGgd
status: active
merged_into: null
display_name: 王叔異
cbdb_id: 185876
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PUTBzJtE41HXySFGMY6Khi
        subject_person_id: p_CfuPVhQbMWC9BHasnXLGgd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔異（卒于844年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 185876 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_6zAlM0AZ7C02K0VCBQDxGf
          claim_id: c_PUTBzJtE41HXySFGMY6Khi
          source_id: s_XY2VgDZCpY1yTriBhhJnoT
          stance: supports
          locator: CBDB:185876
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_XY2VgDZCpY1yTriBhhJnoT
            source_type: api_record
            title: 中国历代人物传记资料库：王叔異（CBDB 185876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185876&o=json
            external_identifier: CBDB:185876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_E6QfjxW9z7J83kxRUmQhT8
        subject_person_id: p_CfuPVhQbMWC9BHasnXLGgd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 844年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0844-01-01
            latest: 0844-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PQ72KpovaQVkb74qK3zqEF
          claim_id: c_E6QfjxW9z7J83kxRUmQhT8
          source_id: s_XY2VgDZCpY1yTriBhhJnoT
          stance: supports
          locator: CBDB:185876
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 844
          source:
            id: s_XY2VgDZCpY1yTriBhhJnoT
            source_type: api_record
            title: 中国历代人物传记资料库：王叔異（CBDB 185876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185876&o=json
            external_identifier: CBDB:185876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vtWMytmpWE3No3DQZMeYkq
        subject_person_id: p_CfuPVhQbMWC9BHasnXLGgd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔異
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Y2DJaLqZvWzpw8qBGc2xJP
          claim_id: c_vtWMytmpWE3No3DQZMeYkq
          source_id: s_XY2VgDZCpY1yTriBhhJnoT
          stance: supports
          locator: CBDB:185876
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 844
          source:
            id: s_XY2VgDZCpY1yTriBhhJnoT
            source_type: api_record
            title: 中国历代人物传记资料库：王叔異（CBDB 185876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185876&o=json
            external_identifier: CBDB:185876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c__w5xF14sUssz_TPs5EA-Ug
        subject_person_id: p_CfuPVhQbMWC9BHasnXLGgd
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_u1F3KQF49HGXMNHFoibL1K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oYdMFrDhxTFOLuijquaCX3
          claim_id: c__w5xF14sUssz_TPs5EA-Ug
          source_id: s_gI_oAlBSIqCQ37EFniZVzF
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gI_oAlBSIqCQ37EFniZVzF
            source_type: api_record
            title: 中国历代人物传记资料库：全氏(王叔異妻)（CBDB 145340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145340&o=json
            external_identifier: CBDB:145340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_u1F3KQF49HGXMNHFoibL1K
        status: active
        display_name: 全氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王叔異

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王叔異（卒于844年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 185876 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 844年 | accepted |
| name.primary | 王叔異 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_u1F3KQF49HGXMNHFoibL1K | 全氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：全氏(王叔異妻)（CBDB 145340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145340&o=json)
- [中国历代人物传记资料库：王叔異（CBDB 185876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185876&o=json)
