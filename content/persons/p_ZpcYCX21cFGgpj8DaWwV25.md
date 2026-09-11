---
schema: wang-person/v1
id: p_ZpcYCX21cFGgpj8DaWwV25
status: active
merged_into: null
display_name: 王寮
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e913MatWmQK5bDrX6zwabv
        subject_person_id: p_ZpcYCX21cFGgpj8DaWwV25
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6kDrvBfFoARrmoBwPJx2ex
          claim_id: c_e913MatWmQK5bDrX6zwabv
          source_id: s_MdDQQmnCKToUBLnDYzvFf7
          stance: supports
          locator: CBDB:169311
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169311）
          source: &a1
            id: s_MdDQQmnCKToUBLnDYzvFf7
            source_type: api_record
            title: 中国历代人物传记资料库：王寮（CBDB 169311）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169311&o=json
            external_identifier: CBDB:169311
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.231Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YJ3SqRK3VtXLPBo8YzbG2S
        subject_person_id: p_ZpcYCX21cFGgpj8DaWwV25
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 853年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YqiKE2a3vScUFC6XFer8Yb
          claim_id: c_YJ3SqRK3VtXLPBo8YzbG2S
          source_id: s_MdDQQmnCKToUBLnDYzvFf7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L1d7fVLSC8N8PdtANYifeX
        subject_person_id: p_ZpcYCX21cFGgpj8DaWwV25
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mEfJ4KEaP16L6DQjs2JscD
          claim_id: c_L1d7fVLSC8N8PdtANYifeX
          source_id: s_MdDQQmnCKToUBLnDYzvFf7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sL2GPhHX-T3kcFy7Bm7wJ1
        subject_person_id: p_Lc5T8QMpPxQWjzxvt1ckat
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZpcYCX21cFGgpj8DaWwV25
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MllF5SiogRLZKJ979MMgca
          claim_id: c_sL2GPhHX-T3kcFy7Bm7wJ1
          source_id: s_MdDQQmnCKToUBLnDYzvFf7
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Lc5T8QMpPxQWjzxvt1ckat
        status: active
        display_name: 王全義
        merged_into_person_id: null
  children:
    - claim:
        id: c_nze038Am_SaeW3AZJ5xsh7
        subject_person_id: p_ZpcYCX21cFGgpj8DaWwV25
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4gNLMaQqWEd6Tcr2zT2brF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s_vT3Oq-ZwDGoa5PdeVZBM
          claim_id: c_nze038Am_SaeW3AZJ5xsh7
          source_id: s_DUzV7KbT9MziCZ4BqcdavQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DUzV7KbT9MziCZ4BqcdavQ
            source_type: api_record
            title: 中国历代人物传记资料库：王處直（CBDB 144827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144827&o=json
            external_identifier: CBDB:144827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4gNLMaQqWEd6Tcr2zT2brF
        status: active
        display_name: 王處直
        merged_into_person_id: null
    - claim:
        id: c_Uk0l0CDUc78sDQ9h7_CO6t
        subject_person_id: p_ZpcYCX21cFGgpj8DaWwV25
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wj2Tjigw2Pn6N4Z7KuUvkh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OBbk5yBni-6HX2z3m-OmLe
          claim_id: c_Uk0l0CDUc78sDQ9h7_CO6t
          source_id: s_nSTyC7ijD12rrG7CQB1eA6
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nSTyC7ijD12rrG7CQB1eA6
            source_type: api_record
            title: 中国历代人物传记资料库：王處存（CBDB 169693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169693&o=json
            external_identifier: CBDB:169693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.021Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wj2Tjigw2Pn6N4Z7KuUvkh
        status: active
        display_name: 王處存
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寮 | accepted |
| death.date | 853年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Lc5T8QMpPxQWjzxvt1ckat | 王全義 | accepted |
| children | p_4gNLMaQqWEd6Tcr2zT2brF | 王處直 | accepted |
| children | p_wj2Tjigw2Pn6N4Z7KuUvkh | 王處存 | accepted |

## 外部来源

- [中国历代人物传记资料库：王處存（CBDB 169693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169693&o=json)
- [中国历代人物传记资料库：王處直（CBDB 144827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144827&o=json)
- [中国历代人物传记资料库：王寮（CBDB 169311）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169311&o=json)
