---
schema: wang-person/v1
id: p_yueT28KmtQMkrhqxZNWfyB
status: active
merged_into: null
display_name: 王張顯
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TvemYMxWZqmBs68TdrVJnP
        subject_person_id: p_yueT28KmtQMkrhqxZNWfyB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王張顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KxXYV4brvffrjFF9szH85P
          claim_id: c_TvemYMxWZqmBs68TdrVJnP
          source_id: s_How8MD6Cy7qte4QGiWLXFF
          stance: supports
          locator: CBDB:690954
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690954）
          source: &a1
            id: s_How8MD6Cy7qte4QGiWLXFF
            source_type: api_record
            title: 中国历代人物传记资料库：王張顯（CBDB 690954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690954&o=json
            external_identifier: CBDB:690954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xvut6aCziyMKCgnPspStC2
        subject_person_id: p_yueT28KmtQMkrhqxZNWfyB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_32bP792beF3u9ev83w5FJG
          claim_id: c_Xvut6aCziyMKCgnPspStC2
          source_id: s_How8MD6Cy7qte4QGiWLXFF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_4GLAI3ACZEFbtd_idMH_gI
        subject_person_id: p_yueT28KmtQMkrhqxZNWfyB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QeKezjrqjZ3pGuS4yx8R36
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hWKnxaHf4mfYhDfjEcPuWX
          claim_id: c_4GLAI3ACZEFbtd_idMH_gI
          source_id: s_FUpRVa8DUJPsKMfr5AoV61
          stance: supports
          locator: 嘉慶黟縣志，lgid=1166267：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FUpRVa8DUJPsKMfr5AoV61
            source_type: api_record
            title: 中国历代人物传记资料库：王大度（CBDB 690956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690956&o=json
            external_identifier: CBDB:690956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QeKezjrqjZ3pGuS4yx8R36
        status: active
        display_name: 王大度
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王張顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王張顯 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_QeKezjrqjZ3pGuS4yx8R36 | 王大度 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大度（CBDB 690956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690956&o=json)
- [中国历代人物传记资料库：王張顯（CBDB 690954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690954&o=json)
