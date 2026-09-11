---
schema: wang-person/v1
id: p_PgnoAWh3cGCvbB7v53hNcS
status: active
merged_into: null
display_name: 王復
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zTqkqZzSR9fDeTUjB3asNr
        subject_person_id: p_PgnoAWh3cGCvbB7v53hNcS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_udY4gwvpGgjs6ZEEqnfxq7
          claim_id: c_zTqkqZzSR9fDeTUjB3asNr
          source_id: s_4NgZGnBBUC86VSegGA4nCB
          stance: supports
          locator: CBDB:204673
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204673）
          source: &a1
            id: s_4NgZGnBBUC86VSegGA4nCB
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 204673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204673&o=json
            external_identifier: CBDB:204673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.834Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RrfuJadbugJXUuyatSKNd5
        subject_person_id: p_PgnoAWh3cGCvbB7v53hNcS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1398年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ViTuczYKm196MKT4eEzxSZ
          claim_id: c_RrfuJadbugJXUuyatSKNd5
          source_id: s_4NgZGnBBUC86VSegGA4nCB
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
        id: c_KpAY3FcQ8BKEFUftQ2cCLG
        subject_person_id: p_PgnoAWh3cGCvbB7v53hNcS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復（生于1398年），明人物。明清進士進士，籍贯慈溪，入仕進士。（中国历代人物传记资料库 CBDB 204673）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ypVoP8dRn_amqk8x3vsCAl
          claim_id: c_KpAY3FcQ8BKEFUftQ2cCLG
          source_id: s_4NgZGnBBUC86VSegGA4nCB
          stance: supports
          locator: CBDB:204673
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_E7XLA1QLMSB27qLoaVccHv
        subject_person_id: p_8yEkMMZhbwZ7U5KkErHEa1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PgnoAWh3cGCvbB7v53hNcS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aKNB2W8t4x8oH5Bx-Cq3w8
          claim_id: c_E7XLA1QLMSB27qLoaVccHv
          source_id: s_ChM3EnsLAqB6vEggCX84uQ
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第三甲第二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ChM3EnsLAqB6vEggCX84uQ
            source_type: api_record
            title: 中国历代人物传记资料库：王曛（CBDB 322412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322412&o=json
            external_identifier: CBDB:322412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.121Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8yEkMMZhbwZ7U5KkErHEa1
        status: active
        display_name: 王曛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_38Z4eqNn4Dahg_-KkmbAqj
        subject_person_id: p_3B9Fn8g9ftJyrriUZjQ4xY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PgnoAWh3cGCvbB7v53hNcS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZPnPI0uAGOHAL7iMp-MD1m
          claim_id: c_38Z4eqNn4Dahg_-KkmbAqj
          source_id: s_D1n66rCvN3eLFuvPqYUGrr
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第三甲第二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D1n66rCvN3eLFuvPqYUGrr
            source_type: api_record
            title: 中国历代人物传记资料库：王元浩（CBDB 322410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322410&o=json
            external_identifier: CBDB:322410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3B9Fn8g9ftJyrriUZjQ4xY
        status: active
        display_name: 王元浩
        merged_into_person_id: null
    - claim:
        id: c_ln-sPZ3FsV9wB8f0RGnyVM
        subject_person_id: p_b9ACAsw8nfBbFMmGWbKzCn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PgnoAWh3cGCvbB7v53hNcS
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UDsMIxUCI5moYMkdPS-z5g
          claim_id: c_ln-sPZ3FsV9wB8f0RGnyVM
          source_id: s_1E5nkE84bFo1cGuGqBbG14
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第三甲第二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1E5nkE84bFo1cGuGqBbG14
            source_type: api_record
            title: 中国历代人物传记资料库：王桓（CBDB 322411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322411&o=json
            external_identifier: CBDB:322411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_b9ACAsw8nfBbFMmGWbKzCn
        status: active
        display_name: 王桓
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復 | accepted |
| birth.date | 1398年 | accepted |
| bio.summary | 王復（生于1398年），明人物。明清進士進士，籍贯慈溪，入仕進士。（中国历代人物传记资料库 CBDB 204673） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8yEkMMZhbwZ7U5KkErHEa1 | 王曛 | accepted |
| ancestors | p_3B9Fn8g9ftJyrriUZjQ4xY | 王元浩 | accepted |
| ancestors | p_b9ACAsw8nfBbFMmGWbKzCn | 王桓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王復（CBDB 204673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204673&o=json)
- [中国历代人物传记资料库：王桓（CBDB 322411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322411&o=json)
- [中国历代人物传记资料库：王曛（CBDB 322412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322412&o=json)
- [中国历代人物传记资料库：王元浩（CBDB 322410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322410&o=json)
