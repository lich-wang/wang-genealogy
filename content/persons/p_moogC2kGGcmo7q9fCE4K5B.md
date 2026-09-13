---
schema: wang-person/v1
id: p_moogC2kGGcmo7q9fCE4K5B
status: active
merged_into: null
display_name: 王紹孚
cbdb_id: 185013
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f4eDCLKdjA8m8EtXpxymJQ
        subject_person_id: p_moogC2kGGcmo7q9fCE4K5B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹孚（卒于908年），唐人物。籍贯晉陽，曾任大將軍。（中国历代人物传记资料库 CBDB 185013）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_bfbU1DgJsF7PhydTXXU_-i
          claim_id: c_f4eDCLKdjA8m8EtXpxymJQ
          source_id: s_MudoCqNJh3U2q62vnjihHN
          stance: supports
          locator: CBDB:185013
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MudoCqNJh3U2q62vnjihHN
            source_type: api_record
            title: 中国历代人物传记资料库：王紹孚（CBDB 185013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185013&o=json
            external_identifier: CBDB:185013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EUCMG3k3j6875u99CzAqVG
        subject_person_id: p_moogC2kGGcmo7q9fCE4K5B
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 908年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0908-01-01
            latest: 0908-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CB7MVpSQu4E68vbR55EVvQ
          claim_id: c_EUCMG3k3j6875u99CzAqVG
          source_id: s_MudoCqNJh3U2q62vnjihHN
          stance: supports
          locator: CBDB:185013
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 908
          source:
            id: s_MudoCqNJh3U2q62vnjihHN
            source_type: api_record
            title: 中国历代人物传记资料库：王紹孚（CBDB 185013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185013&o=json
            external_identifier: CBDB:185013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1A2JtVngQr9q5AvS3vEWik
        subject_person_id: p_moogC2kGGcmo7q9fCE4K5B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹孚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LBd4g3SEyR92D3nTupEakp
          claim_id: c_1A2JtVngQr9q5AvS3vEWik
          source_id: s_MudoCqNJh3U2q62vnjihHN
          stance: supports
          locator: CBDB:185013
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 908
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2xlLEpS1Ag-rDJ10RrT2jW
        subject_person_id: p_zQ4D2DUAqvMbXPkja89cdD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_moogC2kGGcmo7q9fCE4K5B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RkVYZ_W33yhCzGG1Hl6WHV
          claim_id: c_2xlLEpS1Ag-rDJ10RrT2jW
          source_id: s_MudoCqNJh3U2q62vnjihHN
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MudoCqNJh3U2q62vnjihHN
            source_type: api_record
            title: 中国历代人物传记资料库：王紹孚（CBDB 185013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185013&o=json
            external_identifier: CBDB:185013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_zQ4D2DUAqvMbXPkja89cdD
        status: active
        display_name: 王元逵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紹孚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王紹孚（卒于908年），唐人物。籍贯晉陽，曾任大將軍。（中国历代人物传记资料库 CBDB 185013） | accepted |
| death.date | 908年 | accepted |
| name.primary | 王紹孚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zQ4D2DUAqvMbXPkja89cdD | 王元逵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹孚（CBDB 185013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185013&o=json)
