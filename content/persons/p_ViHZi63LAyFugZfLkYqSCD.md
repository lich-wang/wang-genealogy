---
schema: wang-person/v1
id: p_ViHZi63LAyFugZfLkYqSCD
status: active
merged_into: null
display_name: 王伏
cbdb_id: 148930
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gRmmAdo8V7gcHHTUYQmvHp
        subject_person_id: p_ViHZi63LAyFugZfLkYqSCD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伏，唐人物。中国历代人物传记资料库（CBDB）以人物编号 148930 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_XPc1ArcMgTg9KfWGFiZ9jN
          claim_id: c_gRmmAdo8V7gcHHTUYQmvHp
          source_id: s_4ezEcNmaHpMGvzHe4fJg7z
          stance: supports
          locator: CBDB:148930
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_4ezEcNmaHpMGvzHe4fJg7z
            source_type: api_record
            title: 中国历代人物传记资料库：王伏（CBDB 148930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148930&o=json
            external_identifier: CBDB:148930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EykNC7ezienaw1Ao4rFTDk
        subject_person_id: p_ViHZi63LAyFugZfLkYqSCD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gttFtSwLtwDa2M9317aKW1
          claim_id: c_EykNC7ezienaw1Ao4rFTDk
          source_id: s_4ezEcNmaHpMGvzHe4fJg7z
          stance: supports
          locator: CBDB:148930
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_4ezEcNmaHpMGvzHe4fJg7z
            source_type: api_record
            title: 中国历代人物传记资料库：王伏（CBDB 148930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148930&o=json
            external_identifier: CBDB:148930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_hCbd9G6OpUB_ed033zxIja
        subject_person_id: p_ViHZi63LAyFugZfLkYqSCD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z85WJTPGrij2g9bbAXuC1F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1ta2qJwUAf1naHn2dfP51-
          claim_id: c_hCbd9G6OpUB_ed033zxIja
          source_id: s_zwN5pip1vRAi64jNfYfwrw
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tiaolu 19：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zwN5pip1vRAi64jNfYfwrw
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 139750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139750&o=json
            external_identifier: CBDB:139750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.452Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_z85WJTPGrij2g9bbAXuC1F
        status: active
        display_name: 王通
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伏，唐人物。中国历代人物传记资料库（CBDB）以人物编号 148930 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王伏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_z85WJTPGrij2g9bbAXuC1F | 王通 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伏（CBDB 148930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148930&o=json)
- [中国历代人物传记资料库：王通（CBDB 139750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139750&o=json)
