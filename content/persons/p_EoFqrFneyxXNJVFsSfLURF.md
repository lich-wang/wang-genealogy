---
schema: wang-person/v1
id: p_EoFqrFneyxXNJVFsSfLURF
status: active
merged_into: null
display_name: 王仁忠
cbdb_id: 175870
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fxjBsWV3ca4sE83v7yCjsA
        subject_person_id: p_EoFqrFneyxXNJVFsSfLURF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁忠（卒于761年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 175870 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_SbY02LGUfgy0IQbcYSXkCU
          claim_id: c_fxjBsWV3ca4sE83v7yCjsA
          source_id: s_pbh11D74hvBiQqtha4X6jV
          stance: supports
          locator: CBDB:175870
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_pbh11D74hvBiQqtha4X6jV
            source_type: api_record
            title: 中国历代人物传记资料库：王仁忠（CBDB 175870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175870&o=json
            external_identifier: CBDB:175870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_etkUxKZP39iaH8myewxxRQ
        subject_person_id: p_EoFqrFneyxXNJVFsSfLURF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 761年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0761-01-01
            latest: 0761-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1FUCHe3xV6mDqaEmPAZoFR
          claim_id: c_etkUxKZP39iaH8myewxxRQ
          source_id: s_pbh11D74hvBiQqtha4X6jV
          stance: supports
          locator: CBDB:175870
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 761
          source:
            id: s_pbh11D74hvBiQqtha4X6jV
            source_type: api_record
            title: 中国历代人物传记资料库：王仁忠（CBDB 175870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175870&o=json
            external_identifier: CBDB:175870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7pbsEuhoVYUqmoFup34FgB
        subject_person_id: p_EoFqrFneyxXNJVFsSfLURF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_L8Dm8NQEo3Q4HrUQh7WNTC
          claim_id: c_7pbsEuhoVYUqmoFup34FgB
          source_id: s_pbh11D74hvBiQqtha4X6jV
          stance: supports
          locator: CBDB:175870
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 761
          source:
            id: s_pbh11D74hvBiQqtha4X6jV
            source_type: api_record
            title: 中国历代人物传记资料库：王仁忠（CBDB 175870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175870&o=json
            external_identifier: CBDB:175870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iJgAVG3z2SBbGaXmhVL54S
        subject_person_id: p_QkhCaGoZhcyF2De4tN5s15
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_EoFqrFneyxXNJVFsSfLURF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vdec87rNEvftTk1KoxpvAM
          claim_id: c_iJgAVG3z2SBbGaXmhVL54S
          source_id: s_XWWJ8icSstrGKhd5mUjJqm
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_XWWJ8icSstrGKhd5mUjJqm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王文濟（175869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175869&o=json
            external_identifier: CBDB:175869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_QkhCaGoZhcyF2De4tN5s15
        status: active
        display_name: 王文济
        merged_into_person_id: null
  children:
    - claim:
        id: c_Ki1LUEuIW6MWqSkg_HBZKQ
        subject_person_id: p_EoFqrFneyxXNJVFsSfLURF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4LwKm81HesPgBivVeco1an
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mx4A_vr2mgSANeom-Sl0vB
          claim_id: c_Ki1LUEuIW6MWqSkg_HBZKQ
          source_id: s_ExTojhQW1LXt57GnikkmjF
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ExTojhQW1LXt57GnikkmjF
            source_type: api_record
            title: 中国历代人物传记资料库：王嶷（CBDB 175871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175871&o=json
            external_identifier: CBDB:175871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.169Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4LwKm81HesPgBivVeco1an
        status: active
        display_name: 王嶷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仁忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仁忠（卒于761年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 175870 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 761年 | accepted |
| name.primary | 王仁忠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QkhCaGoZhcyF2De4tN5s15 | 王文济 | accepted |
| children | p_4LwKm81HesPgBivVeco1an | 王嶷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁忠（CBDB 175870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175870&o=json)
- [中国历代人物传记资料库：王嶷（CBDB 175871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175871&o=json)
- [CBDB 中国历代人物传记资料库：王文濟（175869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175869&o=json)
