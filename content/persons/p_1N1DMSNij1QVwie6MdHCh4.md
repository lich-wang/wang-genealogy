---
schema: wang-person/v1
id: p_1N1DMSNij1QVwie6MdHCh4
status: active
merged_into: null
display_name: 王士巽
cbdb_id: 244941
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8TWcYdbiDm5vCDxy1uXJJf
        subject_person_id: p_1N1DMSNij1QVwie6MdHCh4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士巽，明人物。景泰二年進士。（中国历代人物传记资料库 CBDB 244941）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_WP3AOuVK-sJLAxodGVpAHt
          claim_id: c_8TWcYdbiDm5vCDxy1uXJJf
          source_id: s_Mm8A7TJPHxWeuqE6KS3rPv
          stance: supports
          locator: CBDB:244941
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Mm8A7TJPHxWeuqE6KS3rPv
            source_type: api_record
            title: 中国历代人物传记资料库：王士巽（CBDB 244941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244941&o=json
            external_identifier: CBDB:244941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cL4mP5K6diPsSZEbfNa6Yr
        subject_person_id: p_1N1DMSNij1QVwie6MdHCh4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士巽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_57a868k7nyjASoCnkbUfNM
          claim_id: c_cL4mP5K6diPsSZEbfNa6Yr
          source_id: s_Mm8A7TJPHxWeuqE6KS3rPv
          stance: supports
          locator: CBDB:244941
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
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
        id: c_UcXIwBpuHKFs5yLeV2Yr4Y
        subject_person_id: p_1N1DMSNij1QVwie6MdHCh4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CJ4VyLGZZgJRk8JF6RcE65
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ld-Epd6lcvlU6C0E32VJXo
          claim_id: c_UcXIwBpuHKFs5yLeV2Yr4Y
          source_id: s_DE9Es8tbGUmsydxcFJxzYj
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第九十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DE9Es8tbGUmsydxcFJxzYj
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 198242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198242&o=json
            external_identifier: CBDB:198242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.475Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CJ4VyLGZZgJRk8JF6RcE65
        status: active
        display_name: 王儀
        merged_into_person_id: null
  other: []
---

# 王士巽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士巽，明人物。景泰二年進士。（中国历代人物传记资料库 CBDB 244941） | accepted |
| name.primary | 王士巽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_CJ4VyLGZZgJRk8JF6RcE65 | 王儀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士巽（CBDB 244941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244941&o=json)
- [中国历代人物传记资料库：王儀（CBDB 198242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198242&o=json)
