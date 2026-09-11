---
schema: wang-person/v1
id: p_oXNXhcmP3pgs4EeZNT7tYq
status: active
merged_into: null
display_name: 王篆
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_61uWpk43HThDEy9CpqE6HR
        subject_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王篆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bYVqdBaAqmAZSzTe7xKnn1
          claim_id: c_61uWpk43HThDEy9CpqE6HR
          source_id: s_Na2wbX6AVZxBfFuDJULbnZ
          stance: supports
          locator: CBDB:205090
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205090）
          source: &a1
            id: s_Na2wbX6AVZxBfFuDJULbnZ
            source_type: api_record
            title: 中国历代人物传记资料库：王篆（CBDB 205090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205090&o=json
            external_identifier: CBDB:205090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1kKuSHNL6Tk84LRg8bP9DQ
        subject_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1532年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P8N1QVRe8rjt3n51TMPRgZ
          claim_id: c_1kKuSHNL6Tk84LRg8bP9DQ
          source_id: s_Na2wbX6AVZxBfFuDJULbnZ
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
        id: c_ftzFY5SEXxz6znD6s4cxny
        subject_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王篆（生于1532年），明人物。明清進士進士，籍贯夷陵州，入仕進士。（中国历代人物传记资料库 CBDB 205090）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zCIYRrf-xcWxLfLKuQbJKc
          claim_id: c_ftzFY5SEXxz6znD6s4cxny
          source_id: s_Na2wbX6AVZxBfFuDJULbnZ
          stance: supports
          locator: CBDB:205090
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3CiTeJ3Vbu0_uP89Xq3w5I
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2f2eeKcOTCn4c-nu-QD76u
          claim_id: c_3CiTeJ3Vbu0_uP89Xq3w5I
          source_id: s_1SkpxRiqFu3c6zkjxMZfv3
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第九十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1SkpxRiqFu3c6zkjxMZfv3
            source_type: api_record
            title: 中国历代人物传记资料库：王良策（CBDB 328155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328155&o=json
            external_identifier: CBDB:328155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_D9N98oB92wT9B2XW2TfNE4
        status: active
        display_name: 王良策
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c__eoLL8z5-54xP-hNgDSBHx
        subject_person_id: p_6nYBhpCbadtLK7Qb2JDrdz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gJKj1j6Z29TO8bq14Bw7Ex
          claim_id: c__eoLL8z5-54xP-hNgDSBHx
          source_id: s_m3FB6rL8Mfe15DRQD2E95m
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第九十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_m3FB6rL8Mfe15DRQD2E95m
            source_type: api_record
            title: 中国历代人物传记资料库：王璲（CBDB 328154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328154&o=json
            external_identifier: CBDB:328154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6nYBhpCbadtLK7Qb2JDrdz
        status: active
        display_name: 王璲
        merged_into_person_id: null
    - claim:
        id: c_TqiIKHJDdFCeFDyjjiINes
        subject_person_id: p_dLJ7sEAxdkznybwp8rHiXD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qdHdhCS6X4C-wwlWkePup-
          claim_id: c_TqiIKHJDdFCeFDyjjiINes
          source_id: s_gDm2Q1yV66T3DMexL9bVhe
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第九十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gDm2Q1yV66T3DMexL9bVhe
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 328152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328152&o=json
            external_identifier: CBDB:328152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dLJ7sEAxdkznybwp8rHiXD
        status: active
        display_name: 王傑
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王篆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王篆 | accepted |
| birth.date | 1532年 | accepted |
| bio.summary | 王篆（生于1532年），明人物。明清進士進士，籍贯夷陵州，入仕進士。（中国历代人物传记资料库 CBDB 205090） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_D9N98oB92wT9B2XW2TfNE4 | 王良策 | accepted |
| ancestors | p_6nYBhpCbadtLK7Qb2JDrdz | 王璲 | accepted |
| ancestors | p_dLJ7sEAxdkznybwp8rHiXD | 王傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 328152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328152&o=json)
- [中国历代人物传记资料库：王良策（CBDB 328155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328155&o=json)
- [中国历代人物传记资料库：王璲（CBDB 328154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328154&o=json)
- [中国历代人物传记资料库：王篆（CBDB 205090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205090&o=json)
