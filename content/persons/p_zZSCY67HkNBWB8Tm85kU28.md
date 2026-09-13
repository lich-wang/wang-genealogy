---
schema: wang-person/v1
id: p_zZSCY67HkNBWB8Tm85kU28
status: active
merged_into: null
display_name: 王民質
cbdb_id: 201570
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H9PVkjmxr7EWTeSAmfJSYo
        subject_person_id: p_zZSCY67HkNBWB8Tm85kU28
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民質（生于1477年），明人物。明清進士進士，籍贯應州，入仕進士。（中国历代人物传记资料库 CBDB 201570）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PNtoBfVPrX7iZ-malxpOH3
          claim_id: c_H9PVkjmxr7EWTeSAmfJSYo
          source_id: s_RPaREdM4KAJmkKi4iFVFAy
          stance: supports
          locator: CBDB:201570
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RPaREdM4KAJmkKi4iFVFAy
            source_type: api_record
            title: 中国历代人物传记资料库：王民質（CBDB 201570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201570&o=json
            external_identifier: CBDB:201570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DxqNWsUyr2GCHRQxux48TX
        subject_person_id: p_zZSCY67HkNBWB8Tm85kU28
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1477年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1477-01-01
            latest: 1477-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MajbDd2WatnVsMUmBXQ8TK
          claim_id: c_DxqNWsUyr2GCHRQxux48TX
          source_id: s_RPaREdM4KAJmkKi4iFVFAy
          stance: supports
          locator: CBDB:201570
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1477
          source:
            id: s_RPaREdM4KAJmkKi4iFVFAy
            source_type: api_record
            title: 中国历代人物传记资料库：王民質（CBDB 201570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201570&o=json
            external_identifier: CBDB:201570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zJ7BQZePXDA53E5HdeYxuE
        subject_person_id: p_zZSCY67HkNBWB8Tm85kU28
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民質
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YnN7jGHXyCvqbAxh8QAwMt
          claim_id: c_zJ7BQZePXDA53E5HdeYxuE
          source_id: s_RPaREdM4KAJmkKi4iFVFAy
          stance: supports
          locator: CBDB:201570
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1477
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Yp9YtcmmBWqx8hJ0leURei
        subject_person_id: p_kSC4jKpAH5bDUyzQGm5FXh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zZSCY67HkNBWB8Tm85kU28
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GI5YbRrQKdR_LJEHuoffc_
          claim_id: c_Yp9YtcmmBWqx8hJ0leURei
          source_id: s_wzWm1MZ4FxiPM5qiq3vK9Z
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第八十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wzWm1MZ4FxiPM5qiq3vK9Z
            source_type: api_record
            title: 中国历代人物传记资料库：王顯（CBDB 274509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274509&o=json
            external_identifier: CBDB:274509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kSC4jKpAH5bDUyzQGm5FXh
        status: active
        display_name: 王顯
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王民質

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王民質（生于1477年），明人物。明清進士進士，籍贯應州，入仕進士。（中国历代人物传记资料库 CBDB 201570） | accepted |
| birth.date | 1477年 | accepted |
| name.primary | 王民質 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_kSC4jKpAH5bDUyzQGm5FXh | 王顯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王民質（CBDB 201570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201570&o=json)
- [中国历代人物传记资料库：王顯（CBDB 274509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274509&o=json)
