---
schema: wang-person/v1
id: p_qDnNVa92BoXYz45t67oCmJ
status: active
merged_into: null
display_name: 王隥
cbdb_id: 167723
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_11jnVLe9PH5Xjv7VyBL3F3
        subject_person_id: p_qDnNVa92BoXYz45t67oCmJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隥，唐人物。曾任書記。（中国历代人物传记资料库 CBDB 167723）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs__DBwW5tlfQBb9h3X87eHce
          claim_id: c_11jnVLe9PH5Xjv7VyBL3F3
          source_id: s_2K97TkDNwj2oahHxgrHyK2
          stance: supports
          locator: CBDB:167723
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2K97TkDNwj2oahHxgrHyK2
            source_type: api_record
            title: 中国历代人物传记资料库：王隥（CBDB 167723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167723&o=json
            external_identifier: CBDB:167723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8iE2PdozgQbWMRsf7LB6UK
        subject_person_id: p_qDnNVa92BoXYz45t67oCmJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fbbZwKL8wYQpQxcWWNFb3e
          claim_id: c_8iE2PdozgQbWMRsf7LB6UK
          source_id: s_2K97TkDNwj2oahHxgrHyK2
          stance: supports
          locator: CBDB:167723
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_0uWvt7bT4Q1mmK-tR1nViH
        subject_person_id: p_qDnNVa92BoXYz45t67oCmJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uZ4EYk3nbtN3b8LJWgU9Ni
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JLn5qJK80XuuU3yxfysM3D
          claim_id: c_0uWvt7bT4Q1mmK-tR1nViH
          source_id: s_2K97TkDNwj2oahHxgrHyK2
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2K97TkDNwj2oahHxgrHyK2
            source_type: api_record
            title: 中国历代人物传记资料库：王隥（CBDB 167723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167723&o=json
            external_identifier: CBDB:167723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_uZ4EYk3nbtN3b8LJWgU9Ni
        status: active
        display_name: 王令之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_7Tyb5X48VtIwS0GA9fjanN
        subject_person_id: p_qDnNVa92BoXYz45t67oCmJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_H4SeMJgEG3cnaAjWBmtY62
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZTQoyJzgVgdFV1aWt5ReV_
          claim_id: c_7Tyb5X48VtIwS0GA9fjanN
          source_id: s_joJfne8WrwXj7mxUQppnHm
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dazhong79：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_joJfne8WrwXj7mxUQppnHm
            source_type: api_record
            title: 中国历代人物传记资料库：王玉銳（CBDB 143519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143519&o=json
            external_identifier: CBDB:143519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_H4SeMJgEG3cnaAjWBmtY62
        status: active
        display_name: 王玉銳
        merged_into_person_id: null
  other: []
---

# 王隥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王隥，唐人物。曾任書記。（中国历代人物传记资料库 CBDB 167723） | accepted |
| name.primary | 王隥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_uZ4EYk3nbtN3b8LJWgU9Ni | 王令之 | accepted |
| descendants | p_H4SeMJgEG3cnaAjWBmtY62 | 王玉銳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王隥（CBDB 167723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167723&o=json)
- [中国历代人物传记资料库：王玉銳（CBDB 143519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143519&o=json)
