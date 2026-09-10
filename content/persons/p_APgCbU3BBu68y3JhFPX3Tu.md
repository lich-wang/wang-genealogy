---
schema: wang-person/v1
id: p_APgCbU3BBu68y3JhFPX3Tu
status: active
merged_into: null
display_name: 王進
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y1zjF4AXuVCFBXMM8CDuMZ
        subject_person_id: p_APgCbU3BBu68y3JhFPX3Tu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_thyzJ9BN783QDYwxiMkwFh
          claim_id: c_y1zjF4AXuVCFBXMM8CDuMZ
          source_id: s_EBBsfq9eg99MoZF4LfNG3Q
          stance: supports
          locator: CBDB:199096
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199096）
          source: &a1
            id: s_EBBsfq9eg99MoZF4LfNG3Q
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 199096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199096&o=json
            external_identifier: CBDB:199096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.527Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BZuhPn2EMbNYc9Mkoc5Bfe
        subject_person_id: p_APgCbU3BBu68y3JhFPX3Tu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1435年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cqs4hWAB88YS49RAPKSjXh
          claim_id: c_BZuhPn2EMbNYc9Mkoc5Bfe
          source_id: s_EBBsfq9eg99MoZF4LfNG3Q
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
        id: c_9hV3JAWzCurn1ED1h1g9q4
        subject_person_id: p_APgCbU3BBu68y3JhFPX3Tu
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
        - id: cs_5BgEv6tQ2GgFrbvUMTv2NS
          claim_id: c_9hV3JAWzCurn1ED1h1g9q4
          source_id: s_EBBsfq9eg99MoZF4LfNG3Q
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_nwUCqdKViJLpMEVUi6Lo0r
        subject_person_id: p_1fwuWUVpZ9MWwFA3Puza8t
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_APgCbU3BBu68y3JhFPX3Tu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0dcq7THw8YCIjsT4zq2evo
          claim_id: c_nwUCqdKViJLpMEVUi6Lo0r
          source_id: s_Jua3pfJjMmACB6aDwY9knL
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Jua3pfJjMmACB6aDwY9knL
            source_type: api_record
            title: 中国历代人物传记资料库：王友直（CBDB 229763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229763&o=json
            external_identifier: CBDB:229763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1fwuWUVpZ9MWwFA3Puza8t
        status: active
        display_name: 王友直
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進 | accepted |
| birth.date | 1435年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_1fwuWUVpZ9MWwFA3Puza8t | 王友直 | accepted |

## 外部来源

- [中国历代人物传记资料库：王進（CBDB 199096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199096&o=json)
- [中国历代人物传记资料库：王友直（CBDB 229763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229763&o=json)
