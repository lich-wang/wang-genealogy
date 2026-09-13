---
schema: wang-person/v1
id: p_w6cWAgmTWF9XZ318UHjSya
status: active
merged_into: null
display_name: 王思與
cbdb_id: 274764
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MTHRS3KTvueV26gsSAEDHB
        subject_person_id: p_w6cWAgmTWF9XZ318UHjSya
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思與，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 274764）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_70c91rVlfzbBxgQscRO9wN
          claim_id: c_MTHRS3KTvueV26gsSAEDHB
          source_id: s_yDXtmvV6cnmSiqCVeLo3bN
          stance: supports
          locator: CBDB:274764
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yDXtmvV6cnmSiqCVeLo3bN
            source_type: api_record
            title: 中国历代人物传记资料库：王思與（CBDB 274764）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274764&o=json
            external_identifier: CBDB:274764
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8RKy9r2qaJTJDwePuh1XnR
        subject_person_id: p_w6cWAgmTWF9XZ318UHjSya
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思與
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MFW95WQd7hHsgj2ucP6YN1
          claim_id: c_8RKy9r2qaJTJDwePuh1XnR
          source_id: s_yDXtmvV6cnmSiqCVeLo3bN
          stance: supports
          locator: CBDB:274764
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
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
        id: c_AX0PSc24WcNPmtRDeV_PK9
        subject_person_id: p_w6cWAgmTWF9XZ318UHjSya
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7tdhj3xqs6eFzthKS1AGvP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tkw-y2BNCjDSFZdHBsVjRM
          claim_id: c_AX0PSc24WcNPmtRDeV_PK9
          source_id: s_eR9PHtQEPTH88NL4Vr3m5H
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百四十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eR9PHtQEPTH88NL4Vr3m5H
            source_type: api_record
            title: 中国历代人物传记资料库：王璘（CBDB 198460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198460&o=json
            external_identifier: CBDB:198460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.495Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7tdhj3xqs6eFzthKS1AGvP
        status: active
        display_name: 王璘
        merged_into_person_id: null
  other: []
---

# 王思與

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王思與，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 274764） | accepted |
| name.primary | 王思與 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_7tdhj3xqs6eFzthKS1AGvP | 王璘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璘（CBDB 198460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198460&o=json)
- [中国历代人物传记资料库：王思與（CBDB 274764）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274764&o=json)
