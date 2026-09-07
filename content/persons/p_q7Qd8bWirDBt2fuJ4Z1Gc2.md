---
schema: wang-person/v1
id: p_q7Qd8bWirDBt2fuJ4Z1Gc2
status: active
merged_into: null
display_name: 王氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j4K3oGc8gL0BKNhkZ0MGwk
        subject_person_id: p_q7Qd8bWirDBt2fuJ4Z1Gc2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏（卒于655年），唐人物。CBDB 记录其入仕记录为冊封爲妃嬪，曾任皇后、皇太子妃。中国历代人物传记资料库（CBDB）以人物编号 444806 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Vv4TRw5_l9D09nqwHdkTq
          claim_id: c_j4K3oGc8gL0BKNhkZ0MGwk
          source_id: s_LTdVBZPPZSBmRenkYm3fQF
          stance: supports
          locator: CBDB:444806
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LTdVBZPPZSBmRenkYm3fQF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（444806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444806&o=json
            external_identifier: CBDB:444806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:00:00.115Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ivaUQnqaotnhHqzJfS7JS1
        subject_person_id: p_q7Qd8bWirDBt2fuJ4Z1Gc2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 655年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0655-01-01
            latest: 0655-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P3vevrKNrXGGFXQtJ13CZB
          claim_id: c_ivaUQnqaotnhHqzJfS7JS1
          source_id: s_LTdVBZPPZSBmRenkYm3fQF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GNzquxYrUvoF85GrrkpBJb
        subject_person_id: p_q7Qd8bWirDBt2fuJ4Z1Gc2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_95gEAovRi4LYK9JqkJ8YtP
          claim_id: c_GNzquxYrUvoF85GrrkpBJb
          source_id: s_LTdVBZPPZSBmRenkYm3fQF
          stance: supports
          locator: CBDB:444806
          quotation: null
          interpretation_note: null
          source:
            id: s_LTdVBZPPZSBmRenkYm3fQF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（444806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444806&o=json
            external_identifier: CBDB:444806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:00:00.115Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5cHsRNzCaXuZDN82zHqMfE
        subject_person_id: p_pw5PbWZzfQQNgNYXwrhd1t
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_q7Qd8bWirDBt2fuJ4Z1Gc2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_emkh3N6J3DqsLpkaSXFs78
          claim_id: c_5cHsRNzCaXuZDN82zHqMfE
          source_id: s_qnG6ovBLWZk7x5pVMmh3SK
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：舊唐書
          source:
            id: s_qnG6ovBLWZk7x5pVMmh3SK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仁祐（378895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378895&o=json
            external_identifier: CBDB:378895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:39:52.262Z
            metadata_json: null
        - id: cs_G29HB9t9FT5M8jEm1QSDbh
          claim_id: c_5cHsRNzCaXuZDN82zHqMfE
          source_id: s_LTdVBZPPZSBmRenkYm3fQF
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：舊唐書
          source:
            id: s_LTdVBZPPZSBmRenkYm3fQF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（444806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444806&o=json
            external_identifier: CBDB:444806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:00:00.115Z
            metadata_json: null
      object_person:
        id: p_pw5PbWZzfQQNgNYXwrhd1t
        status: active
        display_name: 王仁祐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_x3HCNgTyWgZ3U4V5dQPGD3
        subject_person_id: p_FX11CB9tTLVt3GMiHYtDmL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_q7Qd8bWirDBt2fuJ4Z1Gc2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_h3JwsXKZAtSmcnTvJgMc6r
          claim_id: c_x3HCNgTyWgZ3U4V5dQPGD3
          source_id: s_LTdVBZPPZSBmRenkYm3fQF
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：舊唐書
          source:
            id: s_LTdVBZPPZSBmRenkYm3fQF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（444806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444806&o=json
            external_identifier: CBDB:444806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:00:00.115Z
            metadata_json: null
      object_person:
        id: p_FX11CB9tTLVt3GMiHYtDmL
        status: active
        display_name: 唐高宗
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氏（卒于655年），唐人物。CBDB 记录其入仕记录为冊封爲妃嬪，曾任皇后、皇太子妃。中国历代人物传记资料库（CBDB）以人物编号 444806 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 655年 | accepted |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pw5PbWZzfQQNgNYXwrhd1t | 王仁祐 | accepted |
| spouses | p_FX11CB9tTLVt3GMiHYtDmL | 唐高宗 | accepted |

## 外部来源

- [CBDB 中国历代人物传记资料库：王仁祐（378895）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378895&o=json)
- [CBDB 中国历代人物传记资料库：王氏（444806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444806&o=json)
