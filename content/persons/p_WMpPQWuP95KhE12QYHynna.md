---
schema: wang-person/v1
id: p_WMpPQWuP95KhE12QYHynna
status: active
merged_into: null
display_name: 王仁政
cbdb_id: 231323
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JJHBBnN1iVgbVURr4QKdn6
        subject_person_id: p_WMpPQWuP95KhE12QYHynna
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁政，明人物。宣德八年進士。（中国历代人物传记资料库 CBDB 231323）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_IplgpNS3pSmDroLqHmbhHN
          claim_id: c_JJHBBnN1iVgbVURr4QKdn6
          source_id: s_v8xci4wiXLjKyDzBCdhTTu
          stance: supports
          locator: CBDB:231323
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_v8xci4wiXLjKyDzBCdhTTu
            source_type: api_record
            title: 中国历代人物传记资料库：王仁政（CBDB 231323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231323&o=json
            external_identifier: CBDB:231323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4ZZ2GhGC9ytb62GjJCEy8E
        subject_person_id: p_WMpPQWuP95KhE12QYHynna
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LrcJVCzJFYBJxLwdNCP5f4
          claim_id: c_4ZZ2GhGC9ytb62GjJCEy8E
          source_id: s_v8xci4wiXLjKyDzBCdhTTu
          stance: supports
          locator: CBDB:231323
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_5JOiCdNiWuhgc3vc81TqHt
        subject_person_id: p_WMpPQWuP95KhE12QYHynna
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VVkAYnQtUyWdWCpmXePbBp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eEYI1xYt4Fo85Lumuw6dOn
          claim_id: c_5JOiCdNiWuhgc3vc81TqHt
          source_id: s_v8xci4wiXLjKyDzBCdhTTu
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第三甲第十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v8xci4wiXLjKyDzBCdhTTu
            source_type: api_record
            title: 中国历代人物传记资料库：王仁政（CBDB 231323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231323&o=json
            external_identifier: CBDB:231323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_VVkAYnQtUyWdWCpmXePbBp
        status: active
        display_name: 王鐸
        merged_into_person_id: null
  other: []
---

# 王仁政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仁政，明人物。宣德八年進士。（中国历代人物传记资料库 CBDB 231323） | accepted |
| name.primary | 王仁政 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_VVkAYnQtUyWdWCpmXePbBp | 王鐸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁政（CBDB 231323）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231323&o=json)
