---
schema: wang-person/v1
id: p_WMa1QLHmNSGif1KrYC4BMm
status: active
merged_into: null
display_name: 王守儉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2oB44qQLRF9gshZXBnSQo7
        subject_person_id: p_WMa1QLHmNSGif1KrYC4BMm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守儉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1YbmF5bb2kqwEU9K2TKn4N
          claim_id: c_2oB44qQLRF9gshZXBnSQo7
          source_id: s_JZrxiBVDkyy1J5WpTGEWKr
          stance: supports
          locator: CBDB:191811
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191811）
          source: &a1
            id: s_JZrxiBVDkyy1J5WpTGEWKr
            source_type: api_record
            title: 中国历代人物传记资料库：王守儉（CBDB 191811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191811&o=json
            external_identifier: CBDB:191811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9PQAJuC7yptgE6Zu166Fpn
        subject_person_id: p_WMa1QLHmNSGif1KrYC4BMm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 730年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E8Q94N4yFMuUbWL5KrwgZi
          claim_id: c_9PQAJuC7yptgE6Zu166Fpn
          source_id: s_JZrxiBVDkyy1J5WpTGEWKr
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
        id: c_AChxTPoUdKyTbnXCnpPXZt
        subject_person_id: p_WMa1QLHmNSGif1KrYC4BMm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守儉（卒于730年），唐人物。籍贯滑州，曾任右散騎常侍。（中国历代人物传记资料库 CBDB 191811）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jIUH2Mz7WiDvLmjAaCEnw3
          claim_id: c_AChxTPoUdKyTbnXCnpPXZt
          source_id: s_JZrxiBVDkyy1J5WpTGEWKr
          stance: supports
          locator: CBDB:191811
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_m8HRm5S7llycr42Dt_DiEU
        subject_person_id: p_WMa1QLHmNSGif1KrYC4BMm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mLAEZyG4ZLQUsxwAs3FBPE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ufw__ThwAxcJpp2lV2bZoM
          claim_id: c_m8HRm5S7llycr42Dt_DiEU
          source_id: s_ZUeWeM86Jgrao9XvXgmBCN
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZUeWeM86Jgrao9XvXgmBCN
            source_type: api_record
            title: 中国历代人物传记资料库：王承璟（CBDB 191810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191810&o=json
            external_identifier: CBDB:191810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mLAEZyG4ZLQUsxwAs3FBPE
        status: active
        display_name: 王承璟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守儉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守儉 | accepted |
| death.date | 730年 | accepted |
| bio.summary | 王守儉（卒于730年），唐人物。籍贯滑州，曾任右散騎常侍。（中国历代人物传记资料库 CBDB 191811） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_mLAEZyG4ZLQUsxwAs3FBPE | 王承璟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承璟（CBDB 191810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191810&o=json)
- [中国历代人物传记资料库：王守儉（CBDB 191811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191811&o=json)
