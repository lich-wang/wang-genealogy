---
schema: wang-person/v1
id: p_ijV1RxGZA58ZeR4UR2Bv2N
status: active
merged_into: null
display_name: 王質
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ua8FufrQa6W9rVN8UNErfz
        subject_person_id: p_ijV1RxGZA58ZeR4UR2Bv2N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王質
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wL7eUnSXhLNNcHSQhPauBW
          claim_id: c_ua8FufrQa6W9rVN8UNErfz
          source_id: s_PzArfty1MjxWVpLQvBjNTz
          stance: supports
          locator: CBDB:273473
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273473）
          source: &a1
            id: s_PzArfty1MjxWVpLQvBjNTz
            source_type: api_record
            title: 中国历代人物传记资料库：王質（CBDB 273473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273473&o=json
            external_identifier: CBDB:273473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yKBNPdCAEpWXkMeS8NjrMR
        subject_person_id: p_ijV1RxGZA58ZeR4UR2Bv2N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王質，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 273473）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qgfBqP80xZVziJjvszlHZL
          claim_id: c_yKBNPdCAEpWXkMeS8NjrMR
          source_id: s_PzArfty1MjxWVpLQvBjNTz
          stance: supports
          locator: CBDB:273473
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_iwxbf4AOfSCso4TPZgpwPb
        subject_person_id: p_ijV1RxGZA58ZeR4UR2Bv2N
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PDcj7Rfbw3Szei1bcyFtNk
          claim_id: c_iwxbf4AOfSCso4TPZgpwPb
          source_id: s_8DtRzDxXopvpFicBdQg4r9
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第八十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8DtRzDxXopvpFicBdQg4r9
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 201503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201503&o=json
            external_identifier: CBDB:201503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.679Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2Fu5oCqGVWkUyo9rZxcW5L
        status: active
        display_name: 王忠
        merged_into_person_id: null
  other: []
---

# 王質

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王質 | accepted |
| bio.summary | 王質，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 273473） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2Fu5oCqGVWkUyo9rZxcW5L | 王忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王質（CBDB 273473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273473&o=json)
- [中国历代人物传记资料库：王忠（CBDB 201503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201503&o=json)
