---
schema: wang-person/v1
id: p_1EatzxCEuA8v7SeSNyZF3y
status: active
merged_into: null
display_name: 王仲方
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UEyFstdDHcUU5gQEjA2HDp
        subject_person_id: p_1EatzxCEuA8v7SeSNyZF3y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲方
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8uKUtqWhA2pSacnaBSiX8Q
          claim_id: c_UEyFstdDHcUU5gQEjA2HDp
          source_id: s_LFSav72YdHRoFFrNfNU1Jf
          stance: supports
          locator: CBDB:690111
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690111）
          source: &a1
            id: s_LFSav72YdHRoFFrNfNU1Jf
            source_type: api_record
            title: 中国历代人物传记资料库：王仲方（CBDB 690111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690111&o=json
            external_identifier: CBDB:690111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.480Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rozG8VYQMSmEA5zCNVZtwh
        subject_person_id: p_1EatzxCEuA8v7SeSNyZF3y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲方，宋人物。籍贯臨城，身份为早卒(未成年而卒)。（中国历代人物传记资料库 CBDB 690111）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oWC4vVEZkv9sDJxHLRJH_v
          claim_id: c_rozG8VYQMSmEA5zCNVZtwh
          source_id: s_LFSav72YdHRoFFrNfNU1Jf
          stance: supports
          locator: CBDB:690111
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XsBxmOSKLt_QvjMj-2g2wj
        subject_person_id: p_5HLAwt21hgN7UKGzKG2BNZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1EatzxCEuA8v7SeSNyZF3y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XqQQdl6jZdeoFCvu4ey9Pq
          claim_id: c_XsBxmOSKLt_QvjMj-2g2wj
          source_id: s_LFSav72YdHRoFFrNfNU1Jf
          stance: supports
          locator: 宋代墓誌輯釋，大宋贈秘書少監王府君（璘）墓誌銘并序：五男
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5HLAwt21hgN7UKGzKG2BNZ
        status: active
        display_name: 王璘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲方

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲方 | accepted |
| bio.summary | 王仲方，宋人物。籍贯臨城，身份为早卒(未成年而卒)。（中国历代人物传记资料库 CBDB 690111） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5HLAwt21hgN7UKGzKG2BNZ | 王璘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲方（CBDB 690111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690111&o=json)
